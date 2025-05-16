"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Moon, Save } from "lucide-react"
import { v4 as uuidv4 } from "uuid"
import type { Sueno } from "@/types/sueno"
import { useRouter } from "next/navigation"

export default function RegistrarSueno() {
  const [texto, setTexto] = useState("")
  const [notas, setNotas] = useState("")
  const [fecha, setFecha] = useState(() => {
    const now = new Date()
    return now.toISOString().slice(0, 16) // Formato YYYY-MM-DDThh:mm
  })
  const [guardando, setGuardando] = useState(false)
  const router = useRouter()

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Registrar un Sueño</h1>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Moon className="mr-2 h-5 w-5" />
            Nuevo Sueño
          </CardTitle>
          <CardDescription>Describe tu sueño con el mayor detalle posible para un mejor análisis</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fecha">Fecha y hora del sueño</Label>
            <Input id="fecha" type="datetime-local" value={fecha} onChange={(e) => setFecha(e.target.value)} />
          </div>

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
              Incluye personas, lugares, objetos, acciones y emociones que recuerdes.
            </p>
          </div>

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
              Puedes incluir eventos recientes que creas relacionados, sensaciones al despertar, etc.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={guardarSueno} disabled={guardando || !texto.trim()} className="w-full">
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
