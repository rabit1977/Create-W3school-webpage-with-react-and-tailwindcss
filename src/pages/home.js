import React from 'react';
import Navbar from '../components/Navbar';
import { CheckedIcon, CreateSpace } from '../Icons/icons';

export default function Home() {
  return (
    <div className='relative'>
      <Navbar />
      <div className='relative overflow-hidden'>
        <div className='absolute bg-[#282a35e6] w-screen h-[calc(100vh-6rem)]'></div>
        <img
          className=' h-[calc(100vh-6rem)] w-screen object-cover'
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
      <div className='bg-[#282a35] h-68 flex items-center flex-col py-16 px-8'>
        <div>
          <h1 className='text-white font-bold tracking-wide text-3xl pb-12'>
            How it works
          </h1>
        </div>
        <div className='columns-1  lg:columns-4 sm:columns-2 space-y-6 text-white'>
          <div className='flex flex-col items-center'>
            <CreateSpace />
            <h5 className='text-sm text-center sm:text-md sm:font-semibold pb-8 pt-4'>
              1.Join W3Schools-and create a space
            </h5>
          </div>
          <div className='flex flex-col items-center'>
            <CreateSpace />
            <h5 className='text-sm text-center sm:text-md sm:font-semibold pb-8 pt-4'>
              2.Choose a template - or start from scratch
            </h5>
          </div>
          <div className='flex flex-col items-center'>
            <CreateSpace />
            <h5 className='text-sm text-center sm:text-md sm:font-semibold pb-8 pt-4'>
              3. Edit code directly in your browser
            </h5>
          </div>
          <div className='flex flex-col items-center'>
            <CreateSpace />
            <h5 className='text-sm text-center sm:text-md sm:font-semibold pb-8 pt-4'>
              4. Share your website with the world
            </h5>
          </div>
        </div>
      </div>
      <div className='py-12 '>
        <div className='space-y-6 text-center'>
          <h1 className='text-4xl pb-6 font-bold'>
            Start Free - upgrade later
          </h1>
          <h3 className='text-xl tracking-wider font-semibold text-slate-700'>
            Master new skills
          </h3>
          <h2 className='text-slate-600'>
            Monthly <span>Yearly (get 2 months for free)</span>
          </h2>
        </div>
        <div className='flex flex-col md:flex-row md:max-w-4xl max-w-[280px] m-auto mt-6 gap-5'>
          <div className='px-6 py-3 bg-[#282a35] text-white rounded-2xl shadow-lg'>
            <div className=''>
              <button className='px-10 w-full py-1.5 mt-4 text-black font-bold mb-8 bg-[#fff4a3] rounded-full'>
                FREE
              </button>
              <div className='space-y-4'>
                <p>
                  <span className='text-3xl font-bold mr-2'>$0</span>{' '}
                  <span> /month</span>
                </p>
                <p className='text-xl font-bold tracking-wide'>Free</p>
                <p className='text-xs font-medium'>
                  For new web developers reeady to create their first site
                </p>
              </div>
              <div className='space-y-2 mt-6 text-xs font-medium ml-2'>
                <p>
                  <a
                    href='#a'
                    className='text-pink-300/70 hover:text-pink-300/80'
                  >
                    <span>
                      <CheckedIcon className='inline-flex mr-2' />
                    </span>
                    Browse W3Schools with ads
                  </a>
                </p>
                <p>
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  Build static sites
                </p>
                <p>
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  1 space
                </p>
                <p>
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  100 MB storage
                </p>
                <p>
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  500 requests/month
                </p>
                <p>
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  w3spaces.com subdomain
                </p>
                <p>
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  SSL certificate
                </p>
              </div>
              <button className='px-6 mt-8 py-1.5 text-black font-normal mb-4 bg-[#ffc0c7] rounded-full w-full text-sm'>
                Get started for free
              </button>
            </div>
          </div>
          <div className='px-6 py-3 bg-[#282a35] text-white rounded-2xl'>
            <div className=''>
              <button className='px-10 w-full py-1.5 mt-4 text-black font-bold mb-8 bg-[#fff4a3] rounded-full'>
                FREE
              </button>
              <div className='space-y-4'>
                <p>
                  <span className='text-3xl font-bold mr-2'>$10</span>{' '}
                  <span> /month</span>
                </p>
                <p className='text-xl font-bold tracking-wide'>Free</p>
                <p className='text-xs font-medium'>
                  For new web developers reeady to create their first site
                </p>
              </div>
              <div className='space-y-2 mt-6 text-xs font-medium ml-2'>
                <p>
                  <a
                    href='#a'
                    className='text-pink-300/70 hover:text-pink-300/80'
                  >
                    {' '}
                    <span>
                      <CheckedIcon className='inline-flex mr-2' />
                    </span>
                    Browse W3Schools with ads
                  </a>
                </p>
                <p>
                  {' '}
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  Build static sites
                </p>
                <p>
                  {' '}
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  2 space
                </p>
                <p>
                  {' '}
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  200 MB storage
                </p>
                <p>
                  {' '}
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  1000 requests/month
                </p>
                <p>
                  {' '}
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  w3spaces.com subdomain
                </p>
                <p>
                  {' '}
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  SSL certificate
                </p>
              </div>
              <button className='px-6 mt-8 py-1.5 text-black font-normal mb-4 bg-[#ffc0c7] rounded-full w-full text-sm'>
                Get started for free
              </button>
            </div>
          </div>
          <div className='px-6 py-3 bg-[#282a35] text-white rounded-2xl'>
            <div className=''>
              <button className='px-10 w-full py-1.5 mt-4 text-black font-bold mb-8 bg-[#fff4a3] rounded-full'>
                FREE
              </button>
              <div className='space-y-4'>
                <p>
                  <span className='text-3xl font-bold mr-2'>$20</span>{' '}
                  <span> /month</span>
                </p>
                <p className='text-xl font-bold tracking-wide'>Free</p>
                <p className='text-xs font-medium'>
                  For new web developers reeady to create their first site
                </p>
              </div>
              <div className='space-y-2 mt-6 text-xs font-medium ml-2'>
                <p>
                  <a
                    href='#a'
                    className='text-pink-300/70 hover:text-pink-300/80'
                  >
                    {' '}
                    <span>
                      <CheckedIcon className='inline-flex mr-2' />
                    </span>
                    Browse W3Schools with ads
                  </a>
                </p>
                <p>
                  {' '}
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  Build static sites
                </p>
                <p>
                  {' '}
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  3 space
                </p>
                <p>
                  {' '}
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  300 MB storage
                </p>
                <p>
                  {' '}
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  1500 requests/month
                </p>
                <p>
                  {' '}
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  w3spaces.com subdomain
                </p>
                <p>
                  {' '}
                  <span>
                    <CheckedIcon className='inline-flex mr-2' />
                  </span>
                  SSL certificate
                </p>
              </div>
              <button className='px-6 mt-8 py-1.5 text-black font-normal mb-4 bg-[#ffc0c7] rounded-full w-full text-sm'>
                Get started for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
