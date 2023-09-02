import React from 'react';

const FaqsTemplate = (props) => {
    const [showFaqs, setShowFaqs] = React.useState(false);

    const toggleShowFaqs = () => {
        setShowFaqs((prevState) => {
            return !prevState;
        })
    }

  return (
    <div className='flex flex-col space-y-1 mb-4'>

        <div onClick={toggleShowFaqs} className='bg-gray-800 p-4 text-xl md:text-3xl cursor-pointer flex justify-between hover:bg-gray-500 duration-500'>
            {props.question} <span className='font-bold cursor-pointer'>{showFaqs ? "-" : "+"}</span> 
        </div>
        <div className={`${!showFaqs ? "hidden" : ""} text-start md:text-2xl`}>
            <p className='bg-gray-800 p-4'>
                {props.detail1}
            </p>
            <p className='bg-gray-800 p-4'>
                {props.detail2}
            </p>
        </div>
      
    </div>
  )
}

export default FaqsTemplate
