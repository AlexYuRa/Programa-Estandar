import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export default function ProyectoCard({ proyecto }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="h-full">
      <Card className="h-full p-6 flex flex-col hover:border-secondary transition-colors">
        <div className="flex justify-between items-start mb-4">
          <Badge variant={proyecto.estado === 'En ejecución' ? 'success' : 'gray'}>
            {proyecto.estado}
          </Badge>
          <span className="text-sm font-bold text-gray-500">{proyecto.año}</span>
        </div>
        <h3 className="text-xl font-display font-bold text-primary mb-3">{proyecto.titulo}</h3>
        <p className="text-gray-600 font-body text-sm mb-6 flex-grow">{proyecto.descripcion}</p>
        
        <div className="border-t border-gray-100 pt-4 mt-auto">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Investigadores:</h4>
          <ul className="text-sm text-gray-700 font-medium space-y-1">
            {proyecto.investigadores.map((inv, idx) => (
              <li key={idx}>• {inv}</li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  );
}