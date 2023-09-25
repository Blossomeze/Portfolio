import React from 'react';
import netflix from './assets/netflix.jpg';
import moviebox from './assets/moviebox.PNG'

function Projects() {
  const openWebsite = (websiteUrl) => {
    window.open(websiteUrl, '_blank');
  };

  return (
    <div className='p-[5%] bg-primary text-white text-center relative'>
      <h2 className='text-2xl leading-5 text-white'>
        My Projects
      </h2>
      <div className='inset-x-0 bottom-1/2'>
        <div className='flex items-center justify-center'>
          <hr className='border-2 border-white w-[50px] mr-2' />
          <span className='text-lg px-1 text-secondary'>
            What I've built
          </span>
          <hr className='border-2 border-white w-[50px] ml-2' />
        </div>
      </div>
      <div className='flex scroll-container mt-[4%] justify-between'>
        <div className='scrollContent w-[25vw] bg-white rounded-xl text-primary'>
          <img className='rounded-t-xl h-[50%] aspect-auto' src={netflix} alt='netflix clone demo' />
          <div className='h-[200px] text-left px-5 '>
            <h1 className='font-bold text-2xl py-3'>Netflix Clone</h1>
            <div className='stack flex flex-wrap mb-[2%]'>
              <h3><span>#</span>ReactJS</h3>
              <h3><span>#</span>TailwindCSS</h3>
              <h3><span>#</span>Redux</h3>
              <h3><span>#</span>Axios</h3>
              <h3><span>#</span>MUI</h3>
              <h3><span>#</span>API</h3>
            </div>
            <div className='w-full text-center'>
              <button
                className='bg-primary text-center text-sm lg:text-base text-white font-medium rounded-lg px-[10px] py-[5px] my-5'
                onClick={() => openWebsite('https://netflix-blossom.vercel.app/')}
                type='button'
              >
                Live Site
              </button>
            </div>
          </div>
        </div>
        <div className='w-[25vw] scrollContent bg-white rounded-xl text-primary'>
          <img className='rounded-t-xl h-[50%] aspect-auto' src={netflix} alt='netflix clone demo' />
          <div className='h-[200px] text-left px-5 '>
            <h1 className='font-bold text-2xl py-3'>Recipe Finder</h1>
            <div className='stack flex flex-wrap mb-[2%]'>
              <h3><span>#</span>ReactJS</h3>
              <h3><span>#</span>TailwindCSS</h3>
              <h3><span>#</span>Edamam API</h3>
              <h3><span>#</span>MUI</h3>
            </div>
            <div className='w-full text-center'>
              <button
                className='bg-primary text-center text-sm lg:text-base text-white font-medium rounded-lg px-[10px] py-[5px] my-5'
                onClick={() => openWebsite('URL_FOR_SECOND_PROJECT')}
                type='button'
              >
                Live Site
              </button>
            </div>
          </div>
        </div>
        <div className='w-[25vw] scrollContent bg-white rounded-xl text-primary'>
          <img className='rounded-t-xl h-[50%] aspect-auto' src={netflix} alt='netflix clone demo' />
          <div className='h-[200px] text-left px-5 '>
            <h1 className='font-bold text-2xl py-3'>Amazon Clone</h1>
            <div className='stack flex flex-wrap mb-[2%]'>
              <h3><span>#</span>ReactJS</h3>
              <h3><span>#</span>TailwindCSS</h3>
              <h3><span>#</span>Ecommerce</h3>
              <h3><span>#</span>MUI</h3>
            </div>
            <div className='w-full text-center'>
              <button
                className='bg-primary text-center text-sm lg:text-base text-white font-medium rounded-lg px-[10px] py-[5px] my-5'
                onClick={() => openWebsite('URL_FOR_THIRD_PROJECT')}
                type='button'
              >
                Live Site
              </button>
            </div>
          </div>
        </div>
        <div className='w-[25vw] scrollContent bg-white rounded-xl text-primary'>
          <img className='rounded-t-xl h-[50%] aspect-auto' src={moviebox} alt='netflix clone demo' />
          <div className='h-[200px] text-left px-4 '>
            <h1 className='font-bold text-2xl py-3'>MovieBox</h1>
            <div className='stack flex flex-wrap mb-[2%]'>
              <h3><span>#</span>React</h3>
              <h3><span>#</span>MUI</h3>
              <h3><span>#</span>Axios</h3>
              <h3><span>#</span>TMDB API</h3>
              <h3><span>#</span>TailwindCSS</h3>
            </div>
            <div className='w-full text-center'>
              <button
                className='bg-primary text-center text-sm lg:text-base text-white font-medium rounded-lg px-[10px] py-[5px] my-5'
                onClick={() => openWebsite('https://moviebox-blossom.web.app/')}
                type='button'
              >
                Live Site
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
