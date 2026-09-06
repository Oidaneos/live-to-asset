const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.m4a': 'audio/mp4',
  '.vtt': 'text/vtt; charset=utf-8',
  '.pdf': 'application/pdf',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.md': 'text/markdown; charset=utf-8',
  '.ics': 'text/calendar; charset=utf-8'
};

const server = http.createServer((req, res) => {
  let reqUrl = '/index.html';
  try {
    reqUrl = decodeURIComponent(req.url.split('?')[0]);
  } catch (e) {
    reqUrl = req.url.split('?')[0];
  }
  if (reqUrl === '/' || reqUrl === '') {
    reqUrl = '/index.html';
  }

  if (reqUrl === '/debug' || reqUrl === '/api/debug') {
    function listFilesRecursively(dir, depth = 0, maxDepth = 4) {
      if (depth > maxDepth || !fs.existsSync(dir)) return [];
      let results = [];
      try {
        const list = fs.readdirSync(dir);
        for (const item of list) {
          const full = path.join(dir, item);
          const rel = path.relative(BASE_DIR, full);
          try {
            const stat = fs.statSync(full);
            if (stat.isDirectory()) {
              results.push({ type: 'dir', path: rel, children: listFilesRecursively(full, depth + 1, maxDepth) });
            } else {
              results.push({ type: 'file', path: rel, size: (stat.size / 1024 / 1024).toFixed(2) + ' MB' });
            }
          } catch(e) {
            results.push({ type: 'error', path: rel, error: e.message });
          }
        }
      } catch(e) {
        results.push({ type: 'error', path: dir, error: e.message });
      }
      return results;
    }

    const tree = listFilesRecursively(BASE_DIR);
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ baseDir: BASE_DIR, tree }, null, 2));
    return;
  }

  let targetPath = path.join(BASE_DIR, reqUrl);

  // Security check to avoid directory traversal outside workspace
  if (!targetPath.startsWith(BASE_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  // Fallback candidates for video and session files
  const cleanReq = reqUrl.replace(/^\/Sessions_Data_Septembre_2026\//, '').replace(/^\/Sessions_Data\//, '').replace(/^\//, '');
  const candidates = [
    targetPath,
    path.join(BASE_DIR, reqUrl.normalize('NFC')),
    path.join(BASE_DIR, reqUrl.normalize('NFD')),
    path.join(BASE_DIR, 'Sessions_Data', cleanReq),
    path.join(BASE_DIR, 'Sessions_Data', 'Sessions_Data_Septembre_2026', cleanReq),
    path.join(BASE_DIR, 'Sessions_Data', 'Sessions_Data', cleanReq),
    path.join(BASE_DIR, 'Sessions_Data', 'Sessions_Data', 'Sessions_Data_Septembre_2026', cleanReq),
    path.join(BASE_DIR, 'Sessions_Data_Septembre_2026', cleanReq)
  ];

  let filePath = null;
  let stats = null;

  for (const cand of candidates) {
    try {
      if (fs.existsSync(cand)) {
        const s = fs.statSync(cand);
        if (s.isFile()) {
          filePath = cand;
          stats = s;
          break;
        }
      }
    } catch(e) {}
  }

  if (!filePath || !stats) {
    res.writeHead(404);
    res.end('Fichier non trouvé');
    return;
  }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Video/Audio Streaming with HTTP Range Support (crucial for seek and video player)
    if (ext === '.mp4' || ext === '.m4a') {
      const range = req.headers.range;
      const fileSize = stats.size;

      if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = (end - start) + 1;
        const file = fs.createReadStream(filePath, { start, end });
        const head = {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': contentType,
        };
        res.writeHead(206, head);
        file.pipe(res);
      } else {
        const head = {
          'Content-Length': fileSize,
          'Content-Type': contentType,
          'Accept-Ranges': 'bytes',
        };
        res.writeHead(200, head);
        fs.createReadStream(filePath).pipe(res);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
    }
});

server.listen(PORT, () => {
  console.log(`Serveur OIDANEOS actif sur http://localhost:${PORT}`);
});
