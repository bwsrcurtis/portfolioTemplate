import React from 'react';
import Image from 'next/image.js';

const About = () => {
  return (
    <div id='about' className='xl:flex xl:mx-12 gap-2 w-full py-48 items-center group'>
      <Image src='/person.jpg' width={2400} height={1600} alt="Picture of the designer"
        className='mx-auto mb-8 w-full xl:mb-0 xl:w-[calc(50%-3.25rem)]
         border-2 border-text border-solid'></Image>
      <div className='mx-auto w-full xl:w-[calc(50%-3.25rem)]'>
        <p className='leading-none tracking-tight text-5xl xl:text-6xl text-left'>
          Hi there, I&apos;m a
          <span className='group-hover:text-tertiary transition delay-75 duration-1000'> designer </span>
          with a passion for creating meaningful and
          <span className='group-hover:text-secondary transition delay-150 duration-1000'> impactful </span>
          visual experiences.
          <br></br>
          <br></br>
          Design is not just about
          <span className='group-hover:text-secondary transition delay-300 duration-1000'> aesthetics, </span>
          but also about solving
          problems and communicating messages
          <span className='group-hover:text-tertiary transition delay-[600ms] duration-1000'> effectively.</span>

        </p> </div>
    </div>
  );
};

export default About;
