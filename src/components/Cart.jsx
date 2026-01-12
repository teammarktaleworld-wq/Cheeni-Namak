import React, { useState } from 'react';

const Cart = ({ cartItems, total, isOpen, onClose, removeItem }) => {
    const generateWhatsAppLink = () => {
        const phoneNumber = "919667334797";
        let message = "Namaste Cheeni Namak! I would like to place an order:\n\n";

        Object.values(cartItems).forEach(item => {
            const variantStr = item.variant ? `(${item.variant})` : '';
            message += `- ${item.name} ${variantStr} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
        });

        message += `\n*Total Amount: ₹${total}*`;
        message += `\n\nPlease confirm my order.`;

        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    };

    if (Object.keys(cartItems).length === 0) return null;

    const itemCount = Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);

    // Only show the floating bar if there are items and the modal is CLOSED
    const showFloatingBar = itemCount > 0 && !isOpen;

    return (
        <>
            {/* Floating Bottom Bar (Mobile/Desktop Quick View) */}
            {showFloatingBar && (
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent z-40 pointer-events-none">
                    <div className="container mx-auto pointer-events-auto">
                        <button
                            onClick={onClose}
                            className="w-full bg-brand-red text-white py-3 px-6 rounded-xl shadow-lg flex justify-between items-center font-bold text-lg animate-bounce-subtle"
                        >
                            <span>{itemCount} Items | ₹{total}</span>
                            <span className="flex items-center gap-2">
                                View Cart
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            )}

            {/* Cart Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4">
                    <div className="bg-white w-full max-w-md rounded-t-2xl sm:rounded-2xl max-h-[80vh] flex flex-col shadow-2xl animate-slide-up">
                        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-brand-beige rounded-t-2xl">
                            <h2 className="text-xl font-serif font-bold text-brand-dark">Your Order</h2>
                            <button onClick={onClose} className="p-2 text-gray-500 hover:text-brand-red">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="overflow-y-auto p-4 flex-1">
                            {Object.values(cartItems).map((item) => (
                                <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0 relative group">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-3 h-3 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                                            <p className="font-bold text-brand-dark">{item.name}</p>
                                        </div>
                                        {item.variant && <p className="text-xs text-gray-500 ml-5">{item.variant}</p>}
                                        <p className="text-sm text-gray-600 ml-5">₹{item.price} x {item.quantity}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="font-bold text-brand-dark">
                                            ₹{item.price * item.quantity}
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                            aria-label="Remove item"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <div className="mt-4 pt-4 border-t border-dashed border-gray-300">
                                <div className="flex justify-between items-center text-lg font-bold text-brand-dark">
                                    <span>Total Amount</span>
                                    <span>₹{total}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-b-2xl">
                            <a
                                href={generateWhatsAppLink()}
                                target="_blank"
                                rel="noreferrer"
                                className="block w-full bg-[#25D366] text-white text-center font-bold py-3.5 rounded-xl shadow-lg hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Place Order on WhatsApp
                            </a>
                            <p className="text-center text-xs text-gray-400 mt-2">
                                This will open WhatsApp with your order details pre-filled.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
