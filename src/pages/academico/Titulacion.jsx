import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';
import { titulacion } from '../../constants/academico';

export default function Titulacion() {
  return (
    <PageWrapper>
      <div className="bg-light py-16 lg:py-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Modalidades de Titulación" 
            center 
            subtitle="Opciones disponibles para obtener el Título Profesional una vez egresado." 
          />
          
          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {titulacion.map((mod, idx) => (
              <Card key={idx} className="p-8 flex flex-col h-full hover:border-secondary transition-colors">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-2xl mb-6">
                  🎓
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">{mod.modalidad}</h3>
                <p className="text-gray-600 font-body mb-8 flex-grow leading-relaxed">{mod.descripcion}</p>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 mt-auto">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Requisitos Mínimos:</h4>
                  <ul className="space-y-3">
                    {mod.requisitos.map((req, ridx) => (
                      <li key={ridx} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="text-secondary font-bold shrink-0">✓</span> <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}