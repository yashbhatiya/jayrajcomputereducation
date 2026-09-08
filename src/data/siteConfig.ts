/**
 * Single source of truth for business info (NAP), trust-signal numbers, and
 * social links. Update values here and they propagate everywhere — Hero,
 * About, Footer, Contact, and the JSON-LD schema all import from this file,
 * so the site can never show three different "years of experience" numbers
 * again.
 */

export const siteConfig = {
  name: 'Jayraj Computer Education',
  url: 'https://jayrajcomputers.in',
  tagline: 'Excellence in Computer Training',

  /**
   * IMPORTANT — please verify this figure before publishing.
   * Your Justdial listing independently shows "18 years in business"
   * (established 2007), while the site currently shows three different
   * numbers in three places (Hero: 20+, About: 20, Footer: 15). Using the
   * Justdial figure as the most independently-verifiable anchor for now —
   * change this one line if you know the exact correct number.
   */
  yearsOfExperience: 18,

  stats: {
    studentsTrained: '5000+',
    coursesOffered: '14+',
    placementRate: '95%',
  },

  contact: {
    phone: '+91 97278 94127',
    phoneHref: 'tel:+919727894127',
    whatsappHref: 'https://wa.me/919727894127?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20courses',
    email: 'jayrajcomputereducation@gmail.com',
    address: {
      line1: 'B-23 Krishna Park Society, Ajwa Road',
      locality: 'Vadodara',
      region: 'Gujarat',
      postalCode: '390019',
      country: 'IN',
      full: 'B-23 Krishna Park Society, Ajwa Road, Vadodara - 390019',
    },
    hours: 'Mon - Sat: 8:00 AM - 8:00 PM',
    // Approximate coordinates for Ajwa Road, Vadodara — replace with the
    // exact pin from your Google Business Profile once claimed (Section 6.1
    // of the SEO audit) for both the map embed and the LocalBusiness schema.
    geo: { latitude: 22.3245, longitude: 73.1587 },
  },

  // TODO: replace with your real profile URLs. Leaving these as "#" (as the
  // site currently does) means dead links in the footer and a missed
  // "sameAs" signal in your LocalBusiness schema — see SEO audit Section 7.3.
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100090348465042',
    instagram: 'https://www.instagram.com/jayrajcomputereducation/?hl=en',
    twitter: 'https://x.com/JayrajComputer',
    linkedin: 'https://www.linkedin.com/company/jayraj-computer-education/',
  },
};
