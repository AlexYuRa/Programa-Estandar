import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import { SectionTitle } from '../../components/ui/SectionTitle';
import AutoridadCard from '../../components/personas/AutoridadCard';
import { director, coordinadores } from '../../constants/autoridades';

export default function Direccion() {
  return (
    <PageWrapper>
      <div className="bg-white py-16 lg:py-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Órganos de Dirección" center subtitle="Autoridades encargadas de la gestión académica y administrativa de nuestra escuela." />
          
          <div className="max-w-3xl mx-auto mt-12 mb-20">
            <AutoridadCard autoridad={director} principal={true} />
          </div>

          <h3 className="text-2xl font-display font-bold text-center text-primary mb-10">Coordinaciones</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coordinadores.map((coord, idx) => (
              <AutoridadCard key={idx} autoridad={coord} />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}