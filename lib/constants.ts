export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.ubsglobal.app";

export const APP_NAME = "UBS Global";
export const COMPANY_NAME = "UBS Global Importing & Exporting";

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "For Buyers", href: "#buyers" },
  { label: "For Sellers", href: "#sellers" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  badge: string;
  iconName: string;
}

export const APP_FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: "Global Marketplace",
    description:
      "Discover products and business opportunities across international markets with verified suppliers and global buyers.",
    badge: "International Trade",
    iconName: "globe",
  },
  {
    id: 2,
    title: "Buyer Experience",
    description:
      "Explore products, connect with sellers, manage your buying activities, and track your transactions effortlessly.",
    badge: "Smart Sourcing",
    iconName: "buyer",
  },
  {
    id: 3,
    title: "Seller Experience",
    description:
      "Create your store, manage products, receive orders, and scale your cross-border business with powerful merchant tools.",
    badge: "Cross-Border Sales",
    iconName: "seller",
  },
  {
    id: 4,
    title: "Real-Time Messaging",
    description:
      "Connect directly with buyers, sellers, and business partners through instant, integrated high-speed chat.",
    badge: "Direct Contact",
    iconName: "chat",
  },
  {
    id: 5,
    title: "Product Management",
    description:
      "Manage product listings, catalog information, inventory status, and specialized store offerings with ease.",
    badge: "Catalog Control",
    iconName: "box",
  },
  {
    id: 6,
    title: "Order Management",
    description:
      "Track and manage business orders, shipping updates, and invoice fulfillment from one connected platform.",
    badge: "Fulfillment",
    iconName: "orders",
  },
  {
    id: 7,
    title: "Business Analytics",
    description:
      "Monitor important business activity, inquiry metrics, customer interest, and store performance trends.",
    badge: "Insights",
    iconName: "analytics",
  },
  {
    id: 8,
    title: "Smart Notifications",
    description:
      "Stay updated instantly with new messages, purchase orders, business activity, and important platform alerts.",
    badge: "Instant Alerts",
    iconName: "bell",
  },
  {
    id: 9,
    title: "Secure Platform",
    description:
      "Protected account functionality, authenticated access, and business data integrity built for peace of mind.",
    badge: "Verified Trust",
    iconName: "shield",
  },
];

export const BUYER_FEATURES: string[] = [
  "Explore international products",
  "Connect with global sellers",
  "Discover new business opportunities",
  "Communicate directly with sellers",
  "Manage buying activities",
  "Access your orders and account information",
];

export const SELLER_FEATURES: string[] = [
  "Create your seller presence",
  "Add and manage products",
  "Reach international buyers",
  "Manage orders",
  "Communicate with customers",
  "Monitor business performance",
];

export interface StepItem {
  step: string;
  title: string;
  description: string;
  highlight: string;
}

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    step: "01",
    title: "Download UBS Global",
    description: "Download the UBS Global app from Google Play onto your mobile device.",
    highlight: "Available on Google Play",
  },
  {
    step: "02",
    title: "Create Your Account",
    description: "Create your account and set up your personalized UBS Global experience.",
    highlight: "Quick & Verified Setup",
  },
  {
    step: "03",
    title: "Explore or Start Selling",
    description: "Discover products as a buyer or begin building your seller store presence.",
    highlight: "Tailored to Your Role",
  },
  {
    step: "04",
    title: "Connect and Grow",
    description:
      "Communicate, discover opportunities, manage your activities, and grow your business internationally.",
    highlight: "Global Scale",
  },
];

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: string;
}

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: "GLOBAL CONNECTIVITY",
    description: "Discover and build connections across international markets.",
    icon: "globe-lines",
  },
  {
    title: "BUYERS AND SELLERS",
    description: "A platform designed to support both sides of business.",
    icon: "users-split",
  },
  {
    title: "CONNECTED COMMUNICATION",
    description: "Stay connected through integrated platform communication.",
    icon: "chat-bubble",
  },
  {
    title: "BUSINESS MANAGEMENT",
    description: "Manage important business activities in one place.",
    icon: "dashboard",
  },
  {
    title: "MOBILE ACCESS",
    description: "Access the UBS Global experience through the mobile application.",
    icon: "mobile-touch",
  },
];

export interface SecurityCard {
  title: string;
  description: string;
  tag: string;
}

export const SECURITY_CARDS: SecurityCard[] = [
  {
    title: "Secure Account Access",
    description:
      "Protected user authentication and verified profile sessions safeguard your business credentials.",
    tag: "Protected Access",
  },
  {
    title: "Protected User Experience",
    description:
      "Strict data separation and controlled privacy controls designed specifically for commercial trade.",
    tag: "Data Privacy",
  },
  {
    title: "Reliable Communication",
    description:
      "Direct buyer-seller messaging channel prevents middleman distortion and protects conversation history.",
    tag: "Direct Channels",
  },
  {
    title: "Global Platform Access",
    description:
      "Dependable cloud infrastructure ensuring your storefront and inquiries are accessible anywhere worldwide.",
    tag: "24/7 Availability",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is UBS Global?",
    answer:
      "UBS Global is a platform designed to connect buyers and sellers and support international importing, exporting, product discovery, communication, and business opportunities.",
  },
  {
    question: "Can I use UBS Global as a buyer?",
    answer:
      "Yes. Buyers can explore products, connect with sellers, and manage their platform activities.",
  },
  {
    question: "Can I become a seller?",
    answer:
      "Yes. Eligible users can follow the seller registration process to build and manage their seller presence.",
  },
  {
    question: "Where can I download UBS Global?",
    answer:
      "UBS Global is available on Google Play.",
  },
  {
    question: "Does UBS Global support international users?",
    answer:
      "UBS Global is designed around international marketplace and business opportunities.",
  },
];
