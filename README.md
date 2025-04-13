# AtoZPrompt.ai Website

This is the official website for AtoZPrompt.ai, a platform for managing AI prompts.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To build the static site for production:

```bash
npm run build
```

This will create a static export in the `out` directory.

## Deployment to GitHub Pages

1. Make sure your repository is named `atozprompt-ai` and is set up as a GitHub Pages site
2. Build the static site:
   ```bash
   npm run build
   ```
3. Commit and push the changes to your repository
4. GitHub Pages will automatically deploy the site from the `out` directory

## Project Structure

- `app/` - Contains the main application code
  - `page.js` - The main landing page
  - `layout.js` - The root layout component
  - `globals.css` - Global styles
- `public/` - Static assets
- `tailwind.config.js` - Tailwind CSS configuration
- `next.config.js` - Next.js configuration

## Technologies Used

- Next.js
- React
- Tailwind CSS
- GitHub Pages 