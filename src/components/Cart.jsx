import React, { useState } from 'react';
import { calculateDeliveryCharge } from '../utils/deliveryUtils';

const Cart = ({ cartItems, total, isOpen, onClose, removeItem, addToCart, removeFromCart }) => {
    const [distance, setDistance] = useState('');
    const [isLocating, setIsLocating] = useState(false);
    const [locationError, setLocationError] = useState('');

    // Restaurant Coordinates (Sec 14, Dwarka, New Delhi)
    // const RESTAURANT_COORDS = { lat: 28.5983, lng: 77.0326 };
const RESTAURANT_COORDS = {
    lat: 26.1270262,
    lng: 85.3606277,
};
    const MAX_DELIVERY_RADIUS = 100; // km

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in km
        return d;
    };

    const deg2rad = (deg) => {
        return deg * (Math.PI / 180);
    };

    const handleLocateMe = () => {
        setIsLocating(true);
        setLocationError('');

        if (!navigator.geolocation) {
            setLocationError('Geolocation is not supported by your browser.');
            setIsLocating(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;
                const distKm = calculateDistance(RESTAURANT_COORDS.lat, RESTAURANT_COORDS.lng, userLat, userLng);

                // Adding a small buffer (1.2x) to account for road curvature vs straight line
                const roadDistanceEst = (distKm * 1.2).toFixed(1);

                if (parseFloat(roadDistanceEst) > MAX_DELIVERY_RADIUS) {
                    setDistance('');
                    setLocationError(`Sorry, we only deliver within ${MAX_DELIVERY_RADIUS}km of Muzaffarpur, Bihar.`);
                } else {
                    setDistance(roadDistanceEst);
                }
                setIsLocating(false);
            },
            (error) => {
                console.error("Error fetching location:", error);
                setLocationError('Unable to retrieve location. Please enter manually.');
                setIsLocating(false);
            }
        );
    };

    const deliveryCharge = calculateDeliveryCharge(distance, total);
    const finalTotal = total + deliveryCharge;

    const generateWhatsAppLink = () => {
        const phoneNumber = "919217713285";
        let message = "Namaste Cheeni Namak! I would like to place an order:\n\n";

        Object.values(cartItems).forEach(item => {
            const variantStr = item.variant ? `(${item.variant})` : '';
            const spicyStr = item.spicyLevel ? `[${item.spicyLevel}]` : '';
            message += `- ${item.name} ${variantStr} ${spicyStr} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
        });

        message += `\n*Subtotal: ₹${total}*`;
        message += `\n*Delivery Charge (${distance || 0} km): ₹${deliveryCharge}*`;
        message += `\n*Total Amount: ₹${finalTotal}*`;
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
                    <div className="container mx-auto pointer-events-auto max-w-md">
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
                <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
                    <div className="bg-white w-full max-w-md rounded-t-2xl sm:rounded-2xl max-h-[90vh] flex flex-col shadow-2xl animate-slide-up">
                        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-brand-beige rounded-t-2xl sticky top-0 z-10">
                            <h2 className="text-xl font-serif font-bold text-brand-dark">Your Order</h2>
                            <button onClick={onClose} className="p-2 text-gray-500 hover:text-brand-red">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="overflow-y-auto p-4 flex-1">
                            {Object.values(cartItems).map((item) => (
                                <div key={item.id} className="flex justify-between items-center py-4 border-b border-gray-50 last:border-0 relative group">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-3 h-3 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                                            <p className="font-bold text-brand-dark">{item.name}</p>
                                        </div>
                                        {item.variant && <p className="text-xs text-gray-500 ml-5">{item.variant}</p>}
                                        {item.spicyLevel && <p className="text-xs text-orange-600 ml-5">Spicy: {item.spicyLevel}</p>}
                                        {/* Quantity Controls */}
                                        <div className="flex items-center gap-3 ml-5 mt-2">
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-brand-dark transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="font-bold text-brand-dark w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => addToCart(item)}
                                                className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-brand-dark transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
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

                            <div className="mt-6 space-y-4">
                                {/* Delivery Section */}
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="block text-sm font-bold text-brand-dark">
                                            Delivery Distance (km)
                                        </label>
                                        {!distance && !locationError && (
                                            <span className="text-[10px] font-bold text-white bg-brand-red px-2 py-0.5 rounded-full animate-bounce shadow-md">
                                                👈 Click Locate to proceed
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={handleLocateMe}
                                            disabled={isLocating}
                                            className="w-full justify-center bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 disabled:bg-blue-300 flex items-center gap-1 relative overflow-hidden transition-all active:scale-95"
                                        >
                                            {isLocating ? (
                                                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                            {isLocating ? 'Locating...' : (distance ? `Location Found (${distance} km)` : 'Locate')}
                                        </button>
                                    </div>
                                    {locationError ? (
                                        <p className="text-xs text-red-500 mt-1">{locationError}</p>
                                    ) : (
                                        <p className={`text-xs mt-2 font-medium ${total < 300 && distance <= 5 ? 'text-brand-red animate-pulse' : 'text-green-600'}`}>
                                            {(() => {
                                                if (!distance) return "Please locate address to calculate delivery charge.";
                                                const dist = parseFloat(distance);
                                                if (dist > 5) return "Standard delivery rates apply for > 5km.";

                                                if (total < 300) {
                                                    const needed = 300 - total;
                                                    return `Add items worth ₹${needed} more for FREE Delivery! 🚀`;
                                                } else {
                                                    return "YAY! Free Delivery Unlocked! 🎉";
                                                }
                                            })()}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-dashed border-gray-300 space-y-2">
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Subtotal</span>
                                    <span>₹{total}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Delivery Charges</span>
                                    <span>₹{deliveryCharge}</span>
                                </div>
                                <div className="flex justify-between items-center text-xl font-bold text-brand-dark pt-2 border-t border-gray-200">
                                    <span>Total Amount</span>
                                    <span>₹{finalTotal}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-b-2xl shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                            <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 mb-3 flex items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange-500 shrink-0 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <p className="text-xs text-orange-800 font-medium leading-relaxed">
                                    Orders will be dispatched within 45 minutes as we prepare food fresh after confirmation.
                                </p>
                            </div>
                            <a
                                href={!locationError && distance ? generateWhatsAppLink() : undefined}
                                target={!locationError && distance ? "_blank" : undefined}
                                rel="noreferrer"
                                className={`block w-full text-white text-center font-bold py-3.5 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2
                                    ${locationError || !distance
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-[#25D366] hover:bg-[#128C7E]'
                                    }`}
                                onClick={(e) => {
                                    if (locationError || !distance) {
                                        e.preventDefault();
                                        if (!distance && !locationError) alert("Please enter delivery distance or use 'Locate' first.");
                                    }
                                }}
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
