import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className='relative'>
      <Navbar />
      <div className='relative'>
        <div className='absolute t-0 l-0 r-0 bg-black/80 w-screen h-[700px]'></div>
        <img
          className='w-screen  h-[700px]'
          src='computer-g971e436ec_1920.jpg'
          alt='Officebook'
        />
        <div className='absolute top-48 sm:top-52 w-full text-white  text-center'>
          <h1 className='text-5xl mb-6 font-bold tracking-wide'>
            Create a Free Website
          </h1>
          <h3 className='font-semibold text-2xl mb-4'>
            Everything you need right in the browser.
          </h3>
          <p className='tracking-wide text-lg'>
            Build your own website with{' '}
            <span className='text-red-300 font-semibold cursor-pointer hover:opacity-90'>
              W3Schools Spaces.
            </span>
            <span className=''>It is easy to use -try it!</span>
          </p>
          <button
            submit
            className='text-white bottom-0 right-0 px-14 py-3 hover:bg-[#059862] bg-[#04aa6d] rounded-full mt-8 text-lg font-semibold tracking-wide mb-8'
          >
            Get started for free
          </button>
        </div>
      </div>

      <div>
        <h1>Get Started here</h1>
      </div>
    </div>
  );
}
