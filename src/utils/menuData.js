export const CATEGORIES = [
    "Main Course (Veg)",
    "Main Course (Non-Veg)",
    "Rice & Noodles",
    "Breads",
    "Soups & Sides"
];

export const MENU_ITEMS = [
    // Main Course (Veg)
    {
        id: 'kadai-paneer',
        name: 'Kadai Paneer',
        category: 'Main Course (Veg)',
        variants: [
            { name: 'Half', price: 90 },
            { name: 'Full', price: 160 }
        ],
        isVeg: true
    },
    {
        id: 'rajma',
        name: 'Rajma',
        category: 'Main Course (Veg)',
        variants: [
            { name: 'Half', price: 60 },
            { name: 'Full', price: 110 }
        ],
        isVeg: true
    },
    {
        id: 'dal-tadka',
        name: 'Dal Tadka (Toor Dal)',
        category: 'Main Course (Veg)',
        variants: [
            { name: 'Half', price: 60 },
            { name: 'Full', price: 110 }
        ],
        isVeg: true
    },
    {
        id: 'chole',
        name: 'Chole',
        category: 'Main Course (Veg)',
        variants: [
            { name: 'Half', price: 60 },
            { name: 'Full', price: 110 }
        ],
        isVeg: true
    },
    {
        id: 'kadhi-pakoda',
        name: 'Kadhi Pakoda',
        category: 'Main Course (Veg)',
        variants: [
            { name: 'Half', price: 60 },
            { name: 'Full', price: 110 }
        ],
        isVeg: true
    },
    {
        id: 'paneer-bhurji',
        name: 'Paneer Bhurji',
        category: 'Main Course (Veg)',
        variants: [
            { name: 'Half', price: 100 },
            { name: 'Full', price: 180 }
        ],
        isVeg: true
    },

    // Main Course (Non-Veg)
    {
        id: 'chicken-curry',
        name: 'Chicken Curry',
        category: 'Main Course (Non-Veg)',
        variants: [
            { name: '2 pcs', price: 90 },
            { name: '4 pcs', price: 160 },
            { name: '8 pcs', price: 300 }
        ],
        isVeg: false
    },
    {
        id: 'butter-chicken',
        name: 'Butter Chicken',
        category: 'Main Course (Non-Veg)',
        variants: [
            { name: '2 pcs', price: 100 },
            { name: '4 pcs', price: 180 },
            { name: '8 pcs', price: 330 }
        ],
        isVeg: false
    },
    {
        id: 'egg-curry',
        name: 'Egg Curry',
        category: 'Main Course (Non-Veg)',
        variants: [
            { name: '2 Eggs', price: 60 },
            { name: '4 Eggs', price: 110 }
        ],
        isVeg: false
    },
    {
        id: 'egg-bhurji',
        name: 'Egg Bhurji',
        category: 'Main Course (Non-Veg)',
        variants: [
            { name: 'Half', price: 70 },
            { name: 'Full', price: 120 }
        ],
        isVeg: false
    },
    {
        id: 'mutton',
        name: 'Mutton',
        category: 'Main Course (Non-Veg)',
        variants: [],
        priceDisplay: 'On Call / On Demand',
        isVeg: false,
        availableScript: false // Special handling
    },

    // Soups & Sides
    {
        id: 'veg-manchow',
        name: 'Veg Manchow Soup',
        category: 'Soups & Sides',
        price: 70,
        isVeg: true
    },
    {
        id: 'chicken-manchow',
        name: 'Chicken Manchow Soup',
        category: 'Soups & Sides',
        price: 110,
        isVeg: false
    },
    {
        id: 'boondi-raita',
        name: 'Boondi Raita',
        category: 'Soups & Sides',
        price: 50,
        isVeg: true
    },

    // Rice & Noodles
    {
        id: 'veg-chowmein',
        name: 'Veg Chowmein',
        category: 'Rice & Noodles',
        variants: [
            { name: 'Half', price: 60 },
            { name: 'Full', price: 110 }
        ],
        isVeg: true
    },
    {
        id: 'veg-macaroni',
        name: 'Veg Macaroni',
        category: 'Rice & Noodles',
        variants: [
            { name: 'Half', price: 60 },
            { name: 'Full', price: 110 }
        ],
        isVeg: true
    },
    {
        id: 'plain-rice',
        name: 'Plain Rice',
        category: 'Rice & Noodles',
        variants: [
            { name: 'Half', price: 60 },
            { name: 'Full', price: 110 }
        ],
        isVeg: true
    },
    {
        id: 'jeera-rice',
        name: 'Jeera Rice',
        category: 'Rice & Noodles',
        variants: [
            { name: 'Half', price: 70 },
            { name: 'Full', price: 120 }
        ],
        isVeg: true
    },

    // Breads
    {
        id: 'tawa-roti',
        name: 'Tawa Roti',
        category: 'Breads',
        price: 8,
        isVeg: true
    },
    {
        id: 'plain-paratha',
        name: 'Plain Paratha',
        category: 'Breads',
        price: 15,
        isVeg: true
    },
    {
        id: 'pyaz-paratha',
        name: 'Pyaz Paratha',
        category: 'Breads',
        price: 30,
        isVeg: true
    },
    {
        id: 'aloo-pyaz-paratha',
        name: 'Aloo Pyaz Paratha',
        category: 'Breads',
        price: 35,
        isVeg: true
    },
    {
        id: 'puri',
        name: 'Puri (6 pcs)',
        category: 'Breads',
        price: 40,
        isVeg: true
    }
];
