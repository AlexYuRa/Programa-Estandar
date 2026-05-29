import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import ProyectoCard from '../../components/investigacion/ProyectoCard';
import { proyectos } from '../../constants/investigacion';

export default function Proyectos() {
  return (
    <div className="bg-white py-10 lg:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Proyectos de Investigación" center subtitle="Estudios e iniciativas en curso para mejorar la calidad y equidad educativa." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {proyectos.map((proyecto, idx) => (
            <ProyectoCard key={idx} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </div>
  );
}