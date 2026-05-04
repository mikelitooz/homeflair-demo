import {
  Bath,
  ShowerHead,
  Droplets,
  Wrench,
  Clock,
  MapPin,
  PackageCheck,
  Ruler,
  Sparkles,
  Truck,
  UsersRound
} from "lucide-react";

export const business = {
  name: "K.E.S. Bathrooms",
  tagline: "Premium bathroom design and installation showroom.",
  address: "39-41 High St, Clay Cross, Chesterfield, S45 9DX",
  phone: "01246 861111", // Standard placeholder if unknown
  email: "hello@kesbathrooms.co.uk",
  rating: "5.0",
  reviews: "Expert design & installation",
  hours: [
    ["Monday", "9:00 AM - 5:00 PM"],
    ["Tuesday", "9:00 AM - 5:00 PM"],
    ["Wednesday", "9:00 AM - 5:00 PM"],
    ["Thursday", "9:00 AM - 5:00 PM"],
    ["Friday", "9:00 AM - 5:00 PM"],
    ["Saturday", "10:00 AM - 4:00 PM"],
    ["Sunday", "Closed"]
  ],
  sourceNote:
    "Expert bathroom fitter and showroom in Chesterfield."
};

export const sourcePages = [];

export const media = {
  hero: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=2200&q=85",
  showroom: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=85",
  bath: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1800&q=85",
  shower: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1800&q=85",
  vanity: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1800&q=85",
  tiles: "https://images.unsplash.com/photo-1520699049698-acd2fce18736?auto=format&fit=crop&w=1800&q=85",
  tap: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1800&q=85",
  towelRail: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=85",
  dining: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1800&q=85",
  decor: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1800&q=85",
  carpet: "https://images.unsplash.com/photo-1520699049698-acd2fce18736?auto=format&fit=crop&w=1800&q=85",
  bedroom: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=85",
  sofaWall: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1800&q=85"
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Design Process", href: "/about" },
  { label: "Bathrooms", href: "/collection" },
  { label: "Showers", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export const collections = [
  {
    title: "Freestanding Baths",
    description: "Elegant centerpieces for luxury bathroom spaces.",
    price: "From £799",
    image: media.bath,
    icon: Bath
  },
  {
    title: "Walk-in Showers",
    description: "Modern, accessible shower enclosures and wet rooms.",
    price: "From £599",
    image: media.shower,
    icon: ShowerHead
  },
  {
    title: "Vanity Units",
    description: "Practical storage with premium basin finishes.",
    price: "From £299",
    image: media.vanity,
    icon: Droplets
  },
  {
    title: "Designer Tiles",
    description: "Porcelain and ceramic wall and floor tiles.",
    price: "From £25/sqm",
    image: media.tiles,
    icon: Sparkles
  }
];

export const services = [
  {
    title: "3D Bathroom Design",
    description: "Visualize your new bathroom before installation with our advanced 3D design software.",
    icon: Ruler
  },
  {
    title: "Expert Installation",
    description: "Our experienced fitting team handles plumbing, tiling, and electricals seamlessly.",
    icon: Wrench
  },
  {
    title: "Showroom Consultation",
    description: "Visit our Clay Cross showroom to explore fixtures, tiles, and layouts in person.",
    icon: UsersRound
  }
];

export const reasons = [
  { title: "Full Service", description: "From initial design to final plumbing, we handle everything." },
  { title: "Local Showroom", description: "See the quality of our suites in our Clay Cross showroom." },
  { title: "Experienced Fitters", description: "Professional installation guaranteed to last." },
  { title: "Premium Brands", description: "We supply top-tier bathroom and shower brands." }
];

export const testimonials = [
  {
    quote: "K.E.S. completely transformed our bathroom. The design was brilliant and the fitters were so tidy.",
    name: "Verified Customer",
    detail: "Full Installation"
  },
  {
    quote: "Great showroom with plenty of choices. The walk-in shower is exactly what we needed.",
    name: "Verified Customer",
    detail: "Shower Enclosure"
  }
];

export const gallery = [
  { src: media.hero, title: "Modern Bathroom", span: "md:col-span-2 md:row-span-2" },
  { src: media.bath, title: "Freestanding Baths", span: "" },
  { src: media.shower, title: "Walk-in Showers", span: "" },
  { src: media.vanity, title: "Vanity Units", span: "md:col-span-2" },
  { src: media.tiles, title: "Tiles & Flooring", span: "" },
  { src: media.showroom, title: "Our Showroom", span: "" }
];

export const stats = [
  { value: "Full", label: "Design Service" },
  { value: "Expert", label: "Installation" },
  { value: "Clay Cross", label: "Showroom" },
  { value: "Premium", label: "Fixtures" }
];

export const contactCards = [
  { title: "Visit the showroom", value: business.address, icon: MapPin },
  { title: "Call", value: business.phone, icon: Clock },
  { title: "Consultations", value: "Available on request", icon: Ruler }
];
