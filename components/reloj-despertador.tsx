"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Moon, Sun, Bell } from "lucide-react"

export default function RelojDespertador() {
  const [horaActual, setHoraActual] = useState<Date>(new Date())
  const [horaAlarma, setHoraAlarma] = useState<string>("")
  const [alarmaActivada, setAlarmaActivada] = useState<boolean>(false)
  const [alarmaTriggered, setAlarmaTriggered] = useState<boolean>(false)

  // Actualizar la hora cada segundo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraActual(new Date())

      // Comprobar si la alarma debe sonar
      if (alarmaActivada && horaAlarma) {
        const ahora = new Date()
        const [horaAlarmaHoras, horaAlarmaMinutos] = horaAlarma.split(":").map(Number)

        if (
          ahora.getHours() === horaAlarmaHoras &&
          ahora.getMinutes() === horaAlarmaMinutos &&
          ahora.getSeconds() === 0
        ) {
          setAlarmaTriggered(true)
        }
      }
    }, 1000)

    return () => clearInterval(intervalo)
  }, [alarmaActivada, horaAlarma])

  // Formatear la hora actual
  const formatearHora = (fecha: Date): string => {
    return fecha.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
  }

  // Formatear la fecha actual
  const formatearFecha = (fecha: Date): string => {
    return fecha.toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Activar/desactivar alarma
  const toggleAlarma = () => {
    if (!horaAlarma) {
      alert("Por favor, establece una hora para la alarma")
      return
    }

    setAlarmaActivada(!alarmaActivada)
    setAlarmaTriggered(false)
  }

  // Detener alarma
  const detenerAlarma = () => {
    setAlarmaTriggered(false)
  }

  // Determinar si es de día o de noche
  const esDeDia = () => {
    const hora = horaActual.getHours()
    return hora >= 6 && hora < 20
  }

  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Reloj Despertador</h1>

      <div className="max-w-md mx-auto">
        <Card className={`mb-6 ${alarmaTriggered ? "animate-pulse border-red-500" : ""}`}>
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              {esDeDia() ? <Sun className="mr-2 h-5 w-5" /> : <Moon className="mr-2 h-5 w-5" />}
              Hora Actual
            </CardTitle>
            <CardDescription className="text-center">El momento ideal para recordar tus sueños</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold tracking-wider">{formatearHora(horaActual)}</div>
              <div className="text-muted-foreground capitalize">{formatearFecha(horaActual)}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Bell className="mr-2 h-5 w-5" />
              Alarma
            </CardTitle>
            <CardDescription className="text-center">
              Configura una alarma para registrar tus sueños al despertar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="horaAlarma">Hora de la alarma</Label>
                <Input id="horaAlarma" type="time" value={horaAlarma} onChange={(e) => setHoraAlarma(e.target.value)} />
              </div>

              <div className="flex justify-between">
                <Button variant={alarmaActivada ? "destructive" : "default"} onClick={toggleAlarma}>
                  {alarmaActivada ? "Desactivar Alarma" : "Activar Alarma"}
                </Button>

                {alarmaTriggered && <Button onClick={detenerAlarma}>Detener Alarma</Button>}
              </div>

              {alarmaActivada && (
                <p className="text-sm text-muted-foreground">Alarma programada para las {horaAlarma}</p>
              )}

              {alarmaTriggered && (
                <div className="p-3 bg-destructive/10 text-destructive rounded-md text-center">
                  <p className="font-bold">¡Es hora de registrar tu sueño!</p>
                  <p className="text-sm">Anota tu sueño ahora antes de que se desvanezca de tu memoria</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>"El sueño es el guardián del dormir, no su perturbador." - Sigmund Freud</p>
        </div>
      </div>
    </div>
  )
}
