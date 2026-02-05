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
import vegFriedMomosImg from '../assets/dishes/veg_fried_momos_v2.jpg';
import chickenCrunchyMomosImg from '../assets/dishes/chicken_crunchy_momos_v2.jpg';
import butterChickenMomosImg from '../assets/dishes/butter_chicken_gravy_momos_final.png';
import paneerFriedMomosImg from '../assets/dishes/paneer_fried_momos.jpg';
import mixedVegSteamedMomosImg from '../assets/dishes/veg_steamed_momos_v2.jpg';
import paneerSteamedMomosImg from '../assets/dishes/paneer_steamed_momos_v2.png';
import chickenFriedMomosImg from '../assets/dishes/chicken_fried_momos_v3.jpg';
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
import tawaRotiGheeImg from '../assets/dishes/tawa_roti_ghee.png';
import chilliPaneerDryImg from '../assets/dishes/chilli_paneer_dry.jpg';
import chilliPaneerGravyImg from '../assets/dishes/chilli_paneer_gravy.jpg';
import chilliChickenDryImg from '../assets/dishes/chilli_chicken_dry.png';
import chilliChickenGravyImg from '../assets/dishes/chilli_chicken_gravy_v2.jpg';
import rajmaChawalImg from '../assets/dishes/rajma_chawal.png';
import kadhiChawalImg from '../assets/dishes/kadhi_chawal.jpg';
import dalChawalImg from '../assets/dishes/dal_chawal.jpg';

