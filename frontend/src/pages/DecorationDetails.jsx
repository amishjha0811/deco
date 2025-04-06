import React from 'react';
import { useParams } from 'react-router-dom';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const decorations = [
    {
        id: '1',
        title: 'Rustic Theme',
        price: '₹2,499',
        category: 'Birthday',
        description: 'Warm tones, wooden textures, and fairy lights. A charming rustic setup for cozy celebrations.',
        images: [
            'https://source.unsplash.com/800x500/?rustic,decor',
            'https://source.unsplash.com/800x500/?rustic,party',
        ],
        includes: ['Wooden props', 'Fairy lights', 'Rustic backdrops', 'Custom banner'],
    },
    {
        id: '2',
        title: 'Garden Party',
        price: '₹3,999',
        category: 'Baby Shower',
        description: 'Fresh greenery, florals, and elegant setups. Perfect for baby showers and bridal brunches.',
        images: [
            'https://source.unsplash.com/800x500/?garden,decoration',
            'https://source.unsplash.com/800x500/?floral,party',
        ],
        includes: ['Floral arch', 'Green grass carpet', 'Table decor', 'Balloon bunches'],
    },
    // Add more items as needed...
];

const DecorationDetails = () => {
    const { id } = useParams();
    const decor = decorations.find((item) => item.id === id);

    if (!decor) return <div className="text-center py-20 text-gray-600">Decoration not found.</div>;

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto px-4 py-12"
        >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">{decor.title}</h2>

            {/* Image Carousel */}
            <Carousel showThumbs={false} infiniteLoop autoPlay className="rounded-xl overflow-hidden shadow-md mb-8">
                {decor.images.map((src, index) => (
                    <div key={index}>
                        <img src={src} alt={`Slide ${index + 1}`} className="object-cover w-full h-[400px]" />
                    </div>
                ))}
            </Carousel>

            {/* Description */}
            <div className="text-gray-700 text-lg mb-6">{decor.description}</div>

            {/* Package Includes */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">Package Includes:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {decor.includes.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Price + Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <span className="text-2xl font-bold text-indigo-700">{decor.price}</span>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="tel:+919560570695"
                        className="px-6 py-3 rounded-lg bg-indigo-600 text-white text-sm font-medium shadow hover:bg-indigo-700 flex items-center gap-2"
                    >
                        <Phone size={18} /> Call Now
                    </a>
                    <a
                        href="mailto:contact@decowale.com"
                        className="px-6 py-3 rounded-lg bg-green-600 text-white text-sm font-medium shadow hover:bg-green-700 flex items-center gap-2"
                    >
                        <Mail size={18} /> Email Us
                    </a>
                    <a
                        href="https://wa.me/919560570695?text=Hi%20I%20am%20interested%20in%20the%20{decor.title}%20package"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-lg bg-emerald-600 text-white text-sm font-medium shadow hover:bg-emerald-700 flex items-center gap-2"
                    >
                        <MessageCircle size={18} /> WhatsApp
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

export default DecorationDetails;
