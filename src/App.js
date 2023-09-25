import React, { useEffect, useState } from 'react';
import Header from './Header';
import './App.css';
import Banner from './Banner';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="home">
        <Header />
        <Banner />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-secondary text-white px-2 py-2 rounded-md hover:opacity-80"
        >
          <KeyboardArrowUpIcon />
        </button>
      )}
    </div>
  );
}

export default App;
