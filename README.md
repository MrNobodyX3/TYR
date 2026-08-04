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

## Project structure

- `app/components` — shared navigation, footer, video, and armor interfaces
- `app/lib` — shared links and navigation data
- `app/tanks` — vehicle data and the interactive tank browser
- `public` — game artwork, video clips, logos, and screenshots
- `Reference` — source screenshots used as the visual reference
- `tests` — route-level rendered HTML checks

The project is intended to remain local unless deployment is explicitly requested.
