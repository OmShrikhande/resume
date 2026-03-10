# Deployment Guide (Netlify)

This repo deploys to Netlify using the official Next.js integration via `@netlify/plugin-nextjs`.

## Recommended Setup (Git)

1. In Netlify, add a new site and import your Git repository.
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Ensure the Next.js plugin is enabled:
   - This repo includes it in `netlify.toml` via `[[plugins]] package = "@netlify/plugin-nextjs"`.

Note: The Netlify Next.js plugin currently expects the Webpack build output. This repo forces that for production via
`next build --webpack` in `package.json`.

## Environment Variables

Add any required variables from `.env.example` in:
Netlify site settings -> Build & deploy -> Environment.

## Node Version

Next.js (as currently used in this repo) requires Node `>= 20.9.0`.
This repo pins Netlify's build image via `NODE_VERSION = "20.9.0"` in `netlify.toml`.

## Troubleshooting

- Build fails fetching Google Fonts:
  - This repo avoids `next/font/google` (which fetches at build time). Fonts are loaded at runtime in `src/app/head.tsx`.
- 404 on deep links:
  - Ensure `@netlify/plugin-nextjs` is active. It configures routing for Next.js automatically.
