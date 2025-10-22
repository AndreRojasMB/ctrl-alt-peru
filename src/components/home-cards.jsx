import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HomeCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([false, false, false]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Animación secuencial de las cards
          setTimeout(() => setVisibleCards([true, false, false]), 200);
          setTimeout(() => setVisibleCards([true, true, false]), 400);
          setTimeout(() => setVisibleCards([true, true, true]), 600);
        }
      },
      { threshold: 0.2 }
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

  const cards = [
    {
      title: "COSTA",
      cta: "Ver Programas",
      color: "bg-[#ff6201]",
      image: "/images/costa.jpg",
    },
    {
      title: "SIERRA",
      cta: "Ver Programas",
      color: "bg-[#02288d]",
      image: "/images/sierra.jpg",
    },
    {
      title: "SELVA",
      cta: "Ver Programas",
      color: "bg-[#ff6201]",
      image: "/images/selva.jpg",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold text-[#02288d] mb-6">
            INTEGRACIÓN SOCIAL!!
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Una invitación a reconectar con lo que nos une: empatía, escucha y responsabilidad. 
            A reencender el orgullo de ser peruanos y construir, juntos, una nueva forma de vivir el civismo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 aspect-[4/5] ${
                visibleCards[index] 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-20 opacity-0 scale-95'
              }`}
            >
              {/* ✅ Fondo con imagen y efecto zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>

              {/* Efecto de brillo deslizante */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Filtro para legibilidad con transición suave */}
              <div className="absolute inset-0 bg-white/60 group-hover:bg-black/20 transition-all duration-500"></div>

              {/* Contenido */}
              <div className="relative flex flex-col justify-between items-center text-center h-full p-8">
                {/* Título centrado con animación */}
                <div className="flex-1 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-[#02288d] transition-all duration-500 group-hover:scale-110 group-hover:text-white">
                    {card.title}
                  </h3>
                </div>

                {/* Botón abajo con animaciones mejoradas */}
                <button className="flex items-center space-x-2 text-[#ff6201] font-semibold group-hover:space-x-4 transition-all duration-300 mb-2 group-hover:text-white transform group-hover:translate-y-[-4px]">
                  <span className="transition-all duration-300">{card.cta}</span>
                  <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-2" />
                </button>
              </div>

              {/* Borde brillante animado */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/50 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Estilos personalizados */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default HomeCards;