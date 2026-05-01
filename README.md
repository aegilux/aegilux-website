# Aegilux website

Marketing site for [Aegilux](https://aegilux.com) — managed cloud security and Essential Eight maturity for Australian SMBs running on AWS.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion (animations)
- React Three Fiber (hero 3D scene)
- Deployed via GitHub Actions to Cloudflare Pages / Netlify (TBD)

## Develop

```bash
bun install     # or npm install
bun run dev     # vite dev server, http://localhost:5173
```

## Build

```bash
bun run build   # outputs to dist/
bun run preview # preview the production build locally
```

## Test

```bash
bun run test
```

## Environment variables

Optional, set in `.env.production` or in the deploy platform:

- `VITE_GA4_MEASUREMENT_ID` — Google Analytics 4 measurement ID (e.g. `G-XXXXXXXXXX`)
- `VITE_FORM_ENDPOINT` — POST endpoint for the lead form (Web3Forms, Formspree, or a custom Cloudflare Worker). If unset, the form falls back to a `mailto:` to `hello@aegilux.com`.

## Content sources

Primary copy is sourced from the agent repo at `~/Documents/AGENTS/aegilux/`:

- Hero / problem / solution / pricing — `business/BusinessPlan/Aegilux-Business-Plan-FINAL.md` (v1.4)
- "How We Operate" section — `business/OutReach/where-we-operate.md`
- Testimonial — `business/CaseStudies/testimonial-edits.md` (rebranded version)
- Privacy Policy — `business/Legal/Privacy-Act-checklist.md`

When updating site content, keep these in sync.

## Pages

- `/` — Index (hero + problem + solution + services + results + pricing + CTA)
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service
- `*` — NotFound (404)

## Components

`src/components/` — section components composed in `src/pages/Index.tsx`. UI primitives (button, input, etc.) live in `src/components/ui/` (shadcn).
