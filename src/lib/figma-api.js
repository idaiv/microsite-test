import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_DIR = path.join(__dirname, '../../.figma-cache');
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

class FigmaAPI {
  constructor(accessToken) {
    if (!accessToken) {
      throw new Error('Figma access token is required');
    }
    this.accessToken = accessToken;
    this.baseURL = 'https://api.figma.com/v1';
  }

  async ensureCacheDir() {
    try {
      await fs.mkdir(CACHE_DIR, { recursive: true });
    } catch (error) {
      console.error('Error creating cache directory:', error);
    }
  }

  async getCachedData(cacheKey) {
    try {
      const cachePath = path.join(CACHE_DIR, `${cacheKey}.json`);
      const stats = await fs.stat(cachePath);
      const now = Date.now();
      
      if (now - stats.mtime.getTime() < CACHE_DURATION) {
        const data = await fs.readFile(cachePath, 'utf-8');
        return JSON.parse(data);
      }
    } catch (error) {
      // Cache miss or error, will fetch fresh data
    }
    return null;
  }

  async setCachedData(cacheKey, data) {
    try {
      await this.ensureCacheDir();
      const cachePath = path.join(CACHE_DIR, `${cacheKey}.json`);
      await fs.writeFile(cachePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error writing cache:', error);
    }
  }

  async makeRequest(endpoint) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      headers: {
        'X-Figma-Token': this.accessToken,
      },
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  async getFile(fileId, options = {}) {
    const cacheKey = `file-${fileId}`;
    const cached = await this.getCachedData(cacheKey);
    
    if (cached && !options.skipCache) {
      console.log('Using cached Figma file data');
      return cached;
    }

    console.log('Fetching fresh Figma file data...');
    const data = await this.makeRequest(`/files/${fileId}`);
    await this.setCachedData(cacheKey, data);
    return data;
  }

  async getImages(fileId, nodeIds = [], options = {}) {
    const { format = 'png', scale = 2 } = options;
    const cacheKey = `images-${fileId}-${nodeIds.join('-')}-${format}-${scale}`;
    const cached = await this.getCachedData(cacheKey);
    
    if (cached && !options.skipCache) {
      console.log('Using cached Figma images');
      return cached;
    }

    console.log('Fetching fresh Figma images...');
    const params = new URLSearchParams({
      format,
      scale: scale.toString(),
    });

    if (nodeIds.length > 0) {
      params.append('ids', nodeIds.join(','));
    }

    const data = await this.makeRequest(`/images/${fileId}?${params}`);
    await this.setCachedData(cacheKey, data);
    return data;
  }

  async getFileNodes(fileId, nodeIds = []) {
    if (nodeIds.length === 0) {
      throw new Error('Node IDs are required');
    }

    const cacheKey = `nodes-${fileId}-${nodeIds.join('-')}`;
    const cached = await this.getCachedData(cacheKey);
    
    if (cached) {
      console.log('Using cached Figma nodes data');
      return cached;
    }

    console.log('Fetching fresh Figma nodes data...');
    const params = new URLSearchParams({
      ids: nodeIds.join(','),
    });

    const data = await this.makeRequest(`/files/${fileId}/nodes?${params}`);
    await this.setCachedData(cacheKey, data);
    return data;
  }

  async downloadImage(url, outputPath) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    await fs.writeFile(outputPath, Buffer.from(buffer));
    console.log(`Image saved to: ${outputPath}`);
  }

  async exportAssets(fileId, nodeIds, outputDir = 'public/figma-assets') {
    await fs.mkdir(outputDir, { recursive: true });
    
    const images = await this.getImages(fileId, nodeIds);
    const downloads = [];

    for (const [nodeId, url] of Object.entries(images.images)) {
      const filename = `${nodeId.replace(':', '-')}.png`;
      const outputPath = path.join(outputDir, filename);
      
      downloads.push({
        nodeId,
        filename,
        path: outputPath,
        url,
      });

      await this.downloadImage(url, outputPath);
    }

    return downloads;
  }
}

export default FigmaAPI;