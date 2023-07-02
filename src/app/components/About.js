import matter from 'gray-matter';
import Image from 'next/image.js';

const About = async () => {


  const content = await import('../../../content/pages/About/About.md');
  const local = matter(content.default);
  const data = local.data;

  return (
    <div id='about' className='xl:flex xl:px-12 gap-1 w-full py-48 items-center group'>
      <Image src={data.about_img} width={2400} height={1600} alt="Picture of the designer"
        className='mx-auto mb-8 w-full xl:mb-0 xl:w-[calc(50%-3.125rem)]
         border-2 border-text dark:border-darkText border-solid'></Image>
      <div className='mx-auto w-full xl:w-[calc(50%-3.125rem)] flex flex-col group/text'>
        <div className='relative'>
          <div className='absolute top-12 right-0 h-1/4 w-0
          group-hover/text:w-3/4 transition-width ease-in-out duration-[750ms]
          dark:bg-darkPrimary/25 bg-primary -z-10'></div>
          <div className='absolute bottom-16 left-0 h-1/3 w-0
          group-hover/text:w-1/2 transition-width ease-in-out duration-[750ms]
          dark:bg-darkPrimary/25 bg-primary -z-10'></div>
          <p className='tracking-tight text-5xl leading-tight
        xl:text-6xl xl:leading-tight text-left mb-6'>
            {data.about_text1}
          </p>
          <p className='tracking-tight text-5xl leading-tight mt-6
        xl:text-6xl xl:leading-tight text-left'>
            {data.about_text2}
          </p></div> </div>
    </div>
  );
};

export default About;
