import React, { useState, useEffect } from 'react';
import { Bounce, Zoom, Slide, Fade } from 'react-awesome-reveal';

function Banner() {
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

    const handleContactButtonClick = () => {
    window.location.href = 'mailto:bryk.defi@gmail.com';
  };

  return (
    <div className="lg:flex justify-between pt-[2%] mx-[5%] ml-[10%] text-primary">
      <div className="lg:pt-[19%] pt-[30%]">
        <Slide left>
          <h3 className='text-xl lg:text-3xl'>Hello, my name is</h3>
        </Slide>
        <Fade clear>
          <h1 className='text-5xl lg:text-[75px] font-bold leading-none'>Blossom Eze</h1>
        </Fade>
        <Bounce>
          <h3 className='text-2xl lg:text-4xl leading-10 lg:pt-2 flex items-center' >
            and I'm a <Zoom clear><span className='text-secondary pl-[10px]'>{text}</span></Zoom>
            <span className={showCursor ? 'cursor' : ''}>|</span>
          </h3>
        </Bounce>
        <Zoom>
          <button onClick={handleContactButtonClick} className='bg-secondary my-3  text-white font-medium rounded-lg px-[22px] py-[10px] lg:my-5'>Hire Me</button>
        </Zoom>
        
      </div>
      <div>
        <Zoom>
          <img
            className="w-[100%]"
            src="https://img.freepik.com/premium-photo/head-shot-memoji-girl_916191-48893.jpg?size=626&ext=jpg&ga=GA1.2.583394399.1695495175"
            alt="memoji"
          /> 
        </Zoom>
      </div>
    </div>
  );
}

export default Banner;
