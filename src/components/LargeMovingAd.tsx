import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ads = [
  {
    title: "عرض خاص!",
    description: "خصم 50% على جميع الوجبات اليوم فقط!",
    image: "https://picsum.photos/seed/ad1/800/400",
  },
  {
    title: "جديد!",
    description: "جرب قائمتنا الصحية الجديدة",
    image: "https://picsum.photos/seed/ad2/800/400",
  },
  {
    title: "توصيل مجاني",
    description: "لجميع الطلبات فوق 100 جنيه",
    image: "https://picsum.photos/seed/ad3/800/400",
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LargeMovingAd;