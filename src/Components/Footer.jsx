// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Icons on the left */}
      <div className="flex space-x-4 text-white">
        <i className="fas fa-brands fa-facebook text-xl hover:text-blue-400 transition"></i>
        <i className="fas fa-brands fa-instagram text-xl hover:text-blue-400 transition"></i>
        <i className="fas fa-brands fa-x-twitter text-xl hover:text-blue-400 transition"></i>
      </div>

      {/* Company email */}
      <div className="text-white">
        email@company.com
      </div>

      {/* Contact Us */}
      <a href="#" className="text-white underline hover:text-blue-400 transition">
        Contact Us
      </a>
    </footer>
  );
};

export default Footer;
