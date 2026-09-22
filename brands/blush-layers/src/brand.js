export const brand = {
  slug: 'blush-layers',
  name: 'Blush Layers',
  logoSrc: '/logo-blush-layers.png',
  unit: 'piece',
  unitPlural: 'pieces',
  orderPrefix: 'BLS-',
  editStart: new Date(2026, 7, 3), // Aug 3, 2026
  editWindowDays: 60,
  basePrice: 4800,
  priceStep: 1600,

  typography: {
    headlineFont: "'Playfair Display',serif",
    bodyFont: "'DM Sans',sans-serif",
    headlineWeight: 400,
    bodyWeight: 300,
    italicAccent: true,
    buttonUppercase: true,
    buttonLetterSpacing: 0.8,
  },

  layout: {
    imageRatio: '2 / 3',
    thumbRatio: '2 / 3',
    heroImageFirst: true,
    heroMinHeight: 680,
  },

  nav: {
    editLabel: 'The Edit — 40 Pieces',
    secondaryLabel: 'Our Ateliers',
    secondaryPath: '/ateliers',
  },

  copy: {
    heroEyebrow: 'The Intimate Edit, 2026',
    heroHeadline: ['Forty pieces.', 'For the hours', 'that are yours alone.'],
    heroBody:
      'Five collections across our partner ateliers in Paris, Lyon, Mumbai, Benares and Jaipur — each piece individually numbered, produced in tens, never revisited once this edit closes.',
    heroCtaPrimary: 'Explore the Edit',
    heroCtaSecondary: 'The Craft',
    heroPlaceholder: 'Hero — model in silk chemise, soft studio light, intimate editorial mood',
    countdownSuffix: 'until this edit closes',

    sectionTwoTitle: 'The philosophy',
    sectionTwoLink: 'See all 40 pieces',
    valueCardsAccented: true,
    valueCards: [
      {
        title: 'Ten, not ten thousand',
        body: 'Each design is made exactly ten times. A number on the label is your guarantee no one has the same piece made the same way.',
      },
      {
        title: 'The atelier, not the factory',
        body: 'Every piece is hand-finished by the artisan who made it — cut, sewn, and inspected in a single atelier, never on a production line.',
      },
      {
        title: 'Sixty days, then forever gone',
        body: 'When the countdown ends the collection retires. No reruns, no restocks. A new edit of forty takes its place.',
      },
    ],

    fromThisEdit: 'From this edit',
    viewAllCta: 'View all 40 pieces',

    collectionEyebrowPrefix: 'Intimate Edit',
    collectionTitle: 'The 40 Pieces',
    collectionSubtitle: 'Each numbered 1–40. Once an edition sells out, it closes with the edit.',
    collectionCrumb: 'The Edit',

    originPrefix: '',
    inclusiveOfTaxes: 'inclusive of taxes',
    stockBadge: (n) => `${n} left`,
    lowStockBanner: (n) => `${n} of 10 remain`,
    closesPrefix: 'Edit closes in ',
    closesSuffix: 'not restocked after sellout',
    theMakerHeading: 'The maker',
    moreFromPrefix: 'More from',

    bagTitle: 'Your Bag',
    bagEmpty: 'Your bag is empty.',
    browseAllCta: 'Browse the Edit',
    shipsWithCert: 'Ships in a Blush Layers dust bag with edition card',

    checkoutTitle: 'Checkout',
    addressSectionTitle: 'Delivery Address',
    paymentSectionTitle: 'Payment',
    extraFieldLabel: 'Your size (help us pick the right size card)',
    extraFieldPlaceholder: 'XS / S / M / L / XL',

    confirmedHeadline: 'On its way to you',
    confirmedBody: (orderNumber, totalLabel) =>
      `Order ${orderNumber} for ${totalLabel} is being hand-packed. Your pieces arrive in a Blush Layers dust bag with the edition card and numbered ribbon intact.`,
    continueBrowsing: 'Continue Browsing',

    makersEyebrow: 'Our Ateliers',
    makersHeadline: ['Five rooms.', 'One standard.'],
    makersBody:
      'Every Blush Layers piece is hand-finished in one of five partner ateliers, each behind a single ongoing collection. We source fabric directly, pay above rate, and sign off on every piece before it ships.',
    makersHeroPlaceholder: 'Atelier interior — cutting table, silk bolts, soft natural light',
    makersRowSuffix: 'Eight new designs per edit, never carried forward.',

    footerTagline: 'Made with intention',
  },
};
