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

const PRODUCT_IMAGES = [
  // Bare Silk 01–08
  asset('/uploads/lite-blushlayers/Cotton/BLUSH_LAYERS_01_Cotton_Ivory.jpg'),
  asset('/uploads/lite-blushlayers/Cotton/BLUSH_LAYERS_02_Cotton_Blush_Pink.jpg'),
  asset('/uploads/lite-blushlayers/Cotton/BLUSH_LAYERS_03_Cotton_Sky_Blue.jpg'),
  asset('/uploads/lite-blushlayers/Cotton/BLUSH_LAYERS_04_Cotton_Sage_Green.jpg'),
  asset('/uploads/lite-blushlayers/Cotton/BLUSH_LAYERS_05_Cotton_Warm_Yellow.jpg'),
  asset('/uploads/lite-blushlayers/Cotton/BLUSH_LAYERS_06_Cotton_Powder_Blue.jpg'),
  asset('/uploads/lite-blushlayers/Cotton/BLUSH_LAYERS_07_Cotton_Rose_Beige.jpg'),
  asset('/uploads/lite-blushlayers/Cotton/BLUSH_LAYERS_08_Cotton_Terracotta.jpg'),
  // Lace Noir 09–16
  asset('/uploads/lite-blushlayers/Charmeuse Satin/BLUSH_LAYERS_09_Charmeuse_Satin_Champagne.jpg'),
  asset('/uploads/lite-blushlayers/Charmeuse Satin/BLUSH_LAYERS_10_Charmeuse_Satin_Blush_Rose.jpg'),
  asset('/uploads/lite-blushlayers/Charmeuse Satin/BLUSH_LAYERS_11_Charmeuse_Satin_Deep_Emerald.jpg'),
  asset('/uploads/lite-blushlayers/Charmeuse Satin/BLUSH_LAYERS_12_Charmeuse_Satin_Midnight_Blue.jpg'),
  asset('/uploads/lite-blushlayers/Charmeuse Satin/BLUSH_LAYERS_13_Charmeuse_Satin_Ivory_Pearl.jpg'),
  asset('/uploads/lite-blushlayers/Charmeuse Satin/BLUSH_LAYERS_14_Charmeuse_Satin_Burgundy.jpg'),
  asset('/uploads/lite-blushlayers/Charmeuse Satin/BLUSH_LAYERS_15_Charmeuse_Satin_Lavender.jpg'),
  asset('/uploads/lite-blushlayers/Charmeuse Satin/BLUSH_LAYERS_16_Charmeuse_Satin_Terracotta_Rose.jpg'),
  // Whisper Satin 17–24
  asset('/uploads/lite-blushlayers/Tulle/BLUSH_LAYERS_17_Tulle_Ivory_Blush.jpg'),
  asset('/uploads/lite-blushlayers/Tulle/BLUSH_LAYERS_18_Tulle_Dusty_Rose.jpg'),
  asset('/uploads/lite-blushlayers/Tulle/BLUSH_LAYERS_19_Tulle_Powder_Blue.jpg'),
  asset('/uploads/lite-blushlayers/Tulle/BLUSH_LAYERS_20_Tulle_Sage.jpg'),
  asset('/uploads/lite-blushlayers/Tulle/BLUSH_LAYERS_21_Tulle_Champagne.jpg'),
  asset('/uploads/lite-blushlayers/Tulle/BLUSH_LAYERS_22_Tulle_Black.jpg'),
  asset('/uploads/lite-blushlayers/Tulle/BLUSH_LAYERS_23_Tulle_Lilac.jpg'),
  asset('/uploads/lite-blushlayers/Tulle/BLUSH_LAYERS_24_Tulle_Burgundy.jpg'),
  // Boudoir Bloom 25–32
  asset('/uploads/lite-blushlayers/Mesh & Lace/BLUSH_LAYERS_25_Mesh_Lace_Ivory.jpg'),
  asset('/uploads/lite-blushlayers/Mesh & Lace/BLUSH_LAYERS_26_Mesh_Lace_Blush.jpg'),
  asset('/uploads/lite-blushlayers/Mesh & Lace/BLUSH_LAYERS_27_Mesh_Lace_Dusty_Rose.jpg'),
  asset('/uploads/lite-blushlayers/Mesh & Lace/BLUSH_LAYERS_28_Mesh_Lace_Lavender.jpg'),
  asset('/uploads/lite-blushlayers/Mesh & Lace/BLUSH_LAYERS_29_Mesh_Lace_Sage.jpg'),
  asset('/uploads/lite-blushlayers/Mesh & Lace/BLUSH_LAYERS_30_Mesh_Lace_Champagne.jpg'),
  asset('/uploads/lite-blushlayers/Mesh & Lace/BLUSH_LAYERS_31_Mesh_Lace_Burgundy.jpg'),
  asset('/uploads/lite-blushlayers/Mesh & Lace/BLUSH_LAYERS_32_Mesh_Lace_Midnight_Blue.jpg'),
  // Velvet Dusk 33–40
  asset('/uploads/lite-blushlayers/Voile/BLUSH_LAYERS_33_Voile_Ivory.jpg'),
  asset('/uploads/lite-blushlayers/Voile/BLUSH_LAYERS_34_Voile_Powder_Pink.jpg'),
  asset('/uploads/lite-blushlayers/Voile/BLUSH_LAYERS_35_Voile_Powder_Blue.jpg'),
  asset('/uploads/lite-blushlayers/Voile/BLUSH_LAYERS_36_Voile_Lavender.jpg'),
  asset('/uploads/lite-blushlayers/Voile/BLUSH_LAYERS_37_Voile_Sage.jpg'),
  asset('/uploads/lite-blushlayers/Voile/BLUSH_LAYERS_38_Voile_Dusty_Rose.jpg'),
  asset('/uploads/lite-blushlayers/Voile/BLUSH_LAYERS_39_Voile_Deep_Navy.jpg'),
  asset('/uploads/lite-blushlayers/Voile/BLUSH_LAYERS_40_Voile_Burgundy.jpg'),
];

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
        imgSrc: PRODUCT_IMAGES[i - 1],
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
