'use client';

import matter from 'gray-matter';

const Hero = async () => {

  const content = await import('../../../content/pages/Hero/Hero.md');
  const local = matter(content.default);
  const data = local.data;

  return (
    <div className='group w-11/12 px-12 mt-32 relative'>
      <div className='absolute w-2/3 h-1/5 md:h-1/4 lg:h-1/3 bg-primary dark:bg-darkPrimary/25
      -left-[75rem] -z-10 group-hover:translate-x-[75rem]
      ease-in-out duration-[750ms] transition-transform'></div>
      <h1 className='text-[13.5vw] md:text-[11.5vw] my-0 cursor-default
      leading-none tracking-tight mr-4 md:mr-8'>
        {data.hero_title}
      </h1>
    </div>
  );
};

export default Hero;
