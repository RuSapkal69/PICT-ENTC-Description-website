import React from 'react';
import ImageSlider from './ImageSlider';
import pictlogo from '../assets/images/pictlogo.jpg';

const Home = () => {
  return (
    <>
      {/* Logo and Text Section */}
      <div className='absolute top-0 left-0 m-1 p-1 flex items-center space-x-4 w-full max-sm:flex-col max-sm:items-center text-center'>
        {/* Logo */}
        <img
          src={pictlogo}
          alt='PICT Logo'
          className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain'
        />
        {/* Text */}
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-montserrat font-semibold'>
          Pune Institute of Computer Technology
        </h1>
      </div>

      {/* Main Content */}
      <div className='flex flex-col md:flex-row flex-wrap justify-start items-start min-h-screen p-4 sm:pt-20'>
        {/* Text Section */}
        <div className='flex-1 text-left p-4 w-full mt-8 max-sm:mt-8 sm:w-1/2'>
          <h1 className='text-left text-2xl z-0 mt-8 max-sm:mt-8 sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-500'>
            Welcome to the EnTC Department of PICT.
          </h1>
          <h2 className='text-left text-lg z-0 mt-8 max-sm:mt-4 sm:text-xl md:text-2xl lg:text-3xl font-light text-slate-500'>
            This is the official website for the EnTC Department of PICT. Here you can find all the information about the department. You can also explore the various labs, projects, and activities of the department.
            You are at the right place to know more about the department. So, let's get started.
          </h2>
          <button 
            className='btn-grad mt-8 font-bold py-2 px-4 rounded-full'
            onClick={() => {
              window.location.href = "#hero";
            }}
          >
            Explore
          </button>
        </div>

        {/* ImageSlider Section */}
        <div className='flex-1 w-full max-w-2xl p-4'>
          <ImageSlider />
        </div>
      </div>
      
    </>
  );
};

export default Home;
