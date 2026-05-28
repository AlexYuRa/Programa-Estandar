import React from 'react';
import { Link } from 'react-router-dom';
import { informacionContacto, redesSociales } from '../../constants/contacto';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mb-12">
          
          {/* Columna 1: Identidad */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-display font-bold text-2xl">
                EP
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold leading-tight text-xl">
                  Educación Primaria
                </span>
              </div>
            </div>
            <p className="text-gray-300 font-body text-sm leading-relaxed mb-6">
              Formando educadores de excelencia con vocación, liderazgo y compromiso social para el desarrollo del país.
            </p>
            <div className="flex items-center gap-4">
              {Object.entries(redesSociales).map(([red, url]) => (
                <a 
                  key={red} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label={`Visitar nuestro ${red}`}
                >
                  {/* Placeholder genérico para iconos */}
                  <span className="text-xs uppercase font-bold">{red.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-secondary">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><Link to="/nosotros/mision-vision" className="text-gray-300 hover:text-white transition-colors">Misión y Visión</Link></li>
              <li><Link to="/academico/plan-estudios" className="text-gray-300 hover:text-white transition-colors">Plan de Estudios</Link></li>
              <li><Link to="/autoridades/docentes" className="text-gray-300 hover:text-white transition-colors">Plana Docente</Link></li>
              <li><Link to="/investigacion/proyectos" className="text-gray-300 hover:text-white transition-colors">Proyectos de Investigación</Link></li>
              <li><Link to="/contacto" className="text-gray-300 hover:text-white transition-colors">Contacto y Ubicación</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-secondary">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-300 text-sm">
                <span className="font-bold">📍</span> {informacionContacto.direccion}
              </li>
              <li className="flex gap-3 text-gray-300 text-sm">
                <span className="font-bold">📞</span> {informacionContacto.telefonos.join(' / ')}
              </li>
              <li className="flex gap-3 text-gray-300 text-sm">
                <span className="font-bold">✉️</span> {informacionContacto.correo}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Escuela Profesional de Educación Primaria. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}