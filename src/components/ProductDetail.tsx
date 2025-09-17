import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Share2, ChevronLeft, Shield, Truck, RotateCcw, Award } from 'lucide-react';
import { Product } from '../types/product';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (productId: string) => void;
  onAddToWishlist: (productId: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onBack,
  onAddToCart,
  onAddToWishlist
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedLength, setSelectedLength] = useState('');

  const sizes = ['6', '8', '10', '12', '14', '16', '18', '20', '22'];
  const lengths = ['14"', '16"', '18"', '20"', '22"', '24"'];

  return (
    <div className="min-h-screen bg-gray-50 page-transition">
      {/* Back Button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Products
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-yellow-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                {product.isNew && (
                  <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                    New
                  </span>
                )}
                {product.isBestseller && (
                  <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                    Bestseller
                  </span>
                )}
              </div>
              <button
                onClick={() => onAddToWishlist(product.id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Heart className="w-6 h-6" />
              </button>
            </div>

            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-4">
              {product.name}
            </h1>

            <div className="flex items-center mb-6">
              <div className="flex items-center text-yellow-400 mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-current'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price Breakdown */}
            <div className="bg-white rounded-lg p-6 shadow-md mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Price Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Current Gold Rate</span>
                  <span className="font-medium">₹6,450 per gram</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Gold Weight</span>
                  <span className="font-medium">{product.goldWeight}g</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Gold Value</span>
                  <span className="font-medium">₹{product.goldValue.toLocaleString()}</span>
                </div>
                {product.diamondValue && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Diamond Value</span>
                    <span className="font-medium">₹{product.diamondValue.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Making Charges</span>
                  <span className="font-medium">₹{product.makingCharges.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">GST (3%)</span>
                  <span className="font-medium">₹{product.gst.toLocaleString()}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Final Price</span>
                    <span className="text-yellow-600">₹{product.finalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-green-700 text-sm font-medium">
                  💰 Earn {product.rewardPoints} reward points on this purchase!
                </p>
              </div>
            </div>

            {/* Size/Length Selection */}
            {(product.category === 'rings' || product.category === 'bangles') && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Select Size</h4>
                <div className="grid grid-cols-5 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 border rounded-lg text-sm transition-colors ${
                        selectedSize === size
                          ? 'bg-yellow-500 text-white border-yellow-500'
                          : 'border-gray-300 hover:border-yellow-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.category === 'necklaces' && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Select Length</h4>
                <div className="grid grid-cols-3 gap-2">
                  {lengths.map((length) => (
                    <button
                      key={length}
                      onClick={() => setSelectedLength(length)}
                      className={`py-2 px-3 border rounded-lg text-sm transition-colors ${
                        selectedLength === length
                          ? 'bg-yellow-500 text-white border-yellow-500'
                          : 'border-gray-300 hover:border-yellow-400'
                      }`}
                    >
                      {length}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => onAddToCart(product.id)}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors">
                Buy Now
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="w-5 h-5 text-green-500" />
                <span>BIS Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Truck className="w-5 h-5 text-blue-500" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <RotateCcw className="w-5 h-5 text-purple-500" />
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Award className="w-5 h-5 text-yellow-500" />
                <span>Lifetime Warranty</span>
              </div>
            </div>

            {/* Product Specifications */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Product Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Product Type</span>
                  <span className="font-medium">{product.specifications.productType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Brand</span>
                  <span className="font-medium">{product.specifications.brand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gender</span>
                  <span className="font-medium">{product.specifications.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Metal Purity</span>
                  <span className="font-medium">{product.specifications.metalPurity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Metal Color</span>
                  <span className="font-medium">{product.specifications.metalColor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gross Weight</span>
                  <span className="font-medium">{product.specifications.grossWeight}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Net Weight</span>
                  <span className="font-medium">{product.specifications.netWeight}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certification</span>
                  <span className="font-medium">{product.specifications.certification}</span>
                </div>
                <div className="flex justify-between md:col-span-2">
                  <span className="text-gray-600">Hallmark License</span>
                  <span className="font-medium">{product.specifications.hallmarkLicense}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;