'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Importar dinámicamente el componente SpiralAnimation para evitar problemas de SSR
const SpiralAnimation = dynamic(
  () => import('@/components/ui/spiral-animation'),
  { ssr: false }
);

interface LoadingScreenProps {
  onEnter?: () => void;
}

export default function LoadingScreen({ onEnter }: LoadingScreenProps) {
  const [startVisible, setStartVisible] = useState(false);
  
  // Mostrar el botón después de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-black overflow-hidden">
      {/* Spiral Animation */}
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>
      
      {/* Botón Enter con efecto de aparición */}
      <div 
        className={`
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
          transition-all duration-1500 ease-out
          ${startVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        <button 
          onClick={onEnter}
          className="
            text-white text-2xl tracking-[0.2em] uppercase font-extralight
            transition-all duration-700
            hover:tracking-[0.3em] animate-pulse
          "
        >
          Enter
        </button>
      </div>
    </div>
  );
}
