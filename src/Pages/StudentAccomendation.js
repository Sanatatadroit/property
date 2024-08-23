import React from 'react';
import Headers from '../Components/Headers';
import { PiClockCounterClockwise } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";



function StudentAccomendation() {
  return (
    <div>
    <div className="relative bg-gray-100">
      {/* Header */}
      <div className="absolute inset-x-0 top-0 z-10">
        <Headers />
      </div>

      {/* Hero Image */}
      <div className="relative h-[600px] overflow-hidden">
        <picture>
          <source
            media="(min-width: 640px)"
            srcSet="https://dist-property-frontend-daft.daft.ie/static/images/backgrounds/homepage-hero-student-accommodation-desktop.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 640px)"
            srcSet="https://dist-property-frontend-daft.daft.ie/static/images/backgrounds/homepage-hero-buy-mobile.webp"
            type="image/webp"
          />
          <img
            className="w-full h-full object-cover"
            src="https://dist-property-frontend-daft.daft.ie/static/images/backgrounds/homepage-hero-student-accommodation-desktop.jpg"
            alt="homepage"
          />
        </picture>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
  <h1 className="text-5xl font-bold mb-6 mt-12">Space to grow</h1>
  <div className="w-full max-w-4xl mx-auto"> {/* Adjusted max-width and added mx-auto */}
    <div className="w-full border-2 rounded-lg bg-white"> {/* Set width to 100% so it respects the parent container */}
      <ul className="flex justify-center space-x-4 bg-opacity-50  rounded-md text-black p-8 text-xl font-medium">
        <li className="cursor-pointer px-4 py-2 hover:text-blue-500 hover:underline  rounded">To Lease</li>
        <li className="cursor-pointer px-4 py-2 hover:text-blue-500 hover:underline rounded">For Sale</li>
     
      </ul>
      <div className="relative mt-4 pb-9 px-8">
        <div className="flex items-center bg-white rounded-md border border-gray-300">
          <svg
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            className="w-6 h-6 ml-2 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7.067 3.1A7.498 7.498 0 1112.933 16.9 7.498 7.498 0 017.067 3.1zM15.5 15.5l6 6"></path>
          </svg>
          <input
            type="text"
            placeholder="County, City, Town or Area"
            className="flex-1 p-2 border-none outline-none px-16 py-5"
          />
        </div>
        <div className="mt-5">
      {/* Input Field with Icons */}
      <div className="relative flex items-center bg-white rounded-md border border-gray-300">
        {/* Left Icon */}
        <PiClockCounterClockwise className="w-6 h-6 ml-2 text-gray-500" />

        {/* Input Field */}
        <input
          type="text"
          placeholder="Last search: Ireland "
          className="flex-1 p-4 pl-14 pr-10 py-5 border-none outline-none text-black font-semibold"
        />

        {/* Right Icon */}
        <IoIosArrowForward className="absolute right-3 w-6 h-6 text-gray-500" />
      </div>

      {/* Helper Text Below Input */}
      
    </div>
      </div>
    </div>
    {/* SEO Content Inside Hero */}
    <div className="mt-8 text-white">
      <h2 className="text-xl font-semibold mb-4">
        Houses and Apartments for Sale on Daft.ie
        <span className="block text-gray-200">
          Find your next home on Ireland's favourite property site
        </span>
      </h2>
    </div>
  </div>
</div>


      </div>
    </div>

   


    <hr className='mt-14'/>
    
    </div>
  );
}

export default StudentAccomendation;
