import React from 'react';

const Header = ({ cartCount, onCartClick }) => {
    return (
        <header className="bg-brand-beige border-b-4 border-brand-red sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-brand-red">
                        <img src="/logo.jpg" alt="Cheeni Namak Logo" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-serif text-brand-red font-bold leading-tight">
                            Cheeni Namak
                        </h1>
                        <p className="text-sm md:text-base font-sans text-brand-dark italic">
                            Seedha ghar se
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block text-right text-brand-dark">
                        <p className="font-bold">Order on WhatsApp</p>
                        <p className="text-brand-red font-bold">+91 9667334797</p>
                    </div>

                    <button
                        onClick={onCartClick}
                        className="relative p-2 text-brand-red hover:bg-brand-red/10 rounded-full transition-colors"
                        aria-label="View Cart"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-brand-dark text-brand-beige text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-brand-beige">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
