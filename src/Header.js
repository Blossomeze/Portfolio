import React from 'react';

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactButtonClick = () => {
    window.location.href = 'mailto:bryk.defi@gmail.com';
  };

  return (
    <div className='header'>
      <div className='w-[1%]'>
        <h1 className='font-semibold text-2xl lg:text-3xl cursor-pointer'>Blossom.</h1>
      </div>
      <div className='header_btn text-lg font-normal max-w-[30%] hidden lg:flex'>
        <a onClick={() => scrollToSection('home')}>Home</a>
        <a onClick={() => scrollToSection('skills')}>Skills</a>
        <a onClick={() => scrollToSection('about')}>About</a>
        <a onClick={() => scrollToSection('projects')}>Projects</a>
      </div>
      <div>
        <button onClick={handleContactButtonClick} className='bg-primary px-[10px] py-1 text-white font-medium rounded-lg lg:px-[15px] lg:py-[5px]'>
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Header;
