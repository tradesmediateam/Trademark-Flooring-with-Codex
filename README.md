# Trademark Flooring

Production-ready marketing website for Trademark Flooring — a concrete floor preparation company serving Metro Vancouver and British Columbia (self-levelling, concrete grinding, floor preparation, patching, and skim coating for residential, commercial, high-rise, low-rise, and multi-family projects).

Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. Optimized for SEO (metadata, JSON-LD structured data, Open Graph, sitemap, robots.txt) and lead capture (click-to-call, pre-filled email, and an on-page estimate request form).

## Getting started

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command         | Description                              |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Start the local development server        |
| `npm run build` | Create an optimized production build      |
| `npm run start` | Serve the production build locally        |
| `npm run lint`  | Run ESLint                                 |

## Project structure

```
src/
  app/                    Routes (App Router): home, services, gallery, about, contact, API, SEO files
  components/
    ui/                   Generic building blocks (Button, Section, icons, etc.)
    layout/                Navbar, mobile menu, footer
    home/                  Homepage-only sections
    gallery/               Project gallery grid, cards, lightbox
    estimate/               "Free In-Home Estimate" CTA, call/email buttons, and lead form
    seo/                    JSON-LD renderer
  lib/                    Content & config: site info, services, gallery projects, SEO helpers,
                           structured data, form validation — the single source of truth for all copy
public/
  images/gallery/          Drop real project photos here (see below)
```

## Adding real content later

- **Company details**: edit `src/lib/site.ts` (phone, email, address, hours, social links, map coordinates).
- **Services**: edit `src/lib/services.ts` — each entry automatically gets its own `/services/[slug]` page, sitemap entry, and JSON-LD.
- **Gallery photos**: the gallery is built to scale to hundreds of photos. Each project in `src/lib/projects.ts` has an `images` array; add real files under `public/images/gallery/<project-slug>/` and set each image's `src` to the file path. Until then, branded placeholders render automatically so the layout is fully functional today.
- **Estimate form delivery**: the form at `/contact#estimate-form` posts to `src/app/api/estimate/route.ts`, which validates submissions but does **not** yet send an email — no email provider is configured. See the `TODO` comment in that file for wiring up a provider such as [Resend](https://resend.com) using a Vercel environment variable. Until that's connected, the call and email CTA buttons throughout the site are fully functional and are the primary lead channels.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import it in [Vercel](https://vercel.com/new).
3. No environment variables are required for the current build. When you wire up email delivery for the estimate form, add the provider's API key as a Vercel environment variable (never commit it).
4. Update `site.url` in `src/lib/site.ts` to your production domain before launch — it feeds canonical URLs, Open Graph tags, and the sitemap.

## SEO

- Per-page metadata, Open Graph, and Twitter cards via `src/lib/seo.ts`.
- JSON-LD structured data: `LocalBusiness`/`GeneralContractor`, `WebSite`, `Service`, `BreadcrumbList`, and `FAQPage` (`src/lib/structured-data.ts`).
- `sitemap.xml` and `robots.txt` are generated automatically (`src/app/sitemap.ts`, `src/app/robots.ts`).
- Local SEO targets Vancouver, Burnaby, Surrey, Richmond, Langley, Coquitlam, North Vancouver, West Vancouver, and British Columbia throughout copy and structured data.
