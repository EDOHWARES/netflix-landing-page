import React from 'react';
import Template from './Template';
import feature2 from "../assets/feature-2.png"

const Download = () => {
  return (
    <div className="bg-black p-8 md:p-20 border-y-8 border-gray-500">
      <Template 
        hd="Download your shows to watch offline" 
        txt="Save your favorites easily and always have something to watch."
        img={feature2}
        flip={true}
      />
    </div>
  )
}

export default Download
