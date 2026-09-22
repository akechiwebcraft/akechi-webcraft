const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600&auto=format&fit=crop',
  'https://akechi2.netlify.app/images/cases/case-1.png',
  'https://akechi2.netlify.app/images/cases/case-2.png',
  'https://akechi2.netlify.app/images/cases/case-3.png',
  'https://akechiwebcraft.com/images/resource/web-3-0.jpg',
  'https://akechiwebcraft.com/images/resource/shopify-blog.jpg',
  'https://akechiwebcraft.com/images/resource/chatgpt-blog.jpg'
];

const dests = [
  'public/images/hero-1.jpg',
  'public/images/hero-2.jpg',
  'public/images/cases/case-1.png',
  'public/images/cases/case-2.png',
  'public/images/cases/case-3.png',
  'public/images/resource/web-3-0.jpg',
  'public/images/resource/shopify-blog.jpg',
  'public/images/resource/chatgpt-blog.jpg'
];

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function download(url, dest) {
  ensureDir(dest);
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(download(res.headers.location, dest));
      }
      
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${dest}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      console.error(`Error downloading ${url}:`, err.message);
      resolve(); // resolve anyway to continue
    });
  });
}

async function main() {
  for (let i = 0; i < urls.length; i++) {
    await download(urls[i], dests[i]);
  }
  console.log('All downloads complete.');
}

main();
