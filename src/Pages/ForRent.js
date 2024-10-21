// src/pages/ForRent.jsx

import React, { useEffect, useState } from 'react';
import { CiHeart } from "react-icons/ci";
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

const ForRent = () => {
  const [listings, setListings] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetch('http://127.0.0.1:2030/property/get-allpropertyad')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setListings(data.data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto flex justify-between items-center mt-5 mb-8 px-32">
        <input
          type="text"
          placeholder="Country, City, Town Or Area"
          className="flex p-4 border border-gray-300 rounded-md outline-none w-[500px]"
        />
        <div className="flex justify-between items-center bg-white border rounded-md shadow-sm">
          <div className="flex items-center space-x-12">
            <select className="border-gray-300 rounded-md p-2 cursor-pointer">
              <option value="option1">Buy type</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <div className="border-l border-gray-300 h-14 mx-4"></div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto flex justify-between items-center mt-10 mb-6">
        <span className="text-lg font-semibold">Properties Available</span>
      </div>

      {/* Loop through the array to display the properties */}
      {listings.map((property) => (
        <div
          key={property._id}
          className="max-w-2xl mx-auto shadow-lg rounded-lg border border-gray-200 mt-10"
        >
          {/* Property Media */}
          <div className="mb-4">
            {property.media && property.media.length > 0 ? (
              <img src={property.media[0]} alt="Property" className="w-full h-auto" />
            ) : (
              <p>No Image Available</p>
            )}
          </div>

          {/* Property Details */}
          <div className="mb-4 flex justify-between items-center mx-3">
            <div>
              <h3 className="text-sm font-semibold">{property.propertyDescription}</h3>
              <p className="text-gray-700">{property.displayAddress}</p>
              <div className='flex'>
                <p className="text-gray-700"> {property.bedrooms || 'N/A'} Bed</p>,
                <p className="text-gray-700"> {property.bathrooms || 'N/A'} Bath</p>,  
                <p className="text-gray-700"> {property.floorArea} {property.floorAreaUnit?.floorAreaUnitName || ''}</p>
              </div>
              <p className="text-gray-700">Price: €{property.price || 'N/A'}</p>
              <p className="text-gray-700">Features: {property.propertyFeatures.join(', ') || 'N/A'}</p>
            </div>
            {/* <CiHeart className="text-5xl text-gray-500 ml-4 cursor-pointer" /> */}
          </div>

          {/* View Button */}
          <div className="mb-8 text-right mx-3 ">
            <Link to={`/property/${property._id}`} className="text-white font-semibold hover:underline border rounded-full p-3 bg-blue-500 ">View Detail</Link>
          </div>
{/* 
          <hr className="my-4 border-gray-300" /> */}
        </div>
      ))}
    </div>
  );
};

export default ForRent;
