import { brand } from './brand';
import { asset } from '@storefront/lib/asset';

export const EDIT_END = new Date(brand.editStart.getTime() + brand.editWindowDays * 86400000);

export const COLLECTIONS = [
  {
    name: 'Kanchi Reserve',
    tagline: 'Kanjivaram silk, temple motifs, bridal weight',
    fabric: 'Kanjivaram Silk',
    weave: 'Temple border weave',
    origin: 'Kanchipuram',
    originImg: asset('/images/loom-kanchi-reserve.jpg'),
    names: ['Rajkumari', 'Ashtalakshmi', 'Kalyani', 'Meenakari', 'Padmavati', 'Shringara', 'Vaishnavi', 'Tanjore'],
  },
  {
    name: 'Banaras Noir',
    tagline: 'Banarasi silk, jamdani brocade, evening drama',
    fabric: 'Banarasi Silk',
    weave: 'Jamdani hand-weave',
    origin: 'Varanasi',
    originImg: asset('/images/loom-banaras-noir.jpg'),
    names: ['Meherangi', 'Zeenat', 'Shabnam', 'Rukhsar', 'Anarkali', 'Farheen', 'Gulnaz', 'Nazneen'],
  },
  {
    name: 'Chanderi Air',
    tagline: 'Chanderi silk-cotton, featherlight everyday luxury',
    fabric: 'Chanderi Silk-Cotton',
    weave: 'Sheer tissue weave',
    origin: 'Chanderi',
    originImg: asset('/images/loom-chanderi-air.jpg'),
    names: ['Aditri', 'Sohini', 'Vasundhara', 'Saral', 'Kirti', 'Ishani', 'Lavanya', 'Aranya'],
  },
  {
    name: 'Ikat Folio',
    tagline: 'Patola double-ikat, graphic geometry',
    fabric: 'Patola Silk',
    weave: 'Ikat double-weave',
    origin: 'Patan',
    originImg: asset('/images/loom-ikat-folio.jpg'),
    names: ['Vintara', 'Chitrali', 'Rekha', 'Bindiya', 'Charuta', 'Mayura', 'Kanak', 'Ankita'],
  },
  {
    name: 'Tissue Gold',
    tagline: 'Mysore silk with a sheer metallic finish',
    fabric: 'Mysore Silk',
    weave: 'Zari brocade',
    origin: 'Mysore',
    originImg: asset('/images/loom-tissue-gold.jpg'),
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
      const price = brand.basePrice + (i % 9) * brand.priceStep;
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
        origin: coll.origin,
        price,
        priceLabel: '₹' + price.toLocaleString('en-IN'),
        stock,
        lowStock: stock <= 3,
        imgSrc: asset(`/images/${COLORWAY_SLUGS[colorway]}.jpg`),
        description: `Handwoven on traditional pit looms in ${coll.origin}, this ${coll.fabric.toLowerCase()} saree features a ${coll.weave.toLowerCase()} in ${colorway.toLowerCase()} tones. Part of the ${coll.name} line — only 10 pieces of this design are woven this edit; once sold, it will not be rewoven until ${coll.name} returns in a future edit.`,
        story: `Woven over 18 days by master artisan families in ${coll.origin}, continuing a technique passed down four generations. Your purchase directly supports the loom collective behind this piece.`,
        specs: [
          { label: 'Fabric', value: coll.fabric },
          { label: 'Weave', value: coll.weave },
          { label: 'Edition size', value: '10 pieces' },
          { label: 'Length', value: '6.3m + 0.8m blouse piece' },
          { label: 'Includes', value: 'Certificate of authenticity, edition card' },
        ],
      });
    }
  });
  return list;
}

export const PRODUCTS = buildProducts();
