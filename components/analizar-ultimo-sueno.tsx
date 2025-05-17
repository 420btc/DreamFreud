"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Clock, ExternalLink, Layers, BookOpen } from "lucide-react"
import type { Sueno } from "@/types/sueno"
import { buscarSimbolos, type SimboloFreudiano } from "@/lib/simbolos-freudianos"
import dynamic from "next/dynamic"
import Link from "next/link"

// Importación dinámica para el componente interactivo
const TrabajoSuenoInteractivo = dynamic(
  () => import("@/components/trabajo-sueno-interactivo"),
  { ssr: false }
)

interface AnalizarUltimoSuenoProps {
  suenoId?: string
}

export default function AnalizarUltimoSueno({ suenoId }: AnalizarUltimoSuenoProps) {
  const [sueno, setSueno] = useState<Sueno | null>(null)
  const [simbolosEncontrados, setSimbolosEncontrados] = useState<SimboloFreudiano[]>([])
  const [analisisFreudiano, setAnalisisFreudiano] = useState<string>('')
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    try {
      const suenosGuardados = localStorage.getItem("suenos")
      if (suenosGuardados) {
        const suenos: Sueno[] = JSON.parse(suenosGuardados) || []

        if (suenos.length > 0) {
          let suenoParaAnalizar: Sueno | undefined

          // Si se proporciona un ID, buscar ese sueño específico
          if (suenoId) {
            suenoParaAnalizar = suenos.find((s) => s.id === suenoId)
          }

          // Si no se encontró un sueño con ese ID o no se proporcionó ID, usar el último
          if (!suenoParaAnalizar) {
            // Ordenar por fecha (más reciente primero)
            const suenosOrdenados = [...suenos].sort((a, b) => {
              if (!a.fecha) return 1
              if (!b.fecha) return -1
              return new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
            })

            suenoParaAnalizar = suenosOrdenados[0]
          }

          if (suenoParaAnalizar) {
            setSueno(suenoParaAnalizar)

            // Buscar símbolos en el texto del sueño y generar análisis
            if (suenoParaAnalizar.texto) {
              const { simbolos, analisis } = buscarSimbolos(suenoParaAnalizar.texto)
              setSimbolosEncontrados(simbolos)
              setAnalisisFreudiano(analisis)
            }
          }
        }
      }
    } catch (error) {
      console.error("Error al cargar sueño:", error)
    } finally {
      setCargando(false)
    }
  }, [suenoId])

  if (cargando) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center h-64">
          <p>Cargando análisis de sueño...</p>
        </div>
      </div>
    )
  }

  if (!sueno) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center py-12">
          <Brain className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">No hay sueños para analizar</h3>
          <p className="text-muted-foreground mb-4">
            Registra un sueño primero para poder analizarlo según la teoría freudiana.
          </p>
          <Link href="/registrar">
            <Button>Registrar un sueño</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Análisis de Sueño</h1>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>
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
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-1">Descripción del sueño:</h3>
              <p className="text-sm text-foreground whitespace-pre-wrap">{sueno.texto || "Sin descripción"}</p>
            </div>

            {sueno.notas && (
              <div>
                <h3 className="text-sm font-medium mb-1">Notas personales:</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{sueno.notas}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="simbolos" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="simbolos">
            <Brain className="mr-2 h-4 w-4" />
            Símbolos
          </TabsTrigger>
          <TabsTrigger value="analisis">
            <Layers className="mr-2 h-4 w-4" />
            Análisis
          </TabsTrigger>
          <TabsTrigger value="trabajo-sueno">
            <BookOpen className="mr-2 h-4 w-4" />
            Trabajo del Sueño
          </TabsTrigger>
          <TabsTrigger value="guia">
            <BookOpen className="mr-2 h-4 w-4" />
            Guía
          </TabsTrigger>
        </TabsList>

        <TabsContent value="simbolos" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Símbolos Freudianos Encontrados</CardTitle>
              <CardDescription>Elementos de tu sueño y su posible interpretación según Freud</CardDescription>
            </CardHeader>
            <CardContent>
              {simbolosEncontrados && simbolosEncontrados.length > 0 ? (
                <div className="space-y-4">
                  {simbolosEncontrados.map((simbolo, index) => (
                    <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                      <h3 className="font-medium">{simbolo.simbolo}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{simbolo.interpretacion}</p>
                      {simbolo.categoria && (
                        <p className="text-xs text-muted-foreground mt-1">Categoría: {simbolo.categoria}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  No se encontraron símbolos freudianos específicos en este sueño. Considera añadir más detalles o
                  consultar el diccionario de símbolos.
                </p>
              )}

              <div className="mt-4 pt-4 border-t">
                <Link href="/diccionario" className="flex items-center text-sm text-primary">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Consultar diccionario completo de símbolos
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analisis" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Análisis Freudiano</CardTitle>
              <CardDescription>Interpretación basada en los principios del psicoanálisis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="prose max-w-none">
                  {analisisFreudiano.split('\n').map((parrafo, index) => {
                    // Si el párrafo comienza con ###, es un encabezado de categoría
                    if (parrafo.startsWith('###')) {
                      return (
                        <h3 key={index} className="text-lg font-semibold mt-6 mb-3">
                          {parrafo.replace(/^#+/g, '').trim()}
                        </h3>
                      )
                    }
                    // Si el párrafo comienza con ##, es un título principal
                    if (parrafo.startsWith('##')) {
                      return (
                        <h2 key={index} className="text-xl font-bold mt-8 mb-4 border-b pb-2">
                          {parrafo.replace(/^#+/g, '').trim()}
                        </h2>
                      )
                    }
                    // Si el párrafo está vacío, no renderizar nada
                    if (!parrafo.trim()) return null;
                    // Párrafo normal
                    return (
                      <p key={index} className="mb-4 text-foreground">
                        {parrafo.trim()}
                      </p>
                    )
                  })}
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium text-lg mb-3">Mecanismos del Sueño</h3>
                  <p className="text-muted-foreground mb-3">Tu sueño puede mostrar signos de:</p>
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="font-medium min-w-[120px]">Condensación:</span>
                      <span>Múltiples ideas representadas por una sola imagen</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium min-w-[120px]">Desplazamiento:</span>
                      <span>Emociones transferidas de un objeto a otro</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium min-w-[120px]">Representabilidad:</span>
                      <span>Transformación de pensamientos en imágenes visuales</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium min-w-[120px]">Elaboración secundaria:</span>
                      <span>Intento de dar coherencia lógica al sueño</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guia" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Guía de Reflexión Personal</CardTitle>
              <CardDescription>Preguntas para profundizar en el significado de tu sueño</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Conexiones con tu Vida Diaria</h3>
                  <p className="text-sm text-muted-foreground mt-1">Reflexiona sobre estas preguntas:</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-2">
                    <li>¿Qué eventos recientes podrían relacionarse con este sueño?</li>
                    <li>
                      ¿Qué emociones experimentaste durante el sueño y cómo se relacionan con tus emociones actuales?
                    </li>
                    <li>¿Hay personas o situaciones en el sueño que te recuerden a tu infancia?</li>
                    <li>¿Qué deseos o temores podría estar expresando este sueño?</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <h3 className="font-medium">Elementos Destacados</h3>
                  <p className="text-sm text-muted-foreground mt-1">Presta especial atención a:</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-2">
                    <li>Imágenes o escenas que te impactaron emocionalmente</li>
                    <li>Elementos recurrentes que aparecen en varios sueños</li>
                    <li>Contradicciones o elementos ilógicos en el sueño</li>
                    <li>Sensaciones físicas experimentadas durante el sueño</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trabajo-sueno" className="space-y-4 mt-4">
          {sueno?.texto ? (
            <TrabajoSuenoInteractivo 
              suenoId={sueno.id} 
              contenidoSueno={sueno.texto} 
            />
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>No hay contenido para analizar</CardTitle>
              </CardHeader>
              <CardContent>
                <p>No se encontró el contenido del sueño para realizar el análisis del trabajo del sueño.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
