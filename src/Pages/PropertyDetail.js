import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Header from '../Components/Header';

const PropertyDetail = () => {
  const { id } = useParams(); // Get property ID from URL params
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:2030/property/get-singleproperty/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          setProperty(data); // Set the fetched property data
        }
      })
      .catch(error => console.error('Error fetching property details:', error));
  }, [id]);

  if (!property) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>; // Loading spinner
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="max-w-5xl mx-auto mt-10 p-8 bg-white shadow-md rounded-lg border border-gray-200">
        {/* Property Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{property.propertyType?.typeName} - {property.address}</h1>
        
        {/* Media Slider */}
        <div className="mt-8">
          {property.media && property.media.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="rounded-lg overflow-hidden"
            >
              {property.media.map((url, index) => (
                <SwiperSlide key={index}>
                  <img src={url} alt={`Property Media ${index + 1}`} className="w-full h-80 object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p>No Media Available</p>
          )}
        </div>
        
        {/* Property Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Property Details</h2>
            <p className="text-gray-600 mb-6">{property.propertyDescription}</p>
            <div className="space-y-4">
              <div><strong>Price:</strong> €{property.price || 'N/A'}</div>
              <div><strong>Bedrooms:</strong> {property.bedrooms || 'N/A'}</div>
              <div><strong>Bathrooms:</strong> {property.bathrooms || 'N/A'}</div>
              <div><strong>Floor Area:</strong> {property.floorArea} {property.floorAreaUnit?.floorAreaUnitName || ''}</div>
              <div><strong>Location:</strong> {property.auctionLocation || 'N/A'}</div>
              <div><strong>BER:</strong> {property.BER} ({property.BERNumber || 'N/A'})</div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h2>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Full Name:</strong> {property.fullName}</li>
              <li><strong>Email:</strong> {property.email}</li>
              <li><strong>Phone:</strong> {property.phoneNumber}</li>
              <li><strong>Receive Enquiries Via:</strong> {property.receiveEnquiriesVia}</li>
              <li><strong>Call Between:</strong> {property.callBetween}</li>
            </ul>
          </div>
        </div>

        {/* Features and Facilities Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Features & Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Features</h3>
              <ul className="list-disc list-inside text-gray-600">
                {property.propertyFeatures && property.propertyFeatures.length > 0 ? (
                  property.propertyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))
                ) : (
                  <li>N/A</li>
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Facilities</h3>
              <ul className="list-disc list-inside text-gray-600">
                {property.facilities?.facilityName ? (
                  <li>{property.facilities.facilityName}</li>
                ) : (
                  <li>N/A</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
