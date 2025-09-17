import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, Menu, X, Phone, ChevronDown, MapPin } from 'lucide-react';
import { goldRatePerGram, categories } from '../data/products';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onCategoryClick: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, wishlistCount, onCategoryClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [showStores, setShowStores] = useState(false);

  const categoryMap = {
    'Rings': 'rings',
    'Necklaces': 'necklaces',
    'Earrings': 'earrings',
    'Bangles': 'bangles',
    'Pendants': 'pendants',
    'Mangalsutra': 'mangalsutra'
  };

  const categoryNames = ['Rings', 'Necklaces', 'Earrings', 'Bangles', 'Pendants', 'Mangalsutra'];

  const getCategorySubcategories = (categoryName: string) => {
    const categoryId = categoryMap[categoryName as keyof typeof categoryMap];
    const category = categories.find(c => c.id === categoryId);
    
    // Extended subcategories for better showcase
    const extendedSubcategories = {
      'Rings': ['Engagement Rings', 'Wedding Bands', 'Solitaire Rings', 'Cocktail Rings', 'Eternity Rings', 'Promise Rings', 'Fashion Rings', 'Vintage Rings'],
      'Necklaces': ['Chokers', 'Long Chains', 'Pendant Sets', 'Statement Necklaces', 'Layered Necklaces', 'Pearl Necklaces', 'Diamond Necklaces', 'Gold Chains'],
      'Earrings': ['Stud Earrings', 'Hoop Earrings', 'Chandelier Earrings', 'Drop Earrings', 'Huggie Earrings', 'Climber Earrings', 'Threader Earrings', 'Ear Cuffs'],
      'Bangles': ['Traditional Bangles', 'Modern Bangles', 'Tennis Bracelets', 'Charm Bracelets', 'Cuff Bracelets', 'Chain Bracelets', 'Beaded Bracelets', 'Link Bracelets'],
      'Pendants': ['Religious Pendants', 'Fashion Pendants', 'Personalized Pendants', 'Gemstone Pendants', 'Diamond Pendants', 'Gold Pendants', 'Silver Pendants', 'Lockets'],
      'Mangalsutra': ['Traditional Mangalsutra', 'Contemporary Mangalsutra', 'Short Mangalsutra', 'Long Mangalsutra', 'Diamond Mangalsutra', 'Gold Mangalsutra', 'Designer Mangalsutra', 'Layered Mangalsutra']
    };

    return extendedSubcategories[categoryName as keyof typeof extendedSubcategories] || category?.subcategories || [];
  };

  const stores = [
    { name: 'Mumbai - Zaveri Bazaar', address: '123 Zaveri Bazaar, Mumbai - 400002', phone: '+91 98765 43210' },
    { name: 'Delhi - Karol Bagh', address: '456 Karol Bagh, New Delhi - 110005', phone: '+91 98765 43211' },
    { name: 'Bangalore - Commercial Street', address: '789 Commercial Street, Bangalore - 560001', phone: '+91 98765 43212' },
    { name: 'Chennai - T. Nagar', address: '321 T. Nagar, Chennai - 600017', phone: '+91 98765 43213' },
    { name: 'Hyderabad - Abids', address: '654 Abids Road, Hyderabad - 500001', phone: '+91 98765 43214' },
    { name: 'Pune - Laxmi Road', address: '987 Laxmi Road, Pune - 411002', phone: '+91 98765 43215' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-2 w-full">
        <div className="w-full px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <span className="animate-pulse">🔥</span>
              <span>Live Gold Rate: ₹{goldRatePerGram.toLocaleString()}/gram</span>
            </span>
            <span className="hidden md:block">|</span>
            <span className="hidden md:flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>1800-123-4567</span>
            </span>
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <span>Free Shipping on orders above ₹50,000</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full px-4 py-4">
        <div className="w-full flex items-center justify-between">
          {/* Logo - Left most */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <h1 className="text-2xl font-serif font-bold text-gray-800">Jewel Palace</h1>
          </div>

          {/* Center Section - Search and Store */}
          <div className="hidden md:flex items-center space-x-6 flex-1 max-w-2xl mx-8">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for rings, necklaces, earrings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Store Locator */}
            <div 
              className="relative"
              onMouseEnter={() => setShowStores(true)}
              onMouseLeave={() => setShowStores(false)}
            >
              <button className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-50">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Stores</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Store Dropdown */}
              {showStores && (
                <div className="absolute top-full left-0 bg-white shadow-2xl rounded-lg py-4 min-w-80 z-50 border border-gray-100 mt-2">
                  <div className="px-4 pb-3 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-800">Our Store Locations</h3>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {stores.map((store, index) => (
                      <div key={index} className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-b-0">
                        <h4 className="font-medium text-gray-800">{store.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{store.address}</p>
                        <p className="text-sm text-yellow-600 mt-1">{store.phone}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 pt-3 border-t border-gray-100">
                    <button className="text-sm text-yellow-600 hover:text-yellow-700 font-medium">
                      View All Stores →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* User Actions - Right side */}
          <div className="flex items-center space-x-6">
            <button className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-yellow-600 transition-colors">
              <User className="w-5 h-5" />
              <span>Account</span>
            </button>
            
            <button className="relative text-gray-600 hover:text-red-500 transition-colors">
              <Heart className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
            
            <button className="relative text-gray-600 hover:text-yellow-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation - Full Width */}
      <nav className="hidden md:block border-t border-gray-200 w-full">
        <div className="w-full px-4">
          <ul className="flex justify-start space-x-8">
            {categoryNames.map((category) => (
              <li 
                key={category}
                className="relative group"
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <button
                  onClick={() => onCategoryClick(categoryMap[category as keyof typeof categoryMap])}
                  className="flex items-center space-x-1 text-gray-700 hover:text-yellow-600 font-medium transition-colors py-4 relative group"
                >
                  <span>{category}</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </button>

                {/* Full Width Dropdown Menu */}
                {hoveredCategory === category && (
                  <div className="absolute top-full left-0 bg-white shadow-2xl z-50 border border-gray-100" style={{ width: '100vw', left: 'calc(-100vw + 100vw)' }}>
                    <div className="max-w-7xl mx-auto px-4 py-8">
                      <div className="grid grid-cols-4 gap-8">
                        <div className="col-span-3">
                          <h3 className="text-lg font-semibold text-gray-800 mb-4">{category} Collection</h3>
                          <div className="grid grid-cols-4 gap-4">
                            {getCategorySubcategories(category).map((subcategory, index) => (
                              <button
                                key={index}
                                onClick={() => onCategoryClick(categoryMap[category as keyof typeof categoryMap])}
                                className="text-left text-sm text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 px-3 py-2 rounded transition-colors"
                              >
                                {subcategory}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="col-span-1">
                          <div className="bg-gray-50 rounded-lg p-4">
                            <img
                              src={categories.find(c => c.id === categoryMap[category as keyof typeof categoryMap])?.image}
                              alt={category}
                              className="w-full h-32 object-cover rounded-lg mb-3"
                            />
                            <h4 className="font-medium text-gray-800 mb-2">Featured {category}</h4>
                            <p className="text-sm text-gray-600 mb-3">Discover our premium collection</p>
                            <button 
                              onClick={() => onCategoryClick(categoryMap[category as keyof typeof categoryMap])}
                              className="text-sm text-yellow-600 hover:text-yellow-700 font-medium"
                            >
                              Shop Now →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jewelry..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Mobile Store Locator */}
            <div className="mb-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors w-full px-4 py-2 rounded-lg hover:bg-gray-50">
                <MapPin className="w-5 h-5" />
                <span>Find Stores</span>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav>
              <ul className="space-y-2">
                {categoryNames.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => {
                        onCategoryClick(categoryMap[category as keyof typeof categoryMap]);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;