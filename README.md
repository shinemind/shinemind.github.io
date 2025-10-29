# ShineTime - A gentle way to start and end your day

![Page preview](./preview.png)

## Description:

A modern Next.js waitlist landing page for ShineTime chat app that captures potential customer emails using Formspark service.

- Designed using Figma
- Built using powerful technologies: Next.js, TypeScript and Tailwind CSS
- Mobile responsive
- Static export ready for any hosting platform
- Formspark integration for email collection

## Getting Started

- Clone this repository

  ```bash
  git clone <your-repo-url>
  ```

- Install dependencies
  ```bash
  pnpm install
  ```

- Set up environment variables (optional)
  ```bash
  # Create .env.local file
  NEXT_PUBLIC_FORMSPARK_ENDPOINT=https://submit-form.com/your-form-id
  # OR
  NEXT_PUBLIC_FORMSPARK_FORM_ID=your-form-id
  ```

- Run development server
  ```bash
  pnpm dev
  ```

- Build static export
  ```bash
  pnpm build
  ```

## Deployment

This project is configured for static export and can be deployed to any static hosting platform:

- **GitHub Pages**: Automatic deployment via GitHub Actions (included)
- **Netlify**: Drag and drop the `out/` folder
- **Vercel**: Connect your repository
- **Any static host**: Upload the `out/` folder contents

The static files are generated in the `out/` directory after running `pnpm build`.

### Formspark Setup

1. Create a form at [Formspark](https://formspark.io/)
2. Get your form endpoint URL
3. Set the environment variable `NEXT_PUBLIC_FORMSPARK_ENDPOINT` or `NEXT_PUBLIC_FORMSPARK_FORM_ID`

## Features

- ✅ Static export ready
- ✅ Formspark email collection
- ✅ Mobile responsive design
- ✅ TypeScript support
- ✅ Tailwind CSS styling
- ✅ GitHub Actions deployment
- ✅ Image optimization disabled for static hosting

## Support

If you appreciate this project, consider supporting the development by [buying me a coffee](https://www.buymeacoffee.com/soufianeelc).

Thank you for your generosity! ☕
