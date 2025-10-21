import React from 'react';
import { ArrowRight } from 'lucide-react';

const PromoCard = ({ title, subtitle, bgImage, bgColor, className = "" }) => {
  return (
    <div 
      className={`relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group ${className}`}
    >
      {/* Background Image con efecto zoom */}
      <div 
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: bgColor || '#1e40af'
        }}
      />
      
      {/* Overlay gradient que se oscurece en hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 group-hover:via-black/50 transition-all duration-500"></div>
      
      {/* Contenido */}
      <div className="relative h-full p-8 flex flex-col justify-end">
        <h3 className="text-white text-2xl font-bold mb-2 leading-tight transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:scale-105">
          {title}
        </h3>
        {subtitle && (
          <p className="text-white/90 text-lg mb-4 transform transition-all duration-500 delay-75 group-hover:translate-y-[-8px] opacity-90 group-hover:opacity-100">
            {subtitle}
          </p>
        )}
        <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full transition-all duration-500 group-hover:scale-125 group-hover:rotate-[-10deg] group-hover:shadow-xl">
          <ArrowRight className="text-blue-900 transition-transform duration-500 group-hover:translate-x-1" size={24} strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

const BcpPromotions = () => {
  const promotions = [
    {
      title: "Paraderos Interactivos BCP",
      subtitle: "¿Que te hace sentir orgulloso de ser peruano?",
      bgImage: "images/Paradero.png",
      bgColor: "#93c5fd"
    },
    {
      title: "¡Exposicion artisitica!",
      subtitle: "",
      bgImage: "images/Exposicionartistica.png",
      bgColor: "#bfdbfe"
    },
    {
      title: "Escuela tecnológica por Gen Z",
      subtitle: "",
      bgImage: "images/CarpaBCP.png",
      bgColor: "#1e3a8a"
    },
    {
      title: "Podcast “Modo Reinicio”",
      subtitle: "",
      bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      bgColor: "#fce7f3"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título Principal con animación */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-12 animate-[fadeIn_0.8s_ease-out]">
          Explora las mejores<br />promociones con BCP
        </h1>

        {/* Grid de Promociones - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 - Primera fila izquierda (mascota BCP) */}
          <div className="animate-[slideUp_0.6s_ease-out]">
            <PromoCard
              title={promotions[0].title}
              subtitle={promotions[0].subtitle}
              bgImage={promotions[0].bgImage}
              bgColor={promotions[0].bgColor}
              className="h-80 md:h-[220px]"
            />
          </div>

          {/* Card 2 - Primera fila derecha (Wardaditos) */}
          <div className="animate-[slideUp_0.6s_ease-out_0.1s] opacity-0 [animation-fill-mode:forwards] h-80 md:h-[460px]">
            <PromoCard
              title={promotions[1].title}
              subtitle={promotions[1].subtitle}
              bgImage={promotions[1].bgImage}
              bgColor={promotions[1].bgColor}
              className="h-72 md:h-[460px]"
            />
          </div>

          {/* Card 3 - Segunda fila izquierda (Préstamo - más alto) */}
          <div className="animate-[slideUp_0.6s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
            <PromoCard
              title={promotions[2].title}
              subtitle={promotions[2].subtitle}
              bgImage={promotions[2].bgImage}
              bgColor={promotions[2].bgColor}
              className="h-96 md:h-[500px] top-[-240px]"
            />
          </div>

          {/* Card 4 - Segunda fila derecha (Tarjeta de Crédito) */}
          <div className="animate-[slideUp_0.6s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards] h-80 md:h-[260px]">
            <PromoCard
              title={promotions[3].title}
              subtitle={promotions[3].subtitle}
              bgImage={promotions[3].bgImage}
              bgColor={promotions[3].bgColor}
              className="h-80 md:h-[260px]"
            />
          </div>
        </div>
      </div>

      {/* Definición de keyframes personalizados */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default BcpPromotions;