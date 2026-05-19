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
  name: "Homeflair",
  tagline: "...It's how you live. Quality furniture since 1972.",
  address: "Parkgate Complex, Rawmarsh Rd, Rotherham S60 1RZ",
  phone: "01709 376633",
  email: "sales@homeflair.com",
  rating: "4.8",
  reviews: "Trusted family furniture retailer since 1972",
  hours: [
    ["Monday", "10:00 AM - 5:00 PM"],
    ["Tuesday", "10:00 AM - 5:00 PM"],
    ["Wednesday", "10:00 AM - 5:00 PM"],
    ["Thursday", "10:00 AM - 5:00 PM"],
    ["Friday", "10:00 AM - 5:00 PM"],
    ["Saturday", "10:00 AM - 5:00 PM"],
    ["Sunday", "10:00 AM - 4:00 PM"]
  ],
  sourceNote:
    "Family-run furniture showroom in Rotherham, serving the UK since 1972."
};

export const sourcePages = [];

export const media = {
  hero: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2200&q=85",
  showroom: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1800&q=85",
  bath: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1800&q=85",
  shower: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1800&q=85",
  vanity: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1800&q=85",
  tiles: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
  tap: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1800&q=85",
  towelRail: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85",
  dining: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1800&q=85",
  decor: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
  carpet: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1800&q=85",
  bedroom: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=85",
  sofaWall: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85"
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Fabric Sofas", href: "/collection" },
  { label: "Leather Sofas", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export const collections = [
  {
    title: "Fabric Sofas",
    description: "UK-made sofas in bespoke fabrics and configurations.",
    price: "From £995",
    image: media.hero,
    icon: Sofa
  },
  {
    title: "Leather Sofas",
    description: "Italian-inspired leather suites from Newtrend Concepts.",
    price: "From £1,299",
    image: media.shower,
    icon: Armchair
  },
  {
    title: "Rattan Garden Furniture",
    description: "Exclusive outdoor dining and lounge sets built to last.",
    price: "From £499",
    image: media.decor,
    icon: Bed
  },
  {
    title: "Ex-Display Deals",
    description: "Premium branded furniture at clearance prices.",
    price: "From £399",
    image: media.showroom,
    icon: LampDesk
  }
];

export const services = [
  {
    title: "Speedy Delivery",
    description: "Our drivers book a slot that suits you – delivered to your room of choice.",
    icon: Truck
  },
  {
    title: "Premium Quality",
    description: "We're only interested in the best. Durable furniture built to last a lifetime.",
    icon: Sparkles
  },
  {
    title: "Reliable Human Support",
    description: "No chatbots here. Get in touch and receive a real human response every time.",
    icon: PackageCheck
  }
];

export const reasons = [
  { title: "Family Run Since 1972", description: "Over 50 years of trusted furniture retail in South Yorkshire." },
  { title: "UK Manufacturers", description: "We work with Buoyant, Lebus, Red Rose and more top British makers." },
  { title: "Try Before You Buy", description: "Visit our Rotherham showroom to test and feel every piece." },
  { title: "No Pressure Sales", description: "Friendly, helpful staff who let you browse at your own pace." }
];

export const testimonials = [
  {
    quote: "The staff of Homeflair are so helpful and friendly. We are very satisfied with the quality of sofas and the delivery drivers. A lovely family run business.",
    name: "Michaela M.",
    detail: "Sofa Purchase – Rotherham"
  },
  {
    quote: "I could not be happier with my experience buying my sofa from Homeflair. The staff in store were friendly, not pushy. The sofa arrived when they said it would. Highly recommend!",
    name: "James B.",
    detail: "Sofa Purchase – England"
  }
];

export const gallery = [
  { src: media.hero, title: "Living Room Inspiration", span: "md:col-span-2 md:row-span-2" },
  { src: media.showroom, title: "Our Rotherham Showroom", span: "" },
  { src: media.shower, title: "Leather Collections", span: "" },
  { src: media.decor, title: "Garden Rattan Sets", span: "md:col-span-2" },
  { src: media.dining, title: "Outdoor Dining", span: "" },
  { src: media.bath, title: "Corner Sofas", span: "" }
];

export const stats = [
  { value: "1972", label: "Established" },
  { value: "50+", label: "Years of Trust" },
  { value: "UK Made", label: "Bespoke Sofas" },
  { value: "5-Star", label: "Customer Rated" }
];

export const contactCards = [
  { title: "Visit us", value: business.address, icon: MapPin },
  { title: "Call", value: business.phone, icon: Clock },
  { title: "Email", value: business.email, icon: UsersRound }
];
