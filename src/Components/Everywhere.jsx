import React from 'react';
import Template from './Template';
import feature3 from "../assets/feature-3.png"

const Everywhere = () => {
  return (
    <div className="bg-black p-8 md:p-20 border-y-8 border-gray-500">

        <Template 
        hd={"Watch Everywhere"}
        txt={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."}
        img={feature3}
        />
      
    </div>
  )
}

export default Everywhere
