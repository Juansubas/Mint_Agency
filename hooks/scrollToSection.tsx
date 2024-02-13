"use client"
import { useEffect } from 'react';

interface SmoothOptions {
    sectionId: string;
  }

  type SmoothScroll = () => void;

const useSmoothScroll = ({sectionId} : SmoothOptions) : SmoothScroll => {
  const scrollToSection = () => {
    if (sectionId) {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (sectionId && window.location.hash === "#" + `${sectionId}`) {
        scrollToSection();
      }
    };

    // Agrega un event listener para detectar cambios en el hash de la URL
    window.addEventListener('hashchange', handleHashChange);

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [sectionId]);

  return scrollToSection;
};

export default useSmoothScroll;
