import React from 'react';
import { CheckCircle } from 'lucide-react';
// Home Description Component
const HomeDescription = () => {
  return (
    <section className="py-20 bg-[#02288d] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#02288d] to-[#0344c2]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6201]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff6201]/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Un movimiento que transforma el Perú
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
Ctrl + Alt + Perú redefine la integración social: una experiencia inmersiva donde jóvenes profesionales y comunidades construyen juntos un nuevo comienzo.
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Durante una semana, vivirás, trabajarás y crearás soluciones reales junto a las comunidades, 
              generando un impacto duradero mientras desarrollas habilidades de liderazgo y empatía.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#ff6201]" />
                <span className="text-white font-medium">24 destinos disponibles</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#ff6201]" />
                <span className="text-white font-medium">Todo incluido</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#ff6201]" />
                <span className="text-white font-medium">Certificación oficial</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-[#ff6201] mb-2">24</div>
              <div className="text-white">Destinos activos </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-[#ff6201] mb-2">50+</div>
              <div className="text-white">Comunidades impactadas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-[#ff6201] mb-2">10+</div>
              <div className="text-white">Empresas aliadas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-[#ff6201] mb-2">95%</div>
              <div className="text-white">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeDescription;