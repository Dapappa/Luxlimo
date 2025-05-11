const fs = require("fs");
const path = require("path");
const https = require("https");

// Create images directory if it doesn't exist
const imagesDir = path.join(process.cwd(), "public", "images");
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// List of image URLs to download
// These are placeholder URLs - replace with actual AI-generated image URLs
const imagesToDownload = [
  {
    url: "https://source.unsplash.com/1600x900/?luxury+sedan+black",
    filename: "luxury-sedan.jpg",
    category: "Fleet",
  },
  {
    url: "https://source.unsplash.com/1600x900/?stretch+limousine+night",
    filename: "stretch-limo.jpg",
    category: "Fleet",
  },
  {
    url: "https://source.unsplash.com/1600x900/?wedding+limousine",
    filename: "wedding-limo.jpg",
    category: "Events",
  },
  {
    url: "https://source.unsplash.com/1600x900/?banff+mountain+view",
    filename: "banff-view.jpg",
    category: "Destinations",
  },
  {
    url: "https://source.unsplash.com/1600x900/?lake+louise+canada",
    filename: "lake-louise.jpg",
    category: "Destinations",
  },
  {
    url: "https://source.unsplash.com/1600x900/?corporate+event+luxury",
    filename: "corporate-event.jpg",
    category: "Events",
  },
  {
    url: "https://source.unsplash.com/1600x900/?party+limousine+interior",
    filename: "party-limo-interior.jpg",
    category: "Fleet",
  },
  {
    url: "https://source.unsplash.com/1600x900/?calgary+night+skyline",
    filename: "calgary-skyline.jpg",
    category: "Destinations",
  },
  {
    url: "https://source.unsplash.com/1600x900/?canmore+mountains",
    filename: "canmore-mountains.jpg",
    category: "Destinations",
  },
  {
    url: "https://source.unsplash.com/1600x900/?concert+venue+night",
    filename: "concert-venue.jpg",
    category: "Events",
  },
  {
    url: "https://source.unsplash.com/1600x900/?airport+luxury+terminal",
    filename: "airport-terminal.jpg",
    category: "Services",
  },
  {
    url: "https://source.unsplash.com/1600x900/?business+meeting+professional",
    filename: "business-meeting.jpg",
    category: "Corporate",
  },
];

// Function to download an image
const downloadImage = (imageObj) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, imageObj.filename);
    const file = fs.createWriteStream(filePath);

    https
      .get(imageObj.url, (response) => {
        response.pipe(file);

        file.on("finish", () => {
          file.close();
          console.log(`Downloaded: ${imageObj.filename}`);
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(filePath, () => {}); // Delete the file if there was an error
        console.error(`Error downloading ${imageObj.filename}:`, err.message);
        reject(err);
      });
  });
};

// Download all images
const downloadAllImages = async () => {
  console.log("Starting download of images...");

  for (const imageObj of imagesToDownload) {
    try {
      await downloadImage(imageObj);
    } catch (error) {
      console.error(`Failed to download ${imageObj.filename}`);
    }
  }

  console.log("All downloads completed!");
};

// Start the download process
downloadAllImages();
