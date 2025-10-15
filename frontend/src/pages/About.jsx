import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-20'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-8 md:w-2/4 text-gray-800'>
          <p><b>I WANT</b> is a powerful community of people with sheer will, where anyone articulates their deepest desires. We are one of the leading and the youngest clothing brands, 
          who are trying to bring everyone's message to people around them, and the world. </p>
          <p>The creation of this brand is inspired by...</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>As a team <b>I WANT</b>, our mission is to make designs 
          that are inspired by the very desires shared by our people, making each piece not just a trend, but a personal statement. We make disigns which include customised texts and national ornaments 
          that are beautifuly designed by our team to promote the creaters national symbols. Join us, share your desires, and wear what you truly want.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Quality of our products is really amazing</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Convenience of our products is really amazing</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional customer service:</b>
          <p className='text-gray-600'>Quality of our products is really amazing. Ow woow grape</p>
        </div>
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About
