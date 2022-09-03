import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='h-screen relative'>
      <Link to='/' className=''>
        <img src='w3chool.png' alt='logo' className=' m-4  w-16 h-14' />
      </Link>
      <div className='flex justify-center items-center mt-32'>
        <form className='flex flex-col p-8 center border-2  border-[#e3e3e3] shadow-md w-[350px] h-auto justify-center  '>
          <h1 className='mb-8 text-2xl font-bold'>Log in</h1>
          <label className='fontsemibold text-lg'>email</label>
          <input
            type='email'
            placeholder='email'
            className='p-2 shadow-md border-2 border-[#ced4da] mb-4'
          />
          <label>email</label>
          <input
            type='password'
            placeholder='password'
            className='border-2 shadow-md border-[#ced4da] p-2'
          />
          <button
            submit
            className='mt-12 bg-[#04aa6d] text-white p-2 rounded-full font-semibold tracking-wide text-lg'
          >
            <Link to='/login'>Log in</Link>
          </button>
        </form>{' '}
        <button className='text-white absolute bottom-0 right-0 px-8 py-2 border-2 bg-[#04aa6d] rounded-full m-4 text-lg tracking-wide mb-8'>
          Help
        </button>
      </div>
    </div>
  );
}
