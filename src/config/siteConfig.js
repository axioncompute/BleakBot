export const SITE_CONFIG = {
  brandName: 'Bleak Bot',
  tagline: 'Your backup guy — Real Home Backup Power Testing',
  domain: 'bleakbot.in',
  siteUrl: 'https://bleakbot.in',
  founder: {
    name: 'Marcus Webb',
    role: 'Homeowner & Lead Backup Power Tester',
    location: 'Jacksonville, Florida',
    avatarLocal: '/assets/marcus-webb.jpg',
    avatarRemote: 'https://bleakbot.in/wp-content/uploads/2026/05/Marcus-Weeb.jpg',
  },
  description:
    'Honest portable power station runtime tests, real installed generator comparisons, and storm-outage readiness guides tested by Jacksonville, FL homeowner Marcus Webb.',
  logo: {
    src: '/assets/logo.webp',
    lightSrc: '/assets/logo.webp',
    darkSrc: '/assets/logo.webp',
    remoteFallback: 'https://bleakbot.in/wp-content/uploads/2026/04/cropped-logo-of-bleak.webp',
    fallbackSvg: '/assets/logo.svg',
    alt: 'Bleak Bot official logo',
  },
  contact: {
    email: 'marcus@bleakbot.in',
    supportEmail: 'info@bleakbot.in',
    emailHref: 'mailto:marcus@bleakbot.in',
    locationDisplay: 'Jacksonville, FL (Testing) • BleakBot.in Publishing Platform',
    hours: 'Mon – Sat, 9:00 AM – 6:00 PM EST',
    responsePromise: 'We read every message and reply as quickly as possible',
  },
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Reviews & Guides', path: '/blog' },
    {
      label: 'About',
      dropdown: [
        { label: 'About BleakBot — Why This Site Exists', path: '/about' },
        {
          label: 'Meet Marcus Webb — Running the Tests',
          path: '/meet-marcus-webb-the-homeowner-running-the-tests',
        },
      ],
    },
    {
      label: 'Legal',
      dropdown: [
        { label: 'Disclaimer', path: '/legal/disclaimer' },
        { label: 'Privacy Policy', path: '/legal/privacy-policy' },
        { label: 'Terms & Conditions', path: '/legal/terms' },
      ],
    },
    { label: 'Contact Us', path: '/contact' },
  ],
};
