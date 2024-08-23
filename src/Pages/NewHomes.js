import React from 'react';
import { CiHeart } from "react-icons/ci";
import Header from '../Components/Header';
import { CiCalculator1 } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";


const NewHomes = () => {
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
              <div className="flex justify-between items-center bg-slate-600 p-2">
                <h4 className="text-lg font-semibold text-white px-8">
                   <span className="text-3xl font-bold">Howard</span>
                </h4>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                  Dan Howard MIPAV TRV PSR 006328
                  </h4>
                  <h4 className="text-white">Dan Howard & Co. Ltd</h4>
                </div>
                <img
                  src="https://via.placeholder.com/50"
                  alt="Top Row "
                  className="w-12 h-12 rounded-full"
                />
              </div>

              {/* Flex container for the main image and small images */}
              <div className="mb-4">
            <img src="./image.png" alt="Full Width " className="w-full h-auto" />
          </div>

              {/* Text Below the Image */}
              <div className="mb-4 flex justify-between items-center mx-3">
                <div>
                  <h3 className="text-sm font-semibold">
                    11 Douglas Street, Cork City, Co. Cork, T12HY22
                  </h3>
                  <div className="flex items-center">
                    <p className="text-gray-700">€490,000</p>
                    <i className="text-gray-500 fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
                {/* Add the heart icon here */}
                <CiHeart className="text-5xl text-gray-500 ml-4 cursor-pointer" />
              </div>

            {/* Horizontal Line Break */}
          <hr className="my-1 border-gray-300" />

            {/* Small Image with Text in a Row */}
            <div className="flex items-center">
            <img src="./image.png" alt="Small " className="w-20 h-14 m-2" />
            <div>
                <p className="text-black font-medium">€1,895 </p>
                <p className="text-slate-500">Double Room : Sharing</p>
            </div>
            </div>
            <hr className="my-1 border-gray-300" />

            {/* Small Image with Text in a Row */}
            <div className="flex items-center">
            <img src="./image.png" alt="Small " className="w-20 h-14 m-2" />
            <div>
                <p className="text-black font-medium">€1,895 </p>
                <p className="text-slate-500">Double Room : Sharing</p>
            </div>
            </div>
            <hr className="my-1 border-gray-300" />

            {/* Small Image with Text in a Row */}
            <div className="flex items-center">
            <img src="./image.png" alt="Small " className="w-20 h-14 m-2" />
            <div>
                <p className="text-black font-medium">€1,895 </p>
                <p className="text-slate-500">Double Room : Sharing</p>
            </div>
            </div>
            </div>
          ))}
        </div>

        {/* Second Portion (Small Container - 30% width) */}
        <div className="w-3/10 pl-4 pt-10">
          <div className="shadow-lg rounded-lg border border-gray-200 p-4">
            {/* Small Image and Text */}
            <div className="flex items-center">
            <CiCalculator1  className='text-3xl mr-2'/>
              <div>
            

                <h4 className="font-normal text-lg">Curious about Buying?</h4>
                <p className="text-gray-700">Calculate what you might afford</p>
              </div>
              <IoIosArrowForward className='ml-9'/>
            </div>
            
          </div>
          <div className="shadow-lg rounded-lg border border-gray-200 p-4 mt-4">
            {/* Small Image and Text */}
            <div className="flex items-center">
            <CiLocationArrow1   className='text-3xl mr-2'/>
              <div>
            

                <h4 className="font-normal text-lg">Your Daft Buying Checklist</h4>
                <p className="text-gray-700">Track your buying progress</p>
              </div>
              <IoIosArrowForward className='ml-9'/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHomes;
