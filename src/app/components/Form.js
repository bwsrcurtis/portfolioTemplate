import React from 'react';

const Form = () => {
  return (
    <>
      <form
        name='contact'
        className='mx-auto w-[50%] md:w-[40%] lg:w-[30%] pt-6'
        action='/success'
        method='POST'
        data-netlify='true'
        data-netlify-honeypot='bot-field'>
        <input type='hidden' name='form-name' value='contact'></input>
        <p className='mb-1 text-xl'>Your Name</p>
        <p className='hidden'>
          <input name="bot-field"></input>
        </p>
        <input
          type='text'
          name='Name'
          placeholder='Jane Smith'
          className='w-full border-solid border-2 text-lg px-2 rounded-lg
          border-background mb-4 text-text placeholder:text-primary/75'></input>
        <p className='mb-1 text-xl'>Your Email</p>
        <input type='email'
          name='Email'
          placeholder='jane@example.com'
          className='w-full border-solid border-2 text-lg px-2 rounded-lg
          border-background mb-4 text-text placeholder:text-primary/75'></input>
        <p className='mb-1 text-xl'>Message</p>
        <textarea type='textarea' name='Message'
          className='w-full h-48 border-solid border-2 resize-none text-lg px-2 rounded-lg
        border-background mb-4 text-text placeholder:text-primary/75'
          placeholder='Your Message'></textarea>
        <button type='submit'
          className='w-full h-12 rounded-lg text-xl hover:bg-secondary bg-primary'>
          Submit</button>
      </form>
    </>
  );
};

export default Form;
