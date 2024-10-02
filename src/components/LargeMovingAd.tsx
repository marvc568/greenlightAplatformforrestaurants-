import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ads = [
  {
    title: "بازوكا",
    description: "أشهى المشويات والشاورما",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "أبو شقرا",
    description: "ألذ المأكولات الشرقية",
    image: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "برجر كينج",
    description: "برجر شهي بطعم لا يقاوم",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "KFC",
    description: "دجاج مقرمش ولذيذ",
    image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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