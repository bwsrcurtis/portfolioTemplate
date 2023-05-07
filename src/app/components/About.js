import React from 'react';
import Image from 'next/image.js';

const About = () => {
  return (
    <div id='about' className='xl:flex xl:mx-12 gap-1 w-full py-48 items-center group'>
      <Image src='/person.jpg' width={2400} height={1600} alt="Picture of the designer"
        className='mx-auto mb-8 w-full xl:mb-0 xl:w-[calc(50%-3.125rem)]
         border-2 border-text dark:border-darkText border-solid'></Image>
      <div className='mx-auto w-full xl:w-[calc(50%-3.125rem)]'>
        <p className='leading-none tracking-tight text-5xl xl:text-6xl text-left'>
          Hi there, I&apos;m a&nbsp;
          <span className='group-hover:text-tertiary group-hover:bg-primary/75
          dark:group-hover:bg-darkPrimary/10 dark:group-hover:text-darkTertiary
          transition delay-75 duration-1000'>designer</span>
          &nbsp;with a passion for creating meaningful and&nbsp;
          <span className='group-hover:text-secondary group-hover:bg-primary/75
          dark:group-hover:bg-darkPrimary/10 dark:group-hover:text-darkSecondary
          transition delay-150 duration-1000'>impactful</span>
          &nbsp;visual experiences.
          <br></br>
          <br></br>
          Design is not just about&nbsp;
          <span className='group-hover:text-secondary group-hover:bg-primary/75
          dark:group-hover:bg-darkPrimary/10 dark:group-hover:text-darkSecondary
          transition delay-300 duration-1000'>aesthetics,</span>
          &nbsp;but also about solving
          problems and communicating messages&nbsp;
          <span className='group-hover:text-tertiary group-hover:bg-primary/75
          dark:group-hover:bg-darkPrimary/10 dark:group-hover:text-darkTertiary
          transition delay-[600ms] duration-1000'>effectively.</span>

        </p> </div>
    </div>
  );
};

export default About;
