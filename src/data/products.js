import { asset } from '../lib/asset';

export const EDIT_START = new Date(2026, 7, 3); // Aug 3, 2026
export const EDIT_END = new Date(EDIT_START.getTime() + 60 * 86400000); // 60-day edit window

export const COLLECTIONS = [
  {
    name: 'Kanchi Reserve',
    tagline: 'Kanjivaram silk, temple motifs, bridal weight',
    fabric: 'Kanjivaram Silk',
    weave: 'Temple border weave',
    loom: 'Kanchipuram',
    loomImg: asset('/images/loom-kanchi-reserve.jpg'),
    names: ['Rajkumari', 'Ashtalakshmi', 'Kalyani', 'Meenakari', 'Padmavati', 'Shringara', 'Vaishnavi', 'Tanjore'],
  },
  {
    name: 'Banaras Noir',
    tagline: 'Banarasi silk, jamdani brocade, evening drama',
    fabric: 'Banarasi Silk',
    weave: 'Jamdani hand-weave',
    loom: 'Varanasi',
    loomImg: asset('/images/loom-banaras-noir.jpg'),
    names: ['Meherangi', 'Zeenat', 'Shabnam', 'Rukhsar', 'Anarkali', 'Farheen', 'Gulnaz', 'Nazneen'],
  },
  {
    name: 'Chanderi Air',
    tagline: 'Chanderi silk-cotton, featherlight everyday luxury',
    fabric: 'Chanderi Silk-Cotton',
    weave: 'Sheer tissue weave',
    loom: 'Chanderi',
    loomImg: asset('/images/loom-chanderi-air.jpg'),
    names: ['Aditri', 'Sohini', 'Vasundhara', 'Saral', 'Kirti', 'Ishani', 'Lavanya', 'Aranya'],
  },
  {
    name: 'Ikat Folio',
    tagline: 'Patola double-ikat, graphic geometry',
    fabric: 'Patola Silk',
    weave: 'Ikat double-weave',
    loom: 'Patan',
    loomImg: asset('/images/loom-ikat-folio.jpg'),
    names: ['Vintara', 'Chitrali', 'Rekha', 'Bindiya', 'Charuta', 'Mayura', 'Kanak', 'Ankita'],
  },
  {
    name: 'Tissue Gold',
    tagline: 'Mysore silk with a sheer metallic finish',
    fabric: 'Mysore Silk',
    weave: 'Zari brocade',
    loom: 'Mysore',
    loomImg: asset('/images/loom-tissue-gold.jpg'),
    names: ['Anushka', 'Rukmini', 'Devika', 'Sharanya', 'Kaveri', 'Nandini', 'Malini', 'Shantala'],
  },
];

const COLORWAYS = ['Deep Maroon', 'Antique Gold', 'Emerald', 'Midnight Indigo', 'Ivory & Rose', 'Rust & Copper', 'Sapphire', 'Wine', 'Peacock Teal', 'Sandalwood'];
const COLORWAY_SLUGS = {
  'Deep Maroon': 'deep-maroon',
  'Antique Gold': 'antique-gold',
  Emerald: 'emerald',
  'Midnight Indigo': 'midnight-indigo',
  'Ivory & Rose': 'ivory-rose',
  'Rust & Copper': 'rust-copper',
  Sapphire: 'sapphire',
  Wine: 'wine',
  'Peacock Teal': 'peacock-teal',
  Sandalwood: 'sandalwood',
};

function buildProducts() {
  const list = [];
  let i = 0;
  COLLECTIONS.forEach((coll, cIdx) => {
    for (let j = 1; j <= 8; j++) {
      i++;
      const colorway = COLORWAYS[i % COLORWAYS.length];
      const nameBase = coll.names[j - 1];
      const price = 18500 + (i % 9) * 3200;
      const stock = 10 - ((i * 3 + 2) % 10); // 1-10, out of 10 pieces total
      list.push({
        id: i,
        number: i,
        collectionId: cIdx,
        collectionName: coll.name,
        collectionTagline: coll.tagline,
        numberInCollection: j,
        totalInCollection: 8,
        totalPieces: 10,
        name: nameBase,
        fabric: coll.fabric,
        weave: coll.weave,
        colorway,
        loom: coll.loom,
        price,
        priceLabel: '₹' + price.toLocaleString('en-IN'),
        stock,
        lowStock: stock <= 3,
        imgSrc: asset(`/images/${COLORWAY_SLUGS[colorway]}.jpg`),
        description: `Handwoven on traditional pit looms in ${coll.loom}, this ${coll.fabric.toLowerCase()} saree features a ${coll.weave.toLowerCase()} in ${colorway.toLowerCase()} tones. Part of the ${coll.name} line — only 10 pieces of this design are woven this edit; once sold, it will not be rewoven until ${coll.name} returns in a future edit.`,
        weaverStory: `Woven over 18 days by master artisan families in ${coll.loom}, continuing a technique passed down four generations. Your purchase directly supports the loom collective behind this piece.`,
      });
    }
  });
  return list;
}

export const PRODUCTS = buildProducts();

export function getProduct(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}

export function getCollectionsGrouped() {
  return COLLECTIONS.map((coll, cIdx) => ({
    ...coll,
    items: PRODUCTS.filter((p) => p.collectionId === cIdx),
  }));
}

export function getRelatedProducts(product, count = 3) {
  return PRODUCTS.filter((p) => p.collectionId === product.collectionId && p.id !== product.id).slice(0, count);
}

export function getFeatured() {
  return [0, 8, 16, 24, 32].map((idx) => PRODUCTS[idx]);
}
