import React from 'react';
import { motion } from 'framer-motion';

export default function OrganigramaNode({ nodo, level = 0 }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: level * 0.15 }}
        className={`p-4 rounded-lg shadow-sm border text-center min-w-[220px] max-w-[280px] z-10 bg-white
          ${level === 0 ? 'border-secondary border-2 shadow-md' : 'border-gray-200 hover:border-primary/50 transition-colors'}`}
      >
        <h4 className="font-display font-bold text-primary leading-tight">{nodo.nombre}</h4>
        {nodo.cargo && <p className="text-xs text-gray-500 mt-2 font-semibold uppercase tracking-wide">{nodo.cargo}</p>}
      </motion.div>
      
      {nodo.hijos && nodo.hijos.length > 0 && (
        <>
          <div className="w-px h-8 bg-gray-300"></div>
          <div className="border-t-2 border-gray-300 flex justify-center pt-8 relative mt-[-2px] gap-4">
            {nodo.hijos.map((hijo, idx) => (
              <div key={idx} className="flex flex-col items-center relative px-2">
                <div className="absolute top-[-34px] w-px h-8 bg-gray-300"></div>
                <OrganigramaNode nodo={hijo} level={level + 1} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}