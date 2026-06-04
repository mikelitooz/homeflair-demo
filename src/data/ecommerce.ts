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
  room: "Living Room" | "Bedroom" | "Dining Room" | "Home Office" | "Bathroom";
  variantId?: string;
};

const media = {
  hero: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1500&q=85",
  showroom: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1500&q=85",
  bedroom: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1500&q=85",
  shower: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1500&q=85",
  vanity: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1500&q=85",
  carpet: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1500&q=85",
  tap: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1500&q=85",
  towelRail: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=1500&q=85",
  dining: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1500&q=85",
  decor: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1500&q=85",
  bath: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1500&q=85",
  tiles: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1500&q=85",
};

export const categories: Category[] = [
  { slug: "beds-bedroom", name: "Beds & Bedroom Furniture", description: "Quality sleigh beds, mattresses, wardrobes and chests of drawers", heroImage: media.bedroom },
  { slug: "sofas-living", name: "Sofas & Seating", description: "Comfortable fabric sofas, suites and supportive high-seat armchairs", heroImage: media.shower },
  { slug: "dining-tables", name: "Dining & Occasional", description: "Solid pine and oak dining tables, nests of tables and rustic coffee tables", heroImage: media.dining },
  { slug: "carpets-flooring", name: "Carpets & Flooring", description: "Premium fitted carpets and flooring options for the complete home", heroImage: media.carpet },
];

