import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeWorth = () => {
  const [address, setAddress] = useState('');
  const [numberOfBeds, setNumberOfBeds] = useState('');
  const [numberOfBaths, setNumberOfBaths] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [propertySize, setPropertySize] = useState('');
  const [isOwner, setIsOwner] = useState(true);
  const [whyFreeValuation, setWhyFreeValuation] = useState('');
  const [receiveUpdate, setReceiveUpdate] = useState(false);
  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const validateForm = () => {
    let formErrors = {};
    if (!address.trim()) formErrors.address = 'Address is required';
    if (!numberOfBeds) formErrors.numberOfBeds = 'Number of beds is required';
    if (!numberOfBaths) formErrors.numberOfBaths = 'Number of baths is required';
    if (!propertyType) formErrors.propertyType = 'Property type is required';
    if (!propertySize.trim()) formErrors.propertySize = 'Property size is required';
    if (!whyFreeValuation) formErrors.whyFreeValuation = 'Please specify why you want this valuation';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setAlertType('error');
      setAlertMessage('Please fill in all required fields correctly.');
      return;
    }

    const data = {
      address,
      numberOfBeds,
      numberOfBaths,
      propertyType,
      propertySize,
      isOwner,
      whyFreeValuation,
      receiveUpdate,
    };

    try {
      const response = await axios.post(
        'http://127.0.0.1:2030/property/aboutproperty',
        data,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmM2ZmU3MWJiNDNlYWFkOWUwZmNlMWYiLCJlbWFpbCI6Imt1bmFsQGdtYWlsLmNvbSIsImlhdCI6MTcyNDc0NjI0MSwiZXhwIjoxNzI0ODMyNjQxfQ.Ws-etCGinAeywgS0UZvwalrmBEW2ExUcWuro16tBWbY`,
          },
        }
      );
      toast.success('Property valuation submitted successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred while submitting the form.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="px-60 mt-5 mb-6">
        <img src="./daft-logo.svg" alt="daft.ie logo" className="h-7 mr-4" />
        <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
          <div className="bg-white rounded-lg p-6 mt-4 w-full max-w-lg">
            {alertMessage && (
              <div
                className={`mb-4 p-4 rounded ${
                  alertType === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                }`}
              >
                {alertMessage}
              </div>
            )}
            <h2 className="text-2xl font-semibold mb-1">Find out what your home is worth</h2>
            <p className="text-muted-foreground mb-6">
              Get a free instant online valuation of your property to help you understand how much you could sell your home for.
            </p>
            <h2 className="text-xl font-semibold mb-6">About your property</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-10">
                <label className="block text-base font-medium mb-1">Eircode or address *</label>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="e.g. D06 1234 or 1 Main Road"
                    className={`border ${errors.address ? 'border-red-500' : 'border-zinc-300'} rounded-l-md p-2 w-full`}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <button className="bg-[rgb(65,112,196)] font-semibold text-white rounded-r-md px-4 py-3">SEARCH</button>
                </div>
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                <p className="text-[12px] text-[rgb(113,113,113)] mt-2">
                  Don’t know your Eircode? <span className="text-blue-600">Find Eircode</span>
                </p>
              </div>
              <div className="mb-10">
                <label className="block text-sm font-medium mb-1">Number of beds *</label>
                <select
                  className={`border ${errors.numberOfBeds ? 'border-red-500' : 'border-zinc-300'} rounded-md p-2 w-full`}
                  value={numberOfBeds}
                  onChange={(e) => setNumberOfBeds(e.target.value)}
                >
                  <option value="">Select an option</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                {errors.numberOfBeds && <p className="text-red-500 text-sm mt-1">{errors.numberOfBeds}</p>}
              </div>
              <div className="mb-10">
                <label className="block text-sm font-medium mb-1">Number of baths *</label>
                <select
                  className={`border ${errors.numberOfBaths ? 'border-red-500' : 'border-zinc-300'} rounded-md p-2 w-full`}
                  value={numberOfBaths}
                  onChange={(e) => setNumberOfBaths(e.target.value)}
                >
                  <option value="">Select an option</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                {errors.numberOfBaths && <p className="text-red-500 text-sm mt-1">{errors.numberOfBaths}</p>}
              </div>
              <div className="mb-10">
                <label className="block text-sm font-medium mb-1">Property type *</label>
                <select
                  className={`border ${errors.propertyType ? 'border-red-500' : 'border-zinc-300'} rounded-md p-2 w-full`}
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Select an option</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Condo">Condo</option>
                </select>
                {errors.propertyType && <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>}
              </div>
              <div className="mb-10">
                <label className="block text-sm font-medium mb-1">Property size (m²) *</label>
                <input
                  type="text"
                  placeholder="e.g. 150"
                  className={`border ${errors.propertySize ? 'border-red-500' : 'border-zinc-300'} rounded-md p-2 w-full`}
                  value={propertySize}
                  onChange={(e) => setPropertySize(e.target.value)}
                />
                {errors.propertySize && <p className="text-red-500 text-sm mt-1">{errors.propertySize}</p>}
                <p className="text-[12px] text-[rgb(113,113,113)] mt-2">
                  Not sure of your property size? <span className="text-blue-600 underline">Click here for help</span>
                </p>
              </div>
              <hr />
              <h3 className="text-xl font-semibold mt-10 mb-2">About your relationship with the property</h3>
              <div className="mb-10">
                <label className="block text-base font-medium mb-1">Are you the owner of this property? *</label>
                <div className="flex gap-3">
                  <div className="flex border py-4 rounded-md px-10">
                    <input
                      type="radio"
                      id="owner"
                      name="ownership"
                      value="yes"
                      className="mr-2"
                      checked={isOwner}
                      onChange={() => setIsOwner(true)}
                    />
                    <label htmlFor="owner">Yes</label>
                  </div>
                  <div className="flex border py-4 rounded-md px-10">
                    <input
                      type="radio"
                      id="not-owner"
                      name="ownership"
                      value="no"
                      className="mr-2"
                      checked={!isOwner}
                      onChange={() => setIsOwner(false)}
                    />
                    <label htmlFor="not-owner">No</label>
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <label className="block text-sm font-medium mb-1">Why do you want this free valuation? *</label>
                <select
                  className={`border ${errors.whyFreeValuation ? 'border-red-500' : 'border-zinc-300'} rounded-md p-2 w-full`}
                  value={whyFreeValuation}
                  onChange={(e) => setWhyFreeValuation(e.target.value)}
                >
                      <option>Select an option</option>
                  <option value="I may be interested in buying">I may be interested in buying</option>
                  <option value="I'm checking the value purely out of interest">I'm checking the value purely out of interest</option>
                  <option value="Another reason not listed here">Another reason not listed here</option>
                </select>
                {errors.whyFreeValuation && <p className="text-red-500 text-sm mt-1">{errors.whyFreeValuation}</p>}
              </div>
              <div className="mb-10">
                <input
                  type="checkbox"
                  id="receive-updates"
                  className="mr-2"
                  checked={receiveUpdate}
                  onChange={(e) => setReceiveUpdate(e.target.checked)}
                />
                <label htmlFor="receive-updates">Receive updates and offers from Daft and selected partners</label>
              </div>
              <button
                type="submit"
                className="bg-[rgb(65,112,196)] hover:bg-blue-600 font-semibold text-white rounded-md px-4 py-3 w-full"
              >
                Find out what my home is worth
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWorth;
