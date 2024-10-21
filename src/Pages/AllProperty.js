import React, { useState, useEffect } from 'react';
import { CiHeart, CiSearch } from "react-icons/ci";
import Header from '../Components/Header';

const AllProperty = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        const response = await fetch('http://127.0.0.1:2030/property/propertysellad/all', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        if (data.success) {
          setListings(data.data); // Set the property listings data
        } else {
          throw new Error('Failed to fetch properties');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto flex justify-between items-center mt-5 mb-8">
        <CiSearch className='text-xl' />
        <input
          type="text"
          placeholder="Country, City, Town Or Area"
          className="flex p-4 border border-gray-300 rounded-md outline-none w-[500px]"
        />
        <div className="flex justify-between items-center bg-white border rounded-md shadow-sm">
          <div className="flex items-center space-x-12">
            <select className="border-gray-300 rounded-md p-2 cursor-pointer">
              <option value="option1">Price</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <div className="border-l border-gray-300 h-14 mx-4"></div>
            <select className="border-gray-300 rounded-md p-2 cursor-pointer">
              <option value="option1">Beds</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <div className="border-l border-gray-300 h-14 mx-4"></div>
            <button className="border-gray-300 rounded-md p-2 text-black">
              Filters
            </button>
          </div>
        </div>
        <button className="border border-gray-300 rounded-md p-4 text-black ml-1 px-5 flex">
          <CiHeart className="text-2xl text-gray-500 cursor-pointer" /> Save
        </button>
      </div>
      <div className="max-w-2xl mx-auto flex justify-between items-center mt-10 mb-6">
        <span className="text-lg font-semibold">{listings.length} Properties to Share near Ireland</span>
        <select className="border border-gray-300 rounded-md p-2">
          <option value="option1">Best Match</option>
          <option value="option2">Most Recent</option>
          <option value="option3">Price Low to High</option>
          <option value="option4">Price High to Low</option>
        </select>
        <input
          type="text"
          placeholder="Map"
          className="border border-gray-300 rounded-md p-2 ml-4 w-28"
        />
      </div>

      {listings.map((property) => (
        <div
          key={property._id}
          className="max-w-2xl mx-auto shadow-lg rounded-lg border border-gray-200 mt-10"
        >
          <div className="flex justify-between items-center bg-slate-600">
            <h4 className="text-lg font-semibold text-orange-100 px-8">
              {property.country} <span className="text-xs">Living</span>
            </h4>
            <div>
              <h4 className="text-sm font-semibold text-white">
                {property.fullName}
              </h4>
              <h4 className="text-white">{property.email}</h4>
            </div>
            <img
              src={property.media[0]} // Assuming the first media URL is used for the top row image
              alt="Top Row"
              className="w-12 h-12 rounded-full"
            />
          </div>

          <div className="mb-4">
            <img src={property.media[0]} alt="Full Width" className="w-full h-auto" />
          </div>

          <div className="mb-4 flex justify-between items-center mx-3">
            <div>
              <h3 className="text-sm font-semibold">
                {property.address}
              </h3>
              <div className="flex items-center">
                <p className="text-gray-700">
                  {/* {property.propertyFeatures.join(', ')} */}
                </p>
                <i className="text-gray-500 fas fa-arrow-right ml-2"></i>
              </div>
            </div>
            <CiHeart className="text-5xl text-gray-500 ml-4 cursor-pointer" />
          </div>

          <hr className="my-4 border-gray-300" />

          <div className="flex items-center">
            <img src={property.media[0]} alt="Small" className="w-20 h-14 m-2" />
            <div>
              <p className="text-black font-medium">€{property.price}</p>
              <p className="text-slate-500">{property.bedrooms} Beds, {property.bathrooms} Baths</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProperty;
