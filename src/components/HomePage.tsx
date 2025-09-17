import React from 'react';
import HeroSection from './HeroSection';
import CategorySection from './CategorySection';
import FeaturedSection from './FeaturedSection';

interface HomePageProps {
  onCategoryClick: (categoryId: string) => void;
  onProductClick: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  onAddToWishlist: (productId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  onCategoryClick,
  onProductClick,
  onAddToCart,
  onAddToWishlist
}) => {
  return (
    <div>
      <HeroSection onCategoryClick={onCategoryClick} />
      <CategorySection onCategoryClick={onCategoryClick} />
      <FeaturedSection
        onProductClick={onProductClick}
        onAddToCart={onAddToCart}
        onAddToWishlist={onAddToWishlist}
      />
    </div>
  );
};

export default HomePage;