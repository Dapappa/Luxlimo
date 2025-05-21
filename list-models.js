import { GoogleGenerativeAI } from "@google/generative-ai";

// Configuration
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Error: GEMINI_API_KEY environment variable is not set");
  process.exit(1);
}

// Initialize the API
const genAI = new GoogleGenerativeAI(API_KEY);

async function listModels() {
  try {
    console.log("Listing available Gemini models...");

    // List available models
    const models = await genAI.listModels();
    console.log("Available models:", models);
  } catch (error) {
    console.error("Error listing models:", error);
  }
}

listModels();
