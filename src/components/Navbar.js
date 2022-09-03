import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='flex w-full mx-auto absolute justify-between items-center z-50'>
      <Link to='/' className=''>
        <img src='w3chool.png' alt='logo' className=' m-4  w-16 h-14' />
      </Link>
      <Link to='/login'>
        <button className='text-white px-12 py-2 border-2 border-[#04aa6d] rounded-full hover:bg-black/60 transition duration-200  m-4 text-lg'>
          Log in
        </button>
      </Link>
    </div>
  );
}
