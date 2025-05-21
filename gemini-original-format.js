import * as fs from "fs";

// First attempt to use the exact package and format the user provided
async function attemptOriginalFormat() {
  try {
    // Get API key from environment variable
    const apiKey = process.env.GEMINI_API_KEY;

    // Skip during build process
    if (!apiKey && process.env.NODE_ENV === "production") {
      console.log(
        "Skipping image generation during build process - no API key available"
      );
      return false; // Exit successfully to not break build
    }

    if (!apiKey) {
      console.log("Warning: No GEMINI_API_KEY environment variable found.");
      return false; // Exit successfully to not break build
    }

    // Dynamically import the package to avoid syntax errors if it doesn't exist
    const { GoogleGenAI, Modality } = await import("@google/genai");

    console.log("Successfully imported @google/genai package");

    const ai = new GoogleGenAI({
      apiKey: apiKey,
    });

    const contents =
      "Hi, can you create a 3d rendered image of a pig " +
      "with wings and a top hat flying over a happy " +
      "futuristic scifi city with lots of greenery?";

    // Set responseModalities to include "Image" so the model can generate an image
    console.log("Attempting to generate content with original format...");
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-preview-image-generation",
      contents: contents,
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
      },
    });

    console.log("Response received!", response);

    for (const part of response.candidates[0].content.parts) {
      // Based on the part type, either show the text or save the image
      if (part.text) {
        console.log(part.text);
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        const buffer = Buffer.from(imageData, "base64");
        fs.writeFileSync("gemini-native-image.png", buffer);
        console.log("Image saved as gemini-native-image.png");
      }
    }

    return true;
  } catch (error) {
    console.error("Error with original format:", error);
    return false;
  }
}

// Fallback to the new format if the original fails
async function attemptNewFormat() {
  try {
    // Get API key from environment variable
    const apiKey = process.env.GEMINI_API_KEY;

    // Skip during build process
    if (!apiKey && process.env.NODE_ENV === "production") {
      console.log(
        "Skipping image generation during build process - no API key available"
      );
      return false; // Exit successfully to not break build
    }

    if (!apiKey) {
      console.log("Warning: No GEMINI_API_KEY environment variable found.");
      return false; // Exit successfully to not break build
    }

    const { GoogleGenerativeAI } = await import("@google/generative-ai");

    console.log("Attempting with new API format...");

    const genAI = new GoogleGenerativeAI(apiKey);

    const contents =
      "Hi, can you create a 3d rendered image of a pig " +
      "with wings and a top hat flying over a happy " +
      "futuristic scifi city with lots of greenery?";

    // Try the new model names
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    console.log("Generating content with new format...");
    const result = await model.generateContent(contents);
    const response = await result.response;

    console.log("New format response:", response);

    // Check for image data in the response
    const parts = response.candidates?.[0]?.content?.parts || [];
    for (const part of parts) {
      if (part.text) {
        console.log("Text response:", part.text);
      }

      if (part.inlineData?.data) {
        console.log("Found image data! Saving...");
        const imageData = part.inlineData.data;
        const buffer = Buffer.from(imageData, "base64");
        fs.writeFileSync("gemini-new-format-image.png", buffer);
        console.log("Image saved as gemini-new-format-image.png");
      }
    }

    return true;
  } catch (error) {
    console.error("Error with new format:", error);
    return false;
  }
}

// Main function to try both approaches
async function main() {
  console.log("Attempting to use Gemini API for image generation...");

  // First try the original format
  const originalSuccess = await attemptOriginalFormat();

  // If original format fails, try the new format
  if (!originalSuccess) {
    console.log("Original format failed, trying new format...");
    await attemptNewFormat();
  }

  console.log("All attempts completed.");
}

main();
