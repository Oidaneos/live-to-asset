const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const PUBLIC_DIR = __dirname;
const PARENT_DIR = path.join(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.vtt': 'text/vtt; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.mp4': 'video/mp4',
  '.m4a': 'audio/mp4',
  '.ics': 'text/calendar; charset=utf-8'
};

function resolveFuzzyPath(baseDir, requestedRelativePath) {
  const parts = requestedRelativePath.replace(/^\/+/, '').split(/[\/\\]/);
  let currentDir = baseDir;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part) continue;

    const directPath = path.join(currentDir, part);
    if (fs.existsSync(directPath)) {
      currentDir = directPath;
      continue;
    }

    try {
      const entries = fs.readdirSync(currentDir);
      const normalizedPartNFC = part.normalize('NFC').toLowerCase();
      const normalizedPartNFD = part.normalize('NFD').toLowerCase();
      const match = entries.find(e => {
        const eNFC = e.normalize('NFC').toLowerCase();
        const eNFD = e.normalize('NFD').toLowerCase();
        return eNFC === normalizedPartNFC || eNFD === normalizedPartNFC ||
               eNFC === normalizedPartNFD || eNFD === normalizedPartNFD;
      });

      if (match) {
        currentDir = path.join(currentDir, match);
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

  return currentDir;
}

const server = http.createServer((req, res) => {
  const decodedUrl = decodeURIComponent(req.url.split('?')[0]);
  
  let filePath = null;

  if (decodedUrl === '/' || decodedUrl === '/index.html') {
    filePath = path.join(PUBLIC_DIR, 'index.html');
  } else {
    filePath = resolveFuzzyPath(PUBLIC_DIR, decodedUrl);
    if (!filePath || !fs.existsSync(filePath)) {
      filePath = resolveFuzzyPath(PARENT_DIR, decodedUrl);
    }
    if (!filePath || !fs.existsSync(filePath)) {
      const pasiDir = path.join(PARENT_DIR, 'Sessions_PASI');
      filePath = resolveFuzzyPath(pasiDir, decodedUrl);
    }
    if (!filePath || !fs.existsSync(filePath)) {
      const nextcloudPasiDir = path.join(PARENT_DIR, 'Sessions_Data', 'Sessions_PASI');
      filePath = resolveFuzzyPath(nextcloudPasiDir, decodedUrl);
    }
  }

  if (!filePath || !fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404 - Fichier non trouvé (PASI)</h1>', 'utf-8');
    return;
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(500);
      res.end('Erreur serveur: ' + err.code);
      return;
    }

    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
      if (!fs.existsSync(filePath)) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - Dossier sans index.html</h1>', 'utf-8');
        return;
      }
    }

    // Video Streaming Range Support
    const range = req.headers.range;
    if (range && (extname === '.mp4' || extname === '.m4a')) {
      const positions = range.replace(/bytes=/, "").split("-");
      const start = parseInt(positions[0], 10);
      const total = stats.size;
      const end = positions[1] ? parseInt(positions[1], 10) : total - 1;
      const chunksize = (end - start) + 1;

      res.writeHead(206, {
        "Content-Range": "bytes " + start + "-" + end + "/" + total,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize,
        "Content-Type": contentType
      });

      if (req.method === 'HEAD') {
        res.end();
        return;
      }

      const stream = fs.createReadStream(filePath, { start: start, end: end });
      stream.pipe(res);
      return;
    }

    const extraHeaders = {};
    if (extname === '.ics') {
      extraHeaders['Content-Disposition'] = 'inline; filename="pasi_classe_virtuelle.ics"';
      extraHeaders['Content-Type'] = 'text/calendar; charset=utf-8';
    }
    res.writeHead(200, {
      ...extraHeaders,
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-cache'
    });

    if (req.method === 'HEAD') {
      res.end();
      return;
    }

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log('🛡️ Serveur PASI E-Learning démarré sur : http://localhost:' + PORT);
});
