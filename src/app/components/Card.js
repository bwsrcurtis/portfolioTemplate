import React from 'react';
import Image from 'next/image.js';

const Card = ({ image, title, description, alt }) => {
  return (
    <>
      <div className="flex flex-col items-center bg-secondary border-2 border-black/75 rounded-lg
        shadow w-11/12 md:flex-row md:max-w-xl cursor-pointer
        hover:bg-tertiary hover:-translate-y-1 transition-all">
        <Image className="object-cover w-full rounded-t-lg h-96 md:h-full
        md:w-48 md:rounded-none md:rounded-l-lg"
          src={image} alt={alt}></Image>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
            {title}</h5>
          <p className="mb-3 font-normal text-black/75">
            {description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
