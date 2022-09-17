import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className='relative'>
      <Navbar />
      <div className='relative overflow-hidden'>
        <div className='absolute bg-[#282a35e6] w-screen h-[calc(100vh-6rem)]'></div>
        <img
          className=' h-[calc(100vh-6rem)] w-screen'
          src='computer-g971e436ec_1920.jpg'
          alt='Officebook'
        />
        <div className='absolute top-56 sm:top-52 w-full text-white  text-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl mb-6 font-bold tracking-wide'>
            Create a Free Website
          </h1>
          <h3 className='font-semibold md:text-2xl sm:text-xl text-lg mb-4'>
            Everything you need right in the browser.
          </h3>
          <p className='tracking-wide text-sm sm:text-md md-text-lg'>
            Build your own website with{' '}
            <span className='text-red-300 font-semibold cursor-pointer hover:opacity-90'>
              W3Schools Spaces.
            </span>
            <span className=''>It is easy to use -try it!</span>
          </p>
          <button
            submit
            className='text-white bottom-0 sm:px-12 md:px-14 px-10 sm:py-2.5 md:py-3 py-2 hover:bg-[#059862] bg-[#04aa6d] rounded-full mt-8 sm:text-lg text-md font-normal md:font-medium tracking-wide mb-8'
          >
            Get started for free
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-8 w-5/6 m-auto text-center my-12 md:grid-cols-2 lg:grid-cols-3'>
        <div className='p-4'>
          <h1 className='text-[#04aa6d] font-semibold text-lg md:text-xl mb-1 tracking-wide'>
            Website
          </h1>
          <p className='text-xs md:text-sm text-slate-800'>
            Create your own website and share it with others
          </p>
        </div>
        <div className='p-4'>
          <h1 className='text-[#04aa6d] font-semibold text-lg md:text-xl mb-1 tracking-wide'>
            Code editor
          </h1>
          <p className='text-xs md:text-sm text-slate-800'>
            Code directly in your browser
          </p>
        </div>
        <div className='p-4'>
          <h1 className='text-[#04aa6d] font-semibold text-lg md:text-xl mb-1 tracking-wide'>
            Templates
          </h1>
          <p className='text-xs md:text-sm text-slate-800'>
            Start with ready-to-use designs and structures
          </p>
        </div>
        <div className='p-4'>
          <h1 className='text-[#04aa6d] font-semibold text-lg md:text-xl mb-1 tracking-wide'>
            File manager
          </h1>
          <p className='text-xs md:text-sm text-slate-800'>
            Upload and handle files in your browser
          </p>
        </div>
        <div className='p-4'>
          <h1 className='text-[#04aa6d] font-semibold text-lg md:text-xl mb-1 tracking-wide'>
            Experiment
          </h1>
          <p className='text-xs md:text-sm text-slate-800'>
            Learn, test, and go live with your space
          </p>
        </div>
        <div className='p-4'>
          <h1 className='text-[#04aa6d] font-semibold text-lg md:text-xl mb-1 tracking-wide'>
            Playground
          </h1>
          <p className='text-xs md:text-sm text-slate-800'>
            Playground for HTML, CSS and JavaScript
          </p>
        </div>
      </div>
    </div>
  );
}
