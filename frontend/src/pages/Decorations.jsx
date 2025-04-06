import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const decorations = [
  {
    id: 1,
    title: 'Rustic Theme',
    description:
      'Warm tones, wooden textures, and fairy lights. Ideal for cozy and vintage-style events.',
    image: 'https://source.unsplash.com/600x400/?rustic,decor',
  },
  {
    id: 2,
    title: 'Garden Party',
    description:
      'Fresh greenery, florals, and elegant settings. Perfect for outdoor celebrations and picnics.',
    image: 'https://source.unsplash.com/600x400/?garden,decoration',
  },
  {
    id: 3,
    title: 'Balloon Magic',
    description:
      'Colorful balloon arrangements for birthdays, baby showers, and festive moments.',
    image: 'https://source.unsplash.com/600x400/?balloon,party',
  },
  {
    id: 4,
    title: 'Luxury White & Gold',
    description:
      'Elegant white & gold decor, best suited for anniversaries, engagements, and luxury events.',
    image: 'https://source.unsplash.com/600x400/?luxury,wedding',
  },
];

function Decorations() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
          Discover Our Signature Decorations
        </h2>

        <div className="space-y-12">
          {decorations.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-6 bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ${
                idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2 w-full h-64 md:h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:w-1/2 w-full p-6 md:p-8 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+919560570695"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
                  >
                    <Phone size={16} /> Call
                  </a>
                  <a
                    href="mailto:contact@decowale.com"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                  >
                    <Mail size={16} /> Email
                  </a>
                  <a
                    href="https://wa.me/919560570695?text=Hi%20I%20am%20interested%20in%20your%20decoration%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Decorations;



// import React from 'react';
// import { Phone, Mail, MessageCircle, Sparkles } from 'lucide-react';
// import { motion } from 'framer-motion';

// const decorations = [
//   {
//     id: 1,
//     title: 'Rustic Theme',
//     description:
//       'Warm tones, wooden textures, and fairy lights. Ideal for cozy and vintage-style events.',
//     image: 'https://source.unsplash.com/600x400/?rustic,decor',
//     badge: 'Popular',
//   },
//   {
//     id: 2,
//     title: 'Garden Party',
//     description:
//       'Fresh greenery, florals, and elegant settings. Perfect for outdoor celebrations and picnics.',
//     image: 'https://source.unsplash.com/600x400/?garden,decoration',
//     badge: 'New',
//   },
//   {
//     id: 3,
//     title: 'Balloon Magic',
//     description:
//       'Colorful balloon arrangements for birthdays, baby showers, and festive moments.',
//     image: 'https://source.unsplash.com/600x400/?balloon,party',
//     badge: 'Festive',
//   },
//   {
//     id: 4,
//     title: 'Luxury White & Gold',
//     description:
//       'Elegant white & gold decor, best suited for anniversaries, engagements, and luxury events.',
//     image: 'https://source.unsplash.com/600x400/?luxury,wedding',
//     badge: 'Luxury',
//   },
// ];

// function Decorations() {
//   return (
//     <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
//           Choose Your Style of Celebration
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {decorations.map((item, idx) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: idx * 0.1 }}
//               className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
//             >
//               <div className="relative h-52 w-full overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                 />
//                 <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                   {item.badge}
//                 </span>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
//                   <Sparkles className="text-indigo-500" size={18} />
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-5">{item.description}</p>

//                 <div className="flex flex-wrap gap-3">
//                   <a
//                     href="tel:+919560570695"
//                     className="inline-flex items-center gap-2 px-4 py-1.5 text-sm bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
//                   >
//                     <Phone size={14} /> Call
//                   </a>
//                   <a
//                     href="mailto:contact@decowale.com"
//                     className="inline-flex items-center gap-2 px-4 py-1.5 text-sm bg-green-600 text-white rounded-full hover:bg-green-700"
//                   >
//                     <Mail size={14} /> Email
//                   </a>
//                   <a
//                     href="https://wa.me/919560570695?text=Hi%20I%20am%20interested%20in%20your%20decoration%20services"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 px-4 py-1.5 text-sm bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
//                   >
//                     <MessageCircle size={14} /> WhatsApp
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Decorations;
