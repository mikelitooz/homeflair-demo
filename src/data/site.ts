import {
  Sofa,
  Bed,
  Armchair,
  LampDesk,
  Clock,
  MapPin,
  PackageCheck,
  Sparkles,
  Truck,
  UsersRound
} from "lucide-react";

export const business = {
  name: "Emmy's Shop",
  tagline: "Beautiful boutique furniture for every home.",
  address: "3 Stubbin Ln, Sheffield S5 6QG, UK",
  phone: "+44 7735 444965",
  email: "hello@emmysshop.co.uk",
  rating: "4.9",
  reviews: "Trusted local furniture boutique",
  hours: [
    ["Monday", "9:30 AM - 5:00 PM"],
    ["Tuesday", "9:30 AM - 5:00 PM"],
    ["Wednesday", "9:30 AM - 5:00 PM"],
    ["Thursday", "9:30 AM - 5:00 PM"],
    ["Friday", "9:30 AM - 5:00 PM"],
    ["Saturday", "10:00 AM - 4:00 PM"],
    ["Sunday", "Closed"]
  ],
  sourceNote:
    "Boutique local furniture shop located in Sheffield."
};

export const sourcePages = [];

export const media = {
  hero: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2200&q=85",
  showroom: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1800&q=85",
  bath: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
  shower: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1800&q=85",
  vanity: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=85",
  tiles: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1800&q=85",
  tap: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
  towelRail: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1800&q=85",
  dining: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=85",
  decor: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1800&q=85",
  carpet: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1800&q=85",
  bedroom: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
  sofaWall: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1800&q=85"
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Sofas", href: "/collection" },
  { label: "Beds", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export const collections = [
  {
    title: "Sofas & Armchairs",
    description: "Plush velvet and durable weave fabrics.",
    price: "From £399",
    image: media.showroom,
    icon: Sofa
  },
  {
    title: "Beds & Mattresses",
    description: "Handcrafted frames and orthopaedic mattresses.",
    price: "From £249",
    image: media.bedroom,
    icon: Bed
  },
  {
    title: "Dining Sets",
    description: "Solid wood tables with upholstered chairs.",
    price: "From £499",
    image: media.dining,
    icon: Armchair
  },
  {
    title: "Home Accents",
    description: "Mirrors, lighting, and beautiful decor.",
    price: "From £49",
    image: media.decor,
    icon: LampDesk
  }
];

export const services = [
  {
    title: "Personal Styling",
    description: "We help you select pieces that perfectly match your home's aesthetic.",
    icon: Sparkles
  },
  {
    title: "White Glove Delivery",
    description: "Our delivery team brings your furniture to your room of choice.",
    icon: Truck
  },
  {
    title: "Assembly Included",
    description: "Most of our items are assembled free of charge upon delivery.",
    icon: PackageCheck
  }
];

export const reasons = [
  { title: "Boutique Selection", description: "Carefully curated pieces you won't find in big chain stores." },
  { title: "Local Sheffield Business", description: "Serving our local community with pride and care." },
  { title: "High Quality", description: "We source our furniture from premium makers." },
  { title: "Friendly Service", description: "No pressure sales, just helpful interior advice." }
];

export const testimonials = [
  {
    quote: "Absolutely love my new velvet sofa from Emmy's! Delivery was smooth and the quality is amazing.",
    name: "Sarah Jenkins",
    detail: "Sofa Purchase"
  },
  {
    quote: "Found the perfect dining set here. Much better quality than the online giants and lovely customer service.",
    name: "David Smith",
    detail: "Dining Set"
  }
];

export const gallery = [
  { src: media.hero, title: "Living Room Inspiration", span: "md:col-span-2 md:row-span-2" },
  { src: media.showroom, title: "Our Showroom", span: "" },
  { src: media.bedroom, title: "Bedroom Sets", span: "" },
  { src: media.dining, title: "Dining Spaces", span: "md:col-span-2" },
  { src: media.decor, title: "Home Accessories", span: "" },
  { src: media.carpet, title: "Occasional Chairs", span: "" }
];

export const stats = [
  { value: "Sheffield", label: "Local Boutique" },
  { value: "Curated", label: "Furniture Selection" },
  { value: "White Glove", label: "Delivery Service" },
  { value: "5-Star", label: "Customer Rating" }
];

export const contactCards = [
  { title: "Visit us", value: business.address, icon: MapPin },
  { title: "Call", value: business.phone, icon: Clock },
  { title: "Email", value: business.email, icon: UsersRound }
];
