import { brand } from './brand';
import { asset } from '@storefront/lib/asset';

export const EDIT_END = new Date(brand.editStart.getTime() + brand.editWindowDays * 86400000);

export const COLLECTIONS = [
  {
    name: 'Zardozi Vault',
    tagline: 'Silk velvet, zardozi metal-thread embroidery, bridal weight',
    fabric: 'Silk Velvet',
    weave: 'Zardozi hand-embroidery',
    origin: 'Surat',
    originImg: asset('/images/loom-zardozi-vault.jpg'),
    names: ['Amoha', 'Ranjhana', 'Zoya', 'Ishanvi', 'Kimaya', 'Aaravi', 'Nooriya', 'Samaira'],
  },
  {
    name: 'Mirror Tale',
    tagline: 'Georgette with Kutchi mirror & thread work, festive drama',
    fabric: 'Georgette',
    weave: 'Mirror & thread embroidery',
    origin: 'Kutch',
    originImg: asset('/images/loom-mirror-tale.jpg'),
    names: ['Kutchi', 'Rangoli', 'Dhara', 'Meherma', 'Anaya', 'Chandni', 'Roopal', 'Nritya'],
  },
  {
    name: 'Gota Bloom',
    tagline: 'Cotton silk with Jaipuri gota patti appliqué, festive lightness',
    fabric: 'Cotton Silk',
    weave: 'Gota patti appliqué',
    origin: 'Jaipur',
    originImg: asset('/images/loom-gota-bloom.jpg'),
    names: ['Gulabo', 'Kesariya', 'Peela', 'Chandrika', 'Manjari', 'Pushpa', 'Rajwadi', 'Kirna'],
  },
  {
    name: 'Chikan Noor',
    tagline: 'Organza with Lucknawi chikankari, featherlight elegance',
    fabric: 'Organza',
    weave: 'Chikankari hand-embroidery',
    origin: 'Lucknow',
    originImg: asset('/images/loom-chikan-noor.jpg'),
    names: ['Adaa', 'Nazakat', 'Rehmat', 'Chikan', 'Lucknawi', 'Mehak', 'Firdaus', 'Roshni'],
  },
  {
    name: 'Banarasi Drape',
    tagline: 'Banarasi silk brocade with zari weave, bridal heritage',
    fabric: 'Banarasi Silk Brocade',
    weave: 'Zari brocade weave',
    origin: 'Varanasi',
    originImg: asset('/images/loom-banarasi-drape.jpg'),
    names: ['Kashi', 'Alankara', 'Vaidehi', 'Zarine', 'Suhana', 'Rajrani', 'Tanvi', 'Meenal'],
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
      const stock = 10 - ((i * 3 + 2) % 10); // 1-10, out of 10 sets total
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
        description: `Hand-embroidered in ${coll.origin}, this ${coll.fabric.toLowerCase()} lehenga set features ${coll.weave.toLowerCase()} in ${colorway.toLowerCase()} tones. Part of the ${coll.name} line — only 10 sets of this design are made this edit; once sold, it will not be remade until ${coll.name} returns in a future edit.`,
        story: `Hand-embroidered over 21 days by master artisan families in ${coll.origin}, continuing a technique passed down four generations. Your purchase directly supports the atelier collective behind this set.`,
        specs: [
          { label: 'Fabric', value: coll.fabric },
          { label: 'Craft', value: coll.weave },
          { label: 'Edition size', value: '10 sets' },
          { label: 'Set includes', value: 'Lehenga skirt, blouse, dupatta' },
          { label: 'Sizing', value: 'Made-to-measure, XS–XL' },
          { label: 'Includes', value: 'Certificate of authenticity, edition card' },
        ],
      });
    }
  });
  return list;
}

export const PRODUCTS = buildProducts();
