import { NavLink } from "@/types";

export const SITE_METADATA = {
  title: "Moniepoint - Year in Review 2025",
  description: "Moniepoint's Year in Review 2025. Celebrating a decade of impact powering Nigeria's financial ecosystem.",
  url: "https://2025.moniepoint.com",
  ogImage: "/images/og-image.png",
};

export const NAV_LINKS: NavLink[] = [
  {
    label: "Our Story",
    href: "#our-story",
    icon: "/images/asset_12.svg",
  },
  {
    label: "Download Review",
    href: "#download-section",
    icon: "/images/asset_13.svg",
  },
];

export const MILESTONES = [
  {
    id: "businesses",
    metric: "6 Million +",
    label: "Businesses served",
    highlight: "8 out of 10 in-person payments in Nigeria are made on a Moniepoint terminal. 🚀",
    image: "/images/asset_23.webp",
    offset: false,
  },
  {
    id: "individuals",
    metric: "16 Million +",
    label: "Individuals banked",
    highlight: "Moniepoint transfers to Moniepoint terminals are instant!",
    image: "/images/asset_24.webp",
    offset: true,
  },
  {
    id: "transactions",
    metric: "₦30 Trillion +",
    label: "Transactions processed",
    highlight: "In over 1 billion transactions made monthly.",
    image: "/images/asset_25.webp",
    offset: false,
  },
  {
    id: "employees",
    metric: "3300 +",
    label: "Employees",
    highlight: "And they’re some of the coolest people you’ll ever meet.",
    image: "/images/asset_26.webp",
    offset: true,
  },
  {
    id: "loans",
    metric: "₦1 Trillion",
    label: "Loans disbursed",
    highlight: "With 36% growth in business transaction value after getting a loan",
    image: "/images/asset_27.webp",
    offset: false,
  },
];

export const INDUSTRIES = [
  {
    title: "Healthcare",
    subtitle: "Across Nigeria, community pharmacies can now provide access to healthcare through easy payment options and access to credit.",
    bgColor: "#0357EE",
    image: "/images/asset_29.svg",
  },
  {
    title: "Trade",
    subtitle: "At Onitsha Main Market, West Africa’s largest market, Moniepoint supports generational businesses and enables safer, faster trade.",
    bgColor: "#1A1A1A",
    image: "/images/asset_28.svg",
  },
  {
    title: "Agriculture",
    subtitle: "Moniepoint helps farmers and livestock traders in Northern Nigeria collect payments, even in areas far from banks.",
    bgColor: "#05C15E",
    image: "/images/asset_29.svg",
  },
  {
    title: "Oil & Gas",
    subtitle: "Instant settlements, pioneered by Moniepoint in 2019, are critical for 90% petrol stations in Nigeria today.",
    bgColor: "#FF5917",
    image: "/images/asset_28.svg",
  },
];

export const CREDIT_CATEGORIES = [
  { name: "Provision Stores", color: "#0357EE", percentage: "15" },
  { name: "Building Materials Sales", color: "#47C8FF", percentage: "8" },
  { name: "Raw Foods", color: "#05C15E", percentage: "7" },
  { name: "Drinks & Water Wholesales", color: "#C06130", percentage: "7" },
  { name: "Supermarkets", color: "#CD9137", percentage: "5" },
];

export const TWEETS = [
  { id: 1, image: "/images/asset_33.svg" },
  { id: 2, image: "/images/asset_34.svg" },
  { id: 3, image: "/images/asset_35.svg" },
  { id: 4, image: "/images/asset_36.svg" },
];

export const AWARDS = [
  {
    id: 1,
    logo: "/images/asset_76.svg",
    organization: "Time",
    title: "Time 100 Most Influential companies 2025",
  },
  {
    id: 2,
    logo: "/images/asset_77.svg",
    organization: "Financial Times",
    title: "2025 Financial Times Africa's fastest growing companies",
  },
  {
    id: 3,
    logo: "/images/asset_78.png",
    organization: "CBN",
    title: "CBN's Financially inclusive fintech of the year",
  },
  {
    id: 4,
    logo: "/images/asset_76.svg",
    organization: "CB Insights",
    title: "CB's Insight annual fintech 100",
  },
  {
    id: 5,
    logo: "/images/asset_77.svg",
    organization: "CNBC",
    title: "CNBC Top Uk's leading fintech firms",
  },
  {
    id: 6,
    logo: "/images/asset_78.png",
    organization: "IBSI",
    title: "IBSI Corporate banking & digital wallets category winner.",
  },
];
