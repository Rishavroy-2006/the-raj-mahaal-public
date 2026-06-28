import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, '..', p);

const today = new Date().toISOString().split('T')[0];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://therajmahaal.vercel.app/</loc><lastmod>${today}</lastmod><priority>1.0</priority></url>
  <url><loc>https://therajmahaal.vercel.app/rules</loc><lastmod>${today}</lastmod><priority>0.8</priority></url>
  <url><loc>https://therajmahaal.vercel.app/gallery</loc><lastmod>${today}</lastmod><priority>0.7</priority></url>
</urlset>`;

const filePath = toAbsolute('public/sitemap.xml');
fs.writeFileSync(filePath, sitemap);
console.log('Sitemap generated successfully.');
