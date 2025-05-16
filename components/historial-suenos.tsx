"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Search, Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import type { Sueno } from "@/types/sueno"
import Link from "next/link"

export default function HistorialSuenos() {
  const [suenos, setSuenos] = useState<Sueno[]>([])
  const [busqueda, setBusqueda] = useState("")
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    try {
      const suenosGuardados = localStorage.getItem("suenos")
      if (suenosGuardados) {
        setSuenos(JSON.parse(suenosGuardados) || [])
      } else {
        setSuenos([])
      }
    } catch (error) {
      console.error("Error al cargar sueños:", error)
      setSuenos([])
    } finally {
      setCargando(false)
    }
  }, [])

  const eliminarSueno = (id: string) => {
    if (confirm("¿Estás seguro de que deseas eliminar este sueño?")) {
      try {
        const nuevosSuenos = suenos.filter((sueno) => sueno.id !== id)
        setSuenos(nuevosSuenos)
        localStorage.setItem("suenos", JSON.stringify(nuevosSuenos))
      } catch (error) {
        console.error("Error al eliminar sueño:", error)
        alert("Error al eliminar el sueño")
      }
    }
  }

  const suenosFiltrados = suenos.filter(
    (sueno) =>
      sueno.texto?.toLowerCase().includes(busqueda.toLowerCase()) ||
      sueno.notas?.toLowerCase().includes(busqueda.toLowerCase()),
  )

  // Ordenar sueños por fecha (más recientes primero)
  const suenosOrdenados = [...suenosFiltrados].sort((a, b) => {
    if (!a.fecha) return 1
    if (!b.fecha) return -1
    return new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  })

  if (cargando) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center h-64">
          <p>Cargando historial de sueños...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Historial de Sueños</h1>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar en tus sueños..."
            className="pl-8"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      {suenos && suenos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suenosOrdenados.map((sueno) => (
            <Card key={sueno.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">
                      {sueno.fecha
                        ? new Date(sueno.fecha).toLocaleDateString("es-ES", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "Sin fecha"}
                    </CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {sueno.fecha
                        ? new Date(sueno.fecha).toLocaleTimeString("es-ES", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : "Sin hora"}
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => eliminarSueno(sueno.id)}
                    aria-label="Eliminar sueño"
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <h4 className="text-sm font-medium">Sueño:</h4>
                    <p className="text-sm text-muted-foreground line-clamp-3">{sueno.texto || "Sin descripción"}</p>
                  </div>
                  {sueno.notas && (
                    <div>
                      <h4 className="text-sm font-medium">Notas:</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{sueno.notas}</p>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/analizar?id=${sueno.id}`}>Analizar este sueño</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">No hay sueños registrados</h3>
          <p className="text-muted-foreground mb-4">Comienza a registrar tus sueños para construir tu historial.</p>
          <Link href="/registrar">
            <Button>Registrar mi primer sueño</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
