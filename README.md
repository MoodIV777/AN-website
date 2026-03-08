# Alex Nie - Personal Website

A minimalist, markdown-driven personal website built with React, Vite, and Tailwind CSS. 
Designed to showcase projects, professional experience, and long-form insights in a clean, distraction-free environment.

## Features
- **Markdown Content:** All content (About, Projects, Insights) is managed via simple `.md` files in the `/content` directory.
- **Dynamic Routing:** React Router dynamically generates detail pages for long-form reading.
- **Minimalist Aesthetic:** Clean typography, subtle animations, and a focus on content.
- **Automated Deployment:** Integrated with GitHub Actions for seamless deployment to GitHub Pages.

## Managing Content
- **About:** Edit `/content/about.md`
- **Projects:** Add markdown files to `/content/projects/`
- **Insights:** Add markdown files to `/content/insights/` (Use standard `![alt](.../path)` syntax for images, placing assets in `/public/images/`)

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

*View the live site at: [https://moodiv777.github.io/AN-website/](https://moodiv777.github.io/AN-website/)*
