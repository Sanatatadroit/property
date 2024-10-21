import React, { useState } from 'react';

const ExpertHomeValuation = () => {
  const [inputValue, setInputValue] = useState(''); // State to track the input value

  const isInputEmpty = inputValue.trim() === ''; // Check if the input is empty

  return (
    <div>
      <div className='px-60 mt-5 mb-6'>
        <img
          src="./daft-logo.svg"
          alt="daft.ie logo"
          className="h-7 mr-4"
        />
        <div className="flex flex-col items-center bg-background p-4">
          <div className="bg-white rounded-lg p-6 mt-4 w-full max-w-lg">
            <h2 className="text-2xl font-medium mb-1">Locate your property</h2>
            <p className="text-lg mb-6">
              Please enter your eircode so we can match you up with a local property expert in your area
            </p>
            <div className="mb-10">
              <label className="block text-base font-medium mb-1">Eircode or address *</label>
              <div className='flex'>
                <input
                  type="text"
                  placeholder="e.g. D06 1234 or 1 Main Road"
                  className="border border-zinc-300 rounded-l-md p-2 w-full"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)} // Update the state when the input changes
                />
                <button className="bg-[rgb(65,112,196)] font-semibold text-white rounded-r-md px-4 py-3">
                  SEARCH
                </button>
              </div>
              <p className='text-[12px] text-[rgb(113,113,113)] mt-2'>
                Don’t know your Eircode?<span className='text-blue-600'>Find Eircode</span>
              </p>
            </div>
            <button
              className={`font-semibold rounded-md px-4 py-4 w-full ${
                isInputEmpty ? 'cursor-not-allowed bg-[rgb(203,216,238)] text-white' : 'bg-[rgb(65,112,196)] text-white'
              }`}
              disabled={isInputEmpty} // Disable the button if the input is empty
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ExpertHomeValuation;
