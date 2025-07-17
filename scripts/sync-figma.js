import 'dotenv/config';
import FigmaAPI from '../src/lib/figma-api.js';

async function syncFigmaAssets() {
  const accessToken = process.env.FIGMA_ACCESS_TOKEN;
  const fileId = process.env.FIGMA_FILE_ID;
  const nodeIds = process.env.FIGMA_NODE_IDS?.split(',').map(id => id.trim()) || [];

  if (!accessToken || !fileId) {
    console.error('Missing required environment variables:');
    console.error('- FIGMA_ACCESS_TOKEN');
    console.error('- FIGMA_FILE_ID');
    console.error('\nPlease copy .env.example to .env and fill in your values.');
    process.exit(1);
  }

  try {
    const figma = new FigmaAPI(accessToken);
    
    // Get file information
    console.log(`\nFetching Figma file: ${fileId}`);
    const file = await figma.getFile(fileId);
    console.log(`File name: ${file.name}`);
    console.log(`Last modified: ${file.lastModified}`);

    // Export specific nodes or all exportable assets
    if (nodeIds.length > 0) {
      console.log(`\nExporting ${nodeIds.length} specific nodes...`);
      const exports = await figma.exportAssets(fileId, nodeIds);
      
      console.log('\nExported assets:');
      exports.forEach(({ nodeId, filename, path }) => {
        console.log(`- ${nodeId} → ${filename}`);
      });
    } else {
      console.log('\nNo specific node IDs provided.');
      console.log('To export specific components, add FIGMA_NODE_IDS to your .env file.');
      console.log('Example: FIGMA_NODE_IDS=1:2,1:3,1:4');
      
      // Optionally, show available pages/frames
      console.log('\nAvailable pages in your Figma file:');
      file.document.children.forEach(page => {
        console.log(`\n- ${page.name} (${page.type})`);
        if (page.children && page.children.length > 0) {
          console.log('  Frames:');
          page.children.slice(0, 5).forEach(child => {
            if (child.type === 'FRAME' || child.type === 'COMPONENT') {
              console.log(`  - ${child.name} (id: ${child.id})`);
            }
          });
          if (page.children.length > 5) {
            console.log(`  ... and ${page.children.length - 5} more`);
          }
        }
      });
    }

    console.log('\n✅ Figma sync complete!');
  } catch (error) {
    console.error('\n❌ Error syncing with Figma:', error.message);
    process.exit(1);
  }
}

// Run the sync
syncFigmaAssets();