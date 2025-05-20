"use client"

import { useState, useEffect, useRef } from "react"
import LoadingScreen from "@/components/ui/loading-screen"
import Navbar from "@/components/navbar"
import Introduccion from "@/components/introduccion"
import RegistrarSueno from "@/components/registrar-sueno"
import AnalizarUltimoSueno from "@/components/analizar-ultimo-sueno"
import DiccionarioSuenos from "@/components/diccionario-suenos"
import HistorialSuenos from "@/components/historial-suenos"
import MiPerfil from "@/components/mi-perfil"
import LibroFreud from "@/components/libro-freud"

// Preload components for better mobile performance
const preloadComponents = () => {
  // This forces Next.js to include these components in the initial bundle
  return {
    Introduccion,
    RegistrarSueno,
    AnalizarUltimoSueno,
    DiccionarioSuenos,
    HistorialSuenos,
    MiPerfil,
    LibroFreud,
  }
}

// Preload components immediately
const Components = preloadComponents()

export default function Home() {
  const [seccionActiva, setSeccionActiva] = useState("introduccion")
  const [isLoading, setIsLoading] = useState(true)
  const hasScrolled = useRef(false);

  // Efecto para manejar el scroll al inicio
  useEffect(() => {
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
  }, []);
  
  // Efecto para manejar el cambio de sección
  useEffect(() => {
    if (seccionActiva && !isLoading) {
      window.scrollTo(0, 0);
    }
  }, [seccionActiva, isLoading]);

  const handleEnterClick = () => {
    setIsLoading(false);
  };

  const cambiarSeccion = (seccion: string) => {
    setSeccionActiva(seccion)
  }

  const renderSeccion = () => {
    switch (seccionActiva) {
      case "introduccion":
        return <Components.Introduccion />
      case "registrarSueno":
        return <Components.RegistrarSueno />
      case "analizarUltimoSueno":
        return <Components.AnalizarUltimoSueno />
      case "diccionarioSuenos":
        return <Components.DiccionarioSuenos />
      case "historialSuenos":
        return <Components.HistorialSuenos />
      case "miPerfil":
        return <Components.MiPerfil />
      case "libroFreud":
        return <Components.LibroFreud />
      default:
        return <Components.Introduccion />
    }
  }

  if (isLoading) {
    return <LoadingScreen onEnter={handleEnterClick} />;
  }

  return (
    <main className="min-h-screen flex flex-col">
      <div className="hidden">
        {/* Este componente ya no se usa en la nueva versión con rutas */}
        <Navbar seccionActiva={seccionActiva} cambiarSeccion={cambiarSeccion} />
      </div>
      <div className="flex-grow">
        {renderSeccion()}
      </div>
    </main>
  )
}
