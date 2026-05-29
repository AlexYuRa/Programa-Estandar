import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';

const colegios = [
  {
    nombre: "I.E. San Juan",
    descripcion: "Convenio de prácticas pre-profesionales que permite a nuestros estudiantes aplicar metodologías innovadoras en aulas de educación primaria.",
  },
  {
    nombre: "I.E. Modelo",
    descripcion: "Alianza estratégica para el desarrollo de proyectos de investigación conjunta y mejora de la calidad educativa local.",
  },
  {
    nombre: "I.E. Santa Rosa",
    descripcion: "Acuerdo de cooperación mutua para la implementación de talleres extracurriculares y apoyo psicopedagógico a estudiantes.",
  }
];

export default function ConveniosEscuelas() {
  return (
    <div className="bg-light py-10 lg:py-8 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Convenios de Prácticas" 
          center 
          subtitle="Red de colegios e instituciones aliadas donde nuestros estudiantes desarrollan sus prácticas pre-profesionales." 
        />
        
        <div className="mt-12 max-w-5xl mx-auto space-y-12">
          {colegios.map((colegio, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-8 items-center bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Imagen a un costado (Placeholder) */}
              <div className="w-full md:w-1/2 aspect-video bg-gray-100 rounded-xl flex flex-col items-center justify-center text-gray-500 border-2 border-dashed border-gray-300">
                <svg className="w-12 h-12 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L28 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <span className="text-sm font-medium">Foto del Frontis de la Escuela</span>
              </div>

              {/* Contenido */}
              <div className="w-full md:w-1/2">
                <div className="inline-block px-3 py-1 bg-[#D4A017]/10 text-[#D4A017] rounded-full text-xs font-bold tracking-wide uppercase mb-4">
                  Convenio Activo
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-pucp-blue-dark mb-4">
                  {colegio.nombre}
                </h3>
                <p className="text-gray-600 font-body leading-relaxed text-lg">
                  {colegio.descripcion}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
