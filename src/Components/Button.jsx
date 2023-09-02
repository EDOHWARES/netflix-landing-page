import React from 'react';


const Button = () => {

  const replyFunc = () => {
    alert("You're signed in already!")
  }
  return (
    <button onClick={replyFunc} className='bg-red-600 px-4 py-2 rounded-md text-xl border border-transparent font-bold hover:bg-transparent hover:border-red-600 '>
        {`Get Started >`}
    </button>
  )
}

export default Button
