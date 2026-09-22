import { brand } from './brand';
import { asset } from '@storefront/lib/asset';

export const EDIT_END = new Date(brand.editStart.getTime() + brand.editWindowDays * 86400000);

export const COLLECTIONS = [
  {
    name: 'Bare Silk',
    tagline: 'Pure mulberry silk chemises, body-skimming, minimal',
    fabric: 'Mulberry Silk',
    finish: 'Hand-rolled hem',
    silhouette: 'Slip / chemise',
    origin: 'Lyon',
    originImg: asset('/images/loom-bare-silk.jpg'),
    names: ['Aurore', 'Céleste', 'Ines', 'Lune', 'Maeva', 'Noémi', 'Ondine', 'Séraphine'],
  },
  {
    name: 'Lace Noir',
    tagline: 'French Calais lace camisoles, dramatic, sheer at the edges',
    fabric: 'French Lace & Silk',
    finish: 'Lace trim, satin binding',
    silhouette: 'Camisole, thigh-length',
    origin: 'Paris',
    originImg: asset('/images/loom-lace-noir.jpg'),
    names: ['Mireille', 'Fleur', 'Gisèle', 'Hélène', 'Isabeau', 'Jolie', 'Képha', 'Lisette'],
  },
  {
    name: 'Whisper Satin',
    tagline: 'Charmeuse satin sleep shirts, draped, effortlessly fluid',
    fabric: 'Charmeuse Satin',
    finish: 'Contrast piping, shell buttons',
    silhouette: 'Oversized sleep shirt',
    origin: 'Mumbai',
    originImg: asset('/images/loom-whisper-satin.jpg'),
    names: ['Ananya', 'Diya', 'Ishaan', 'Keya', 'Mira', 'Priya', 'Rhea', 'Sia'],
  },
  {
    name: 'Boudoir Bloom',
    tagline: 'Cotton voile with hand-block florals, playful and light',
    fabric: 'Cotton Voile',
    finish: 'Hand-block print, pintuck placket',
    silhouette: 'Smock top / short kurta',
    origin: 'Jaipur',
    originImg: asset('/images/loom-boudoir-bloom.jpg'),
    names: ['Champa', 'Gulab', 'Jasmine', 'Kamala', 'Lotika', 'Mallika', 'Nandini', 'Parul'],
  },
  {
    name: 'Velvet Dusk',
    tagline: 'Velvet-trim modal, moody texture, rich at nightfall',
    fabric: 'Modal & Velvet trim',
    finish: 'Velvet collar & cuffs, satin label',
    silhouette: 'Longline sleep shirt',
    origin: 'Benares',
    originImg: asset('/images/loom-velvet-dusk.jpg'),
    names: ['Advaita', 'Bhavna', 'Chandrika', 'Devika', 'Eisha', 'Falak', 'Geetika', 'Hira'],
  },
];

const COLORWAYS = ['Blush Petal', 'Ivory Cream', 'Midnight Black', 'Dusty Rose', 'Champagne', 'Deep Plum', 'Ash Mauve', 'Pearl White', 'Noir Stripe', 'Antique Ivory'];
const COLORWAY_SLUGS = {
  'Blush Petal': 'ivory-rose',
  'Ivory Cream': 'antique-gold',
  'Midnight Black': 'deep-maroon',
  'Dusty Rose': 'ivory-rose',
  Champagne: 'antique-gold',
  'Deep Plum': 'deep-maroon',
  'Ash Mauve': 'sandalwood',
  'Pearl White': 'antique-gold',
  'Noir Stripe': 'deep-maroon',
  'Antique Ivory': 'sandalwood',
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
      const stock = 10 - ((i * 3 + 5) % 10); // 1-10, out of 10 pieces total
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
        colorway,
        origin: coll.origin,
        price,
        priceLabel: '₹' + price.toLocaleString('en-IN'),
        stock,
        lowStock: stock <= 3,
        imgSrc: asset(`/images/${COLORWAY_SLUGS[colorway]}.jpg`),
        description: `Hand-finished in ${coll.origin}, this ${coll.fabric.toLowerCase()} piece is numbered ${j} of 8 in the ${coll.name} line. ${coll.finish} — made once, in ${colorway.toLowerCase()}, never remade in this colorway once the edition closes.`,
        story: `Every piece in ${coll.name} is hand-finished by a single maker in our ${coll.origin} atelier. The ${coll.finish.toLowerCase()} is done at the very end, by hand, before the numbered ribbon is attached and the piece is sealed in its dust bag.`,
        specs: [
          { label: 'Material', value: coll.fabric },
          { label: 'Finish', value: coll.finish },
          { label: 'Silhouette', value: coll.silhouette },
          { label: 'Edition size', value: '10 pieces' },
          { label: 'Sizing', value: 'XS – XL (size guide enclosed)' },
          { label: 'Includes', value: 'Numbered ribbon, edition card, dust bag' },
          { label: 'Care', value: 'Hand wash cold, lay flat to dry' },
        ],
      });
    }
  });
  return list;
}

export const PRODUCTS = buildProducts();
