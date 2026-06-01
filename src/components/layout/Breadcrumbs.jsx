import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const routeMap = {
  '/nosotros': 'Sobre Nosotros',
  '/academico': 'Académico',
  '/autoridades': 'Autoridades',
  '/investigacion': 'Investigación',
  '/contacto': 'Contacto'
};

const hashMap = {
  '#mision-vision': 'Misión y Visión',
  '#historia': 'Historia',
  '#convenios-escuelas': 'Colegios Aliados',
  '#perfil-ingresante': 'Perfil',
  '#perfil-egresado': 'Perfil',
  '#plan-estudios': 'Plan de Estudios',
  '#titulacion': 'Grados y Títulos',
  '#direccion': 'Dirección',
  '#docentes': 'Docentes',
  '#organigrama': 'Organigrama',
  '#lineas': 'Líneas de Investigación',
  '#proyectos': 'Proyectos',
  '#publicaciones': 'Publicaciones',
  '#convenios': 'Convenios de Prácticas'
};

export default function Breadcrumbs() {
  const location = useLocation();
  const [currentHash, setCurrentHash] = useState(location.hash);

  useEffect(() => {
    if (location.hash) {
      setCurrentHash(location.hash);
    }

    const sectionIds = Object.keys(hashMap).map(key => key.replace('#', ''));
    
    const handleScroll = () => {
      const elements = sectionIds
        .map(id => document.getElementById(id))
        .filter(el => el !== null);
        
      if (elements.length === 0) return;

      let currentId = '';
      // Iteramos sobre los elementos, el último que cumpla la condición será el actual
      // (asumiendo que están en orden en el DOM o recorriéndolos)
      // Como elements está en orden del hashMap, idealmente el hashMap debería estar en orden.
      // Para ser seguros, los ordenamos por su posición absoluta en pantalla:
      elements.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);

      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        // Si el borde superior está por encima de la mitad de la pantalla
        if (rect.top <= 300) {
          currentId = `#${el.id}`;
        }
      }

      if (currentId) {
        setCurrentHash(currentId);
      } else if (window.scrollY < 100) {
        // Si estamos al tope de la página
        setCurrentHash('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Ejecutar una vez después de que cargue la página
    setTimeout(handleScroll, 150);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  if (location.pathname === '/') return null;

  const pathName = routeMap[location.pathname] || 
    (location.pathname.length > 1 
      ? location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2) 
      : '');
      
  const hashName = hashMap[currentHash];

  return (
    <div className="bg-pucp-blue-dark py-3 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex text-[13px] md:text-sm text-white/80 font-body" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center hover:text-white transition-colors">
                Inicio
              </Link>
            </li>
            
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-white/60 mx-1" />
                <Link to={location.pathname} className={`hover:text-white transition-colors ${!hashName ? 'text-white font-semibold' : ''}`}>
                  {pathName}
                </Link>
              </div>
            </li>

            {hashName && (
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-white/60 mx-1" />
                  <span className="text-white font-semibold">
                    {hashName}
                  </span>
                </div>
              </li>
            )}
          </ol>
        </nav>
      </div>
    </div>
  );
}
