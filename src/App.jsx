



import React, { useState, useEffect, useRef, useCallback } from "react";

import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import DietaryToggle from "./components/DietaryToggle";

import ReviewCarousel from "./components/ReviewCarousel";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import AnimatedCategoryHeading from "./components/AnimatedCategoryHeading";
import StaggeredGrid from "./components/StaggeredGrid";
import { RevealSection } from "./components/RevealSection";

import { MENU_ITEMS, CATEGORIES } from "./utils/menuData";

// ─── Dry / Gravy pairing helper ───────────────────────────────────────────────
function buildDisplayMenuItems(items) {
  const suffixRegex = /\s*\((Dry|Gravy)\)\s*$/i;
  const pairsByKey = {};

  items.forEach((item) => {
    const match = item.name.match(suffixRegex);
    if (!match) return;
    const baseName = item.name.replace(suffixRegex, "").trim();
    const key = `${item.category}__${baseName}`;
    if (!pairsByKey[key]) pairsByKey[key] = {};
    pairsByKey[key][match[1].toLowerCase()] = item;
  });

  const validKeys = new Set(
    Object.keys(pairsByKey).filter(
      (key) => pairsByKey[key].dry && pairsByKey[key].gravy,
    ),
  );
  const mergedKeys = new Set();
  const output = [];

  items.forEach((item) => {
    const match = item.name.match(suffixRegex);
    if (match) {
      const baseName = item.name.replace(suffixRegex, "").trim();
      const key = `${item.category}__${baseName}`;
      if (validKeys.has(key)) {
        if (mergedKeys.has(key)) return;
        mergedKeys.add(key);
        const pair = pairsByKey[key];
        output.push({
          id: pair.dry.id.replace(/-dry$/i, "") || `${pair.dry.id}-pair`,
          name: baseName,
          category: item.category,
          isDryGravyPair: true,
          dryGravy: { Dry: pair.dry, Gravy: pair.gravy },
        });
        return;
      }
    }
    output.push(item);
  });

  return output;
}

const DISPLAY_MENU_ITEMS = buildDisplayMenuItems(MENU_ITEMS);

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────
function useScrollReveal() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const els = document.querySelectorAll(".reveal:not(.revealed)");
    els.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  });
}

// ─── App ──────────────────────────────────────────────────────────────────────
const App = () => {
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [dietaryFilter, setDietaryFilter] = useState("all");

  useScrollReveal();

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const next = { ...prev };
      if (next[product.id]) {
        next[product.id] = { ...next[product.id], quantity: next[product.id].quantity + 1 };
      } else {
        next[product.id] = { ...product, quantity: 1 };
      }
      return next;
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => {
      const next = { ...prev };
      if (!next[id]) return prev;
      if (next[id].quantity > 1) {
        next[id] = { ...next[id], quantity: next[id].quantity - 1 };
      } else {
        delete next[id];
      }
      return next;
    });
  }, []);

  const removeItemFully = useCallback((id) => {
    setCart((prev) => { const n = { ...prev }; delete n[id]; return n; });
  }, []);

  const clearCart = useCallback(() => setCart({}), []);

  const total = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

  const filteredItems = DISPLAY_MENU_ITEMS.filter((item) => {
    const isVeg = item.isDryGravyPair ? item.dryGravy.Dry.isVeg : item.isVeg;
    if (dietaryFilter === "veg") return isVeg === true;
    if (dietaryFilter === "non-veg") return isVeg === false;
    return true;
  });

  const menuByCategory = CATEGORIES.reduce((acc, cat) => {
    const items = filteredItems.filter((i) => i.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {});

  return (
    <>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }
        .reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .category-heading-wrap .category-underline {
          display: block;
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 0%;
          height: 3px;
          background: #ef4444;
          border-radius: 9999px;
          transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
        }
        .category-heading-wrap.heading-revealed .category-underline {
          width: 55%;
        }
        .menu-card-wrapper > * {
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease;
          border-radius: 1.25rem;
          will-change: transform;
        }
        .menu-card-wrapper:hover > * {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 20px 48px -8px rgba(0,0,0,0.14);
        }
        img.dish-img {
          opacity: 0;
          transition: opacity 0.45s ease;
        }
        img.dish-img.img-loaded {
          opacity: 1;
        }
        .section-fade-1 { transition-delay: 0ms; }
        .section-fade-2 { transition-delay: 60ms; }
        .section-fade-3 { transition-delay: 120ms; }
        footer a {
          position: relative;
          text-decoration: none;
        }
        footer a::after {
          content: '';
          position: absolute;
          left: 0; bottom: -1px;
          width: 0; height: 1px;
          background: #ef4444;
          transition: width 0.25s ease;
        }
        footer a:hover::after { width: 100%; }
        .reviews-section { transition: box-shadow 0.3s ease; }
        .reviews-section:hover { box-shadow: 0 28px 64px -12px rgba(0,0,0,0.10); }
        @media (prefers-reduced-motion: reduce) {
          .reveal, .menu-card-wrapper > *, img.dish-img,
          .category-heading-wrap .category-underline {
            transition: none !important;
            animation: none !important;
          }
          .reveal { opacity: 1; transform: none; }
          .category-heading-wrap .category-underline { width: 55%; }
        }
      `}</style>

      <div className="min-h-screen bg-[#FFF8F0] font-sans selection:bg-brand-red selection:text-white">
        <Header
          cartCount={cartItemCount}
          onCartClick={() => setIsCartOpen(true)}
        />

        <main className="container mx-auto px-4 py-8 max-w-6xl">
          <RevealSection delay={0}>
            <HeroBanner />
          </RevealSection>

          <div id="menu-section" className="pt-10">
            <RevealSection delay={60} className="text-center mb-12">
              <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
                Explore Our Menu
              </h2>
              <p className="text-gray-500 mb-8">Select your preference below</p>
              <DietaryToggle
                currentFilter={dietaryFilter}
                onFilterChange={setDietaryFilter}
              />
            </RevealSection>

            {Object.keys(menuByCategory).length === 0 ? (
              <div className="text-center py-20 reveal revealed">
                <p className="text-xl text-gray-500">No items found for this selection.</p>
              </div>
            ) : (
              CATEGORIES.map((category) => {
                const items = menuByCategory[category];
                if (!items) return null;
                return (
                  <section key={category} className="mb-20">
                    <AnimatedCategoryHeading text={category} />
                    <StaggeredGrid
                      items={items}
                      cart={cart}
                      addToCart={addToCart}
                      removeFromCart={removeFromCart}
                    />
                  </section>
                );
              })
            )}
          </div>

          <RevealSection
            delay={0}
            className="reviews-section bg-white rounded-3xl p-8 mb-20 shadow-xl border border-gray-100"
          >
            <h2 className="text-center text-3xl font-serif font-bold text-gray-800 mb-8">
              They Love Us
            </h2>
            <ReviewCarousel />
          </RevealSection>
        </main>

        <Footer />

        <Cart
          cartItems={cart}
          total={total}
          clearCart={clearCart}
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(!isCartOpen)}
          removeItem={removeItemFully}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </div>
    </>
  );
};

export default App;