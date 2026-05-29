import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import DocenteCard from '../../components/personas/DocenteCard';
import { docentes } from '../../constants/docentes';

export default function Docentes() {
  return (
    <div className="bg-light py-10 lg:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Plana Docente" 
          center 
          subtitle="Conoce a nuestros profesores, investigadores y especialistas comprometidos con la formación de calidad." 
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
          {docentes.map((docente, idx) => (
            <DocenteCard key={idx} docente={docente} />
          ))}
        </div>
      </div>
    </div>
  );
}