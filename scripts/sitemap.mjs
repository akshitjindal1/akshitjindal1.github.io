// scripts/sitemap.mjs
// Runs after `next build` (npm "postbuild") and writes out/sitemap.xml from the exported pages.
import { readdir, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const SITE = 'https://akshitjindal1.github.io';
const OUT = join(process.cwd(), 'out');

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) return entry.name.startsWith('_') ? [] : htmlFiles(path);
      return entry.name.endsWith('.html') ? [path] : [];
    })
  );
  return nested.flat();
}

const urls = (await htmlFiles(OUT))
  .map((file) => relative(OUT, file).replace(/\\/g, '/'))
  .filter((file) => file !== '404.html')
  .map((file) => (file === 'index.html' ? '/' : `/${file.replace(/(\/index)?\.html$/, '')}`))
  .sort();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${SITE}${url === '/' ? '/' : url}</loc></url>`).join('\n')}
</urlset>
`;

await writeFile(join(OUT, 'sitemap.xml'), xml);
console.log(`sitemap.xml: ${urls.length} URLs`);