export const products: Product[] = [
  {
    slug: "super-sleigh-bed-frame",
    name: "Super Sleigh Bed Frame",
    category: "beds-bedroom",
    price: 599,
    compareAtPrice: 799,
    badge: "Custom Made",
    shortDescription: "Luxury plush chesterfield sleigh bed frame available in multiple fabrics.",
    description: "Featuring a deep buttoned Chesterfield headboard and footboard, the Super Sleigh Bed Frame is handmade to order in the UK. Heavy duty solid wooden slats provide fantastic mattress support. Customise in velvet, wool or linen to suit your bedroom style.",
    dimensions: "W 160cm x L 225cm x Headboard H 135cm (Double)",
    materials: "Solid Hardwood Frame, Plush Upholstery, Pine Slats",
    delivery: "Speedy Delivery & Assembly",
    images: [media.bedroom, media.bath],
    featured: true,
    bestSeller: true,
    offer: true,
    room: "Bedroom"
  },
  {
    slug: "high-seat-armchair",
    name: "Traditional High-Seat Armchair",
    category: "sofas-living",
    price: 349,
    compareAtPrice: 449,
    badge: "Best Seller",
    shortDescription: "Traditional high-back supportive chair in premium floral fabric.",
    description: "Designed specifically for ease of sitting and rising, this classic armchair features a firm pocket-sprung seat base and an extra-supportive high backrest. Ideal for reading, relaxing, or enjoying the view. Hardwood frame and legs ensure long-term durability.",
    dimensions: "W 82cm x D 88cm x H 108cm (Seat H 49cm)",
    materials: "Hardwood, Pocket Sprung, Floral Woven Fabric",
    delivery: "Speedy Home Delivery",
    images: [media.shower, media.hero],
    featured: true,
    bestSeller: true,
    room: "Living Room"
  },
  {
    slug: "pine-bedroom-wardrobe",
    name: "Solid Pine Bedroom Wardrobe",
    category: "beds-bedroom",
    price: 450,
    compareAtPrice: 550,
    badge: "Solid Wood",
    shortDescription: "Classic double wardrobe crafted from premium solid pine.",
    description: "A beautiful, rustic addition to any bedroom. This solid pine double wardrobe features a full-width hanging rail and a lower storage drawer. Finished with a natural light wax that highlights the beautiful timber grain. Handcrafted to last.",
    dimensions: "W 110cm x D 58cm x H 192cm",
    materials: "100% Solid Scandinavian Pine, Metal Drawer Runners",
    delivery: "Speedy Delivery - Delivered fully assembled or flat-packed",
    images: [media.vanity, media.bath],
    newArrival: true,
    room: "Bedroom"
  },
  {
    slug: "classic-pine-dining-set",
    name: "Classic Pine Dining Set",
    category: "dining-tables",
    price: 599,
    compareAtPrice: 799,
    badge: "Value Set",
    shortDescription: "Solid pine rectangular dining table with four matching chairs.",
    description: "The heart of your home. This rectangular solid pine table features sturdy farmhouse legs and a durable lacquered surface. Accompanied by four matching pine spindle-back chairs. Perfectly suits classic and cottage-style interiors.",
    dimensions: "Table: L 150cm x W 90cm x H 75cm",
    materials: "Solid Farmhouse Pine, Lacquered Finish",
    delivery: "Speedy Home Delivery",
    images: [media.dining, media.vanity],
    featured: true,
    offer: true,
    room: "Dining Room"
  },
  {
    slug: "oak-nest-of-tables",
    name: "Solid Oak Nest of Tables",
    category: "dining-tables",
    price: 199,
    compareAtPrice: 249,
    badge: "Nesting",
    shortDescription: "Set of three solid oak nesting tables for versatile living space.",
    description: "This practical nest of three tables fits neatly together when not in use. Handcrafted from premium solid oak with rounded corners and a protective matte lacquer finish. Ideal for placing drinks, lamps, or decorative items next to your sofa.",
    dimensions: "Large: W 52cm x D 36cm x H 48cm",
    materials: "Premium Solid Oak",
    delivery: "Standard Home Delivery",
    images: [media.tap, media.towelRail],
    bestSeller: true,
    room: "Living Room"
  },
  {
    slug: "classic-3-seater-sofa",
    name: "Classic 3-Seater Fabric Sofa",
    category: "sofas-living",
    price: 895,
    compareAtPrice: 1095,
    shortDescription: "Spacious fabric sofa suite with deep cushioning and plush armrests.",
    description: "Relax in luxury. Our classic 3-seater sofa is built with a sturdy timber frame, high-density foam cushion cores, and a premium woven fiber outer wrap. Perfect as a central suite piece for your living room.",
    dimensions: "W 210cm x D 95cm x H 90cm",
    materials: "Timber Frame, High-density Foam, Premium Weave Fabric",
    delivery: "Speedy Home Delivery - room of choice",
    images: [media.hero, media.shower],
    featured: true,
    room: "Living Room"
  },
  {
    slug: "royal-velvet-mattress-base",
    name: "Royal Velvet Mattress & Base Set",
    category: "beds-bedroom",
    price: 699,
    compareAtPrice: 899,
    badge: "Special Offer",
    shortDescription: "Orthopedic pocket sprung mattress with premium upholstered base.",
    description: "Get the sleep you deserve. The Royal Velvet set features a 1500 pocket sprung mattress with hand-tufted wool damask cover, providing excellent orthopaedic support. Paired with a matching velvet divan base with two integrated storage drawers.",
    dimensions: "W 150cm x L 200cm x H 65cm (King)",
    materials: "Pocket Springs, Wool Damask, Velvet Divan Base",
    delivery: "Speedy Delivery & Set Up",
    images: [media.bath, media.bedroom],
    offer: true,
    room: "Bedroom"
  },
  {
    slug: "plush-velvet-accent-chair",
    name: "Plush Velvet Accent Chair",
    category: "sofas-living",
    price: 249,
    compareAtPrice: 329,
    badge: "New Arrival",
    shortDescription: "Elegant scalloped accent chair in emerald velvet with gold legs.",
    description: "Add a touch of sophistication to your corner. This beautiful accent chair features a shell-shaped scalloped backrest, thick foam padding, and steel legs with a premium gold electroplated finish. Upholstered in buttery-soft velvet.",
    dimensions: "W 75cm x D 80cm x H 85cm",
    materials: "Velvet Upholstery, Electroplated Gold Steel Legs, Foam",
    delivery: "Standard Home Delivery",
    images: [media.decor, media.shower],
    newArrival: true,
    room: "Living Room"
  },
  {
    slug: "premium-saxony-carpet",
    name: "Premium Saxony Fitted Carpet",
    category: "carpets-flooring",
    price: 29,
    compareAtPrice: 39,
    badge: "Fitted Free",
    shortDescription: "Thick, luxurious deep-pile Saxony carpet including professional fitting.",
    description: "Bring comfort underfoot. Our premium Saxony carpet is stain-resistant, bleach-cleanable, and feels incredibly soft. Price includes professional underlay and fitting by our expert local team in Sheffield. Available in a range of warm greys and cream colors.",
    dimensions: "Sold per square metre (m²)",
    materials: "100% Polypropylene Stain-Resistant Fibres",
    delivery: "Professional Home Installation",
    images: [media.carpet, media.tiles],
    featured: true,
    bestSeller: true,
    offer: true,
    room: "Living Room"
  },
  {
    slug: "rustic-pine-coffee-table",
    name: "Rustic Pine Coffee Table",
    category: "dining-tables",
    price: 189,
    compareAtPrice: 229,
    shortDescription: "Chunky solid pine coffee table with spacious lower shelf.",
    description: "The perfect companion for your sofa. Made from thick, slow-grown pine planks, this coffee table features a handy lower shelf for storing magazines and remote controls. Finished in antique wax to bring out the knots and rustic grain.",
    dimensions: "W 100cm x D 60cm x H 46cm",
    materials: "Solid Pine, Antique Wax Finish",
    delivery: "Speedy Home Delivery",
    images: [media.towelRail, media.tap],
    newArrival: true,
    room: "Living Room"
  }
];

export const promoBanners = [
  "Welcome to Mr Slators Furnishings – Complete Home Furnishings since 1970",
  "Visit our Sheffield showroom: 110-124 Infirmary Road, S6 3DG",
  "Friendly Home Delivery – our drivers deliver directly to your room of choice",
  "Special Carpet Offers: High quality fitted carpets including professional underlay",
];

export const roomShop = [
  { name: "Living Room", image: media.hero, href: "/shop?category=sofas-living" },
  { name: "Bedroom", image: media.bedroom, href: "/shop?category=beds-bedroom" },
  { name: "Dining & Occasional", image: media.dining, href: "/shop?category=dining-tables" }
];

export function currency(value: number): string {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(value);
}

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getCategories(): Promise<Category[]> {
  return categories;
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  return categories.find((category) => category.slug === slug);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return products.find((product) => product.slug === slug);
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  return products.filter((product) => product.category === categorySlug);
}

export async function getRelatedProducts(product: Product): Promise<Product[]> {
  return products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 4);
}
