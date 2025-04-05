// src/components/Navbar.jsx
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-2 flex items-center justify-between">
  {/* Left: Logo */}
  <Link to={"/"} className="flex items-center">
    <img src="/" alt="" className="h-16 w-auto" />
    <h1>DecoWale</h1>
  </Link>


      {/* Center: Search bar (hide on mobile) */}
      <div className="hidden md:flex items-center space-x-2 w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700">
          <Search size={20} />
        </button>
      </div>

        {/* Right: Nav + Cart (desktop only) */}
      <div className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
        <Link to={"/"} className="hover:text-indigo-600 cursor-pointer">Home</Link>
        <Link to={"/Decorations"} className="hover:text-indigo-600 cursor-pointer">Decorations</      Link>
        <Link to={"/Explore"} className="hover:text-indigo-600 cursor-pointer">Explore</Link>
        <Link to={"/Contact"} className="hover:text-indigo-600 cursor-pointer">Contact Us</Link>
        <button
          className="hover:text-indigo-600"
          onClick={() => alert('NAKALI KA!Item added to cart!')}
        >
          <ShoppingCart size={35} />
        </button>
      </div>


      {/* Mobile: Hamburger Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

        {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col       items-center space-y-4 py-4 md:hidden z-50">
          <input
            type="text"
            placeholder="Search..."
            className="w-11/12 px-4 py-2 border border-gray-300 rounded-full focus:outline-none       focus:ring-2 focus:ring-indigo-400"
          />
          <div className="flex flex-col items-center space-y-2 text-gray-700 font-medium">
            <Link to="/" className="hover:text-indigo-600 cursor-pointer">Home</Link>
            <Link to="/decorations" className="hover:text-indigo-600       cursor-pointer">Decorations</Link>
            <Link to="/explore" className="hover:text-indigo-600 cursor-pointer">Explore</Link>
            <Link to="/contact" className="hover:text-indigo-600 cursor-pointer">Contact Us</      Link>
          </div>
          <button
            className="hover:text-indigo-600"
            onClick={() => alert('Item added to cart!')}
          >
            <ShoppingCart size={24} />
          </button>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
