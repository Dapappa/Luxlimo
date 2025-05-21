import fs from "fs";
import path from "path";
import https from "https";
import { execSync } from "child_process";

// Define location image details
const locationImages = [
  {
    name: "calgary-skyline",
    query: "calgary skyline sunset",
    outputPath: "public/images/locations/calgary-skyline.jpg",
  },
  {
    name: "edmonton-skyline",
    query: "edmonton skyline river",
    outputPath: "public/images/locations/edmonton-skyline.jpg",
  },
  {
    name: "banff-mountains",
    query: "banff national park mountains",
    outputPath: "public/images/locations/banff-mountains.jpg",
  },
  {
    name: "canmore-engine-bridge",
    query: "canmore engine bridge three sisters",
    outputPath: "public/images/locations/canmore-engine-bridge.jpg",
  },
  {
    name: "lake-louise",
    query: "lake louise turquoise chateau",
    outputPath: "public/images/locations/lake-louise.jpg",
  },
  {
    name: "jasper-national-park",
    query: "jasper national park mountains",
    outputPath: "public/images/locations/jasper-national-park.jpg",
  },
  {
    name: "waterton-lakes",
    query: "waterton lakes prince of wales hotel",
    outputPath: "public/images/locations/waterton-lakes.jpg",
  },
  {
    name: "elk-island",
    query: "elk island national park bison",
    outputPath: "public/images/locations/elk-island.jpg",
  },
  {
    name: "kananaskis",
    query: "kananaskis country mountains",
    outputPath: "public/images/locations/kananaskis.jpg",
  },
  {
    name: "red-deer-city",
    query: "red deer alberta city skyline",
    outputPath: "public/images/locations/red-deer-city.jpg",
  },
  {
    name: "lethbridge-nikka-yuko",
    query: "nikka yuko japanese garden lethbridge",
    outputPath: "public/images/locations/lethbridge-nikka-yuko.jpg",
  },
];

// Define tour image details
const tourImages = [
  {
    name: "banff-explorer",
    query: "luxury SUV mountains banff",
    outputPath: "public/images/tours/banff-explorer.jpg",
  },
  {
    name: "southern-alberta",
    query: "southern alberta prairie landscape",
    outputPath: "public/images/tours/southern-alberta.jpg",
  },
  {
    name: "johnston-canyon",
    query: "johnston canyon banff waterfall",
    outputPath: "public/images/tours/johnston-canyon.jpg",
  },
  {
    name: "emerald-lake",
    query: "emerald lake yoho national park",
    outputPath: "public/images/tours/emerald-lake.jpg",
  },
];

// Combine all image requests
const allImages = [...locationImages, ...tourImages];

/**
 * Downloads an image from Unsplash using the query
 * @param {Object} item - Contains name, query and outputPath
 * @returns {Promise<void>}
 */
function downloadImage(item) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading image for ${item.name}...`);

    // Construct Unsplash source URL with the query
    const query = encodeURIComponent(item.query);
    const imageUrl = `https://source.unsplash.com/1200x800/?${query}`;

    // Ensure the directory exists
    const dir = path.dirname(item.outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Download the image
    const file = fs.createWriteStream(item.outputPath);
    https
      .get(imageUrl, (response) => {
        response.pipe(file);

        file.on("finish", () => {
          file.close();
          console.log(`✅ Image saved as ${item.outputPath}`);
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(item.outputPath, () => {}); // Delete the file if there's an error
        console.error(
          `❌ Error downloading image for ${item.name}:`,
          err.message
        );
        reject(err);
      });
  });
}

/**
 * Main function to download all images
 */
async function main() {
  console.log("Starting image download for Lux Limo website...");
  console.log(`Total images to download: ${allImages.length}`);

  // Download images sequentially
  for (const image of allImages) {
    try {
      await downloadImage(image);
      // Add a small delay between requests
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (err) {
      console.error(
        `Failed to download ${image.name}, continuing with next image`
      );
    }
  }

  console.log("Image downloads completed!");

  // Commit and push changes to Git
  try {
    console.log("Committing changes to Git...");
    execSync("git add public/images/locations/*.jpg public/images/tours/*.jpg");
    execSync('git commit -m "Add downloaded images for locations and tours"');
    execSync("git push");
    console.log("✅ Successfully pushed changes to Git!");
  } catch (error) {
    console.error("❌ Error pushing to Git:", error.message);
  }
}

// Run the main function
main().catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});
