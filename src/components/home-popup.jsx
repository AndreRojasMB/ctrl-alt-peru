import React, { useState, useEffect } from 'react';
import { X, Send, Shield, User, Mail, Phone, MapPin, Calendar, FileText } from 'lucide-react';

/**
 * @typedef {Object} HomePopupProps
 * @property {boolean} isOpen
 * @property {() => void} onClose
 */

const HomePopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    destination: '',
    date: '',
    motivation: '',
    acceptTerms: false
  });

  const [animate, setAnimate] = useState(false);

  const destinations = [
    'Cusco - Machu Picchu',
    'Arequipa - Colca',
    'Puno - Titicaca',
    'Amazonas - Kuelap',
    'Loreto - Iquitos',
    'Lima - Pachacamac',
    'Ayacucho - Vilcashuamán',
    'Huánuco - Kotosh',
    'Cajamarca - Baños del Inca'
  ];

  useEffect(() => {
    if (isOpen) {
      // Pequeño delay para que la animación se vea suave
      setTimeout(() => setAnimate(true), 50);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('¡Inscripción enviada con éxito!');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className={`bg-white rounded-3xl max-w-4xl w-full shadow-2xl transition-all duration-500 max-h-[90vh] overflow-y-auto ${
          animate ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Header con gradiente */}
        <div className="bg-gradient-to-r from-[#02288d] to-[#ff6201] p-8 rounded-t-3xl relative">
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200 hover:rotate-90"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-2">
              Inscríbete y vive el cambio
            </h3>
            <p className="text-white/90 text-lg">
              Completa el formulario y comienza tu aventura
            </p>
          </div>
        </div>

        {/* Form body */}
        <div className="p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Nombre completo */}
            <div 
              className={`transition-all duration-500 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 text-[#ff6201]" />
                <span>Nombre completo *</span>
              </label>
              <input
                type="text"
                placeholder="Ingresa tu nombre completo"
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-all duration-200 shadow-sm focus:shadow-lg hover:border-gray-300"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Email */}
            <div 
              className={`transition-all duration-500 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 text-[#ff6201]" />
                <span>Correo electrónico *</span>
              </label>
              <input
                type="email"
                placeholder="tu@correo.com"
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-all duration-200 shadow-sm focus:shadow-lg hover:border-gray-300"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Teléfono */}
            <div 
              className={`transition-all duration-500 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 text-[#ff6201]" />
                <span>Teléfono *</span>
              </label>
              <input
                type="tel"
                placeholder="+51 999 999 999"
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-all duration-200 shadow-sm focus:shadow-lg hover:border-gray-300"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            {/* Edad */}
            <div 
              className={`transition-all duration-500 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 text-[#ff6201]" />
                <span>Edad *</span>
              </label>
              <input
                type="number"
                min="18"
                max="65"
                placeholder="18"
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-all duration-200 shadow-sm focus:shadow-lg hover:border-gray-300"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              />
            </div>

            {/* Destino */}
            <div 
              className={`transition-all duration-500 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 text-[#ff6201]" />
                <span>Destino preferido *</span>
              </label>
              <select
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-all duration-200 shadow-sm focus:shadow-lg hover:border-gray-300 bg-white"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              >
                <option value="">Selecciona un destino</option>
                {destinations.map((dest, i) => (
                  <option key={i} value={dest}>{dest}</option>
                ))}
              </select>
            </div>

            {/* Fecha */}
            <div 
              className={`transition-all duration-500 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 text-[#ff6201]" />
                <span>Fecha de inicio preferida *</span>
              </label>
              <input
                type="date"
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-all duration-200 shadow-sm focus:shadow-lg hover:border-gray-300"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
          </div>

          {/* Carta de motivación */}
          <div 
            className={`transition-all duration-500 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <FileText className="w-4 h-4 text-[#ff6201]" />
              <span>Carta de motivación *</span>
            </label>
            <textarea
              rows={4}
              placeholder="Cuéntanos por qué quieres ser parte de Ctrl + Alt + Perú..."
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-all duration-200 resize-none shadow-sm focus:shadow-lg hover:border-gray-300"
              value={formData.motivation}
              onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
            />
          </div>

          {/* Checkbox de términos */}
          <div 
            className={`flex items-start space-x-3 transition-all duration-500 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <input
              type="checkbox"
              id="terms"
              checked={formData.acceptTerms}
              onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
              className="mt-1 w-4 h-4 text-[#ff6201] rounded focus:ring-[#ff6201] cursor-pointer"
            />
            <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
              Acepto los términos y condiciones y autorizo el tratamiento de mis datos personales
              de acuerdo a la política de privacidad.
            </label>
          </div>

          {/* Botones */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-500 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <button
              onClick={handleSubmit}
              className="flex-1 bg-[#ff6201] text-white py-3.5 rounded-xl font-semibold hover:bg-[#e55500] transition-all duration-200 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 shadow-lg active:scale-95"
            >
              <Send className="w-5 h-5" />
              <span>Enviar inscripción</span>
            </button>

            <button
              className="flex-1 bg-[#02288d] text-white py-3.5 rounded-xl font-semibold hover:bg-[#013370] transition-all duration-200 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 shadow-lg active:scale-95"
            >
              <Shield className="w-5 h-5" />
              <span>Crear cuenta BCP</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        /* Mejora del scroll en el modal */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #ff6201;
          border-radius: 10px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #e55500;
        }

        /* Sombra elegante al hacer focus */
        input:focus,
        textarea:focus,
        select:focus {
          box-shadow: 0 8px 24px rgba(255, 98, 1, 0.15);
        }
      `}</style>
    </div>
  );
};

export default HomePopup;