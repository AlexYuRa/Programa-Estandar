import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import MisionVision from './MisionVision';
import ConveniosEscuelas from './ConveniosEscuelas';
import Historia from './Historia';

export default function NosotrosIndex() {
  return (
    <PageWrapper>
      <div className="flex flex-col">
        {/* Cabecera */}
        <div className="bg-pucp-blue-dark text-white py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight">Sobre Nosotros</h1>
          <p className="mt-4 text-white/80 font-body max-w-2xl mx-auto">Conoce la identidad, valores e historia de la Escuela de Educación Primaria.</p>
        </div>

        <section id="mision-vision" className="scroll-mt-24">
          <MisionVision />
        </section>

        <section id="historia" className="scroll-mt-24">
          <Historia />
        </section>

        <section id="convenios-escuelas" className="scroll-mt-24">
          <ConveniosEscuelas />
        </section>
      </div>
    </PageWrapper>
  );
}