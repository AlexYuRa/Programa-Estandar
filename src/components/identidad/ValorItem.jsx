import React from 'react';
import { motion } from 'framer-motion';

export default function ValorItem({ valor, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <h4 className="text-xl font-display font-bold text-secondary mb-2">
        {valor.nombre}
      </h4>
      <p className="text-gray-600 font-body text-sm leading-relaxed">{valor.descripcion}</p>
    </motion.div>
  );
}