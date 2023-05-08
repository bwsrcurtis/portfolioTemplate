import React from 'react';
import Image from 'next/image.js';

const About = () => {
  return (
    <div id='about' className='xl:flex xl:px-12 gap-1 w-full py-48 items-center group'>
      <Image src='/person.jpg' width={2400} height={1600} alt="Picture of the designer"
        className='mx-auto mb-8 w-full xl:mb-0 xl:w-[calc(50%-3.125rem)]
         border-2 border-text dark:border-darkText border-solid'></Image>
      <div className='mx-auto w-full xl:w-[calc(50%-3.125rem)] flex flex-col gap-8'>
        <p className='tracking-tight text-5xl leading-tight
        xl:text-6xl xl:leading-tight text-left'>
          Hi there, I&apos;m a&nbsp;
          <span className='group-hover:text-tertiary group-hover:bg-primary/75
          dark:group-hover:bg-darkPrimary/25 dark:group-hover:text-darkTertiary
          transition delay-75 duration-1000'>designer</span>
          &nbsp;with a passion for creating meaningful and&nbsp;
          <span className='group-hover:text-secondary group-hover:bg-primary/75
          dark:group-hover:bg-darkPrimary/25 dark:group-hover:text-darkSecondary
          transition delay-150 duration-1000'>impactful</span>
          &nbsp;visual experiences.
        </p>
        <p className='tracking-tight text-5xl leading-tight
        xl:text-6xl xl:leading-tight text-left'>
          Design is not just about the&nbsp;
          <span className='group-hover:text-secondary group-hover:bg-primary/75
          dark:group-hover:bg-darkPrimary/25 dark:group-hover:text-darkSecondary
          transition delay-300 duration-1000'>aesthetic.</span>
          &nbsp;It&apos;s about solving
          problems and communicating messages&nbsp;
          <span className='group-hover:text-tertiary group-hover:bg-primary/75
          dark:group-hover:bg-darkPrimary/25 dark:group-hover:text-darkTertiary
          transition delay-[600ms] duration-1000'>effectively.</span>

        </p> </div>
    </div>
  );
};

export default About;
