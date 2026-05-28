import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export function Tabs({ tabs, activeTab, onChange, className }) {
  return (
    <div className={clsx('w-full', className)}>
      <div className="flex overflow-x-auto hide-scrollbar border-b border-gray-200 gap-2 mb-6">
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={tab.id || index}
              onClick={() => onChange(index)}
              className={clsx(
                'relative px-4 py-3 text-sm font-semibold whitespace-nowrap transition-colors outline-none',
                isActive ? 'text-primary' : 'text-gray-500 hover:text-gray-700'
              )}
            >
              {tab.label}
              
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-secondary rounded-t-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
      <div className="tab-content">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
}