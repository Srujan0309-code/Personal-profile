import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds, options = { rootMargin: '-30% 0px -60% 0px' }) {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observers = [];
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, options]);

  return activeSection;
}
