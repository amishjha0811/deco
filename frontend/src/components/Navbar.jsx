import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [availabilityMessage, setAvailabilityMessage] = useState('');

  // Dummy available themes
  const availableThemes = [
    'Birthday',
    'Anniversary',
    'Baby Shower',
    'Rustic',
    'Bohemian',
    'Vintage',
    'Garden',
    'Tropical',
    'Celestial',
    'Winter',
    'Corporate',
    'Engagement'
  ];

  const handleSearch = () => {
    const isAvailable = availableThemes.some(theme =>
      theme.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (searchTerm.trim() === '') {
      setAvailabilityMessage('');
    } else {
      setAvailabilityMessage(
        isAvailable
          ? `🎉 "${searchTerm}" theme is available!`
          : `❌ Sorry, "${searchTerm}" theme is not available.`
      );
    }
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between relative">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src="/" alt="Logo" className="h-12 w-auto mr-2" />
        <h1 className="text-xl font-bold text-purple-700">DecoWale</h1>
      </Link>

      {/* Desktop Search Bar */}
      <div className="hidden md:flex items-center space-x-2 w-1/3">
        <input
          type="text"
          placeholder="Search themes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700"
          onClick={handleSearch}
        >
          <Search size={20} />
        </button>
      </div>

      {/* Availability message */}
      {availabilityMessage && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg px-4 py-2 text-sm text-center text-gray-800 z-40">
          {availabilityMessage}
        </div>
      )}

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
        <Link to="/" className="hover:text-purple-600">Home</Link>
        <Link to="/Decorations" className="hover:text-purple-600">Decorations</Link>
        <Link to="/Explore" className="hover:text-purple-600">Explore</Link>
        <Link to="/Contact" className="hover:text-purple-600">Contact Us</Link>
        <button
          className="hover:text-purple-600"
          onClick={() => alert('Item added to cart!')}
        >
          <ShoppingCart size={28} />
        </button>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <input
            type="text"
            placeholder="Search themes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-11/12 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-full"
            onClick={handleSearch}
          >
            Check
          </button>
          {availabilityMessage && (
            <p className="text-sm text-center text-gray-700">{availabilityMessage}</p>
          )}
          <Link to="/" className="hover:text-purple-600">Home</Link>
          <Link to="/Decorations" className="hover:text-purple-600">Decorations</Link>
          <Link to="/Explore" className="hover:text-purple-600">Explore</Link>
          <Link to="/Contact" className="hover:text-purple-600">Contact Us</Link>
          <button
            className="hover:text-purple-600"
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
