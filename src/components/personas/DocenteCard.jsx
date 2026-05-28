import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

export default function DocenteCard({ docente }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }} 
      transition={{ duration: 0.2 }} 
      className="h-full"
    >
      <Card className="h-full p-6 text-center flex flex-col items-center hover:border-secondary transition-colors">
        <div className="w-24 h-24 bg-gray-100 rounded-full mb-4 overflow-hidden flex items-center justify-center text-gray-400 font-display font-bold text-2xl">
          {docente.foto ? <img src={docente.foto} alt={docente.nombre} className="w-full h-full object-cover"/> : docente.nombre.charAt(0)}
        </div>
        <h4 className="font-display font-bold text-lg text-primary leading-tight mb-1">{docente.nombre}</h4>
        <p className="text-secondary font-bold text-xs uppercase tracking-wider mb-2">{docente.grado}</p>
        <p className="text-gray-600 font-body text-sm mb-4 flex-grow">{docente.especialidad}</p>
        <a href={`mailto:${docente.correo}`} className="text-primary hover:text-secondary text-sm font-semibold mt-auto transition-colors">
          ✉️ {docente.correo}
        </a>
      </Card>
    </motion.div>
  );
}