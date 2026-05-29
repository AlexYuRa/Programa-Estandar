import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export function SectionTitle({ title, subtitle, center = false, className }) {
  return (
    <div className={clsx('mb-10', center && 'text-center flex flex-col items-center', className)}>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">
        {title}
      </h2>
      
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '80px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={clsx("h-1 bg-[#F58220] rounded-full", center ? "mx-auto" : "")}
      />

      {subtitle && (
        <p className="mt-4 text-gray-600 font-body text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}