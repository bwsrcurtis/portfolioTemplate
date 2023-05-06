import React from 'react';
import Image from 'next/image.js';

const About = () => {
  return (
    <div id='about' className='flex mx-12 gap-4 w-full py-48 items-center'>
      <Image src='/person.jpg' width={2400} height={1600} alt="Picture of the designer"
        className='w-[calc(50%-3.5rem)]'></Image>
      <div className='w-[calc(50%-3.5rem)]'>
        <p className='leading-none tracking-tight text-6xl text-left'>
          Hi there, I&apos;m a
          <span className='text-tertiary'> designer </span>
          with a passion for creating meaningful and
          <span className='text-secondary'> impactful </span>
          visual experiences.
          <br></br>
          <br></br>
          Design is not just about
          <span className='text-secondary'> aesthetics,</span>
          but also about solving
          problems and communicating messages
          <span className='text-tertiary'> effectively.</span>

        </p> </div>
    </div>
  );
};

export default About;
