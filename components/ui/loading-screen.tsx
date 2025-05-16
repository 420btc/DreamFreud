'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [text, setText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const animationRef = useRef<number | null>(null);
  const fullText = 'Entrar';
  const startTime = 5000; // 5 segundos
  const duration = 2000; // 2 segundos de duración
  
  useEffect(() => {
    let startTimestamp: number;
    let timeoutId: NodeJS.Timeout;
    
    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Calcular cuántas letras mostrar basado en el progreso
      const charsToShow = Math.ceil(progress * fullText.length);
      setText(fullText.substring(0, charsToShow));
      
      if (progress < 1) {
        const frameId = requestAnimationFrame(animate);
        animationRef.current = frameId;
      } else {
        setShowButton(true);
        animationRef.current = null;
      }
    };
    
    // Iniciar la animación después de 5 segundos
    timeoutId = setTimeout(() => {
      const frameId = requestAnimationFrame(animate);
      animationRef.current = frameId;
    }, startTime);
    
    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [fullText]);

  return (
    <div className="fixed inset-0 w-full h-full bg-black overflow-hidden">
      {/* Spiral Animation */}
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>
      
      {/* Texto con efecto de escritura */}
      {text && (
        <div 
          className="
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
            text-white text-2xl tracking-[0.2em] uppercase font-extralight
            cursor-pointer
            transition-all duration-300
            hover:tracking-[0.3em]
          "
          onClick={showButton ? onEnter : undefined}
          style={{
            opacity: showButton ? 1 : 0.8,
            pointerEvents: showButton ? 'auto' : 'none',
            transition: showButton ? 'opacity 0.5s ease, letter-spacing 0.3s ease' : 'none'
          }}
        >
          {text}
          {/* Cursor parpadeante cuando termina la animación */}
          {showButton && (
            <span className="animate-pulse">|</span>
          )}
        </div>
      )}
    </div>
  );
}
