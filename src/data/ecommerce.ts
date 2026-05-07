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
  sofaA: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1500&q=85",
  sofaB: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1500&q=85",
  bedA: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1500&q=85",
  diningA: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=85",
  decorA: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1500&q=85",
};

export const categories: Category[] = [
  { slug: "sofas", name: "Sofas & Armchairs", description: "Plush seating for your living room", heroImage: media.sofaA },
  { slug: "beds", name: "Beds & Mattresses", description: "Restful luxury for the bedroom", heroImage: media.bedA },
  { slug: "dining", name: "Dining Sets", description: "Elegant dining for entertaining", heroImage: media.diningA },
  { slug: "decor", name: "Home Decor", description: "Beautiful accents to complete your room", heroImage: media.decorA },
];

export const products: Product[] = [
  {
    slug: "blush-velvet-sofa",
    name: "Emmy's Blush Velvet Sofa",
    category: "sofas",
    price: 699,
    compareAtPrice: 899,
    badge: "Boutique Exclusive",
    shortDescription: "Elegant 3-seater sofa in blush pink velvet.",
    description: "Our signature piece. Soft, luxurious blush velvet upholstery on a sturdy hardwood frame with brass-tipped wooden legs.",
    dimensions: "W 210cm x D 90cm x H 85cm",
    materials: "Premium Velvet, Hardwood Frame, Brass",
    delivery: "White Glove Delivery",
    images: [media.sofaA, media.sofaB],
    featured: true,
    bestSeller: true,
    offer: true,
    room: "Living Room"
  },
  {
    slug: "sage-green-armchair",
    name: "Sage Green Reading Armchair",
    category: "sofas",
    price: 299,
    shortDescription: "Comfortable accent chair in soft sage fabric.",
    description: "The perfect reading chair. Features a deep seat, supportive back, and gorgeous sage green woven fabric.",
    dimensions: "W 75cm x D 85cm x H 95cm",
    materials: "Woven Polyester, Birch Wood",
    delivery: "White Glove Delivery",
    images: [media.sofaB, media.sofaA],
    featured: true,
    room: "Living Room"
  },
  {
    slug: "upholstered-ottoman-bed",
    name: "Luxury Upholstered Ottoman Bed",
    category: "beds",
    price: 549,
    compareAtPrice: 699,
    shortDescription: "King size bed with hidden under-bed storage.",
    description: "Combine style and practicality. A beautiful button-tufted headboard with a gas-lift base revealing vast storage space.",
    dimensions: "King Size (W 155cm x L 210cm)",
    materials: "Linen Blend, Steel Frame, Wood Slats",
    delivery: "White Glove Delivery & Assembly",
    images: [media.bedA, media.sofaB],
    bestSeller: true,
    offer: true,
    room: "Bedroom"
  },
  {
    slug: "scandi-oak-dining-table",
    name: "Scandi Oak Dining Table",
    category: "dining",
    price: 450,
    shortDescription: "Minimalist solid oak dining table seats 6.",
    description: "Clean lines and natural wood grain make this table a stunning centerpiece for modern dining rooms.",
    dimensions: "L 180cm x W 90cm x H 75cm",
    materials: "Solid Oak, Oak Veneer",
    delivery: "White Glove Delivery & Assembly",
    images: [media.diningA, media.decorA],
    newArrival: true,
    room: "Dining Room"
  },
  {
    slug: "velvet-dining-chairs",
    name: "Set of 2 Velvet Dining Chairs",
    category: "dining",
    price: 180,
    shortDescription: "Curved back dining chairs in midnight blue.",
    description: "Dine in comfort and style. Soft velvet upholstery over a padded bucket seat on sleek black metal legs.",
    dimensions: "W 50cm x D 55cm x H 82cm",
    materials: "Velvet, Powder-Coated Steel",
    delivery: "Standard Delivery",
    images: [media.diningA, media.sofaA],
    featured: true,
    bestSeller: true,
    room: "Dining Room"
  },
  {
    slug: "boucle-accent-stool",
    name: "Bouclé Accent Stool",
    category: "decor",
    price: 85,
    shortDescription: "Trendy textured bouclé fabric vanity stool.",
    description: "A chic addition to any bedroom or living space. Features highly textured, soft bouclé fabric in warm cream.",
    dimensions: "Diameter 40cm x H 45cm",
    materials: "Bouclé Fabric, Foam, Wood",
    delivery: "Standard Delivery",
    images: [media.decorA, media.bedA],
    room: "Bedroom"
  },
  {
    slug: "brass-floor-lamp",
    name: "Arching Brass Floor Lamp",
    category: "decor",
    price: 120,
    compareAtPrice: 150,
    shortDescription: "Elegant brushed brass reading lamp.",
    description: "Provide a warm glow to your living space. Heavy marble base ensures stability, with a sweeping brass arc.",
    dimensions: "H 160cm x Reach 80cm",
    materials: "Brushed Brass, Marble",
    delivery: "Standard Delivery",
    images: [media.decorA, media.sofaA],
    offer: true,
    newArrival: true,
    room: "Living Room"
  },
  {
    slug: "rattan-wardrobe",
    name: "Boho Rattan Double Wardrobe",
    category: "beds",
    price: 650,
    shortDescription: "Solid wood wardrobe with natural rattan panels.",
    description: "Bring a relaxed, bohemian feel to your bedroom. Features a hanging rail, bottom drawer, and beautifully woven rattan doors.",
    dimensions: "W 100cm x D 55cm x H 190cm",
    materials: "Mango Wood, Natural Rattan",
    delivery: "White Glove Delivery & Assembly",
    images: [media.bedA, media.decorA],
    room: "Bedroom"
  }
];

export const promoBanners = [
  "Welcome to Emmy's Shop – Sheffield's boutique furniture store",
  "Enjoy White Glove Delivery on all large furniture pieces",
  "Visit our Stubbin Lane showroom to see our new collections",
  "New Arrivals: Blush velvet and sage green accents now in stock",
];

export const roomShop = [
  { name: "Living Room", image: media.sofaA, href: "/shop?category=sofas" },
  { name: "Bedroom", image: media.bedA, href: "/shop?category=beds" },
  { name: "Dining Room", image: media.diningA, href: "/shop?category=dining" }
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
