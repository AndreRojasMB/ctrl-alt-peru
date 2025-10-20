import React, { useState } from 'react';
import { X } from 'lucide-react';

const HomePopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    date: ''
  });

  const destinations = [
    'Cusco - Machu Picchu', 'Arequipa - Colca', 'Puno - Titicaca',
    'Amazonas - Kuelap', 'Loreto - Iquitos', 'Lima - Pachacamac'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl animate-fadeIn">
        <div className="bg-gradient-to-r from-[#02288d] to-[#ff6201] p-6 rounded-t-3xl">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-white">Inscríbete ahora</h3>
            <button onClick={onClose} className="text-white hover:bg-white/20 rounded-full p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-colors"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-colors"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          
          <input
            type="tel"
            placeholder="Teléfono"
            className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-colors"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          
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
          
          <input
            type="date"
            className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#ff6201] outline-none transition-colors"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
          />
          
          <button 
            onClick={() => alert('¡Inscripción enviada!')}
            className="w-full bg-[#ff6201] text-white py-3 rounded-xl font-semibold hover:bg-[#e55500] transition-colors transform hover:scale-105"
          >
            Crear cuenta BCP
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePopup;