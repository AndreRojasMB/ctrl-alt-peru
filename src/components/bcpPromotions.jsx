import React from 'react';
import { ArrowRight } from 'lucide-react';

const PromoCard = ({ title, subtitle, bgImage, bgColor, className = "" }) => {
  return (
    <div 
      className={`relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group ${className}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: bgColor || '#1e40af'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      
      <div className="relative h-full p-8 flex flex-col justify-end">
        <h3 className="text-white text-2xl font-bold mb-2 leading-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-white/90 text-lg mb-4">
            {subtitle}
          </p>
        )}
        <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full group-hover:scale-110 transition-transform">
          <ArrowRight className="text-blue-900" size={24} strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

const BcpPromotions = () => {
  const promotions = [
    {
      title: "¿Primera vez pidiendo tarjeta?",
      subtitle: "Con AND0, es posible",
      bgImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      bgColor: "#93c5fd"
    },
    {
      title: "¡Ahorra con Wardaditos, la alcancía virtual!",
      subtitle: "",
      bgImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      bgColor: "#bfdbfe"
    },
    {
      title: "Pide un Préstamo online y obtén tu dinero al instante",
      subtitle: "",
      bgImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
      bgColor: "#1e3a8a"
    },
    {
      title: "¡Tu Tarjeta de Crédito en segundos!",
      subtitle: "",
      bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      bgColor: "#fce7f3"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título Principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-12">
          Explora las mejores<br />promociones con BCP
        </h1>

        {/* Grid de Promociones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 - Grande izquierda */}
          <PromoCard
            title={promotions[0].title}
            subtitle={promotions[0].subtitle}
            bgImage={promotions[0].bgImage}
            bgColor={promotions[0].bgColor}
            className="md:row-span-2 h-96 md:h-auto"
          />

          {/* Card 2 - Pequeño derecha arriba */}
          <PromoCard
            title={promotions[1].title}
            subtitle={promotions[1].subtitle}
            bgImage={promotions[1].bgImage}
            bgColor={promotions[1].bgColor}
            className="h-72"
          />

          {/* Card 3 - Grande izquierda abajo */}
          <PromoCard
            title={promotions[2].title}
            subtitle={promotions[2].subtitle}
            bgImage={promotions[2].bgImage}
            bgColor={promotions[2].bgColor}
            className="h-80"
          />

          {/* Card 4 - Pequeño derecha abajo */}
          <PromoCard
            title={promotions[3].title}
            subtitle={promotions[3].subtitle}
            bgImage={promotions[3].bgImage}
            bgColor={promotions[3].bgColor}
            className="h-80"
          />
        </div>
      </div>
    </div>
  );
};

export default BcpPromotions;