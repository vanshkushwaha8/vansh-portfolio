import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center justify-center">
          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-8">
            <a
              href="https://www.facebook.com/profile.php?id=100032899249017"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://www.instagram.com/_rah_ul_21/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-600 transition-colors duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-kumar-gupta-93a9b3283/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 transition-colors duration-300"
            >
              <FaLinkedinIn size={30} />
            </a>
          </div>
          {/* Footer Text */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-sm mb-2">&copy; 2024 Our Company. All rights reserved.</p>
            <p className="text-sm">That All About Me</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
