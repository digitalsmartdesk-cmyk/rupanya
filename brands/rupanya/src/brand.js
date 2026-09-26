export const brand = {
  slug: 'rupanya',
  name: 'Rupanya',
  logoSrc: '/logo-rupanya.png',
  unit: 'piece',
  unitPlural: 'pieces',
  orderPrefix: 'RUP-',
  editStart: new Date(2026, 7, 3), // Aug 3, 2026
  editWindowDays: 60,
  basePrice: 18500,
  priceStep: 3200,

  typography: {
    headlineFont: "'Cormorant Garamond',serif",
    bodyFont: "'Manrope',sans-serif",
    headlineWeight: 500,
    bodyWeight: 400,
    italicAccent: false,
    buttonUppercase: false,
    buttonLetterSpacing: 0.4,
  },

  layout: {
    imageRatio: '3 / 4',
    thumbRatio: '1 / 1',
    heroImageFirst: false,
    heroMinHeight: 640,
  },

  nav: {
    editLabel: 'The Edit — 40 Designs',
    secondaryLabel: 'Our Weavers',
    secondaryPath: '/weavers',
  },

  copy: {
    heroEyebrow: 'The 2026 Winter Edit',
    heroHeadline: ['Forty sarees.', 'Sixty days.', 'Then, gone.'],
    heroBody:
      'Each edit is handcrafted across our partner ateliers in Surat, Chanderi, Maheshwar, Varanasi and Mysore — forty designs, individually numbered, never remade once the collection closes.',
    heroCtaPrimary: 'View The 40 Designs',
    heroCtaSecondary: 'Our Weaving Story',
    heroPlaceholder: 'Model draped in an ivory saree with gold zari embroidery, palace interior',
    countdownSuffix: 'until this edit closes for good',

    sectionTwoTitle: 'Why only forty',
    sectionTwoLink: 'See the full edit',
    valueCardsAccented: false,
    valueCards: [
      {
        number: '01',
        title: 'Individually numbered',
        body: 'Every design is woven in a strict run of ten pieces, each carrying its own number on a silk label and certificate of authenticity.',
      },
      {
        number: '02',
        title: 'Woven, not reprinted',
        body: "Once a design's forty pieces are woven, the loom moves on. No reissues, no restocks — ever.",
      },
      {
        number: '03',
        title: 'A new edit every 60 days',
        body: 'When the countdown ends, this collection retires permanently and a new edit of forty takes its place.',
      },
    ],

    fromThisEdit: 'From this edit',
    viewAllCta: 'View all 40 designs',

    collectionEyebrowPrefix: 'Winter Edit',
    collectionTitle: 'The 40 Designs',
    collectionSubtitle: "Forty pieces, each numbered 1–40. When they're gone, this edit is retired.",
    collectionCrumb: 'The 40 Designs',

    originPrefix: 'Handwoven in ',
    inclusiveOfTaxes: 'inclusive of taxes',
    stockBadge: (n) => `Only ${n} left`,
    lowStockBanner: (n) => `Only ${n} of 10 pieces remain in this design`,
    closesPrefix: 'Closes with this edit in ',
    closesSuffix: 'not restocked after sellout',
    theMakerHeading: 'The weaver',
    moreFromPrefix: 'More from',

    bagTitle: 'Your Bag',
    bagEmpty: 'Your bag is empty.',
    browseAllCta: 'Browse the 40 designs',
    shipsWithCert: 'Each piece ships with its certificate of authenticity',

    checkoutTitle: 'Checkout',
    addressSectionTitle: 'Shipping Address',
    paymentSectionTitle: 'Payment Method',
    extraFieldLabel: null,
    extraFieldPlaceholder: null,

    confirmedHeadline: 'Order confirmed',
    confirmedBody: (orderNumber, totalLabel) =>
      `Order ${orderNumber} for ${totalLabel} is being prepared. Each piece will arrive with its certificate of authenticity and edition card.`,
    continueBrowsing: 'Continue Browsing',

    makersEyebrow: 'Our Weavers',
    makersHeadline: ['Five looms.', 'One promise.'],
    makersBody:
      'Every Rupanya edit is woven by five partner loom collectives, each behind one of our ongoing lines. We commission by hand, pay above market rate, and never rush a design to meet a deadline.',
    makersHeroPlaceholder: 'Photo — artisan at work, partner atelier',
    makersRowSuffix: 'An ongoing line, revisited with eight new designs in every edit.',

    footerTagline: 'Woven in India',
  },
};
