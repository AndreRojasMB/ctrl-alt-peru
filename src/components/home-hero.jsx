import React, { useState, useEffect, useRef } from 'react';

const HomeHero = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true);
      setVideoEnded(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 z-10" />
      
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoEnded ? 'opacity-20' : 'opacity-100'
        }`}
        autoPlay
        muted
        playsInline
      >
        <source src="/images/banner-principal.jpg" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-[#02288d]/40 to-[#ff6201]/40 z-20" />
      
      <div className="relative z-30 h-full flex items-center justify-center">
        <div className={`text-center transition-all duration-1500 transform ${
          showTitle ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Ctrl + Alt + Perú
          </h1>
          <p className="text-2xl md:text-3xl text-white font-light animate-pulse">
            Reinicio épico
          </p>
          {showTitle && (
            <button className="mt-8 bg-[#ff6201] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e55500] transform hover:scale-105 transition-all shadow-xl animate-bounce">
              Comienza el cambio
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;