import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HomePopup from './home-popup';

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const slides = [
    { id: 1, image: "/images/banner-2.jpg", title: "Reconecta con lo que nos une" },
    { id: 2, image: "/images/banner-3.jpg", title: "Aprende escuchando, transforma actuando" },
    { id: 3, image: "/images/bcp-valeria.jpg", title: "Reinicia tu forma de ver el Perú" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]); // <-- agregado slides.length

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-96">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                    <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                    <button 
                      onClick={() => setIsPopupOpen(true)}
                      className="bg-[#ff6201] text-white px-8 py-3 rounded-full hover:bg-[#e55500] transition-all transform hover:scale-105 shadow-xl"
                    >
                      Inscríbete ahora
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </section>
      
      <HomePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default HomeBanner;
