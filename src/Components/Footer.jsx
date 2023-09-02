import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-300 p-8 md:p-20'>

        <a href="#" className='underline'>
            Question? Contact us.
        </a>

        <div className='flex items-start justify-between my-10 flex-wrap space-y-10'>
            <ul className='flex flex-col space-y-2'>
                <li className='underline'>
                    <a href="">
                        FAQ
                    </a>
                </li>
                <li className='underline'>
                    <a href="">
                        Media Center
                    </a>
                </li>
                <li className='underline'>
                    <a href="">
                        Ways to Watch
                    </a>
                </li>
                <li className='underline'>
                    <a href="">Cookies Preferences</a>
                </li>
                <li className='underline'>
                    <a href="">
                        Speed Test
                    </a>
                </li>
            </ul>

            <ul className='flex flex-col space-y-2'>
                <li className='underline'>
                    <a href="">
                        Help Center
                    </a>
                </li>
                <li className='underline'>
                    <a href="">
                        Investor Relations
                    </a>
                </li>
                <li className='underline'>
                    <a href="">
                        Terms of Use
                    </a>
                </li>
                <li className='underline'>
                    <a href="">
                        Corporate Information
                    </a>
                </li>
                <li className='underline'>
                    <a href="">
                        Legal Notices
                    </a>
                </li>
            </ul>

            <ul className='flex flex-col space-y-2'>
                <li className='underline'>
                    <a href="">
                        Account
                    </a>
                </li>
                <li className='underline'>
                    <a href="">
                        Jobs
                    </a>
                </li>
                <li className='underline'>
                    <a href="">
                        Privacy
                    </a>
                </li>
                <li className='underline'>
                    <a href="">
                        Contact Us
                    </a>
                </li>
                <li className='underline'>
                    <a href="">
                        Only on Netlix
                    </a>
                </li>
            </ul>
        </div>

        <div className='mb-8 cursor-pointer'>
            <select name="" id="" className='bg-black/5 border px-4 py-1'>
                <option value="">English</option>
                <option value="">French</option>
                <option value="">Swahili</option>
            </select>
        </div>

        <small>
            Netflix Nigeria
        </small>
      
    </footer>
  )
}

export default Footer
