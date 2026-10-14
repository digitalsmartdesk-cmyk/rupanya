import { brand } from './brand';
import { asset } from '@storefront/lib/asset';

export const EDIT_END = new Date(brand.editStart.getTime() + brand.editWindowDays * 86400000);

export const COLLECTIONS = [
  {
    name: 'Phulkari Rang',
    tagline: 'Silk dupion with phulkari hand-embroidery, festive vibrancy',
    fabric: 'Silk Dupion',
    weave: 'Phulkari hand-embroidery',
    origin: 'Patiala',
    originImg: asset('/images/loom-phulkari-rang.jpg'),
    names: ['Gulnaar', 'Amrita', 'Tejinder', 'Prabhjot', 'Harleen', 'Manjeet', 'Simran', 'Kiranjit'],
  },
  {
    name: 'Kashmiri Kali',
    tagline: 'Pashmina wool with kashida embroidery, winter opulence',
    fabric: 'Pashmina Wool',
    weave: 'Kashida hand-embroidery',
    origin: 'Srinagar',
    originImg: asset('/images/loom-kashmiri-kali.jpg'),
    names: ['Irfana', 'Zooni', 'Gulshan', 'Naseema', 'Parveen', 'Shahida', 'Rukhsar', 'Tabassum'],
  },
  {
    name: 'Bandhani Bloom',
    tagline: 'Cotton silk with bandhani tie-dye, festive colour',
    fabric: 'Cotton Silk',
    weave: 'Bandhani tie-dye',
    origin: 'Bhuj',
    originImg: asset('/images/loom-bandhani-bloom.jpg'),
    names: ['Devyani', 'Jalpa', 'Kavya', 'Nidhi', 'Priya', 'Riddhi', 'Saumya', 'Tanvi'],
  },
  {
    name: 'Resham Naaz',
    tagline: 'Chanderi silk with resham thread work, diaphanous grace',
    fabric: 'Chanderi Silk',
    weave: 'Resham thread embroidery',
    origin: 'Chanderi',
    originImg: asset('/images/loom-resham-naaz.jpg'),
    names: ['Aahana', 'Deepali', 'Ishita', 'Kshipra', 'Madhuri', 'Nandini', 'Pallavi', 'Radha'],
  },
  {
    name: 'Kantha Roz',
    tagline: 'Muslin with kantha stitch, effortless everyday artistry',
    fabric: 'Muslin',
    weave: 'Kantha stitch embroidery',
    origin: 'Kolkata',
    originImg: asset('/images/loom-kantha-roz.jpg'),
    names: ['Aditi', 'Bela', 'Chanda', 'Dipti', 'Eshita', 'Falguni', 'Garima', 'Haimanti'],
  },
];

const COLORWAYS = ['Deep Maroon', 'Antique Gold', 'Emerald', 'Midnight Indigo', 'Ivory & Rose', 'Rust & Copper', 'Sapphire', 'Wine', 'Peacock Teal', 'Sandalwood'];

