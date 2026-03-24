import { 
  Code, Smartphone, ShoppingCart, GraduationCap, Search, Settings,
  Briefcase, Users, Award, CheckCircle
} from 'lucide-react';
import React from 'react';

export const SERVICES = [
  { icon: <Code />, title: "Custom Websites", desc: "High-performance, SEO-friendly websites tailored to your business needs." },
  { icon: <Smartphone />, title: "Mobile Apps", desc: "Native-feel Android & iOS apps built with modern cross-platform tech." },
  { icon: <ShoppingCart />, title: "E-commerce Portals", desc: "Scalable online stores with secure payment gateways and inventory management." },
  { icon: <GraduationCap />, title: "School Websites", desc: "Complete digital solutions for schools with admission and parent portals." },
  { icon: <Search />, title: "SEO & Marketing", desc: "Rank higher on Google and reach your target audience in Bihar and beyond." },
  { icon: <Settings />, title: "Maintenance", desc: "24/7 support and regular updates to keep your digital assets running smooth." }
];

export const PROJECTS = [
  {
    title: "Techman Learning Mobile App",
    link: "#",
    location: "Mobile App",
    desc: "Android Application that provides platform to learn and revise programming easily with videos and also provides to content to crack Interview. Software used - Android Studio, SQLite, MySQL, PHP, and Google Play Services.",
    tech: ["Android Studio", "SQLite", "MySQL", "PHP"],
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Cognate QR & Bar Code Scanner",
    link: "#",
    location: "Remote",
    desc: "Developed an Android application to manage real-time medicine manuals after scanning QR & Bar Codes. Built with high-performance scanning libraries.",
    tech: ["Android", "Java", "QR/BarCode"],
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Inventory & Breakdown Manager - PsquarTechnology",
    link: "#",
    location: "Gurgaon",
    desc: "Developed an Android application to manage real-time breakdowns, work orders, and spare parts inventory for industrial efficiency.",
    tech: ["Android", "Java", "PHP", "MySQL"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Product Location Tracker - PsquarTechnology",
    link: "#",
    location: "Gurgaon",
    desc: "Multi-platform (Android & Desktop) system to search product physical stored locations, flashing real-time data to all connected monitors.",
    tech: ["Java (Swing)", "Android", "MySQL"],
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "PLC Machine Counter - Himmel Technologies",
    link: "#",
    location: "Gurgaon",
    desc: "Desktop and Mobile application that communicates directly with PLC devices to retrieve and display real-time machine product counts.",
    tech: ["Java (Swing)", "Android", "PLC", "MySQL"],
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "ArtisteBooking - Big Show Entertainment",
    link: "https://artistebooking.com",
    location: "Global",
    desc: "A comprehensive Android application for booking favorite artists for events. Features real-time availability, secure payments, and artist management.",
    tech: ["Android", "Firebase", "Node.js", "Stripe"],
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Drasti Institute, Janakpuri Delhi",
    link: "https://www.drastiinstitute.com",
    location: "Janakpuri, Delhi",
    desc: "Developed an Android application to control home appliances such as fan, lights etc. Software used - Android Studio, Arduino. Hardware Used – Arduino with Bluetooth, ESP with Wifi. Programming & DB – Java, Android, Php, Arduino.",
    tech: ["Android", "Arduino", "IoT", "PHP"],
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Bihar Shikshak Seva Portal",
    link: "https://biharteachers.ibapp.co.in",
    location: "Bihar",
    desc: "Bihar Teacher's Digital Partner that Generate pdf documents for teacher and make their task easier.",
    tech: ["React", "Node.js", "PostgreSQL"],
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Swag of Bihar Biryani Portal",
    link: "https://swagofbihar.ibapp.co.in",
    location: "Gopalganj",
    desc: "Official online portal for authentic Bihar-style biryani brand. Features online ordering and local delivery integration.",
    tech: ["Next.js", "Tailwind", "Stripe"],
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Fortis Bridge India Portal",
    link: "https://fortisbridgeindia.com",
    location: "Patna",
    desc: "Founded on principles of integrity and excellence, FortisBridge India has established itself as a versatile service provider. We bridge the gap between demand and supply, ensuring that our clients receive top-tier resources, whether it is human capital, logistical fleets, or essential office supplies.",
    tech: ["Vue.js", "Firebase", "Express"],
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "KNG Public School Website",
    link: "https://kngs.ibapp.co.in",
    location: "Gopalganj",
    desc: "Modern school website for KNG Public School with admission portal, photo gallery, and parent login.",
    tech: ["React", "PHP", "MySQL"],
    img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Apex Coaching Institute",
    link: "#",
    location: "Gopalganj",
    desc: "Complete digital presence for Apex Coaching Institute including course listings and online registration.",
    tech: ["HTML/CSS", "JS", "Bootstrap"],
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS = [
  { name: "Rajesh Kumar", role: "School Principal", text: "IBAPP transformed our school's digital presence. The parent portal is a lifesaver!", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" },
  { name: "Mr. Aslam", role: "Business Owner", text: "The Biryani portal increased our orders by 40%. Highly recommended for local businesses in Bihar.", img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80" },
  { name: "Pankaj pal", role: "Business Owner", text: "Professional, timely, and understands the local market perfectly. Best developer in Gopalganj.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
  { name: "Saroj Kumar", role: "Director, FortisBridgeIndia.com", text: "The career guidance portal developed by IBAPP has been instrumental in helping students find the right path. Exceptional work!", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" },
  { name: "Director Limes", role: "Director, Himmel Technologies", text: "The PLC Machine Counter system has revolutionized our production monitoring. The real-time data integration is flawless and highly reliable.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80" },
  { name: "Sandeep", role: "Client, Cognate & Drasti", text: "From the high-performance QR scanner for Cognate to the innovative IoT solutions for Drasti Institute, IBAPP's technical expertise is truly world-class.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" }
];

export const STATS = [
  { label: "Projects Done", value: "20+", icon: <Briefcase /> },
  { label: "Happy Clients", value: "30+", icon: <Users /> },
  { label: "Years Experience", value: "15+", icon: <Award /> },
  { label: "On-time Delivery", value: "99%", icon: <CheckCircle /> }
];

export const PRICING_PACKAGES = [
  {
    name: "Basic Visibility Package",
    price: "₹9,999 – ₹11,999",
    description: "Perfect for small battery stores, medical shops & biryani outlets.",
    features: [
      "Professional 5-page mobile-friendly website",
      "Full Google Business Profile setup + optimization (photos, posts, keywords)",
      "Contact form + Google Maps",
      "Basic SEO so you appear in “near me” searches",
      "Delivered in 5–7 days"
    ],
    footer: "Ideal for first-time online presence. Many clients get calls within 1 week!",
    popular: false
  },
  {
    name: "Standard Growth Package",
    price: "₹18,999 – ₹22,999",
    description: "Best choice for schools, medical shops, biryani restaurants & battery stores.",
    features: [
      "Everything in Basic + Dynamic WordPress website",
      "Up to 12 pages (Home, About, Menu, Gallery, etc.)",
      "Enquiry & WhatsApp buttons",
      "Fast loading + basic speed optimization",
      "Google listing fully managed for first month",
      "Delivered in 10–12 days"
    ],
    footer: "Hundreds of local businesses are getting more customers daily with this package.",
    popular: true
  },
  {
    name: "Premium Pro Package",
    price: "₹29,999 – ₹34,999",
    description: "For growing battery stores, schools & bigger outlets.",
    features: [
      "Full dynamic website with 15+ pages",
      "Lite e-commerce (sell products/menu online)",
      "Custom design as per your brand colors",
      "Google Analytics + advanced SEO",
      "3 months free maintenance & updates",
      "Google Business Profile management (3 months)",
      "Delivered in 12–15 days"
    ],
    footer: "Get professional online presence like big city shops at Tier-3 price.",
    popular: false
  },
  {
    name: "Google Listing Only",
    price: "₹3,999 – ₹5,999",
    description: "Already have a basic website? Just need more customers?",
    features: [
      "Complete Google Business Profile creation/verification",
      "Professional photos upload + category optimization",
      "Weekly posts setup for 1 month",
      "Keyword optimization for “near me” searches",
      "Live in 2–3 days"
    ],
    footer: "Many shops see 30–50% more calls after this.",
    popular: false
  },
  {
    name: "Annual Maintenance & Support",
    price: "₹3,999/year",
    subPrice: "₹2,999 if bought with website",
    description: "Keep your website fast, secure & updated.",
    features: [
      "Monthly backups",
      "Security updates",
      "Content changes (up to 4 per year)",
      "Google listing posts & review replies",
      "Priority support on WhatsApp"
    ],
    footer: "Peace of mind for busy shop/school owners.",
    popular: false
  }
];

export const ADD_ONS = {
  title: "Add-on Services",
  price: "Starting ₹2,000",
  description: "Need more?",
  items: [
    "Extra pages or custom sections",
    "Online menu with ordering",
    "Hindi + English bilingual website",
    "Professional photos & video shoot",
    "Monthly Google posts & leads management"
  ],
  footer: "Just tell us what you need – we customize!"
};
