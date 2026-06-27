import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

async function prerender() {
  console.log('Starting prerender...');
  
  const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
  
  // Dynamic import of the server bundle
  const { render } = await import('./dist/server/entry-server.js');
  
  const routesToPrerender = ['/', '/rules', '/gallery'];
  
  for (const url of routesToPrerender) {
    console.log(`Prerendering ${url}...`);
    const appHtml = render(url);
    
    // Inject the appHtml into the template
    const html = template.replace(`<!--app-html-->`, appHtml).replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`);
    
    let filePath = `dist${url === '/' ? '/index' : url}.html`;
    
    fs.writeFileSync(toAbsolute(filePath), html);
    console.log(`pre-rendered: ${filePath}`);
  }
}

prerender().catch(console.error);
