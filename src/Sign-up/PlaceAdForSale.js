import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import axios from 'axios';

const PlaceAdForSale = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [adTypes, setAdTypes] = useState([]);

  // Fetch ad types from API
  useEffect(() => {
    const fetchAdTypes = async () => {
      try {
        const token = localStorage.getItem('token'); // Get the token from local storage
        const response = await axios.get('http://127.0.0.1:2030/property/propertyAdtype', {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in the header
          },
        });
        setAdTypes(response.data.data);
      } catch (error) {
        console.error('Error fetching ad types:', error);
      }
    };

    fetchAdTypes();
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextClick = () => {
    if (selectedOption) {
      const selectedAdType = adTypes.find(adType => adType._id === selectedOption);
      const route = getRouteFromAdType(selectedAdType);
  
      if (route) {
        // Append the selectedOption (_id) as a query parameter
        navigate(`${route}?id=${selectedOption}`);
      } else {
        alert('Invalid ad type selected.');
      }
    } else {
      alert('Please select an option before proceeding.');
    }
  };
  

  // Determine route based on ad type
  const getRouteFromAdType = (adType) => {
    if (adType) {
      if (adType.rent) {
        switch (adType.propertyAdType) {
          case 'Residential Rent':
            return '/residential-rent';
          case 'Sharing (Rent a room)':
            return '/sharing-rent';
          case 'Commercial Rent':
            return '/commercial-rent';
          case 'Parking Rent':
            return '/parking-rent';
          default:
            return null;
        }
      } else if (adType.sell) {
        switch (adType.propertyAdType) {
          case 'Residential Sale':
            return '/residential-sale';
          case 'Commercial Sale':
            return '/commercial-sale';
          case 'Parking Sale':
            return '/parking-sale';
          default:
            return null;
        }
      }
    }
    return null;
  };

  return (
    <div>
      <Header />

      {/* Centered Container */}
      <div className="max-w-lg mx-auto px-4 py-10">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-4 text-center">Choose your ad type</h1>

        {/* Subtext */}
        <p className="text-lg text-gray-700 mb-8 text-center">
          These are the categories that your ad is going to be listed in.
        </p>

        {/* Rent Section */}
        <h2 className="text-sm font-semibold mb-1">Rent</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* Render Rent Options */}
          {adTypes
            .filter((adType) => adType.rent)
            .map((adType) => (
              <label
                key={adType._id}
                className="border rounded-md p-4 flex items-center cursor-pointer"
              >
                <input
                  type="radio"
                  name="adType"
                  value={adType._id}
                  className="mr-3"
                  onChange={handleOptionChange}
                />
                {adType.propertyAdType}
              </label>
            ))}
        </div>

        {/* Sale Section */}
        <h2 className="text-sm font-semibold mb-1">Sale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Render Sale Options */}
          {adTypes
            .filter((adType) => adType.sell)
            .map((adType) => (
              <label
                key={adType._id}
                className="border rounded-md p-4 flex items-center cursor-pointer"
              >
                <input
                  type="radio"
                  name="adType"
                  value={adType._id}
                  className="mr-3"
                  onChange={handleOptionChange}
                />
                {adType.propertyAdType}
              </label>
            ))}
        </div>

        <button
          className="border rounded-lg bg-[rgb(65,112,196)] font-semibold text-white mt-5 px-56 py-3"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
      <hr />
    </div>
  );
};

export default PlaceAdForSale;
