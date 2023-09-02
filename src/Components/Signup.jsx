import React from 'react'

const Signup = () => {

  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  })


  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => {
      return {
        ... prevData,
        [name]:value
      }
    })
  }

  const verifyForm = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Form Data is necessary and must be valid!")
      return
    }
    cancelSignup()

  }

    const [signup, setSignup] = React.useState(true);

    const cancelSignup = (e) => {
      setSignup((prevState) => {
        return !prevState;
      })
    }

  return (
    <section className={`absolute ${signup ? "block" : "hidden"} top-0 w-screen h-screen max-w-[40rem] p-8 z-50 bg-black/70`}>
      <div onClick={cancelSignup}>

      <h1 className='text-white self-end text-3xl font-bold border w-[2rem] h-[2rem] flex items-center justify-center cursor-pointer hover:bg-gray-300 duration-500 hover:text-black'>
        &times;
      </h1>

      </div>

    <div className='bg-black px-4 py-10 rounded-md flex flex-col space-y-6 text-white'>
      <h1 className='text-center font-bold text-2xl'>
        Sign In
      </h1>
      <form onSubmit={verifyForm}>
        <input typeof="text" required placeholder='Email or phone number' className='text-black mb-4 w-[100%] h-10 indent-6 rounded-md outline-none border-b-4 border-gray-600' 
        name='email'
        value={formData.email}
        onChange={handleChange}
        />
        <input type="password" required id="" placeholder='password' className='text-black mb-4 w-[100%] h-10 indent-6 rounded-md outline-none border-b-4 border-gray-600'
        name='password'
        value={formData.password}
        onChange={handleChange}
        />
        <button className='bg-red-600 w-[100%] h-10 rounded-md font-bold text-xl mb-4'>sign In</button>
        <div className='flex items-center justify-between mb-4'>
            <div className='flex space-x-2'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remember me</label>
            </div>

            <a href="">Need help?</a>
        </div>

        <div className='flex flex-col space-y-6'>
            <p className='flex space-x-2'>
                <span>New to Netflix?</span>
                <span><b>Sign up now</b></span>
            </p>
            <small>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.
                <a href="" className='text-blue-800 ml-2'>Learn more</a>
            </small>
        </div>
      </form>
    </div>

    </section>
   
  )
}

export default Signup
