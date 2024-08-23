import React from 'react';
import { CiHeart } from "react-icons/ci";
import Header from '../Components/Header';
import { IoIosArrowForward } from "react-icons/io";
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { CiSearch } from "react-icons/ci";

const Parking = () => {
  // Dummy array to represent the repeated content
  const listings = [1, 2, 3]; // Array with 3 items to map over

  return (
    <div>
      <Header />
      
      {/* Row with Text, Dropdown, and Input Field */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mt-5 mb-8">
        {/* Search Input */}
        <CiSearch className='text-xl' />

        <input
          type="text"
          placeholder="Country, City, Town Or Area"
          className="flex p-4 border border-gray-300 rounded-md outline-none w-[500px]"
        />

        {/* Dropdowns and Buttons Row */}
        <div className="flex justify-between items-center bg-white border rounded-md shadow-sm">
  {/* Left Side (Dropdowns and Button with Vertical Line) */}
  <div className="flex items-center space-x-12">
    {/* Dropdown 1 */}
    <select className=" border-gray-300 rounded-md p-2 cursor-pointer" >
      <option value="option1">Price</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    <div className="border-l border-gray-300 h-14 mx-4"></div>
    {/* Dropdown 2 */}
    <select className=" border-gray-300 rounded-md p-2 cursor-pointer">
      <option value="option1">Beds</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    <div className="border-l border-gray-300 h-14 mx-4"></div>
    {/* Normal Button */}
    <button className=" border-gray-300 rounded-md p-2 text-black">
      Filters
    </button>
  </div>
  
</div>

<button className="border border-gray-300 rounded-md p-4  text-black ml-1 px-5 flex">
<CiHeart className="text-2xl text-gray-500  cursor-pointer" /> Save 
  </button>
      </div>

      <div className="max-w-6xl mx-auto flex">
        {/* First Portion (Main Container - 70% width) */}
        <div className="w-7/10 pr-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center mt-10 mb-6">
        {/* Label */}
        <span className="text-lg font-semibold">2,403 Properties to Share near Ireland</span>
        
        {/* Dropdown */}
        <select className="border border-gray-300 rounded-md p-2">
          <option value="option1">Best Match</option>
          <option value="option2">Most Recent </option>
          <option value="option3">Price Low to High</option>
          <option value="option4">Price High to Low</option>
        </select>
        
        {/* Input Field */}
        <input
          type="text"
          placeholder="Map"
          className="border border-gray-300 rounded-md p-2 ml-4 w-28"
        />
      </div>
          {/* Loop through the array to display the container 3 times */}
          {listings.map((item, index) => (
            <div
              key={index}
              className="shadow-lg rounded-lg border border-gray-200 mt-10"
            >
              {/* Top Row with Two Texts and an Image */}
              <div className="flex justify-between items-center bg-[#006d70] p-2">
                <h4 className="text-lg font-semibold text-white px-8">
                   <span className="text-3xl font-bold">So Living</span>
                </h4>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                  Izabela
                  </h4>
                  <h4 className="text-white">So Living</h4>
                </div>
                <img
                  src="https://via.placeholder.com/50"
                  alt="Top Row "
                  className="w-12 h-12 rounded-full"
                />
              </div>

              {/* Flex container for the main image and small images */}
              <div className="flex mb-4">
                {/* Big Image (80% width) */}
                <div className="w-4/5">
                  <img src="./image4.png" alt="Full Width " className="w-full h-auto" />
                </div>

                {/* Small Images (20% width, in a column) */}
                <div className="w-1/5 flex flex-col justify-between ml-1">
                  <img src="./image5.png" alt="Small  1" className="w-full h-36" />
                  <img src="./image4.png" alt="Small  2" className="w-full h-32" />
                  <img src="./image5.png" alt="Small  3" className="w-full h-32" />
                </div>
              </div>

              {/* Text Below the Image */}
              <div className="mb-4 flex justify-between items-center mx-3">
                <div>
                  <h3 className="text-sm font-semibold">
                  New Street South, St Patricks Cathedral , Dublin 8
                  </h3>
                  <div className="flex items-center">
                    <p className="text-gray-700">€150 per month</p>
                    <i className="text-gray-500 fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
                {/* Add the heart icon here */}
                <CiHeart className="text-5xl text-gray-500 ml-4 cursor-pointer" />
              </div>

              {/* Small Image with Text in a Row */}
              <div className="flex items-center px-3">
                <p className="text-slate-500">
                24 Hour Access : 1 Parking Space To Rent
                </p>
              </div>
              <div className="p-2">
                <button className="border-2 rounded-lg bg-slate-300 text-black px-2">
                  City Centre
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Second Portion (Small Container - 30% width) */}
        <div className="w-3/10 pl-4 pt-10">
          <div className="shadow-lg rounded-lg border border-gray-200 p-4">
            {/* Small Image and Text */}
            <div className="flex items-center">
            <IoShieldCheckmarkOutline className='text-3xl mr-2'/>
              <div>
            

                <h4 className="font-normal text-lg">Stay Safe Online</h4>
                <p className="text-gray-700">Practical advice and tips</p>
              </div>
              <IoIosArrowForward className='ml-9'/>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Parking;
