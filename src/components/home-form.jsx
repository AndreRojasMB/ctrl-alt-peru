import React, { useState } from 'react';
import { Send, Shield } from 'lucide-react';

const HomeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    destination: '',
    date: '',
    motivation: ''
  });

  const destinations = [
    'Cusco - Machu Picchu', 'Arequipa - Colca', 'Puno - Titicaca',
    'Amazonas - Kuelap', 'Loreto - Iquitos', 'Lima - Pachacamac',
    'Ayacucho - Vilcashuamán', 'Huánuco - Kotosh', 'Cajamarca - Baños del Inca'
  ];

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('¡Inscripción enviada con éxito!');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#02288d] to-[#ff6201] p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">
              Inscríbete y vive el cambio
            </h2>
            <p className="text-white/90">Completa el formulario y comienza tu aventura</p>
          </div>

          <div className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Edad *
                </label>
                <input
                  type="number"
                  min="18"
                  max="65"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-colors"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destino preferido *
                </label>
                <select
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-colors"
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                >
                  <option value="">Selecciona un destino</option>
                  {destinations.map((dest, i) => (
                    <option key={i} value={dest}>{dest}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha de inicio preferida *
                </label>
                <input
                  type="date"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-colors"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Carta de motivación *
              </label>
              <textarea
                rows={4}
                placeholder="Cuéntanos por qué quieres ser parte de Ctrl + Alt + Perú..."
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-colors resize-none"
                value={formData.motivation}
                onChange={(e) => setFormData({...formData, motivation: e.target.value})}
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 text-[#ff6201] rounded focus:ring-[#ff6201]"
              />
              <label className="text-sm text-gray-600">
                Acepto los términos y condiciones y autorizo el tratamiento de mis datos personales 
                de acuerdo a la política de privacidad.
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleSubmit}
                className="flex-1 bg-[#ff6201] text-white py-3 rounded-xl font-semibold hover:bg-[#e55500] transition-colors transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Enviar inscripción</span>
              </button>
              
              <button
                className="flex-1 bg-[#02288d] text-white py-3 rounded-xl font-semibold hover:bg-[#013370] transition-colors transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Shield className="w-5 h-5" />
                <span>Crear cuenta BCP</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeForm;