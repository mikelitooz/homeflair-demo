export type Category = {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  badge?: string;
  shortDescription: string;
  description: string;
  dimensions: string;
  materials: string;
  delivery: string;
  images: string[];
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  offer?: boolean;
  room: "Living Room" | "Bedroom" | "Dining Room" | "Home Office";
};

const media = {
  sofaA: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1500&q=85",
  sofaB: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
  chairA: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1500&q=85",
  chairB: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1500&q=85",
  wardrobeA: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?auto=format&fit=crop&w=1500&q=85",
  bedA: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1500&q=85",
  showroomA: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
};

export const categories: Category[] = [
  { slug: "lift-and-tilt", name: "Lift & Tilt Chairs", description: "Bespoke comfort and mobility support", heroImage: media.chairA },
  { slug: "recliners", name: "Recliner Suites", description: "Ultimate relaxation and support", heroImage: media.sofaA },
  { slug: "traditional-suites", name: "Traditional Suites", description: "Classic family-run quality", heroImage: media.sofaB },
  { slug: "bedroom-cabinets", name: "Bedroom Cabinets", description: "Durable storage solutions", heroImage: media.wardrobeA },
  { slug: "beds", name: "Beds", description: "Comfortable frames and mattresses", heroImage: media.bedA }
];

export const products: Product[] = [
  {
    slug: "clay-cross-lift-tilt-chair",
    name: "Clay Cross Premium Lift & Tilt Chair",
    category: "lift-and-tilt",
    price: 899,
    compareAtPrice: 1099,
    badge: "Bespoke Comfort",
    shortDescription: "Dual-motor lift and tilt chair for ultimate independence.",
    description: "Backed by our family-run quality guarantee, this dual-motor chair offers bespoke comfort, allowing you to recline and rise with ease.",
    dimensions: "W 82cm x D 90cm x H 105cm",
    materials: "Premium soft-touch fabric, heavy-duty motor",
    delivery: "Free Local Delivery & Setup",
    images: [media.chairA, media.showroomA],
    featured: true,
    bestSeller: true,
    offer: true,
    room: "Living Room"
  },
  {
    slug: "derwent-traditional-3-piece-suite",
    name: "Derwent Traditional 3-Piece Suite",
    category: "traditional-suites",
    price: 1499,
    shortDescription: "Classic high-back suite with exceptional lumbar support.",
    description: "Experience true family-run quality with the Derwent Suite. Built with a solid frame and traditional styling to stand the test of time.",
    dimensions: "Sofa: W 195cm x D 95cm x H 102cm",
    materials: "Chenille fabric, solid hardwood frame",
    delivery: "Free Local Delivery",
    images: [media.sofaB, media.sofaA],
    featured: true,
    room: "Living Room"
  },
  {
    slug: "ashover-power-recliner-sofa",
    name: "Ashover Power Recliner Sofa",
    category: "recliners",
    price: 1199,
    compareAtPrice: 1399,
    shortDescription: "Smooth power reclining action at the touch of a button.",
    description: "Bespoke comfort meets modern convenience. The Ashover provides tailored support for your legs and back.",
    dimensions: "W 205cm x D 98cm x H 100cm",
    materials: "Performance fabric, electric recliner mechanism",
    delivery: "Free Local Delivery & Setup",
    images: [media.sofaA, media.showroomA],
    bestSeller: true,
    offer: true,
    room: "Living Room"
  },
  {
    slug: "chatsworth-lift-tilt-chair",
    name: "Chatsworth Compact Lift & Tilt",
    category: "lift-and-tilt",
    price: 749,
    shortDescription: "Single-motor riser recliner perfect for smaller spaces.",
    description: "A compact solution delivering our signature family-run quality and support without taking up too much room.",
    dimensions: "W 76cm x D 88cm x H 102cm",
    materials: "Durable woven fabric, reliable single motor",
    delivery: "Free Local Delivery & Setup",
    images: [media.chairB, media.chairA],
    newArrival: true,
    room: "Living Room"
  },
  {
    slug: "matlock-oak-triple-wardrobe",
    name: "Matlock Oak Triple Wardrobe",
    category: "bedroom-cabinets",
    price: 699,
    shortDescription: "Spacious 3-door wardrobe with classic styling.",
    description: "Beautifully crafted bedroom cabinetry that brings warmth and traditional elegance to your home.",
    dimensions: "W 145cm x D 58cm x H 195cm",
    materials: "Oak veneer, solid wood trims",
    delivery: "Delivery in 7-14 days",
    images: [media.wardrobeA, media.showroomA],
    room: "Bedroom"
  },
  {
    slug: "bakewell-bedside-cabinet",
    name: "Bakewell Bedside Cabinet",
    category: "bedroom-cabinets",
    price: 149,
    shortDescription: "3-drawer bedside chest with dovetail joints.",
    description: "Built to last. This solid bedside cabinet exemplifies the family-run quality we've championed since 1983.",
    dimensions: "W 45cm x D 40cm x H 65cm",
    materials: "Solid pine, oak top",
    delivery: "Delivery in 7-14 days",
    images: [media.wardrobeA, media.bedA],
    room: "Bedroom"
  },
  {
    slug: "haddon-orthopaedic-bed",
    name: "Haddon Orthopaedic Divan Bed",
    category: "beds",
    price: 599,
    shortDescription: "Firm support divan set with storage options.",
    description: "Bespoke comfort for your back. Includes a firm, hand-tufted mattress on a sturdy divan base.",
    dimensions: "Double: W 135cm x L 190cm",
    materials: "Orthopaedic spring unit, damask cover",
    delivery: "Free Local Delivery",
    images: [media.bedA, media.showroomA],
    bestSeller: true,
    room: "Bedroom"
  }
];

export const promoBanners = [
  "Free No-Obligation Home Visit Service · We bring the showroom to you",
  "Specialists in Lift and Tilt Chairs · Bespoke comfort for your home",
  "Independent family-run business established in 1983",
  "Quality suites, recliners, and bedroom furniture in Chesterfield",
];

export const roomShop = [
  { name: "Lift & Tilt", image: media.chairA, href: "/shop?category=lift-and-tilt" },
  { name: "Suites", image: media.sofaB, href: "/shop?category=traditional-suites" },
  { name: "Cabinets", image: media.wardrobeA, href: "/shop?category=bedroom-cabinets" }
];

export function currency(value: number): string {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(value);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.category === categorySlug);
}

export function getRelatedProducts(product: Product): Product[] {
  return products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 4);
}
