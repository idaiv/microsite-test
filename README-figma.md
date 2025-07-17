# Figma Integration Guide

This project includes Figma API integration to sync design assets directly from your Figma files.

## Setup

1. **Get your Figma Personal Access Token:**
   - Go to Figma → Account Settings
   - Under "Personal access tokens", create a new token
   - Copy the token (you'll only see it once!)

2. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Replace `your-figma-personal-access-token-here` with your actual token
   - The file ID and node IDs are already set from your Figma URL

3. **Install dependencies:**
   ```bash
   npm install dotenv
   ```

## Usage

### Sync Figma Assets

Run the sync script to download assets from Figma:

```bash
node scripts/sync-figma.js
```

This will:
- Connect to your Figma file
- Download the specified frame/component (node 27:35)
- Save images to `public/figma-assets/`
- Cache responses to avoid hitting API limits

### In Your Astro Components

You can use the downloaded assets in your components:

```jsx
<img src="/figma-assets/27-35.png" alt="Homepage design" />
```

### Programmatic Usage

```javascript
import FigmaAPI from '../lib/figma-api.js';

const figma = new FigmaAPI(process.env.FIGMA_ACCESS_TOKEN);

// Get file data
const file = await figma.getFile('D9pBjzjrgwHn6wVXQMM1RI');

// Export specific nodes as images
const images = await figma.getImages('D9pBjzjrgwHn6wVXQMM1RI', ['27:35']);

// Download and save assets
const exports = await figma.exportAssets('D9pBjzjrgwHn6wVXQMM1RI', ['27:35']);
```

## API Methods

- `getFile(fileId)` - Get full file structure and metadata
- `getImages(fileId, nodeIds)` - Get image URLs for specific nodes
- `getFileNodes(fileId, nodeIds)` - Get detailed node information
- `exportAssets(fileId, nodeIds, outputDir)` - Download and save images locally

## Caching

The API client automatically caches responses for 1 hour in `.figma-cache/` to:
- Reduce API calls
- Speed up development
- Avoid rate limits

To force fresh data, pass `{ skipCache: true }` to any method.

## Finding Node IDs

1. In Figma, right-click on any frame or component
2. Select "Copy link"
3. The URL contains the node ID after `node-id=`
   - Example: `node-id=27-35` → Node ID is `27:35` (replace `-` with `:`)

## Notes

- The Figma API has rate limits (no official numbers, but be reasonable)
- Exported images are PNGs at 2x scale by default
- The `.figma-cache/` directory is git-ignored
- Never commit your access token!