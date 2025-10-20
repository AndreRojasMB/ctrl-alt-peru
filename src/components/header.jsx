import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-2">
            <img
                src="/images/bcp.png"
                alt="Logo BCP"
                className="w-13 h-13 object-contain"
            />
            <img
                src="/images/ctrl.png"
                alt="Logo Ctrl+Alt+Perú"
                className="w-24 h-10 object-contain"
            />
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#243247] hover:text-[#ff6201] transition-colors font-medium">Inicio</a>
            <a href="#" className="text-[#243247] hover:text-[#ff6201] transition-colors font-medium">Programa</a>
            <a href="#" className="text-[#243247] hover:text-[#ff6201] transition-colors font-medium">Destinos</a>
            <a href="#" className="text-[#243247] hover:text-[#ff6201] transition-colors font-medium">Empresas</a>
            <button className="bg-[#ff6201] text-white px-6 py-2 rounded-full hover:bg-[#e55500] transition-all transform hover:scale-105 shadow-lg">
              Inscríbete
            </button>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="w-6 h-6 text-[#02288d]" /> : <Menu className="w-6 h-6 text-[#02288d]" />}
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;