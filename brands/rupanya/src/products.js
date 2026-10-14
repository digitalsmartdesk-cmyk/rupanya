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

const PRODUCT_IMAGES = [
  // Chiffon Bloom 01–08
  asset('/uploads/lite/Chiffon/Rupanya_Saree_01_Ivory_Chiffon.jpg'),
  asset('/uploads/lite/Chiffon/Rupanya_Saree_02_Blush_Pink_Chiffon.jpg'),
  asset('/uploads/lite/Chiffon/Rupanya_Saree_03_Powder_Blue_Chiffon.jpg'),
  asset('/uploads/lite/Chiffon/Rupanya_Saree_04_Lavender_Chiffon.jpg'),
  asset('/uploads/lite/Chiffon/Rupanya_Saree_05_Champagne_Chiffon.jpg'),
  asset('/uploads/lite/Chiffon/Rupanya_Saree_06_Pearl_White_Chiffon.jpg'),
  asset('/uploads/lite/Chiffon/Rupanya_Saree_07_Wine_Chiffon.jpg'),
  asset('/uploads/lite/Chiffon/Rupanya_Saree_08_Emerald_Chiffon.jpg'),
  // Chanderi Air 09–16
  asset('/uploads/lite/Chanderi/Rupanya_Saree_09_Ivory_Chanderi.jpg'),
  asset('/uploads/lite/Chanderi/Rupanya_Saree_10_Sage_Green_Chanderi.jpg'),
  asset('/uploads/lite/Chanderi/Rupanya_Saree_11_Mustard_Chanderi.jpg'),
  asset('/uploads/lite/Chanderi/Rupanya_Saree_12_Powder_Pink_Chanderi.jpg'),
  asset('/uploads/lite/Chanderi/Rupanya_Saree_13_Sky_Blue_Chanderi.jpg'),
  asset('/uploads/lite/Chanderi/Rupanya_Saree_14_Lavender_Chanderi.jpg'),
  asset('/uploads/lite/Chanderi/Rupanya_Saree_15_Rust_Chanderi.jpg'),
  asset('/uploads/lite/Chanderi/Rupanya_Saree_16_Deep_Teal_Chanderi.jpg'),
  // Terra Cotton 17–24
  asset('/uploads/lite/Cotton/Rupanya_Saree_17_White_Handloom_Cotton.jpg'),
  asset('/uploads/lite/Cotton/Rupanya_Saree_18_Indigo_Cotton.jpg'),
  asset('/uploads/lite/Cotton/Rupanya_Saree_19_Powder_Blue_Cotton.jpg'),
  asset('/uploads/lite/Cotton/Rupanya_Saree_20_Terracotta_Cotton.jpg'),
  asset('/uploads/lite/Cotton/Rupanya_Saree_21_Soft_Yellow_Cotton.jpg'),
  asset('/uploads/lite/Cotton/Rupanya_Saree_22_Rose_Pink_Cotton.jpg'),
  asset('/uploads/lite/Cotton/Rupanya_Saree_23_Bottle_Green_Cotton.jpg'),
  asset('/uploads/lite/Cotton/Rupanya_Saree_24_Charcoal_Grey_Cotton.jpg'),
  // Kashi Organza 25–32
  asset('/uploads/lite/Organza/Rupanya_Saree_25_Pearl_White_Organza.jpg'),
  asset('/uploads/lite/Organza/Rupanya_Saree_26_Champagne_Organza.jpg'),
  asset('/uploads/lite/Organza/Rupanya_Saree_27_Blush_Organza.jpg'),
  asset('/uploads/lite/Organza/Rupanya_Saree_28_Powder_Blue_Organza.jpg'),
  asset('/uploads/lite/Organza/Rupanya_Saree_29_Lilac_Organza.jpg'),
  asset('/uploads/lite/Organza/Rupanya_Saree_30_Emerald_Organza.jpg'),
  asset('/uploads/lite/Organza/Rupanya_Saree_31_Wine_Organza.jpg'),
  asset('/uploads/lite/Organza/Rupanya_Saree_32_Sage_Organza.jpg'),
  // Mysore Georgette 33–40
  asset('/uploads/lite/Georgette/Rupanya_Saree_33_Ivory_Georgette.jpg'),
  asset('/uploads/lite/Georgette/Rupanya_Saree_34_Dusty_Rose_Georgette.jpg'),
  asset('/uploads/lite/Georgette/Rupanya_Saree_35_Midnight_Blue_Georgette.jpg'),
  asset('/uploads/lite/Georgette/Rupanya_Saree_36_Mauve_Georgette.jpg'),
  asset('/uploads/lite/Georgette/Rupanya_Saree_37_Teal_Georgette.jpg'),
  asset('/uploads/lite/Georgette/Rupanya_Saree_38_Coral_Georgette.jpg'),
  asset('/uploads/lite/Georgette/Rupanya_Saree_39_Deep_Plum_Georgette.jpg'),
  asset('/uploads/lite/Georgette/Rupanya_Saree_40_Soft_Mint_Georgette.jpg'),
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
        imgSrc: PRODUCT_IMAGES[i - 1],
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
