import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Toast from './components/Toast';
import Homepage from './pages/Homepage';
import WomanCollection from './pages/WomanCollection';
import ManCollection from './pages/ManCollection';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Concierge from './pages/Concierge';
import GiftShop from './pages/GiftShop';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('venroy-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('venroy-wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('venroy-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('venroy-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const addToCart = (product, size, color) => {
    const existingItem = cart.find(
      item => item.id === product.id && item.size === size && item.color === color
    );

    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id && item.size === size && item.color === color
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, size, color, quantity: 1 }]);
    }

    showToast(`${product.name} added to cart!`, 'success');
  };

  const removeFromCart = (productId, size, color) => {
    setCart(cart.filter(
      item => !(item.id === productId && item.size === size && item.color === color)
    ));
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (productId, size, color, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId, size, color);
    } else {
      setCart(cart.map(item =>
        item.id === productId && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const toggleWishlist = (product) => {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    if (isInWishlist) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
      showToast('Removed from wishlist', 'info');
    } else {
      setWishlist([...wishlist, product]);
      showToast('Added to wishlist!', 'success');
    }
  };

  return (
    <Router>
      <div className="app">
        <Navigation cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
        <main>
          <Routes>
            <Route path="/" element={<Homepage addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
            <Route path="/woman" element={<WomanCollection addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
            <Route path="/man" element={<ManCollection addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
            <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
            <Route path="/concierge" element={<Concierge />} />
            <Route path="/gift-shop" element={<GiftShop addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
          </Routes>
        </main>
        <Footer />
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      </div>
    </Router>
  );
}

export default App;
