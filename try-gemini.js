import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

async function main() {
  // Use environment variable, don't hardcode key
  const apiKey = process.env.GEMINI_API_KEY;

  // Skip during build process
  if (!apiKey && process.env.NODE_ENV === "production") {
    console.log(
      "Skipping image generation during build process - no API key available"
    );
    return; // Exit successfully to not break build
  }

  if (!apiKey) {
    console.log("Warning: No GEMINI_API_KEY environment variable found.");
    return; // Exit successfully to not break build
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  const contents =
    "Hi, can you create a 3d rendered image of a pig " +
    "with wings and a top hat flying over a happy " +
    "futuristic scifi city with lots of greenery?";

  try {
    console.log("Attempting to generate image with Gemini API...");

    // Try multiple model names to see if any work for image generation
    const modelNames = [
      "gemini-pro",
      "gemini-1.5-pro",
      "gemini-1.5-flash",
      "gemini-1.0-pro-vision",
    ];

    for (const modelName of modelNames) {
      try {
        console.log(`Trying model: ${modelName}`);

        const model = genAI.getGenerativeModel({ model: modelName });

        // For generationConfig, try to mimic the original code's intent
        const result = await model.generateContent(contents);
        const response = await result.response;
        console.log("Response:", response);

        // Check if there's image data in the response
        const parts = response.candidates?.[0]?.content?.parts || [];
        console.log("Parts:", parts);

        for (const part of parts) {
          if (part.text) {
            console.log("Text response:", part.text);
          }

          if (part.inlineData?.data) {
            console.log("Found image data! Saving...");
            const imageData = part.inlineData.data;
            const buffer = Buffer.from(imageData, "base64");
            fs.writeFileSync(`gemini-${modelName}-image.png`, buffer);
            console.log(`Image saved as gemini-${modelName}-image.png`);
          }
        }

        console.log(`Test with ${modelName} completed.`);
      } catch (modelError) {
        console.error(`Error with model ${modelName}:`, modelError.message);
      }
    }

    console.log("All model tests completed.");
  } catch (error) {
    console.error("Error during image generation:", error);
  }
}

// Run the main function
main();
