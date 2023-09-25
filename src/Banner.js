import React, { useState, useEffect } from 'react';

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

  return (
    <div className="flex justify-between pt-[2%] mx-[5%] ml-[10%] text-primary">
      <div className="pt-[19%]">
        <h3 className='text-3xl'>Hello, my name is</h3>
        <h1 className='text-[75px] font-bold leading-none'>Blossom Eze</h1>
        <h3 className='text-4xl leading-10 pt-2 flex items-center' >
          and I'm a <span className='text-secondary pl-[10px]'>{text}</span>
          <span className={showCursor ? 'cursor' : ''}>|</span>
        </h3>
        <button className='bg-secondary text-white font-medium rounded-lg px-[22px] py-[10px] my-5'>Hire Me</button>
      </div>
      <div>
        <img
          className="w-[100%]"
          src="https://img.freepik.com/premium-photo/head-shot-memoji-girl_916191-48893.jpg?size=626&ext=jpg&ga=GA1.2.583394399.1695495175"
          alt="memoji"
        />
      </div>
    </div>
  );
}

export default Banner;
