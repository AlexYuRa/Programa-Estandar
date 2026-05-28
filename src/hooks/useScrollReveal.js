import { useEffect, useRef } from 'react';

/**
 * Hook para animar elementos cuando entran en el viewport
 * Usa Intersection Observer
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  };

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, defaultOptions);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return ref;
}
