import React, { useState, useEffect } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function About() {
    const phrases = ["Frontend Developer", "Content Creator", "Technical Writer", "Community Manager"];
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
  
    useEffect(() => {
      let currentIndex = 0;
      let currentText = "";
      let interval;
  
      const type = () => {
        if (currentIndex < phrases[index].length) {
          currentText = phrases[index].substring(0, currentIndex + 1);
          currentIndex += 1;
          setText(currentText);
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setShowCursor((prevShowCursor) => !prevShowCursor);
            setTimeout(() => {
              setShowCursor((prevShowCursor) => !prevShowCursor);
              setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
              }, 1000);
            }, 500);
          }, 1000);
        }
      };
  
      interval = setInterval(type, 100);
  
      return () => {
        clearInterval(interval);
      };
    }, [index]);
  return (
    <div className='p-[5%] bg-white text-primary text-center relative'>
      <h2 className='text-2xl leading-5 text-primary'>
        About me
      </h2>
      <div className='inset-x-0 bottom-1/2'>
        <div className='flex items-center justify-center'>
          <hr className='border-2 border-primary w-[50px] mr-1' />
          <span className='text-lg px-1 text-secondary'>
            Who am I
          </span>
          <hr className='border-2 border-primary w-[50px] ml-1' />
        </div>
      </div>
      <div className='flex justify-between items-center px-[7%]'>
        <div>
            <img className='w-[80%]' src="https://img.freepik.com/premium-photo/sticker-cute-afro-girl-urban-clothes-isolated-white-background_917664-16868.jpg?size=626&ext=jpg&ga=GA1.1.583394399.1695495175&semt=ais" alt='illustration' />
        </div>
        <div className='w-[65%]'> 
            <h1 className='text-2xl font-bold text-left pt-[6%]'>I'm Blossom Eze and I'm a<span className='text-secondary pl-[10px]'>{text}</span>
          <span className={showCursor ? 'cursor' : ''}>|</span></h1>
            <h4 className='pt-3 text-left text-xl font-light'>From Nigeria to the digital realm, I'm a passionate frontend web developer with an eye for code aesthetics, crafting visually captivating interfaces pixel by pixel. I combine my love for beautiful UI design with dedication to clean code and application of best practices to deliver solid results with the best user experience and a codebase that is scalable and maintainable.</h4>
            <h1 className='mui text-lg font-bold text-left'>Wanna Know More:  
            <a href="https://www.linkedin.com/in/blossom-eze-76146923a" target="_blank" > <LinkedInIcon /> </a>
            <a href="https://github.com/Blossomeze" target="_blank"><GitHubIcon /> </a> 
            <a href="https://twitter.com/Blossomeze_?t=i23-k_nqhvKbwELA8DUAyw&s=09" target="_blank"><TwitterIcon /></a></h1>
            <button className='bg-secondary text-white font-medium rounded-lg mr-[70%] px-[26px] py-[13px] my-5 text-left '>Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default About;
