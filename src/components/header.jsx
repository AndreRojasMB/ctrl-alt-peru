import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('formulario');
    const header = document.querySelector('header');

    if (formSection) {
      const headerHeight = header ? header.offsetHeight : 100;

      // 🔹 Ajusta el valor de "extraOffset" para que el scroll quede justo donde quieres (más arriba o abajo)
      const extraOffset = 10; // puedes probar con 60, 100, 150 según tu diseño

      const y =
        formSection.getBoundingClientRect().top +
        window.pageYOffset -
        (headerHeight + extraOffset);

      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      console.warn('⚠️ No se encontró el formulario');
    }

    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* 🔹 Logos */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/bcp.png"
              alt="Logo BCP"
              className="w-16 h-16 object-contain"
            />
            <img
              src="/images/ctrl.png"
              alt="Logo Ctrl+Alt+Perú"
              className="w-36 h-18 object-contain"
            />
          </div>

          {/* 🔹 Navegación desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/#inicio"
              className="text-[#243247] hover:text-[#ff6201] transition-colors font-medium"
            >
              Inicio
            </a>
            <a
              href="/#programa"
              className="text-[#243247] hover:text-[#ff6201] transition-colors font-medium"
            >
              Programa
            </a>
            <a
              href="/#destinos"
              className="text-[#243247] hover:text-[#ff6201] transition-colors font-medium"
            >
              Destinos
            </a>
            <a
              href="/#empresas"
              className="text-[#243247] hover:text-[#ff6201] transition-colors font-medium"
            >
              Empresas
            </a>

            {/* 🔸 Botón de Inscripción */}
            <button
              onClick={scrollToForm}
              className="bg-[#ff6201] text-white px-6 py-2 rounded-full hover:bg-[#e55500] transition-all transform hover:scale-105 shadow-lg"
            >
              Inscríbete
            </button>
          </nav>

          {/* 🔹 Botón de menú móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#02288d]" />
            ) : (
              <Menu className="w-6 h-6 text-[#02288d]" />
            )}
          </button>
        </div>
      </div>

      {/* 🔹 Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a
              href="/#inicio"
              className="text-[#243247] hover:text-[#ff6201] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </a>
            <a
              href="/#programa"
              className="text-[#243247] hover:text-[#ff6201] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Programa
            </a>
            <a
              href="/#destinos"
              className="text-[#243247] hover:text-[#ff6201] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Destinos
            </a>
            <a
              href="/#empresas"
              className="text-[#243247] hover:text-[#ff6201] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Empresas
            </a>
            <button
              onClick={scrollToForm}
              className="bg-[#ff6201] text-white px-6 py-2 rounded-full hover:bg-[#e55500] transition-all transform hover:scale-105 shadow-lg"
            >
              Inscríbete
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
