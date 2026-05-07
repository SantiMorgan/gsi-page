import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/img/Logo-st.jpg"
                alt="SafeTrack Logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-xl font-bold text-background tracking-tight">
                SafeTrack
              </span>
            </div>
            <p className="text-sm leading-relaxed text-background/60">
              Plataforma integral de gestión de flota para el sector público y privado.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-background mb-4 uppercase tracking-wider">Navegación</h4>
            <div className="space-y-3">
              {[
                { label: 'Inicio', path: '/' },
                { label: 'Resultados', path: '/resultados' },
                { label: 'Propuesta', path: '/propuesta' },
                { label: 'FAQ', path: '/faq' },
              ].map(link => (
                <Link key={link.path} to={link.path} className="block text-sm text-background/60 hover:text-background transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-background mb-4 uppercase tracking-wider">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-background/60">
                <Mail className="w-4 h-4 shrink-0" />
                <span>santiagomorganri01@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/60">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+54 11 4081-5363</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/60">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-background mb-4 uppercase tracking-wider">Legal</h4>
            <div className="space-y-3">
              <Link to="/terminos" className="block text-sm text-background/60 hover:text-background transition-colors">Términos y Condiciones</Link>
              <Link to="/privacidad" className="block text-sm text-background/60 hover:text-background transition-colors">Política de Privacidad</Link>
              <Link to="/seguridad" className="block text-sm text-background/60 hover:text-background transition-colors">Seguridad de Datos</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} SafeTrack. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}