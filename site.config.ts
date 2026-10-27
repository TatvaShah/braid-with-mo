import type { SiteConfig } from "@/lib/types";

const g = (n: number, alt: string, caption: string, href: string) => ({ src: `/images/post-${n}.jpg`, width: 360, height: 640, alt, caption, href });

export const site: SiteConfig = {
  name: "Braid With Mo",
  tagline: "Protective styles, knotless braids, and feed-ins in Vaughan and the GTA.",
  category: "Protective styles and knotless braids",
  schemaType: "HairSalon",
  area: "Vaughan / GTA, ON",
  siteUrl: "https://braid-with-mo.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#8a5a3b" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Vaughan braider",
    headline: "Your next protective style, done with care",
    subhead: "Knotless, boho, Fulani, cornrows, feed-ins, and French curl braids in Vaughan and the GTA. Send a DM to book your next look.",
    images: [
      { src: "/images/post-3.jpg", alt: "Waist length boho braids by Braid With Mo" },
      { src: "/images/post-7.jpg", alt: "Layered French curl braids" },
      { src: "/images/post-4.jpg", alt: "Bob boho braids in blonde tones" },
    ],
    secondaryCta: { label: "See the styles", href: "#gallery" },
  },

  highlights: ["Protective styles", "Knotless and boho braids", "Vaughan and the GTA", "Book by DM"],

  about: {
    title: "Braids for every season",
    body: [
      "Braid With Mo is a Vaughan braider creating protective styles for clients across Vaughan, Toronto, and the GTA. From knotless and boho braids to cornrows, feed-ins, and French curls, every look is done with clean parts and lots of love.",
      "Have a style, length, or colour in mind? Send a message and we will plan your next look together.",
    ],
    image: { src: "/images/post-5.jpg", alt: "Clean parts on medium midback braids" },
  },

  menu: {
    label: "Services",
    title: "Styles we offer",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing on your style and length.",
    groups: [
      {
        title: "Braids",
        items: [
          { name: "Knotless braids" },
          { name: "Boho / Fulani braids" },
          { name: "French curl braids" },
        ],
      },
      {
        title: "Cornrows and feed-ins",
        items: [
          { name: "Cornrows" },
          { name: "Feed-ins" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent looks",
    items: [
      g(3, "Waist length boho braids", "Waist length boho braids", "https://www.instagram.com/braidwithmo/reel/C64wNU6La-F/"),
      g(1, "Boho braids", "Boho braids for summer", "https://www.instagram.com/braidwithmo/reel/DXA_Do3jV0F/"),
      g(4, "Bob boho braids in colours 27, 30 and 613", "Bob boho braids", "https://www.instagram.com/braidwithmo/reel/DCO-CPQRiJd/"),
      g(7, "Layered French curl braids", "Layered French curls", "https://www.instagram.com/braidwithmo/reel/C2Xl2m_LmPl/"),
      g(5, "Medium midback braids in colours 27 and 30", "Clean parts, midback length", "https://www.instagram.com/braidwithmo/reel/C_IlL1KR9Wa/"),
      g(2, "Braids ready for spring and summer", "Getting ready for spring", "https://www.instagram.com/braidwithmo/reel/DWG-KbgkSwr/"),
      g(6, "Feather crochet style", "Feather crochet", "https://www.instagram.com/braidwithmo/reel/DVUILx-CUM1/"),
    ],
  },

  instagram: { handle: "braidwithmo", embeds: [] },

  order: {
    label: "How to book",
    title: "Book in a quick DM",
    intro: "Bookings are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Mo! I would love to book an appointment.\nStyle:\nLength:\nPreferred date:\nColour (if any):",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a DM on Instagram with the style, length, and date you have in mind, and we will confirm your appointment in the chat." },
    { q: "Where are you located?", a: "Braid With Mo is based in Vaughan and serves clients across the GTA and Toronto." },
    { q: "How much does a style cost?", a: "Pricing depends on the style and length. Message us for a quote." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Vaughan, Ontario (serving the GTA)",
    socials: [],
  },

  seo: {
    title: "Braid With Mo | Knotless braids and protective styles in Vaughan",
    description: "Vaughan braider for knotless, boho and Fulani braids, cornrows, feed-ins, and French curl braids across the GTA. Book your next look by Instagram DM.",
    keywords: ["knotless braids Vaughan", "braider Vaughan", "boho braids GTA", "protective styles Toronto"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
