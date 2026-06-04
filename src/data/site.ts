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
  name: "Mr Slators Furnishings",
  tagline: "Complete Home Furnishings since 1970.",
  address: "110-124 Infirmary Road, Sheffield S6 3DG",
  phone: "0114 276 5940",
  email: "sales@mrslators.co.uk",
  rating: "4.7",
  reviews: "Highly rated independent Sheffield furniture store",
  hours: [
    ["Monday", "10:00 AM - 4:30 PM"],
    ["Tuesday", "10:00 AM - 4:30 PM"],
    ["Wednesday", "10:00 AM - 5:00 PM"],
    ["Thursday", "10:00 AM - 5:00 PM"],
    ["Friday", "10:00 AM - 4:30 PM"],
    ["Saturday", "9:00 AM - 4:00 PM"],
    ["Sunday", "Closed"]
  ],
  sourceNote:
    "Independent, family-run furniture & carpets store in Sheffield since 1970."
};

export const sourcePages = [];

export const media = {
  hero: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2200&q=85",
  showroom: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1800&q=85",
  bath: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1800&q=85",
  shower: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1800&q=85",
  vanity: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1800&q=85",
  tiles: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1800&q=85",
  tap: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1800&q=85",
  towelRail: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=1800&q=85",
  dining: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1800&q=85",
  decor: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1800&q=85",
  carpet: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1800&q=85",
  bedroom: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=85",
  sofaWall: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85"
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Beds & Bedroom", href: "/collection" },
  { label: "Sofas & Seating", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export const collections = [
  {
    title: "Beds & Bedroom Furniture",
    description: "Quality sleigh beds, mattresses, wardrobes and chests of drawers.",
    price: "From £249",
    image: media.bedroom,
    icon: Bed
  },
  {
    title: "Sofas & Seating",
    description: "Comfortable fabric sofas, suites and supportive high-seat armchairs.",
    price: "From £349",
    image: media.shower,
    icon: Sofa
  },
  {
    title: "Dining & Occasional",
    description: "Solid pine and oak dining tables, nests of tables and rustic coffee tables.",
    price: "From £189",
    image: media.dining,
    icon: Armchair
  },
  {
    title: "Carpets & Flooring",
    description: "Premium carpets and fitted flooring options for the complete home.",
    price: "From £29/m²",
    image: media.carpet,
    icon: LampDesk
  }
];

export const services = [
  {
    title: "Friendly Home Delivery",
    description: "Our reliable team delivers your furniture directly to your room of choice.",
    icon: Truck
  },
  {
    title: "Complete Home Solutions",
    description: "Get everything you need, from beautiful bedroom pine units to premium fitted carpets.",
    icon: Sparkles
  },
  {
    title: "Local Customer Service",
    description: "No chatbots or long wait lines. Speak directly to our friendly store team on Infirmary Road.",
    icon: PackageCheck
  }
];

export const reasons = [
  { title: "Family Run Since 1970", description: "Over 50 years of outstanding furniture & flooring service in Sheffield." },
  { title: "Wide Product Range", description: "Specializing in sleigh beds, pine units, cozy suites, and premium carpets." },
  { title: "Try Before You Buy", description: "Visit our Infirmary Road showroom to test and feel every piece." },
  { title: "No Pressure Sales", description: "Friendly local team where nothing is too much trouble." }
];

export const testimonials = [
  {
    quote: "The team at Mr Slators are so helpful and friendly. We are absolutely satisfied with the sleigh bed and the delivery service. A lovely local business where nothing is too much trouble.",
    name: "Michaela M.",
    detail: "Bed Purchase – Sheffield"
  },
  {
    quote: "I could not be happier with my experience buying our pine dining set and carpet from Mr Slators. The staff were friendly, down to earth, and not pushy. Highly recommend!",
    name: "James B.",
    detail: "Furniture & Flooring – Sheffield"
  }
];

export const gallery = [
  { src: media.hero, title: "Comfortable Seating", span: "md:col-span-2 md:row-span-2" },
  { src: media.showroom, title: "Our Sheffield Showroom", span: "" },
  { src: media.bath, title: "Beds & Mattresses", span: "" },
  { src: media.vanity, title: "Solid Pine & Oak Pieces", span: "md:col-span-2" },
  { src: media.dining, title: "Dining Collections", span: "" },
  { src: media.carpet, title: "Carpets & Flooring", span: "" }
];

export const stats = [
  { value: "1970", label: "Established" },
  { value: "50+", label: "Years of Service" },
  { value: "Sheffield", label: "Local Showroom" },
  { value: "4.7", label: "Google Rated" }
];

export const contactCards = [
  { title: "Visit us", value: business.address, icon: MapPin },
  { title: "Call", value: business.phone, icon: Clock },
  { title: "Email", value: business.email, icon: UsersRound }
];
