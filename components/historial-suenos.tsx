"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Search, Trash2, Download, Filter, X, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Sueno, Emocion, TipoSueno } from "@/types/sueno"
import { EMOCIONES, TIPOS_SUENO } from "@/types/sueno"
import Link from "next/link"

type OrdenTipo = 'fecha-desc' | 'fecha-asc' | 'claridad-desc' | 'longitud-desc'

export default function HistorialSuenos() {
  const [suenos, setSuenos] = useState<Sueno[]>([])
  const [busqueda, setBusqueda] = useState("")
  const [cargando, setCargando] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const [mostrarFiltros, setMostrarFiltros] = useState(false)

  // Filtros
  const [fechaInicio, setFechaInicio] = useState("")
  const [fechaFin, setFechaFin] = useState("")
  const [emocionFiltro, setEmocionFiltro] = useState<Emocion | "">("")
  const [tipoFiltro, setTipoFiltro] = useState<TipoSueno | "">("")
  const [ordenar, setOrdenar] = useState<OrdenTipo>("fecha-desc")

  const cargarSuenos = useCallback(() => {
    try {
      const suenosGuardados = localStorage.getItem("suenos")
      if (suenosGuardados) {
        const datos = JSON.parse(suenosGuardados)
        return Array.isArray(datos) ? datos : []
      }
      return []
    } catch (error) {
      console.error("Error al cargar sueños:", error)
      return []
    }
  }, [])

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const cargarDatos = async () => {
      setCargando(true)
      try {
        const datos = cargarSuenos()
        requestAnimationFrame(() => {
          if (isMounted) {
            setSuenos(datos)
          }
        })
      } catch (error) {
        console.error("Error al cargar sueños:", error)
      } finally {
        if (isMounted) {
          setCargando(false)
        }
      }
    }

    cargarDatos()
  }, [isMounted, cargarSuenos])

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

  const limpiarFiltros = () => {
    setFechaInicio("")
    setFechaFin("")
    setEmocionFiltro("")
    setTipoFiltro("")
    setBusqueda("")
  }

  const hayFiltrosActivos = busqueda || fechaInicio || fechaFin || emocionFiltro || tipoFiltro

  // Filtrar sueños
  const suenosFiltrados = useMemo(() => {
    return suenos.filter((sueno) => {
      // Búsqueda de texto
      if (busqueda) {
        const busquedaLower = busqueda.toLowerCase()
        const coincide =
          sueno.texto?.toLowerCase().includes(busquedaLower) ||
          sueno.notas?.toLowerCase().includes(busquedaLower) ||
          sueno.personajes?.some(p => p.toLowerCase().includes(busquedaLower)) ||
          sueno.etiquetas?.some(e => e.toLowerCase().includes(busquedaLower))
        if (!coincide) return false
      }

      // Filtro de fecha inicio
      if (fechaInicio && sueno.fecha) {
        if (new Date(sueno.fecha) < new Date(fechaInicio)) return false
      }

      // Filtro de fecha fin
      if (fechaFin && sueno.fecha) {
        const fechaFinDia = new Date(fechaFin)
        fechaFinDia.setHours(23, 59, 59, 999)
        if (new Date(sueno.fecha) > fechaFinDia) return false
      }

      // Filtro de emoción
      if (emocionFiltro && sueno.emocion !== emocionFiltro) return false

      // Filtro de tipo
      if (tipoFiltro && sueno.tipoSueno !== tipoFiltro) return false

      return true
    })
  }, [suenos, busqueda, fechaInicio, fechaFin, emocionFiltro, tipoFiltro])

  // Ordenar sueños
  const suenosOrdenados = useMemo(() => {
    return [...suenosFiltrados].sort((a, b) => {
      switch (ordenar) {
        case 'fecha-asc':
          return new Date(a.fecha || 0).getTime() - new Date(b.fecha || 0).getTime()
        case 'claridad-desc':
          return (b.claridad || 0) - (a.claridad || 0)
        case 'longitud-desc':
          return (b.texto?.length || 0) - (a.texto?.length || 0)
        case 'fecha-desc':
        default:
          return new Date(b.fecha || 0).getTime() - new Date(a.fecha || 0).getTime()
      }
    })
  }, [suenosFiltrados, ordenar])

  // Exportar sueños
  const exportarJSON = () => {
    const dataStr = JSON.stringify(suenosOrdenados, null, 2)
    const blob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `mis-suenos-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const exportarTXT = () => {
    let txt = "=== MI DIARIO DE SUEÑOS ===\n\n"
    suenosOrdenados.forEach((sueno, i) => {
      txt += `--- Sueño ${i + 1} ---\n`
      txt += `Fecha: ${sueno.fecha ? new Date(sueno.fecha).toLocaleString('es-ES') : 'Sin fecha'}\n`
      if (sueno.tipoSueno) {
        const tipo = TIPOS_SUENO.find(t => t.value === sueno.tipoSueno)
        txt += `Tipo: ${tipo?.label || sueno.tipoSueno}\n`
      }
      if (sueno.emocion) {
        const emocion = EMOCIONES.find(e => e.value === sueno.emocion)
        txt += `Emoción: ${emocion?.label || sueno.emocion}\n`
      }
      if (sueno.claridad) txt += `Claridad: ${sueno.claridad}/10\n`
      txt += `\n${sueno.texto || 'Sin descripción'}\n`
      if (sueno.notas) txt += `\nNotas: ${sueno.notas}\n`
      if (sueno.personajes?.length) txt += `Personajes: ${sueno.personajes.join(', ')}\n`
      if (sueno.etiquetas?.length) txt += `Etiquetas: ${sueno.etiquetas.join(', ')}\n`
      txt += "\n"
    })

    const blob = new Blob([txt], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `mis-suenos-${new Date().toISOString().split('T')[0]}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

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
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Historial de Sueños</h1>

      {/* Barra de búsqueda y filtros */}
      <div className="mb-6 space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar en tus sueños..."
              className="pl-8"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
          <Button
            variant={mostrarFiltros ? "dream" : "dreamOutline"}
            onClick={() => setMostrarFiltros(!mostrarFiltros)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filtros
            {hayFiltrosActivos && (
              <span className="ml-2 px-1.5 py-0.5 text-xs bg-purple-500 rounded-full">!</span>
            )}
          </Button>
        </div>

        {/* Panel de filtros */}
        {mostrarFiltros && (
          <Card className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Fecha inicio */}
              <div className="space-y-1">
                <Label className="text-sm">Desde</Label>
                <Input
                  type="date"
                  value={fechaInicio}
                  onChange={(e) => setFechaInicio(e.target.value)}
                />
              </div>

              {/* Fecha fin */}
              <div className="space-y-1">
                <Label className="text-sm">Hasta</Label>
                <Input
                  type="date"
                  value={fechaFin}
                  onChange={(e) => setFechaFin(e.target.value)}
                />
              </div>

              {/* Emoción */}
              <div className="space-y-1">
                <Label className="text-sm">Emoción</Label>
                <select
                  value={emocionFiltro}
                  onChange={(e) => setEmocionFiltro(e.target.value as Emocion | "")}
                  className="w-full h-11 rounded-xl border border-purple-500/30 bg-slate-900/80 px-3 text-sm"
                >
                  <option value="">Todas</option>
                  {EMOCIONES.map((em) => (
                    <option key={em.value} value={em.value}>
                      {em.emoji} {em.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tipo */}
              <div className="space-y-1">
                <Label className="text-sm">Tipo de sueño</Label>
                <select
                  value={tipoFiltro}
                  onChange={(e) => setTipoFiltro(e.target.value as TipoSueno | "")}
                  className="w-full h-11 rounded-xl border border-purple-500/30 bg-slate-900/80 px-3 text-sm"
                >
                  <option value="">Todos</option>
                  {TIPOS_SUENO.map((tipo) => (
                    <option key={tipo.value} value={tipo.value}>
                      {tipo.emoji} {tipo.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-700">
              <div className="flex items-center gap-2">
                <Label className="text-sm">Ordenar:</Label>
                <select
                  value={ordenar}
                  onChange={(e) => setOrdenar(e.target.value as OrdenTipo)}
                  className="h-9 rounded-lg border border-purple-500/30 bg-slate-900/80 px-2 text-sm"
                >
                  <option value="fecha-desc">Más recientes</option>
                  <option value="fecha-asc">Más antiguos</option>
                  <option value="claridad-desc">Mayor claridad</option>
                  <option value="longitud-desc">Más largos</option>
                </select>
              </div>

              {hayFiltrosActivos && (
                <Button variant="ghost" size="sm" onClick={limpiarFiltros}>
                  <X className="h-4 w-4 mr-1" />
                  Limpiar filtros
                </Button>
              )}
            </div>
          </Card>
        )}

        {/* Resumen y exportar */}
        {suenos.length > 0 && (
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>
              Mostrando {suenosOrdenados.length} de {suenos.length} sueños
            </span>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={exportarJSON}>
                <Download className="h-4 w-4 mr-1" />
                JSON
              </Button>
              <Button variant="ghost" size="sm" onClick={exportarTXT}>
                <Download className="h-4 w-4 mr-1" />
                TXT
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Lista de sueños */}
      {suenos && suenos.length > 0 ? (
        suenosOrdenados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suenosOrdenados.map((sueno) => {
              const tipoInfo = TIPOS_SUENO.find(t => t.value === sueno.tipoSueno)
              const emocionInfo = EMOCIONES.find(e => e.value === sueno.emocion)

              return (
                <Card key={sueno.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {tipoInfo && (
                            <span className="text-lg" title={tipoInfo.label}>{tipoInfo.emoji}</span>
                          )}
                          {emocionInfo && (
                            <span className="text-lg" title={emocionInfo.label}>{emocionInfo.emoji}</span>
                          )}
                          {sueno.claridad && (
                            <span className="text-xs text-purple-400">{sueno.claridad}/10</span>
                          )}
                        </div>
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
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {sueno.texto || "Sin descripción"}
                      </p>
                      {(sueno.personajes?.length || sueno.etiquetas?.length) && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {sueno.personajes?.slice(0, 2).map(p => (
                            <span key={p} className="text-xs px-2 py-0.5 bg-purple-600/20 text-purple-300 rounded-full">
                              {p}
                            </span>
                          ))}
                          {sueno.etiquetas?.slice(0, 2).map(e => (
                            <span key={e} className="text-xs px-2 py-0.5 bg-indigo-600/20 text-indigo-300 rounded-full">
                              #{e}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="dreamOutline" className="w-full" asChild>
                      <Link href={`/analizar?id=${sueno.id}`}>Analizar este sueño</Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No se encontraron resultados</h3>
            <p className="text-muted-foreground mb-4">Intenta con otros filtros o términos de búsqueda.</p>
            <Button variant="dreamOutline" onClick={limpiarFiltros}>
              Limpiar filtros
            </Button>
          </div>
        )
      ) : (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">No hay sueños registrados</h3>
          <p className="text-muted-foreground mb-4">Comienza a registrar tus sueños para construir tu historial.</p>
          <Link href="/registrar">
            <Button variant="dream">Registrar mi primer sueño</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
