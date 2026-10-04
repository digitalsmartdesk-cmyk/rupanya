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

const PRODUCT_IMAGES = [
  // Zardozi Vault 01–08
  asset('/uploads/lite/01_Bridal_and_Heritage/NAVSAAJ_Lehenga_01_Ruby_Zardozi_Bridal.jpg'),
  asset('/uploads/lite/01_Bridal_and_Heritage/NAVSAAJ_Lehenga_02_Ivory_Pearl_Bridal.jpg'),
  asset('/uploads/lite/01_Bridal_and_Heritage/NAVSAAJ_Lehenga_03_Maroon_Banarasi_Bridal.jpg'),
  asset('/uploads/lite/01_Bridal_and_Heritage/NAVSAAJ_Lehenga_04_Old_Rose_Heritage.jpg'),
  asset('/uploads/lite/01_Bridal_and_Heritage/NAVSAAJ_Lehenga_05_Saffron_Temple_Silk.jpg'),
  asset('/uploads/lite/01_Bridal_and_Heritage/NAVSAAJ_Lehenga_06_Emerald_Heirloom.jpg'),
  asset('/uploads/lite/01_Bridal_and_Heritage/NAVSAAJ_Lehenga_07_Champagne_Couture_Bridal.jpg'),
  asset('/uploads/lite/01_Bridal_and_Heritage/NAVSAAJ_Lehenga_08_Cobalt_Royal_Brocade.jpg'),
  // Mirror Tale 09–16
  asset('/uploads/lite/02_Contemporary_Festive/NAVSAAJ_Lehenga_09_Powder_Blue_Festive.jpg'),
  asset('/uploads/lite/02_Contemporary_Festive/NAVSAAJ_Lehenga_10_Lilac_Mirror_Work.jpg'),
  asset('/uploads/lite/02_Contemporary_Festive/NAVSAAJ_Lehenga_11_Coral_Gota_Bloom.jpg'),
  asset('/uploads/lite/02_Contemporary_Festive/NAVSAAJ_Lehenga_12_Pistachio_Chikankari.jpg'),
  asset('/uploads/lite/02_Contemporary_Festive/NAVSAAJ_Lehenga_13_Fuchsia_Sequin_Evening.jpg'),
  asset('/uploads/lite/02_Contemporary_Festive/NAVSAAJ_Lehenga_14_Sage_Silk_Modern.jpg'),
  asset('/uploads/lite/02_Contemporary_Festive/NAVSAAJ_Lehenga_15_Midnight_Navy_Contemporary.jpg'),
  asset('/uploads/lite/02_Contemporary_Festive/NAVSAAJ_Lehenga_16_Butter_Yellow_Celebration.jpg'),
  // Gota Bloom 17–24
  asset('/uploads/lite/03_Pastel_and_Daylight/NAVSAAJ_Lehenga_17_Rose_Quartz_Daylight.jpg'),
  asset('/uploads/lite/03_Pastel_and_Daylight/NAVSAAJ_Lehenga_18_Mint_Botanical.jpg'),
  asset('/uploads/lite/03_Pastel_and_Daylight/NAVSAAJ_Lehenga_19_Peach_Organza_Layered.jpg'),
  asset('/uploads/lite/03_Pastel_and_Daylight/NAVSAAJ_Lehenga_20_Lavender_Chanderi_Inspired.jpg'),
  asset('/uploads/lite/03_Pastel_and_Daylight/NAVSAAJ_Lehenga_21_Ivory_Sage_Garden.jpg'),
  asset('/uploads/lite/03_Pastel_and_Daylight/NAVSAAJ_Lehenga_22_Powder_Rose_Draped.jpg'),
  asset('/uploads/lite/03_Pastel_and_Daylight/NAVSAAJ_Lehenga_23_Sky_Blue_Applique.jpg'),
  asset('/uploads/lite/03_Pastel_and_Daylight/NAVSAAJ_Lehenga_24_Pale_Gold_Minimal.jpg'),
  // Chikan Noor 25–32
  asset('/uploads/lite/04_Jewel_Tone_Statement/NAVSAAJ_Lehenga_25_Peacock_Teal_Velvet.jpg'),
  asset('/uploads/lite/04_Jewel_Tone_Statement/NAVSAAJ_Lehenga_26_Plum_Velvet_Floral.jpg'),
  asset('/uploads/lite/04_Jewel_Tone_Statement/NAVSAAJ_Lehenga_27_Sapphire_Crystal.jpg'),
  asset('/uploads/lite/04_Jewel_Tone_Statement/NAVSAAJ_Lehenga_28_Bottle_Green_Brocade.jpg'),
  asset('/uploads/lite/04_Jewel_Tone_Statement/NAVSAAJ_Lehenga_29_Burnt_Orange_Silk.jpg'),
  asset('/uploads/lite/04_Jewel_Tone_Statement/NAVSAAJ_Lehenga_30_Wine_Sequin_Couture.jpg'),
  asset('/uploads/lite/04_Jewel_Tone_Statement/NAVSAAJ_Lehenga_31_Royal_Purple_Zari.jpg'),
  asset('/uploads/lite/04_Jewel_Tone_Statement/NAVSAAJ_Lehenga_32_Turquoise_Mirror_Detail.jpg'),
  // Banarasi Drape 33–40
  asset('/uploads/lite/05_Craft_and_Destination/NAVSAAJ_Lehenga_33_Kutch_Embroidery.jpg'),
  asset('/uploads/lite/05_Craft_and_Destination/NAVSAAJ_Lehenga_34_Kashmiri_Aari.jpg'),
  asset('/uploads/lite/05_Craft_and_Destination/NAVSAAJ_Lehenga_35_Banarasi_Gold.jpg'),
  asset('/uploads/lite/05_Craft_and_Destination/NAVSAAJ_Lehenga_36_Phulkari_Scarlet.jpg'),
  asset('/uploads/lite/05_Craft_and_Destination/NAVSAAJ_Lehenga_37_Ajrakh_Indigo.jpg'),
  asset('/uploads/lite/05_Craft_and_Destination/NAVSAAJ_Lehenga_38_Madhubani_Ivory.jpg'),
  asset('/uploads/lite/05_Craft_and_Destination/NAVSAAJ_Lehenga_39_Lotus_Pink_Destination.jpg'),
  asset('/uploads/lite/05_Craft_and_Destination/NAVSAAJ_Lehenga_40_Black_Antique_Gold_Finale.jpg'),
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
        imgSrc: PRODUCT_IMAGES[i - 1],
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
