import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import { SectionTitle } from '../../components/ui/SectionTitle';
import CompetenciaItem from '../../components/academico/CompetenciaItem';
import { perfilEgresado, gradoAcademico, tituloProfesional } from '../../constants/academico';

export default function PerfilEgresado() {
  return (
    <PageWrapper>
      <div className="bg-light py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Perfil del Egresado" 
            center 
            subtitle="Nuestros estudiantes desarrollan competencias integrales para liderar el cambio educativo y pedagógico." 
          />
          
          <div className="max-w-4xl mx-auto mt-12 grid gap-6">
            {perfilEgresado.map((comp, idx) => (
              <CompetenciaItem key={idx} competencia={comp} index={idx} />
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary text-white p-8 rounded-xl text-center shadow-lg">
              <h3 className="text-secondary font-bold mb-2 uppercase text-sm tracking-wider">Grado Académico</h3>
              <p className="text-2xl font-display font-bold">{gradoAcademico}</p>
            </div>
            <div className="bg-secondary text-white p-8 rounded-xl text-center shadow-lg">
              <h3 className="text-primary font-bold mb-2 uppercase text-sm tracking-wider">Título Profesional</h3>
              <p className="text-2xl font-display font-bold">{tituloProfesional}</p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}