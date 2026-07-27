import g1 from "@/assets/granite-1.png";
import g2 from "@/assets/granite-2.png";
import g3 from "@/assets/granite-3.png";
import g4 from "@/assets/granite-4.png";
import g5 from "@/assets/granite-5.png";
import g6 from "@/assets/granite-6.png";
import mTravertine from "@/assets/marble-travertine.png";
import mZiarat from "@/assets/marble-ziarat-white.png";
import mPanda from "@/assets/marble-panda-white.png";
import mBotticino from "@/assets/marble-botticino.png";
import mGreen from "@/assets/marble-indian-green.png";
import mEmperador from "@/assets/marble-dark-emperador.png";
import lmTrevera from "@/assets/lm-Trevera_Marble.png";
import lmTravertineQ from "@/assets/lm-Travertine_q.png";
import lmSilkyBlack from "@/assets/lm-Silky_Black_Marble.png";
import lmPumpoo from "@/assets/lm-Pumpoo_Marble.png";
import lmOceanic from "@/assets/lm-Oceanic_Marble.png";
import lmBlackGold from "@/assets/lm-black_and_gold.png";
import lmBadal from "@/assets/lm-badal.png";

export type Category = "local-granite" | "imported-granite" | "local-marble" | "imported-marble";

export type Product = {
  slug: string;
  name: string;
  origin: string;
  category: Category;
  categoryLabel: string;
  desc: string;
  tagline: string;
  image: string;
  price: string;
  specs: {
    thickness: string;
    finish: string;
    bestFor: string;
    colourRange: string;
    slipRating: string;
  };
};

export const CATEGORIES: { value: Category; label: string; short: string }[] = [
  { value: "local-granite", label: "Local Granite", short: "Local Granite" },
  { value: "imported-granite", label: "Imported Granite", short: "Imported Granite" },
  { value: "local-marble", label: "Local Marble", short: "Local Marble" },
  { value: "imported-marble", label: "Imported Marble", short: "Imported Marble" },
];

const defaultSpecs = {
  thickness: "16mm – 30mm",
  finish: "Polished, Honed",
  bestFor: "Countertops, Flooring, Cladding",
  colourRange: "Varies by block",
  slipRating: "Good",
};

