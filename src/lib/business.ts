// Single source of truth for verified business facts (from official Instagram @magnolia_caffee_gallery & Google listing).
export const BUSINESS = {
  name: "Magnolia Caffee & Gallery",
  shortName: "Magnolia Caffee",
  tagline: "Artisan coffee and tea, kombucha, healthy light food with a dash of art & vintage.",
  street: "1218 NE 4th Ave",
  city: "Fort Lauderdale",
  region: "FL",
  postal: "33304",
  country: "United States",
  addressLine: "1218 NE 4th Ave, Fort Lauderdale, FL 33304",
  phoneDisplay: "+1 954-952-0381",
  phoneHref: "tel:+19549520381",
  instagramHandle: "@magnolia_caffee_gallery",
  instagramUrl: "https://www.instagram.com/magnolia_caffee_gallery/",
  priceRange: "$10–20 per person",
  rating: 4.8,
  reviewCount: 806,
  services: ["Dine-in", "Takeaway", "Art & Vintage Gallery"],
  hours: [
    { days: "Mon", time: "Closed" },
    { days: "Tue – Wed", time: "10:00 AM – 4:00 PM" },
    { days: "Thu – Fri", time: "10:00 AM – 7:00 PM" },
    { days: "Sat – Sun", time: "8:30 AM – 4:00 PM" },
  ],
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Magnolia Caffee, 1218 NE 4th Ave, Fort Lauderdale, FL 33304"),
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Magnolia Caffee 1218 NE 4th Ave Fort Lauderdale FL 33304"),
  mapEmbedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Magnolia Caffee, 1218 NE 4th Ave, Fort Lauderdale, FL 33304") +
    "&output=embed",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Our Story" },
  { to: "/gallery", label: "Gallery & Art" },
  { to: "/visit", label: "Visit Us" },
] as const;

export const cafeJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: BUSINESS.name,
  telephone: "+1-954-952-0381",
  priceRange: "$10–20",
  servesCuisine: ["Artisan Coffee", "Tea", "Kombucha", "Healthy Food", "Brunch", "Desserts"],
  sameAs: [BUSINESS.instagramUrl],
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postal,
    addressCountry: "US",
  },
};
