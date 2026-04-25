# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

**Viso Atelier** is a luxury architectural studio landing page. Single-route SPA structure with a project detail sub-page.

- **Framework:** Next.js 16.2.4 with App Router (`src/app/`)
- **Styling:** Custom CSS only — no Tailwind. All base styles, utility classes, and design tokens live in `src/app/globals.css`.
- **Path alias:** `@/` maps to `./src/`

### Design tokens (`globals.css`)

All colors are CSS variables on `:root`. Key ones:
- `--color-primary`: `#000000`
- `--color-accent`: `#C5A059` (champagne gold — used for labels, hover states)
- `--color-surface-container-low`: light gray sections
- `--font-sans` / `--font-serif`: injected by Next.js via `next/font/google` (Inter / Noto Serif)

Spacing: `--margin-edge` (64px desktop / 24px mobile), `--section-gap` (128px / 64px), `--container-max` (1440px).

Utility classes: `.container`, `.section-padding`, `.label-caps`.

### Components

All components are in `src/components/`. `Navigation` and `Hero` are client components (`'use client'`); `Footer` is a server component.

- **`Navigation`** — fixed navbar; adds `.scrolled` class on scroll for backdrop blur effect.
- **`Hero`** — scroll-driven video scrubber. The section is `250vh` tall with a sticky inner div. On scroll, `window.scrollY` is mapped to `video.currentTime` via `requestAnimationFrame`. Video source: `/public/assets/videos/Sketch_to_3D.mp4`.
- **`ProjectsGrid`** — portfolio grid with category filter buttons; manages active filter in local state.
- **`Footer`** — 4-column grid layout with links.

### Page structure (`src/app/page.tsx`)

Single page with sections rendered in sequence: Hero → Manifesto → Projects (`ProjectsGrid`) → Studio → Values → Journal → Contact. Each section uses `id` attributes for anchor navigation. Inline `<style>` tags are used for form and responsive overrides within the page component.

### Routes

- `/` — home page (`src/app/page.tsx`)
- `/project-detail` — project detail view (`src/app/project-detail/page.tsx`)

The root layout (`src/app/layout.tsx`) wraps all pages with `<Navigation />` and `<Footer />`.
