import React, { useState, useEffect } from 'react';

const MovingAds = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const ads = [
    '🎉 عرض خاص: خصم 20% على جميع الطلبات اليوم! استخدم الكود: SPECIAL20 🎉',
    '🍕 اطلب بيتزا واحصل على الثانية مجانًا! العرض ساري حتى نهاية الأسبوع 🍕',
    '🚚 توصيل مجاني لجميع الطلبات فوق 100 جنيه مصري! اطلب الآن 🚚'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000); // تغيير الإعلان كل 5 ثواني

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-yellow-400 text-black p-2 text-center overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="inline-block px-4">{ads[currentAdIndex]}</span>
      </div>
    </div>
  );
};

export default MovingAds;