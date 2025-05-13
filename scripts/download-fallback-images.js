import fs from "fs";
import path from "path";
import https from "https";

// Create images directory if it doesn't exist
const imagesDir = path.join(process.cwd(), "public", "images");
const galleryDir = path.join(imagesDir, "gallery");

// These are fallback images for the ones that failed in the main download
const fallbackImages = [
  // Fallbacks for failed images
  {
    // Luxury SUV with Private Jet - alternative
    url: "https://images.pexels.com/photos/4093083/pexels-photo-4093083.jpeg?cs=srgb&dl=pexels-ingo-joseph-4093083.jpg&fm=jpg&w=1800&h=1200",
    filename: "luxury-suv-jet.jpg",
    category: "Fleet",
    title: "Luxury SUV with Private Jet",
  },
  {
    // Private Airfield Service - alternative
    url: "https://images.pexels.com/photos/1005846/pexels-photo-1005846.jpeg?cs=srgb&dl=pexels-skitterphoto-1005846.jpg&fm=jpg&w=1800&h=1200",
    filename: "private-airfield.jpg",
    category: "Experience",
    title: "Private Airfield Service",
  },
  {
    // Calgary Skyline - alternative
    url: "https://images.pexels.com/photos/2309862/pexels-photo-2309862.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-2309862.jpg&fm=jpg&w=1800&h=1200",
    filename: "calgary-tours.jpg",
    category: "Destinations",
    title: "Calgary City Tours",
  },
];

// Function to download a fallback image
const downloadFallbackImage = (imageObj) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(galleryDir, imageObj.filename);
    const file = fs.createWriteStream(filePath);

    console.log(`Downloading fallback for: ${imageObj.filename}`);

    https
      .get(imageObj.url, (response) => {
        // Handle redirects
        if (response.statusCode === 301 || response.statusCode === 302) {
          const newUrl = response.headers.location;
          console.log(`Redirecting to: ${newUrl}`);
          https
            .get(newUrl, (newResponse) => {
              newResponse.pipe(file);
              file.on("finish", () => {
                file.close();
                console.log(`✅ Downloaded fallback: ${imageObj.filename}`);
                resolve();
              });
            })
            .on("error", handleError);
          return;
        }

        response.pipe(file);

        file.on("finish", () => {
          file.close();
          console.log(`✅ Downloaded fallback: ${imageObj.filename}`);
          resolve();
        });
      })
      .on("error", handleError);

    function handleError(err) {
      file.close();
      fs.unlink(filePath, () => {});
      console.error(
        `Error downloading fallback ${imageObj.filename}:`,
        err.message
      );
      reject(err);
    }
  });
};

// Download fallback images
const downloadFallbackImages = async () => {
  console.log("Downloading fallback images for any that failed...");

  for (const imageObj of fallbackImages) {
    try {
      await downloadFallbackImage(imageObj);
    } catch (error) {
      console.error(`Failed to download fallback for ${imageObj.filename}`);
    }
  }

  console.log("All fallback images downloaded!");
};

// Start the download process
downloadFallbackImages();
