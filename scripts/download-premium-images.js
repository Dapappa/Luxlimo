import fs from "fs";
import path from "path";
import https from "https";

// Create images directory if it doesn't exist
const imagesDir = path.join(process.cwd(), "public", "images");
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Create a directory for the gallery images
const galleryDir = path.join(imagesDir, "gallery");
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

// Create a directory for the carousel images
const carouselDir = path.join(imagesDir, "carousel");
if (!fs.existsSync(carouselDir)) {
  fs.mkdirSync(carouselDir, { recursive: true });
}

// Premium image URLs - carefully selected for quality and relevance
// Using Pexels and Unsplash for top quality, relevant images
const premiumImages = [
  // Fleet Category - Premium Vehicles
  {
    // Black Cadillac Escalade - Luxury SUV
    url: "https://images.pexels.com/photos/17236546/pexels-photo-17236546.jpeg?cs=srgb&dl=pexels-mike-bird-17236546.jpg&fm=jpg&w=1800&h=1200",
    filename: "luxury-escalade.jpg",
    category: "Fleet",
    title: "Luxury Cadillac Escalade",
    destination: "gallery",
  },
  {
    // Mercedes GLS - Executive SUV
    url: "https://images.pexels.com/photos/12057454/pexels-photo-12057454.jpeg?cs=srgb&dl=pexels-hyundai-motor-group-12057454.jpg&fm=jpg&w=1800&h=1200",
    filename: "executive-suv.jpg",
    category: "Fleet",
    title: "Executive Mercedes SUV",
    destination: "gallery",
  },
  {
    // Luxury SUV with Private Jet
    url: "https://images.pexels.com/photos/6274351/pexels-photo-6274351.jpeg?cs=srgb&dl=pexels-cottonbro-studio-6274351.jpg&fm=jpg&w=1800&h=1200",
    filename: "luxury-suv-jet.jpg",
    category: "Fleet",
    title: "Luxury SUV with Private Jet",
    destination: "gallery",
  },
  {
    // Mercedes Sprinter Luxury Van
    url: "https://images.pexels.com/photos/4062312/pexels-photo-4062312.jpeg?cs=srgb&dl=pexels-mike-bird-4062312.jpg&fm=jpg&w=1800&h=1200",
    filename: "group-transport.jpg",
    category: "Fleet",
    title: "Luxury Mercedes Sprinter",
    destination: "gallery",
  },
  {
    // Luxury Sedan - Mercedes S-Class
    url: "https://images.pexels.com/photos/5761865/pexels-photo-5761865.jpeg?cs=srgb&dl=pexels-mike-bird-5761865.jpg&fm=jpg&w=1800&h=1200",
    filename: "luxury-sedan.jpg",
    category: "Fleet",
    title: "Luxury Mercedes S-Class",
    destination: "gallery",
  },
  {
    // Stretch Limousine
    url: "https://images.pexels.com/photos/10953022/pexels-photo-10953022.jpeg?cs=srgb&dl=pexels-harry-cooke-10953022.jpg&fm=jpg&w=1800&h=1200",
    filename: "stretch-limo.jpg",
    category: "Fleet",
    title: "Elegant Stretch Limousine",
    destination: "gallery",
  },
  {
    // Luxury Interior (Vehicle)
    url: "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?cs=srgb&dl=pexels-pixabay-2365572.jpg&fm=jpg&w=1800&h=1200",
    filename: "luxury-interior.jpg",
    category: "Fleet",
    title: "Premium Interior Finishes",
    destination: "gallery",
  },

  // Experience Category
  {
    // Night Airport Transfer with Luxury Vehicle
    url: "https://images.pexels.com/photos/1098747/pexels-photo-1098747.jpeg?cs=srgb&dl=pexels-sharad-kachhi-1098747.jpg&fm=jpg&w=1800&h=1200",
    filename: "night-airport.jpg",
    category: "Experience",
    title: "Night Airport Transfer",
    destination: "gallery",
  },
  {
    // Private Airfield Service
    url: "https://images.pexels.com/photos/5995778/pexels-photo-5995778.jpeg?cs=srgb&dl=pexels-kindel-media-5995778.jpg&fm=jpg&w=1800&h=1200",
    filename: "private-airfield.jpg",
    category: "Experience",
    title: "Private Airfield Service",
    destination: "gallery",
  },
  {
    // Executive Airport Service
    url: "https://images.pexels.com/photos/13444971/pexels-photo-13444971.jpeg?cs=srgb&dl=pexels-jan-van-der-wolf-13444971.jpg&fm=jpg&w=1800&h=1200",
    filename: "executive-airport.jpg",
    category: "Experience",
    title: "Executive Airport Service",
    destination: "gallery",
  },

  // Events Category
  {
    // Wedding Transportation
    url: "https://images.pexels.com/photos/4397850/pexels-photo-4397850.jpeg?cs=srgb&dl=pexels-nappy-4397850.jpg&fm=jpg&w=1800&h=1200",
    filename: "wedding-transportation.jpg",
    category: "Events",
    title: "Elegant Wedding Transportation",
    destination: "gallery",
  },
  {
    // Corporate Events
    url: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?cs=srgb&dl=pexels-julian-v-2774556.jpg&fm=jpg&w=1800&h=1200",
    filename: "corporate-events.jpg",
    category: "Events",
    title: "Premium Corporate Events",
    destination: "gallery",
  },
  {
    // Concert & Event Transportation
    url: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?cs=srgb&dl=pexels-vishnu-r-nair-1105666.jpg&fm=jpg&w=1800&h=1200",
    filename: "concert-transportation.jpg",
    category: "Events",
    title: "Concert & Event Transportation",
    destination: "gallery",
  },

  // Destinations Category - Canadian Landmarks
  {
    // Banff National Park
    url: "https://images.pexels.com/photos/1934932/pexels-photo-1934932.jpeg?cs=srgb&dl=pexels-trace-hudson-1934932.jpg&fm=jpg&w=1800&h=1200",
    filename: "banff-excursions.jpg",
    category: "Destinations",
    title: "Banff Excursions",
    destination: "gallery",
  },
  {
    // Lake Louise - High Quality Specific Image
    url: "https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?cs=srgb&dl=pexels-andrew-liu-2923595.jpg&fm=jpg&w=1800&h=1200",
    filename: "lake-louise.jpg",
    category: "Destinations",
    title: "Lake Louise Trips",
    destination: "gallery",
  },
  {
    // Canmore Mountains
    url: "https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?cs=srgb&dl=pexels-thorsten-technoman-338936.jpg&fm=jpg&w=1800&h=1200",
    filename: "canmore-destinations.jpg",
    category: "Destinations",
    title: "Canmore Destinations",
    destination: "gallery",
  },
  {
    // Calgary Skyline - Specific Calgary Image
    url: "https://images.pexels.com/photos/2291664/pexels-photo-2291664.jpeg?cs=srgb&dl=pexels-cw-gan-2291664.jpg&fm=jpg&w=1800&h=1200",
    filename: "calgary-tours.jpg",
    category: "Destinations",
    title: "Calgary City Tours",
    destination: "gallery",
  },

  // Services Category
  {
    // Airport Services - Premium Experience
    url: "https://images.pexels.com/photos/4246212/pexels-photo-4246212.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-4246212.jpg&fm=jpg&w=1800&h=1200",
    filename: "airport-services.jpg",
    category: "Services",
    title: "Premium Airport Services",
    destination: "gallery",
  },

  // Corporate Category
  {
    // Business Travel - Executive Style
    url: "https://images.pexels.com/photos/2844474/pexels-photo-2844474.jpeg?cs=srgb&dl=pexels-canva-studio-2844474.jpg&fm=jpg&w=1800&h=1200",
    filename: "business-travel.jpg",
    category: "Corporate",
    title: "Executive Business Travel",
    destination: "gallery",
  },

  // Carousel Images - Ultra high quality, impactful images for homepage carousel
  {
    // Black Cadillac Escalade at night - dramatic lighting
    url: "https://images.pexels.com/photos/17236546/pexels-photo-17236546.jpeg?cs=srgb&dl=pexels-mike-bird-17236546.jpg&fm=jpg&w=2400&h=1600&fit=crop",
    filename: "cadillac-escalade.webp",
    category: "Carousel",
    title: "Luxury Cadillac Escalade",
    destination: "carousel",
  },
  {
    // Mercedes-Benz S-Class - Ultra luxury sedan
    url: "https://images.pexels.com/photos/5761865/pexels-photo-5761865.jpeg?cs=srgb&dl=pexels-mike-bird-5761865.jpg&fm=jpg&w=2400&h=1600&fit=crop",
    filename: "mercedes-benz-luxury.webp",
    category: "Carousel",
    title: "Mercedes Benz S-Class",
    destination: "carousel",
  },
  {
    // Rolls Royce Phantom - Ultimate luxury
    url: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?cs=srgb&dl=pexels-mike-bird-3764984.jpg&fm=jpg&w=2400&h=1600&fit=crop",
    filename: "rolls-royce-phantom.webp",
    category: "Carousel",
    title: "Rolls Royce Phantom",
    destination: "carousel",
  },
  {
    // Bentley Continental GT - Luxury sports car
    url: "https://images.pexels.com/photos/3353788/pexels-photo-3353788.jpeg?cs=srgb&dl=pexels-mike-3353788.jpg&fm=jpg&w=2400&h=1600&fit=crop",
    filename: "bentley-luxury.webp",
    category: "Carousel",
    title: "Bentley Continental",
    destination: "carousel",
  },
  {
    // Mercedes Sprinter Luxury Van - Group transport
    url: "https://images.pexels.com/photos/4062312/pexels-photo-4062312.jpeg?cs=srgb&dl=pexels-mike-bird-4062312.jpg&fm=jpg&w=2400&h=1600&fit=crop",
    filename: "mercedes-mini-bus.webp",
    category: "Carousel",
    title: "Mercedes Sprinter Luxury Van",
    destination: "carousel",
  },
  {
    // Black limousine at night - Dramatic
    url: "https://images.pexels.com/photos/10953022/pexels-photo-10953022.jpeg?cs=srgb&dl=pexels-harry-cooke-10953022.jpg&fm=jpg&w=2400&h=1600&fit=crop",
    filename: "night-limo-service.webp",
    category: "Carousel",
    title: "Premium Night Limousine Service",
    destination: "carousel",
  },
];

