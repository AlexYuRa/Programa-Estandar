import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const NAV_LINKS = [
  { name: 'Inicio', path: '/' },
  { 
    name: 'Nosotros', 
    path: '/nosotros',
    sublinks: [
      { name: 'Misión y Visión', path: '/nosotros/mision-vision' },
      { name: 'Historia', path: '/nosotros/historia' }
    ]
  },
  { 
    name: 'Académico', 
    path: '/academico',
    sublinks: [
      { name: 'Perfil del Egresado', path: '/academico/perfil-egresado' },
      { name: 'Plan de Estudios', path: '/academico/plan-estudios' },
      { name: 'Titulación', path: '/academico/titulacion' }
    ]
  },
  { 
    name: 'Autoridades', 
    path: '/autoridades',
    sublinks: [
      { name: 'Dirección', path: '/autoridades/direccion' },
      { name: 'Docentes', path: '/autoridades/docentes' },
      { name: 'Organigrama', path: '/autoridades/organigrama' }
    ]
  },
  { 
    name: 'Investigación', 
    path: '/investigacion',
    sublinks: [
      { name: 'Líneas', path: '/investigacion/lineas' },
      { name: 'Proyectos', path: '/investigacion/proyectos' },
      { name: 'Publicaciones', path: '/investigacion/publicaciones' },
      { name: 'Convenios', path: '/investigacion/convenios' }
    ]
  },
  { name: 'Contacto', path: '/contacto' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={clsx(
        'sticky top-0 z-50 w-full transition-all duration-300 border-b border-gray-100',
        scrolled ? 'bg-white shadow-sm py-3' : 'bg-white py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo / Marca */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-pucp-blue-dark rounded-md flex items-center justify-center text-white font-display font-bold text-xl transition-colors group-hover:bg-pucp-blue-light">
              EP
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-pucp-blue-dark tracking-tight leading-tight text-lg md:text-xl">
                Educación Primaria
              </span>
              <span className="text-xs text-pucp-gray-dark font-body hidden sm:block uppercase tracking-wider font-semibold mt-0.5">
                Universidad Nacional
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group px-3 py-2">
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => clsx(
                  'font-body font-medium text-[15px] transition-colors',
                  isActive ? 'text-pucp-blue-light' : 'text-pucp-gray-dark hover:text-pucp-blue-light'
                  )}
                >
                  {link.name}
                </NavLink>
                
                {/* Dropdown */}
                {link.sublinks && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-primary transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-primary p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) => clsx(
                      'font-bold py-2 border-b border-gray-50',
                      isActive ? 'text-secondary' : 'text-primary'
                    )}
                  >
                    {link.name}
                  </NavLink>
                  {link.sublinks && (
                    <div className="pl-4 flex flex-col mt-2 gap-2 border-l-2 border-accent">
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.path}
                          className="text-sm text-gray-600 hover:text-primary py-1"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}