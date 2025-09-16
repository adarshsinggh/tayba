import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import { products, categories } from './data/products';
import { Product, CartItem } from './types/product';

type View = 'home' | 'category' | 'product';

interface AppState {
  currentView: View;
  selectedCategory: string;
  selectedProduct: Product | null;
  cart: CartItem[];
  wishlist: string[];
}

function App() {
  const [state, setState] = useState<AppState>({
    currentView: 'home',
    selectedCategory: '',
    selectedProduct: null,
    cart: [],
    wishlist: []
  });

  const handleCategoryClick = (categoryId: string) => {
    setState(prev => ({
      ...prev,
      currentView: 'category',
      selectedCategory: categoryId,
      selectedProduct: null
    }));
  };

  const handleProductClick = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setState(prev => ({
        ...prev,
        currentView: 'product',
        selectedProduct: product
      }));
    }
  };

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setState(prev => ({
        ...prev,
        cart: [...prev.cart, { product, quantity: 1 }]
      }));
      
      // Show a simple alert (in a real app, you'd show a toast notification)
      alert(`${product.name} added to cart!`);
    }
  };

  const handleAddToWishlist = (productId: string) => {
    setState(prev => ({
      ...prev,
      wishlist: prev.wishlist.includes(productId)
        ? prev.wishlist.filter(id => id !== productId)
        : [...prev.wishlist, productId]
    }));
  };

  const handleBackToHome = () => {
    setState(prev => ({
      ...prev,
      currentView: 'home',
      selectedCategory: '',
      selectedProduct: null
    }));
  };

  const handleBackToCategory = () => {
    setState(prev => ({
      ...prev,
      currentView: 'category',
      selectedProduct: null
    }));
  };

  const getCategoryProducts = (categoryId: string): Product[] => {
    return products.filter(product => product.category === categoryId);
  };

  const getCategoryTitle = (categoryId: string): string => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : 'Products';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartCount={state.cart.length}
        wishlistCount={state.wishlist.length}
        onCategoryClick={handleCategoryClick}
      />

      {state.currentView === 'home' && (
        <HomePage
          onCategoryClick={handleCategoryClick}
          onProductClick={handleProductClick}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />
      )}

      {state.currentView === 'category' && (
        <ProductGrid
          products={getCategoryProducts(state.selectedCategory)}
          title={getCategoryTitle(state.selectedCategory)}
          onProductClick={handleProductClick}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
          onBack={handleBackToHome}
        />
      )}

      {state.currentView === 'product' && state.selectedProduct && (
        <ProductDetail
          product={state.selectedProduct}
          onBack={state.selectedCategory ? handleBackToCategory : handleBackToHome}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;