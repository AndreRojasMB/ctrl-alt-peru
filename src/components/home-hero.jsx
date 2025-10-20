import React, { useState, useEffect } from 'react';

const HomeHero = () => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 700); // pequeño delay para animación inicial
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden mt-20">
      {/* Imagen de fondo (reemplaza la ruta si necesitas otra) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: "url('/images/banner-principal.jpg')" }}
        aria-hidden="true"
      />

      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 z-10" />

      {/* Color overlay para look de campaña */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#02288d]/40 to-[#ff6201]/40 z-20" />
      
      <div className="relative z-30 h-full flex items-center justify-center">
        <div className={`text-center transition-all duration-700 transform ${showTitle ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-6 opacity-0 scale-95'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Ctrl + Alt + Perú
          </h1>
          <p className="text-2xl md:text-3xl text-white font-light">
            Reinicio épico
          </p>

          {showTitle && (
            <button className="mt-8 bg-[#ff6201] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e55500] transform hover:scale-105 transition-all shadow-xl">
              Comienza el cambio
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
