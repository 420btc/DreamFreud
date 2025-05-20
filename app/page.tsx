"use client"

import { useState, useEffect, useRef, useCallback, Suspense } from "react"
import dynamic from 'next/dynamic';
import LoadingScreen from "@/components/ui/loading-screen"

// Carga perezosa de componentes
const Introduccion = dynamic(() => import('@/components/introduccion'), {
  loading: () => <div className="min-h-[60vh] flex items-center justify-center"><p>Cargando...</p></div>,
});

const RegistrarSueno = dynamic(() => import('@/components/registrar-sueno'), {
  loading: () => <div className="min-h-[60vh] flex items-center justify-center"><p>Cargando...</p></div>,
});

const AnalizarUltimoSueno = dynamic(() => import('@/components/analizar-ultimo-sueno'), {
  loading: () => <div className="min-h-[60vh] flex items-center justify-center"><p>Cargando...</p></div>,
});

const DiccionarioSuenos = dynamic(() => import('@/components/diccionario-suenos'), {
  loading: () => <div className="min-h-[60vh] flex items-center justify-center"><p>Cargando...</p></div>,
});

const HistorialSuenos = dynamic(() => import('@/components/historial-suenos'), {
  loading: () => <div className="min-h-[60vh] flex items-center justify-center"><p>Cargando...</p></div>,
});

const MiPerfil = dynamic(() => import('@/components/mi-perfil'), {
  loading: () => <div className="min-h-[60vh] flex items-center justify-center"><p>Cargando...</p></div>,
});

const LibroFreud = dynamic(() => import('@/components/libro-freud'), {
  loading: () => <div className="min-h-[60vh] flex items-center justify-center"><p>Cargando...</p></div>,
});

// Mapa de componentes para renderizado condicional
const componentsMap = {
  introduccion: Introduccion,
  registrarSueno: RegistrarSueno,
  analizarUltimoSueno: AnalizarUltimoSueno,
  diccionarioSuenos: DiccionarioSuenos,
  historialSuenos: HistorialSuenos,
  miPerfil: MiPerfil,
  libroFreud: LibroFreud,
} as const;

type SeccionActiva = keyof typeof componentsMap;

export default function Home() {
  const [seccionActiva, setSeccionActiva] = useState<SeccionActiva>("introduccion");
  const [isLoading, setIsLoading] = useState(true);
  const hasScrolled = useRef(false);
  const [isClient, setIsClient] = useState(false);

  // Solo renderizar en el cliente para evitar hidratación
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Efecto para manejar el scroll al inicio
  useEffect(() => {
    if (!isClient) return;
    
    // Solo ejecutar esto una vez al montar el componente
    if (hasScrolled.current) return;
    
    // Asegurarse de que la página esté en la parte superior al cargar
    window.scrollTo(0, 0);
    
    // Deshabilitar el comportamiento de scroll automático del navegador
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Marcar que ya se ha manejado el scroll inicial
    hasScrolled.current = true;
  }, [isClient]);
  
  // Prefetch de componentes cuando el mouse está sobre los botones de navegación
  const prefetchComponent = useCallback((seccion: SeccionActiva) => {
    // Esto hará que Next.js precargue el componente
    const Component = componentsMap[seccion];
    // Forzar la precarga del componente
    if (typeof window !== 'undefined' && 'preload' in Component) {
      (Component as any).preload();
    }
  }, []);

  const handleEnterClick = useCallback(() => {
    setIsLoading(false);
  }, []);

  const cambiarSeccion = useCallback((seccion: SeccionActiva) => {
    setSeccionActiva(seccion);
    // Desplazamiento suave al cambiar de sección
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }, []);

  // Renderizar el componente activo con Suspense
  const renderSeccion = () => {
    const ComponenteActivo = componentsMap[seccionActiva] || componentsMap.introduccion;
    
    return (
      <Suspense fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <p>Cargando...</p>
        </div>
      }>
        <ComponenteActivo />
      </Suspense>
    );
  };

  // Mostrar pantalla de carga solo en el cliente
  if (!isClient || isLoading) {
    return <LoadingScreen onEnter={handleEnterClick} />;
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-grow">
        {renderSeccion()}
      </div>
    </main>
  )
}
