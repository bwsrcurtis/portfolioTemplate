import React from 'react';
import Image from 'next/image';
import Heroimage from '../../../public/Heroimage.jpg';

const Hero = () => {
	return (
		<div className="relative w-screen h-[860px]">
			<div className='-z-10 static'>
				<Image
					priority src={Heroimage} fill={true} alt="Beach Image" className="filter saturate-[.35]">
				</Image>
			</div>
			<div className='relative flex flex-col items-center justify-center w-full h-[860px] mx-auto'>
				<h1 className='text-5xl text-center font-bold sm:text-7xl lg:text-8xl text-primary
				translate-y-[-103px]
				sm:translate-y-[-112px]
				md:translate-y-[-106px]
				lg:translate-y-[-112px]'>
					Beachside Design
				</h1>
				<p className='text-xl text-center md:text-3xl lg:text-4xl text-white
				translate-y-[-103px]
				sm:translate-y-[-112px]
				md:translate-y-[-106px]
				lg:translate-y-[-112px]'>
					We Help Local Businesses Get Online
				</p>
			</div>
		</div>
	);
};

export default Hero;
