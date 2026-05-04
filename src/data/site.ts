import {
  Armchair,
  BedDouble,
  Clock,
  Columns3,
  LampFloor,
  MapPin,
  PackageCheck,
  Ruler,
  Sofa,
  Sparkles,
  Truck,
  UsersRound
} from "lucide-react";

export const business = {
  name: "Derbyshire Suite Centre",
  tagline: "Quality family-run comfort since 1983.",
  address: "Derby Road, Clay Cross, Chesterfield, S45 9AG",
  phone: "01246 862271",
  email: "info@derbyshiresuitecentre.co.uk",
  rating: "5.0",
  reviews: "Trusted family business",
  hours: [
    ["Monday", "9:30 AM - 5:00 PM"],
    ["Tuesday", "9:30 AM - 5:00 PM"],
    ["Wednesday", "9:30 AM - 5:00 PM"],
    ["Thursday", "9:30 AM - 5:00 PM"],
    ["Friday", "9:30 AM - 5:00 PM"],
    ["Saturday", "9:30 AM - 5:00 PM"],
    ["Sunday", "Closed"]
  ],
  sourceNote:
    "Independent family-run furniture specialists established in 1983."
};

export const sourcePages = [];

export const media = {
  hero: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=2200&q=85",
  showroom: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
  sofaWall: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1800&q=85",
  dining: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=85",
  bedroom: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1800&q=85",
  decor: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=85",
  chair: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1800&q=85",
  wardrobe: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?auto=format&fit=crop&w=1800&q=85",
  coffee: "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1800&q=85",
  carpet: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1800&q=85"
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Suites", href: "/collection" },
  { label: "Lift & Tilt Chairs", href: "/services" },
  { label: "Home Visits", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export const collections = [
  {
    title: "Lift & Tilt Chairs",
    description: "Bespoke comfort and mobility support, perfectly tailored to you.",
    price: "From £599",
    image: media.chair,
    icon: Armchair
  },
  {
    title: "Traditional Suites",
    description: "Classic 3-piece suites built with family-run quality.",
    price: "From £999",
    image: media.sofaWall,
    icon: Sofa
  },
  {
    title: "Recliner Sofas",
    description: "Relaxed comfort with supportive seating and premium fabrics.",
    price: "From £849",
    image: media.showroom,
    icon: Sofa
  },
  {
    title: "Bedroom Cabinets",
    description: "Durable, classic storage solutions for restful rooms.",
    price: "From £249",
    image: media.wardrobe,
    icon: Columns3
  },
  {
    title: "Beds & Mattresses",
    description: "Supportive mattresses and sturdy frames for a great night's sleep.",
    price: "From £399",
    image: media.bedroom,
    icon: BedDouble
  }
];

export const services = [
  {
    title: "Free Home Visits",
    description: "Can't make it to the showroom? We offer a free, no-obligation home visit service.",
    icon: Truck
  },
  {
    title: "Lift & Tilt Experts",
    description: "Specialist advice to ensure you get the perfect supportive chair for your needs.",
    icon: Armchair
  },
  {
    title: "Family Run Since 1983",
    description: "Decades of experience providing honest advice and quality furniture.",
    icon: UsersRound
  }
];

export const reasons = [
  { title: "Established 1983", description: "An independent, family-run business you can trust." },
  { title: "Home Visit Service", description: "Free, no-obligation home visits if you cannot reach our showroom." },
  { title: "Specialist Knowledge", description: "Experts in lift & tilt chairs and mobility seating." },
  { title: "Quality Guaranteed", description: "Premium suites and bedroom cabinets built to last." }
];

export const testimonials = [
  {
    quote: "Fantastic family-run business. They brought a chair to my home to try. Highly recommended.",
    name: "Verified Customer",
    detail: "Lift & Tilt Customer"
  },
  {
    quote: "Beautiful traditional suite, excellent quality, and the delivery team were so polite and helpful.",
    name: "Verified Customer",
    detail: "Suite Customer"
  }
];

export const gallery = [
  { src: media.hero, title: "Premium suites", span: "md:col-span-2 md:row-span-2" },
  { src: media.chair, title: "Lift & Tilt Chairs", span: "" },
  { src: media.sofaWall, title: "Traditional Sofas", span: "" },
  { src: media.bedroom, title: "Bedroom furniture", span: "md:col-span-2" },
  { src: media.wardrobe, title: "Bedroom Cabinets", span: "" },
  { src: media.showroom, title: "Showroom", span: "" }
];

export const stats = [
  { value: "1983", label: "Year Established" },
  { value: "Free", label: "Home Visit Service" },
  { value: "100%", label: "Family Run" },
  { value: "Chesterfield", label: "Local Delivery" }
];

export const contactCards = [
  { title: "Visit the showroom", value: business.address, icon: MapPin },
  { title: "Call", value: business.phone, icon: Clock },
  { title: "Home Visits", value: "Available on request", icon: Truck }
];
