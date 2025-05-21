import { GoogleGenAI, Modality } from "@google/genai";
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

// Configuration - Use environment variable, don't hardcode key
const API_KEY = process.env.GEMINI_API_KEY;

// Skip image generation during build process
if (!API_KEY && process.env.NODE_ENV === "production") {
  console.log(
    "Skipping image generation during build process - no API key available"
  );
  process.exit(0); // Exit successfully to not break build
}

if (!API_KEY) {
  console.log("Warning: No GEMINI_API_KEY environment variable found.");
  process.exit(0); // Exit successfully to not break build
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

// Define the southern-alberta image that failed previously
const imageDetails = {
  name: "southern-alberta",
  prompt:
    "Create a professional 3D rendered image of a luxury vehicle driving through the prairie landscape of Southern Alberta with rolling hills, vast skies, and distant mountains. Style: cinematic, photorealistic, road trip adventure.",
  outputPath: "public/images/tours/southern-alberta.jpg",
};

/**
 * Generates an image using Gemini AI and saves it to the specified path
 * @param {Object} item - The prompt item containing name, prompt and outputPath
 * @returns {Promise<void>}
 */
async function generateAndSaveImage(item) {
  try {
    console.log(`Generating image for ${item.name}...`);

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-preview-image-generation",
      contents: item.prompt,
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
      },
    });

    console.log(`Response received for ${item.name}`);

    // Ensure the directory exists
    const dir = path.dirname(item.outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Process and save the image
    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
        console.log(`Text description: ${part.text.substring(0, 100)}...`);
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        const buffer = Buffer.from(imageData, "base64");
        fs.writeFileSync(item.outputPath, buffer);
        console.log(`✅ Image saved as ${item.outputPath}`);
      }
    }

    // Commit and push the changes to Git
    try {
      console.log("Committing changes to Git...");
      execSync(`git add ${item.outputPath}`);
      execSync(
        `git commit -m "Add generated image for ${item.name} using Gemini API"`
      );
      execSync("git push");
      console.log("✅ Successfully pushed changes to Git!");
    } catch (error) {
      console.error("❌ Error pushing to Git:", error.message);
    }
  } catch (error) {
    console.error(`❌ Error generating image for ${item.name}:`, error.message);
  }
}

// Run the function
generateAndSaveImage(imageDetails).catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});
