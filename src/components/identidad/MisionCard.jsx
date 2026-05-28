import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

/**
 * Componente para mostrar Misión, Visión o Valores
 * Reutilizable en MisionVision.jsx
 */
export default function MisionCard({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col items-center text-center p-6">
        {icon && <div className="mb-4 text-4xl">{icon}</div>}
        <h3 className="text-xl font-bold mb-3 text-primary font-display">{title}</h3>
        <p className="text-gray-600 font-body">{description}</p>
      </Card>
    </motion.div>
  );
}
