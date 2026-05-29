import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';
import { tramites } from '../../constants/academico';
import { GraduationCap, Award, Download, CheckCircle2 } from 'lucide-react';

export default function Titulacion() {
  return (
    <div className="bg-light py-10 lg:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Grados y Títulos" 
          center 
          subtitle="Información detallada sobre los requisitos y modalidades para obtener tu grado de bachiller y título profesional." 
        />
        
        {/* Trámites de Bachiller y Título */}
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {tramites.map((tramite, idx) => (
            <Card key={idx} className="p-8 flex flex-col h-full hover:border-secondary transition-colors shadow-sm">
              <div className="w-14 h-14 bg-[#F58220]/15 text-[#F58220] rounded-xl flex items-center justify-center mb-6">
                {idx === 0 ? <GraduationCap className="w-8 h-8" /> : <Award className="w-8 h-8" />}
              </div>
              <h3 className="text-2xl font-display font-bold text-pucp-blue-dark mb-3">{tramite.titulo}</h3>
              <p className="text-gray-600 font-body mb-6">{tramite.descripcion}</p>
              
              <div className="bg-white p-5 rounded-lg border border-gray-100 mb-8 flex-grow">
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F58220]" />
                  Requisitos Principales:
                </h4>
                <ul className="space-y-3">
                  {tramite.requisitos.map((req, ridx) => (
                    <li key={ridx} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-[#F58220] font-bold shrink-0 mt-0.5">•</span> 
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={tramite.pdfUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F58220] text-white font-bold rounded-lg hover:bg-[#E07010] transition-colors"
              >
                <Download className="w-5 h-5" />
                Descargar Requisitos
              </a>
            </Card>
          ))}
        </div>



      </div>
    </div>
  );
}