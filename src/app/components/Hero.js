import React from 'react';

const Hero = () => {
  return (
    <div className=' w-11/12 px-12 mt-16 relative'>
      <div className='absolute w-2/3 h-3/5 bg-primary left-10 -z-10'></div>
      <h1 className='text-[13.5vw] md:text-[11.5vw] my-0 leading-none tracking-tight mr-4 md:mr-8'>
        The Works of John Smith
      </h1>
    </div>
  );
};

export default Hero;
