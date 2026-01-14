import React, { useState, useEffect } from 'react';

// Images
import kadaiPaneerImg from '../assets/dishes/kadai_paneer.png';
import butterChickenImg from '../assets/dishes/butter_chicken.png';
import vegManchowImg from '../assets/dishes/veg_manchow.png';

const SLIDES = [
    {
        id: 1,
        title: "Authentic Home Flavors",
        subtitle: "Seedha Ghar Se",
        description: "Experience the warmth of home-cooked meals delivered to your doorstep.",
        image: butterChickenImg,
        bgColor: "bg-[#FFF0E5]", // Soft Orange/Peach
        accentColor: "text-brand-red",
        badge: "Bestseller"
    },
    {
        id: 2,
        title: "Fresh & Wholesome",
        subtitle: "Made with Love",
        description: "Zero preservatives, authentic spices, and 100% hygiene verified.",
        image: kadaiPaneerImg,
        bgColor: "bg-[#E6F4EA]", // Soft Green
        accentColor: "text-green-700",
        badge: "Veg & Non-Veg Options"
    },
    {
        id: 3,
        title: "Late Night Cravings?",
        subtitle: "We're Open 24/7",
        description: "Hot, delicious food delivered anywhere in Delhi, anytime.",
        image: vegManchowImg,
        bgColor: "bg-[#FFF8E1]", // Soft Yellow
        accentColor: "text-yellow-700",
        badge: "Delivery All Night"
    }
];

const HeroBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 4000); // Change every 4 seconds
        return () => clearInterval(timer);
    }, []);

    const slide = SLIDES[currentSlide];

    return (
        <div className="relative w-full max-w-6xl mx-auto mb-16 px-4 pt-8">
            <div className={`relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-colors duration-700 ${slide.bgColor} min-h-[500px] md:min-h-[450px] flex flex-col md:flex-row items-center`}>

                {/* Text Content */}
                <div className="flex-1 p-8 md:p-16 text-center md:text-left z-10">
                    <div className="inline-block mb-4 animate-fade-in-up">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white shadow-sm ${slide.accentColor}`}>
                            {slide.badge}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-black text-gray-900 mb-4 leading-tight animate-fade-in-up delay-100">
                        {slide.title}
                    </h1>

                    <h2 className={`text-2xl md:text-3xl font-serif mb-6 ${slide.accentColor} animate-fade-in-up delay-100`}>
                        {slide.subtitle}
                    </h2>

                    <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed animate-fade-in-up delay-200">
                        {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
                        <button
                            onClick={() => document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-brand-red text-white px-8 py-3.5 rounded-full font-bold text-lg shadow-lg shadow-brand-red/30 hover:bg-red-700 hover:scale-105 transition-all transform"
                        >
                            Order Now
                        </button>
                        <a
                            href="https://wa.me/919667334797"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white text-gray-800 border border-gray-200 px-8 py-3.5 rounded-full font-bold text-lg shadow-sm hover:border-brand-red hover:text-brand-red transition-all"
                        >
                            Order on WhatsApp
                        </a>
                    </div>
                </div>

                {/* Image Content */}
                <div className="flex-1 relative h-64 md:h-full w-full flex items-center justify-center">
                    {/* Background Blob */}
                    <div className="absolute w-[120%] h-[120%] bg-white/40 rounded-full blur-3xl -z-10 transform translate-x-10 translate-y-10"></div>

                    {/* Key Image */}
                    <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] transition-all duration-700 transform hover:scale-105">
                        <img
                            key={slide.id} // Key change triggers animation
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-contain drop-shadow-2xl animate-float-slow"
                        />
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {SLIDES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-brand-red w-8' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
