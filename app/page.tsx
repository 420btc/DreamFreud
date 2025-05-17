"use client"

import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import LoadingScreen from "@/components/ui/loading-screen"
import Navbar from "@/components/navbar"
import Introduccion from "@/components/introduccion"
import RegistrarSueno from "@/components/registrar-sueno"
import AnalizarUltimoSueno from "@/components/analizar-ultimo-sueno"
import DiccionarioSuenos from "@/components/diccionario-suenos"
import HistorialSuenos from "@/components/historial-suenos"
import MiPerfil from "@/components/mi-perfil"
import RelojDespertador from "@/components/reloj-despertador"
import LibroFreud from "@/components/libro-freud"

// Cargar componentes dinámicamente para mejor rendimiento
const DynamicComponents = {
  Introduccion: dynamic(() => import("@/components/introduccion"), { loading: () => <div>Cargando...</div> }),
  RegistrarSueno: dynamic(() => import("@/components/registrar-sueno"), { loading: () => <div>Cargando...</div> }),
  AnalizarUltimoSueno: dynamic(() => import("@/components/analizar-ultimo-sueno"), { loading: () => <div>Cargando...</div> }),
  DiccionarioSuenos: dynamic(() => import("@/components/diccionario-suenos"), { loading: () => <div>Cargando...</div> }),
  HistorialSuenos: dynamic(() => import("@/components/historial-suenos"), { loading: () => <div>Cargando...</div> }),
  MiPerfil: dynamic(() => import("@/components/mi-perfil"), { loading: () => <div>Cargando...</div> }),
  RelojDespertador: dynamic(() => import("@/components/reloj-despertador"), { loading: () => <div>Cargando...</div> }),
  LibroFreud: dynamic(() => import("@/components/libro-freud"), { loading: () => <div>Cargando...</div> }),
}

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
        return <DynamicComponents.Introduccion />
      case "registrarSueno":
        return <DynamicComponents.RegistrarSueno />
      case "analizarUltimoSueno":
        return <DynamicComponents.AnalizarUltimoSueno />
      case "diccionarioSuenos":
        return <DynamicComponents.DiccionarioSuenos />
      case "historialSuenos":
        return <DynamicComponents.HistorialSuenos />
      case "miPerfil":
        return <DynamicComponents.MiPerfil />
      case "relojDespertador":
        return <DynamicComponents.RelojDespertador />
      case "libroFreud":
        return <DynamicComponents.LibroFreud />
      default:
        return <DynamicComponents.Introduccion />
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
