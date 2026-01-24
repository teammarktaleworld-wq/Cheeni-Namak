import kadaiPaneerImg from '../assets/dishes/kadai_paneer.png';
import rajmaImg from '../assets/dishes/rajma.png';
import dalTadkaImg from '../assets/dishes/dal_tadka.png';
import butterChickenImg from '../assets/dishes/butter_chicken.png';
import choleImg from '../assets/dishes/chole_v2.jpg';
import kadhiPakodaImg from '../assets/dishes/kadhi_pakoda.png';
import paneerBhurjiImg from '../assets/dishes/paneer_bhurji.png';
import chickenCurryImg from '../assets/dishes/chicken_curry.png';
import handiChickenImg from '../assets/dishes/handi_chicken.png';
import eggCurryImg from '../assets/dishes/egg_curry.png';
import eggBhurjiImg from '../assets/dishes/egg_bhurji.png';
import handiMuttonImg from '../assets/dishes/handi_mutton.png';
import vegManchowImg from '../assets/dishes/veg_manchow.png';
import chickenManchowImg from '../assets/dishes/chicken_manchow.png';
import boondiRaitaImg from '../assets/dishes/boondi_raita.png';
import vegChowmeinImg from '../assets/dishes/veg_chowmein.png';
import vegMacaroniImg from '../assets/dishes/veg_macaroni.jpg';
import plainRiceImg from '../assets/dishes/plain_rice.png';
import jeeraRiceImg from '../assets/dishes/jeera_rice.png';
import tawaRotiImg from '../assets/dishes/tawa_roti.png';
import plainParathaImg from '../assets/dishes/plain_paratha.png';
import puriImg from '../assets/dishes/puri.jpg';
import pyazParathaImg from '../assets/dishes/pyaz_paratha.jpg';
import alooPyazParathaImg from '../assets/dishes/aloo_pyaz_paratha.jpg';
import cholePuriImg from '../assets/dishes/chole_puri.jpg';
import vegFriedRiceImg from '../assets/dishes/veg_fried_rice.jpg';
import eggFriedRiceImg from '../assets/dishes/egg_fried_rice.jpg';

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
        description: 'Cottage cheese cooked in a spicy tomato-based gravy with bell peppers.',
        image: kadaiPaneerImg,
        variants: [
            { name: 'Half', price: 90 },
            { name: 'Full', price: 160 }
        ],
        isVeg: true,
        hasSpicyOption: true,
        rating: 4.8,
        reviewCount: 18
    },
    {
        id: 'rajma',
        name: 'Rajma',
        category: 'Main Course (Veg)',
        description: 'Classic North Indian kidney beans curry, best enjoyed with rice.',
        image: rajmaImg,
        variants: [
            { name: 'Half', price: 70 },
            { name: 'Full', price: 130 }
        ],
        isVeg: true,
        hasSpicyOption: true,
        rating: 4.5,
        reviewCount: 12
    },
    {
        id: 'dal-tadka',
        name: 'Dal Tadka (Toor Dal)',
        category: 'Main Course (Veg)',
        description: 'Yellow lentils tempered with ghee, cumin, garlic, and red chilies.',
        image: dalTadkaImg,
        variants: [
            { name: 'Half', price: 70 },
            { name: 'Full', price: 130 }
        ],
        isVeg: true,
        hasSpicyOption: true,
        rating: 4.2,
        reviewCount: 8
    },
    {
        id: 'chole',
        name: 'Chole',
        category: 'Main Course (Veg)',
        description: 'Spicy chickpeas cooked in a flavorful masala gravy.',
        image: choleImg,
        variants: [
            { name: 'Half', price: 70 },
            { name: 'Full', price: 110 }
        ],
        isVeg: true,
        hasSpicyOption: true,
        rating: 4.6,
        reviewCount: 15
    },
    {
        id: 'kadhi-pakoda',
        name: 'Kadhi Pakoda',
        category: 'Main Course (Veg)',
        description: 'Yogurt-based curry with fried gram flour dumplings.',
        image: kadhiPakodaImg,
        variants: [
            { name: 'Half', price: 70 },
            { name: 'Full', price: 130 }
        ],
        isVeg: true,
        hasSpicyOption: true,
        rating: 4.0,
        reviewCount: 6
    },
    {
        id: 'paneer-bhurji',
        name: 'Paneer Bhurji',
        category: 'Main Course (Veg)',
        description: 'Scrambled cottage cheese tossed with onions, tomatoes, and spices.',
        image: paneerBhurjiImg,
        variants: [
            { name: 'Half', price: 100 },
            { name: 'Full', price: 180 }
        ],
        isVeg: true,
        hasSpicyOption: true,
        rating: 4.7,
        reviewCount: 14
    },
    {
        id: 'chole-puri',
        name: 'Chole Puri (8 Puri)',
        category: 'Main Course (Veg)',
        description: 'Spicy chickpeas served with 8 fluffy puris.',
        image: cholePuriImg,
        price: 115,
        isVeg: true,
        rating: 4.8,
        reviewCount: 10
    },

    // Main Course (Non-Veg)
    {
        id: 'chicken-curry',
        name: 'Chicken Curry',
        category: 'Main Course (Non-Veg)',
        description: 'Traditional home-style chicken curry cooked with aromatic spices.',
        image: chickenCurryImg,
        variants: [
            { name: 'Qtr (3 pcs)', price: 185 },
            { name: 'Half (6 pcs)', price: 350 },
            { name: 'Full (9 pcs)', price: 500 }
        ],
        isVeg: false,
        hasSpicyOption: true,
        rating: 4.9,
        reviewCount: 19
    },
    {
        id: 'butter-chicken',
        name: 'Butter Chicken',
        category: 'Main Course (Non-Veg)',
        description: 'Tender chicken cooked in a rich, creamy tomato and butter gravy.',
        image: butterChickenImg,
        variants: [
            { name: 'Qtr (3 pcs)', price: 210 },
            { name: 'Half (6 pcs)', price: 380 },
            { name: 'Full (9 pcs)', price: 540 }
        ],
        isVeg: false,
        hasSpicyOption: true,
        rating: 5.0,
        reviewCount: 20
    },
    {
        id: 'handi-chicken',
        name: 'Handi Chicken',
        category: 'Main Course (Non-Veg)',
        description: 'Slow-cooked chicken in a traditional earthen pot with rich flavors.',
        image: handiChickenImg,
        variants: [
            { name: 'Qtr (3 pcs)', price: 240 },
            { name: 'Half (6 pcs)', price: 460 },
            { name: 'Full (9 pcs)', price: 680 }
        ],
        isVeg: false,
        hasSpicyOption: true,
        rating: 4.8,
        reviewCount: 16
    },
    {
        id: 'kadhai-chicken',
        name: 'Kadhai Chicken',
        category: 'Main Course (Non-Veg)',
        description: 'Flavorful chicken cooked in a wok with fresh ground spices and bell peppers.',
        image: handiChickenImg,
        variants: [
            { name: 'Qtr (3 pcs)', price: 230 },
            { name: 'Half (6 pcs)', price: 400 },
            { name: 'Full (9 pcs)', price: 560 }
        ],
        isVeg: false,
        hasSpicyOption: true,
        rating: 4.7,
        reviewCount: 8
    },
    {
        id: 'egg-curry',
        name: 'Egg Curry',
        category: 'Main Course (Non-Veg)',
        description: 'Boiled eggs simmered in a spicy onion-tomato gravy.',
        image: eggCurryImg,
        variants: [
            { name: '2 Eggs', price: 70 },
            { name: '4 Eggs', price: 130 }
        ],
        isVeg: false,
        hasSpicyOption: true,
        rating: 4.3,
        reviewCount: 9
    },
    {
        id: 'egg-bhurji',
        name: 'Egg Bhurji',
        category: 'Main Course (Non-Veg)',
        description: 'Scrambled eggs spiced with onions, chilies, and coriander.',
        image: eggBhurjiImg,
        variants: [
            { name: 'Half', price: 70 },
            { name: 'Full', price: 120 }
        ],
        isVeg: false,
        hasSpicyOption: true,
        rating: 4.4,
        reviewCount: 7
    },
    {
        id: 'handi-mutton',
        name: 'Handi Mutton',
        category: 'Main Course (Non-Veg)',
        description: 'Exquisite mutton slow-cooked in a handi with secret spices.',
        image: handiMuttonImg,
        variants: [
            { name: 'Qtr (3 pcs)', price: 350 },
            { name: 'Half (6 pcs)', price: 680 },
            { name: 'Full (9 pcs)', price: 1010 }
        ],
        isVeg: false,
        hasSpicyOption: true,
        rating: 4.9,
        reviewCount: 11
    },

    // Soups & Sides
    {
        id: 'veg-manchow',
        name: 'Veg Manchow Soup',
        category: 'Soups & Sides',
        description: 'Spicy and tangy soup with crunchy fried noodles.',
        image: vegManchowImg,
        price: 70,
        isVeg: true,
        rating: 4.1,
        reviewCount: 5
    },
    {
        id: 'chicken-manchow',
        name: 'Chicken Manchow Soup',
        category: 'Soups & Sides',
        description: 'Hot and spicy chicken soup topped with crispy noodles.',
        image: chickenManchowImg,
        price: 110,
        isVeg: false,
        rating: 4.3,
        reviewCount: 8
    },
    {
        id: 'boondi-raita',
        name: 'Boondi Raita',
        category: 'Soups & Sides',
        description: 'Refreshing yogurt mixed with crispy boondi and mild spices.',
        image: boondiRaitaImg,
        price: 50,
        isVeg: true,
        rating: 4.0,
        reviewCount: 4
    },

    // Rice & Noodles
    {
        id: 'veg-chowmein',
        name: 'Desi Veg Chowmein',
        category: 'Rice & Noodles',
        description: 'Stir-fried noodles with crunchy vegetables and soy sauce.',
        image: vegChowmeinImg,
        variants: [
            { name: 'Half', price: 60 },
            { name: 'Full', price: 110 }
        ],
        isVeg: true,
        rating: 4.4,
        reviewCount: 13
    },
    {
        id: 'veg-macaroni',
        name: 'Desi Veg Macaroni',
        category: 'Rice & Noodles',
        description: 'Indian-style macaroni pasta cooked with veggies and spices.',
        image: vegMacaroniImg,
        variants: [
            { name: 'Half', price: 60 },
            { name: 'Full', price: 110 }
        ],
        isVeg: true,
        rating: 3.9,
        reviewCount: 6
    },
    {
        id: 'plain-rice',
        name: 'Plain Rice',
        category: 'Rice & Noodles',
        description: 'Steamed basmati rice, fluffy and perfect for curries.',
        image: plainRiceImg,
        variants: [
            { name: 'Half', price: 60 },
            { name: 'Full', price: 110 }
        ],
        isVeg: true,
        rating: 4.0,
        reviewCount: 3
    },
    {
        id: 'jeera-rice',
        name: 'Jeera Rice',
        category: 'Rice & Noodles',
        description: 'Basmati rice tempered with cumin seeds and ghee.',
        image: jeeraRiceImg,
        variants: [
            { name: 'Half', price: 70 },
            { name: 'Full', price: 130 }
        ],
        isVeg: true,
        rating: 4.2,
        reviewCount: 5
    },
    {
        id: 'veg-fried-rice',
        name: 'Veg Fried Rice',
        category: 'Rice & Noodles',
        description: 'Aromatic basmati rice stir-fried with fresh vegetables.',
        image: vegFriedRiceImg,
        variants: [
            { name: 'Half', price: 70 },
            { name: 'Full', price: 130 }
        ],
        isVeg: true,
        rating: 4.5,
        reviewCount: 12
    },
    {
        id: 'egg-fried-rice',
        name: 'Egg Fried Rice',
        category: 'Rice & Noodles',
        description: 'Stir-fried rice with fluffy eggs and vegetables.',
        image: eggFriedRiceImg,
        variants: [
            { name: 'Half', price: 80 },
            { name: 'Full', price: 150 }
        ],
        isVeg: false,
        rating: 4.6,
        reviewCount: 14
    },

    // Breads
    {
        id: 'tawa-roti',
        name: 'Tawa Roti',
        category: 'Breads',
        description: 'Soft whole wheat flatbread cooked on a griddle.',
        image: tawaRotiImg,
        price: 8,
        isVeg: true,
        rating: 4.5,
        reviewCount: 18
    },
    {
        id: 'plain-paratha',
        name: 'Plain Paratha',
        category: 'Breads',
        description: 'Layered whole wheat flatbread, shallow fried.',
        image: plainParathaImg,
        price: 15,
        isVeg: true,
        rating: 4.3,
        reviewCount: 9
    },
    {
        id: 'pyaz-paratha',
        name: 'Pyaz Paratha',
        category: 'Breads',
        description: 'Paratha stuffed with spiced chopped onions.',
        image: pyazParathaImg,
        price: 30,
        isVeg: true,
        rating: 4.7,
        reviewCount: 12
    },
    {
        id: 'loo-pyaz-paratha',
        name: 'Aloo Pyaz Paratha',
        category: 'Breads',
        description: 'Paratha stuffed with a mix of spiced potatoes and onions.',
        image: alooPyazParathaImg,
        price: 35,
        isVeg: true,
        rating: 4.8,
        reviewCount: 14
    },
    {
        id: 'puri',
        name: 'Puri (6 pcs)',
        category: 'Breads',
        description: 'Deep-fried fluffy whole wheat bread.',
        image: puriImg,
        price: 40,
        isVeg: true,
        rating: 4.6,
        reviewCount: 10
    }
];
