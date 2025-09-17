import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Gift, Sparkles, Crown, Zap, Heart, Calendar, Percent } from 'lucide-react';

interface HeroSectionProps {
  onCategoryClick: (categoryId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCategoryClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const mainSlides = [
    {
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      title: 'Diamond Collection 2024',
      subtitle: 'Discover timeless elegance with our premium diamond jewelry',
      cta: 'Explore Diamonds',
      category: 'rings'
    },
    {
      image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg',
      title: 'Gold Jewelry Heritage',
      subtitle: 'Traditional craftsmanship meets contemporary design',
      cta: 'Shop Gold',
      category: 'necklaces'
    },
    {
      image: 'https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg',
      title: 'Bridal Collection',
      subtitle: 'Make your special day unforgettable with our bridal sets',
      cta: 'View Bridal',
      category: 'mangalsutra'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mainSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [mainSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mainSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mainSlides.length) % mainSlides.length);
  };

  return (
    <div className="space-y-8">
      {/* Main Hero Carousel */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {mainSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl mx-auto px-4">
                  <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 animate-fade-in">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 opacity-90">
                    {slide.subtitle}
                  </p>
                  <button 
                    onClick={() => onCategoryClick(slide.category)}
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {mainSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-500 scale-110'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Festive Season Banners */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">Festive Season Specials</h2>
          <p className="text-gray-600">Celebrate with our exclusive festive collections</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Diwali Special - Circular Design */}
          <div className="relative group cursor-pointer" onClick={() => onCategoryClick('necklaces')}>
            <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-full aspect-square p-8 text-white text-center flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-12 h-12 mb-4 text-yellow-300" />
              <h3 className="text-2xl font-bold mb-2">Diwali Special</h3>
              <p className="text-sm opacity-90 mb-4">Up to 40% Off on Gold Jewelry</p>
              <span className="bg-white text-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
                Shop Now
              </span>
            </div>
          </div>

          {/* Wedding Season - Square Grid */}
          <div className="grid grid-cols-2 gap-2">
            <div 
              className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg p-4 text-white text-center cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => onCategoryClick('mangalsutra')}
            >
              <Heart className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-bold text-sm">Bridal Sets</h4>
              <p className="text-xs opacity-90">From ₹1,50,000</p>
            </div>
            <div 
              className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg p-4 text-white text-center cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => onCategoryClick('rings')}
            >
              <Crown className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-bold text-sm">Wedding Rings</h4>
              <p className="text-xs opacity-90">Certified Diamonds</p>
            </div>
            <div 
              className="bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg p-4 text-white text-center cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => onCategoryClick('earrings')}
            >
              <Star className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-bold text-sm">Bridal Earrings</h4>
              <p className="text-xs opacity-90">Premium Collection</p>
            </div>
            <div 
              className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg p-4 text-white text-center cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => onCategoryClick('necklaces')}
            >
              <Gift className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-bold text-sm">Necklace Sets</h4>
              <p className="text-xs opacity-90">Complete Sets</p>
            </div>
          </div>

          {/* Akshaya Tritiya - Hexagonal Design */}
          <div className="relative group cursor-pointer" onClick={() => onCategoryClick('bangles')}>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl aspect-square p-6 text-white text-center flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 transform rotate-3 hover:rotate-0">
              <Calendar className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Akshaya Tritiya</h3>
              <p className="text-sm opacity-90 mb-4">Auspicious Gold Buying</p>
              <span className="bg-white text-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
                Buy Gold
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scheme Banners */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">Special Schemes</h2>
          <p className="text-gray-600">Flexible payment options and attractive schemes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Gold Savings Scheme - Circle */}
          <div className="text-center group cursor-pointer">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
              <div className="text-center">
                <Percent className="w-8 h-8 mx-auto mb-1" />
                <span className="text-sm font-bold">Gold Scheme</span>
              </div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Gold Savings Plan</h3>
            <p className="text-sm text-gray-600">Save monthly, buy yearly with bonus gold</p>
          </div>

          {/* Diamond Scheme - Square */}
          <div className="text-center group cursor-pointer">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
              <div className="text-center">
                <Sparkles className="w-8 h-8 mx-auto mb-1" />
                <span className="text-sm font-bold">Diamond Plan</span>
              </div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Diamond Scheme</h3>
            <p className="text-sm text-gray-600">Flexible EMI options for diamond jewelry</p>
          </div>

