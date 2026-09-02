# Aaranya

Heritage-luxury saree ecommerce site — a 60-day limited "edit" of 40 hand-woven sarees across five ongoing collection lines (Kanchi Reserve, Banaras Noir, Chanderi Air, Ikat Folio, Tissue Gold), each design capped at 10 pieces.

Implements the design mockup exported from Claude Design (see `Aaranya Saree House.dc.html` in the design bundle). Front-end-only mockup: cart/checkout state lives client-side (React context + localStorage), no real payment processing or backend.

## Stack

- React 19 + Vite
- React Router for the 7 screens (Home, Collection, Product, Cart, Checkout, Confirmation, Weavers)
- Plain CSS custom properties for the design tokens (oklch palette, Cormorant Garamond + Manrope via Google Fonts)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes

- Product imagery under `public/images/` is placeholder colorway artwork carried over from the design bundle, not real product photography — swap in real shots before shipping to production.
- The countdown on Home/Collection/Product is live, computed against the edit's real end date (`EDIT_END` in `src/data/products.js`).
