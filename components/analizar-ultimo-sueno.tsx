"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { generarTituloAutomatico } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Clock, ExternalLink, Layers, BookOpen, MessageSquare } from "lucide-react"
import type { Sueno } from "@/types/sueno"
import { buscarSimbolos, type SimboloFreudiano } from "@/lib/simbolos-freudianos"
import { analizarSimbolosFreudianos } from "@/lib/openai-service"
import dynamic from "next/dynamic"
import Link from "next/link"
import ChatAnalisis from "@/components/chat-analisis"

// Importación dinámica para el componente interactivo
const TrabajoSuenoInteractivo = dynamic(
  () => import("@/components/trabajo-sueno-interactivo"),
  { ssr: false }
)

interface AnalizarUltimoSuenoProps {
  suenoId?: string
}

export default function AnalizarUltimoSueno({ suenoId }: AnalizarUltimoSuenoProps) {
  const [suenos, setSuenos] = useState<Sueno[]>([])
  const [suenoActual, setSuenoActual] = useState<Sueno | null>(null)
  const [simbolosEncontrados, setSimbolosEncontrados] = useState<SimboloFreudiano[]>([])
  const [analisisFreudiano, setAnalisisFreudiano] = useState<string>('')
  const [cargando, setCargando] = useState(true)
  const [cargandoSimbolos, setCargandoSimbolos] = useState(false)
  const [analisisGeneralIA, setAnalisisGeneralIA] = useState<string | null>(null)
  const [interpretacionesIA, setInterpretacionesIA] = useState<Record<string, string>>({})
  const [indiceFrase, setIndiceFrase] = useState(0)

  const FRASES_CARGA = [
    "Analizando el contenido latente...",
    "Consultando el inconsciente...",
    "Interpretando los símbolos oníricos...",
    "Explorando deseos reprimidos...",
    "Descifrando el significado oculto...",
    "Conectando con la teoría freudiana...",
    "Examinando los restos diurnos...",
    "Desentrañando la condensación onírica..."
  ]

  useEffect(() => {
    let intervalo: NodeJS.Timeout
    if (cargandoSimbolos) {
      intervalo = setInterval(() => {
        setIndiceFrase((prev) => (prev + 1) % FRASES_CARGA.length)
      }, 3000)
    } else {
      setIndiceFrase(0)
    }
    return () => clearInterval(intervalo)
  }, [cargandoSimbolos])

  // Función para cargar y analizar un sueño específico
  const cargarYAnalizarSueno = (suenoParaAnalizar: Sueno) => {
    setSuenoActual(suenoParaAnalizar)
    setCargandoSimbolos(true)

    // Buscar símbolos en el texto del sueño y generar análisis
    if (suenoParaAnalizar.texto) {
      const { simbolos, analisis } = buscarSimbolos(suenoParaAnalizar.texto)
      setSimbolosEncontrados(simbolos)
      setAnalisisFreudiano(analisis)

      // Si hay símbolos, obtener interpretaciones de IA
      if (simbolos.length > 0) {
        const simbolosUnicos = Array.from(new Set(simbolos.map(s => s.simbolo)))
        analizarSimbolosFreudianos(simbolosUnicos, suenoParaAnalizar.texto)
          .then(({ interpretaciones, analisisGeneral }) => {
            setInterpretacionesIA(interpretaciones)
            if (analisisGeneral) {
              setAnalisisGeneralIA(analisisGeneral)
            }
          })
          .catch(error => {
            console.error('Error al analizar símbolos con IA:', error)
          })
          .finally(() => {
            setCargandoSimbolos(false)
          })
      } else {
        setCargandoSimbolos(false)
      }
    } else {
      setCargandoSimbolos(false)
    }
  }

  useEffect(() => {
    try {
      const suenosGuardados = localStorage.getItem("suenos")
      if (suenosGuardados) {
        const suenosCargados: Sueno[] = JSON.parse(suenosGuardados) || []

        // Ordenar por fecha (más reciente primero)
        const suenosOrdenados = [...suenosCargados].sort((a, b) => {
          if (!a.fecha) return 1
          if (!b.fecha) return -1
          return new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
        })

        setSuenos(suenosOrdenados)

        if (suenosOrdenados.length > 0) {
          let suenoParaAnalizar: Sueno | undefined

          // Si se proporciona un ID, buscar ese sueño específico
          if (suenoId) {
            suenoParaAnalizar = suenosOrdenados.find((s) => s.id === suenoId)
          }

          // Si no se encontró un sueño con ese ID o no se proporcionó ID, usar el primero
          if (!suenoParaAnalizar) {
            suenoParaAnalizar = suenosOrdenados[0]
          }

          if (suenoParaAnalizar) {
            cargarYAnalizarSueno(suenoParaAnalizar)
          }
        }
      }
    } catch (error) {
      console.error("Error al cargar sueños:", error)
    } finally {
      setCargando(false)
    }
  }, [suenoId])

  if (cargando) {
    return (
      <div className="container mx-auto p-40">
        <div className="flex justify-center items-center">
          <p>Cargando análisis de sueño...</p>
        </div>
      </div>
    )
  }

  if (suenos.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center py-12">
          <Brain className="h-12 w-12 mx-auto text-muted-foreground mb-4 mt-60" />
          <h3 className="text-4xl font-medium mb-2">No hay sueños para analizar</h3>
          <p className="text-muted-foreground mb-4">
            Registra un sueño primero para poder analizarlo según la teoría freudiana.
          </p>
          <Link href="/registrar">
            <Button variant="dream">Registrar un sueño</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6 mt-20">
        {/* Lista de sueños */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Tus Sueños</CardTitle>
              <CardDescription>Selecciona un sueño para analizarlo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
                {suenos.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => cargarYAnalizarSueno(s)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${suenoActual?.id === s.id
                        ? 'bg-primary/10 border border-primary/20'
                        : 'hover:bg-muted/50'
                      }`}
                  >
                    <div className="font-medium line-clamp-1">
                      {s.titulo || generarTituloAutomatico(s.texto || '')}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {s.fecha ? new Date(s.fecha).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      }) : 'Sin fecha'}
                      {suenoActual?.id === s.id && (
                        <span className="ml-2 text-primary font-medium">• Viendo</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detalles del sueño seleccionado */}
        <div className="flex-1">
          {suenoActual ? (
            <Card className="mb-6">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>
                      {suenoActual.titulo || generarTituloAutomatico(suenoActual.texto || '')}
                    </CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {suenoActual.fecha
                        ? new Date(suenoActual.fecha).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit"
                        })
                        : "Sin fecha"}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-1">Descripción del sueño:</h3>
                    <p className="text-sm text-foreground whitespace-pre-wrap">{suenoActual.texto || "Sin descripción"}</p>
                  </div>

                  {suenoActual.notas && (
                    <div>
                      <h3 className="text-sm font-medium mb-1">Notas personales:</h3>
                      <p className="text-sm text-muted-foreground whitespace-pre-wrap">{suenoActual.notas}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">
                Selecciona un sueño de la lista para ver su análisis
              </p>
            </Card>
          )}
        </div>
      </div>

      <Tabs defaultValue="simbolos" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
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
          <TabsTrigger value="chat">
            <MessageSquare className="mr-2 h-4 w-4" />
            Chat IA
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
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{simbolo.simbolo}</h3>
                        {simbolo.categoria && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {simbolo.categoria}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{simbolo.interpretacion}</p>
                      {interpretacionesIA[simbolo.simbolo] && (
                        <div className="mt-2 p-3 bg-muted/50 rounded-lg border-l-4 border-primary">
                          <p className="text-sm font-medium text-primary mb-1">Interpretación Freudiana:</p>
                          <p className="text-sm">{interpretacionesIA[simbolo.simbolo]}</p>
                        </div>
                      )}
                      {cargandoSimbolos && !interpretacionesIA[simbolo.simbolo] && (
                        <div className="mt-2 p-3 bg-muted/30 rounded-lg animate-pulse">
                          <p className="text-sm text-muted-foreground">{FRASES_CARGA[indiceFrase]}</p>
                        </div>
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
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Análisis Freudiano Tradicional</CardTitle>
                <CardDescription>
                  Interpretación basada en los símbolos encontrados en tu sueño.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {analisisFreudiano ? (
                    <div className="space-y-4">
                      {analisisFreudiano.split('\n\n').map((seccion, i) => {
                        const seccionLimpia = seccion.trim();

                        // Verificar si es un título especial
                        if (seccionLimpia === 'Análisis del Sueño' || seccionLimpia === 'Reflexión final') {
                          return (
                            <h3 key={i} className="text-xl font-bold mt-6 mb-3 text-foreground">
                              {seccionLimpia}
                            </h3>
                          );
                        }

                        // Si la sección comienza con números seguidos de punto, convertir en lista
                        if (/^\d+\.\s/.test(seccionLimpia)) {
                          const items = seccionLimpia.split(/\d+\.\s/).filter(Boolean);
                          return (
                            <ul key={i} className="list-disc pl-5 space-y-2">
                              {items.map((item, j) => (
                                <li key={j} className="text-foreground">
                                  {item.trim().replace(/\.$/, '')}
                                </li>
                              ))}
                            </ul>
                          );
                        }

                        // Si es un párrafo normal
                        return (
                          <p key={i} className="text-foreground">
                            {seccionLimpia}
                          </p>
                        );
                      })}
                    </div>
                  ) : (
                    <p>No se pudo generar un análisis para este sueño.</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {(cargandoSimbolos || analisisGeneralIA) && (
              <Card className="border-l-4 border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    <span>Análisis con IA</span>
                    {cargandoSimbolos && (
                      <span className="inline-flex items-center gap-1 text-sm font-normal text-muted-foreground transition-all duration-500">
                        <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                        {FRASES_CARGA[indiceFrase]}
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription>
                    Interpretación avanzada utilizando inteligencia artificial basada en el psicoanálisis freudiano.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {analisisGeneralIA ? (
                    <div className="prose prose-sm max-w-none">
                      {analisisGeneralIA}
                    </div>
                  ) : cargandoSimbolos ? (
                    <div className="space-y-2">
                      <div className="h-4 bg-muted/50 rounded w-full animate-pulse"></div>
                      <div className="h-4 bg-muted/50 rounded w-5/6 animate-pulse"></div>
                      <div className="h-4 bg-muted/50 rounded w-4/6 animate-pulse"></div>
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="chat" className="space-y-4 mt-4">
          {suenoActual ? (
            <ChatAnalisis 
              suenoContexto={suenoActual.texto || ''} 
              analisisInicial={analisisGeneralIA || analisisFreudiano} 
            />
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>No hay sueño seleccionado</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Selecciona un sueño de la lista para chatear con la IA sobre él.</p>
              </CardContent>
            </Card>
          )}
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
          {suenoActual ? (
            <TrabajoSuenoInteractivo suenoId={suenoActual.id} contenidoSueno={suenoActual.texto || ''} />
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>No hay contenido para analizar</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Selecciona un sueño de la lista para ver el análisis del trabajo del sueño.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
