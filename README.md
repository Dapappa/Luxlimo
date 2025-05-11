# Lux Limousine Service Website

A luxury transportation service website built with Next.js, TypeScript, and Tailwind CSS. This modern, responsive website showcases the services offered by Lux Limousine with a stunning black and gold design theme.

## Features

- Responsive design optimized for all device sizes
- Modern luxury aesthetic with black and gold color scheme
- Smooth animations and transitions using Framer Motion
- Contact form with email integration
- Booking system
- Service showcase
- Gallery
- Areas we serve section

## Technology Stack

- **Next.js** - React framework with server-side rendering
- **TypeScript** - For type safety and better developer experience
- **Tailwind CSS** - For styling and responsive design
- **Framer Motion** - For animations
- **React Hook Form** - For form handling
- **EmailJS** - For email integration

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/luxlimo.git
   cd luxlimo
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   - Copy the `src/config/env.example.ts` file and configure your EmailJS credentials

4. Start the development server:

   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Email Integration

The contact and booking forms use EmailJS for sending emails. To set up email integration:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the environment variables with your credentials

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts`. The primary color is gold (#D4AF37) and the secondary color is rich black (#121212).

### Images

Replace the placeholder images in the `public/images` directory with your own high-quality images.

## Deployment

The site can be deployed on Vercel, Netlify, or any other platform that supports Next.js applications.

```bash
npm run build
# or
yarn build
```

## Credits

- Design and development by [Your Name]
- Icons from [Heroicons](https://heroicons.com/)

## License

This project is licensed under the MIT License.
