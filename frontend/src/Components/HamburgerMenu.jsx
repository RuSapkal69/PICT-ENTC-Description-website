import React, { useState } from 'react';
import hamburger from '../assets/icons/hamburger.svg'; // Adjusted import statement

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Hamburger Menu Icon */}
      <div className="lg:hidden p-4 cursor-pointer justify-end" onClick={toggleMenu}>
        <img
          src={hamburger}
          alt="Hamburger"
          width={25}
          height={25}
        />
      </div>

      {/* Full-Screen Overlay and Navigation */}
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 transition-all ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <nav 
          className={`flex flex-col items-center justify-center w-full h-full space-y-6 text-white ${isOpen ? 'block' : 'hidden'}`}
        >
          {/* Close (X) Button */}
          <div className="absolute top-5 right-5 text-white text-[60px] cursor-pointer hover:text-red-700" onClick={toggleMenu}>
            &times;
          </div>
          
          <ul className="space-y-6 text-xl">
            <li>
              <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-400 transition-colors">About Us</a>
            </li>
            <li>
              <a href="#services" className="hover:text-orange-400 transition-colors">Products</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-400 transition-colors">Register</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
