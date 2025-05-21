import fs from 'fs';
import https from 'https';
import path from 'path';

// Make sure directories exist
const dirs = [
  'public/images/locations',
  'public/images/fleet',
  'public/images/tours',
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Function to download an image - updated to handle redirects
const downloadImage = (url, destination) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination);
    
    const request = https.get(url, response => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        if (redirectUrl) {
          console.log(`Following redirect to: ${redirectUrl}`);
          file.close();
          downloadImage(redirectUrl, destination)
            .then(resolve)
            .catch(reject);
          return;
        }
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${destination}`);
        resolve();
      });
      
      file.on('error', err => {
        fs.unlink(destination, () => {}); // Delete the file on error
        reject(err);
      });
    });
    
    request.on('error', err => {
      fs.unlink(destination, () => {}); // Delete the file on error
      reject(err);
    });
    
    request.end();
  });
};

// Images to download - Using direct URLs that don't require redirects
const images = [
  // Locations
  {
    url: 'https://placehold.co/1200x800/4287f5/ffffff?text=Calgary',
    destination: 'public/images/locations/calgary-skyline.jpg'
  },
  {
    url: 'https://placehold.co/1200x800/4287f5/ffffff?text=Edmonton',
    destination: 'public/images/locations/edmonton-skyline.jpg'
  },
  {
    url: 'https://placehold.co/1200x800/228B22/ffffff?text=Banff+Mountains',
    destination: 'public/images/locations/banff-mountains.jpg'
  },
  {
    url: 'https://placehold.co/1200x800/228B22/ffffff?text=Canmore+Bridge',
    destination: 'public/images/locations/canmore-engine-bridge.jpg'
  },
  {
    url: 'https://placehold.co/1200x800/228B22/ffffff?text=Lake+Louise',
    destination: 'public/images/locations/lake-louise.jpg'
  },
  {
    url: 'https://placehold.co/1200x800/228B22/ffffff?text=Jasper+National+Park',
    destination: 'public/images/locations/jasper-national-park.jpg'
  },
  {
    url: 'https://placehold.co/1200x800/4287f5/ffffff?text=Red+Deer',
    destination: 'public/images/locations/red-deer-city.jpg'
  },
  {
    url: 'https://placehold.co/1200x800/4287f5/ffffff?text=Lethbridge',
    destination: 'public/images/locations/lethbridge-nikka-yuko.jpg'
  },
  
  // Fleet
  {
    url: 'https://placehold.co/1200x800/000000/ffffff?text=Cadillac+Escalade+ESV',
    destination: 'public/images/fleet/cadillac-escalade-esv.jpg'
  },
  {
    url: 'https://placehold.co/1200x800/000000/ffffff?text=Mercedes+Sprinter',
    destination: 'public/images/fleet/mercedes-sprinter.jpg'
  },
  {
    url: 'https://placehold.co/1200x800/000000/ffffff?text=Executive+Coach',
    destination: 'public/images/fleet/executive-coach.jpg'
  },
  
  // Tours
  {
    url: 'https://placehold.co/1200x800/800000/ffffff?text=Banff+Explorer+Tour',
    destination: 'public/images/tours/banff-explorer.jpg'
  },
  {
    url: 'https://placehold.co/1200x800/800000/ffffff?text=Southern+Alberta+Heritage+Loop',
    destination: 'public/images/tours/southern-alberta.jpg'
  },
  {
    url: 'https://placehold.co/1200x800/800000/ffffff?text=Johnston+Canyon',
    destination: 'public/images/tours/johnston-canyon.jpg'
  },
  {
    url: 'https://placehold.co/1200x800/800000/ffffff?text=Emerald+Lake',
    destination: 'public/images/tours/emerald-lake.jpg'
  }
];

// Download all images
async function downloadAll() {
  console.log('Starting image downloads...');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.destination);
    } catch (error) {
      console.error(`Error downloading ${image.destination}:`, error.message);
    }
  }
  
  console.log('All downloads completed!');
}

downloadAll(); 