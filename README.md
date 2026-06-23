# Atelier — Clothes Rental Platform (Frontend)

Atelier is an editorial, peer-to-peer fashion rental platform inspired by HURR and Rent the Runway. This repository contains the **frontend** of the application — a fully responsive React + TypeScript app built with Vite, Tailwind CSS, shadcn/ui and Framer Motion.

> Status: Frontend only. UI, routing, mock data, and design system are complete. Backend (auth, payments, persistence) is not yet wired up.

---

## Tech Stack

- **Vite 5** — dev server & bundler
- **React 18** + **TypeScript 5**
- **Tailwind CSS v3** with a custom editorial theme (warm neutrals, gold/champagne accents)
- **shadcn/ui** — accessible Radix-based components
- **Framer Motion** — page & micro-animations
- **React Router v6** — client-side routing
- **Lucide React** — icon set

## Features

- Homepage with hero, categories, trending listings, how-it-works, testimonials, CTA
- Browse page with filters (category, size, price, occasion), sort and grid/list views
- Item detail page
- Multi-step listing wizard (Photos → Details → Pricing → Review)
- User dashboard with tabs (Overview, Rentals, Listings, Earnings)
- Auth screens (Login, Forgot Password)
- Favorites page
- Informational pages: About, How It Works, Sustainability, Careers, Contact, Help, Shipping, Returns, Legal
- 404 page

## Project Structure

```
src/
├── assets/              # Hero & product imagery
├── components/
│   ├── home/            # Homepage sections
│   ├── layout/          # Header, Footer
│   └── ui/              # shadcn/ui primitives
├── hooks/
├── lib/
├── pages/               # Route-level pages
├── App.tsx              # Routes
├── main.tsx             # Entry
└── index.css            # Design tokens (HSL) & utilities
tailwind.config.ts       # Theme tokens, fonts, animations
```

## Prerequisites

- **Node.js 18+** (20 LTS recommended) — install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** (comes with Node) — or `pnpm` / `bun` / `yarn` if you prefer

## Getting Started

```sh
# 1. Clone
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2. Install dependencies
npm install

# 3. Run the dev server (http://localhost:8080)
npm run dev
```

### Available Scripts

| Command           | Description                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Start Vite dev server with HMR             |
| `npm run build`   | Production build to `dist/`                |
| `npm run preview` | Preview the production build locally       |
| `npm run lint`    | Run ESLint over the codebase               |

## Environment Variables

The current frontend uses **mock data only** and does not require any environment variables. When integrating a backend later, create a `.env` file at the project root (Vite exposes vars prefixed with `VITE_`), e.g.:

```
VITE_API_URL=https://api.example.com
```

## Deployment

The build output in `dist/` is a fully static SPA and can be hosted on any static provider:

- **Vercel** / **Netlify** — import the repo, build command `npm run build`, output directory `dist`
- **GitHub Pages** — serve the `dist/` folder (configure Vite `base` if hosted on a subpath)
- **Cloudflare Pages** — same build settings as Vercel
- **Lovable** — open the project and click *Share → Publish*

For SPA hosts, ensure a fallback rewrite of all routes to `/index.html` so React Router works on refresh.

## Design System

Colors, gradients, shadows, and typography are defined as semantic tokens in `src/index.css` and consumed through `tailwind.config.ts`. Components never hardcode raw colors — use tokens such as `bg-primary`, `text-gold`, `bg-secondary` so the theme stays consistent and dark-mode ready.

Fonts: an elegant serif for headings paired with a clean sans-serif for body.

## Roadmap

- User authentication (email + social)
- Persistent listings, bookings, and messaging
- Stripe payments, deposits, and lender payouts
- Real-time chat between renters and lenders
- Reviews & verification badges

## License

MIT — feel free to use this as a starting point for your own projects.
