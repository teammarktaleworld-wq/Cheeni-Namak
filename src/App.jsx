import React, { useState } from 'react';
import Header from './components/Header';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';
import { MENU_ITEMS, CATEGORIES } from './utils/menuData';

const App = () => {
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  // Group items by category
  const menuByCategory = CATEGORIES.reduce((acc, category) => {
    acc[category] = MENU_ITEMS.filter(item => item.category === category);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-brand-beige">
      <Header cartCount={cartItemCount} onCartClick={() => setIsCartOpen(true)} />

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero Section */}
        <div className="relative bg-brand-dark rounded-3xl overflow-hidden shadow-2xl mb-12">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-[url('/menu.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>

          <div className="relative z-10 px-6 py-16 md:py-24 text-center">
            <div className="inline-block border-2 border-[#FFD700] p-1 mb-6 rounded-lg rotate-45">
              <div className="w-3 h-3 bg-[#FFD700] rounded-sm"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#FFD700] mb-4 drop-shadow-xl tracking-wide">
              Authentic Home Flavors
            </h1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-brand-beige/50"></div>
              <p className="text-brand-beige font-medium text-lg md:text-2xl tracking-wider uppercase text-opacity-90">
                Seedha Ghar Se
              </p>
              <div className="h-[1px] w-12 bg-brand-beige/50"></div>
            </div>
            <p className="text-white/80 max-w-lg mx-auto italic font-light">
              Curated menu of North Indian delicacies made with love.
            </p>
          </div>
        </div>

        {/* About Section */}
        <section className="mb-16 text-center max-w-3xl mx-auto relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-red/10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24">
              <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.949 49.949 0 0 0-9.902 3.912l-.003.002-.34.18a.75.75 0 0 1-.707 0A50.009 50.009 0 0 0 7.5 12.174v-.224c0-.131.067-.248.182-.311a54.614 54.614 0 0 1 4.018-2.092c.579-.286 1.19-.575 1.833-.865.207-.093.408-.19.611-.29a6.032 6.032 0 0 0-2.292-1.015 6.032 6.032 0 0 0-3.1 1.015 9.095 9.095 0 0 0 2.292 2.378l2.604-1.954ZM12.75 15.696v6.73c0 .857-1.136 1.144-1.5 1.874V15.696a50.925 50.925 0 0 1-5.25-2.072v6.234a.75.75 0 0 0 .58.73c1.55.338 2.67 1.72 2.67 3.328a.75.75 0 0 1-1.5 0 4.5 4.5 0 0 0-4.484-4.5 2.25 2.25 0 0 0 2.25-2.25V9.414a51.522 51.522 0 0 1-4.018 2.092.75.75 0 0 0-.182.311v11.33c0 .19.066.375.187.525a4.52 4.52 0 0 0 4.29 4.29.75.75 0 0 0 .524-.186c.362-.317.905-.434 1.385-.298.48.136.78.618.705 1.115a.75.75 0 0 1-1.488-.13c.017-.076-.002-.123-.002-.123a1.5 1.5 0 0 0-1.43-1.43c.003 0 .046.02.126.002.497-.075.979-.376 1.115-.856a.75.75 0 0 1 1.411.51c-.48 1.314-1.983 2.05-3.328 1.67a.75.75 0 0 0-.73.58 2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25.75.75 0 0 0-.73-.58c-1.345.38-2.848-.356-3.328-1.67a.75.75 0 0 1 1.411-.51c.137.48.618.781 1.115.856.08.018.123-.002.126-.002a1.5 1.5 0 0 0-1.43 1.43c0 0-.019.047-.002.123a.75.75 0 0 1-1.488.13c-.075-.497.225-.979.705-1.115.48-.136 1.023-.019 1.385.298a.75.75 0 0 0 .524.186c.121-.15.187-.335.187-.525v-11.33a.75.75 0 0 0-.182-.311 51.522 51.522 0 0 1-4.018-2.092v7.834a2.25 2.25 0 0 0 2.25 2.25 4.5 4.5 0 0 0-4.484 4.5.75.75 0 0 1-1.5 0c0-1.608 1.12-2.99 2.67-3.328a.75.75 0 0 0 .58-.73v-6.234a50.925 50.925 0 0 1-5.25 2.072Z" />
            </svg>
          </div>

          <p className="text-xl md:text-2xl text-brand-dark/80 leading-relaxed font-serif italic mb-6">
            "We bring you the warmth and taste of a mother's kitchen. Just pure, wholesome, home-cooked food."
          </p>

          <div className="flex justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-brand-red"></div>
            <div className="w-2 h-2 rounded-full bg-brand-red/50"></div>
            <div className="w-2 h-2 rounded-full bg-brand-red/20"></div>
          </div>

          <p className="text-sm text-brand-dark/60 font-medium tracking-wide uppercase">
            Zero Preservatives &bull; Authentic Spices &bull; Made with Love
          </p>
        </section>

        {/* Menu Card Image Section */}
        <section className="mb-12 max-w-3xl mx-auto px-4">
          <div className="relative group rounded-2xl overflow-hidden shadow-xl border-4 border-brand-beige">
            <img
              src="/menu-card.jpg"
              alt="Cheeni Namak Menu Card"
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <span className="text-white font-bold text-lg bg-brand-red px-4 py-2 rounded-full shadow-lg">
                Our Full Menu
              </span>
            </div>
          </div>
        </section>

        {CATEGORIES.map((category) => {
          const items = menuByCategory[category];
          if (!items || items.length === 0) return null;

          return (
            <section key={category} className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-brand-dark mb-6 border-l-4 border-brand-red pl-3">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        })}

      </main>

      {/* Get in Touch Section */}
      <footer className="mt-0 py-16 px-4 bg-brand-dark text-center text-brand-beige w-full">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#FFD700] mb-4">Get in Touch</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Place your order or ask any question. We're ready to serve you!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="tel:+919667334797"
            className="bg-[#FFD700] text-brand-dark font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 5.25V4.5Z" clipRule="evenodd" />
            </svg>
            Call to Order
          </a>
          <a
            href="https://wa.me/919667334797"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-[#FFD700] text-[#FFD700] font-bold py-3 px-8 rounded-full hover:bg-[#FFD700]/10 transition-colors flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Chat
          </a>
        </div>

        <div className="border-t border-brand-beige/20 pt-12 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
          <div>
            <h3 className="text-[#FFD700] font-serif text-xl font-bold mb-4">Cheeni Namak</h3>
            <p className="text-brand-beige/80 text-sm">
              Authentic homemade food delivered straight to your doorstep. Experience the taste of pure love and tradition.
            </p>
          </div>
          <div>
            <h3 className="text-[#FFD700] font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-brand-beige/80 text-sm">
              <li><a href="#" className="hover:text-[#FFD700]">Menu</a></li>
              <li><a href="#" className="hover:text-[#FFD700]">About Us</a></li>
              <li><a href="https://wa.me/919667334797" className="hover:text-[#FFD700]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFD700] font-serif text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-brand-beige/80 text-sm">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#FFD700]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                +91 9667334797
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#FFD700]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Sec 14, Dwarka, New Delhi 110078
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-beige/10 pt-6 text-center text-xs text-brand-beige/40">
          &copy; 2026 Cheeni Namak. All Rights Reserved.
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
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-5 rounded-full shadow-2xl flex items-center gap-2 transform transition-all hover:scale-105 hover:-translate-y-1 animate-bounce-subtle border-2 border-white"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="font-bold hidden md:inline">Chat with us</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-6 md:h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
