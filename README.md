# David Nissenoff — Portfolio

Production portfolio site for game development and software engineering work.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Source structure

```text
src/
  assets/        Images and video placeholders
  components/    Shared UI building blocks
  data/          Site content (projects, skills, timeline)
  hooks/         Reusable React hooks
  layout/        Navbar, Footer, page shell
  sections/      Page sections (Hero, Projects, etc.)
  styles/        Global Tailwind layers
  types/         Shared TypeScript types
  utils/         Helpers
```

Path alias: `@/` → `src/`

## Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Local development server          |
| `npm run build`   | Production build                  |
| `npm run preview` | Preview production build          |
| `npm run lint`    | ESLint                            |
| `npm run format`  | Prettier write                    |
| `npm run deploy`  | Build and publish to GitHub Pages |

## GitHub Pages

Configured for user site hosting at `https://dnoff.github.io`.
