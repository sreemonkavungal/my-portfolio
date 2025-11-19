# My Portfolio

Personal portfolio for SREEMON KS, built with React 19, Vite 7, and Tailwind CSS 4. It highlights full‑stack MERN work, WordPress performance projects, and provides easy entry points to contact and policy pages.

## Features

- Responsive hero with drag-protected imagery, primary CTAs, and tech stack chips.
- Data-driven project gallery (`src/data/ProjectData.js`) powered by local image assets.
- Dedicated pages for About, Skills, Projects, Contact, Terms of Service, and Privacy Policy.
- Contact form section with validation-friendly structure and clear copy blocks.
- Shared `NavBar`/`FooterSection` components for consistent navigation and branding.
- Vercel Speed Insights and Analytics already wired for production observability.

## Tech Stack

- React 19 with React Router 7 for page routing.
- Vite 7 + SWC for local dev and bundling.
- Tailwind CSS 4 via `@tailwindcss/vite`.
- React Icons, Headless UI, and Heroicons for UI elements.
- Vercel Analytics & Speed Insights for performance tracking.

## Getting Started

Prerequisites: Node.js 18+ (recommended 20 LTS) and npm 10+.

```bash
npm install        # install deps
npm run dev        # start Vite dev server on http://localhost:5173
npm run lint       # run ESLint across the project
npm run build      # create production build in dist/
npm run preview    # preview the production build locally
```

## Project Structure

```
my-portfolio/
├── public/                 # static assets + project thumbnails
├── src/
│   ├── assets/             # local hero/profile imagery
│   ├── components/         # Hero, About, Skills, Projects, Contact, Policies, etc.
│   ├── pages/              # Route-level wrappers composed from shared components
│   ├── data/ProjectData.js # central list feeding ProjectSection cards
│   ├── App.jsx             # router map + analytics hooks
│   └── main.jsx            # React root + global styles
├── App.css / index.css     # global styling helpers
└── vite.config.js          # Vite + Tailwind integration
```

## Customization Guide

- **Projects**: Update `src/data/ProjectData.js` to add/edit showcased work. Ensure matching image files live in `public/images/`.
- **Hero Content**: Adjust introductory copy, CTAs, and chip labels inside `src/components/HeroSection.jsx`.
- **Skills/About Sections**: Tweak markdown-like paragraphs, stat blocks, or logos within their respective component files.
- **Policies**: Edit `PrivacySection.jsx` and `TermsSection.jsx` (also used by the corresponding pages) to keep legal copy current.
- **Branding**: Replace assets in `src/assets/images/` and update favicon files under `public/` for personalized visuals.

## Deployment

1. Set environment variables (if any future backend integrations require them).
2. Run `npm run build`.
3. Deploy the generated `dist/` folder. The project is optimized for Vercel, but any static host (Netlify, Cloudflare Pages, GitHub Pages, etc.) works. Vercel will automatically pick up the `vercel.json` metadata and enable the bundled analytics tooling.

## Contributing

This is a personal portfolio, but issues and suggestions are welcome. Feel free to open a PR for improvements or submit an issue if you notice a bug.

## License

MIT © SREEMON KS
