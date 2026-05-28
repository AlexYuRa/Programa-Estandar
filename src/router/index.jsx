import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Pages
import Inicio from '../pages/Inicio';
import NotFound from '../pages/NotFound';

// Módulo: Nosotros
import NosotrosIndex from '../pages/nosotros/index';
import MisionVision from '../pages/nosotros/MisionVision';
import Historia from '../pages/nosotros/Historia';

// Módulo: Académico
import AcademicoIndex from '../pages/academico/index';
import PerfilEgresado from '../pages/academico/PerfilEgresado';
import PlanEstudios from '../pages/academico/PlanEstudios';
import Titulacion from '../pages/academico/Titulacion';

// Módulo: Autoridades
import AutoridadesIndex from '../pages/autoridades/index';
import Direccion from '../pages/autoridades/Direccion';
import Docentes from '../pages/autoridades/Docentes';
import Organigrama from '../pages/autoridades/Organigrama';

// Módulo: Investigación
import InvestigacionIndex from '../pages/investigacion/index';
import Lineas from '../pages/investigacion/Lineas';
import Proyectos from '../pages/investigacion/Proyectos';
import Publicaciones from '../pages/investigacion/Publicaciones';
import Convenios from '../pages/investigacion/convenios';

// Contacto
import Contacto from '../pages/Contacto';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* Inicio */}
            <Route path="/" element={<Inicio />} />

            {/* Módulo: Nosotros */}
            <Route path="/nosotros" element={<NosotrosIndex />} />
            <Route path="/nosotros/mision-vision" element={<MisionVision />} />
            <Route path="/nosotros/historia" element={<Historia />} />

            {/* Módulo: Académico */}
            <Route path="/academico" element={<AcademicoIndex />} />
            <Route path="/academico/perfil-egresado" element={<PerfilEgresado />} />
            <Route path="/academico/plan-estudios" element={<PlanEstudios />} />
            <Route path="/academico/titulacion" element={<Titulacion />} />

            {/* Módulo: Autoridades */}
            <Route path="/autoridades" element={<AutoridadesIndex />} />
            <Route path="/autoridades/direccion" element={<Direccion />} />
            <Route path="/autoridades/docentes" element={<Docentes />} />
            <Route path="/autoridades/organigrama" element={<Organigrama />} />

            {/* Módulo: Investigación */}
            <Route path="/investigacion" element={<InvestigacionIndex />} />
            <Route path="/investigacion/lineas" element={<Lineas />} />
            <Route path="/investigacion/proyectos" element={<Proyectos />} />
            <Route path="/investigacion/publicaciones" element={<Publicaciones />} />
            <Route path="/investigacion/convenios" element={<Convenios />} />

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
