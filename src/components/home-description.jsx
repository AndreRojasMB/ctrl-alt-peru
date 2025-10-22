import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const HomeDescription = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleBadges, setVisibleBadges] = useState([false, false, false]);
  const [visibleStats, setVisibleStats] = useState([false, false, false, false]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Animación secuencial de badges
          setTimeout(() => setVisibleBadges([true, false, false]), 600);
          setTimeout(() => setVisibleBadges([true, true, false]), 750);
          setTimeout(() => setVisibleBadges([true, true, true]), 900);
          // Animación secuencial de stats
          setTimeout(() => setVisibleStats([true, false, false, false]), 400);
          setTimeout(() => setVisibleStats([true, true, false, false]), 550);
          setTimeout(() => setVisibleStats([true, true, true, false]), 700);
          setTimeout(() => setVisibleStats([true, true, true, true]), 850);
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

  const badges = [
    { icon: CheckCircle, text: "24 destinos disponibles" },
    { icon: CheckCircle, text: "Todo incluido" },
    { icon: CheckCircle, text: "Certificación oficial" }
  ];

  const stats = [
    { value: "24", label: "Destinos activos" },
    { value: "50+", label: "Comunidades impactadas" },
    { value: "10+", label: "Empresas aliadas" },
    { value: "95%", label: "Satisfacción" }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-[#02288d] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#02288d] to-[#0344c2]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6201]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff6201]/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda */}
          <div>
            {/* Título con animación */}
            <h2 className={`text-4xl font-bold text-white mb-6 transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-30px] opacity-0'
            }`}>
              Un movimiento que transforma el Perú
            </h2>

            {/* Primer párrafo */}
            <p className={`text-white/90 text-lg leading-relaxed mb-6 transition-all duration-1000 ease-out delay-150 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0'
            }`}>
              Ctrl + Alt + Perú redefine la integración social: una experiencia inmersiva donde jóvenes profesionales y comunidades construyen juntos un nuevo comienzo.
            </p>

            {/* Segundo párrafo */}
            <p className={`text-white/90 text-lg leading-relaxed mb-8 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0'
            }`}>
              Durante una semana, vivirás, trabajarás y crearás soluciones reales junto a las comunidades, 
              generando un impacto duradero mientras desarrollas habilidades de liderazgo y empatía.
            </p>

            {/* Badges con animación secuencial */}
            <div className="flex flex-wrap gap-4">
              {badges.map((badge, index) => (
                <div 
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3 transition-all duration-700 ease-out ${
                    visibleBadges[index] 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : 'translate-y-[20px] opacity-0 scale-95'
                  }`}
                >
                  <badge.icon className="w-6 h-6 text-[#ff6201]" />
                  <span className="text-white font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Columna derecha - Grid de stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 hover:bg-white/15 transition-all duration-700 ease-out ${
                  visibleStats[index] 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-[30px] opacity-0 scale-90'
                }`}
              >
                <div className="text-4xl font-bold text-[#ff6201] mb-2">{stat.value}</div>
                <div className="text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDescription;