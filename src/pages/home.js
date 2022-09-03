import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className=' '>
      <Navbar />
      <div className=''>
        <div className='absolute t-0 l-0 r-0 bg-black/80 w-screen h-[700px]'></div>
        <img
          className='w-screen  h-[700px]'
          src='computer-g971e436ec_1920.jpg'
          alt='Officebook'
        />
      </div>
      <div>
        <h1>Get Started here</h1>
      </div>
    </div>
  );
}
