import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import { SectionTitle } from '../../components/ui/SectionTitle';
import OrganigramaNode from '../../components/personas/OrganigramaNode';
import { organigrama } from '../../constants/autoridades';

export default function Organigrama() {
  return (
    <PageWrapper>
      <div className="bg-white py-16 lg:py-24 min-h-screen overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Organigrama Estructural" center subtitle="Estructura jerárquica y organizacional de la Escuela Profesional." />
          
          <div className="mt-16 overflow-x-auto pb-12 hide-scrollbar">
            <div className="min-w-[800px] flex justify-center py-4">
              <OrganigramaNode nodo={organigrama} />
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 italic mt-4 lg:hidden">Desliza horizontalmente para ver todo el organigrama</p>
        </div>
      </div>
    </PageWrapper>
  );
}