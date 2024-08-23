import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Headers() {
  // State to manage dropdown visibility
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle mouse enter for dropdown
  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  // Handle mouse leave for dropdown
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-whites text-white py-4 px-[200px]">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Left side links */}
        <ul className="flex space-x-6 text-bold">
          <li>
            <Link to="/">
              <img 
                src="./daft-logo.svg" 
                alt="daft.ie logo" 
                className="h-7 mr-4"
              />
            </Link>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <Link to="/" className="hover:underline">Buy</Link>
            {activeDropdown === 1 && (
              <div className="absolute top-full left-0 mt-2 w-64 rounded-md bg-white border border-gray-300 shadow-lg z-10 text-black">
                <ul>
                  <li><Link to="ForSale" className="block px-4 py-2 hover:bg-gray-100">All Property</Link></li>
                  <li><Link to="ToRent" className="block px-4 py-2 hover:bg-gray-100">Houses</Link></li>
                  <li><Link to="Sharing" className="block px-4 py-2 hover:bg-gray-100">Appartments</Link></li>
                  <li><Link to="Parking" className="block px-4 py-2 hover:bg-gray-100">Online Offer Available</Link></li>
                  <li><Link to="HolidayHomes" className="block px-4 py-2 hover:bg-gray-100">Sites</Link></li>
                  <li><Link to="Parking" className="block px-4 py-2 hover:bg-gray-100">Ocerseas</Link></li>
                  <li><Link to="Parking" className="block px-4 py-2 hover:bg-gray-100">Parking Spaces</Link></li>
                  <li><Link to="Parking" className="block px-4 py-2 hover:bg-gray-100">Buying Tools</Link></li>

                </ul>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <Link to="/" className="hover:underline">Rent</Link>
            {activeDropdown === 2 && (
              <div className="absolute top-full left-0 mt-2 w-64 rounded-md bg-white border border-gray-300 shadow-lg z-10 text-black">
                <ul>
                <li><Link to="ForSale" className="block px-4 py-2 hover:bg-gray-100">All Property</Link></li>
                  <li><Link to="ToRent" className="block px-4 py-2 hover:bg-gray-100">Houses</Link></li>
                  <li><Link to="Sharing" className="block px-4 py-2 hover:bg-gray-100">Appartments</Link></li>
                  <li><Link to="ToRent" className="block px-4 py-2 hover:bg-gray-100">Student Accomdation</Link></li>
                  <li><Link to="Parking" className="block px-4 py-2 hover:bg-gray-100">Holiday Homes</Link></li>
                  <li><Link to="ToRent" className="block px-4 py-2 hover:bg-gray-100">Ocerseas</Link></li>
                  <li><Link to="Parking" className="block px-4 py-2 hover:bg-gray-100">Parking Spaces</Link></li>
                  <li><Link to="Parking " className="block px-4 py-2 hover:bg-gray-100">Short Terms</Link></li>
                </ul>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <Link to="/" className="hover:underline">Share</Link>
            {activeDropdown === 3 && (
              <div className="absolute top-full left-0 mt-2 w-64 rounded-md bg-white border border-gray-300 shadow-lg z-10 text-black p-2">
                <ul>
                  <li><Link to="ForSAle" className="block px-4 py-2 hover:bg-gray-100">All Property</Link></li>
                  <li><Link to="Parking" className="block px-4 py-2 hover:bg-gray-100">Student Accomdation</Link></li>
                </ul>
              </div>
            )}
          </li>
          {/* Add other items similarly */}
          <li><Link to="/" className="hover:underline">New Homes</Link></li>
          <li><Link to="/" className="hover:underline">Sell</Link></li>
          <li><Link to="/" className="hover:underline">Commercial</Link></li>
          <li><Link to="/" className="hover:underline">Mortgages</Link></li>
        </ul>

        {/* Right side links */}
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">Place Ad</Link></li>
          <li><Link to="/signin" className="hover:underline">Sign In</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Headers;
