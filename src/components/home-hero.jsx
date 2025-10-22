import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HomeHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('formulario');
    const header = document.querySelector('header');
    if (formSection) {
      const headerHeight = header ? header.offsetHeight : 100;
      const offset = 50;
      const y = formSection.getBoundingClientRect().top + window.pageYOffset - (headerHeight + offset);
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden mt-20">
      {/* Imagen de fondo */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out ${
          loaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
        }`}
        style={{ backgroundImage: "url('/images/banner-principal.jpg')" }}
      />

      {/* Overlay sutil con gradiente */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/20 transition-opacity duration-[1500ms] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Contenido central */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Ctrl + Alt + Perú
        </h1>

        <p
          className={`mt-6 text-2xl md:text-4xl font-light text-white/90 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Reinicio épico
        </p>

        {/* Línea decorativa */}
        <div
          className={`h-[2px] w-32 bg-white/60 mt-8 transition-all duration-1000 delay-400 ${
            loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />

        {/* Botón principal */}
        <button
          onClick={scrollToForm}
          className={`mt-12 bg-[#ff6201] hover:bg-[#e55500] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Comienza el cambio
        </button>
      </div>

      {/* Indicador de scroll (más sutil) */}
      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${
          loaded ? 'opacity-80' : 'opacity-0'
        }`}
      >
        <div onClick={scrollToForm} className="flex flex-col items-center cursor-pointer hover:opacity-100 transition-opacity">
          <span className="text-white text-sm font-light mb-1">Descubre más</span>
          <ChevronDown className="w-6 h-6 text-white animate-bounce-slow" />
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default HomeHero;
