import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Decoration Pricing Data (reuse the same from Homepage to maintain consistency)
const decorations = [
  { id: 1, title: 'Romantic Balloon Decor', description: 'Perfect for anniversaries and romantic surprises.', image: '/cake.jpg', price: '₹1999', badge: 'Popular', type: 'Anniversary' },
  { id: 2, title: 'Birthday Party Setup', description: 'Colorful and fun decorations for birthdays.', image: '/dcoimg1.avif', price: '₹1499', badge: 'New', type: 'Birthday' },
  { id: 3, title: 'Baby Shower Celebration', description: 'Soft and pastel-themed setup for baby showers.', image: '/cake.jpg', price: '₹2499', badge: '', type: 'Baby Shower' },
  { id: 4, title: 'Luxury Ring Ceremony', description: 'Elegant and premium engagement setup.', image: '/dcoimg1.avif', price: '₹2999', badge: 'Popular', type: 'Engagement' },
  { id: 5, title: 'Rustic Vibes Setup', description: 'Earthy and cozy rustic charm decor.', image: '/cake.jpg', price: '₹2799', badge: '', type: 'Rustic' },
  { id: 6, title: 'Bohemian Dream', description: 'Macrame, florals and free-spirit themed decor.', image: '/dcoimg1.avif', price: '₹2699', badge: '', type: 'Bohemian' },
  { id: 7, title: 'Vintage Love', description: 'Old-world elegance and classy themes.', image: '/cake.jpg', price: '₹2899', badge: '', type: 'Vintage' },
  { id: 8, title: 'Garden Blossom Theme', description: 'Outdoor-style decoration with floral vibes.', image: '/dcoimg1.avif', price: '₹2199', badge: 'New', type: 'Garden' },
  { id: 9, title: 'Tropical Bash', description: 'Beachy and palm-style summer decor.', image: '/cake.jpg', price: '₹2399', badge: '', type: 'Tropical' },
  { id: 10, title: 'Celestial Night', description: 'Moon, stars and galaxy inspired celebration.', image: '/dcoimg1.avif', price: '₹2599', badge: '', type: 'Celestial' },
  { id: 11, title: 'Snowy Dreams', description: 'White and blue theme for winter parties.', image: '/cake.jpg', price: '₹2299', badge: '', type: 'Winter' },
  { id: 12, title: 'Corporate Classy Setup', description: 'Perfect for formal and office events.', image: '/dcoimg1.avif', price: '₹1999', badge: '', type: 'Corporate' },
];

const Explore = () => {
  const navigate = useNavigate();

  const handleClick = (decoration) => {
    // You can navigate to a detailed decoration page if needed
    navigate(`/Decorations?type=${encodeURIComponent(decoration.type)}`);
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Discover All Decoration Options</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {decorations.map((item, index) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl"
            onClick={() => handleClick(item)}
          >
            <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
            <div className="p-5 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-purple-700">{item.title}</h3>
                {item.badge && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-gray-800">{item.price}</span>
                <button className="text-sm text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md shadow">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
