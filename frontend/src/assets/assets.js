import black_hoodie_0 from './black_hoodie_0.png'
import black_hoodie_1 from './black_hoodie_1.png'
import black_hoodie_2 from './black_hoodie_2.png'
import black_hoodie_3 from './black_hoodie_3.png'
import white_hoodie_0 from './white_hoodie_0.png'
import white_hoodie_1 from './white_hoodie_1.png'
import white_hoodie_2 from './white_hoodie_2.png'
import white_hoodie_3 from './white_hoodie_3.png'
import blue_hoodie_0 from './blue_hoodie_0.png'
import blue_hoodie_1 from './blue_hoodie_1.png'
import blue_hoodie_2 from './blue_hoodie_2.png'
import blue_hoodie_3 from './blue_hoodie_3.png'
import white_B_hoodie_0 from './white_B_hoodie_0.png'
import white_B_hoodie_1 from './white_B_hoodie_1.png'
import white_B_hoodie_2 from './white_B_hoodie_2.png'
import white_R_hoodie_0 from './white_R_hoodie_0.png'
import white_R_hoodie_1 from './white_R_hoodie_1.png'
import white_R_hoodie_2 from './white_R_hoodie_2.png'
import white_R_hoodie_3 from './white_R_hoodie_3.png'
import white_50p_hoodie_0 from './white_50p_hoodie_0.png'

import white_tshirt_0 from './white_tshirt_0.png'
import white_tshirt_1 from './white_tshirt_1.png'
import white_tshirt_2 from './white_tshirt_2.png'
import white_tshirt_3 from './white_tshirt_3.png'
import black_tshirt_0 from './black_tshirt_0.png'
import black_tshirt_1 from './black_tshirt_1.png'
import black_tshirt_2 from './black_tshirt_2.png'
import black_tshirt_3 from './black_tshirt_3.png'

import black_crocs_0 from './black_crocs_0.png'
import black_crocs_1 from './black_crocs_1.png'
import blue_crocs_0 from './blue_crocs_0.png'
import green_crocs_0 from './green_crocs_0.png'

import black_sneakers_0 from './black_sneakers_0.png'
import black_sneakers_1 from './black_sneakers_1.png'
import black_sneakers_2 from './black_sneakers_2.png'
import black_sneakers_3 from './black_sneakers_3.png'
import white_sneakers_0 from './white_sneakers_0.png'
import white_sneakers_1 from './white_sneakers_1.png'
import white_sneakers_2 from './white_sneakers_2.png'
import white_sneakers_3 from './white_sneakers_3.png'

import blue_slippers_0 from './blue_slippers_0.png'
import blueD_slippers_0 from './blueD_slippers_0.png'
import green_slippers_0 from './green_slippers_0.png'
import orange_slippers_0 from './orange_slippers_0.png'

import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "A black T-shirt, 2nd unisex edition ",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 100,
        image: [black_tshirt_0, black_tshirt_1, black_tshirt_2, black_tshirt_3],
        category: "Black", //colors {White, Black, Gray, Blue, Green, Orange}
        subCategory: "T-shirts", // types {T-shirts, Hoodies, Trousers, Slippers, Sneakers, Bottles}
        sizes: ["S", "M", "L", "XL"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 200,
        image: [white_R_hoodie_0, white_R_hoodie_1,white_R_hoodie_2, white_R_hoodie_3],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 220,
        image: [black_hoodie_0, black_hoodie_1, black_hoodie_2, black_hoodie_3],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 110,
        image: [white_tshirt_1, white_tshirt_0, white_tshirt_2, white_tshirt_3],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "XXL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 130,
        image: [blue_hoodie_0, blue_hoodie_1, blue_hoodie_2, blue_hoodie_3],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 140,
        image: [white_hoodie_0, white_hoodie_1, white_hoodie_2, white_hoodie_3],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "L", "XL"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 190,
        image: [white_50p_hoodie_0],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "L", "XL"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 140,
        image: [white_B_hoodie_0, white_B_hoodie_1, white_B_hoodie_2],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 100,
        image: [black_sneakers_0, black_sneakers_1, black_sneakers_2, black_sneakers_3],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 110,
        image: [white_sneakers_0, white_sneakers_1, white_sneakers_2, white_sneakers_3],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "L", "XL"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 140,
        image: [black_crocs_0, black_crocs_1],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "aaaap",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 170,
        image: [blue_crocs_0],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 120,
        image: [blue_slippers_0],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 150,
        image: [blueD_slippers_0],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 130,
        image: [green_slippers_0],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 160,
        image: [orange_slippers_0],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 150,
        image: [green_crocs_0],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716629945448,
        bestseller: false
    }

]