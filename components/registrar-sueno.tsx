"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Moon, Save, Sparkles, X, Plus } from "lucide-react"
import { v4 as uuidv4 } from "uuid"
import type { Sueno, Emocion, TipoSueno } from "@/types/sueno"
import { TIPOS_SUENO, EMOCIONES } from "@/types/sueno"
import { useRouter } from "next/navigation"

export default function RegistrarSueno() {
  const [texto, setTexto] = useState("")
  const [notas, setNotas] = useState("")
  const [fecha, setFecha] = useState(() => {
    const now = new Date()
    return now.toISOString().slice(0, 16) // Formato YYYY-MM-DDThh:mm
  })
  const [tipoSueno, setTipoSueno] = useState<TipoSueno>("normal")
  const [emocion, setEmocion] = useState<Emocion | null>(null)
  const [claridad, setClaridad] = useState<number>(5)
  const [personajes, setPersonajes] = useState<string[]>([])
  const [nuevoPersonaje, setNuevoPersonaje] = useState("")
  const [etiquetas, setEtiquetas] = useState<string[]>([])
  const [nuevaEtiqueta, setNuevaEtiqueta] = useState("")
  const [guardando, setGuardando] = useState(false)
  const router = useRouter()

  const agregarPersonaje = () => {
    if (nuevoPersonaje.trim() && !personajes.includes(nuevoPersonaje.trim())) {
      setPersonajes([...personajes, nuevoPersonaje.trim()])
      setNuevoPersonaje("")
    }
  }

  const eliminarPersonaje = (personaje: string) => {
    setPersonajes(personajes.filter(p => p !== personaje))
  }

  const agregarEtiqueta = () => {
    if (nuevaEtiqueta.trim() && !etiquetas.includes(nuevaEtiqueta.trim())) {
      setEtiquetas([...etiquetas, nuevaEtiqueta.trim()])
      setNuevaEtiqueta("")
    }
  }

  const eliminarEtiqueta = (etiqueta: string) => {
    setEtiquetas(etiquetas.filter(e => e !== etiqueta))
  }

  const guardarSueno = async () => {
    if (!texto.trim()) {
      alert("Por favor, describe tu sueño antes de guardar")
      return
    }

    setGuardando(true)

    try {
      // Crear nuevo objeto de sueño
      const nuevoSueno: Sueno = {
        id: uuidv4(),
        fecha: fecha ? new Date(fecha).toISOString() : new Date().toISOString(),
        texto: texto.trim(),
        notas: notas.trim() || undefined,
        tipoSueno,
        emocion: emocion || undefined,
        claridad,
        personajes: personajes.length > 0 ? personajes : undefined,
        etiquetas: etiquetas.length > 0 ? etiquetas : undefined,
        createdAt: Date.now(),
        updatedAt: Date.now()
      }

      // Obtener sueños existentes
      const suenosGuardados = localStorage.getItem("suenos")
      const suenos: Sueno[] = suenosGuardados ? JSON.parse(suenosGuardados) : []

      // Añadir nuevo sueño
      const nuevosSuenos = [nuevoSueno, ...suenos]

      // Guardar en localStorage
      localStorage.setItem("suenos", JSON.stringify(nuevosSuenos))

      // Limpiar formulario
      setTexto("")
      setNotas("")
      setFecha(new Date().toISOString().slice(0, 16))
      setTipoSueno("normal")
      setEmocion(null)
      setClaridad(5)
      setPersonajes([])
      setEtiquetas([])

      // Redirigir al análisis
      router.push(`/analizar?id=${nuevoSueno.id}`)
    } catch (error) {
      console.error("Error al guardar sueño:", error)
      alert("Error al guardar el sueño. Por favor, intenta de nuevo.")
    } finally {
      setGuardando(false)
    }
  }

  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-4xl font-bold mb-6 text-center">Registrar un Sueño</h1>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Moon className="mr-2 h-5 w-5" />
            Nuevo Sueño
          </CardTitle>
          <CardDescription>Describe tu sueño con el mayor detalle posible para un mejor análisis</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Fecha */}
          <div className="space-y-2">
            <Label htmlFor="fecha">Fecha y hora del sueño</Label>
            <Input id="fecha" type="datetime-local" value={fecha} onChange={(e) => setFecha(e.target.value)} />
          </div>

          {/* Tipo de sueño */}
          <div className="space-y-2">
            <Label>Tipo de sueño</Label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {TIPOS_SUENO.map((tipo) => (
                <button
                  key={tipo.value}
                  type="button"
                  onClick={() => setTipoSueno(tipo.value)}
                  className={`p-2 rounded-lg border text-sm transition-all duration-200 flex flex-col items-center gap-1 ${tipoSueno === tipo.value
                      ? 'bg-purple-600 border-purple-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                      : 'bg-slate-800/50 border-slate-700 text-gray-300 hover:border-purple-500/50 hover:bg-slate-700/50'
                    }`}
                >
                  <span className="text-xl">{tipo.emoji}</span>
                  <span>{tipo.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Emoción predominante */}
          <div className="space-y-2">
            <Label>Emoción predominante</Label>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {EMOCIONES.map((em) => (
                <button
                  key={em.value}
                  type="button"
                  onClick={() => setEmocion(emocion === em.value ? null : em.value)}
                  className={`p-2 rounded-lg border text-center transition-all duration-200 ${emocion === em.value
                      ? 'bg-purple-600 border-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                      : 'bg-slate-800/50 border-slate-700 hover:border-purple-500/50 hover:bg-slate-700/50'
                    }`}
                  title={em.label}
                >
                  <span className="text-2xl">{em.emoji}</span>
                </button>
              ))}
            </div>
            {emocion && (
              <p className="text-sm text-purple-400">
                Seleccionado: {EMOCIONES.find(e => e.value === emocion)?.label}
              </p>
            )}
          </div>

          {/* Nivel de claridad */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label>Nivel de claridad del sueño</Label>
              <span className="text-sm text-purple-400 font-medium">{claridad}/10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={claridad}
              onChange={(e) => setClaridad(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Muy borroso</span>
              <span>Muy vívido</span>
            </div>
          </div>

          {/* Descripción del sueño */}
          <div className="space-y-2">
            <Label htmlFor="texto">Descripción del sueño</Label>
            <Textarea
              id="texto"
              placeholder="Describe tu sueño con el mayor detalle posible..."
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              rows={6}
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              Incluye lugares, objetos, acciones y sensaciones que recuerdes.
            </p>
          </div>

          {/* Personajes */}
          <div className="space-y-2">
            <Label>Personas/personajes en el sueño</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Nombre o descripción..."
                value={nuevoPersonaje}
                onChange={(e) => setNuevoPersonaje(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), agregarPersonaje())}
              />
              <Button type="button" variant="dreamOutline" size="icon" onClick={agregarPersonaje}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {personajes.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {personajes.map((personaje) => (
                  <span
                    key={personaje}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 text-sm border border-purple-500/30"
                  >
                    {personaje}
                    <button onClick={() => eliminarPersonaje(personaje)} className="hover:text-red-400">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Etiquetas */}
          <div className="space-y-2">
            <Label>Etiquetas (opcional)</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Añade etiquetas..."
                value={nuevaEtiqueta}
                onChange={(e) => setNuevaEtiqueta(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), agregarEtiqueta())}
              />
              <Button type="button" variant="dreamOutline" size="icon" onClick={agregarEtiqueta}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {etiquetas.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {etiquetas.map((etiqueta) => (
                  <span
                    key={etiqueta}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-300 text-sm border border-indigo-500/30"
                  >
                    #{etiqueta}
                    <button onClick={() => eliminarEtiqueta(etiqueta)} className="hover:text-red-400">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Notas personales */}
          <div className="space-y-2">
            <Label htmlFor="notas">Notas personales (opcional)</Label>
            <Textarea
              id="notas"
              placeholder="Añade cualquier reflexión o contexto personal..."
              value={notas}
              onChange={(e) => setNotas(e.target.value)}
              rows={3}
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              Eventos recientes relacionados, sensaciones al despertar, etc.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="dream" onClick={guardarSueno} disabled={guardando || !texto.trim()} className="w-full">
            {guardando ? (
              <>Guardando...</>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Guardar y Analizar
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>"Los sueños son la realización de un deseo." - Sigmund Freud</p>
      </div>
    </div>
  )
}
