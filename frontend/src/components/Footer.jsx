import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Top Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
          <ul className="space-y-2">
            <li>
              <Link to={"/Birthday"} className="hover:text-indigo-600 cursor-pointer">
                Birthday Decoration
              </Link>
            </li>
            <li>
              <Link to={"/Anniversary"} className="hover:text-indigo-600 cursor-pointer">
                Anniversary Decoration
              </Link>
            </li>
            <li>
              <Link to={"/BabyShower"}className="hover:text-indigo-600 cursor-pointer">
                Baby Shower
              </Link>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to={"/Terms"} className="hover:text-indigo-600 cursor-pointer">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to={"/About"} className="hover:text-indigo-600 cursor-pointer">
                About Us
              </Link>
            </li>
            <li>
              <Link to={"/Disclaimer"} className="hover:text-indigo-600 cursor-pointer">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

          {/* Info with Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Info</h3>
          <div className="flex flex-col space-y-4">

            <Link

              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 flex items-center space-x-2"
            >
              <Facebook size={24} />
              <span>Facebook</span>
            </Link>
            <Link
              to="https://www.instagram.com/decowale?igsh=MWxiM2NoOWlxajRteA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 flex items-center space-x-2"
            >
              <Instagram size={24} />
              <span>Instagram</span>
            </Link>
            <Link
              to="https://youtube.com/@decowale?si=JY-zRWl2TQyeQEcN"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 flex items-center space-x-2"
            >
              <Youtube size={24} />
              <span>YouTube</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Optional Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Deco Wale. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
