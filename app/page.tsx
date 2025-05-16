"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Introduccion from "@/components/introduccion"
import RegistrarSueno from "@/components/registrar-sueno"
import AnalizarUltimoSueno from "@/components/analizar-ultimo-sueno"
import DiccionarioSuenos from "@/components/diccionario-suenos"
import HistorialSuenos from "@/components/historial-suenos"
import MiPerfil from "@/components/mi-perfil"
import RelojDespertador from "@/components/reloj-despertador"
import LibroFreud from "@/components/libro-freud"

export default function Home() {
  const [seccionActiva, setSeccionActiva] = useState("introduccion")

  const cambiarSeccion = (seccion: string) => {
    setSeccionActiva(seccion)
    window.scrollTo(0, 0)
  }

  const renderSeccion = () => {
    switch (seccionActiva) {
      case "introduccion":
        return <Introduccion />
      case "registrarSueno":
        return <RegistrarSueno />
      case "analizarUltimoSueno":
        return <AnalizarUltimoSueno />
      case "diccionarioSuenos":
        return <DiccionarioSuenos />
      case "historialSuenos":
        return <HistorialSuenos />
      case "miPerfil":
        return <MiPerfil />
      case "relojDespertador":
        return <RelojDespertador />
      case "libroFreud":
        return <LibroFreud />
      default:
        return <Introduccion />
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      <div className="hidden">
        {/* Este componente ya no se usa en la nueva versión con rutas */}
        <Navbar seccionActiva={seccionActiva} cambiarSeccion={cambiarSeccion} />
      </div>
      <div className="flex-grow py-6">{seccionActiva === "introduccion" ? <Introduccion /> : renderSeccion()}</div>
    </main>
  )
}
