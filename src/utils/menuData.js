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
        isVeg: true,
        hasSpicyOption: true
    },
    {
        id: 'rajma',
        name: 'Rajma',
        category: 'Main Course (Veg)',
        variants: [
            { name: 'Half', price: 60 },
            { name: 'Full', price: 110 }
        ],
        isVeg: true,
        hasSpicyOption: true
    },
    {
        id: 'dal-tadka',
        name: 'Dal Tadka (Toor Dal)',
        category: 'Main Course (Veg)',
        variants: [
            { name: 'Half', price: 60 },
            { name: 'Full', price: 110 }
        ],
        isVeg: true,
        hasSpicyOption: true
    },
    {
        id: 'chole',
        name: 'Chole',
        category: 'Main Course (Veg)',
        variants: [
            { name: 'Half', price: 60 },
            { name: 'Full', price: 110 }
        ],
        isVeg: true,
        hasSpicyOption: true
    },
    {
        id: 'kadhi-pakoda',
        name: 'Kadhi Pakoda',
        category: 'Main Course (Veg)',
        variants: [
            { name: 'Half', price: 60 },
            { name: 'Full', price: 110 }
        ],
        isVeg: true,
        hasSpicyOption: true
    },
    {
        id: 'paneer-bhurji',
        name: 'Paneer Bhurji',
        category: 'Main Course (Veg)',
        variants: [
            { name: 'Half', price: 100 },
            { name: 'Full', price: 180 }
        ],
        isVeg: true,
        hasSpicyOption: true
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
        isVeg: false,
        hasSpicyOption: true
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
        isVeg: false,
        hasSpicyOption: true
    },
    {
        id: 'handi-chicken',
        name: 'Handi Chicken',
        category: 'Main Course (Non-Veg)',
        variants: [
            { name: '3 pcs', price: 150 },
            { name: '6 pcs', price: 270 },
            { name: '9 pcs', price: 510 }
        ],
        isVeg: false,
        hasSpicyOption: true
    },
    {
        id: 'egg-curry',
        name: 'Egg Curry',
        category: 'Main Course (Non-Veg)',
        variants: [
            { name: '2 Eggs', price: 60 },
            { name: '4 Eggs', price: 110 }
        ],
        isVeg: false,
        hasSpicyOption: true
    },
    {
        id: 'egg-bhurji',
        name: 'Egg Bhurji',
        category: 'Main Course (Non-Veg)',
        variants: [
            { name: 'Half', price: 70 },
            { name: 'Full', price: 120 }
        ],
        isVeg: false,
        hasSpicyOption: true
    },
    {
        id: 'handi-mutton',
        name: 'Handi Mutton',
        category: 'Main Course (Non-Veg)',
        variants: [
            { name: '3 pcs', price: 350 },
            { name: '6 pcs', price: 650 },
            { name: '9 pcs', price: 1050 }
        ],
        isVeg: false,
        hasSpicyOption: true
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
        variants: [
            { name: 'Plain', price: 8 },
            { name: 'Butter', price: 12 },
            { name: 'Ghee', price: 12 }
        ],
        isVeg: true
    },
    {
        id: 'plain-paratha',
        name: 'Plain Paratha',
        category: 'Breads',
        variants: [
            { name: 'Plain', price: 15 },
            { name: 'Butter', price: 19 },
            { name: 'Ghee', price: 19 }
        ],
        isVeg: true
    },
    {
        id: 'pyaz-paratha',
        name: 'Pyaz Paratha',
        category: 'Breads',
        variants: [
            { name: 'Plain', price: 30 },
            { name: 'Butter', price: 34 },
            { name: 'Ghee', price: 34 }
        ],
        isVeg: true
    },
    {
        id: 'aloo-pyaz-paratha',
        name: 'Aloo Pyaz Paratha',
        category: 'Breads',
        variants: [
            { name: 'Plain', price: 35 },
            { name: 'Butter', price: 39 },
            { name: 'Ghee', price: 39 }
        ],
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
