import React from 'react';
import FaqsTemplate from './FaqsTemplate';
import Button from './Button';

const Faqs = () => {
  return (
    <div className='bg-black p-8 md:p-20 text-white text-center border-y-8 border-gray-500'>

        <h2 className='text-3xl mb-8 font-bold text-center md:text-5xl'>
            Frequently Asked Questions
        </h2>
        <div>

            <FaqsTemplate 
            question="What is Netflix?"
            detail1="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
            detail2="You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
            />

            <FaqsTemplate 
            question="How much does Netflix cost?"
            detail1="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts."            
            />

            <FaqsTemplate 
            question="Where can I watch"
            detail1="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
            detail2="You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
            />

            <FaqsTemplate 
            question="How do I cancel?"
            detail1="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
            />

            <FaqsTemplate 
            question="What can I watch on Netflix?"
            detail1="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
            />

            <FaqsTemplate 
            question="Is Netflix good for kids?"
            detail1="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
            detail2="Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
            />

            

        </div>

        <div className='mt-12 flex flex-col space-y-8'>
            <p className='text-xl'>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className='space-x-6 flex-1 space-y-4 '>
            <input type="email" name="" id=""  
            className='py-2 rounded-md w-[20rem] md:w-[30rem] bg-["rgba(0, 0, 0, 0.5)"] border border-white/50 px-10 bg-black/50'
            placeholder='Email address'
            />
            <Button />
            </div>
        </div>
      
    </div>
  )
}

export default Faqs
