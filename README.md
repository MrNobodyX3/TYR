# TYR promotional site

A local promotional website for Stoke Games' tactical tank shooter, TYR. The site recreates the game's visual language with responsive navigation, animated ability cards, an interactive armor viewer, a complete vehicle database, and a studio page.

## Local development

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

The local site is available at `http://localhost:3000`.

## Routes

- `/` — game overview, trailer, abilities, and Steam calls to action
- `/tanks` — interactive armor model and all 18 playable tanks
- `/developers` — Stoke Games studio overview and team roster

## Useful commands

```bash
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
```

`npm test` creates a production build and verifies the rendered HTML for all three routes.

## GitHub Pages

Every push to `main` builds a static export and deploys it with the GitHub Pages workflow. The published site is available at:

`https://mrnobodyx3.github.io/TYR/`

The production build applies the `/TYR` repository path to navigation, artwork, fonts, videos, and social metadata. Local development continues to run at the root path.

## Project structure

- `app/components` — shared navigation, footer, video, and armor interfaces
- `app/lib` — shared links and navigation data
- `app/tanks` — vehicle data and the interactive tank browser
- `public` — game artwork, video clips, logos, and screenshots
- `tests` — route-level rendered HTML checks
