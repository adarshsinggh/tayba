import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, Menu, X, Phone } from 'lucide-react';
import { goldRatePerGram } from '../data/products';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onCategoryClick: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, wishlistCount, onCategoryClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Rings', 'Necklaces', 'Earrings', 'Bangles', 'Pendants', 'Mangalsutra'];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
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
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <h1 className="text-2xl font-serif font-bold text-gray-800">Jewel Palace</h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for rings, necklaces, earrings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* User Actions */}
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

        {/* Navigation */}
        <nav className="hidden md:block mt-4 pt-4 border-t border-gray-200">
          <ul className="flex justify-center space-x-8">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => onCategoryClick(category.toLowerCase())}
                  className="text-gray-700 hover:text-yellow-600 font-medium transition-colors py-2 relative group"
                >
                  {category}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
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

            {/* Mobile Navigation */}
            <nav>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => {
                        onCategoryClick(category.toLowerCase());
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
        )}
      </div>
    </header>
  );
};

export default Header;