export const brand = {
  slug: 'navsaaj',
  name: 'Navsaaj',
  logoSrc: '/logo-navsaaj.png',
  unit: 'set',
  unitPlural: 'sets',
  orderPrefix: 'NAV-',
  editStart: new Date(2026, 7, 3), // Aug 3, 2026
  editWindowDays: 60,
  basePrice: 32000,
  priceStep: 4200,

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
    editLabel: 'The Edit — 40 Sets',
    secondaryLabel: 'Our Artisans',
    secondaryPath: '/artisans',
  },

  copy: {
    heroEyebrow: 'The 2026 Bridal Edit',
    heroHeadline: ['Forty lehengas.', 'Sixty days.', 'Then, gone.'],
    heroBody:
      'Each edit is hand-embroidered across our partner ateliers in Surat, Kutch, Jaipur, Lucknow and Varanasi — forty sets, individually numbered, never remade once the collection closes.',
    heroCtaPrimary: 'View The 40 Sets',
    heroCtaSecondary: 'Our Craft Story',
    heroPlaceholder: 'Hero photo — bride in flagship zardozi lehenga, editorial lighting',
    countdownSuffix: 'until this edit closes for good',

    sectionTwoTitle: 'Why only forty',
    sectionTwoLink: 'See the full edit',
    valueCardsAccented: false,
    valueCards: [
      {
        number: '01',
        title: 'Individually numbered',
        body: 'Every design is crafted in a strict run of ten sets, each carrying its own number on a silk label and certificate of authenticity.',
      },
      {
        number: '02',
        title: 'Hand-embroidered, not remade',
        body: "Once a design's ten sets are complete, the atelier moves on. No reissues, no restocks — ever.",
      },
      {
        number: '03',
        title: 'A new edit every 60 days',
        body: 'When the countdown ends, this collection retires permanently and a new edit of forty takes its place.',
      },
    ],

    fromThisEdit: 'From this edit',
    viewAllCta: 'View all 40 sets',

    collectionEyebrowPrefix: 'Bridal Edit',
    collectionTitle: 'The 40 Sets',
    collectionSubtitle: "Forty sets, each numbered 1–40. When they're gone, this edit is retired.",
    collectionCrumb: 'The 40 Sets',

    originPrefix: 'Crafted in ',
    inclusiveOfTaxes: 'inclusive of taxes',
    stockBadge: (n) => `Only ${n} left`,
    lowStockBanner: (n) => `Only ${n} of 10 sets remain in this design`,
    closesPrefix: 'Closes with this edit in ',
    closesSuffix: 'not restocked after sellout',
    theMakerHeading: 'The artisan',
    moreFromPrefix: 'More from',

    bagTitle: 'Your Bag',
    bagEmpty: 'Your bag is empty.',
    browseAllCta: 'Browse the 40 sets',
    shipsWithCert: 'Each set ships with its certificate of authenticity',

    checkoutTitle: 'Checkout',
    addressSectionTitle: 'Shipping Address',
    paymentSectionTitle: 'Payment Method',
    extraFieldLabel: 'Blouse size (for made-to-measure stitching)',
    extraFieldPlaceholder: 'e.g. S / M / L / Custom bust-waist-hip',

    confirmedHeadline: 'Order confirmed',
    confirmedBody: (orderNumber, totalLabel) =>
      `Order ${orderNumber} for ${totalLabel} is being prepared. Each set will arrive with its certificate of authenticity and edition card.`,
    continueBrowsing: 'Continue Browsing',

    makersEyebrow: 'Our Artisans',
    makersHeadline: ['Five ateliers.', 'One promise.'],
    makersBody:
      'Every Navsaaj edit is hand-crafted by five partner artisan collectives, each behind one of our ongoing lines. We commission by hand, pay above market rate, and never rush a design to meet a deadline.',
    makersHeroPlaceholder: 'Photo — artisan hand-embroidering, Surat atelier',
    makersRowSuffix: 'An ongoing line, revisited with eight new designs in every edit.',

    footerTagline: 'Crafted in India',
  },
};
