import React from 'react';
import basics from './assets/basics.png';
import basicLogo from './assets/basic logos.png';
import sass from './assets/sass.svg'
import bootstrap from './assets/bootstrap.svg'
import mui from './assets/mui.webp'
import styling from './assets/styling.png'
import tailwindcss from './assets/tailwindcss.svg'
import reactIcon from './assets/react.webp'
import jquery from './assets/jquery.webp'
import node from './assets/nodejs.svg'
import git from './assets/git.webp'
import terminal from './assets/terminal.webp'
import frameworks from './assets/frameworks.svg'
import dev from './assets/dev.png'
import redux from './assets/redux.webp'
import axios from './assets/axios.webp'
import api from './assets/api.png'
import { JackInTheBox } from 'react-awesome-reveal';

function Skills() {
  return (
    <div className='p-[5%] bg-primary text-white text-center relative'>
      <JackInTheBox>
        <h2 className='text-2xl leading-5 text-white'>
          Tech Stack
        </h2>
      </JackInTheBox>
      <div className='inset-x-0 bottom-1/2 mb-8'>
        <div className='flex items-center justify-center'>
          <hr className='border-2 border-white w-[50px] mr-1' />
          <JackInTheBox>
            <span className='text-lg px-1 text-secondary'>
              What I Know
            </span>
          </JackInTheBox>
          <hr className='border-2 border-white w-[50px] ml-1' />
        </div>
      </div>
      <div className='scroll-container overflow-x-scroll items-center'>
          <div className='scroll-content'>
            <div className='bg-white flex flex-col justify-between py-[8%] rounded-xl w-[50vw] lg:w-[22vw] p-[1%] mr-5 object-containS'>
              <img className='w-[500px]' src={basics} alt='illustration' />
              <div className='w-full flex flex-col items-center pt-5'>
                <h3 className='text-xl font-semibold text-primary'>Basics</h3>
                <img className='w-[35%]' src={basicLogo} alt="html logo" />
              </div>
            </div>
          </div>
          <div className='scroll-content'>
            <div className='bg-white flex flex-col justify-between py-[8%] rounded-xl my-0 w-[50vw] lg:w-[22vw] p-[1%] mr-5 object-contain'>
              <img className='w-[500px]' src={styling} alt='illustration' />
              <div className='w-full flex flex-col items-center pt-5'>
                <h3 className='text-xl font-semibold text-primary'>Styling</h3>
                <div className='flex justify-between items-center w-[50%]'>
                  <img className='w-[20%]' src={sass} alt="html logo" />
                  <img className='w-[20%]' src={bootstrap} alt="html logo" />
                  <img className='w-[20%]' src={tailwindcss} alt="html logo" />
                  <img src={mui} alt="material ui logo" />
                </div>
              </div>
            </div>
          </div>
          <div className='scroll-content'>
            <div className='bg-white flex flex-col justify-between py-[8%] rounded-xl my-0 w-[50vw] lg:w-[22vw] p-[1%] mr-5 object-contain'>
              <img className='w-[400px] p-10' src={frameworks} alt='illustration' />
              <div className='w-full flex flex-col items-center pt-5'>
                <h3 className='text-xl font-semibold text-primary'>Frameworks</h3>
                <div className='flex justify-between items-center w-[30%]'>
                  <img className='w-[45%]' src={reactIcon} alt="html logo" />
                  <img className='w-[50%]' src={jquery} alt="html logo" />
                </div>
              </div>
            </div>
          </div>
          <div className='scroll-content'>
            <div className='bg-white flex flex-col justify-between py-[8%] rounded-xl my-0 w-[50vw] lg:w-[22vw] p-[1%] mr-5 object-contain'>
              <img className='w-[500px]' src={dev} alt='illustration' />
              <div className='w-full flex flex-col items-center pt-5'>
                <h3 className='text-xl font-semibold text-primary'>Development</h3>
                <div className='flex justify-between items-center w-[50%] pt-2'>
                  <img className='w-[30%]' src={node} alt="html logo" />
                  <img className='w-[20%]' src={git} alt="html logo" />
                  <img className='w-[20%]' src={terminal} alt="html logo" />
                </div>
              </div>
            </div>
          </div>
          <div className='scroll-content'>
            <div className='bg-white flex flex-col justify-between py-[8%] rounded-xl my-0 w-[50vw] lg:w-[22vw] p-[1%] mr-5 object-contain'>
              <img className='w-[500px]' src={api} alt='illustration' />
              <div className='w-full flex flex-col items-center pt-5'>
                <h3 className='text-xl font-semibold text-primary'>API</h3>
                <div className='flex justify-between items-center w-[33%]'>
                  <img className='w-[40%]' src={redux} alt="html logo" />
                  <img className='w-[55%]' src={axios} alt="html logo" />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Skills;
