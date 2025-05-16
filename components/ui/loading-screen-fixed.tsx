'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const [text, setText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [hasSeenAnimation, setHasSeenAnimation] = useState(false);
  const animationRef = useRef<number | null>(null);
  const fullText = 'Entrar';
  const startTime = 5000; // 5 segundos
  const duration = 2000; // 2 segundos de duración
  
  // Verificar si el usuario ya ha visto la animación
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasSeen = localStorage.getItem('hasSeenAnimation') === 'true';
      setHasSeenAnimation(hasSeen);
      
      if (hasSeen && onEnter) {
        // Si ya ha visto la animación, redirigir inmediatamente
        onEnter();
      }
    }
  }, [onEnter]);

  // Efecto para manejar la animación
  useEffect(() => {
    // Si ya ha visto la animación, no hacer nada
    if (hasSeenAnimation) return;

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
  }, [fullText, hasSeenAnimation, duration, startTime]);

  // Función para manejar el clic en el botón
  const handleEnter = useCallback(() => {
    // Marcar que el usuario ha visto la animación
    if (typeof window !== 'undefined') {
      localStorage.setItem('hasSeenAnimation', 'true');
    }
    if (onEnter) {
      onEnter();
    }
  }, [onEnter]);

  // Si ya ha visto la animación, no mostrar nada
  if (hasSeenAnimation) {
    return null;
  }

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
            hover:tracking-[0.3em]"
          onClick={showButton ? handleEnter : undefined}
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
