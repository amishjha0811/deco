import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Address Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Location</h3>
          <ul className="space-y-2">
            <li>
            <Link
              to="https://www.google.com/maps/place/Sector+52,+Wazirabad,+Haryana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 flex items-center space-x-2"
            >
              <span>Sector-52, Wazirabad,
                Haryana, India</span>
            </Link>
            </li>

            <li className="flex items-center space-x-2">
            
              <Phone size={18} />
              <Link to="tel:+919560570695" className="hover:text-indigo-600" >Call US</Link>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} />
              <Link to="mailto:contact@decowale.com" className="hover:text-indigo-600">contact@decowale.com</Link>
            </li>
          </ul>
        </div>

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
          <h3 className="text-lg font-semibold mb-4">Social Links</h3>
          <div className="flex flex-col space-y-4 w-33">

            <Link

              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 flex items-center space-x-2"
            >
              <Facebook size={22} />
              <span>Facebook</span>
            </Link>
            <Link
              to="https://www.instagram.com/decowale?igsh=MWxiM2NoOWlxajRteA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 flex items-center space-x-2"
            >
              <Instagram size={22} />
              <span>Instagram</span>
            </Link>
            <Link
              to="https://youtube.com/@decowale?si=JY-zRWl2TQyeQEcN"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 flex items-center space-x-2"
            >
              <Youtube size={22} />
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