const PRODUCT_IMAGES = [
  // Phulkari Rang 01–08
  asset('/uploads/Lite-Lalitya/01_Straight_Cut_Suits/LALITYA_SUITS_01_Ruby_Red_Velvet_Straight_Cut.jpg'),
  asset('/uploads/Lite-Lalitya/01_Straight_Cut_Suits/LALITYA_SUITS_02_Ivory_Pearl_Straight_Cut.jpg'),
  asset('/uploads/Lite-Lalitya/01_Straight_Cut_Suits/LALITYA_SUITS_03_Emerald_Green_Silk_Straight_Cut.jpg'),
  asset('/uploads/Lite-Lalitya/01_Straight_Cut_Suits/LALITYA_SUITS_04_Powder_Blue_Chanderi_Straight_Cut.jpg'),
  asset('/uploads/Lite-Lalitya/01_Straight_Cut_Suits/LALITYA_SUITS_05_Blush_Pink_Embroidered_Straight_Cut.jpg'),
  asset('/uploads/Lite-Lalitya/01_Straight_Cut_Suits/LALITYA_SUITS_06_Mustard_Yellow_Festive_Straight_Cut.jpg'),
  asset('/uploads/Lite-Lalitya/01_Straight_Cut_Suits/LALITYA_SUITS_07_Black_Contemporary_Straight_Cut.jpg'),
  asset('/uploads/Lite-Lalitya/01_Straight_Cut_Suits/LALITYA_SUITS_08_Lavender_Silver_Straight_Cut.jpg'),
  // Kashmiri Kali 09–16
  asset('/uploads/Lite-Lalitya/02_Anarkali_Suits/LALITYA_SUITS_09_Royal_Blue_Silk_Anarkali.jpg'),
  asset('/uploads/Lite-Lalitya/02_Anarkali_Suits/LALITYA_SUITS_10_Peach_Organza_Anarkali.jpg'),
  asset('/uploads/Lite-Lalitya/02_Anarkali_Suits/LALITYA_SUITS_11_Bottle_Green_Velvet_Anarkali.jpg'),
  asset('/uploads/Lite-Lalitya/02_Anarkali_Suits/LALITYA_SUITS_12_Ivory_Pearl_Anarkali.jpg'),
  asset('/uploads/Lite-Lalitya/02_Anarkali_Suits/LALITYA_SUITS_13_Magenta_Festive_Anarkali.jpg'),
  asset('/uploads/Lite-Lalitya/02_Anarkali_Suits/LALITYA_SUITS_14_Teal_Contemporary_Anarkali.jpg'),
  asset('/uploads/Lite-Lalitya/02_Anarkali_Suits/LALITYA_SUITS_15_Dusty_Rose_Anarkali.jpg'),
  asset('/uploads/Lite-Lalitya/02_Anarkali_Suits/LALITYA_SUITS_16_Champagne_Gold_Anarkali.jpg'),
  // Bandhani Bloom 17–24
  asset('/uploads/Lite-Lalitya/03_Palazzo_Suits/LALITYA_SUITS_17_Powder_Pink_Palazzo.jpg'),
  asset('/uploads/Lite-Lalitya/03_Palazzo_Suits/LALITYA_SUITS_18_Emerald_Palazzo.jpg'),
  asset('/uploads/Lite-Lalitya/03_Palazzo_Suits/LALITYA_SUITS_19_Ivory_and_Gold_Palazzo.jpg'),
  asset('/uploads/Lite-Lalitya/03_Palazzo_Suits/LALITYA_SUITS_20_Wine_Palazzo.jpg'),
  asset('/uploads/Lite-Lalitya/03_Palazzo_Suits/LALITYA_SUITS_21_Coral_Red_Sharara.jpg'),
  asset('/uploads/Lite-Lalitya/03_Palazzo_Suits/LALITYA_SUITS_22_Midnight_Navy_Sharara.jpg'),
  asset('/uploads/Lite-Lalitya/03_Palazzo_Suits/LALITYA_SUITS_23_Sage_Green_Sharara.jpg'),
  asset('/uploads/Lite-Lalitya/03_Palazzo_Suits/LALITYA_SUITS_24_Plum_Purple_Sharara.jpg'),
  // Resham Naaz 25–32
  asset('/uploads/Lite-Lalitya/04_Sharara_Suits/LALITYA_SUITS_25_Marigold_Straight_Suit.jpg'),
  asset('/uploads/Lite-Lalitya/04_Sharara_Suits/LALITYA_SUITS_26_Lilac_Straight_Suit.jpg'),
  asset('/uploads/Lite-Lalitya/04_Sharara_Suits/LALITYA_SUITS_27_Crimson_Jacket_Suit.jpg'),
  asset('/uploads/Lite-Lalitya/04_Sharara_Suits/LALITYA_SUITS_28_Mint_Green_Suit.jpg'),
  asset('/uploads/Lite-Lalitya/04_Sharara_Suits/LALITYA_SUITS_29_Cobalt_Blue_Straight_Suit.jpg'),
  asset('/uploads/Lite-Lalitya/04_Sharara_Suits/LALITYA_SUITS_30_Blush_Beige_Velvet_Suit.jpg'),
  asset('/uploads/Lite-Lalitya/04_Sharara_Suits/LALITYA_SUITS_31_Turquoise_Festive_Suit.jpg'),
  asset('/uploads/Lite-Lalitya/04_Sharara_Suits/LALITYA_SUITS_32_Charcoal_Grey_Suit.jpg'),
  // Kantha Roz 33–40
  asset('/uploads/Lite-Lalitya/05_Patiala_Suits/LALITYA_SUITS_33_Cream_Coral_Printed_Suit.jpg'),
  asset('/uploads/Lite-Lalitya/05_Patiala_Suits/LALITYA_SUITS_34_Forest_Green_Velvet_Anarkali.jpg'),
  asset('/uploads/Lite-Lalitya/05_Patiala_Suits/LALITYA_SUITS_35_Pale_Yellow_Peplum_Suit.jpg'),
  asset('/uploads/Lite-Lalitya/05_Patiala_Suits/LALITYA_SUITS_36_Burgundy_Silk_Suit.jpg'),
  asset('/uploads/Lite-Lalitya/05_Patiala_Suits/LALITYA_SUITS_37_Rose_Pink_Anarkali.jpg'),
  asset('/uploads/Lite-Lalitya/05_Patiala_Suits/LALITYA_SUITS_38_Ivory_Teal_Jacket_Suit.jpg'),
  asset('/uploads/Lite-Lalitya/05_Patiala_Suits/LALITYA_SUITS_39_Saffron_Festive_Suit.jpg'),
  asset('/uploads/Lite-Lalitya/05_Patiala_Suits/LALITYA_SUITS_40_Indigo_Velvet_Suit.jpg'),
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
      const stock = 10 - ((i * 3 + 1) % 10); // 1-10, out of 10 sets total
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
        imgSrc: PRODUCT_IMAGES[i - 1],
        description: `Hand-crafted in ${coll.origin}, this ${coll.fabric.toLowerCase()} suit set features ${coll.weave.toLowerCase()} in ${colorway.toLowerCase()} tones. Part of the ${coll.name} line — only 10 sets of this design exist in this edit; once sold, it will not be remade.`,
        story: `Hand-crafted over 18 days by master artisan families in ${coll.origin}, carrying forward a technique passed through four generations. Your purchase directly supports the atelier collective behind this set.`,
        specs: [
          { label: 'Fabric', value: coll.fabric },
          { label: 'Craft', value: coll.weave },
          { label: 'Edition size', value: '10 sets' },
          { label: 'Set includes', value: 'Kameez, bottom, dupatta' },
          { label: 'Sizing', value: 'Made-to-measure, XS–XXL' },
          { label: 'Includes', value: 'Certificate of authenticity, edition card' },
        ],
      });
    }
  });
  return list;
}

export const PRODUCTS = buildProducts();
