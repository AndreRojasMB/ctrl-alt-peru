import React from 'react';
import { FileText, ClipboardList, Lightbulb, Award } from 'lucide-react';

const HomeSteps = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Postula",
      description: "Completa el formulario + carta de motivación",
      button: "Postula",
      color: "bg-gradient-to-br from-[#ff6201] to-[#ff8534]"
    },
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "Selección",
      description: "Prueba breve de hábitos y entrevista",
      button: "Siguiente",
      color: "bg-gradient-to-br from-[#02288d] to-[#0344c2]"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Capacítate",
      description: "Talleres prácticos y mentoría con ONGs",
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#02288d] mb-16">
          Pasos para ser parte de esta integración social
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#ff6201] to-[#02288d] z-0" />
              )}
              
              <div className="relative z-10 text-center">
                <div className={`${step.color} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl transform hover:scale-110 transition-transform`}>
                  <div className="text-white">{step.icon}</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-[#02288d] mb-2">
                    Paso {index + 1} — {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                  <button className="bg-[#ff6201] text-white px-4 py-2 rounded-full text-sm hover:bg-[#e55500] transition-colors">
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