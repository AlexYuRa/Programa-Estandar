import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToHash from '../components/ScrollToHash';

// Pages
import Inicio from '../pages/Inicio';
import NotFound from '../pages/NotFound';

// Módulo: Nosotros
import NosotrosIndex from '../pages/nosotros/index';

// Módulo: Académico
import AcademicoIndex from '../pages/academico/index';

// Módulo: Autoridades
import AutoridadesIndex from '../pages/autoridades/index';

// Módulo: Investigación
import InvestigacionIndex from '../pages/investigacion/index';

// Contacto
import Contacto from '../pages/Contacto';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* Inicio */}
            <Route path="/" element={<Inicio />} />

            {/* Módulo: Nosotros */}
            <Route path="/nosotros" element={<NosotrosIndex />} />

            {/* Módulo: Académico */}
            <Route path="/academico" element={<AcademicoIndex />} />

            {/* Módulo: Autoridades */}
            <Route path="/autoridades" element={<AutoridadesIndex />} />

            {/* Módulo: Investigación */}
            <Route path="/investigacion" element={<InvestigacionIndex />} />

            {/* Contacto */}
            <Route path="/contacto" element={<Contacto />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
