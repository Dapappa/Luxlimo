# Image Generation for Lux Limousine Website

This document explains how to use the image generation script to create professional 3D rendered images for the "Areas We Serve" and "Tours and Experiences" pages.

## Prerequisites

- Node.js installed on your system
- Google Gemini API key
- Git configured on your system

## Setup

1. Make sure you have the Gemini API client installed:

```bash
npm install @google/genai
```

2. Set your Gemini API key as an environment variable:

```bash
# On Windows
set GEMINI_API_KEY=your_api_key_here

# On macOS/Linux
export GEMINI_API_KEY=your_api_key_here
```

## Running the Script

1. Execute the script to generate all images:

```bash
node generate-images.js
```

2. The script will:
   - Generate images for all locations in the "Areas We Serve" page
   - Generate images for all tours in the "Tours and Experiences" page
   - Save the images to the appropriate directories
   - Commit and push the changes to Git

## Image Locations

- Location images are saved to: `public/images/locations/`
- Tour images are saved to: `public/images/tours/`

## Customization

If you need to modify the image prompts or add new locations/tours, edit the `locationPrompts` and `tourPrompts` arrays in the `generate-images.js` file.

Each prompt object consists of:

- `name`: The identifier for the image
- `prompt`: The text prompt for Gemini AI to generate the image
- `outputPath`: Where to save the generated image

## Troubleshooting

- **API Key Issues**: Make sure your Gemini API key is set correctly as an environment variable
- **Rate Limits**: The script includes a 2-second delay between requests to avoid rate limits
- **Generation Failures**: If an image fails to generate, the script will log the error and continue with the next image

## Notes

- The Gemini model used (`gemini-2.0-flash-preview-image-generation`) is designed for image generation
- Generated images are high-quality 3D renderings suitable for professional website use
- The script handles Git operations automatically; make sure you have permission to push to the repository
