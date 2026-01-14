import React, { useState } from 'react';

const MenuItem = ({ item, cart, addToCart, removeFromCart }) => {
    const [selectedVariant, setSelectedVariant] = useState(item.variants && item.variants.length > 0 ? item.variants[0] : null);
    const [spicyLevel, setSpicyLevel] = useState('Medium');

    const getQuantity = () => {
        let key = item.id;
        if (selectedVariant) {
            key = `${key}-${selectedVariant.name}`;
        }
        if (item.hasSpicyOption) {
            key = `${key}-${spicyLevel}`;
        }
        return cart[key] ? cart[key].quantity : 0;
    };

    const handleAdd = () => {
        let productToAdd = { ...item };
        let variantName = null;
        let price = item.price;
        let id = item.id;

        if (selectedVariant) {
            variantName = selectedVariant.name;
            price = selectedVariant.price;
            id = `${id}-${variantName}`;
            productToAdd = { ...productToAdd, variant: variantName, price: price };
        } else {
            // Single price item
            productToAdd = { ...productToAdd, price: item.price };
        }

        if (item.hasSpicyOption) {
            id = `${id}-${spicyLevel}`;
            productToAdd = { ...productToAdd, spicyLevel: spicyLevel, id: id, baseId: item.id };
        } else {
            productToAdd = { ...productToAdd, id: id, baseId: item.id };
        }

        addToCart(productToAdd);
    };

    const handleRemove = () => {
        let id = item.id;
        if (selectedVariant) {
            id = `${id}-${selectedVariant.name}`;
        }
        if (item.hasSpicyOption) {
            id = `${id}-${spicyLevel}`;
        }
        removeFromCart(id);
    };

    const quantity = getQuantity();

    if (item.priceDisplay) {
        return (
            <div className="bg-white rounded-xl shadow-sm p-4 border border-brand-beige/50 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-serif text-lg font-bold text-brand-dark">{item.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${item.isVeg ? 'border-green-600 text-green-700 bg-green-50' : 'border-red-600 text-red-700 bg-red-50'}`}>
                                {item.isVeg ? 'VEG' : 'NON-VEG'}
                            </span>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="block font-bold text-brand-red">{item.priceDisplay}</span>
                    </div>
                </div>
                <p className="mt-4 text-sm text-gray-500 italic">Call to order</p>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group transform hover:-translate-y-1">
            {/* Image Section */}
            <div className="h-56 overflow-hidden relative">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                    <span className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-md ${item.isVeg ? 'bg-white text-green-700 border border-green-200' : 'bg-white text-red-700 border border-red-200'}`}>
                        {item.isVeg ? 'VEG' : 'NON-VEG'}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="font-serif text-xl font-bold text-gray-800 leading-tight">{item.name}</h3>
                    </div>
                    {/* Rating Badge */}
                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1 bg-green-100 px-1.5 py-0.5 rounded-md border border-green-200">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`w-3 h-3 ${i < Math.floor(item.rating) ? 'text-green-700' : 'text-green-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                        </div>
                        <span className="text-xs font-bold text-gray-700">{item.rating}</span>
                        <span className="text-xs text-gray-400">({item.reviewCount} reviews)</span>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{item.description}</p>
                </div>

                <div className="flex-1 space-y-4">
                    {item.variants && item.variants.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {item.variants.map((variant) => (
                                <button
                                    key={variant.name}
                                    onClick={() => setSelectedVariant(variant)}
                                    className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all ${selectedVariant && selectedVariant.name === variant.name
                                        ? 'bg-brand-red text-white border-brand-red shadow-md'
                                        : 'bg-transparent text-gray-500 border-gray-200 hover:border-brand-red hover:text-brand-red'
                                        }`}
                                >
                                    {variant.name}
                                </button>
                            ))}
                        </div>
                    ) : null}

                    {item.hasSpicyOption && (
                        <div>
                            <p className="text-[10px] text-gray-400 font-bold mb-1.5 uppercase tracking-wider">Spice Level</p>
                            <div className="flex flex-wrap gap-2">
                                {['Low', 'Medium', 'Full Spicy'].map((level) => (
                                    <button
                                        key={level}
                                        onClick={() => setSpicyLevel(level)}
                                        className={`text-[10px] px-2 py-1 rounded-full border transition-colors ${spicyLevel === level
                                            ? 'bg-orange-500 text-white border-orange-500'
                                            : 'bg-transparent text-gray-400 border-gray-200 hover:border-orange-500 hover:text-orange-500'
                                            }`}
                                    >
                                        {level}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-50 mb-1">
                    <span className="font-serif text-2xl font-bold text-gray-800">
                        ₹{selectedVariant ? selectedVariant.price : item.price}
                    </span>

                    {quantity === 0 ? (
                        <button
                            onClick={handleAdd}
                            className="bg-brand-red text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-brand-red/30 hover:bg-red-700 transition-all transform active:scale-95"
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <div className="flex items-center bg-gray-100 rounded-full px-1 py-1 shadow-inner">
                            <button
                                onClick={handleRemove}
                                className="w-8 h-8 flex items-center justify-center font-bold text-gray-600 hover:bg-white rounded-full transition-colors shadow-sm"
                            >
                                -
                            </button>
                            <span className="w-8 text-center font-bold text-gray-700">{quantity}</span>
                            <button
                                onClick={handleAdd}
                                className="w-8 h-8 flex items-center justify-center font-bold text-gray-600 hover:bg-white rounded-full transition-colors shadow-sm"
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
