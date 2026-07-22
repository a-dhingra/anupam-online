# Anupam Dhingra — Personal Portfolio

Source for [theanupam.org](https://theanupam.org) — a single-page personal
portfolio highlighting experience, skills, and projects.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** (build/dev) with the SWC React plugin
- **Tailwind CSS** + **shadcn/ui** (Radix primitives) for UI
- **Motion** (`motion/react`) for animation
- Deployed to **Azure Static Web Apps**

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:3000)
```

## Scripts

| Command             | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start the Vite dev server                     |
| `npm run build`     | Production build to `build/`                  |
| `npm run preview`   | Preview the production build locally          |
| `npm run typecheck` | Type-check the project (`tsc --noEmit`)       |
| `npm run lint`      | Lint with ESLint                              |

## Project structure

```
src/
  App.tsx              # Page composition (section order)
  components/          # Page sections (Hero, About, Skills, Projects, …)
    ui/                # shadcn/ui primitives (vendored)
    figma/             # ImageWithFallback helper
  lib/
    analytics.ts       # Provider-agnostic analytics wrapper (see below)
  assets/              # Images (profile, projects, …)
```

## Continuous integration

`.github/workflows/ci.yml` runs **lint → typecheck → build** on every push and
pull request to `main`. Deploys are handled separately by the Azure Static Web
Apps workflow.

## Analytics

Analytics are wired but **off by default**. The app calls a small
provider-agnostic `track()` helper (`src/lib/analytics.ts`) on key actions
(contact clicks, etc.). To turn it on, uncomment one provider snippet in the
`<head>` of `index.html` (Plausible and GoatCounter placeholders are included)
— no code changes are needed.
