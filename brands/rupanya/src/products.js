import { brand } from './brand';
import { asset } from '@storefront/lib/asset';

export const EDIT_END = new Date(brand.editStart.getTime() + brand.editWindowDays * 86400000);

export const COLLECTIONS = [
  {
    name: 'Chiffon Bloom',
    tagline: 'Pure silk chiffon, floral thread embroidery, fluid drape',
    fabric: 'Silk Chiffon',
    weave: 'Hand-embroidered floral thread work',
    origin: 'Surat',
    originImg: asset('/images/loom-chiffon-bloom.jpg'),
    pieces: [
      { name: 'Anahita', colorway: 'Ivory' },
      { name: 'Ishita', colorway: 'Blush Pink' },
      { name: 'Kavya', colorway: 'Powder Blue' },
      { name: 'Naina', colorway: 'Lavender' },
      { name: 'Pallavi', colorway: 'Champagne' },
      { name: 'Riya', colorway: 'Pearl White' },
      { name: 'Saanvi', colorway: 'Wine' },
      { name: 'Tanaya', colorway: 'Emerald' },
    ],
  },
  {
    name: 'Chanderi Air',
    tagline: 'Chanderi silk-cotton, featherlight everyday luxury',
    fabric: 'Chanderi Silk-Cotton',
    weave: 'Sheer tissue weave',
    origin: 'Chanderi',
    originImg: asset('/images/loom-chanderi-air.jpg'),
    pieces: [
      { name: 'Aditri', colorway: 'Ivory' },
      { name: 'Sohini', colorway: 'Sage Green' },
      { name: 'Vasundhara', colorway: 'Mustard' },
      { name: 'Saral', colorway: 'Powder Pink' },
      { name: 'Kirti', colorway: 'Sky Blue' },
      { name: 'Ishani', colorway: 'Lavender' },
      { name: 'Lavanya', colorway: 'Rust' },
      { name: 'Aranya', colorway: 'Deep Teal' },
    ],
  },
  {
    name: 'Terra Cotton',
    tagline: 'Handloom cotton, woven jacquard border, everyday ease',
    fabric: 'Handloom Cotton',
    weave: 'Jacquard border weave',
    origin: 'Maheshwar',
    originImg: asset('/images/loom-terra-cotton.jpg'),
    pieces: [
      { name: 'Bhoomika', colorway: 'White' },
      { name: 'Chaaya', colorway: 'Indigo' },
      { name: 'Dharini', colorway: 'Powder Blue' },
      { name: 'Kanan', colorway: 'Terracotta' },
      { name: 'Mrudula', colorway: 'Soft Yellow' },
      { name: 'Niharika', colorway: 'Rose Pink' },
      { name: 'Rachana', colorway: 'Bottle Green' },
      { name: 'Vasudha', colorway: 'Charcoal Grey' },
    ],
  },
  {
    name: 'Kashi Organza',
    tagline: 'Silk organza with Banarasi hand-embroidery, ethereal drape',
    fabric: 'Silk Organza',
    weave: 'Hand-embroidered floral thread work, pearl trim',
    origin: 'Varanasi',
    originImg: asset('/images/loom-kashi-organza.jpg'),
    pieces: [
      { name: 'Amoli', colorway: 'Pearl White' },
      { name: 'Avantika', colorway: 'Champagne' },
      { name: 'Gauri', colorway: 'Blush' },
      { name: 'Kashvi', colorway: 'Powder Blue' },
      { name: 'Moksha', colorway: 'Lilac' },
      { name: 'Sanskriti', colorway: 'Emerald' },
      { name: 'Tarini', colorway: 'Wine' },
      { name: 'Vedika', colorway: 'Sage' },
    ],
  },
  {
    name: 'Mysore Georgette',
    tagline: 'Silk georgette with stone and sequin embroidery, evening drama',
    fabric: 'Silk Georgette',
    weave: 'Hand-embroidered stone & sequin work',
    origin: 'Mysore',
    originImg: asset('/images/loom-mysore-georgette.jpg'),
    pieces: [
      { name: 'Chandana', colorway: 'Ivory' },
      { name: 'Deeksha', colorway: 'Dusty Rose' },
      { name: 'Harini', colorway: 'Midnight Blue' },
      { name: 'Manasa', colorway: 'Mauve' },
      { name: 'Nandita', colorway: 'Teal' },
      { name: 'Pavani', colorway: 'Coral' },
      { name: 'Ramya', colorway: 'Deep Plum' },
      { name: 'Shreya', colorway: 'Soft Mint' },
    ],
  },
];

function buildProducts() {
  const list = [];
  let i = 0;
  COLLECTIONS.forEach((coll, cIdx) => {
    coll.pieces.forEach((piece, j0) => {
      i++;
      const j = j0 + 1;
      const price = brand.basePrice + (i % 9) * brand.priceStep;
      const stock = 10 - ((i * 3 + 2) % 10); // 1-10, out of 10 pieces total
      list.push({
        id: i,
        number: i,
        collectionId: cIdx,
        collectionName: coll.name,
        collectionTagline: coll.tagline,
        numberInCollection: j,
        totalInCollection: coll.pieces.length,
        totalPieces: 10,
        name: piece.name,
        fabric: coll.fabric,
        weave: coll.weave,
        colorway: piece.colorway,
        origin: coll.origin,
        price,
        priceLabel: '₹' + price.toLocaleString('en-IN'),
        stock,
        lowStock: stock <= 3,
        imgSrc: asset(`/images/products/${String(i).padStart(2, '0')}.jpg`),
        description: `Handcrafted in ${coll.origin}, this ${coll.fabric.toLowerCase()} saree features ${coll.weave.toLowerCase()} in ${piece.colorway.toLowerCase()} tones. Part of the ${coll.name} line — only 10 pieces of this design are made this edit; once sold, it will not be remade until ${coll.name} returns in a future edit.`,
        story: `Handcrafted over 18 days by master artisan families in ${coll.origin}, continuing a technique passed down four generations. Your purchase directly supports the atelier collective behind this piece.`,
        specs: [
          { label: 'Fabric', value: coll.fabric },
          { label: 'Weave', value: coll.weave },
          { label: 'Edition size', value: '10 pieces' },
          { label: 'Length', value: '6.3m + 0.8m blouse piece' },
          { label: 'Includes', value: 'Certificate of authenticity, edition card' },
        ],
      });
    });
  });
  return list;
}

export const PRODUCTS = buildProducts();
