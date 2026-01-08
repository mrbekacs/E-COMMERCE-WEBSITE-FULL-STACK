import React from 'react'
import { useShopContext } from '../context/shopContext'
import { useSearchParams } from 'react-router-dom'
import { backendUrl } from "../constants";
import { useEffect } from 'react';
import { toast } from 'react-toastify'
import axios from 'axios'

const Verify = () => {

    const { navigate, token, setCartItems } = useShopContext();
    const [searchParams, setSearchParams] = useSearchParams()
    
    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async () => {
        try {

            if (!token) {
                return null
            }

            const response = await axios.post(backendUrl + '/api/order/verifyStripe', { success, orderId }, { headers: { token } })
            

            

            if (response.data.success) {
               toast.success("Payment successful! 🎉");
               setCartItems({})
               navigate('/orders')
            } else {
               toast.error(response.data?.message || "Verification failed");

               navigate('/cart')
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        verifyPayment()
    }, [token])

    return (
        <div>

        </div>
    )
}

export default Verify