export const PRODUCTS: Product[] = [
  // LOCAL GRANITE
  { slug: "sado-pink-granite", name: "Sado Pink Granite", origin: "Pakistan", category: "local-granite", categoryLabel: "Local Granite",
    tagline: "Warm pink-grey tones with soft grain.",
    desc: "A Pakistani favourite quarried from the northern regions. Sado Pink Granite brings a soft warmth to any space, ideal for kitchen countertops and grand flooring installations.",
    image: g1, price: "From Rs. 350 / sq.ft",
    specs: { ...defaultSpecs, colourRange: "Pink, Grey, Rust" } },
  { slug: "tropical-granite", name: "Tropical Granite", origin: "Pakistan", category: "local-granite", categoryLabel: "Local Granite",
    tagline: "Classic black & white speckled finish.",
    desc: "A timeless dense-grain tropical granite with striking contrast. Extremely durable, perfect for high-traffic floors and staircases.",
    image: g2, price: "From Rs. 320 / sq.ft",
    specs: { ...defaultSpecs, colourRange: "Black, White" } },
  { slug: "lavender-grey-granite", name: "Lavender Grey Granite", origin: "Pakistan", category: "local-granite", categoryLabel: "Local Granite",
    tagline: "Cool lavender-grey with subtle sparkle.",
    desc: "Refined lavender-grey granite with faint mineral shimmer, well suited to modern interiors and vanity tops.",
    image: g3, price: "From Rs. 380 / sq.ft",
    specs: { ...defaultSpecs, colourRange: "Lavender, Grey" } },
  { slug: "imperial-grey-granite", name: "Imperial Grey Granite", origin: "Pakistan", category: "local-granite", categoryLabel: "Local Granite",
    tagline: "High-contrast imperial grey grain.",
    desc: "A bold Imperial Grey granite with coarse crystalline flecks — a striking choice for statement kitchen islands and feature floors.",
    image: g4, price: "From Rs. 400 / sq.ft",
    specs: { ...defaultSpecs, colourRange: "Grey, White, Black" } },
  { slug: "tropical-brown-granite", name: "Cherry Brown Granite", origin: "chaina", category: "imported-granite", categoryLabel: "imported Granite",
    tagline: "Rich earthy brown with dark accents.",
    desc: "Warm and inviting, Cherry Brown pairs beautifully with wooden cabinetry and traditional interiors.",
    image: g5, price: "From Rs. 360 / sq.ft",
    specs: { ...defaultSpecs, colourRange: "Brown, Black" } },
  { slug: "black-granite", name: "Black Granite", origin: "Pakistan", category: "local-granite", categoryLabel: "Local Granite",
    tagline: "Deep jet black — dramatic and premium.",
    desc: "A near-solid black granite that delivers unmatched drama. Excellent for luxury countertops and feature walls.",
    image: g6, price: "From Rs. 420 / sq.ft",
    specs: { ...defaultSpecs, colourRange: "Jet Black" } },

  // LOCAL MARBLE
  { slug: "trevera-marble", name: "Trevera Marble", origin: "Pakistan", category: "local-marble", categoryLabel: "Local Marble",
    tagline: "Warm beige marble with fossil-like clusters.",
    desc: "A distinctive Pakistani marble with soft beige tones and fossil-style mineral clusters. Ideal for flooring and cladding with a naturally timeless character.",
    image: lmTrevera, price: "From Rs. 240 / sq.ft",
    specs: { ...defaultSpecs, colourRange: "Beige, Cream" } },
  { slug: "travertine-q", name: "Travertine Q", origin: "Pakistan", category: "local-marble", categoryLabel: "Local Marble",
    tagline: "Vertical-grain travertine with warm ivory tones.",
    desc: "Locally sourced travertine with dramatic vertical grain and warm ivory-caramel tones. Perfect for feature walls, facades and elegant flooring.",
    image: lmTravertineQ, price: "From Rs. 260 / sq.ft",
    specs: { ...defaultSpecs, finish: "Honed, Filled", bestFor: "Facades, Flooring, Walls", colourRange: "Ivory, Beige, Walnut" } },
  { slug: "silky-black-marble", name: "Silky Black Marble", origin: "Pakistan", category: "local-marble", categoryLabel: "Local Marble",
    tagline: "Deep silky black with fine white veining.",
    desc: "A refined black marble with a smooth, silky surface and delicate white veining — a bold and elegant choice for feature floors and vanities.",
    image: lmSilkyBlack, price: "From Rs. 320 / sq.ft",
    specs: { ...defaultSpecs, colourRange: "Black, White" } },
  { slug: "pumpoo-marble", name: "Pumpoo Marble", origin: "Pakistan", category: "local-marble", categoryLabel: "Local Marble",
    tagline: "Bright white marble with subtle black flecks.",
    desc: "A clean, bright white local marble with soft horizontal black flecks. Excellent for luminous flooring and modern interiors.",
    image: lmPumpoo, price: "From Rs. 220 / sq.ft",
    specs: { ...defaultSpecs, colourRange: "White, Black" } },
  { slug: "oceanic-marble", name: "Oceanic Marble", origin: "Pakistan", category: "local-marble", categoryLabel: "Local Marble",
    tagline: "Earthy olive-brown with organic cluster patterns.",
    desc: "A warm olive-brown marble with natural cluster patterns — an unusual and richly textured pick for statement floors and wall cladding.",
    image: lmOceanic, price: "From Rs. 270 / sq.ft",
    specs: { ...defaultSpecs, colourRange: "Olive, Brown, Cream" } },
  { slug: "black-and-gold-marble", name: "Black & Gold Marble", origin: "Pakistan", category: "local-marble", categoryLabel: "Local Marble",
    tagline: "Dramatic black with golden-copper veins.",
    desc: "A show-stopping marble with deep black base and dramatic golden-copper and white veining. Perfect for feature walls, islands and luxury vanities.",
    image: lmBlackGold, price: "From Rs. 420 / sq.ft",
    specs: { ...defaultSpecs, colourRange: "Black, Gold, Copper, White" } },
  { slug: "badal-marble", name: "Badal Marble", origin: "Pakistan", category: "local-marble", categoryLabel: "Local Marble",
    tagline: "Cloud-like grey marble with soft white drifts.",
    desc: "Named for its cloud-like patterns, Badal Marble features soft grey base with drifting white veins — a serene, contemporary choice for floors and walls.",
    image: lmBadal, price: "From Rs. 290 / sq.ft",
    specs: { ...defaultSpecs, colourRange: "Grey, White" } },

  // IMPORTED MARBLE
  { slug: "travertine", name: "Travertine", origin: "Turkey", category: "imported-marble", categoryLabel: "Imported Marble",
    tagline: "Warm-toned travertine for timeless flooring & facades.",
    desc: "Warm-toned travertine imported from Turkey — a timeless choice for flooring, cladding and outdoor spaces. Its porous character gives it an unmistakable natural texture.",
    image: mTravertine, price: "From Rs. 300 / sq.ft",
    specs: { thickness: "16mm – 30mm", finish: "Honed, Filled, Tumbled", bestFor: "Flooring, Facades, Outdoor", colourRange: "Beige, Ivory, Walnut", slipRating: "Good" } },
  { slug: "ziarat-white", name: "Ziarat White", origin: "Imported Grade", category: "imported-marble", categoryLabel: "Imported Marble",
    tagline: "Pure white marble with soft cloud veining.",
    desc: "A clean, luminous white marble prized for its consistent tone. Ideal for luxurious flooring, bathrooms and cladding.",
    image: mZiarat, price: "From Rs. 280 / sq.ft",
    specs: { ...defaultSpecs, finish: "Polished, Honed", bestFor: "Flooring, Bathrooms, Walls", colourRange: "Pure White" } },
  { slug: "panda-white", name: "Panda White", origin: "China", category: "imported-marble", categoryLabel: "Imported Marble",
    tagline: "Dramatic white marble with bold black veins.",
    desc: "One of the most striking marbles available — bold black veins ripple across a bright white base, perfect for feature walls and statement countertops.",
    image: mPanda, price: "From Rs. 850 / sq.ft",
    specs: { ...defaultSpecs, bestFor: "Feature Walls, Vanities, Islands", colourRange: "White, Black" } },
  { slug: "botticino-beige", name: "Botticino Beige", origin: "Italy / Turkey", category: "imported-marble", categoryLabel: "Imported Marble",
    tagline: "Creamy beige marble with soft mineral clusters.",
    desc: "A warm neutral marble perfect for classic and transitional interiors. Balanced clusters of caramel and cream give it depth without overwhelming a room.",
    image: mBotticino, price: "From Rs. 550 / sq.ft",
    specs: { ...defaultSpecs, colourRange: "Beige, Cream, Caramel" } },
  { slug: "indian-green", name: "Indian Green", origin: "India", category: "imported-marble", categoryLabel: "Imported Marble",
    tagline: "Deep forest-green marble with white veining.",
    desc: "A regal deep-green marble with delicate white veins. A striking pick for accent walls, temples and reception counters.",
    image: mGreen, price: "From Rs. 480 / sq.ft",
    specs: { ...defaultSpecs, colourRange: "Deep Green, White" } },
  { slug: "dark-emperador", name: "Dark Emperador", origin: "Spain / Turkey", category: "imported-marble", categoryLabel: "Imported Marble",
    tagline: "Rich chocolate marble with fine white veining.",
    desc: "A luxurious dark brown marble with lace-like white veins. Pairs beautifully with brass fittings and warm woods.",
    image: mEmperador, price: "From Rs. 720 / sq.ft",
    specs: { ...defaultSpecs, colourRange: "Chocolate, Cream" } },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getByCategory(category: Category) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getRelated(slug: string, limit = 4) {
  const current = getProduct(slug);
  if (!current) return PRODUCTS.slice(0, limit);
  const same = PRODUCTS.filter((p) => p.category === current.category && p.slug !== slug);
  const others = PRODUCTS.filter((p) => p.category !== current.category);
  return [...same, ...others].slice(0, limit);
}
