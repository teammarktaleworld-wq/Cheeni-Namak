import kadaiPaneerImg from '../assets/dishes/kadai_paneer.png';
import rajmaImg from '../assets/dishes/rajma.png';
import dalTadkaImg from '../assets/dishes/dal_tadka.png';
import butterChickenImg from '../assets/dishes/butter_chicken.png';
import choleImg from '../assets/dishes/chole_v2.jpg';
import kadhiPakodaImg from '../assets/dishes/kadhi_pakoda.png';
import paneerBhurjiImg from '../assets/dishes/paneer_bhurji.png';
import chickenCurryImg from '../assets/dishes/chicken_curry.png';
import handiChickenImg from '../assets/dishes/handi_chicken.png';
import kadaiChickenImg from '../assets/dishes/kadai_chicken.jpg';
import chickenBhunaImg from '../assets/dishes/chicken_bhuna.jpg';
import eggCurryImg from '../assets/dishes/egg_curry.png';
import eggBhurjiImg from '../assets/dishes/egg_bhurji.png';
import handiMuttonImg from '../assets/dishes/handi_mutton.png';
import handiMuttonNewImg from '../assets/dishes/handi_mutton_new.jpg';
import muttonBhunaImg from '../assets/dishes/mutton_bhuna.jpg';
import tawaChickenImg from '../assets/dishes/tawa_chicken.png';
import chilliChickenImg from '../assets/dishes/chilli_chicken.jpg';
import chickenSteamedMomosImg from '../assets/dishes/chicken_steamed_momos_final.png';
import vegCrunchyMomosImg from '../assets/dishes/veg_crunchy_momos_final.png';
import chickenCrunchyMomosImg from '../assets/dishes/chicken_crunchy_momos_v2.jpg';
import butterChickenMomosImg from '../assets/dishes/butter_chicken_gravy_momos_final.png';
import paneerCrunchyMomosImg from '../assets/dishes/paneer_crunchy_momos_final.png';
import mixedVegSteamedMomosImg from '../assets/dishes/mixed_veg_steamed_momos_final.png';
import paneerSteamedMomosImg from '../assets/dishes/paneer_steamed_momos_v2.png';
import chickenFriedMomosImg from '../assets/dishes/chicken_fried_momos_v2.jpg';
import vegManchowImg from '../assets/dishes/veg_manchow.png';
import chickenManchowImg from '../assets/dishes/chicken_manchow.png';
import boondiRaitaImg from '../assets/dishes/boondi_raita.png';
import vegChowmeinImg from '../assets/dishes/veg_chowmein.png';
import vegMacaroniImg from '../assets/dishes/veg_macaroni.jpg';
import plainRiceImg from '../assets/dishes/plain_rice.png';
import jeeraRiceImg from '../assets/dishes/jeera_rice.png';
import coldCoffeeImg from '../assets/dishes/cold_coffee_new.png';
import amritsariLassiImg from '../assets/dishes/amritsari_lassi.png';
import kesarBadamMilkImg from '../assets/dishes/kesar_badam_milk.png';
import jalebiDesiGheeImg from '../assets/dishes/jalebi_desi_ghee.png';
import motichurLadduImg from '../assets/dishes/motichur_laddu.png';
import besanLadduImg from '../assets/dishes/besan_laddu.png';
import kalaJamunImg from '../assets/dishes/kala_jamun.png';
import gulabJamunDryImg from '../assets/dishes/gulab_jamun_new.jpg';
import gujiyaMeethiImg from '../assets/dishes/gujiya_meethi.png';
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
    "Momos",
    "Rice & Noodles",
    "Breads",
    "Soups & Sides",
    "Drinks (Beverages)",
    "Sweets"
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
        name: 'Kadai Chicken',
        category: 'Main Course (Non-Veg)',
        description: 'Flavorful chicken cooked in a wok with fresh ground spices and bell peppers.',
        image: kadaiChickenImg,
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
        id: 'chicken-bhuna',
        name: 'Chicken Bhuna',
        category: 'Main Course (Non-Veg)',
        description: 'Tender chicken pieces slow-cooked in a rich, dry spice blend.',
        image: chickenBhunaImg,
        variants: [
            { name: 'Qtr (3 pcs)', price: 230 },
            { name: 'Half (6 pcs)', price: 400 },
            { name: 'Full (9 pcs)', price: 560 }
        ],
        isVeg: false,
        hasSpicyOption: true,
        rating: 4.8,
        reviewCount: 10
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
        id: 'tawa-chicken',
        name: 'Tawa Chicken',
        category: 'Main Course (Non-Veg)',
        description: 'Chicken pieces tossed in a thick, spicy masala on a flat griddle.',
        image: tawaChickenImg,
        variants: [
            { name: 'Qtr (3 pcs)', price: 220 },
            { name: 'Half (6 pcs)', price: 390 },
            { name: 'Full (9 pcs)', price: 550 }
        ],
        isVeg: false,
        hasSpicyOption: true,
        rating: 4.7,
        reviewCount: 9
    },
    {
        id: 'chilli-chicken',
        name: 'Chilli Chicken (Dry/Gravy)',
        category: 'Main Course (Non-Veg)',
        description: 'Spicy Indo-Chinese chicken. Available in Dry or Gravy style.',
        image: chilliChickenImg,
        variants: [
            { name: 'Qtr (3 pcs)', price: 220 },
            { name: 'Half (6 pcs)', price: 390 },
            { name: 'Full (9 pcs)', price: 550 }
        ],
        isVeg: false,
        hasSpicyOption: true,
        rating: 4.6,
        reviewCount: 14
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
        id: 'mutton-bhuna',
        name: 'Mutton Bhuna',
        category: 'Main Course (Non-Veg)',
        description: 'Tender mutton pieces slow-cooked in a spicy roasted gravy.',
        image: muttonBhunaImg,
        variants: [
            { name: 'Qtr (3 pcs)', price: 350 },
            { name: 'Half (6 pcs)', price: 680 },
            { name: 'Full (9 pcs)', price: 1010 }
        ],
        isVeg: false,
        hasSpicyOption: true,
        rating: 4.8,
        reviewCount: 12
    },
    {
        id: 'handi-mutton',
        name: 'Handi Mutton',
        category: 'Main Course (Non-Veg)',
        description: 'Exquisite mutton slow-cooked in a handi with secret spices.',
        image: handiMuttonNewImg,
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

    // Momos
    {
        id: 'chicken-steamed-momos',
        name: 'Chicken Steamed Buttery Momos',
        category: 'Momos',
        description: 'Juicy chicken momos served with spicy chutney and creamy mayo.',
        image: chickenSteamedMomosImg,
        variants: [
            { name: 'Half (4 Pcs)', price: 85 },
            { name: 'Full (8 Pcs)', price: 170 }
        ],
        isVeg: false,
        rating: 4.5,
        reviewCount: 12
    },
    {
        id: 'veg-crunchy-momos',
        name: 'Veg Crunchy Momos',
        category: 'Momos',
        description: 'Crispy fried momos with a crunchy coating and vegetable filling.',
        image: vegCrunchyMomosImg,
        variants: [
            { name: 'Half (4 Pcs)', price: 110 },
            { name: 'Full (8 Pcs)', price: 195 }
        ],
        isVeg: true,
        rating: 4.6,
        reviewCount: 15
    },
    {
        id: 'butter-chicken-momos',
        name: 'Butter Chicken Gravy Momos',
        category: 'Momos',
        description: 'Momos tossed in a rich and creamy butter chicken gravy.',
        image: butterChickenMomosImg,
        variants: [
            { name: 'Half (4 Pcs)', price: 150 },
            { name: 'Full (8 Pcs)', price: 250 }
        ],
        isVeg: false,
        rating: 4.8,
        reviewCount: 20
    },
    {
        id: 'paneer-crunchy-momos',
        name: 'Paneer Crunchy Momos',
        category: 'Momos',
        description: 'Crunchy fried momos filled with soft spiced paneer.',
        image: paneerCrunchyMomosImg,
        variants: [
            { name: 'Half (4 Pcs)', price: 120 },
            { name: 'Full (8 Pcs)', price: 220 }
        ],
        isVeg: true,
        rating: 4.7,
        reviewCount: 18
    },
    {
        id: 'mixed-veg-steamed-momos',
        name: 'Mixed Veg Steamed Buttery Momos',
        category: 'Momos',
        description: 'Steamed momos filled with fresh mixed vegetables and butter.',
        image: mixedVegSteamedMomosImg,
        variants: [
            { name: 'Half (4 Pcs)', price: 75 },
            { name: 'Full (8 Pcs)', price: 125 }
        ],
        isVeg: true,
        rating: 4.4,
        reviewCount: 16
    },
    {
        id: 'paneer-steamed-momos',
        name: 'Paneer Steamed Buttery Momos',
        category: 'Momos',
        description: 'Soft paneer filled steamed momos with a hint of butter.',
        image: paneerSteamedMomosImg,
        variants: [
            { name: 'Half (4 Pcs)', price: 85 },
            { name: 'Full (8 Pcs)', price: 160 }
        ],
        isVeg: true,
        rating: 4.6,
        reviewCount: 19
    },
    {
        id: 'chicken-crunchy-momos',
        name: 'Chicken Crunchy Momos',
        category: 'Momos',
        description: 'Crispy fried chicken momos with a crunchy coating.',
        image: chickenCrunchyMomosImg,
        variants: [
            { name: 'Half (4 Pcs)', price: 130 },
            { name: 'Full (8 Pcs)', price: 235 }
        ],
        isVeg: false,
        rating: 4.7,
        reviewCount: 22
    },
    {
        id: 'chicken-fried-momos',
        name: 'Chicken Fried Momos',
        category: 'Momos',
        description: 'Classic deep-fried chicken momos, crispy and delicious.',
        image: chickenFriedMomosImg,
        variants: [
            { name: 'Half (4 Pcs)', price: 100 },
            { name: 'Full (8 Pcs)', price: 180 }
        ],
        isVeg: false,
        rating: 4.4,
        reviewCount: 14
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
    },

    // Drinks (Beverages)
    {
        id: 'cold-coffee',
        name: 'Cold Coffee',
        category: 'Drinks (Beverages)',
        description: 'Chilled coffee blended with milk and sugar.',
        image: coldCoffeeImg,
        price: 150.45,
        isVeg: true,
        rating: 4.5,
        reviewCount: 20
    },
    {
        id: 'amritsari-lassi',
        name: 'Amritsari Lassi [300ml]',
        category: 'Drinks (Beverages)',
        description: 'Thick, creamy yogurt drink topped with a generous dollop of malai.',
        image: amritsariLassiImg,
        price: 132.40,
        isVeg: true,
        rating: 4.8,
        reviewCount: 25
    },
    {
        id: 'kesar-badam-milk',
        name: 'Kesar Badam Milk',
        category: 'Drinks (Beverages)',
        description: 'Rich milk flavored with saffron and almonds.',
        image: kesarBadamMilkImg,
        price: 132,
        isVeg: true,
        rating: 4.7,
        reviewCount: 18
    },

    // Sweets
    {
        id: 'jalebi-desi-ghee',
        name: 'Jalebi (desi Ghee)',
        category: 'Sweets',
        description: 'Crispy fried spirals soaked in sugar syrup, made with desi ghee.',
        image: jalebiDesiGheeImg,
        variants: [
            { name: '250gm', price: 163.59 },
            { name: '500gm', price: 311.15 },
            { name: '1 Kg', price: 563.50 }
        ],
        isVeg: true,
        rating: 4.8,
        reviewCount: 22
    },
    {
        id: 'motichur-laddu',
        name: 'Motichur Laddu [Desi Ghee]',
        category: 'Sweets',
        description: 'Soft and delicious laddus made from gram flour pearls and desi ghee.',
        image: motichurLadduImg,
        variants: [
            { name: '250gm', price: 212.80 },
            { name: '500gm', price: 406.40 },
            { name: '1 Kg', price: 736 }
        ],
        isVeg: true,
        rating: 4.9,
        reviewCount: 30
    },
    {
        id: 'sada-besan-laddu',
        name: 'Sada Besan Laddu',
        category: 'Sweets',
        description: 'Classic roasted gram flour sweets.',
        image: besanLadduImg,
        variants: [
            { name: '250gm', price: 192.85 },
            { name: '500gm', price: 368.30 },
            { name: '1 Kg', price: 667 }
        ],
        isVeg: true,
        rating: 4.7,
        reviewCount: 15
    },
    {
        id: 'kala-jamun-dry',
        name: 'Kala Jamun Dry',
        category: 'Sweets',
        description: 'Dark, rich fried dumplings made of milk solids, soaked in syrup.',
        image: kalaJamunImg,
        variants: [
            { name: '250gm', price: 206.15 },
            { name: '500gm', price: 393.70 },
            { name: '1 Kg', price: 713 }
        ],
        isVeg: true,
        rating: 4.8,
        reviewCount: 18
    },
    {
        id: 'gulab-jamun-dry',
        name: 'Gulab Jamun',
        category: 'Sweets',
        description: 'Classic soft and spongy milk solid dumplings soaked in rose sugar syrup.',
        image: gulabJamunDryImg,
        variants: [
            { name: '250gm', price: 206.15 },
            { name: '500gm', price: 393.70 },
            { name: '1 Kg', price: 713 }
        ],
        isVeg: true,
        rating: 4.9,
        reviewCount: 25
    },
    {
        id: 'gujiya-meethi',
        name: 'Gujiya Meethi',
        category: 'Sweets',
        description: 'Sweet fried dumplings filled with khoya and dry fruits.',
        image: gujiyaMeethiImg,
        variants: [
            { name: '250gm', price: 252.70 },
            { name: '500gm', price: 482.60 },
            { name: '1 Kg', price: 874 }
        ],
        isVeg: true,
        rating: 4.6,
        reviewCount: 12
    }
];
