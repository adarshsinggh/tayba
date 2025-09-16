export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  goldWeight: number;
  goldValue: number;
  diamondValue?: number;
  makingCharges: number;
  gst: number;
  finalPrice: number;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  description: string;
  specifications: {
    productType: string;
    brand: string;
    gender: string;
    metalPurity: string;
    metalColor: string;
    grossWeight: number;
    netWeight: number;
    certification: string;
    hallmarkLicense: string;
  };
  isNew?: boolean;
  isBestseller?: boolean;
  rewardPoints: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  subcategories: string[];
  count: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedLength?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  rewardPoints: number;
}