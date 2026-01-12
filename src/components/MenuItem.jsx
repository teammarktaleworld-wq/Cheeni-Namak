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
        <div className="bg-white rounded-xl shadow-sm p-4 border border-brand-beige/50 hover:shadow-md transition-shadow flex flex-col justify-between h-full">
            <div>
                <div className="flex justify-between items-start">
                    <h3 className="font-serif text-lg font-bold text-brand-dark">{item.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full border h-fit ${item.isVeg ? 'border-green-600 text-green-700 bg-green-50' : 'border-red-600 text-red-700 bg-red-50'}`}>
                        &#9679;
                    </span>
                </div>

                {item.variants && item.variants.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                        {item.variants.map((variant) => (
                            <button
                                key={variant.name}
                                onClick={() => setSelectedVariant(variant)}
                                className={`text-xs px-3 py-1 rounded-full border transition-colors ${selectedVariant && selectedVariant.name === variant.name
                                    ? 'bg-brand-red text-white border-brand-red'
                                    : 'bg-white text-gray-600 border-gray-300 hover:border-brand-red'
                                    }`}
                            >
                                {variant.name}
                            </button>
                        ))}
                    </div>
                ) : null}

                {item.hasSpicyOption && (
                    <div className="mt-3">
                        <p className="text-xs text-brand-dark/60 font-medium mb-1 uppercase tracking-wider">Spicy Level:</p>
                        <div className="flex flex-wrap gap-2">
                            {['Low', 'Medium', 'Full Spicy'].map((level) => (
                                <button
                                    key={level}
                                    onClick={() => setSpicyLevel(level)}
                                    className={`text-xs px-3 py-1 rounded-full border transition-colors ${spicyLevel === level
                                        ? 'bg-orange-500 text-white border-orange-500'
                                        : 'bg-white text-gray-600 border-gray-300 hover:border-orange-500'
                                        }`}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-lg text-brand-dark">
                    ₹{selectedVariant ? selectedVariant.price : item.price}
                </span>

                {quantity === 0 ? (
                    <button
                        onClick={handleAdd}
                        className="bg-white text-brand-red border border-brand-red px-4 py-1.5 rounded-lg text-sm font-bold uppercase shadow-sm hover:bg-brand-red hover:text-white transition-colors"
                    >
                        ADD
                    </button>
                ) : (
                    <div className="flex items-center bg-brand-red text-white rounded-lg px-2 py-1 shadow-sm">
                        <button
                            onClick={handleRemove}
                            className="w-7 h-7 flex items-center justify-center font-bold text-lg"
                        >
                            -
                        </button>
                        <span className="w-6 text-center font-bold text-sm">{quantity}</span>
                        <button
                            onClick={handleAdd}
                            className="w-7 h-7 flex items-center justify-center font-bold text-lg"
                        >
                            +
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuItem;
