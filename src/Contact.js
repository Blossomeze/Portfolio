import React from 'react';
import contact from './assets/contact.png'

function Contact() {
  return (
    <div className='pt-[5%] bg-white text-primary text-center relative'>
      <h2 className='text-2xl leading-5 text-primary'>
        Contact Me
      </h2>
      <div className='inset-x-0 bottom-1/2'>
        <div className='flex items-center justify-center'>
          <hr className='border-2 border-primary w-[50px] mr-1' />
          <span className='text-lg px-1 text-secondary'>
            Get In Touch
          </span>
          <hr className='border-2 border-primary w-[50px] ml-1' />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-between py-[3%] px-[8%]'>
        <div>
        <img className='lg:w-[40vw]' src={contact} alt="illustration" />
        </div>
        <div className=' lg:w-[35vw] text-left px-7 lg:px-0'>
            <h3 className='pb-2 font-medium'>Message Me</h3>
            <form className='flex flex-col'>
                <span className='flex justify-between'>
                  <input className='w-[48%]' type='text' placeholder='Name' />
                    <input className='w-[48%]' type='email' placeholder='Email' />  
                </span>
                <input type='text' placeholder='Subject' />
                <textarea placeholder='Message..' />
                <button className='bg-primary mx-[15%] lg:mx-[20%] text-sm lg:text-base text-white font-medium rounded-lg px-[20px] py-[8px] my-5' type='submit'>Let's get to work🚀🚀</button>
            </form>
        </div>
      </div>
      <div className='bg-primary text-white py-1 flex justify-center'>
        <h4 className='flex items-center font-light'>Created by Blossom | &copy; 2023 All rights reserved.</h4>
      </div>
    </div>
  );
}

export default Contact;
