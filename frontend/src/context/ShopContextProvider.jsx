import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import { shopContext } from "./shopContext";


const ShopContextProvider = (props)=> {

    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Select a product size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1; 
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);

    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    {/* nothing happens */}
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData);

    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);
            for(const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {
                    {/* comment */}
                }
            }
        }
        return totalAmount;
    }

    const getProductsData = async () => {
        try {
            
            const response = await api.get('/api/product/list')
            if(response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message);
            }
            
            
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(()=>{
        getProductsData()
    },[])

    useEffect(()=>{
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
        }
    },[])

    const value = {
        products , currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity,
        getCartAmount, navigate, setToken, token
    }

    return (
        <shopContext.Provider value={value}>
            {props.children}
        </shopContext.Provider>
    )


}

export default ShopContextProvider;