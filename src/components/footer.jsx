import React from 'react';
import { Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-[#02288d] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-5 mb-4">
              <div className="bg-[#ff6201] p-2 rounded-lg">
                <img src="/images/ctrl.png" alt="Ctrl+Alt+Perú" className="w-6 h-6 object-contain" />
              </div>
              <span className="text-white font-bold text-xl">Ctrl+Alt+Perú</span>
            </div>
            <p className="text-white/80 text-sm">
              Reiniciando el Perú con empatía, responsabilidad y acción social.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Programa</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#integracion" className="text-white/80 hover:text-[#ff6201] text-sm transition-colors">
                  Integración Social
                </a>
              </li>
              <li>
                <a href="/#destinos" className="text-white/80 hover:text-[#ff6201] text-sm transition-colors">
                  Destinos
                </a>
              </li>
              <li>
                <a href="/#calendario" className="text-white/80 hover:text-[#ff6201] text-sm transition-colors">
                  Calendario
                </a>
              </li>
              <li>
                <a href="/#testimonios" className="text-white/80 hover:text-[#ff6201] text-sm transition-colors">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresas</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#rse" className="text-white/80 hover:text-[#ff6201] text-sm transition-colors">
                  RSE Corporativo
                </a>
              </li>
              <li>
                <a href="/#alianzas" className="text-white/80 hover:text-[#ff6201] text-sm transition-colors">
                  Alianzas
                </a>
              </li>
              <li>
                <a href="/#beneficios" className="text-white/80 hover:text-[#ff6201] text-sm transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="/#casos" className="text-white/80 hover:text-[#ff6201] text-sm transition-colors">
                  Casos de éxito
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-white/80 text-sm">
                <Phone className="w-4 h-4" />
                <span>+51 1 234 5678</span>
              </li>
              <li className="flex items-center space-x-2 text-white/80 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@ctrlaltperu.pe</span>
              </li>
            </ul>
            
            <div className="flex space-x-3 mt-6">
              <a href="https://facebook.com/ctrlaltperu" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-[#ff6201] transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://instagram.com/ctrlaltperu" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-[#ff6201] transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://twitter.com/ctrlaltperu" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-[#ff6201] transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="https://linkedin.com/company/ctrlaltperu" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-[#ff6201] transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://youtube.com/ctrlaltperu" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-[#ff6201] transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Ctrl + Alt + Perú. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="/terminos" className="text-white/60 hover:text-[#ff6201] text-sm transition-colors">
                Términos y condiciones
              </a>
              <a href="/privacidad" className="text-white/60 hover:text-[#ff6201] text-sm transition-colors">
                Política de privacidad
              </a>
              <a href="/cookies" className="text-white/60 hover:text-[#ff6201] text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
