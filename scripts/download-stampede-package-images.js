import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    url: 'https://images.unsplash.com/photo-1583251705886-bd9d88cf88be?w=1920&q=80',
    filename: 'stampede-parade-sunrise.jpg',
    description: 'Early morning luxury vehicle at sunrise'
  },
  {
    url: 'https://images.unsplash.com/photo-1600712242805-ec35a2d0105a?w=1920&q=80',
    filename: 'stampede-family-vehicle.jpg',
    description: 'Family-friendly luxury SUV'
  },
  {
    url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920&q=80',
    filename: 'stampede-party-limo.jpg',
    description: 'Party limo for concerts'
  },
  {
    url: 'https://images.unsplash.com/photo-1609790547202-bef72228d569?w=1920&q=80',
    filename: 'stampede-corporate-vehicle.jpg',
    description: 'Corporate executive vehicle'
  },
  {
    url: 'https://images.unsplash.com/photo-1548960095-70a2148e71c8?w=1920&q=80',
    filename: 'stampede-night-ride.jpg',
    description: 'Safe night-time luxury ride'
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80',
    filename: 'stampede-custom-trip.jpg',
    description: 'Custom trip planning visual'
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
  console.log('\nAll stampede package images downloaded!');
}).catch(console.error);