import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

interface FeaturedSectionProps {
  onProductClick: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  onAddToWishlist: (productId: string) => void;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  onProductClick,
  onAddToCart,
  onAddToWishlist
}) => {
  const diamondFavorites = products.filter(p => p.diamondValue && p.diamondValue > 0).slice(0, 4);
  const goldFavorites = products.filter(p => !p.diamondValue || p.diamondValue === 0).slice(0, 4);
  const bestSellers = products.filter(p => p.isBestseller).slice(0, 4);
  const newArrivals = products.filter(p => p.isNew).slice(0, 4);

  const Section = ({ title, subtitle, products, bgColor = 'bg-white' }: any) => (
    <section className={`py-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onProductClick}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <Section
        title="Diamond Favorites"
        subtitle="Discover our most loved diamond jewelry pieces, handpicked for their exceptional beauty and craftsmanship"
        products={diamondFavorites}
      />
      
      <Section
        title="Gold Collection"
        subtitle="Timeless gold jewelry that celebrates tradition while embracing contemporary elegance"
        products={goldFavorites}
        bgColor="bg-gray-50"
      />
      
      <Section
        title="Bestsellers"
        subtitle="Our customers' most cherished pieces - see why these designs have captured hearts"
        products={bestSellers}
      />
      
      <Section
        title="New Arrivals"
        subtitle="Fresh designs and latest trends in jewelry - be the first to own these stunning pieces"
        products={newArrivals}
        bgColor="bg-gray-50"
      />
    </>
  );
};

export default FeaturedSection;