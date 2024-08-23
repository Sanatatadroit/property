import React from 'react';
import Headers from '../Components/Headers';
import { PiClockCounterClockwise } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";

import { Link } from 'react-router-dom';

function Commercial() {
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
            srcSet="https://dist-property-frontend-daft.daft.ie/static/images/backgrounds/homepage-hero-commercial-desktop.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 640px)"
            srcSet="https://dist-property-frontend-daft.daft.ie/static/images/backgrounds/homepage-hero-buy-mobile.webp"
            type="image/webp"
          />
          <img
            className="w-full h-full object-cover"
            src="../dist-property-frontend-daft.daft.ie/static/images/backgrounds/homepage-hero-commercial-desktop.jpg"
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

    {/* Browser Content  */}


    <div className="p-6 mt-10">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">Browse by section</h3>
        <div className="flex flex-wrap gap-4">
          <Link to="/ForSale">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              Commercial
            </button>
          </Link>
          <Link to="/ToRent">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              Office Space
            </button>
          </Link>
          <Link to="/Sharing">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              Retail Unit
            </button>
          </Link>
          <Link to="/NewHomes">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              Industrial Unit
            </button>
          </Link>
          <Link to="/HolidayHomes">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              restuarant/Bar/Hotel
            </button>
          </Link>
          <Link to="/Overseas">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              Commercial Site
            </button>
          </Link>
          <Link to="/Parking">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              Agricultural Land
            </button>
          </Link>
          <Link to="/Commercial">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              Development Land
            </button>
          </Link>
          <Link to="/student-accommodation">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              Industrial Site
            </button>
          </Link>
        </div>
      </div>
    </div>


        {/* Property Tools Content   */}

    <div data-testid="tabs-panels-Property Tools" className="container mx-auto px-[250px] py-6 ">
      <div className="flex space-x-4 mb-4">
        <div className="flex-shrink-0">
          <button
            aria-label="Selling"
            type="button"
            data-testid="tabs-panels-0"
            className="text-black px-4 py-2 rounded hover:underline hover:text-blue-500 text-xl  focus:outline-none"
          >
            Selling
          </button>
        </div>
        <div className="flex-shrink-0">
          <button
            aria-label="Buying"
            type="button"
            data-testid="tabs-panels-1"
            className="text-black px-4 py-2 rounded focus:outline-none text-xl"
          >
            Buying
          </button>
        </div>
      </div>
      <ul data-testid="tabs-panels-list" className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
       
        <li className=" items-center p-4 bg-white rounded shadow hover:bg-gray-100 py-6">
          <img
            src="https://dist-property-frontend-daft.daft.ie/static/images/news_alert.svg"
            alt="Get a free expert home valuation"
            className="w-10 h-10 mr-4 mb-4"
          />
          <div>
            <p id="homepage-property-tools-agent-valuation" className="text-lg font-semibold">
            Residential Zoned Land Tax (RZLT)
            </p>
            <p>The Residential Zoned Land Tax is a tax to be applied at a...</p>
            <p className='text-blue-500'>Learn more</p>

          </div>
          

        </li>
        <li className=" items-center p-4 bg-white rounded shadow hover:bg-gray-100 py-6">
          <img
            src="https://dist-property-frontend-daft.daft.ie/static/images/news_alert.svg"
            alt="Market your home with an Advantage Ad"
            className="w-10 h-10 mr-4 mb-4"
          />
          <div>
            <p id="homepage-property-tools-Advantage-Ad" className="text-lg font-semibold">
            Dublin Office Market Q1 2023 
            </p>
            <p>The length and complexity of the planning process is...</p>
            <p className='text-blue-500'>Learn more</p>

          </div>
          

        </li>
      </ul>
    </div>
    <hr className='mt-14'/>
    
    </div>
  );
}

export default Commercial;
