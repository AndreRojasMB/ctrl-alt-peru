import React, { useState, useEffect, useRef } from 'react';
import { FileText, ClipboardList, Lightbulb, Award } from 'lucide-react';

const HomeSteps = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState([false, false, false, false]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Animación secuencial de los steps
          setTimeout(() => setVisibleSteps([true, false, false, false]), 100);
          setTimeout(() => setVisibleSteps([true, true, false, false]), 250);
          setTimeout(() => setVisibleSteps([true, true, true, false]), 400);
          setTimeout(() => setVisibleSteps([true, true, true, true]), 550);
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

  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Postula",
      description: "Completa el formulario",
      button: "Postula",
      color: "bg-gradient-to-br from-[#ff6201] to-[#ff8534]"
    },
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "Reto TikTok",
      description: "Video de 1 minuto explicando por qué quieres ser parte",
      button: "Siguiente",
      color: "bg-gradient-to-br from-[#02288d] to-[#0344c2]"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Capacítate",
      description: "Talleres prácticos y mentorías previas al viaje",
      button: "Prepárate",
      color: "bg-gradient-to-br from-[#ff6201] to-[#ff8534]"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Vive la experiencia",
      description: "1 semana con todo cubierto: trabaja con la comunidad y recibe tu diploma",
      button: "Vive el reinicio",
      color: "bg-gradient-to-br from-[#02288d] to-[#0344c2]"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center text-[#02288d] mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'
        }`}>
          Pasos para ser parte de esta integración social
        </h2>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative transition-all duration-700 ease-out ${
                visibleSteps[index] 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-[30px] opacity-0 scale-95'
              }`}
            >
              {/* 🔹 Línea anterior solo para el primer paso */}
              {index === 0 && (
                <div className={`hidden md:block absolute top-12 left-0 right-full w-60 h-0.5 bg-gradient-to-r from-[#ff6201] to-[#02288d] z-0 translate-x-1 transition-all duration-1000 ${
                  visibleSteps[0] ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`} style={{ transformOrigin: 'right' }} />
              )}

              {/* 🔹 Líneas hacia los siguientes pasos (excepto el último) */}
              {index < steps.length - 1 && (
                <div className={`hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#ff6201] to-[#02288d] z-0 transition-all duration-1000 delay-${index * 150} ${
                  visibleSteps[index] ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`} style={{ transformOrigin: 'left' }} />
              )}

              <div className="relative z-10 text-center">
                <div
                  className={`${step.color} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl transform hover:scale-110 transition-all duration-500`}
                >
                  <div className="text-white">{step.icon}</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-[#02288d] mb-2">
                    Paso {index + 1} — {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                  <button className="bg-[#ff6201] text-white px-4 py-2 rounded-full text-sm hover:bg-[#e55500] transition-colors duration-300">
                    {step.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSteps;