import http from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('.', import.meta.url));
await mkdir(join(root, 'data'), { recursive: true });
const db = new DatabaseSync(join(root, 'data', 'registrations.sqlite'));
db.exec(`CREATE TABLE IF NOT EXISTS registrations (
 id INTEGER PRIMARY KEY, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 name TEXT NOT NULL, phone TEXT NOT NULL, segment TEXT NOT NULL,
 children INTEGER NOT NULL, language TEXT NOT NULL, consent INTEGER NOT NULL)`);
export function validate(input) {
 const name = typeof input.name === 'string' ? input.name.trim() : '';
 const phone = typeof input.phone === 'string' ? input.phone.replace(/[^\d+]/g, '') : '';
 const children = Number(input.children);
 if (name.length < 2 || name.length > 100 || !/^\+7[0-9]{10}$/.test(phone)
  || !['family', 'father', 'student'].includes(input.segment)
  || !Number.isInteger(children) || children < 0 || children > 3
  || (input.segment !== 'father' && children < 1)
  || (input.segment === 'father' && children !== 0)
  || !['ru', 'kk'].includes(input.language) || input.consent !== true) return null;
 return { name, phone, children, segment: input.segment, language: input.language };
}
const files = { '/phone.mjs': ['phone.mjs', 'text/javascript; charset=utf-8'], '/display.ttf': ['display.ttf', 'font/ttf'], '/fighter.png': ['fighter.png', 'image/png'], '/': ['index.html', 'text/html; charset=utf-8'], '/style.css': ['style.css', 'text/css'], '/app.js': ['app.js', 'text/javascript; charset=utf-8'] };
export const server = http.createServer(async (req, res) => {
 res.setHeader('X-Content-Type-Options', 'nosniff');
 res.setHeader('Referrer-Policy', 'same-origin');
 res.setHeader('Content-Security-Policy', "default-src 'self'; connect-src 'self' https://script.google.com https://script.googleusercontent.com; style-src 'self'; script-src 'self'; img-src 'self' data:; frame-ancestors 'none'; form-action 'self'");
 if (req.method === 'POST' && req.url === '/api/register') {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  if (req.headers.origin && req.headers.origin !== `http://${req.headers.host}` && req.headers.origin !== `https://${req.headers.host}`) { res.writeHead(403); res.end('{"error":"origin"}'); return; }
  try {
   let body = '';
   for await (const chunk of req) { body += chunk; if (Buffer.byteLength(body) > 8192) { res.writeHead(413); res.end('{"error":"size"}'); return; } }
   const data = validate(JSON.parse(body));
   if (!data) { res.writeHead(400); res.end('{"error":"validation"}'); return; }
   db.prepare('INSERT INTO registrations (name,phone,segment,children,language,consent) VALUES (?,?,?,?,?,1)').run(data.name, data.phone, data.segment, data.children, data.language);
   res.writeHead(201); res.end('{"ok":true}');
  } catch { res.writeHead(400); res.end('{"error":"request"}'); }
  return;
 }
 const file = files[req.url];
 if (req.method !== 'GET' || !file) { res.writeHead(404); res.end('Not found'); return; }
 try { const body = await readFile(join(root, 'public', file[0])); res.writeHead(200, { 'Content-Type': file[1] }); res.end(body); }
 catch { res.writeHead(500); res.end('Server error'); }
});
if (process.argv[1] === fileURLToPath(import.meta.url)) server.listen(Number(process.env.PORT || 3000), '0.0.0.0', () => console.log('BHS Fight Night server started'));
