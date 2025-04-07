import React from 'react'
import { motion } from 'framer-motion';
const Whatsapp = () => {
    return (
        <div>
            {/* Floating WhatsApp Chat Button */}
            <a
                href="https://wa.me/919560570695"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50"
            >
                <motion.img
                    whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                    src="/wp.png"
                    alt="WhatsApp Chat"
                    className="w-14 h-14 rounded-full shadow-lg"
                />
            </a>
        </div>
    )
}

export default Whatsapp;
