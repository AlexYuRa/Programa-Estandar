import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import Direccion from './Direccion';
import Docentes from './Docentes';
import Organigrama from './Organigrama';

export default function AutoridadesIndex() {
  return (
    <PageWrapper>
      <div className="flex flex-col">
        {/* Cabecera */}
        <div className="bg-pucp-blue-dark text-white py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight">Autoridades y Docentes</h1>
          <p className="mt-4 text-white/80 font-body max-w-2xl mx-auto">Conoce a los profesionales encargados de liderar la educación y la enseñanza.</p>
        </div>

        <section id="direccion" className="scroll-mt-24">
          <Direccion />
        </section>

        <section id="docentes" className="scroll-mt-24">
          <Docentes />
        </section>

        <section id="organigrama" className="scroll-mt-24">
          <Organigrama />
        </section>
      </div>
    </PageWrapper>
  );
}