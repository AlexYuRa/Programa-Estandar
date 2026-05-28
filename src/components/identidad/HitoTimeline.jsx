import React from 'react';
import { motion } from 'framer-motion';

/**
 * Componente de línea de tiempo para mostrar hitos históricos
 */
export default function HitoTimeline({ hitos }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>
      
      <motion.div 
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {hitos?.map((hito, index) => (
          <motion.div key={index} variants={itemVariants} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className="w-1/2"></div>
            <div className="w-1/2 px-4">
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-primary">
                <h4 className="font-bold text-primary">{hito.año}</h4>
                <p className="text-gray-700 text-sm">{hito.descripcion}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