export const CATEGORIES = [
    "Main Course (Veg)",
    "Main Course (Non-Veg)",
    "Combo Meals",
    "Steamed Momos",
    "Fried Momos",
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
            { name: 'Quarter (250 ml)', price: 100 },
            { name: 'Half (500 ml)', price: 180 },
            { name: 'Full (750 ml)', price: 260 },
            { name: '1 Litre', price: 350 }
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
            { name: 'Quarter (250 ml)', price: 70 },
            { name: 'Half (500 ml)', price: 130 },
            { name: 'Full (750 ml)', price: 200 },
            { name: '1 Litre', price: 260 }
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
            { name: 'Quarter (250 ml)', price: 70 },
            { name: 'Half (500 ml)', price: 130 },
            { name: 'Full (750 ml)', price: 200 },
            { name: '1 Litre', price: 260 }
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
            { name: 'Quarter (250 ml)', price: 70 },
            { name: 'Half (500 ml)', price: 130 },
            { name: 'Full (750 ml)', price: 200 },
            { name: '1 Litre', price: 260 }
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
            { name: 'Quarter (250 ml)', price: 70 },
            { name: 'Half (500 ml)', price: 130 },
            { name: 'Full (750 ml)', price: 200 },
            { name: '1 Litre', price: 260 }
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
            { name: 'Quarter (250 ml)', price: 120 },
            { name: 'Half (500 ml)', price: 230 },
            { name: 'Full (750 ml)', price: 340 },
            { name: '1 Litre', price: 450 }
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

    {
        id: 'chilli-paneer-dry',
        name: 'Chilli Paneer (Dry)',
        category: 'Main Course (Veg)',
        description: 'Cottage cheese cubes tossed in spicy chilli sauce with peppers.',
        image: chilliPaneerDryImg,
        variants: [
            { name: 'Half', price: 160 },
            { name: 'Full', price: 280 }
        ],
        isVeg: true,
        hasSpicyOption: true,
        rating: 4.7,
        reviewCount: 12
    },
    {
        id: 'chilli-paneer-gravy',
        name: 'Chilli Paneer (Gravy)',
        category: 'Main Course (Veg)',
        description: 'Cottage cheese cubes in a rich, spicy chilli gravy with peppers.',
        image: chilliPaneerGravyImg,
        variants: [
            { name: 'Half', price: 160 },
            { name: 'Full', price: 280 }
        ],
        isVeg: true,
        hasSpicyOption: true,
        rating: 4.7,
        reviewCount: 12
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
        id: 'egg-curry',
        name: 'Egg Curry',
        category: 'Main Course (Non-Veg)',
        description: 'Boiled eggs simmered in a spicy onion-tomato gravy.',
        image: eggCurryImg,
        variants: [
            { name: '2 Eggs', price: 80 },
            { name: '4 Eggs', price: 140 }
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
            { name: 'Quarter (250 ml)', price: 80 },
            { name: 'Half (500 ml)', price: 150 },
            { name: 'Full (750 ml)', price: 220 },
            { name: '1 Litre', price: 290 }
        ],
        isVeg: false,
        hasSpicyOption: true,
        rating: 4.4,
        reviewCount: 7
    },


    {
        id: 'chilli-chicken-dry',
        name: 'Chilli Chicken (Dry)',
        category: 'Main Course (Non-Veg)',
        description: 'Spicy Indo-Chinese chicken tossed with peppers and onions.',
        image: chilliChickenDryImg,
        variants: [
            { name: 'Half', price: 180 },
            { name: 'Full', price: 320 }
        ],
        isVeg: false,
        hasSpicyOption: true,
        rating: 4.6,
        reviewCount: 14
    },
    {
        id: 'chilli-chicken-gravy',
        name: 'Chilli Chicken (Gravy)',
        category: 'Main Course (Non-Veg)',
        description: 'Spicy Indo-Chinese chicken in a rich, flavorful gravy.',
        image: chilliChickenGravyImg,
        variants: [
            { name: 'Half', price: 180 },
            { name: 'Full', price: 320 }
        ],
        isVeg: false,
        hasSpicyOption: true,
        rating: 4.6,
        reviewCount: 14
    },

    // Combo Meals
    {
        id: 'rajma-chawal',
        name: 'Rajma Chawal',
        category: 'Combo Meals',
        description: 'Delicious kidney beans curry served with steamed rice.',
        image: rajmaChawalImg,
        price: 120,
        isVeg: true,
        rating: 4.8,
        reviewCount: 25
    },
    {
        id: 'kadhi-chawal',
        name: 'Kadhi Chawal',
        category: 'Combo Meals',
        description: 'Traditional yogurt-based curry with fried dumplings served with rice.',
        image: kadhiChawalImg,
        price: 120,
        isVeg: true,
        rating: 4.7,
        reviewCount: 20
    },
    {
        id: 'dal-chawal',
        name: 'Dal Chawal',
        category: 'Combo Meals',
        description: 'Comforting yellow lentils served with steamed basmati rice.',
        image: dalChawalImg,
        price: 120,
        isVeg: true,
        rating: 4.6,
        reviewCount: 18
    },

    // Momos
    // Steamed Momos
    {
        id: 'chicken-steamed-momos',
        name: 'Chicken Steamed Momos',
        category: 'Steamed Momos',
        description: 'Juicy steamed momos filled with minced chicken and mild spices.',
        image: chickenSteamedMomosImg,
        variants: [
            { name: 'Half (5 pcs)', price: 70 },
            { name: 'Full (10 pcs)', price: 130 }
        ],
        isVeg: false,
        rating: 4.8,
        reviewCount: 22
    },
    {
        id: 'paneer-steamed-momos',
        name: 'Paneer Steamed Momos',
        category: 'Steamed Momos',
        description: 'Soft steamed momos filled with fresh paneer and herbs.',
        image: paneerSteamedMomosImg,
        variants: [
            { name: 'Half (5 pcs)', price: 70 },
            { name: 'Full (10 pcs)', price: 130 }
        ],
        isVeg: true,
        rating: 4.7,
        reviewCount: 18
    },
    {
        id: 'veg-steamed-momos',
        name: 'Veg Steamed Momos',
        category: 'Steamed Momos',
        description: 'Delicate steamed momos packed with mixed vegetables.',
        image: mixedVegSteamedMomosImg,
        variants: [
            { name: 'Half (5 pcs)', price: 50 },
            { name: 'Full (10 pcs)', price: 100 }
        ],
        isVeg: true,
        rating: 4.6,
        reviewCount: 25
    },

    // Fried Momos
    {
        id: 'chicken-fried-momos',
        name: 'Chicken Fried Momos',
        category: 'Fried Momos',
        description: 'Crispy fried chicken momos, golden and delicious.',
        image: chickenFriedMomosImg,
        variants: [
            { name: 'Half (5 pcs)', price: 85 },
            { name: 'Full (10 pcs)', price: 145 }
        ],
        isVeg: false,
        rating: 4.8,
        reviewCount: 20
    },
    {
        id: 'paneer-fried-momos',
        name: 'Paneer Fried Momos',
        category: 'Fried Momos',
        description: 'Crunchy fried momos with a soft paneer filling.',
        image: paneerFriedMomosImg,
        variants: [
            { name: 'Half (5 pcs)', price: 85 },
            { name: 'Full (10 pcs)', price: 145 }
        ],
        isVeg: true,
        rating: 4.7,
        reviewCount: 16
    },
    {
        id: 'veg-fried-momos',
        name: 'Veg Fried Momos',
        category: 'Fried Momos',
        description: 'Crispy fried vegetable momos served with spicy chutney.',
        image: vegFriedMomosImg,
        variants: [
            { name: 'Half (5 pcs)', price: 65 },
            { name: 'Full (10 pcs)', price: 115 }
        ],
        isVeg: true,
        rating: 4.6,
        reviewCount: 22
    },

    // Soups & Sides
    {
        id: 'veg-manchow',
        name: 'Veg Manchow Soup',
        category: 'Soups & Sides',
        description: 'Spicy and tangy soup with crunchy fried noodles.',
        image: vegManchowImg,
        price: 80,
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
        variants: [
            { name: '250 ml', price: 50 },
            { name: '500 ml', price: 90 }
        ],
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
        variants: [
            { name: 'Regular', price: 8 },
            { name: 'With Ghee', price: 12 }
        ],
        isVeg: true,
        rating: 4.6,
        reviewCount: 38
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
        price: 40,
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


];
