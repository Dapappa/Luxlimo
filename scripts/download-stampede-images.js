import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    url: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?w=1920&q=80',
    filename: 'stampede-rodeo-action.jpg',
    description: 'Rodeo action shot'
  },
  {
    url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920&q=80',
    filename: 'stampede-concert-crowd.jpg',
    description: 'Concert crowd'
  },
  {
    url: 'https://images.unsplash.com/photo-1598387180437-80388ae0df12?w=1920&q=80',
    filename: 'stampede-midway-lights.jpg',
    description: 'Midway lights at night'
  },
  {
    url: 'https://images.unsplash.com/photo-1567942712661-82b9b407abbf?w=1920&q=80',
    filename: 'stampede-parade-crowd.jpg',
    description: 'Parade crowd'
  },
  {
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&q=80',
    filename: 'stampede-crowd-venue.jpg',
    description: 'Crowd at venue'
  },
  {
    url: 'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=1920&q=80',
    filename: 'calgary-skyline-dusk.jpg',
    description: 'Calgary skyline at dusk'
  },
  {
    url: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=1920&q=80',
    filename: 'stampede-fireworks.jpg',
    description: 'Stampede fireworks'
  },
  {
    url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=1920&q=80',
    filename: 'stampede-stage-lights.jpg',
    description: 'Stage lights'
  }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

async function downloadAllImages() {
  const outputDir = path.join(__dirname, '../public/images/stampede');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const img of images) {
    const filepath = path.join(outputDir, img.filename);
    console.log(`Downloading ${img.description}...`);
    try {
      await downloadImage(img.url, filepath);
      console.log(`✓ Downloaded ${img.filename}`);
    } catch (error) {
      console.error(`✗ Failed to download ${img.filename}:`, error.message);
    }
  }
}

downloadAllImages().then(() => {
  console.log('\nAll stampede images downloaded!');
}).catch(console.error);