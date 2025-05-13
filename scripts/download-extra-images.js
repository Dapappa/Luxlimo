import fs from "fs";
import path from "path";
import https from "https";

// Create images directory if it doesn't exist
const imagesDir = path.join(process.cwd(), "public", "images");
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// List of image URLs for luxury cars - using Unsplash for royalty-free images
const luxuryImages = [
  {
    url: "https://source.unsplash.com/1600x900/?bentley+luxury+car",
    filename: "luxury-bentley.jpg",
  },
  {
    url: "https://source.unsplash.com/1600x900/?rolls+royce+phantom",
    filename: "luxury-rolls-royce.jpg",
  },
  {
    url: "https://source.unsplash.com/1600x900/?mercedes+benz+luxury",
    filename: "luxury-mercedes.jpg",
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
const downloadLuxuryImages = async () => {
  console.log("Starting download of luxury car images...");

  for (const imageObj of luxuryImages) {
    try {
      await downloadImage(imageObj);
    } catch {
      console.error(`Failed to download ${imageObj.filename}`);
    }
  }

  console.log("All luxury car images downloaded!");
};

// Start the download process
downloadLuxuryImages();
