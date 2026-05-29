import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';
import { lineasInvestigacion } from '../../constants/investigacion';

export default function Lineas() {
  return (
    <div className="bg-light py-10 lg:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Líneas de Investigación" center subtitle="Nuestras áreas prioritarias para la generación de conocimiento e innovación educativa." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {lineasInvestigacion.map((linea, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <Card className="h-full p-8 border-t-4 border-t-primary hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-xl font-display font-bold text-primary mb-4">{linea.nombre}</h3>
                <p className="text-gray-600 font-body text-sm mb-8 flex-grow">{linea.descripcion}</p>
                <div className="mt-auto bg-gray-50 p-4 rounded-lg">
                  <span className="block text-xs font-bold text-gray-500 uppercase mb-1">Responsable de línea</span>
                  <span className="text-sm font-semibold text-secondary">{linea.responsable}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}