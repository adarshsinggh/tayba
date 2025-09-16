import React from 'react';
import { Heart, Star, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onProductClick: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  onAddToWishlist: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onProductClick,
  onAddToCart,
  onAddToWishlist
}) => {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
              Bestseller
            </span>
          )}
        </div>

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onProductClick(product.id);
              }}
              className="bg-white text-gray-800 p-2 rounded-full hover:bg-yellow-500 hover:text-white transition-colors shadow-lg"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToWishlist(product.id);
              }}
              className="bg-white text-gray-800 p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors shadow-lg"
            >
              <Heart className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product.id);
              }}
              className="bg-white text-gray-800 p-2 rounded-full hover:bg-yellow-500 hover:text-white transition-colors shadow-lg"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 
          className="font-semibold text-gray-800 mb-2 hover:text-yellow-600 cursor-pointer transition-colors line-clamp-2"
          onClick={() => onProductClick(product.id)}
        >
          {product.name}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-current'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviewCount})
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-900">
              ₹{product.finalPrice.toLocaleString()}
            </span>
          </div>
          
          <div className="text-xs text-gray-500 space-y-1">
            <div className="flex justify-between">
              <span>Gold ({product.goldWeight}g)</span>
              <span>₹{product.goldValue.toLocaleString()}</span>
            </div>
            {product.diamondValue && (
              <div className="flex justify-between">
                <span>Diamond</span>
                <span>₹{product.diamondValue.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Making + GST</span>
              <span>₹{(product.makingCharges + product.gst).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-green-600 font-medium">
            Earn {product.rewardPoints} points
          </span>
          <span className="text-xs text-gray-500">
            {product.specifications.metalPurity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;