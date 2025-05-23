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
  // Estado para controlar la visibilidad
  const [isClient, setIsClient] = useState(false);
  const [text, setText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const animationRef = useRef<number | null>(null);
  const hasSeenRef = useRef(false);
  const fullText = 'Entrar';
  const startTime = 5000; // 5 segundos
  const duration = 2000; // 2 segundos de duración
  
  // Efecto para manejar el montaje en el cliente
  useEffect(() => {
    setIsClient(true);
    
    // Verificar si el usuario ya ha visto la animación
    if (typeof window !== 'undefined') {
      hasSeenRef.current = localStorage.getItem('hasSeenAnimation') === 'true';
      
      if (hasSeenRef.current && onEnter) {
        // Si ya ha visto la animación, redirigir
        const timer = setTimeout(() => {
          onEnter();
        }, 100);
        
        return () => clearTimeout(timer);
      }
    }
    
    return () => {
      // Limpieza
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [onEnter]);
  
  // Efecto para la animación del texto
  useEffect(() => {
    if (hasSeenRef.current || !isClient) return;
    
    let startTimestamp: number;
    let timeoutId: NodeJS.Timeout;
    
    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      const charsToShow = Math.ceil(progress * fullText.length);
      setText(fullText.substring(0, charsToShow));
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setShowButton(true);
        animationRef.current = null;
      }
    };
    
    timeoutId = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, startTime);
    
    return () => {
      clearTimeout(timeoutId);
      if (typeof animationRef.current === 'number') {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isClient, fullText, duration, startTime]);
  
  // Manejar el clic en el botón
  const handleEnter = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('hasSeenAnimation', 'true');
    }
    if (onEnter) {
      onEnter();
    }
  };
  
  // No renderizar nada hasta que estemos en el cliente
  if (!isClient || hasSeenRef.current) {
    return null;
  }
  
  return (
    <div className="fixed inset-0 w-full h-full bg-black overflow-hidden">
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>
      
      {text && (
        <div 
          className="
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
            text-white text-2xl tracking-[0.2em] uppercase font-extralight
            cursor-pointer transition-all duration-300 hover:tracking-[0.3em]"
          onClick={showButton ? handleEnter : undefined}
          style={{
            opacity: showButton ? 1 : 0.8,
            pointerEvents: showButton ? 'auto' : 'none',
            transition: showButton ? 'opacity 0.5s ease, letter-spacing 0.3s ease' : 'none'
          }}
        >
          {text}
          {showButton && <span className="animate-pulse">|</span>}
        </div>
      )}
    </div>
  );
}
