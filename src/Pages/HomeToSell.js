import React from 'react';
import Header from '../Components/Header';
import { CiHeart } from "react-icons/ci";
import { IoIosCheckmark } from "react-icons/io";

function StudentAccomodation() {

    const listings = [1, 2, 3];
  return (
    <div>
      <div className="relative bg-gray-100">
        {/* Header */}
        <div className="absolute inset-x-0 top-0 z-10">
          <Header />
        </div>

        {/* Hero Image */}
        <div className="relative h-[500px] overflow-hidden bg-black bg-opacity-80">
          <picture>
            <img
              className="w-full h-full object-cover"
              src="image7.png"
              alt="homepage"
              style={{ opacity: '0.2' }}
            />
          </picture>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-7xl font-bold mb-1 mt-1">Selling your home?</h1>
            <div className="w-full max-w-4xl mx-auto">
              {/* SEO Content Inside Hero */}
              <div className="mt-8 text-white">
                <h2 className="text-2xl font-semibold mb-4">
                  With 3x as many house buyers than the nearest competitor, Daft.ie Ireland’s No.1
                  <span className="block text-gray-200">
                    Property Website is the best place to sell your home in Ireland.
                  </span>
                </h2>

                <button className="border border-slate-600 rounded-md bg-[#4170C4] text-white p-3 px-28 font-semibold">
                  TAKE A FIRST STEP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-14" />

      {/* Content Section with Image and Text */}
      <div className="container mx-auto mt-16 px-80 ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Left Side: Image */}
          <div className=" lg:w-1/4">
            <img
              src="./search.png" // Replace with your image source
              alt="Description of the image"
              className="shadow-lg w-[400px] h-48"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Value my Home</h2>
            <p className="text-lg text-gray-700 mb-6">
            Understand what your home is worth by getting an instant online valuation in just a few minutes <span className='text-blue-500 underline'>here.</span>
            </p>
            <button className="border border-slate-600 rounded-md bg-[#4170C4] text-white p-3 px-32 font-semibold hover:bg-white hover:text-[#4170C4] hover:border-hover:bg-white hover:border-[#4170C4]">
            get an instant estimate of your homes value
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16 px-80 ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Left Side: Image */}
          <div className=" lg:w-1/4">
            <img
              src="./search.png" // Replace with your image source
              alt="Description of the image"
              className="shadow-lg w-[400px] h-48"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Local Property Agent</h2>
            <p className="text-lg text-gray-700 mb-6 ">
            Simply enter your details and we will match you up with a local expert estate agent in your area who will get in touch with you to organize your free expert valuation. <span className='text-blue-500 underline'>here.</span>
            </p>
            <button className="border border-[#4170C4] rounded-md bg-white text-[#4170C4] p-3 px-32 font-semibold">
            get an instant estimate of your homes value
            </button>
          </div>
        </div>
      </div>


      <div className='text-2xl text-center font-semibold text-[#4170C4] p-10 px-64 mb-12'>
      Selling a home is the biggest sale of your life. Make sure you put your best foot forward and advertise it on Daft.ie, Ireland’s No.1 Property Website!
      </div>

      <div className="bg-[rgb(250,250,250)] py-10 px-64">
      {/* Top Header Text */}
      <h2 className="text-3xl font-bold  mb-6">Get the Daft Advantage</h2>

      {/* Left Aligned Subtext */}
      <p className="text-lg text-left mb-4">Get Seen and Get Sold with a Daft Advantage ad, the best way to sell your home in Ireland. Ask your agent for a Daft Advantage Ad today!</p>

      {/* Grid with 4 Containers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Container 1 */}
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <img
            src="search.png" // Replace with your searchsource
            alt="Service 1"
            className="w-20 h-20 mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold">Unbeatable Visibility</h3>
          <p className="text-[#717171]">With a Daft Advantage Ad your home is guaranteed unbeatable exposure on Ireland’s <span className='text-[#717171] font-bold'>No.1 Property Website .</span> Your ad and photos will be <span className='text-[#717171] font-bold'>bigger and top of the search results</span> for buyers</p>
        </div>

        {/* Container 2 */}
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <img
            src="search.png" // Replace with your searchsource
            alt="Service 1"
            className="w-20 h-20 mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold">Unbeatable Visibility</h3>
          <p className="text-[#717171]">With a Daft Advantage Ad your home is guaranteed unbeatable exposure on Ireland’s <span className='text-[#717171] font-bold'>No.1 Property Website .</span> Your ad and photos will be <span className='text-[#717171] font-bold'>bigger and top of the search results</span> for buyers</p>
        </div>

        {/* Container 3 */}
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <img
            src="search.png" // Replace with your searchsource
            alt="Service 1"
            className="w-20 h-20 mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold">Unbeatable Visibility</h3>
          <p className="text-[#717171]">With a Daft Advantage Ad your home is guaranteed unbeatable exposure on Ireland’s <span className='text-[#717171] font-bold'>No.1 Property Website .</span> Your ad and photos will be <span className='text-[#717171] font-bold'>bigger and top of the search results</span> for buyers</p>
        </div>

        {/* Container 4 */}
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <img
            src="search.png" // Replace with your searchsource
            alt="Service 1"
            className="w-20 h-20 mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold">Unbeatable Visibility</h3>
          <p className="text-[#717171]">With a Daft Advantage Ad your home is guaranteed unbeatable exposure on Ireland’s <span className='text-[#717171] font-bold'>No.1 Property Website .</span> Your ad and photos will be <span className='text-[#717171] font-bold'>bigger and top of the search results</span> for buyers</p>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-3xl text-[#4170C4] text-center">A Daft Advantage Ad is the best way for you to make your property stand out to buyers. Ask your agent for a Daft Advantage Ad today!</p>
    </div>



    {/*  next container*/ }
    <div className="px-64 prose dark:prose-invert mt-10">
      {/* First Section with Property Listings */}
      <h1 className="text-xl font-semibold mb-6">
        Begin by choosing the right Advantage Ad for you:
      </h1>
      <h1 className="text-sm">
        A Daft Advantage Ad is the best way for you to showcase your property to
        buyers. You’re guaranteed unbeatable visibility on Ireland’s No.1
        property website. Your ad and photos will be bigger and higher in the
        search rankings.
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        {listings.map((item, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg border border-gray-200 mt-6 w-80"
          >
            {/* Property Listing Card */}
            <div className="flex justify-between items-center bg-slate-600 p-2">
              <h4 className="text-base font-semibold text-white">
                <span className="text-2xl font-bold">Howard</span>
              </h4>
              <div>
                <h4 className="text-xs font-semibold text-white">
                  Dan Howard MIPAV TRV PSR 006328
                </h4>
                <h4 className="text-white text-xs">Dan Howard & Co. Ltd</h4>
              </div>
              <img
                src="https://via.placeholder.com/40"
                alt="Top Row"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="flex mb-4">
              <div className="w-full">
                <img
                  src="./image.png"
                  alt="Full Width"
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
            <div className="mb-4 flex justify-between items-center mx-3">
              <div>
                <h3 className="text-sm font-semibold">
                  11 Douglas Street, Cork City, Co. Cork, T12HY22
                </h3>
                <div className="flex items-center">
                  <p className="text-gray-700">€490,000</p>
                  <i className="text-gray-500 fas fa-arrow-right ml-2"></i>
                </div>
              </div>
              <CiHeart className="text-3xl text-gray-500 ml-4 cursor-pointer" />
            </div>
            <div className="flex items-center px-3">
              <p className="text-slate-500 text-xs">
                5 Bed : 3 Bath : 15 m² : End of Terrace
              </p>
            </div>
            <div className="p-2">
              <button className="border-2 rounded-lg bg-slate-300 text-black px-2 py-1 text-xs">
                Viewing Advised
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Second Section with Info Containers */}
      <div className=''>
      <div className="mt-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Container 1 */}
    <div className="bg-slate-100 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Features of this ad:</h2>
      <div className="space-y-4">
        {/* Row 1 */}
        <div className="flex items-center justify-center mb-2">
          <IoIosCheckmark className="text-3xl text-[rgb(0,137,64)] mr-2" />
          <p className="text-gray-600 text-sm mx-auto">Listed above all Premium, Lite & Standard Ads</p>
        </div>
        {/* Row 2 */}
        <div className="flex items-center justify-center mb-2">
          <IoIosCheckmark className="text-3xl text-[rgb(0,137,64)] mr-2" />
          <p className="text-gray-600 text-sm mx-auto">2x Bigger than Standard Ads</p>
        </div>
        {/* Row 3 */}
        <div className="flex items-center justify-center mb-2">
          <IoIosCheckmark className="text-3xl text-[rgb(0,137,64)] mr-2" />
          <p className="text-gray-600 text-sm mx-auto">Featured status for 90</p>
        </div>
        {/* Row 4 */}
        <div className="flex items-center justify-center mb-2">
          <IoIosCheckmark className="text-3xl text-[rgb(0,137,64)] mr-2" />
          <p className="text-gray-600 text-sm mx-auto">4 Photos on the Adcard</p>
        </div>
        <div className="flex items-center justify-center mb-2">
          <IoIosCheckmark className="text-3xl text-[rgb(0,137,64)] mr-2" />
          <p className="text-gray-600 text-sm mx-auto">A brochure of your property emailed to active buyers </p>
        </div><div className="flex items-center justify-center mb-2">
          <IoIosCheckmark className="text-3xl text-[rgb(0,137,64)] mr-2" />
          <p className="text-gray-600 text-sm mx-auto">4 Photos on the Adcard</p>
        </div>

      </div>
    </div>

    {/* Container 2 */}
    <div className="bg-slate-100 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Features of this ad:</h2>
      <div className="space-y-4">
        {/* Row 1 */}
        <div className="flex items-center justify-center mb-2">
          <IoIosCheckmark className="text-3xl text-[rgb(0,137,64)] mr-2" />
          <p className="text-gray-600 text-sm mx-auto">Listed above all Premium, Lite & Standard Ads</p>
        </div>
        {/* Row 2 */}
        <div className="flex items-center justify-center mb-2">
          <IoIosCheckmark className="text-3xl text-[rgb(0,137,64)] mr-2" />
          <p className="text-gray-600 text-sm mx-auto">2x Bigger than Standard Ads</p>
        </div>
        {/* Row 3 */}
        <div className="flex items-center justify-center mb-2">
          <IoIosCheckmark className="text-3xl text-[rgb(0,137,64)] mr-2" />
          <p className="text-gray-600 text-sm mx-auto">Featured status for 90</p>
        </div>
        {/* Row 4 */}
        <div className="flex items-center justify-center mb-2">
          <IoIosCheckmark className="text-3xl text-[rgb(0,137,64)] mr-2" />
          <p className="text-gray-600 text-sm mx-auto">4 Photos on the Adcard</p>
        </div>
      </div>
    </div>

    {/* Container 3 */}
    <div className="bg-slate-100 p-1 rounded-lg shadow-md text-center ">
      <h2 className="text-xl font-bold mb-4">Features of this ad:</h2>
      <div className="space-y-4">
     
        {/* Row 2 */}
        <div className="flex items-center justify-center mb-2">
          <IoIosCheckmark className="text-3xl text-[rgb(0,137,64)] mr-2" />
          <p className="text-gray-600 text-sm mx-auto">2x Bigger than Standard Ads</p>
        </div>
        {/* Row 3 */}
        <div className="flex items-center justify-center mb-2">
          <IoIosCheckmark className="text-3xl text-[rgb(0,137,64)] mr-2" />
          <p className="text-gray-600 text-sm mx-auto">Featured status for 90</p>
        </div>
        {/* Row 4 */}
        <div className="flex items-center justify-center mb-2">
          <IoIosCheckmark className="text-3xl text-[rgb(0,137,64)] mr-2" />
          <p className="text-gray-600 text-sm mx-auto">4 Photos on the Adcard</p>
        </div>
      </div>
    </div>
  </div>
  <p className='text-sm text-slate-500 mt-9'>*All prices displayed include VAT & are dependent on value of property. Please note prices displayed are only available through an estate agent. </p>
</div>
</div>
    </div>  

    {/*  next container*/ }
    <div className="bg-white py-10 px-64">
      {/* Top Header Text */}
      <h2 className="text-2xl font-bold  mb-6">Approve Your Ad</h2>

      {/* Left Aligned Subtext */}
      <p className="text-lg text-left mb-4">The Ad Approval tool created by Daft enables your estate agent to send a draft of your ad listing to you for your review and approval. Vendor Ad Approval empowers you, the seller, by providing an opportunity to preview your ad and provide feedback before the ad goes live on Daft.ie.</p>

      {/* Grid with 4 Containers */}
      <div className='flex items-center justify-center'>
  <img
    className="w-1/2 h-1/2"  
    src="laptop.png"
    alt="homepage"
  />
</div>
      
    </div>

     {/* container  Text */}


    <div className="bg-white py-10 px-64">
      {/* Top Header Text */}
      <h2 className="text-3xl font-bold  mb-6">How does Ad Approval work?</h2>

      {/* Left Aligned Subtext */}
      <p className="text-lg text-left mb-4">The steps below outline the journey for you as the seller. The tool enables a smooth process for ad approval and an additional opportunity for you to choose an upgrade for your property if you wish to do so.</p>

      {/* Grid with 4 Containers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Container 1 */}
        <div className="bg-white p-4 rounded-lg  text-center">
          <img
            src="search.png" // Replace with your searchsource
            alt="Service 1"
            className="w-20 h-20 mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold">Step 1:</h3>
          <p className="text-[#717171]">Agent places draft ad on Daft.ie.</p>
        </div>

        {/* Container 2 */}
        <div className="bg-white p-4 rounded-lg  text-center">
          <img
            src="search.png" // Replace with your searchsource
            alt="Service 1"
            className="w-20 h-20 mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold">Step 2:</h3>
          <p className="text-[#717171]">Agent sends draft ad previews via Daft admin to your email as the seller.</p>
        </div>

        {/* Container 3 */}
        <div className="bg-white p-4 rounded-lg  text-center">
          <img
            src="search.png" // Replace with your searchsource
            alt="Service 1"
            className="w-20 h-20 mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold">Step 3:</h3>
          <p className="text-[#717171]">Daft Ad can be reviewed by you & you will be informed of Advantage Ad Upgrade options.</p>
        </div>

        {/* Container 4 */}
        <div className="bg-white p-4 rounded-lg  text-center">
          <img
            src="search.png" // Replace with your searchsource
            alt="Service 1"
            className="w-20 h-20 mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold">Step 4:</h3>
          <p className="text-[#717171]">You, the seller, can send feedback or approval and the ad goes live on Daft.ie</p>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-3xl text-[#4170C4] text-center">Ask your agent about Daft.ie's Ad Approval tool if you would like to preview your ad before it goes live.</p>
    </div>



     {/* container  Text */}

     <div className="bg-[rgb(250,250,250)] py-10 px-64">
      {/* Top Header Text */}
      <h2 className="text-3xl font-bold  mb-6">Enable Offers by Daft on your ad for the ultimate Daft Advantage</h2>

      {/* Left Aligned Subtext */}
      <p className="text-lg text-left mb-4">Offers by Daft allow buyers to place offers on your property directly on Daft. The benefits of enabling Offers by Daft on your ad are: </p>

      {/* Grid with 4 Containers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 px-12 p-2">
        {/* Container 1 */}
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <img
            src="search.png" // Replace with your searchsource
            alt="Service 1"
            className="w-20 h-20 mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold">Transparent Sale</h3>
          <p className="text-[#717171] text-sm">100% Transparent Process -  <span className='text-[#717171] font-bold'>you’re up to date at all times</span> Your ad and photos will be  without the phone tag.</p>
        </div>

        {/* Container 2 */}
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <img
            src="search.png" // Replace with your searchsource
            alt="Service 1"
            className="w-20 h-20 mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold">Transparent Sale</h3>
          <p className="text-[#717171] text-sm">100% Transparent Process -  <span className='text-[#717171] font-bold'>you’re up to date at all times</span> Your ad and photos will be  without the phone tag.</p>
        </div>

        {/* Container 3 */}
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <img
            src="search.png" // Replace with your searchsource
            alt="Service 1"
            className="w-20 h-20 mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold">Transparent Sale</h3>
          <p className="text-[#717171] text-sm">100% Transparent Process -  <span className='text-[#717171] font-bold'>you’re up to date at all times</span> Your ad and photos will be  without the phone tag.</p>
        </div>

        {/* Container 4 */}
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <img
            src="search.png" // Replace with your searchsource
            alt="Service 1"
            className="w-20 h-20 mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold">Transparent Sale</h3>
          <p className="text-[#717171] text-sm">100% Transparent Process -  <span className='text-[#717171] font-bold'>you’re up to date at all times</span> Your ad and photos will be  without the phone tag.</p>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-3xl text-[#4170C4] text-center">Ask your agent to enable Offers by Daft on your property for
      maximum transparency in your sale.</p>
    </div>



   {/* container  Text */}

   <div className="bg-[rgb(250,250,250)] py-10 px-64">
  {/* Top Header Text */}
  <h2 className="text-3xl font-bold mb-6">Enable Offers by Daft on your ad for the ultimate Daft Advantage</h2>

  {/* Left Aligned Subtext */}
  <p className="text-lg text-left mb-4">
    Offers by Daft allow buyers to place offers on your property directly on Daft. The benefits of enabling Offers by Daft on your ad are:
  </p>

  {/* Grid with 5 Videos */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-8 px-12 p-2">
    {/* Video 1 */}
    <div className="text-center">
  <iframe
    width="100%"
    height="300"
    className="rounded-lg shadow-md"
    src="https://www.youtube.com/embed/q2oVJV7BiEw"
    title="YouTube video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
  <p className="mt-2 text-lg font-medium">Sherry O' Callaghan - O' Callaghan Town & Country Real Estate (Co.Kerry)</p>
</div>


    {/* Video 2 */}
    <div className="text-center">
  <iframe
    width="100%"
    height="300"
    className="rounded-lg shadow-md"
    src="https://www.youtube.com/embed/9hO6pv7m_SQ"
    title="YouTube video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
  <p className="mt-2 text-lg font-medium">Danny Butler - Smith & Butler Estates    (Co.Dublin)</p>
</div>

    {/* Video 3 */}
    <div className="text-center">
  <iframe
    width="100%"
    height="300"
    className="rounded-lg shadow-md"
    src="https://www.youtube.com/embed/bcvT0GiC83A"
    title="YouTube video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
  <p className="mt-2 text-lg font-medium">Rory Dooley - Dooley Auctioneers        (Co.Wicklow)</p>
</div>

    {/* Video 4 */}
    <div className="text-center">
  <iframe
    width="100%"
    height="300"
    className="rounded-lg shadow-md"
    src="https://www.youtube.com/embed/vcNVJ1Nl4as"
    title="YouTube video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
  <p className="mt-2 text-lg font-medium">Ronan Crinion - Move Home Estate Agents (Co.Dublin)</p>
</div>

    {/* Video 5 */}
    <div className="text-center">
  <iframe
    width="100%"
    height="300"
    className="rounded-lg shadow-md"
    src="https://www.youtube.com/embed/9hO6pv7m_SQ"
    title="YouTube video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
  <p className="mt-2 text-lg font-medium">Rory Dooley - Dooley Auctioneers (Co.Wicklow)</p>
</div>
  </div>

  {/* Bottom Text */}
  <p className="text-3xl text-[#4170C4] text-center">
    Ask your agent to enable Offers by Daft on your property for maximum transparency in your sale.
  </p>
</div>


   {/* container  Text */}

   <div className="relative h-[400px] overflow-hidden bg-blue-600 bg-opacity-80">
          <picture>
            <img
              className="w-full h-full object-cover"
              src="image7.png"
              alt="homepage"
              style={{ opacity: '0.2' }}
            />
          </picture>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-5xl font-bold mb-1 mt-1">Selling a home is a massive event and <br /> decision in your life.</h1>
            <div className="w-full max-w-4xl mx-auto">
              {/* SEO Content Inside Hero */}
              <div className="mt-8 text-white">
                <h2 className="text-2xl font-semibold mb-4">
                  With 3x as many house buyers than the nearest competitor, Daft.ie Ireland’s No.1
                  <span className="block text-gray-200">
                    Property Website is the best place to sell your home in Ireland.
                  </span>
                </h2>

                <button className="border border-slate-600 rounded-md bg-[#4170C4] text-white p-3 px-28 font-semibold">
                  TAKE A FIRST STEP
                </button>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}

export default StudentAccomodation;
