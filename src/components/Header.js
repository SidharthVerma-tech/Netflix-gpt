import React from 'react';
import logo from '../utils/Netflix_Logo_PMS (2).png';

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black p-4 rounded-lg shadow-lg z-10">
      <img className="w-48" src={logo} alt="Netflix Logo" />
    </div>
  );
};

export default Header;
