import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const PromoCard = ({ title, subtitle, bgImage, bgColor, className = "" }) => {
  return (
    <div 
      className={`relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group ${className}`}
    >
      {/* Background Image con efecto zoom sutil */}
      <div 
        className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: bgColor || '#1e40af'
        }}
      />
      
      {/* Overlay gradient con fade suave */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 group-hover:via-black/50 transition-all duration-[1000ms] ease-in-out"></div>
      
      {/* Contenido */}
      <div className="relative h-full p-8 flex flex-col justify-end">
        <h3 className="text-white text-2xl font-bold mb-2 leading-tight transform transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-[-6px] group-hover:scale-[1.02]">
          {title}
        </h3>
        {subtitle && (
          <p className="text-white/90 text-lg mb-4 transform transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-75 group-hover:translate-y-[-6px] opacity-90 group-hover:opacity-100">
            {subtitle}
          </p>
        )}
        <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-[-6deg] group-hover:shadow-lg">
          <ArrowRight className="text-blue-900 transition-transform duration-500 group-hover:translate-x-1" size={24} strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

const BcpPromotions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([false, false, false, false]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Animación secuencial de las cards con los mismos delays originales
          setTimeout(() => setVisibleCards([true, false, false, false]), 0);
          setTimeout(() => setVisibleCards([true, true, false, false]), 150);
          setTimeout(() => setVisibleCards([true, true, true, false]), 250);
          setTimeout(() => setVisibleCards([true, true, true, true]), 350);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const promotions = [
    {
      title: "Paraderos Interactivos BCP",
      subtitle: "¿Qué te hace sentir orgulloso de ser peruano?",
      bgImage: "images/Paradero.png",
      bgColor: "#93c5fd"
    },
    {
      title: "Museo Cultural",
      subtitle: "",
      bgImage: "images/Exposionartistica.png",
      bgColor: "#bfdbfe"
    },
    {
      title: "Escuela Gen Z",
      subtitle: "",
      bgImage: "images/CarpaBCP.png",
      bgColor: "#1e3a8a"
    },
    {
      title: "Podcast Modo Reinicio",
      subtitle: "",
      bgImage: "images/spoty.png",
      bgColor: "#fce7f3"
    }
  ];

  return (
    <div ref={sectionRef} className="bg-gray-50 pt-4 pb-0 px-3 sm:px-5 lg:px-6 -mt-0">
      <div className="max-w-7xl mx-auto">
        {/* Título Principal con animación al scroll */}
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-12 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-30px] opacity-0'
        }`}>
          "Experiencias Ctrl+Alt+Perú"
        </h1>

        {/* Grid de Promociones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 - Fade Up */}
          <div className={`transition-all duration-1000 ease-out ${
            visibleCards[0] ? 'translate-y-0 opacity-100' : 'translate-y-[40px] opacity-0'
          }`}>
            <PromoCard {...promotions[0]} className="h-80 md:h-[220px]" />
          </div>

          {/* Card 2 - Fade Left */}
          <div className={`h-80 md:h-[460px] transition-all duration-1000 ease-out ${
            visibleCards[1] ? 'translate-x-0 opacity-100' : 'translate-x-[40px] opacity-0'
          }`}>
            <PromoCard {...promotions[1]} className="h-72 md:h-[460px]" />
          </div>

          {/* Card 3 - Fade Right */}
          <div className={`transition-all duration-1000 ease-out ${
            visibleCards[2] ? 'translate-x-0 opacity-100' : 'translate-x-[-40px] opacity-0'
          }`}>
            <PromoCard {...promotions[2]} className="h-96 md:h-[500px] top-[-240px]" />
          </div>

          {/* Card 4 - Fade Up */}
          <div className={`h-80 md:h-[260px] transition-all duration-1000 ease-out ${
            visibleCards[3] ? 'translate-y-0 opacity-100' : 'translate-y-[40px] opacity-0'
          }`}>
            <PromoCard {...promotions[3]} className="h-80 md:h-[260px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BcpPromotions;