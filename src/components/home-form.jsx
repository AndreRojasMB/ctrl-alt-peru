import React, { useState, useEffect, useRef } from "react";
import { Send, Shield } from "lucide-react";

const HomeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    destination: "",
    date: "",
    motivation: ""
  });

  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  const destinations = [
    "Cusco - Machu Picchu",
    "Arequipa - Colca",
    "Puno - Titicaca",
    "Amazonas - Kuelap",
    "Loreto - Iquitos",
    "Lima - Pachacamac",
    "Ayacucho - Vilcashuamán",
    "Huánuco - Kotosh",
    "Cajamarca - Baños del Inca"
  ];

  useEffect(() => {
    // IntersectionObserver para animar al entrar en viewport
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("¡Inscripción enviada con éxito!");
  };

  return (
    <section
      id="formulario"
      ref={containerRef}
      className="py-20 bg-gray-50"
      aria-label="Formulario de inscripción"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ willChange: "transform, opacity" }}
        >
          {/* Header */}
          <div
            className={`p-8 text-center bg-gradient-to-r from-[#02288d] to-[#ff6201] transition-all duration-700 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Inscríbete y vive el cambio
            </h2>
            <p className="text-white/90">
              Completa el formulario y comienza tu aventura
            </p>
          </div>

          {/* Form body */}
          <div className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Each field row animates with slight delay for a stagger effect */}
              <div
                className={`field transition-all duration-600 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: visible ? "120ms" : "0ms" }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-all duration-200 shadow-sm focus:shadow-outline"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div
                className={`field transition-all duration-600 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: visible ? "160ms" : "0ms" }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-all duration-200 shadow-sm focus:shadow-outline"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div
                className={`field transition-all duration-600 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: visible ? "200ms" : "0ms" }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-all duration-200 shadow-sm focus:shadow-outline"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div
                className={`field transition-all duration-600 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: visible ? "240ms" : "0ms" }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Edad *
                </label>
                <input
                  type="number"
                  min="18"
                  max="65"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-all duration-200 shadow-sm focus:shadow-outline"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                />
              </div>

              <div
                className={`field transition-all duration-600 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: visible ? "280ms" : "0ms" }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destino preferido *
                </label>
                <select
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-all duration-200 shadow-sm focus:shadow-outline"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                >
                  <option value="">Selecciona un destino</option>
                  {destinations.map((dest, i) => (
                    <option key={i} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
              </div>

              <div
                className={`field transition-all duration-600 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: visible ? "320ms" : "0ms" }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha de inicio preferida *
                </label>
                <input
                  type="date"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-all duration-200 shadow-sm focus:shadow-outline"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
            </div>

            {/* Carta de motivación */}
            <div
              className={`transition-all duration-600 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: visible ? "360ms" : "0ms" }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Carta de motivación *
              </label>
              <textarea
                rows={4}
                placeholder="Cuéntanos por qué quieres ser parte de Ctrl + Alt + Perú..."
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-all duration-200 resize-none shadow-sm focus:shadow-outline"
                value={formData.motivation}
                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
              />
            </div>

            {/* Checkbox */}
            <div
              className={`flex items-start space-x-3 transition-all duration-600 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: visible ? "400ms" : "0ms" }}
            >
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 text-[#ff6201] rounded focus:ring-[#ff6201]"
              />
              <label className="text-sm text-gray-600">
                Acepto los términos y condiciones y autorizo el tratamiento de mis datos personales
                de acuerdo a la política de privacidad.
              </label>
            </div>

            {/* Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: visible ? "440ms" : "0ms" }}
            >
              <button
                onClick={handleSubmit}
                className="flex-1 bg-[#ff6201] text-white py-3 rounded-xl font-semibold hover:bg-[#e55500] transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-md"
              >
                <Send className="w-5 h-5" />
                <span>Enviar inscripción</span>
              </button>

              <button
                className="flex-1 bg-[#02288d] text-white py-3 rounded-xl font-semibold hover:bg-[#013370] transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-md"
              >
                <Shield className="w-5 h-5" />
                <span>Crear cuenta BCP</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Styles adicionales para foco y sombras */}
      <style jsx>{`
        .focus\\:shadow-outline:focus {
          box-shadow: 0 6px 18px rgba(2, 40, 141, 0.12);
        }

        /* mejora del contraste del input en focus */
        input:focus,
        textarea:focus,
        select:focus {
          outline: none;
        }

        /* sutil elevación del contenedor al aparecer */
        .shadow-2xl {
          --tw-shadow: 0 10px 30px rgba(2, 40, 141, 0.08);
        }
      `}</style>
    </section>
  );
};

export default HomeForm;
