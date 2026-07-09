import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const svgPath = join(publicDir, 'favicon.svg');
const svgBuffer = readFileSync(svgPath);

const sizes = [
  { name: 'favicon-48.png',       size: 48  },
  { name: 'favicon-96.png',       size: 96  },
  { name: 'favicon-192.png',      size: 192 },
  { name: 'apple-touch-icon.png', size: 180 },
];

console.log('Generating PNG favicons from favicon.svg...\n');

for (const { name, size } of sizes) {
  const outPath = join(publicDir, 'images', name);
  await sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toFile(outPath);
  console.log(`✅  ${name}  (${size}×${size}) → public/images/${name}`);
}

// Generate favicon.ico (48x48 PNG saved as .ico — accepted by all browsers & Google)
const icoPath = join(publicDir, 'favicon.ico');
await sharp(svgBuffer)
  .resize(48, 48)
  .png()
  .toFile(icoPath);
console.log(`✅  favicon.ico  (48×48) → public/favicon.ico`);

console.log('\nDone! Deploy these files and Google will pick up your favicon within a few days.');
