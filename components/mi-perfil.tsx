"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Moon, Brain, Calendar } from "lucide-react"
import type { Sueno } from "@/types/sueno"

export default function MiPerfil() {
  const [suenos, setSuenos] = useState<Sueno[]>([])
  const [nombreUsuario, setNombreUsuario] = useState("Usuario")
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    // Cargar datos del localStorage
    try {
      const suenosGuardados = localStorage.getItem("suenos")
      const nombreGuardado = localStorage.getItem("nombreUsuario")

      if (suenosGuardados) {
        setSuenos(JSON.parse(suenosGuardados) || [])
      }

      if (nombreGuardado) {
        setNombreUsuario(nombreGuardado)
      }
    } catch (error) {
      console.error("Error al cargar datos:", error)
    } finally {
      setCargando(false)
    }
  }, [])

  const guardarNombre = () => {
    try {
      localStorage.setItem("nombreUsuario", nombreUsuario)
      alert("Nombre guardado correctamente")
    } catch (error) {
      console.error("Error al guardar nombre:", error)
      alert("Error al guardar el nombre")
    }
  }

  // Estadísticas de sueños
  const totalSuenos = suenos?.length || 0

  const calcularPromedioCaracteres = () => {
    if (!suenos || suenos.length === 0) return 0
    const totalCaracteres = suenos.reduce((sum, sueno) => sum + (sueno.texto?.length || 0), 0)
    return Math.round(totalCaracteres / suenos.length)
  }

  const calcularSuenosPorMes = () => {
    if (!suenos || suenos.length === 0) return {}

    const suenosPorMes: Record<string, number> = {}

    suenos.forEach((sueno) => {
      if (sueno.fecha) {
        const fecha = new Date(sueno.fecha)
        const mes = fecha.toLocaleString("es-ES", { month: "long" })
        suenosPorMes[mes] = (suenosPorMes[mes] || 0) + 1
      }
    })

    return suenosPorMes
  }

  const promedioCaracteres = calcularPromedioCaracteres()
  const suenosPorMes = calcularSuenosPorMes()

  if (cargando) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center h-64">
          <p>Cargando perfil...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center mt-20">Mi Perfil</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Información Personal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-center mb-4">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-12 w-12 text-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="nombre" className="text-sm font-medium">
                  Nombre
                </label>
                <div className="flex gap-2">
                  <input
                    id="nombre"
                    type="text"
                    value={nombreUsuario}
                    onChange={(e) => setNombreUsuario(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                  <Button onClick={guardarNombre}>Guardar</Button>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mt-4">
                  Fecha de registro: {new Date().toLocaleDateString("es-ES")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Estadísticas de Sueños</CardTitle>
            <CardDescription>Resumen de tu actividad de registro de sueños</CardDescription>
          </CardHeader>
          <CardContent>
            {totalSuenos > 0 ? (
              <Tabs defaultValue="general">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="tiempo">Tiempo</TabsTrigger>
                  <TabsTrigger value="contenido">Contenido</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center">
                          <Moon className="h-4 w-4 mr-2" />
                          Total de Sueños
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold">{totalSuenos}</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center">
                          <Brain className="h-4 w-4 mr-2" />
                          Promedio de Caracteres
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold">{promedioCaracteres}</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="tiempo" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Sueños por Mes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {Object.keys(suenosPorMes).length > 0 ? (
                        <ul className="space-y-2">
                          {Object.entries(suenosPorMes).map(([mes, cantidad]) => (
                            <li key={mes} className="flex justify-between">
                              <span className="capitalize">{mes}</span>
                              <span className="font-medium">{cantidad} sueños</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground">No hay datos suficientes</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="contenido" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Análisis de Contenido</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        El análisis detallado de contenido estará disponible cuando tengas más sueños registrados.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            ) : (
              <div className="text-center py-8">
                <Moon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No hay sueños registrados</h3>
                <p className="text-muted-foreground mb-4">
                  Comienza a registrar tus sueños para ver estadísticas y análisis.
                </p>
                <Link href="/registrar">
                  <Button>Registrar mi primer sueño</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import Link from "next/link"
