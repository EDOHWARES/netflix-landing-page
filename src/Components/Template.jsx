import React from 'react'

const Template = (props) => {

  return (
    <div className={`text-white text-center flex flex-col ${props.flip ? "md:flex-row-reverse" : 'md:flex-row'} space-y-4 items-center`}>

        <div className='flex flex-col space-y-8 md:text-start md:w-1/2'>

            <h2 className='text-3xl md:text-6xl font-bold'>
                {props.hd}
            </h2>

            <p>
                {props.txt}
            </p>

        </div>


        <div className='w-fit'>
            <img src={props.img} alt="" />
        </div>
      
    </div>
  )
}

export default Template
