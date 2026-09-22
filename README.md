# Aaranya monorepo

Source-of-truth monorepo for four "drop model" heritage-craft ecommerce storefronts, each a 60-day limited "edit" sold in a capped run. Front-end-only: cart/checkout state lives client-side (React context + localStorage), no real payment processing or backend.

| Brand | Category | Repo (deploy target) | Domain |
|---|---|---|---|
| Rupanya | Sarees | this repo (own Pages site) | rupanya.growthoriginator.in |
| Navsaaj | Lehengas | [navsaaj](https://github.com/digitalsmartdesk-cmyk/navsaaj) | navsaaj.growthoriginator.in |
| Lalitya | Ladies suits | [lalitya](https://github.com/digitalsmartdesk-cmyk/lalitya) | lalitya.growthoriginator.in |
| Blush Layers | Intimate/sleepwear | [blushlayers](https://github.com/digitalsmartdesk-cmyk/blushlayers) | blushlayers.growthoriginator.in |

## Architecture

- `packages/storefront/` — the shared component library: pages, layout, cart/catalog/brand context, hooks. Built once, consumed by all four brands via a Vite `resolve.alias` (`@storefront`), not npm linking.
- `brands/<slug>/` — one Vite app per brand: its own `brand.js` config object (copy, typography, layout, pricing), `products.js` catalog data, `theme.css` palette, and `public/` assets (images, logo, CNAME).
- Brand-to-brand differences are expressed through the `brand.js` config schema (fonts, image aspect ratio, hero layout, uppercase buttons, italic accents, per-brand copy) rather than forking the shared pages.

GitHub Pages only serves one custom domain per repository, so Rupanya deploys to this repo's own Pages site, while Navsaaj/Lalitya/Blush Layers each live in a separate repo that exists **purely as a static deploy target** — their content is built here and pushed there by CI (`.github/workflows/deploy-pages.yml`); nobody hand-edits those three repos directly.

## Develop

```bash
npm install
npm run dev:rupanya       # or dev:navsaaj / dev:lalitya / dev:blush-layers
```

## Build

```bash
npm run build:all         # builds all four brands into dist/<slug>/
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which builds all four brands, deploys Rupanya to this repo's own GitHub Pages, and pushes the other three brands' built output to their deploy-target repos. The cross-repo push needs a `CROSS_REPO_PAT` repository secret (a PAT with `contents:write` on the navsaaj/lalitya/blushlayers repos) — see the workflow file for details.

## Notes

- Product imagery under each brand's `public/images/` is placeholder colorway artwork carried over from the design handoff bundles, not real product photography.
- The countdown on Home/Collection/Product is live, computed against each brand's `editStart` + `editWindowDays` in its `brand.js`.
