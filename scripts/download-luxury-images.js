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

// List of high-quality images for all categories
// Using Unsplash for royalty-free, high-quality images
const luxuryImages = [
  // Fleet Category
  {
    url: "https://images.unsplash.com/photo-1622653902334-f33de960e2d1",
    filename: "luxury-suv-jet.jpg",
    category: "Fleet",
    title: "Luxury SUV with Private Jet",
    destination: "gallery",
  },
  {
    url: "https://images.unsplash.com/photo-1549275301-c9638c6b9e60",
    filename: "executive-suv.jpg",
    category: "Fleet",
    title: "Executive SUV Service",
    destination: "gallery",
  },
  {
    url: "https://images.unsplash.com/photo-1631564748811-216a2cf94566",
    filename: "luxury-tarmac.jpg",
    category: "Fleet",
    title: "Luxury Tarmac Transport",
    destination: "gallery",
  },
  {
    url: "https://images.unsplash.com/photo-1633287466933-e7db51418446",
    filename: "group-transport.jpg",
    category: "Fleet",
    title: "Luxury Group Transport",
    destination: "gallery",
  },
  {
    url: "https://images.unsplash.com/photo-1570312903275-7cc9741426db",
    filename: "luxury-sedan.jpg",
    category: "Fleet",
    title: "Luxury Sedan",
    destination: "gallery",
  },
  {
    url: "https://images.unsplash.com/photo-1512889408716-32362381f982",
    filename: "stretch-limo.jpg",
    category: "Fleet",
    title: "Stretch Limousine",
    destination: "gallery",
  },
  {
    url: "https://images.unsplash.com/photo-1519954352398-d5bcaf0e001e",
    filename: "luxury-interior.jpg",
    category: "Fleet",
    title: "Luxury Interior",
    destination: "gallery",
  },

  // Experience Category
  {
    url: "https://images.unsplash.com/photo-1565703219547-ad845220b281",
    filename: "night-airport.jpg",
    category: "Experience",
    title: "Night Airport Transfer",
    destination: "gallery",
  },
  {
    url: "https://images.unsplash.com/photo-1545426336-88b8d67a3551",
    filename: "private-airfield.jpg",
    category: "Experience",
    title: "Private Airfield Service",
    destination: "gallery",
  },
  {
    url: "https://images.unsplash.com/photo-1541781513810-81a64a8987ee",
    filename: "executive-airport.jpg",
    category: "Experience",
    title: "Executive Airport Service",
    destination: "gallery",
  },

  // Events Category
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552",
    filename: "wedding-transportation.jpg",
    category: "Events",
    title: "Wedding Transportation",
    destination: "gallery",
  },
  {
    url: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b",
    filename: "corporate-events.jpg",
    category: "Events",
    title: "Corporate Events",
    destination: "gallery",
  },
  {
    url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14",
    filename: "concert-transportation.jpg",
    category: "Events",
    title: "Concert & Event Transportation",
    destination: "gallery",
  },

  // Destinations Category
  {
    url: "https://images.unsplash.com/photo-1609861296120-6c61fe76a672",
    filename: "banff-excursions.jpg",
    category: "Destinations",
    title: "Banff Excursions",
    destination: "gallery",
  },
  {
    url: "https://images.unsplash.com/photo-1493514789931-586cb221d7a7",
    filename: "lake-louise.jpg",
    category: "Destinations",
    title: "Lake Louise Trips",
    destination: "gallery",
  },
  {
    url: "https://images.unsplash.com/photo-1541261313571-054c6962a054",
    filename: "canmore-destinations.jpg",
    category: "Destinations",
    title: "Canmore Destinations",
    destination: "gallery",
  },
  {
    url: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb",
    filename: "calgary-tours.jpg",
    category: "Destinations",
    title: "Calgary City Tours",
    destination: "gallery",
  },

  // Services Category
  {
    url: "https://images.unsplash.com/photo-1565154065448-5a2f838a39f1",
    filename: "airport-services.jpg",
    category: "Services",
    title: "Airport Services",
    destination: "gallery",
  },

  // Corporate Category
  {
    url: "https://images.unsplash.com/photo-1551720822-951ff28e3eb2",
    filename: "business-travel.jpg",
    category: "Corporate",
    title: "Business Travel",
    destination: "gallery",
  },

  // Carousel Images - high quality, impactful images for the homepage carousel
  {
    url: "https://images.unsplash.com/photo-1622653902334-f33de960e2d1?q=90&w=1800&h=1200",
    filename: "luxury-suv-jet.webp",
    category: "Carousel",
    title: "Luxury SUV with Private Jet",
    destination: "carousel",
  },
  {
    url: "https://images.unsplash.com/photo-1550255816-a7d6c04b7370?q=90&w=1800&h=1200",
    filename: "mercedes-benz-luxury.webp",
    category: "Carousel",
    title: "Mercedes Benz Luxury",
    destination: "carousel",
  },
  {
    url: "https://images.unsplash.com/photo-1624203376636-b35b17e99cd9?q=90&w=1800&h=1200",
    filename: "rolls-royce-phantom.webp",
    category: "Carousel",
    title: "Rolls Royce Phantom",
    destination: "carousel",
  },
  {
    url: "https://images.unsplash.com/photo-1616566389936-7a7559eaef24?q=90&w=1800&h=1200",
    filename: "bentley-luxury.webp",
    category: "Carousel",
    title: "Luxury Bentley",
    destination: "carousel",
  },
  {
    url: "https://images.unsplash.com/photo-1563299796-9a66783c5a12?q=90&w=1800&h=1200",
    filename: "group-transportation.webp",
    category: "Carousel",
    title: "Luxury Group Transportation",
    destination: "carousel",
  },
  {
    url: "https://images.unsplash.com/photo-1572033717197-0f6364f57e5a?q=90&w=1800&h=1200",
    filename: "night-limo-service.webp",
    category: "Carousel",
    title: "Night Limo Service",
    destination: "carousel",
  },
];

