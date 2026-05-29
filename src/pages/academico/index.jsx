import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import PerfilIngresante from './PerfilIngresante';
import PerfilEgresado from './PerfilEgresado';
import PlanEstudios from './PlanEstudios';
import Titulacion from './Titulacion';

export default function AcademicoIndex() {
  return (
    <PageWrapper>
      <div className="flex flex-col">
        {/* Cabecera general o espaciador opcional */}
        <div className="bg-pucp-blue-dark text-white py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight">Área Académica</h1>
          <p className="mt-4 text-white/80 font-body max-w-2xl mx-auto">Descubre todo lo relacionado con tu formación profesional en Educación Primaria.</p>
        </div>

        <div className="bg-light py-10 lg:py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <PerfilIngresante />
              <PerfilEgresado />
            </div>
          </div>
        </div>

        <section id="plan-estudios" className="scroll-mt-24">
          <PlanEstudios />
        </section>

        <section id="titulacion" className="scroll-mt-24">
          <Titulacion />
        </section>
      </div>
    </PageWrapper>
  );
}