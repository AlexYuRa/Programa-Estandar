import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import Lineas from './Lineas';
import Proyectos from './Proyectos';
import Publicaciones from './Publicaciones';
import Convenios from './convenios';

export default function InvestigacionIndex() {
  return (
    <PageWrapper>
      <div className="flex flex-col">
        {/* Cabecera */}
        <div className="bg-pucp-blue-dark text-white py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight">Investigación</h1>
          <p className="mt-4 text-white/80 font-body max-w-2xl mx-auto">Nuestros aportes al conocimiento pedagógico y científico.</p>
        </div>

        <section id="lineas" className="scroll-mt-24">
          <Lineas />
        </section>

        <section id="proyectos" className="scroll-mt-24">
          <Proyectos />
        </section>

        <section id="publicaciones" className="scroll-mt-24">
          <Publicaciones />
        </section>

        <section id="convenios" className="scroll-mt-24">
          <Convenios />
        </section>
      </div>
    </PageWrapper>
  );
}