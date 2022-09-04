import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='h-screen relative w-[90%] m-auto'>
      <Link to='/' className=''>
        <img
          src='w3chool.png'
          alt='logo'
          className=' my-4  w-16 h-14 hover:opacity-90'
        />
      </Link>
      <div className='flex justify-center items-center mt-32'>
        <form className='flex flex-col md:w-[450px] p-8 center border-2  border-[#e3e3e3] shadow-md w-[350px] h-auto justify-center  '>
          <h1 className='mb-8 text-2xl font-bold'>Log in</h1>
          <label className='fontsemibold text-lg'>email</label>
          <input
            type='email'
            placeholder='email'
            className='p-2 focus:shadow-sm border-2 border-[#ced4da] mb-4 outline-none'
          />
          <label>email</label>
          <input
            type='password'
            placeholder='password'
            className='border-2 focus:shadow-sm border-[#ced4da] p-2 outline-none'
          />
          <button
            submit
            className='mt-12 bg-[#04aa6d] hover:bg-[#059862]  text-white p-2 rounded-full font-semibold tracking-wide text-lg'
          >
            <Link to='/login'>Log in</Link>
          </button>
        </form>{' '}
        <button className='text-white absolute bottom-0 right-0 px-8 py-2 border-2 hover:bg-[#059862] bg-[#04aa6d] rounded-full m-4 text-lg tracking-wide mb-8'>
          Help
        </button>
      </div>
    </div>
  );
}
