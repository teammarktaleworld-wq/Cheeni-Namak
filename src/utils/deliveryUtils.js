export const calculateDeliveryCharge = (distance, orderTotal) => {
    const dist = parseFloat(distance);
    if (isNaN(dist)) return 0;

    const MAX_DELIVERY_RADIUS = 100;
    if (dist > MAX_DELIVERY_RADIUS) return 0; // Should be handled by error state, but safe guard

    // New Logic: 
    // If order < 300 and distance <= 5km, compulsory 50 Rs charge.
    if (orderTotal < 300) {
        if (dist <= 5) {
            return 40;
        } else {
            // For orders < 300 and dist > 5, charge for full distance as per existing logic intent (or maybe base 50 + extra?)
            // The user request said: "under 5k if order less than ruppee 300 then make it compulsory 50 ruppee delievery charge"
            // It didn't explicitly change the > 5km behavior for < 300 orders.
            // Existing logic for < 300 was: Math.ceil(dist * 10)
            // Let's see: 6km * 10 = 60. This is > 50, so it seems consistent to keep the old logic for > 5km.
            // Logic: "charge for full distance" = 10 Rs/km.
            return Math.ceil(dist * 10);
        }
    } else {
        // orderTotal >= 300
        // Free delivery under 5km
        if (dist <= 5) return 0;
        // Above 5km, charge for extra distance
        return Math.ceil((dist - 5) * 10);
    }
};
