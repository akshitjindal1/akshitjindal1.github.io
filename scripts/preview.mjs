// scripts/preview.mjs
// Serves the static export in ./out exactly the way GitHub Pages resolves URLs,
// so what you see locally is what gets deployed. No dependencies.
//
//   npm run preview            build, then serve on http://localhost:4000
//   PORT=5000 npm run serve    serve an existing build on another port

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const ROOT = join(process.cwd(), 'out');
const PORT = Number(process.env.PORT) || 4000;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
};

async function isFile(path) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

// GitHub Pages tries /path, /path.html, then /path/index.html.
async function resolve(urlPath) {
  const clean = normalize(decodeURIComponent(urlPath.split('?')[0])).replace(/^(\.\.[/\\])+/, '');
  const base = join(ROOT, clean);
  if (!base.startsWith(ROOT)) return null;
  for (const candidate of [base, `${base}.html`, join(base, 'index.html')]) {
    if (await isFile(candidate)) return candidate;
  }
  return null;
}

const server = createServer(async (req, res) => {
  const file = await resolve(req.url || '/');
  const status = file ? 200 : 404;
  const target = file || join(ROOT, '404.html');
  try {
    const body = await readFile(target);
    res.writeHead(status, {
      'Content-Type': TYPES[extname(target)] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found. Run `npm run build` first.');
  }
  console.log(`${status} ${req.method} ${req.url}`);
});

// Bind to localhost only, and step to the next port if this one is taken (common on shared servers).
function listen(port, attemptsLeft = 10) {
  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE' && attemptsLeft > 0) return listen(port + 1, attemptsLeft - 1);
    throw err;
  });
  server.listen(port, '127.0.0.1', () => {
    console.log(`\n  Previewing ./out at http://localhost:${port}\n`);
  });
}

listen(PORT);
