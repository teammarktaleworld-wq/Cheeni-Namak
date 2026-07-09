import React from 'react';

const Header = ({ cartCount, onCartClick }) => {
    return (
        <header className="bg-[#FFF8F0]/90 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200/50 transition-all duration-300">
            <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">

                {/* Logo & Brand */}
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-sm hover:scale-105 transition-transform">
                        <img src="/logo_v2.png" alt="Cheeni Namak Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-baseline gap-2">
                            <h1 className="text-2xl md:text-3xl font-serif text-brand-red font-black tracking-tight leading-none">
                                Cheeni <span style={{ fontFamily: '"Lobster Two", cursive', fontSize: '1.2em' }}>N</span>amak
                            </h1>
                        </div>
                        <p className="text-sm font-medium text-[#8D6E63] italic mb-1">
                            by Kaarthika
                        </p>

                        {/* Badges - Desktop */}
                        <div className="hidden md:flex gap-2">
                            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-50 border border-green-200 text-[10px] font-bold uppercase tracking-wider text-green-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                24/7 Open
                            </span>
                            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[10px] font-bold uppercase tracking-wider text-orange-700">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                Delhi Delivery
                            </span>
                        </div>
                    </div>
                </div>

                {/* Badges - Mobile (Below title if space is tight, or just hide/show differently) 
                    Actually, let's keep them hidden on very small screens or stack them.
                */}

                {/* Actions */}
                <div className="flex items-center gap-3 md:gap-6">
                    {/* Instagram Link */}
                    <a
                        href="https://www.instagram.com/cheeninamakind/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 md:p-3 rounded-full hover:bg-gray-100 transition-all border border-transparent hover:border-gray-200 group"
                        aria-label="Instagram"
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-[#E1306C] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.163 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                    {/* WhatsApp CTA */}
                    <a
                        href="https://wa.me/919217713285"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden md:flex flex-col items-end group"
                    >
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5">Order Now</span>
                        <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-200 group-hover:border-green-400 transition-colors">
                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.029.575 1.936.883 3.191.883 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.586-5.768-5.767-5.768zm0 0l-1.623.001-.001.002.001-.002zm0 10.775c-.994 0-1.78-.291-2.527-.723l-.181-.106-1.597.419.426-1.558-.119-.188c-.5-.796-.757-1.58-.756-2.613.001-2.6 1.944-4.409 4.757-4.409 2.613 0 4.755 1.808 4.755 4.408 0 2.602-2.14 4.77-4.758 4.77z" /></svg>
                            <span className="text-sm font-black text-gray-800 font-sans">+91 9217713285</span>
                        </div>
                    </a>

                    {/* Cart Button */}
                    <button
                        onClick={onCartClick}
                        className="relative group p-3 rounded-full hover:bg-gray-100 transition-all border border-transparent hover:border-gray-200"
                        aria-label="View Cart"
                    >
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700 group-hover:text-brand-red transition-colors">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 5.68c.497 2.237.745 3.356.096 4.192C20.407 19.333 19.266 19.333 16.983 19.333H7.017c-2.283 0-3.424 0-3.97-.954-.549-.958-.401-2.078.096-4.192l1.263-5.68c.545-2.453.818-3.68 1.83-4.32C6.265 4.25 7.525 4.25 10.046 4.25h3.91c2.52 0 3.78 0 4.796.812 1.012.64 1.285 1.867 1.829 4.32z" />
                            </svg>
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full shadow-sm ring-2 ring-white">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                    </button>

                    {/* Mobile Only: Menu Toggle (if needed) or simple Contact Icon */}
                    <a
                        href="https://wa.me/919217713285"
                        className="md:hidden p-2 rounded-full bg-green-50 text-green-600 border border-green-200"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-.967-.272-.297-.471-.421-.644-.421-.174 0-.372.002-.57.002-.198 0-.52.074-.793.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306.941.488 1.294.551.486.087 1.758-.149 2.006-.843.248-.694.0248-.843.173-.967.124-.124.467-.442.194-.572z" /></svg>
                    </a>
                </div>
            </div>

            {/* Mobile Badges Row - Visible only on small screens */}
            <div className="md:hidden px-4 pb-3 flex items-center justify-center gap-3">
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-50 border border-green-100 text-[10px] font-bold uppercase tracking-wider text-green-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    24/7 Open
                </span>
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-50 border border-orange-100 text-[10px] font-bold uppercase tracking-wider text-orange-700">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   Muzaffarpur, Bihar
                </span>
            </div>
        </header>
    );
};

export default Header;
