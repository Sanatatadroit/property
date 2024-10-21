import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Headers() {
 
  const navigate = useNavigate();



  const handleLogout = async () => {
    try {
      
      await axios.get('http://127.0.0.1:2030/auth/logout', 
        {
          withCredentials:"true",
        });
      
      
      localStorage.removeItem('token'); 

      
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; 

      
      navigate('/SignIn'); 
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <header className="bg-white text-black py-4 px-[200px]">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Left side links */}
        <ul className="flex space-x-6 text-bold">
          <li>
            <Link to="/">
              <img 
                src="./logo1.png" 
                alt="daft.ie logo" 
                className="h-14 mr-14 text-white"
              />
            </Link>
          </li>
      
            <Link to="/buy" className="hover:underline font-semibold">Buy</Link>
            
          
        
            <Link to="/Sale" className="hover:underline font-semibold">Sale</Link>
          
          
         
        </ul>

        {/* Right side links */}
        <ul className="flex space-x-6">
        
          <li><Link to="/SignIn" className="hover:underline font-semibold"  >Sign In</Link></li>
          <li>
            <button 
              className="hover:underline font-semibold" 
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Headers;