          {/* Exchange Offer - Hexagon */}
          <div className="text-center group cursor-pointer">
            <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-teal-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 transform rotate-45">
              <div className="text-center transform -rotate-45">
                <Zap className="w-8 h-8 mx-auto mb-1" />
                <span className="text-sm font-bold">Exchange</span>
              </div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Exchange Offer</h3>
            <p className="text-sm text-gray-600">Get best value for your old jewelry</p>
          </div>

          {/* Making Charges Offer - Circle */}
          <div className="text-center group cursor-pointer">
            <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
              <div className="text-center">
                <Gift className="w-8 h-8 mx-auto mb-1" />
                <span className="text-sm font-bold">Zero Making</span>
              </div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Zero Making Charges</h3>
            <p className="text-sm text-gray-600">On selected gold jewelry items</p>
          </div>
        </div>
      </div>

      {/* Category Banners with Different Designs */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">Shop by Category</h2>
          <p className="text-gray-600">Explore our diverse jewelry collections</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Rings - Large Rectangle */}
          <div 
            onClick={() => onCategoryClick('rings')}
            className="md:col-span-2 relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="aspect-[2/1] relative">
              <img
                src="https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg"
                alt="Engagement Rings"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="text-white p-8">
                  <div className="flex items-center space-x-2 mb-3">
                    <Crown className="w-6 h-6 text-yellow-400" />
                    <span className="text-sm font-medium bg-yellow-500 px-3 py-1 rounded-full">Premium Collection</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Diamond Rings</h3>
                  <p className="text-lg opacity-90 mb-4">Starting from ₹45,000</p>
                  <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300">
                    Explore Collection
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Necklaces - Square */}
          <div 
            onClick={() => onCategoryClick('necklaces')}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="aspect-square relative">
              <img
                src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg"
                alt="Gold Chains"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">Traditional</span>
                </div>
                <h3 className="text-xl font-bold">Gold Chains</h3>
                <p className="text-sm opacity-90">22K & 18K Available</p>
              </div>
            </div>
          </div>

          {/* Earrings - Square */}
          <div 
            onClick={() => onCategoryClick('earrings')}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="aspect-square relative">
              <img
                src="https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg"
                alt="Diamond Earrings"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">Bestseller</span>
                </div>
                <h3 className="text-xl font-bold">Diamond Earrings</h3>
                <p className="text-sm opacity-90">Certified Diamonds</p>
              </div>
            </div>
          </div>

          {/* Bangles - Wide Rectangle */}
          <div 
            onClick={() => onCategoryClick('bangles')}
            className="md:col-span-2 relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="aspect-[2/1] relative">
              <img
                src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg"
                alt="Gold Bangles"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-end">
                <div className="text-white p-8 text-right">
                  <div className="flex items-center justify-end space-x-2 mb-3">
                    <span className="text-sm font-medium bg-green-500 px-3 py-1 rounded-full">Festival Special</span>
                    <Gift className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Gold Bangles</h3>
                  <p className="text-lg opacity-90 mb-4">Handcrafted Designs</p>
                  <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300">
                    Shop Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Occasion-based Banners - Circular Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">Shop by Occasion</h2>
          <p className="text-gray-600">Perfect jewelry for every special moment</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div 
            onClick={() => onCategoryClick('rings')}
            className="group cursor-pointer text-center"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
              <img
                src="https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg"
                alt="Anniversary"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4 className="font-bold text-lg text-gray-800">Anniversary</h4>
            <p className="text-sm text-gray-600">Celebrate Love</p>
          </div>

          <div 
            onClick={() => onCategoryClick('earrings')}
            className="group cursor-pointer text-center"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
              <img
                src="https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg"
                alt="Birthday"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4 className="font-bold text-lg text-gray-800">Birthday</h4>
            <p className="text-sm text-gray-600">Special Gifts</p>
          </div>

          <div 
            onClick={() => onCategoryClick('necklaces')}
            className="group cursor-pointer text-center"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
              <img
                src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg"
                alt="Festival"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4 className="font-bold text-lg text-gray-800">Festival</h4>
            <p className="text-sm text-gray-600">Traditional Wear</p>
          </div>

          <div 
            onClick={() => onCategoryClick('bangles')}
            className="group cursor-pointer text-center"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
              <img
                src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg"
                alt="Daily Wear"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4 className="font-bold text-lg text-gray-800">Daily Wear</h4>
            <p className="text-sm text-gray-600">Everyday Elegance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;