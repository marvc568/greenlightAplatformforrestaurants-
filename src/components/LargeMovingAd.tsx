import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ads = [
  {
    title: "بازوكا أبو شقرا",
    description: "أشهى المشويات والشاورما",
    image: "https://example.com/bazooka-abu-shakra.jpg",
  },
  {
    title: "برجر كينج",
    description: "برجر شهي بطعم لا يقاوم",
    image: "https://example.com/burger-king.jpg",
  },
  {
    title: "KFC",
    description: "دجاج مقرمش ولذيذ",
    image: "https://example.com/kfc.jpg",
  },
];

const LargeMovingAd = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-96 relative overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentAdIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={ads[currentAdIndex].image}
            alt={ads[currentAdIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-8">
            <h2 className="text-4xl font-bold mb-4">{ads[currentAdIndex].title}</h2>
            <p className="text-xl text-center">{ads[currentAdIndex].description}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full font-bold text-lg"
            >
              اطلب الآن
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LargeMovingAd;