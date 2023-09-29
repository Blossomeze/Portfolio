import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import contact from './assets/contact.png'
import { JackInTheBox, Slide } from 'react-awesome-reveal';

function Contact() {
  const form = useRef();
  
  // State variables to manage input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Sending email...');
  
    emailjs
      .sendForm('service_blossom', 'template_8y36on9', form.current, '0yayXzPRDqLm-_jJV')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Clear input fields after successful email send
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Email sending error:', error);
      });
  };
  
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
        <Slide direction="left">
          <div>
            <img className='lg:w-[40vw]' src={contact} alt="illustration" />
          </div>
        </Slide>
        <Slide direction="right">
        <div className=' lg:w-[35vw] text-left px-7 lg:px-0'>
            <h3 className='pb-2 font-medium'>Message Me</h3>
            <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
                <span className='flex justify-between'>
                  <input
                    className='w-[48%]'
                    type='text'
                    name="user_name"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className='w-[48%]'
                    type='email'
                    name="user_email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </span>
                <input
                  type='text'
                  placeholder='Subject'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  name="message"
                  placeholder='Message..'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <JackInTheBox>
                  <button className='bg-primary mx-[15%] lg:mx-[20%] text-sm lg:text-base text-white font-medium rounded-lg px-[20px] py-[8px] my-5' type="submit" value="Send" >Let's get to work🚀🚀</button>
                </JackInTheBox>
            </form>
        </div>
        </Slide>
      </div>
      <div className='bg-primary text-white py-1 flex justify-center'>
        <h4 className='flex items-center font-light'>Created by Blossom | &copy; 2023 All rights reserved.</h4>
      </div>
    </div>
  );
}

export default Contact;
