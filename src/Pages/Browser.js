// src/components/Browser.js
import React from 'react';
import { Link } from 'react-router-dom';

const Browser = () => {
  return (
    <div className="p-6 mt-10">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">Browse by section</h3>
        <div className="flex flex-wrap gap-4">
          <Link to="/ForSale">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              For Sale
            </button>
          </Link>
          <Link to="/ToRent">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              To Rent
            </button>
          </Link>
          <Link to="/Sharing">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              Sharing
            </button>
          </Link>
          <Link to="/NewHomes">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              New Homes
            </button>
          </Link>
          <Link to="/HolidayHomes">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              Holiday Homes
            </button>
          </Link>
          <Link to="/Overseas">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              Overseas
            </button>
          </Link>
          <Link to="/Parking">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              Parking
            </button>
          </Link>
          <Link to="/Commercial">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              Commercial
            </button>
          </Link>
          <Link to="/StudentAccomendation">
            <button className="border border-gray-300 text-black rounded-lg px-8 py-5 hover:bg-gray-100 transition-colors">
              Student Accommodation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Browser;
