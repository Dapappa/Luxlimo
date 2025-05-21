# Environment Setup for Image Generation

This document explains how to set up environment variables for the image generation scripts.

## Local Development

For local development, create a `.env.local` file in the root of your project with the following content:

```
GEMINI_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual Gemini API key.

## Netlify Deployment

For Netlify deployment, you need to set up environment variables in the Netlify dashboard:

1. Go to your Netlify site settings
2. Navigate to "Environment" → "Environment variables"
3. Add the following environment variable:
   - Key: `GEMINI_API_KEY`
   - Value: Your Gemini API key

## Important Security Notes

- Never commit your `.env.local` file or any file containing API keys to version control
- The `.gitignore` file is already configured to ignore `.env*` files
- The image generation scripts are designed to skip gracefully during production builds if no API key is available
- For production deployments, only set the environment variables in your deployment platform's secure environment settings

## Troubleshooting

If you encounter build errors:

1. Check that your API key is correctly set up in your environment
2. Verify that the image generation scripts are not running during production builds
3. If you're seeing API-related errors during deployment, make sure your deployment platform supports the environment variables you're using
