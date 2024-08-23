import React from 'react';

const Footer = () => {
 

  return (
    <footer className="bg-white text-black py-8 px-20 mt-10">
      <div className="container mx-auto px-[150px]">
        {/* First Row: All the List Items */}
        <div className="flex flex-wrap justify-center mb-8">
          <ul className="flex flex-wrap  space-x-4">
            <li className="hover:underline cursor-pointer" >About us</li>
            <li className="hover:underline cursor-pointer" >Terms of use</li>
            <li className="hover:underline cursor-pointer" >Privacy</li>
            <li className="hover:underline cursor-pointer" >Cookie policy</li>
            <li className="hover:underline cursor-pointer">Consent choices</li>
            <li className="hover:underline cursor-pointer" >Equality</li>
            <li className="hover:underline cursor-pointer" >Data requests</li>
            <li className="hover:underline cursor-pointer" >Remembering Carolan</li>
            <li className="hover:underline cursor-pointer" >Advertising</li>
            <li className="hover:underline cursor-pointer" >Help centre</li>
            <li className="hover:underline cursor-pointer" >Buying Budget Calculator</li>
          </ul>
        </div>

        {/* Second Row: Info Container */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Left Side: Information Text */}
          <div className="text-center md:text-left mb-4 md:mb-0 text-xs">
            <p>© Daft Media Limited 1997-2024.</p>
            <p>Registered in Ireland under Company Number 347856</p>
          </div>

          {/* Right Side: Brand Links */}
          <div>
            <h1 className='text-xs'>Part of the <span className='font-semibold text-lg'>distilled.</span>family</h1>
            <ul className="flex space-x-4 justify-center text-xs">
              <li className="hover:underline cursor-pointer" >DoneDeal.ie</li>
              <li className="hover:underline cursor-pointer list-disc list-inside">Adverts.ie</li>
              <li className="hover:underline cursor-pointer list-disc list-inside">Distilled.ie</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
