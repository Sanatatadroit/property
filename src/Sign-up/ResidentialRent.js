import React, { useEffect ,useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../Components/Header';
import { FiUploadCloud } from "react-icons/fi";
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';


const ResidentialRent = () => {
  const [currentStep, setCurrentStep] = useState('location');
  const [completedSteps, setCompletedSteps] = useState([]);
  const [location, setLocation] = useState('');
  const [priceType, ] = useState('');
  const [price, setPrice] = useState('');
//   const [additionalPriceInfo, setAdditionalPriceInfo] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [availableFrom, setAvailableFrom] = useState('');
  const [ber, setBer] = useState('');
  const [MinimumLease, setMinimumLease] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [plan, setPlan] = useState('');
  const [paymentFrequency, setPaymentFrequency] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const isFormValid = contactInfo.name && contactInfo.email && contactInfo.phone;

  const [searchParams] = useSearchParams();
  const adTypeId = searchParams.get('id'); 
  const [hideAddress, setHideAddress] = useState(false);
  const [displayAddress, setDisplayAddress] = useState('');
  const [area, setArea] = useState('');
  const [country, setCountry] = useState('');

  const [propertyFeatures, ] = useState([]);
  const [propertyAdType, ] = useState('66cc480f612b09d02790c52f'); // Use this ID or get it dynamically
  const [userId] = useState('648a7a3f9b8b4e1f7c0b2a9d'); 

  const [propertyTypes, setPropertyTypes] = useState([]);

  const [bedrooms, setBedrooms] = useState(1);
  const [doubleBedrooms, setDoubleBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);

  // Function to handle increment and decrement
  const handleIncrement = (setter, value) => setter(prev => prev + value);
  const handleDecrement = (setter, value) => setter(prev => Math.max(prev - value, 0));
  useEffect(() => {
    // Mock data; in a real app, you would fetch this from an API
    setPropertyTypes([
      { _id: '1', typeName: 'Apartment' },
      { _id: '2', typeName: 'House' },
      { _id: '3', typeName: 'Studio' },
    ]);
  }, []);
  const apiUrl = process.env.REACT_APP_API_URL;
  

  useEffect(() => {
    if (adTypeId) {
      console.log('Ad Type ID:', adTypeId); // Log the ID to the console

      // Optionally, you can fetch details based on adTypeId here
      const fetchPropertyTypes = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`${apiUrl}/property/propertytype`,
          {
          headers:{
            'Authorization':`Bearer ${token}`,
          }
          });
          if (response.data.success) {
            setPropertyTypes(response.data.data);
          } else {
            console.error('Failed to fetch property types');
          }
        } catch (error) {
          console.error('Error fetching property types:', error);
        }
      };
  
      fetchPropertyTypes();
    } else {
      console.error('No ad type ID found in the query parameters.');
    }
  }, [adTypeId]);
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotos((prevPhotos) => [...prevPhotos, ...files]);
  };

  const removePhoto = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  const addMorePhotos = () => {
    document.getElementById('fileInput').click();
  };
  const steps = ['location', 'price', 'property details', 'facilities', 'description', 'media', 'plan', 'contact', 'review'];

  const goToNextStep = (nextStep) => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    setCurrentStep(nextStep);
  };

  const goToPreviousStep = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const isStepUnlocked = (step) => completedSteps.includes(step) || steps.indexOf(step) <= steps.indexOf(currentStep);
  const navigate = useNavigate(); 

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('propertyAdType', propertyAdType);
      formData.append('address', location);
      formData.append('displayAddress', displayAddress);
      formData.append('area', area);
      formData.append('country', country);
      formData.append('sellingType', 'For Sale by Private Treaty');
      formData.append('availableFrom', availableFrom); // Set appropriate value
      formData.append('auctionLocation', 'Springfield Auction Center, 789 Market St'); // Set appropriate value
      formData.append('propertyType', propertyType);
      formData.append('bedrooms', bedrooms); // Replace with actual value
      formData.append('bathrooms', bathrooms); // Replace with actual value
      formData.append('floorArea', 2500); // Replace with actual value
      formData.append('floorAreaUnit', 'sqft'); // Replace with actual value
      formData.append('taxDesignation', 'Residential'); // Replace with actual value
      formData.append('BER', ber);
      formData.append('minimumLease', MinimumLease);
      formData.append('BERNumber', '98765432'); // Replace with actual value
      selectedFacilities.forEach(facility => {
        formData.append('facilities[]', facility); // 'facilities[]' will be received as an array on the server
      }); // Replace with actual value
      formData.append('furnishing', furnishing); // Replace with actual value
      formData.append('propertyFeatures', propertyFeatures.join(',')); // Join features with commas
      formData.append('propertyDescription', description);
      formData.append('media', photos); // For files
      formData.append('videoUrl', videoUrl);
      formData.append('plan', plan);
      formData.append('fullName', contactInfo.name);
      formData.append('email', contactInfo.email);
      formData.append('phoneNumber', contactInfo.phone);
      formData.append('receiveEnquiriesVia', 'Email'); // Set appropriate value
      formData.append('callBetween', '10:00-18:00'); // Set appropriate value
      formData.append('userId', userId);
      formData.append('price', price);
      formData.append('pricePer', paymentFrequency);
      const token = localStorage.getItem('token');
      const apiUrl = process.env.REACT_APP_API_URL;

      await axios.post(`${apiUrl}/property/propertysellad/residential-rent`, formData,
         {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      // Handle successful submission
      alert('Ad submitted successfully!');
      navigate('/');
    } catch (error) {
      // Handle error
      console.error('Error submitting ad:', error);
      alert('Failed to submit ad. Please try again.');
    }
  };

  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [furnishing, setFurnishing] = useState('');

  const facilities = [
    'None', 'Alarm', 'Cable', 'Tumble Dryer',
    'Dishwasher', 'Garden/Patio/Balcony', 'Heating', 'Internet',
    'Microwave', 'Parking', 'Pets Allowed', 'Smoking',
    'Serviced Property', 'Washig Machine','Wheelchair Access'
  ];

  const handleFacilityClick = (facility) => {
    setSelectedFacilities(prevSelected => 
      prevSelected.includes(facility) 
        ? prevSelected.filter(f => f !== facility) 
        : [...prevSelected, facility]
    );
  };

  return (
    <div>
      <Header />

      {/* Navigation Options */}
      <div className="flex justify-between items-center px-64 py-1">
        {steps.map((tab) => (
          <button
            key={tab}
            className={`font-semibold ${currentStep === tab ? 'text-blue-500 underline underline-offset-[12px]' : isStepUnlocked(tab) ? 'text-gray-600' : 'text-gray-400 cursor-not-allowed'}`}
            onClick={() => isStepUnlocked(tab) && setCurrentStep(tab)}
            disabled={!isStepUnlocked(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Horizontal line */}
      <hr className="my-1 mb-6" />

      {/* Conditionally render forms based on the current step */}
      {currentStep === 'location' && (
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-12 my-10">Locate your property</h2>

          <p>Enter Eircode or Address</p>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border rounded-md p-2 w-full mb-4"
            placeholder="Enter location"
          />

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="hideAddress"
              checked={!hideAddress}
              onChange={() => setHideAddress(!hideAddress)}
              className="mr-2"
            />
            <label htmlFor="hideAddress" className="text-sm text-gray-700">I don't want to display the exact address</label>
          </div>

          {!hideAddress && (
            <div>
              <div className="mb-4">
                <label htmlFor="displayAddress" className="text-sm text-gray-700">Display Address:</label>
                <input
                  type="text"
                  id="displayAddress"
                  value={displayAddress}
                  onChange={(e) => setDisplayAddress(e.target.value)}
                  className="border rounded-md p-2 w-full"
                  placeholder="Enter display address"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="area" className="text-sm text-gray-700">Area:</label>
                <input
                  type="text"
                  id="area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="border rounded-md p-2 w-full"
                  placeholder="Enter area"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="country" className="text-sm text-gray-700">Country:</label>
                <input
                  type="text"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="border rounded-md p-2 w-full"
                  placeholder="Enter country"
                />
              </div>
            </div>
          )}

          <p className='text-sm text-[rgb(113,113,113)]'>Can’t find your eircode or address?</p>
          <p className='text-sm text-[rgb(113,113,113)]'>Enter address manually</p>

          <div className="flex justify-between">
            <button
              className="border rounded-lg bg-[rgb(65,112,196)] font-semibold text-white mt-5 px-56 py-3"
              onClick={() => goToNextStep('price')}
              disabled={!location} // Disable button if location is empty
            >
              Next
            </button>
          </div>
        </div>
      )}


      {currentStep === 'price' && (
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8">Set your price</h2>
          <p>Price</p>
<div className='flex'>
          
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded-md p-2 w-full mb-4"
            placeholder="£"
          />

          <select
            value={paymentFrequency}
            onChange={(e) => setPaymentFrequency(e.target.value)}
            className="border rounded-md p-2 w-full mb-4 ml-2"
          >
            <option value="">Select payment</option>
        
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
          </select>
</div>
          <div className="flex justify-between mb-32">
            <button
              className="bg-white border font-semibold border-[rgb(65,112,196)] text-[rgb(65,112,196)] px-6 py-3 rounded-md"
              onClick={goToPreviousStep}
            >
              Back
            </button>
            <button
              className="bg-[rgb(65,112,196)] font-semibold text-white px-6 py-3 rounded-md cursor-pointer"
              onClick={() => goToNextStep('property details')}
              disabled={!price} // Disable button if required fields are empty
            >
              Next
            </button>
          </div>
          </div>
      )}
    

    <div className="max-w-lg mx-auto px-4">
      {currentStep === 'property details' && (
        <>
          <h2 className="text-2xl font-semibold mb-8 mt-5">Add Property Details</h2>

          {/* Property Type Dropdown */}
          <label>Property Type</label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="border rounded-md p-2 w-full mb-10"
          >
            <option value="">Select property type</option>
            {propertyTypes.map((type) => (
              <option key={type._id} value={type._id}>
                {type.typeName}
              </option>
            ))}
          </select>

          {/* Available From Date Picker */}
          <label>Available From</label>
          <input
            type="date"
            value={availableFrom}
            onChange={(e) => setAvailableFrom(e.target.value)}
            className="border rounded-md p-2 w-full mb-10"
            placeholder="Select date"
          />
          
          <label>Minimum Lease (optional)</label>
          <select
            value={MinimumLease}
            onChange={(e) => setMinimumLease(e.target.value)}
            className="border rounded-md p-2 w-full mb-10"
          >
            <option value="">No Minimum Lease</option>
            <option value="3 months">3 Month</option>
            <option value="6 months">6 Month</option>
            <option value="9 months">9 Month</option>
            <option value="1 year">1 Year</option>
            <option value="2 year">2 Year</option>
            <option value="3 year">3 Year</option>
          </select>

          {/* BER Dropdown */}
          <label>BER</label>
          <select
            value={ber}
            onChange={(e) => setBer(e.target.value)}
            className="border rounded-md p-2 w-full mb-10"
          >
            <option value="">Select BER rating</option>
            <option value="a1">A1</option>
            <option value="a2">A2</option>
            <option value="a3">A3</option>
            <option value="b1">B1</option>
            <option value="b2">B2</option>
            <option value="b3">B3</option>
            <option value="c1">C1</option>
            <option value="c2">C2</option>
            <option value="d1">D1</option>
            <option value="d2">D2</option>
            <option value="e">E</option>
            <option value="f">F</option>
            <option value="g">G</option>
          </select>

          <label>BER no (optional)</label>
          <input
            type="text"
            // value={berNo}
            // onChange={(e) => setBerNo(e.target.value)}
            className="border rounded-md p-2 w-full mb-10"
            placeholder="eg.67699"
          />

          {/* Conditionally Render Room Count Container */}
          {propertyType && (
            <div>
              {/* Bedrooms Section */}
              <div className="mb-10">
                <label>Single Bedrooms</label>
                <div className="flex items-center">
                  <button
                    onClick={() => handleDecrement(setBedrooms, 1)}
                    className="border p-2 rounded-l-md"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={bedrooms}
                    readOnly
                    className="border p-2 w-full text-center"
                  />
                  <button
                    onClick={() => handleIncrement(setBedrooms, 1)}
                    className="border p-2 rounded-r-md"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Double Bedrooms Section */}
              <div className="mb-10">
                <label>Double Bedrooms</label>
                <div className="flex items-center">
                  <button
                    onClick={() => handleDecrement(setDoubleBedrooms, 1)}
                    className="border p-2 rounded-l-md"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={doubleBedrooms}
                    readOnly
                    className="border p-2 w-full text-center"
                  />
                  <button
                    onClick={() => handleIncrement(setDoubleBedrooms, 1)}
                    className="border p-2 rounded-r-md"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Bathrooms Section */}
              <div className="mb-10">
                <label>Bathrooms</label>
                <div className="flex items-center">
                  <button
                    onClick={() => handleDecrement(setBathrooms, 1)}
                    className="border p-2 rounded-l-md"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={bathrooms}
                    readOnly
                    className="border p-2 w-full text-center"
                  />
                  <button
                    onClick={() => handleIncrement(setBathrooms, 1)}
                    className="border p-2 rounded-r-md"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between">
            <button
              className="bg-white border font-semibold border-[rgb(65,112,196)] text-[rgb(65,112,196)] px-6 py-3 rounded-md"
              onClick={goToPreviousStep}
            >
              Back
            </button>
            <button
              className="bg-[rgb(65,112,196)] font-semibold text-white px-6 py-3 rounded-md"
              onClick={() => goToNextStep('facilities')}
              disabled={!propertyType || !availableFrom || !ber} // Disable button if required fields are empty
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>



    <div className="max-w-lg mx-auto px-4">
      {currentStep === 'facilities' && (
        <>
          <h2 className="text-2xl font-semibold mb-8 mt-5">Add Property Details</h2>

          <div className="mb-6">
            <label htmlFor="furnishing" className="block text-lg font-medium mb-2">
              Furnishing
            </label>
            <select
              id="furnishing"
              value={furnishing}
              onChange={(e) => setFurnishing(e.target.value)}
              className="bg-white border border-gray-300 rounded-md px-4 py-2 w-full"
            >
              <option value="">Select Furnishing</option>
              <option value="Furnished">Furnished</option>
              <option value="Unfurnished">Unfurnished</option>
              <option value="Semi-Furnished">Semi-Furnished</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Facilities</label>
            <div className="grid grid-cols-2 gap-4">
              {facilities.map((facility) => (
                <button
                  key={facility}
                  onClick={() => handleFacilityClick(facility)}
                  className={`border px-4 py-4 rounded-md ${selectedFacilities.includes(facility) ? 'bg-white border-2 border-black text-black' : 'bg-white text-black border-black'}`}
                >
                  {facility}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              className="bg-white border font-semibold border-[rgb(65,112,196)] text-[rgb(65,112,196)] px-6 py-3 rounded-md"
              onClick={goToPreviousStep}
            >
              Back
            </button>
            <button
              className="bg-[rgb(65,112,196)] font-semibold text-white px-6 py-3 rounded-md"
              onClick={() => goToNextStep('description')}
              disabled={!furnishing} // Disable button if furnishing is not selected
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>


      {/* Continue adding similar blocks for other steps like 'Description', 'Media', etc. */}
      {currentStep === 'description' && (
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-2 mt-5">Describe your property</h2>
          <p className='mb-5'>Please describe the location and size of your property, and call out key benefits and facilities, what's nearby, etc…</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-md p-2 w-full "
            placeholder="Enter property description"
            rows="12"
          />
          <p className='text-xs text-[rgb(113,113,113)] mb-10'>Please do not discriminate on the grounds of housing assistance,gender, civil status, family status, sexual orientation, religion,age, disability, race or traveller community. </p>
          <div className="flex justify-between">
            <button
              className="bg-white border font-semibold border-[rgb(65,112,196)] text-[rgb(65,112,196)] px-6 py-3 rounded-md"
              onClick={goToPreviousStep}
            >
              Back
            </button>
            <button
              className="bg-[rgb(65,112,196)] font-semibold text-white px-6 py-3 rounded-md"
              onClick={() => goToNextStep('media')}
              disabled={!description}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {currentStep === 'media' && (
     <div className="max-w-lg mx-auto px-4">
     <h2 className="text-2xl font-semibold mb-8 mt-5">Add Media</h2>
     <label className="block mb-2 text-gray-600">Choose Photos</label>
     <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer" onClick={addMorePhotos}>
       <FiUploadCloud size={48} className="text-gray-500 mb-4" />
       <p className="font-semibold text-gray-600 mb-1">Add photos</p>
       <p className="text-gray-500 mb-4">or drag and drop</p>
       <input
         id="fileInput"
         type="file"
         onChange={handleFileChange}
         className="hidden"
         multiple
       />
     </div>
     <div className="mt-4">
       {photos.length > 0 && (
         <div className="flex flex-wrap gap-4">
           {photos.map((photo, index) => (
             <div key={index} className="relative">
               <img src={URL.createObjectURL(photo)} alt={`photo-${index}`} className="w-24 h-24 object-cover rounded-md" />
               <button
                 onClick={() => removePhoto(index)}
                 className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
               >
                 &times;
               </button>
             </div>
           ))}
         </div>
       )}
     </div>
     <label className="block mb-2 mt-6">Video URL (optional)</label>
     <input
       type="text"
       value={videoUrl}
       onChange={(e) => setVideoUrl(e.target.value)}
       className="border rounded-md p-2 w-full mb-10"
       placeholder="Enter video URL"
     />
     <div className="flex justify-between">
       <button
         className="bg-white border font-semibold border-[rgb(65,112,196)] text-[rgb(65,112,196)] px-6 py-3 rounded-md"
         onClick={goToPreviousStep}
       >
         Back
       </button>
       <button
         className="bg-[rgb(65,112,196)] font-semibold text-white px-6 py-3 rounded-md"
         onClick={() => goToNextStep('plan')}

         disabled={photos.length === 0}
       >
         Next
       </button>
     </div>
   </div>
      )}

{currentStep === 'plan' && (
  <div className="max-w-lg mx-auto px-4">
    <h2 className="text-2xl font-semibold mb-8 mt-5">Choose a Plan</h2>
    <div className="grid grid-cols-3 gap-4 mb-10">
      {['Featured', 'Premium', 'Standard'].map((planType) => (
        <div
          key={planType}
          className={`border rounded-md p-4 cursor-pointer ${plan === planType ? 'border-blue-500' : ''}`}
          onClick={() => setPlan(planType)}
        >
          {/* Plan Heading and Price Row */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">{planType}</h3>
            <p className="text-gray-600">${planType === 'Featured' ? '100' : planType === 'Premium' ? '70' : '50'}</p>
          </div>

          {/* Horizontal Line */}
          <hr className="border-gray-300 mb-3" />

          {/* Plan Description */}
          <p className="text-gray-600 mb-1">This plan offers great features for your needs.</p>
          <p className="text-gray-600 mb-1">Enjoy premium support and priority access.</p>
          <p className="text-gray-600 mb-1">Ideal for businesses and professionals.</p>

          {/* Plan Image */}
          <div className="flex justify-end">
            <img
              src={`path/to/your/image-${planType.toLowerCase()}.png`} // Replace with your image paths
              alt={`${planType} Plan`}
              className="w-10 h-10 object-cover mt-3"
            />
          </div>
        </div>
      ))}
    </div>

    {/* Navigation Buttons */}
    <div className="flex justify-between">
      <button
        className="bg-white border font-semibold border-[rgb(65,112,196)] text-[rgb(65,112,196)] px-6 py-3 rounded-md"
        onClick={goToPreviousStep}
      >
        Back
      </button>
      <button
        className="bg-[rgb(65,112,196)] font-semibold text-white px-6 py-3 rounded-md"
        onClick={() => goToNextStep('contact')}
        disabled={!plan} // Require a plan to be selected
      >
        Next
      </button>
    </div>
  </div>
)}


{currentStep === 'contact' && (
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 mt-5">Contact Information</h2>
          
          <input
            type="text"
            name="name"
            value={contactInfo.name}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full mb-4"
            placeholder="Name"
          />
          
          <input
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full mb-4"
            placeholder="Email"
          />
          
          <input
            type="tel"
            name="phone"
            value={contactInfo.phone}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full mb-10"
            placeholder="Phone"
          />
          
          <div className="flex justify-between">
            <button
              className="bg-white border font-semibold border-[rgb(65,112,196)] text-[rgb(65,112,196)] px-6 py-3 rounded-md"
              onClick={goToPreviousStep}
            >
              Back
            </button>
            <button
              className="bg-[rgb(65,112,196)] font-semibold text-white px-6 py-3 rounded-md"
              onClick={() => goToNextStep('review')}
              disabled={!isFormValid}
            >
              Next
            </button>
          </div>
        </div>
      )}

{currentStep === 'review' && (
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-12 my-10">Review and Submit</h2>
          <div className="mb-4">
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Price Type:</strong> {priceType}</p>
            <p><strong>Price:</strong> {price}</p>
            <p><strong>Property Type:</strong> {propertyType}</p>
            <p><strong>Available From:</strong> {availableFrom}</p>
            <p><strong>BER:</strong> {ber}</p>
            <p><strong>minimumLease:</strong> {MinimumLease}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Photo:</strong> {photos && photos.name}</p>
            <p><strong>Video URL:</strong> {videoUrl}</p>
            <p><strong>Floor Plan URL:</strong> {plan}</p>
            <p><strong>Contact Name:</strong> {contactInfo.name}</p>
            <p><strong>Contact Email:</strong> {contactInfo.email}</p>
            <p><strong>Contact Phone:</strong> {contactInfo.phone}</p>
            <p><strong>facilities</strong> {selectedFacilities  }</p>
            <p><strong>furnishing</strong> {furnishing}</p>
            <p><strong>id</strong> {adTypeId}</p>
            <p><strong>plan</strong> {plan}</p>
          </div>
          <div className="mt-4 flex justify-between">
            <button onClick={goToPreviousStep} className="bg-white border font-semibold border-[rgb(65,112,196)] text-[rgb(65,112,196)] px-6 py-3 rounded-md"
            >Back</button>
            <button onClick={handleSubmit}className="bg-[rgb(65,112,196)] font-semibold text-white px-6 py-3 rounded-md">Submit</button>
          </div>
        </div>
      )}
      {/* Horizontal line */}
      <hr className="mt-6" />
    </div>
  );
};

export default ResidentialRent;
