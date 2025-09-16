import { Product, Category } from '../types/product';

export const goldRatePerGram = 6450; // Current gold rate

export const categories: Category[] = [
  {
    id: 'rings',
    name: 'Rings',
    image: 'https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg',
    subcategories: ['Engagement', 'Wedding', 'Fashion', 'Cocktail'],
    count: 245
  },
  {
    id: 'necklaces',
    name: 'Necklaces & Chains',
    image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg',
    subcategories: ['Chokers', 'Long Chains', 'Pendants'],
    count: 189
  },
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg',
    subcategories: ['Studs', 'Hoops', 'Chandeliers', 'Drops'],
    count: 167
  },
  {
    id: 'bangles',
    name: 'Bangles & Bracelets',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
    subcategories: ['Traditional', 'Modern', 'Tennis'],
    count: 134
  },
  {
    id: 'pendants',
    name: 'Pendants',
    image: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg',
    subcategories: ['Religious', 'Fashion', 'Personalized'],
    count: 98
  },
  {
    id: 'mangalsutra',
    name: 'Mangalsutra',
    image: 'https://images.pexels.com/photos/1454174/pexels-photo-1454174.jpeg',
    subcategories: ['Traditional', 'Contemporary'],
    count: 76
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Diamond Eternity Ring',
    category: 'rings',
    subcategory: 'engagement',
    price: 85000,
    goldWeight: 3.2,
    goldValue: 20640,
    diamondValue: 55000,
    makingCharges: 6900,
    gst: 2460,
    finalPrice: 85000,
    image: 'https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg',
    images: [
      'https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg',
      'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg'
    ],
    rating: 4.8,
    reviewCount: 124,
    description: 'Elegant diamond eternity ring crafted in 18K gold with certified diamonds.',
    specifications: {
      productType: 'Ring',
      brand: 'Premium Collection',
      gender: 'Female',
      metalPurity: '18K Gold',
      metalColor: 'Yellow Gold',
      grossWeight: 3.5,
      netWeight: 3.2,
      certification: 'BIS Hallmark',
      hallmarkLicense: 'L-12345678'
    },
    isBestseller: true,
    rewardPoints: 850
  },
  {
    id: '2',
    name: 'Gold Chain Necklace',
    category: 'necklaces',
    subcategory: 'long chains',
    price: 65000,
    goldWeight: 8.5,
    goldValue: 54825,
    makingCharges: 7650,
    gst: 2525,
    finalPrice: 65000,
    image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg',
    images: [
      'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg'
    ],
    rating: 4.6,
    reviewCount: 89,
    description: 'Classic 22K gold chain perfect for daily wear and special occasions.',
    specifications: {
      productType: 'Chain',
      brand: 'Traditional Collection',
      gender: 'Unisex',
      metalPurity: '22K Gold',
      metalColor: 'Yellow Gold',
      grossWeight: 8.8,
      netWeight: 8.5,
      certification: 'BIS Hallmark',
      hallmarkLicense: 'L-12345679'
    },
    isNew: true,
    rewardPoints: 650
  },
  {
    id: '3',
    name: 'Diamond Stud Earrings',
    category: 'earrings',
    subcategory: 'studs',
    price: 45000,
    goldWeight: 2.1,
    goldValue: 13545,
    diamondValue: 28000,
    makingCharges: 2655,
    gst: 1800,
    finalPrice: 45000,
    image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg',
    images: [
      'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg'
    ],
    rating: 4.9,
    reviewCount: 156,
    description: 'Brilliant diamond stud earrings in 18K white gold setting.',
    specifications: {
      productType: 'Earrings',
      brand: 'Diamond Collection',
      gender: 'Female',
      metalPurity: '18K Gold',
      metalColor: 'White Gold',
      grossWeight: 2.3,
      netWeight: 2.1,
      certification: 'BIS Hallmark',
      hallmarkLicense: 'L-12345680'
    },
    isBestseller: true,
    rewardPoints: 450
  },
  {
    id: '4',
    name: 'Traditional Gold Bangles',
    category: 'bangles',
    subcategory: 'traditional',
    price: 95000,
    goldWeight: 12.8,
    goldValue: 82560,
    makingCharges: 9940,
    gst: 2500,
    finalPrice: 95000,
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg'
    ],
    rating: 4.7,
    reviewCount: 78,
    description: 'Exquisite pair of traditional gold bangles with intricate patterns.',
    specifications: {
      productType: 'Bangles',
      brand: 'Heritage Collection',
      gender: 'Female',
      metalPurity: '22K Gold',
      metalColor: 'Yellow Gold',
      grossWeight: 13.2,
      netWeight: 12.8,
      certification: 'BIS Hallmark',
      hallmarkLicense: 'L-12345681'
    },
    rewardPoints: 950
  },
  {
    id: '5',
    name: 'Ruby Pendant',
    category: 'pendants',
    subcategory: 'fashion',
    price: 38000,
    goldWeight: 2.8,
    goldValue: 18060,
    diamondValue: 15000,
    makingCharges: 3640,
    gst: 1300,
    finalPrice: 38000,
    image: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg',
    images: [
      'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg'
    ],
    rating: 4.5,
    reviewCount: 92,
    description: 'Beautiful ruby pendant with diamonds in 18K gold.',
    specifications: {
      productType: 'Pendant',
      brand: 'Gemstone Collection',
      gender: 'Female',
      metalPurity: '18K Gold',
      metalColor: 'Rose Gold',
      grossWeight: 3.0,
      netWeight: 2.8,
      certification: 'BIS Hallmark',
      hallmarkLicense: 'L-12345682'
    },
    isNew: true,
    rewardPoints: 380
  },
  {
    id: '6',
    name: 'Contemporary Mangalsutra',
    category: 'mangalsutra',
    subcategory: 'contemporary',
    price: 72000,
    goldWeight: 6.5,
    goldValue: 41925,
    diamondValue: 22000,
    makingCharges: 6075,
    gst: 2000,
    finalPrice: 72000,
    image: 'https://images.pexels.com/photos/1454174/pexels-photo-1454174.jpeg',
    images: [
      'https://images.pexels.com/photos/1454174/pexels-photo-1454174.jpeg'
    ],
    rating: 4.8,
    reviewCount: 67,
    description: 'Modern mangalsutra design with black beads and diamond pendant.',
    specifications: {
      productType: 'Mangalsutra',
      brand: 'Bridal Collection',
      gender: 'Female',
      metalPurity: '18K Gold',
      metalColor: 'Yellow Gold',
      grossWeight: 6.8,
      netWeight: 6.5,
      certification: 'BIS Hallmark',
      hallmarkLicense: 'L-12345683'
    },
    isBestseller: true,
    rewardPoints: 720
  }
];