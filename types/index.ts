export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

export interface MilestoneItem {
  id: string;
  metric: string;
  label: string;
  description: string;
  image: string;
  offsetY?: boolean;
}

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  stats: {
    label: string;
    value: string;
  }[];
  image: string;
}

export interface SpendingFact {
  id: string;
  title: string;
  description: string;
  icon: string;
  accentColor?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  year: string;
  organization: string;
  image: string;
}

export interface CartProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
  quantity: number;
}

export interface CartState {
  items: CartProduct[];
  addItem: (product: CartProduct) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  tax: number;
  total: number;
}
