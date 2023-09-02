import React from 'react';
import Template from './Template';
import feature4 from "../assets/feature-4.png"

const Profile = () => {
  return (
    <div className="bg-black p-8 md:p-20 border-y-8 border-gray-500">
      
      <Template 
        hd="Create profiles for your kids" 
        txt="Send kids on adventures with their favorite characters in a space made just for them-free with your membership"
        img={feature4}
        flip={true}
      />
      
    </div>
  )
}

export default Profile
