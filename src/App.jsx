import React, { useState } from 'react';
import Header from './components/Header';
import MenuItem from './components/MenuItem';
import HeroBanner from './components/HeroBanner';
import Cart from './components/Cart';
import ReviewCarousel from './components/ReviewCarousel';
import DietaryToggle from './components/DietaryToggle';
import FeaturesSection from './components/FeaturesSection';
import { MENU_ITEMS, CATEGORIES } from './utils/menuData';

// Decoration Images
import kadaiPaneerImg from './assets/dishes/kadai_paneer.png';
import butterChickenImg from './assets/dishes/butter_chicken.png';
import vegManchowImg from './assets/dishes/veg_manchow.png';

const App = () => {
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);


  const [dietaryFilter, setDietaryFilter] = useState('all');

  const addToCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[product.id]) {
        newCart[product.id] = {
          ...newCart[product.id],
          quantity: newCart[product.id].quantity + 1,
        };
      } else {
        newCart[product.id] = { ...product, quantity: 1 };
      }
      return newCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (!newCart[id]) return prevCart;

      if (newCart[id].quantity > 1) {
        newCart[id] = { ...newCart[id], quantity: newCart[id].quantity - 1 };
      } else {
        delete newCart[id];
      }
      return newCart;
    });
  };

  const removeItemFully = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[id];
      return newCart;
    });
  };

  const clearCart = () => setCart({});

  const total = Object.values(cart).reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

  // Filter Menu Items based on selection
  const filteredItems = MENU_ITEMS.filter(item => {
    if (dietaryFilter === 'veg') return item.isVeg === true;
    if (dietaryFilter === 'non-veg') return item.isVeg === false;
    return true;
  });

  // Group items by category
  const menuByCategory = CATEGORIES.reduce((acc, category) => {
    const items = filteredItems.filter(item => item.category === category);
    if (items.length > 0) {
      acc[category] = items;
    }
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-[#FFF8F0] font-sans selection:bg-brand-red selection:text-white">
      <Header cartCount={cartItemCount} onCartClick={() => setIsCartOpen(true)} />

      <main className="container mx-auto px-4 py-8 max-w-6xl">


        {/* Sales-Oriented Hero Banner (Food Slides) */}
        <HeroBanner />

        {/* Why Choose Us Features */}
        <FeaturesSection />

        {/* Categories & Menu */}
        <div id="menu-section" className="pt-10">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Explore Our Menu</h2>
            <p className="text-gray-500 mb-8">Select your preference below</p>
            <DietaryToggle currentFilter={dietaryFilter} onFilterChange={setDietaryFilter} />
          </div>

          {Object.keys(menuByCategory).length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No items found for this selection.</p>
            </div>
          ) : (
            CATEGORIES.map((category) => {
              const items = menuByCategory[category];
              if (!items) return null;

              return (
                <section key={category} className="mb-20">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-900 relative inline-block">
                      {category}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-brand-red rounded-full"></div>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                      <MenuItem
                        key={item.id}
                        item={item}
                        cart={cart}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                      />
                    ))}
                  </div>
                </section>
              );
            })
          )}
        </div>

        {/* Customer Reviews */}
        <div className="bg-white rounded-3xl p-8 mb-20 shadow-xl border border-gray-100">
          <h2 className="text-center text-3xl font-serif font-bold text-gray-800 mb-8">They Love Us</h2>
          <ReviewCarousel />
        </div>

      </main>

      {/* Modern Clean Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-left">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">C</div>
                <h3 className="font-serif text-2xl font-bold text-gray-900">Cheeni Namak</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Authentic homemade food delivered straight to your doorstep. Experience the taste of pure love and tradition.
              </p>
              <div className="flex gap-4">
                {/* Social Links */}
                <a href="https://www.instagram.com/cheeninamak00/" target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-colors cursor-pointer" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61586267980120" target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-colors cursor-pointer" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href="https://www.linkedin.com/company/111240368/admin/dashboard/" target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-colors cursor-pointer" aria-label="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9H12.906v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Navigate</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-brand-red transition-colors">Home</a></li>
                <li><a href="#menu-section" className="hover:text-brand-red transition-colors">Menu</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">About</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Reviews</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-red shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>Sec 14, Dwarka,<br />New Delhi 110078</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-brand-red shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>+91 9667334797</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-brand-red shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a href="mailto:cheeninamak00@gmail.com" className="hover:text-brand-red transition-colors">cheeninamak00@gmail.com</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Experience</h4>
              <p className="text-gray-500 text-sm mb-4">
                Order now and enjoy the taste of home. We verify every dish for quality and hygiene.
              </p>
              <span className="text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">100% Hygiene Verified</span>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p>&copy; 2026 Cheeni Namak. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-600">Privacy Policy</a>
              <a href="#" className="hover:text-gray-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <Cart
        cartItems={cart}
        total={total}
        clearCart={clearCart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(!isCartOpen)}
        removeItem={removeItemFully}
      />

      {/* WhatsApp Chat Mascot/FAB */}
      <a
        href="https://wa.me/919667334797"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-5 rounded-full shadow-2xl flex items-center gap-2 transform transition-all hover:scale-105 hover:-translate-y-1 animate-bounce-subtle border-2 border-white ring-2 ring-black/5"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="font-bold hidden md:inline">Order via WhatsApp</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
