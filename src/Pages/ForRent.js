import React from 'react';
import { CiHeart } from "react-icons/ci";
import Header from '../Components/Header';
import { CiSearch } from "react-icons/ci";

const ForRent = () => {
  // Dummy array to represent the repeated content
  const listings = [1, 2, 3]; // Array with 3 items to map over

  return (
    <div>
      <Header />
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
      {/* Row with Text, Dropdown, and Input Field */}
      <div className="max-w-2xl mx-auto flex justify-between items-center mt-10 mb-6">
        {/* Label */}
        <span className="text-lg font-semibold">2,403 Properties to Share near Ireland</span>
        
        {/* Dropdown */}
        <select className="border border-gray-300 rounded-md p-2">
          <option value="option1">Best Match</option>
          <option value="option2">Most Recent </option>
          <option value="option3">Price Low to High</option>
          <option value="option3">Price High to Low</option>

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
          className="max-w-2xl mx-auto shadow-lg rounded-lg border border-gray-200 mt-10"
        >
          {/* Top Row with Two Texts and an Image */}
          <div className="flex justify-between items-center bg-slate-600">
            <h4 className="text-lg font-semibold text-orange-100 px-8">
              niche <span className="text-xs">Living</span>
            </h4>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Niche Living Enquiry Dun Laoghaire
              </h4>
              <h4 className="text-white">Niche Living</h4>
            </div>
            <img
              src="https://via.placeholder.com/50"
              alt="Top Row "
              className="w-12 h-12 rounded-full "
            />
          </div>

          {/* Full-Width Image */}
          <div className="mb-4">
            <img src="./image.png" alt="Full Width " className="w-full h-auto" />
          </div>

          {/* Text Below the Image */}
          <div className="mb-4 flex justify-between items-center mx-3">
            <div>
              <h3 className="text-sm font-semibold">
                Niche Living, Private Studios, ALL Bills INCL, Eblana Avenue, Dun Laoghaire, Co. Dublin
              </h3>
              <div className="flex items-center">
                <p className="text-gray-700">
                  Private Ensuite Studios, ALL Bills INCL, 19 min DART to City Centre
                </p>
                <i className="text-gray-500 fas fa-arrow-right ml-2"></i>
              </div>
            </div>
            {/* Add the heart icon here */}
            <CiHeart className="text-5xl text-gray-500 ml-4 cursor-pointer" />
          </div>

          {/* Horizontal Line Break */}
          <hr className="my-4 border-gray-300" />

          {/* Small Image with Text in a Row */}
          <div className="flex items-center">
            <img src="./image.png" alt="Small " className="w-20 h-14 m-2" />
            <div>
              <p className="text-black font-medium">€1,895 per month</p>
              <p className="text-slate-500">Double Room : Sharing</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForRent;