// Enhanced function to download an image with proper error handling and retries
const downloadImage = (imageObj, retryCount = 0) => {
  return new Promise((resolve, reject) => {
    const maxRetries = 3;
    const destinationDir =
      imageObj.destination === "carousel" ? carouselDir : galleryDir;
    const filePath = path.join(destinationDir, imageObj.filename);
    const file = fs.createWriteStream(filePath);

    console.log(
      `Attempting to download: ${imageObj.title} (${imageObj.filename})`
    );

    https
      .get(imageObj.url, (response) => {
        // Handle redirects
        if (response.statusCode === 301 || response.statusCode === 302) {
          const newUrl = response.headers.location;
          console.log(`Redirecting to: ${newUrl}`);
          https
            .get(newUrl, handleResponse)
            .on("error", (err) => handleError(err, retryCount));
          return;
        }

        // Handle other status codes
        if (response.statusCode !== 200) {
          const error = new Error(
            `Failed to download image, status code: ${response.statusCode}`
          );
          file.close();
          fs.unlink(filePath, () => {});
          if (retryCount < maxRetries) {
            console.log(
              `Retrying download for ${imageObj.filename} (Attempt ${
                retryCount + 1
              }/${maxRetries})`
            );
            setTimeout(() => {
              resolve(downloadImage(imageObj, retryCount + 1));
            }, 1000); // Wait 1 second before retry
          } else {
            console.error(
              `Failed to download ${imageObj.filename} after ${maxRetries} retries`
            );
            reject(error);
          }
          return;
        }

        handleResponse(response);
      })
      .on("error", (err) => handleError(err, retryCount));

    function handleResponse(response) {
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(`✅ Downloaded: ${imageObj.filename} (${imageObj.title})`);
        resolve();
      });

      file.on("error", (err) => {
        fs.unlink(filePath, () => {});
        console.error(`Error writing file ${imageObj.filename}:`, err.message);
        reject(err);
      });
    }

    function handleError(err, currentRetry) {
      file.close();
      fs.unlink(filePath, () => {});

      if (currentRetry < maxRetries) {
        console.log(
          `Retrying download for ${imageObj.filename} (Attempt ${
            currentRetry + 1
          }/${maxRetries})`
        );
        setTimeout(() => {
          resolve(downloadImage(imageObj, currentRetry + 1));
        }, 1000); // Wait 1 second before retry
      } else {
        console.error(
          `Failed to download ${imageObj.filename} after ${maxRetries} retries:`,
          err.message
        );
        reject(err);
      }
    }
  });
};

// Download all images with better error handling
const downloadAllPremiumImages = async () => {
  console.log(`
==========================================================
  DOWNLOADING HIGH-QUALITY PREMIUM LUXURY IMAGES
  Total images to download: ${premiumImages.length}
==========================================================
  `);

  let successCount = 0;
  let failCount = 0;

  for (const imageObj of premiumImages) {
    try {
      await downloadImage(imageObj);
      successCount++;
    } catch (error) {
      console.error(`❌ Failed to download ${imageObj.filename}`);
      failCount++;
    }
  }

  console.log(`
==========================================================
  DOWNLOAD SUMMARY
  ✅ Successfully downloaded: ${successCount} images
  ❌ Failed to download: ${failCount} images
==========================================================
  `);
};

// Start the download process
downloadAllPremiumImages();
