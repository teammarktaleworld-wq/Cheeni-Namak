import React, { useState, useEffect } from 'react';

const REVIEWS = [
    {
        id: 1,
        name: "Priya Sharma",
        rating: 5,
        text: "The food reminds me of my mom's cooking! The Butter Chicken is absolutely heavenly. Truly seedha ghar se flavour.",
        location: "Dwarka, Sec 12",
        date: "2 days ago",
        source: "Google",
        verified: true
    },
    {
        id: 2,
        name: "Rahul Verma",
        rating: 5,
        text: "Incredible packaging and timely delivery. The Handi Mutton was tender and full of authentic spices. Highly recommended!",
        location: "Kapashera",
        date: "1 week ago",
        source: "Google",
        verified: true
    },
    {
        id: 3,
        name: "Amit Dubey",
        rating: 4,
        text: "Great vegetarian options. The Dal Tadka and Kadai Paneer are my go-to orders for family dinners.",
        location: "Palam",
        date: "3 weeks ago",
        source: "Google",
        verified: true
    },
    {
        id: 4,
        name: "Sneha Gupta",
        rating: 5,
        text: "Finally a place that serves non-oily, home-style food. Love their parathas and egg curry!",
        location: "Janakpuri",
        date: "1 month ago",
        source: "Google",
        verified: true
    },
    {
        id: 5,
        name: "Vikram Singh",
        rating: 5,
        text: "Best late night delivery in Dwarka. The chicken curry and rice combo is a lifesaver at 2 AM.",
        location: "Dwarka, Sec 6",
        date: "2 months ago",
        source: "Google",
        verified: true
    },
    {
        id: 6,
        name: "Anjali Mehta",
        rating: 5,
        text: "Hygiene is top notch. I visited their kitchen once and it was spotless. Safe for kids.",
        location: "Uttam Nagar",
        date: "3 months ago",
        source: "Google",
        verified: true
    }
];

const ReviewCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setItemsPerView(3);
            else if (window.innerWidth >= 768) setItemsPerView(2);
            else setItemsPerView(1);
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextReview = () => {
        setCurrentIndex((prev) => (prev + 1) % (REVIEWS.length - itemsPerView + 1));
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev - 1 + (REVIEWS.length - itemsPerView + 1)) % (REVIEWS.length - itemsPerView + 1));
    };

    return (
        <section className="py-10 bg-transparent">
            <div className="container mx-auto px-4 max-w-7xl">

                <div className="relative overflow-hidden px-4 md:px-12">
                    <div
                        className="flex transition-transform duration-500 ease-in-out gap-6"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                    >
                        {REVIEWS.map((review) => (
                            <div
                                key={review.id}
                                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                            >
                                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 h-full flex flex-col relative group hover:shadow-xl transition-shadow">
                                    {/* Platform Badge */}
                                    <div className="absolute top-4 right-4 flex items-center gap-1">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                        </svg>
                                    </div>

                                    {/* User Header */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg bg-blue-500">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm leading-tight flex items-center gap-1">
                                                {review.name}
                                                {review.verified && (
                                                    <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                                )}
                                            </h4>
                                            <p className="text-xs text-gray-500">{review.date}</p>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex gap-0.5 mb-3 text-yellow-400">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                        "{review.text}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons (Outside on Desktop) */}
                    <button
                        onClick={prevReview}
                        className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg border border-gray-100 text-gray-700 transition-all hover:scale-110 z-10"
                        disabled={currentIndex === 0}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        onClick={nextReview}
                        className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg border border-gray-100 text-gray-700 transition-all hover:scale-110 z-10"
                        disabled={currentIndex >= REVIEWS.length - itemsPerView}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ReviewCarousel;
