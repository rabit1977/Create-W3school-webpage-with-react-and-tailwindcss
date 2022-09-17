import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='flex w-full p-4 md:p-6 absolute justify-between items-center z-50'>
      <Link to='/' className=''>
        <img src='w3chool.png' alt='logo' className='w-16 h-14' />
      </Link>
      <Link to='/login'>
        <button className='text-white px-8 sm:px-10 md:px-12 py-1.5 sm:py-2 border-2 border-[#04aa6d] rounded-full hover:bg-black/20 transition duration-200 text-md sm:text-lg'>
          Log in
        </button>
      </Link>
    </div>
  );
}
