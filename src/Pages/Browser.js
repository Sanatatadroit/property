// src/components/Browser.js
import React from 'react';
import { Link } from 'react-router-dom';

const Browser = () => {
  return (
    <div className="p-6 mt-10">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">Browse by section</h3>
        <div className="flex flex-wrap gap-4">
          <Link to="/buy">
            <button className="border border-gray-300 text-black rounded-lg px-32 py-5 hover:bg-gray-100 transition-colors">
              Buy
            </button>
          </Link>
          <Link to="/Sale">
            <button className="border border-gray-300 text-black rounded-lg px-32 py-5 hover:bg-gray-100 transition-colors">
              Sell
            </button>
          </Link>
          <Link to="/Sharing">
            <button className="border border-gray-300 text-black rounded-lg px-32 py-5 hover:bg-gray-100 transition-colors">
              Event
            </button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Browser;
