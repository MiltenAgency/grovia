/**
 * Site-wide copy. Every string is verbatim from the Framer export unless a
 * comment says otherwise — including the template's own typos.
 */

export const site = {
  name: "Grovia",
  logo: "/assets/img/ce4b2f75e5deea6e.webp",
  title: "Grovia",
  description:
    "Grovia is a SaaS and business template for startups and growing companies. It includes sections for features, pricing, case studies, integrations, and more, helping you present your brand and drive growth with clarity.",
  email: "hello@grovia.io",
  phone: "206-837-1232",
};

/** Hrefs are the export's own, including the singular `#feature`. */
export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Features", href: "/#feature" },
  { label: "Pricing", href: "/#pricing" },
];

export const navCta = { label: "Contact us", href: "/#contact" };

export const footer = {
  newsletterHeading: "Sign up for our newsletter",
  newsletterPlaceholder: "name@email.com",
  newsletterButton: "Subscribe",
  pagesHeading: "Pages",
  pages: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Case Studies", href: "/case-studies" },
  ],
  socials: [
    { label: "X", href: "https://x.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
  credit: "Designed by Lunis. All rights reserved.",
};

/** The "Start your journey" band that closes / and /about (but not the
    case-study routes — checked against the export, page by page). */
export const closingCta = {
  heading: "Start your journey",
  sub: "Let’s start building something great together.",
  phone: site.phone,
  email: site.email,
  background: "/assets/img/bff93d1113c72efd.webp",
  fields: {
    name: { label: "Name", placeholder: "Jane Smith" },
    email: { label: "Email", placeholder: "jane@framer.com" },
    message: { label: "Message", placeholder: "Enter your message" },
  },
  submit: "Submit",
};

/** Four avatars + the rating line, reused in the hero, pricing and CTA bands. */
export const socialProof = {
  avatars: [
    "/assets/img/5bba0761e5487a70.webp",
    "/assets/img/8d6436162f4300a1.webp",
    "/assets/img/d544947ed2fe94e2.webp",
    "/assets/img/ce8d1957167cd43b.webp",
  ],
  rating: "4.9 / 5 Rated",
  customers: "Over 9.2k Customers",
};

/** Client marks for the two logo tickers. */
export const clientLogos = [
  { src: "/assets/img/0f628da0b4381c50.webp", w: 145, alt: "Pluto Inc" },
  { src: "/assets/img/84141b1dd7f53dd7.webp", w: 168, alt: "VitaHealth" },
  { src: "/assets/img/310b441dc76bc687.webp", w: 144, alt: "BoxMedia" },
  { src: "/assets/img/fbc94376fad10a64.webp", w: 156, alt: "NovaTech" },
];
