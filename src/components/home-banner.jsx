import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const slides = [
    { id: 1, image: "/images/banner-2.jpg", title: "Reconecta con lo que nos une" },
    { id: 2, image: "/images/banner-3.jpg", title: "Aprende escuchando, transforma actuando" },
    { id: 3, image: "/images/bcp-valeria.jpg", title: "Reinicia tu forma de ver el Perú" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
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
  }, [isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // animación CSS aplicada solo al bloque de contenido del slide activo
  const activeContentStyle = {
    animation: 'fadeUp 700ms cubic-bezier(.22,.9,.3,1) forwards',
    willChange: 'transform, opacity'
  };

  const inactiveContentStyle = {
    opacity: 0,
    transform: 'translateY(18px)'
  };

  return (
    <>
      <section ref={sectionRef} className="bg-gray-50 -mt-20 py-10">
        <div className={`max-w-8xl mx-10 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-[40px] opacity-0 scale-98'
        }`}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-96">
              {slides.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={slide.id}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    {/* imagen de fondo con zoom gradual */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className={`w-full h-full object-cover transition-transform duration-[4000ms] ease-out ${
                        isActive ? 'scale-105' : 'scale-100'
                      }`}
                    />

                    {/* capa gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

                    {/* contenido con fade-up aplicado inline */}
                    <div
                      style={isActive ? activeContentStyle : inactiveContentStyle}
                      className="absolute bottom-10 left-10 right-10 text-white"
                    >
                      <h3 className="text-3xl font-bold mb-4 drop-shadow-lg tracking-tight">
                        {slide.title}
                      </h3>
                      <button
                        onClick={() => setIsPopupOpen(true)}
                        className="bg-[#ff6201] text-white px-8 py-3 rounded-full hover:bg-[#e55500] transition-all transform hover:scale-105 shadow-xl"
                      >
                        Inscríbete ahora
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* indicadores con animación de entrada */}
            <div className={`absolute bottom-4 right-4 flex space-x-2 transition-all duration-700 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[20px] opacity-0'
            }`}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* control izquierdo con animación */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-700 delay-200 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0'
              }`}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* control derecho con animación */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-700 delay-200 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[20px] opacity-0'
              }`}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal popup placeholder - necesitarías el componente real */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={() => setIsPopupOpen(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-[#02288d] mb-4">Inscripción</h3>
            <p className="text-gray-600 mb-4">Formulario de inscripción aquí</p>
            <button 
              onClick={() => setIsPopupOpen(false)}
              className="bg-[#ff6201] text-white px-6 py-2 rounded-full hover:bg-[#e55500] transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Keyframes locales: garantizan fade-up cross-browser */}
      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(22px);
          }
          60% {
            opacity: 1;
            transform: translateY(-2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default HomeBanner;