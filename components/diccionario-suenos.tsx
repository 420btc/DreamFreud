"use client"

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, BookOpen, Headphones, Heart, History, X, TrendingUp } from "lucide-react"
import { AudioPlayer } from "@/components/ui/audio-player"
import { simbolosInterpretados, obtenerCategorias, buscarPorTermino, type SimboloFreudiano } from "@/lib/simbolos-freudianos"
import type { Sueno } from "@/types/sueno"

export default function DiccionarioSuenos() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("")
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas")
  const [favoritos, setFavoritos] = useState<string[]>([])
  const [historialBusquedas, setHistorialBusquedas] = useState<string[]>([])
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false)
  const [aparicionesEnSuenos, setAparicionesEnSuenos] = useState<Record<string, number>>({})

  const categorias = ["Todas", ...obtenerCategorias()]

  // Cargar favoritos e historial del localStorage
  useEffect(() => {
    try {
      const favoritosGuardados = localStorage.getItem("simbolosFavoritos")
      if (favoritosGuardados) {
        setFavoritos(JSON.parse(favoritosGuardados))
      }

      const historialGuardado = localStorage.getItem("historialBusquedasSimbolos")
      if (historialGuardado) {
        setHistorialBusquedas(JSON.parse(historialGuardado))
      }

      // Calcular apariciones de símbolos en sueños
      const suenosGuardados = localStorage.getItem("suenos")
      if (suenosGuardados) {
        const suenos: Sueno[] = JSON.parse(suenosGuardados)
        const apariciones: Record<string, number> = {}

        simbolosInterpretados.forEach(simbolo => {
          let count = 0
          suenos.forEach(sueno => {
            if (sueno.texto) {
              const textoLower = sueno.texto.toLowerCase()
              simbolo.palabrasClave.forEach(palabra => {
                if (textoLower.includes(palabra.toLowerCase())) {
                  count++
                }
              })
            }
          })
          if (count > 0) {
            apariciones[simbolo.simbolo] = count
          }
        })

        setAparicionesEnSuenos(apariciones)
      }
    } catch (error) {
      console.error("Error al cargar datos:", error)
    }
  }, [])

  // Guardar búsqueda en historial
  const guardarEnHistorial = (termino: string) => {
    if (!termino.trim()) return

    const nuevoHistorial = [
      termino,
      ...historialBusquedas.filter(h => h !== termino)
    ].slice(0, 10) // Máximo 10 búsquedas

    setHistorialBusquedas(nuevoHistorial)
    localStorage.setItem("historialBusquedasSimbolos", JSON.stringify(nuevoHistorial))
  }

  // Manejar búsqueda con Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && terminoBusqueda.trim()) {
      guardarEnHistorial(terminoBusqueda)
    }
  }

  // Toggle favorito
  const toggleFavorito = (simbolo: string) => {
    const nuevosFavoritos = favoritos.includes(simbolo)
      ? favoritos.filter(f => f !== simbolo)
      : [...favoritos, simbolo]

    setFavoritos(nuevosFavoritos)
    localStorage.setItem("simbolosFavoritos", JSON.stringify(nuevosFavoritos))
  }

  // Limpiar historial
  const limpiarHistorial = () => {
    setHistorialBusquedas([])
    localStorage.removeItem("historialBusquedasSimbolos")
  }

  // Filtrar símbolos
  const simbolosFiltrados = useMemo((): SimboloFreudiano[] => {
    let resultados: SimboloFreudiano[] = [...simbolosInterpretados]

    // Si mostramos favoritos
    if (mostrarFavoritos) {
      resultados = resultados.filter(s => favoritos.includes(s.simbolo))
    }

    // Filtrar por búsqueda
    if (terminoBusqueda) {
      resultados = buscarPorTermino(terminoBusqueda)
      if (mostrarFavoritos) {
        resultados = resultados.filter(s => favoritos.includes(s.simbolo))
      }
    }

    // Filtrar por categoría
    if (categoriaSeleccionada !== "Todas") {
      resultados = resultados.filter((simbolo) => simbolo.categoria === categoriaSeleccionada)
    }

    return resultados
  }, [terminoBusqueda, categoriaSeleccionada, mostrarFavoritos, favoritos])

  // Símbolos más frecuentes en sueños
  const simbolosFrecuentes = useMemo(() => {
    return Object.entries(aparicionesEnSuenos)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
  }, [aparicionesEnSuenos])

  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Diccionario de Símbolos Oníricos</h1>

      {/* Sección del audiolibro */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Headphones className="mr-2 h-5 w-5" />
            Podcast sobre los sueños y los símbolos que los acompañan
          </CardTitle>
          <CardDescription>8 minutos entre Natalia y Eric</CardDescription>
        </CardHeader>
        <CardContent>
          <AudioPlayer
            src="/La Interpretación de los Sueños.wav"
            title="Los sueños y los símbolos que los acompañan"
            variant="blue-purple"
            className="border border-blue-800/50 shadow-lg"
          />
        </CardContent>
      </Card>

      {/* Símbolos frecuentes en tus sueños */}
      {simbolosFrecuentes.length > 0 && (
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-purple-400" />
              Símbolos frecuentes en tus sueños
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {simbolosFrecuentes.map(([simbolo, count]) => (
                <button
                  key={simbolo}
                  onClick={() => setTerminoBusqueda(simbolo.split(' ')[0])}
                  className="px-3 py-1.5 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-500/30 hover:bg-purple-600/30 transition-colors"
                >
                  {simbolo.split('(')[0].trim()} <span className="text-xs opacity-70">×{count}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Buscar Símbolos
          </CardTitle>
          <CardDescription>Explora el significado de los símbolos según la teoría freudiana</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="busqueda">Buscar por palabra</Label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="busqueda"
                  type="search"
                  placeholder="Ej: agua, casa, volar..."
                  className="pl-8"
                  value={terminoBusqueda}
                  onChange={(e) => setTerminoBusqueda(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>

              {/* Historial de búsquedas */}
              {historialBusquedas.length > 0 && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <History className="h-3 w-3" /> Búsquedas recientes
                    </span>
                    <button onClick={limpiarHistorial} className="text-xs text-gray-500 hover:text-red-400">
                      Limpiar
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {historialBusquedas.slice(0, 5).map((busqueda) => (
                      <button
                        key={busqueda}
                        onClick={() => setTerminoBusqueda(busqueda)}
                        className="text-xs px-2 py-0.5 bg-slate-800 text-gray-400 rounded hover:bg-slate-700"
                      >
                        {busqueda}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="categoria">Filtrar por categoría</Label>
              <Select value={categoriaSeleccionada} onValueChange={setCategoriaSeleccionada}>
                <SelectTrigger id="categoria">
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categorias.map((categoria) => (
                    <SelectItem key={categoria} value={categoria}>
                      {categoria}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Toggle favoritos */}
          <div className="mt-4 flex gap-2">
            <Button
              variant={mostrarFavoritos ? "dream" : "dreamOutline"}
              size="sm"
              onClick={() => setMostrarFavoritos(!mostrarFavoritos)}
            >
              <Heart className={`h-4 w-4 mr-1 ${mostrarFavoritos ? 'fill-current' : ''}`} />
              Favoritos ({favoritos.length})
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Resultados</h2>
          <p className="text-sm text-muted-foreground">
            {simbolosFiltrados.length} {simbolosFiltrados.length === 1 ? "símbolo" : "símbolos"} encontrados
          </p>
        </div>

        {simbolosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {simbolosFiltrados.map((simbolo: SimboloFreudiano, index: number) => {
              const esFavorito = favoritos.includes(simbolo.simbolo)
              const apariciones = aparicionesEnSuenos[simbolo.simbolo]

              return (
                <Card key={index} className="relative">
                  <button
                    onClick={() => toggleFavorito(simbolo.simbolo)}
                    className={`absolute top-3 right-3 p-1.5 rounded-full transition-colors ${esFavorito
                        ? 'text-red-400 bg-red-400/20'
                        : 'text-gray-500 hover:text-red-400 hover:bg-red-400/10'
                      }`}
                  >
                    <Heart className={`h-4 w-4 ${esFavorito ? 'fill-current' : ''}`} />
                  </button>

                  <CardHeader className="pb-2 pr-12">
                    <CardTitle className="text-lg">{simbolo.simbolo}</CardTitle>
                    <div className="flex items-center gap-2">
                      {simbolo.categoria && (
                        <CardDescription className="text-xs">Categoría: {simbolo.categoria}</CardDescription>
                      )}
                      {apariciones && (
                        <span className="text-xs px-2 py-0.5 bg-purple-600/20 text-purple-300 rounded-full">
                          En {apariciones} {apariciones === 1 ? 'sueño' : 'sueños'}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">{simbolo.interpretacion}</p>
                    {simbolo.simbolo.includes('Sombrero') && (
                      <div className="flex justify-center mt-2">
                        <img
                          src="/iconos/hat.png"
                          alt="Ícono de sombrero"
                          className="h-16 w-16 object-contain"
                        />
                      </div>
                    )}
                    {simbolo.simbolo.includes('Reloj') && (
                      <div className="flex justify-center mt-2">
                        <img
                          src="/iconos/clock.png"
                          alt="Ícono de reloj"
                          className="h-16 w-16 object-contain"
                        />
                      </div>
                    )}
                    {simbolo.simbolo.includes('Cueva') && (
                      <div className="flex justify-center mt-2">
                        <img
                          src="/iconos/cave.png"
                          alt="Ícono de cueva"
                          className="h-16 w-16 object-contain"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">
              {mostrarFavoritos ? "No tienes símbolos favoritos" : "No se encontraron símbolos"}
            </h3>
            <p className="text-muted-foreground">
              {mostrarFavoritos
                ? "Marca símbolos como favoritos para acceder a ellos rápidamente."
                : "Intenta con otros términos de búsqueda o selecciona otra categoría."}
            </p>
          </div>
        )}
      </div>

      {/* Sección del audiolibro */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Headphones className="mr-2 h-5 w-5" />
            Audiolibro: La Interpretación de los Sueños
          </CardTitle>
          <CardDescription>Escucha el clásico de Sigmund Freud</CardDescription>
        </CardHeader>
        <CardContent>
          <AudioPlayer
            src="/La Interpretación de los Sueños.wav"
            title="La Interpretación de los Sueños - Sigmund Freud"
          />
        </CardContent>
      </Card>
    </div>
  )
}
