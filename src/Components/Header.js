import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white text-black py-4 px-[200px]">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Left side links */}
        <ul className="flex space-x-6 text-bold">
        <li>
            <Link to="/">
              <img 
                src="./daft-logo.svg" 
                alt="daft.ie logo" 
                className="h-7 mr-4" // Adjust the height or width as needed
              />
            </Link>
          </li>
          <li><Link to="/" className="hover:underline">Buy</Link></li>
          <li><Link to="/" className="hover:underline">Rent</Link></li>
          <li><Link to="/" className="hover:underline">Share</Link></li>
          <li><Link to="/" className="hover:underline">New Homes</Link></li>
          <li><Link to="/" className="hover:underline">Sell</Link></li>
          <li><Link to="/" className="hover:underline">Commercial</Link></li>
          <li><Link to="/" className="hover:underline">Mortgages</Link></li>
        </ul>

        {/* Right side links */}
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">Place Ad</Link></li>
          <li><Link to="/signin" className="hover:underline">Sign In</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
