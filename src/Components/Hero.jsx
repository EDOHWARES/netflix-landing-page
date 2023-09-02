import React from 'react';
import heroImg from "../assets/header-image.png";
import Button from './Button';

const Hero = () => {
  return (
    <section className='hero h-[80vh] md:h-screen'>


        <div className='text-white flex flex-col space-y-8 md:space-y-4 text-center px-8 md:px-20'>


        <h1 className='font-bold text-3xl md:text-5xl'>
            Unlimited movies, TV shows, and more
        </h1>
        <p className='text-xl'>
            Watch anywhere. Cancel anytime.
        </p>
        <p className='text-xl'>
            Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className='space-x-6 flex-1 space-y-4'>
            <input type="email" name="" id=""  
            className='py-2 rounded-md w-[20rem] md:w-[30rem] bg-["rgba(0, 0, 0, 0.5)"] border border-white/50 px-10 bg-black/50'
            placeholder='Email address'
            />
            <Button />
        </div>

        </div>

      
    </section>
  )
}

export default Hero
