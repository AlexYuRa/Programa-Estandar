import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import { SectionTitle } from '../../components/ui/SectionTitle';
import ProyectoCard from '../../components/investigacion/ProyectoCard';
import { proyectos } from '../../constants/investigacion';

export default function Proyectos() {
  return (
    <PageWrapper>
      <div className="bg-white py-16 lg:py-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Proyectos de Investigación" center subtitle="Estudios e iniciativas en curso para mejorar la calidad y equidad educativa." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            {proyectos.map((proyecto, idx) => (
              <ProyectoCard key={idx} proyecto={proyecto} />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}