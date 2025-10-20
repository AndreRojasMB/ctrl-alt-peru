import React from 'react';
import { 
  Zap, Phone, Mail, 
  Facebook, Instagram, Twitter, Linkedin, Youtube 
} from 'lucide-react';

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-[#02288d] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-5 mb-4">
            <div className>
            <img
                src="/images/bcp.png"        // 🔹 Mismo logo o puedes usar otro (por ejemplo /logo-blanco.png)
                alt="Logo Ctrl+Alt+Perú"
                className="w-13 h-13 object-contain"
            />
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
              <li><a href="#" className="text-white/80 hover:text-[#ff6201] text-sm transition-colors">Integracion Social</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#ff6201] text-sm transition-colors">Destinos</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#ff6201] text-sm transition-colors">Calendario</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#ff6201] text-sm transition-colors">Testimonios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresas</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-[#ff6201] text-sm transition-colors">RSE Corporativo</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#ff6201] text-sm transition-colors">Alianzas</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#ff6201] text-sm transition-colors">Beneficios</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#ff6201] text-sm transition-colors">Casos de éxito</a></li>
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
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-[#ff6201] transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-[#ff6201] transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-[#ff6201] transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-[#ff6201] transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-[#ff6201] transition-colors">
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
              <a href="#" className="text-white/60 hover:text-[#ff6201] text-sm transition-colors">
                Términos y condiciones
              </a>
              <a href="#" className="text-white/60 hover:text-[#ff6201] text-sm transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-white/60 hover:text-[#ff6201] text-sm transition-colors">
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