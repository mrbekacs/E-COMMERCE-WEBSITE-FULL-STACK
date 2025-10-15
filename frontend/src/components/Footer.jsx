import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // to go to the top of the page
    });
  };
  

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                  <b>I WANT</b> is a powerful community of people with sheer will, where anyone articulates their deepest desires. As a team <b>I WANT</b>, our mission is to make designs 
                  that are inspired by the very desires shared by our people, making each piece not just a trend, but a personal statement. Join us, share your desires, and wear what you truly want.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <Link to='./' onClick={scrollToTop}><li className='cursor-pointer'>Home</li></Link>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+998-90-777-77-77</li>
                    <li>iwant@moments.com</li>
                </ul>
            </div>
        </div>
          <div>
              <hr />
              <p className='py-5 text-sm text-center'>Copyright <b>&#xA9;</b> 2025 <b>I WANT</b>. All rights reserved.</p>
          </div>
    </div>
  )
}

export default Footer
