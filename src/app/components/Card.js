import React from 'react';
import Image from 'next/image';

const Card = ({ src, alt, title, description }) => {

	return (
		<div className='relative w-[60vw] md:w-[50vw] lg:w-[20rem] h-fit'>
			<div className='bg-primary/75 mx-4 invisible lg:visible lg:w-[20rem] h-full w-[calc(full-2rem)] absolute top-[-.5rem] left-[-1rem] rounded-lg'></div>
			<div className='h-full mx-4 xl:w-[20rem] relative bg-secondary rounded-lg'>
				<Image src={src} alt={alt} width={320} height={192} className="h-48 w-full rounded-t-lg"></Image>
				<p className='text-left pl-2 pt-2 text-2xl w-full text-primary mb-6'>{title}</p>
				<p className='pl-2 text-text pb-6 w-full'>{description}</p>
			</div>
		</div>
	);
};

export default Card;
