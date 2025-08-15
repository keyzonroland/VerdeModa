/*
  Optimiza imágenes desde img/ a img/dist/ generando:
  - JPG 80% calidad en anchos 400 y 800
  - WebP 80% calidad en anchos 400 y 800
*/
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC = path.resolve(__dirname, '..', 'img');
const OUT = path.resolve(SRC, 'dist');

const widths = [400, 800];

async function ensureDir(p) {
  await fs.promises.mkdir(p, { recursive: true });
}

function baseNameNoExt(file) {
  return path.basename(file, path.extname(file));
}

async function processImage(file) {
  const inPath = path.join(SRC, file);
  const base = baseNameNoExt(file);
  for (const w of widths) {
    const jpgOut = path.join(OUT, `${base}-${w}.jpg`);
    const webpOut = path.join(OUT, `${base}-${w}.webp`);
    await sharp(inPath).resize({ width: w, withoutEnlargement: true }).jpeg({ quality: 80 }).toFile(jpgOut);
    await sharp(inPath).resize({ width: w, withoutEnlargement: true }).webp({ quality: 80 }).toFile(webpOut);
  }
  console.log(`Optimizado: ${file}`);
}

async function main() {
  await ensureDir(OUT);
  const files = await fs.promises.readdir(SRC);
  const images = files.filter(f => /\.(jpe?g|png|webp)$/i.test(f));
  for (const img of images) {
    await processImage(img);
  }
  console.log('Listo. Archivos en img/dist/.');
}

main().catch(err => { console.error(err); process.exit(1); });
