import React from 'react';
import { ArrowRight } from 'lucide-react';

const HomeCards = () => {
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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
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
              className="group relative rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 aspect-[4/5]"
            >
              {/* ✅ Fondo con imagen */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>

              {/* Filtro para legibilidad */}
              <div className="absolute inset-0 bg-white/60 group-hover:bg-black/20 transition-all duration-500"></div>

              {/* Contenido */}
              <div className="relative flex flex-col justify-between items-center text-center h-full p-8">
                {/* Título centrado */}
                <div className="flex-1 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-[#02288d]">
                    {card.title}
                  </h3>
                </div>

                {/* Botón abajo */}
                <button className="flex items-center space-x-2 text-[#ff6201] font-semibold group-hover:space-x-4 transition-all mb-2">
                  <span>{card.cta}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
