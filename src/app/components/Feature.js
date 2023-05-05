import React from 'react';

const Feature = ({ title, description, Icon }) => {
  return (
    <>
      <div
        className='m-6 w-60 h-60 bg-text text-center rounded-3xl
      justify-between flex flex-col items-center'>
        <div className='text-primary text-7xl h-full mt-8'>
          {Icon}
        </div>
        <div className='flex flex-col justify-between h-full'>
          <p className='text-2xl font-bold text-secondary mb-1'>{title}</p>
          <div className='h-16 w-full bg-background align-self-end rounded-b-2xl'>
            <p className='self-center mt-1 bg-background'>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
