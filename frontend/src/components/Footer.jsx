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
              <a
                href="https://www.google.com/maps/place/Sector+52,+Wazirabad,+Haryana"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 flex"
              >
                Sector-52, Wazirabad, Haryana, India
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={18} />
              <a href="tel:+919560570695" className="hover:text-indigo-600">+91 95605 70695</a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} />
              <a href="mailto:decowaleonoline@gmail.com" className="hover:text-indigo-600">contact@decowale.com</a>
            </li>
          </ul>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
          <ul className="space-y-2">
            <li><Link to="/Birthday" className="hover:text-indigo-600">Birthday Decoration</Link></li>
            <li><Link to="/Anniversary" className="hover:text-indigo-600">Anniversary Decoration</Link></li>
            <li><Link to="/BabyShower" className="hover:text-indigo-600">Baby Shower</Link></li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li><Link to="/Terms" className="hover:text-indigo-600">Terms & Conditions</Link></li>
            <li><Link to="/About" className="hover:text-indigo-600">About Us</Link></li>
            <li><Link to="/Disclaimer" className="hover:text-indigo-600">Disclaimer</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex flex-col space-y-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 flex items-center space-x-2"
              aria-label="Facebook"
            >
              <Facebook size={22} />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/decowale?igsh=MWxiM2NoOWlxajRteA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 flex items-center space-x-2"
              aria-label="Instagram"
            >
              <Instagram size={22} />
              <span>Instagram</span>
            </a>
            <a
              href="https://youtube.com/@decowale?si=JY-zRWl2TQyeQEcN"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 flex items-center space-x-2"
              aria-label="YouTube"
            >
              <Youtube size={22} />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Deco Wale. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
