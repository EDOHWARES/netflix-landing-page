import Template from "./Template";
import feature1 from "../assets/feature-1.png";

import React from 'react'

const Enjoy = () => {
  return (
    <div className="bg-black p-8 md:p-20 border-y-8 border-gray-500">
      <Template 
      hd="Enjoy on your TV"
      txt="Watch on Smart TVs, Playstation, Xbox, Chromecase, Apple TV, Blu-ray players, and more"
      img={feature1}
      flip={false}
      />
    </div>
  )
}

export default Enjoy
