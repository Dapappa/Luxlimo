import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

// Configuration
const API_KEY = process.env.GEMINI_API_KEY; // Set this as an environment variable
if (!API_KEY) {
  console.error("Error: GEMINI_API_KEY environment variable is not set");
  process.exit(1);
}

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(API_KEY);

/**
 * Test function to generate a single image using Gemini AI
 */
async function testImageGeneration() {
  try {
    console.log("Testing Gemini image generation...");

    const outputPath = "public/images/test-image.jpg";
    const prompt =
      "Create a professional 3D rendered image of a luxury black limousine on a mountain road with scenic views";

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    console.log("Requesting image generation...");
    const result = await model.generateContent(prompt);
    const response = await result.response;

    console.log("Response received:", response);

    const parts = response.candidates?.[0]?.content?.parts;
    console.log("Response parts:", parts);

    const imageData = parts?.[0]?.inlineData?.data;

    if (imageData) {
      // Ensure the directory exists
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Save the image
      const buffer = Buffer.from(imageData, "base64");
      fs.writeFileSync(outputPath, buffer);
      console.log(`✅ Test image saved as ${outputPath}`);
    } else {
      console.log("No image data received in the response");
      console.log("Response:", JSON.stringify(response, null, 2));
    }

    console.log("Test completed!");
  } catch (error) {
    console.error("❌ Error during test:", error.message);
    console.error(error);
  }
}

// Run the test function
testImageGeneration().catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});
