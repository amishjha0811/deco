import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Category Data
const categories = [
  { title: 'Birthday Decorations', image: '/cake.jpg', link: '/Birthday', type: 'Birthday' },
  { title: 'Anniversary Setups', image: '/dcoimg1.avif', link: '/Anniversary', type: 'Anniversary' },
  { title: 'Baby Shower Themes', image: '/cake.jpg', link: '/BabyShower', type: 'Baby Shower' },
  { title: 'Rustic Charm', image: '/cake.jpg', link: '/Decorations?type=rustic', type: 'Rustic' },
  { title: 'Bohemian Bliss', image: '/dcoimg1.avif', link: '/Decorations?type=bohemian', type: 'Bohemian' },
  { title: 'Vintage Romance', image: '/cake.jpg', link: '/Decorations?type=vintage', type: 'Vintage' },
  { title: 'Garden Party', image: '/dcoimg1.avif', link: '/Decorations?type=garden', type: 'Garden' },
  { title: 'Tropical Paradise', image: '/cake.jpg', link: '/Decorations?type=tropical', type: 'Tropical' },
  { title: 'Celestial Magic', image: '/dcoimg1.avif', link: '/Decorations?type=celestial', type: 'Celestial' },
  { title: 'Winter Wonderland', image: '/cake.jpg', link: '/Decorations?type=winter', type: 'Winter' },
  { title: 'Corporate Events', image: '/dcoimg1.avif', link: '/Decorations?type=corporate', type: 'Corporate' },
  { title: 'Engagement Ceremonies', image: '/cake.jpg', link: '/Decorations?type=engagement', type: 'Engagement' },
];

// Decoration Pricing Data
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

// Customer Reviews
const customerReviews = [
  {
    name: 'Riya Sharma',
    review: 'Amazing setup! Everyone loved the decoration. Will definitely book again!',
  },
  {
    name: 'Amit Verma',
    review: 'Timely service and beautiful design. Made our anniversary truly special.',
  },
  {
    name: 'Neha Kapoor',
    review: 'The team was professional and very creative. Highly recommend Deco Wale!',
  },
];

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-200 to-white px-6 md:px-20 py-20 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 space-y-6 mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Celebrate in Style with <span className="text-purple-700">Deco Wale</span>
          </h1>
          <p className="text-lg text-gray-600">
            Premium decoration services for all your special moments. From birthdays to weddings and corporate events — we’ve got it all!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/Explore">
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg shadow transition">
                Explore Themes
              </button>
            </Link>
            <Link to="/Contact">
              <button className="border border-gray-400 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-lg transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/bghome.png"
            alt="Decor sample"
            className=" w-full"
          />
        </div>
      </section>

      {/* Explore Our Decoration Themes */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Decoration Themes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => {
            const matched = decorations.filter(
              (d) => d.type.toLowerCase() === cat.type.toLowerCase()
            );
            return (
              <Link to={cat.link} key={index} className="hover:scale-[1.02] transition">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img src={cat.image} alt={cat.title} className="h-52 w-full object-cover" />
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-semibold text-purple-700 text-center">
                      {cat.title}
                    </h3>
                    {matched.length > 0 ? (
                      matched.map((d) => (
                        <div key={d.id} className="bg-gray-50 p-3 rounded-lg mb-2 shadow-sm">
                          <p className="text-sm font-medium text-gray-700">{d.title}</p>
                          <p className="text-sm text-gray-500">{d.description}</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-purple-600 font-semibold">{d.price}</span>
                            {d.badge && (
                              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                                {d.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500 text-center">No pricing available</p>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {customerReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <p className="text-gray-600 italic mb-4">“{review.review}”</p>
              <h4 className="text-md font-semibold text-purple-700">{review.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-50 py-14 px-6 md:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Want a Customized Theme?
        </h2>
        <p className="text-gray-600 mt-2 mb-6">
          We also do theme personalization! Contact us to discuss your dream decoration.
        </p>
        <Link to="/Contact">
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg transition shadow-md">
            Get in Touch
          </button>
        </Link>
      </section>
    </>
  );
};

export default Homepage;