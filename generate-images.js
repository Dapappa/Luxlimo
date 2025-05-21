import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// Configuration
const API_KEY = process.env.GEMINI_API_KEY; // Set this as an environment variable
if (!API_KEY) {
  console.error("Error: GEMINI_API_KEY environment variable is not set");
  process.exit(1);
}

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(API_KEY);

// Define location image prompts
const locationPrompts = [
  {
    name: "calgary-skyline",
    prompt:
      "Create a professional 3D rendered image of Calgary city skyline at sunset, with the iconic Calgary Tower prominently visible. Use a wide-angle perspective that showcases the modern skyscrapers and urban landscape. Style: cinematic, photorealistic, dramatic lighting.",
    outputPath: "public/images/locations/calgary-skyline.jpg",
  },
  {
    name: "edmonton-skyline",
    prompt:
      "Create a professional 3D rendered image of Edmonton city skyline at dusk, featuring the North Saskatchewan River and distinctive buildings. Style: cinematic, ultra-detailed, dramatic sky with some clouds, photorealistic.",
    outputPath: "public/images/locations/edmonton-skyline.jpg",
  },
  {
    name: "banff-mountains",
    prompt:
      "Create a professional 3D rendered image of Banff National Park mountains with turquoise lake in the foreground, snow-capped peaks, and dense evergreen forests. Style: cinematic, ultra-detailed, golden hour lighting, majestic landscape.",
    outputPath: "public/images/locations/banff-mountains.jpg",
  },
  {
    name: "canmore-engine-bridge",
    prompt:
      "Create a professional 3D rendered image of Canmore Engine Bridge with the Three Sisters mountains in the background. Include the river below and lush vegetation. Style: cinematic, photorealistic, beautiful mountain lighting.",
    outputPath: "public/images/locations/canmore-engine-bridge.jpg",
  },
  {
    name: "lake-louise",
    prompt:
      "Create a professional 3D rendered image of Lake Louise with its iconic turquoise waters, the Fairmont Chateau Lake Louise hotel, and surrounding mountain peaks. Style: cinematic, photorealistic, pristine nature, stunning views.",
    outputPath: "public/images/locations/lake-louise.jpg",
  },
  {
    name: "jasper-national-park",
    prompt:
      "Create a professional 3D rendered image of Jasper National Park landscape featuring mountains, glacier-fed lakes, wildlife in the distance, and dense forests. Style: cinematic, photorealistic, wilderness beauty.",
    outputPath: "public/images/locations/jasper-national-park.jpg",
  },
  {
    name: "waterton-lakes",
    prompt:
      "Create a professional 3D rendered image of Waterton Lakes National Park with the Prince of Wales Hotel overlooking the lake, mountains in the background. Style: cinematic, photorealistic, dramatic lighting.",
    outputPath: "public/images/locations/waterton-lakes.jpg",
  },
  {
    name: "elk-island",
    prompt:
      "Create a professional 3D rendered image of Elk Island National Park with bison grazing in a prairie landscape, aspen trees, and a small lake. Style: cinematic, photorealistic, golden hour lighting.",
    outputPath: "public/images/locations/elk-island.jpg",
  },
  {
    name: "kananaskis",
    prompt:
      "Create a professional 3D rendered image of Kananaskis Country wilderness with rugged mountains, alpine meadows, and a winding river. Style: cinematic, photorealistic, dramatic clouds, early morning light.",
    outputPath: "public/images/locations/kananaskis.jpg",
  },
  {
    name: "red-deer-city",
    prompt:
      "Create a professional 3D rendered image of Red Deer city with its skyline, the Red Deer River, and surrounding parkland. Style: cinematic, photorealistic, sunset lighting, urban landscape.",
    outputPath: "public/images/locations/red-deer-city.jpg",
  },
  {
    name: "lethbridge-nikka-yuko",
    prompt:
      "Create a professional 3D rendered image of Nikka Yuko Japanese Garden in Lethbridge with traditional structures, bridge over pond, cherry blossoms, and carefully arranged rocks. Style: cinematic, photorealistic, serene atmosphere.",
    outputPath: "public/images/locations/lethbridge-nikka-yuko.jpg",
  },
];

// Define tour image prompts
const tourPrompts = [
  {
    name: "banff-explorer",
    prompt:
      "Create a professional 3D rendered image of a luxury SUV or limousine on a scenic mountain road in Banff National Park with spectacular mountain views and forests. Style: cinematic, photorealistic, adventure travel, luxury experience.",
    outputPath: "public/images/tours/banff-explorer.jpg",
  },
  {
    name: "southern-alberta",
    prompt:
      "Create a professional 3D rendered image of a luxury vehicle driving through the prairie landscape of Southern Alberta with rolling hills, vast skies, and distant mountains. Style: cinematic, photorealistic, road trip adventure.",
    outputPath: "public/images/tours/southern-alberta.jpg",
  },
  {
    name: "johnston-canyon",
    prompt:
      "Create a professional 3D rendered image of Johnston Canyon in Banff with its spectacular waterfalls, canyon walls, and walkways. Style: cinematic, photorealistic, natural wonder, adventure destination.",
    outputPath: "public/images/tours/johnston-canyon.jpg",
  },
  {
    name: "emerald-lake",
    prompt:
      "Create a professional 3D rendered image of Emerald Lake in Yoho National Park with its vivid green waters, surrounding mountains, and forests. Style: cinematic, photorealistic, pristine nature, tranquil scene.",
    outputPath: "public/images/tours/emerald-lake.jpg",
  },
];

// Combine all prompts
const allPrompts = [...locationPrompts, ...tourPrompts];

/**
 * Generates an image using Gemini AI and saves it to the specified path
 * @param {Object} item - The prompt item containing name, prompt and outputPath
 * @returns {Promise<void>}
 */
async function generateAndSaveImage(item) {
  try {
    console.log(`Generating image for ${item.name}...`);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-latest",
    });

    const result = await model.generateContent([item.prompt]);
    const response = await result.response;
    const imageData =
      response.candidates[0]?.content?.parts[0]?.inlineData?.data;

    if (imageData) {
      // Ensure the directory exists
      const dir = path.dirname(item.outputPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Save the image
      const buffer = Buffer.from(imageData, "base64");
      fs.writeFileSync(item.outputPath, buffer);
      console.log(`✅ Image saved as ${item.outputPath}`);
    } else {
      console.log(`No image data received for ${item.name}`);
      console.log("Response:", JSON.stringify(response, null, 2));
    }
  } catch (error) {
    console.error(`❌ Error generating image for ${item.name}:`, error.message);
    console.error(error);
  }
}

/**
 * Main function to generate all images
 */
async function main() {
  console.log("Starting image generation for Lux Limo website...");
  console.log(`Total images to generate: ${allPrompts.length}`);

  // Generate images sequentially to avoid hitting rate limits
  for (const prompt of allPrompts) {
    await generateAndSaveImage(prompt);
    // Add a small delay between requests to avoid rate limits
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  console.log("Image generation completed!");

  // Commit and push changes to Git
  try {
    console.log("Committing changes to Git...");
    execSync("git add public/images/locations/*.jpg public/images/tours/*.jpg");
    execSync('git commit -m "Add generated images for locations and tours"');
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