// Function to download an image - with support for different destination folders
const downloadImage = (imageObj) => {
  return new Promise((resolve, reject) => {
    const destinationDir =
      imageObj.destination === "carousel" ? carouselDir : galleryDir;
    const filePath = path.join(destinationDir, imageObj.filename);
    const file = fs.createWriteStream(filePath);

    // Add quality and size parameters for Unsplash
    let imageUrl = imageObj.url;
    if (!imageUrl.includes("?")) {
      // If no parameters, add quality and size
      imageUrl += "?q=85&w=1200";
    }

    https
      .get(imageUrl, (response) => {
        // Handle redirects
        if (response.statusCode === 301 || response.statusCode === 302) {
          const newUrl = response.headers.location;
          console.log(`Redirecting to: ${newUrl}`);
          https
            .get(newUrl, (newResponse) => {
              newResponse.pipe(file);
              file.on("finish", () => {
                file.close();
                console.log(
                  `Downloaded: ${imageObj.filename} (${imageObj.title})`
                );
                resolve();
              });
            })
            .on("error", handleError);
          return;
        }

        response.pipe(file);

        file.on("finish", () => {
          file.close();
          console.log(`Downloaded: ${imageObj.filename} (${imageObj.title})`);
          resolve();
        });
      })
      .on("error", handleError);

    function handleError(err) {
      fs.unlink(filePath, () => {}); // Delete the file if there was an error
      console.error(`Error downloading ${imageObj.filename}:`, err.message);
      reject(err);
    }
  });
};

// Download all images
const downloadAllLuxuryImages = async () => {
  console.log("Starting download of high-quality luxury images...");
  console.log(`Total images to download: ${luxuryImages.length}`);

  for (const imageObj of luxuryImages) {
    try {
      await downloadImage(imageObj);
    } catch {
      console.error(`Failed to download ${imageObj.filename}`);
    }
  }

  console.log("All luxury images downloaded successfully!");
};

// Start the download process
downloadAllLuxuryImages();
