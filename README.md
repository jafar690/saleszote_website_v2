# SalesZote website

Marketing site for [SalesZote](https://saleszote.com), the cloud POS and inventory system for shops and wholesalers in Kenya and beyond. It's built with Astro 6 and Tailwind CSS v4, and hosted on Cloudflare Workers.

The web app itself lives at [app.saleszote.com](https://app.saleszote.com) and is a separate repository.

## Getting started

Requires Node 22.12 or later and **pnpm** (don't use npm or yarn).

```sh
pnpm install
pnpm dev               # http://localhost:4321
```

### Environment variables

| Variable | Used by | Notes |
| :-- | :-- | :-- |
| `PUBLIC_POSTHOG_KEY` | `src/components/posthog.astro` | PostHog analytics. Inlined at build time. |
| `PUBLIC_POSTHOG_HOST` | `src/components/posthog.astro` | PostHog API host. |
| `SLACK_WEBHOOK_URL` | `src/pages/api/contact.ts` | The contact form posts submissions to Slack. In production this is a Cloudflare secret, not a `.env` value. |

`.env` is git-ignored. Never commit it.

## Commands

| Command | Action |
| :-- | :-- |
| `pnpm dev` | Start the dev server at `localhost:4321` |
| `pnpm build` | Build to `./dist/` (`dist/client` is the static site, `dist/server` is the Worker) |
| `pnpm preview` | Preview the production build locally |
| `pnpm deploy` | Build and deploy to production with Wrangler |
| `pnpm deploy:dev` | Build and deploy the dev copy at web-dev.saleszote.com (marked noindex) |
| `pnpm generate-types` | Generate Cloudflare binding types (`wrangler types`) |
| `pnpm thumbnails` | Generate poster frames for the tutorial videos in `public/videos/` |
| `node screenshot.mjs <url> [name] [desktop\|tablet\|mobile]` | Screenshot a page into `./screenshots/` |

## Deploying

- **Production** (`saleszote.com`): pushing to `main` deploys. You can also run `pnpm deploy`. Work happens on feature branches and is merged to `main` when it's ready to go live.
- **Dev** (`web-dev.saleszote.com`): run `pnpm deploy:dev`. The dev build keeps the site out of search results in two ways: `PUBLIC_NOINDEX` adds `<meta name="robots" content="noindex, nofollow">` to every page, and a build hook in `astro.config.mjs` writes a `_headers` file that sends `X-Robots-Tag: noindex, nofollow` on every file. `robots.txt` stays `Allow` on purpose, because crawlers have to fetch a page to see its noindex.
- **Secrets:** set `SLACK_WEBHOOK_URL` for each environment:
  ```sh
  pnpm exec wrangler secret put SLACK_WEBHOOK_URL --name saleszote_website_v2
  pnpm exec wrangler secret put SLACK_WEBHOOK_URL --name saleszote_website_v2-dev
  ```
- `public/.assetsignore` keeps `.DS_Store` files out of the uploaded assets.

## Project structure

```text
public/
  images/               SVG icons, logo parts, store badges, favicons, og-image.jpg
  videos/
    home/               The 2-minute product demo and its silent teaser loop
    pos/, inventory/    Short feature clips (mp4 + webm) for the product pages
    *.mp4, thumbnails/  Tutorial videos used by the mobile app. Keep the filenames stable.
src/
  assets/               Photos (processed by astro:assets via <Image />)
  components/
    sections/           Page sections (HomeHero, VideoFeatures, ScrollFeatures, FaqSection, ...)
    site/               Navbar, Footer, Logo, StoreBadges, ReceiptIllustration (404)
    ui/                 Button, Accordion, PhoneMockup, TabletMockup
    ContactForm.astro   Posts to /api/contact
    posthog.astro       Analytics snippet
  data/
    industries.ts       The 8 industry pages: copy, features, FAQs, SEO titles
    industryPhotos.ts   Photos per industry
    faqs.json, pricing.json, testimonials.json
    links.ts            Shared external URLs (web app, demo booking)
    notFoundLinks.ts    Links on the 404 page
  layouts/Layout.astro  <head>, SEO and JSON-LD (Organization + WebSite, plus a per-page jsonLd prop), noindex prop
  pages/
    index, pricing, contact, download-app, privacy-policy, terms-of-use, 404
    pos-system-kenya, inventory-management-kenya   Topic pages for search
    industries/[slug].astro                        One page per entry in industries.ts
    api/contact.ts                                 Contact form endpoint (server-rendered)
    design-system.astro                            Internal token preview (noindex, not in the sitemap)
  styles/global.css     Tailwind v4 @theme: fonts, type scale, colours
video/                  HyperFrames source for the home films (git-ignored)
```

## Design system

Tokens are defined in `src/styles/global.css` under `@theme`. The Figma source is file `MWTG0tdkOI1jGJMxKFSBbD`.

- **Fonts:** Lora (display headings), Manrope (body), Inter (UI text such as legal pages and forms).
- **Colours:** primary `#D8722D` (`primary-600`), cream `#FEFAF1` (`primary-50`), green `#194E2C` (`secondary-900`), headings `#171717`.
- Spacing uses Tailwind's numeric scale (`w-125`, not `w-[500px]`).
- Animate only `transform` and `opacity`, and never use `transition-all`.
- Every clickable element has hover, focus-visible and active states.

See `CLAUDE.md` for the full frontend rules.

## SEO

- The site is Kenya-first: titles, H1s and URLs target searches like "POS system Kenya", while the on-page copy says "Kenya and beyond". Paying customers are in Kenya, Uganda, South Sudan and the Maldives, and all prices are in KES.
- `@astrojs/sitemap` generates `sitemap-index.xml`, which is listed in `public/robots.txt`.
- Pages add their own structured data (BreadcrumbList, SoftwareApplication, Product, FAQPage) through the `jsonLd` prop on `Layout`.
- To add an industry page, add an entry to `src/data/industries.ts` and its photos under `src/assets/industries/features/<slug>/1.jpg`–`4.jpg`.
