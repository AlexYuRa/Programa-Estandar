import React from 'react';
import { AnimatePresence } from 'framer-motion';
import AppRouter from './router/index';

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <AppRouter />
    </AnimatePresence>
  );
}