import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const PropertyTools = () => {
  return (
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
        <Link to='/HomeToSell'> 
        <li className="flex items-center p-4 bg-white rounded shadow hover:bg-gray-100 py-6">
          <img
            src="https://dist-property-frontend-daft.daft.ie/static/images/tabs-panels/how-to-sell-my-home.svg"
            alt="How to sell my home"
            className="w-16 h-16 mr-4"
          />
          <div>
            <p id="homepage-property-tools-how-to-sell" className="text-lg font-semibold">
              How to sell my home
            </p>
            <p>Learn more about the steps involved in selling</p>
          </div>
                <IoIosArrowForward className="mx-auto" />

        </li>
        </Link>
        <li className="flex items-center p-4 bg-white rounded shadow hover:bg-gray-100 py-6">
          <img
            src="https://dist-property-frontend-daft.daft.ie/static/images/tabs-panels/home-value.svg"
            alt="What is my home worth?"
            className="w-16 h-16 mr-4"
          />
          <div>
            <p id="homepage-property-tools-instant-valuation" className="text-lg font-semibold">
              What is my home worth?
            </p>
            <p>Get an instant online valuation</p>
          </div>
                <IoIosArrowForward className="mx-auto" />

        </li>
        <li className="flex items-center p-4 bg-white rounded shadow hover:bg-gray-100 py-6">
          <img
            src="https://dist-property-frontend-daft.daft.ie/static/images/tabs-panels/get-free-agent-valuation.svg"
            alt="Get a free expert home valuation"
            className="w-16 h-16 mr-4"
          />
          <div>
            <p id="homepage-property-tools-agent-valuation" className="text-lg font-semibold">
              Get a free expert home valuation
            </p>
            <p>Get a no-obligation valuation from your local agent</p>
          </div>
                <IoIosArrowForward className="mx-auto" />

        </li>
        <li className="flex items-center p-4 bg-white rounded shadow hover:bg-gray-100 py-6">
          <img
            src="https://dist-property-frontend-daft.daft.ie/static/images/tabs-panels/market-your-home.svg"
            alt="Market your home with an Advantage Ad"
            className="w-16 h-16 mr-4"
          />
          <div>
            <p id="homepage-property-tools-Advantage-Ad" className="text-lg font-semibold">
              Market your home with an Advantage Ad
            </p>
            <p>Unbeatable Visibility, more offers, best price</p>
          </div>
                <IoIosArrowForward className="mx-auto" />

        </li>
        <li className="flex items-center p-4 bg-white rounded shadow hover:bg-gray-100 py-6">
          <img
            src="https://dist-property-frontend-daft.daft.ie/static/images/tabs-panels/enable-online-offers.svg"
            alt="Get a free expert home valuation"
            className="w-16 h-16 mr-4"
          />
          <div>
            <p id="homepage-property-tools-agent-valuation" className="text-lg font-semibold">
            Enable online offers
            </p>
            <p>See offers in real time on your home</p>
          </div>
                <IoIosArrowForward className="mx-auto" />

        </li>
        <li className="flex items-center p-4 bg-white rounded shadow hover:bg-gray-100 py-6">
          <img
            src="https://dist-property-frontend-daft.daft.ie/static/images/tabs-panels/approve-my-ad.svg"
            alt="Market your home with an Advantage Ad"
            className="w-16 h-16 mr-4"
          />
          <div>
            <p id="homepage-property-tools-Advantage-Ad" className="text-lg font-semibold">
            Approve my ad   
            </p>
            <p>Preview and approve your ad before going live</p>
          </div>
                <IoIosArrowForward className="mx-auto" />

        </li>
      </ul>
    </div>
  );
};

export default PropertyTools;
