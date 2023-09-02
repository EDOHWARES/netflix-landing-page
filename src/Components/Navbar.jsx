import React from 'react';
import logo from "../assets/logo.png"

const Navbar = () => {

  const replyFunc = () => {
    alert("You're signed in already!")
  }
  return (
    <header className='px-8 md:px-20 bg-transparent absolute top-0 left-0 w-screen py-8'>

        <nav className='flex items-center justify-between'>

            <div className='w-[7rem] md:w-[10rem]'>
                <img src={logo} alt="" />
            </div>
            <div className='cursor-pointer' onClick={replyFunc}>
               <button className='bg-red-600 text-white px-4 py-1 rounded-md font-bold hover:bg-red-700 cursor-pointer'>Sign In</button> 
            </div>
        </nav>
      
    </header>
  )
}

export default Navbar
