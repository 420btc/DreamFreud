'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Componente de carga
const Loader = () => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

// Importación dinámica del componente AIMessageBar
const AIMessageBar = dynamic(
  () => import('./AIMessageBar').then((mod) => mod.AIMessageBar),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

// Componente contenedor que maneja el estado de montaje
export default function AIMessageBarWrapper() {
  const [isMounted, setIsMounted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Efecto para manejar el montaje y prevenir scroll no deseado
  useEffect(() => {
    // Guardar la posición de scroll actual
    const scrollY = window.scrollY;
    
    // Forzar el montaje en el siguiente ciclo de renderizado
    const timer = setTimeout(() => {
      setIsMounted(true);
      
      // Restaurar la posición de scroll después del montaje
      window.scrollTo(0, scrollY);
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  // No renderizar nada en el servidor
  if (!isMounted) {
    return <div ref={wrapperRef} style={{ visibility: 'hidden' }} />;
  }

  return (
    <div ref={wrapperRef}>
      <AIMessageBar />
    </div>
  );
}
