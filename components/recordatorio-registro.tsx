"use client"

import { useState, useEffect } from "react"
import { Moon, Sparkles, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Sueno } from "@/types/sueno"

export default function RecordatorioRegistro() {
    const [mostrar, setMostrar] = useState(false)
    const [diasSinRegistrar, setDiasSinRegistrar] = useState(0)
    const [cerrado, setCerrado] = useState(false)

    useEffect(() => {
        try {
            // Verificar si ya lo cerró hoy
            const cerradoHoy = localStorage.getItem("recordatorioCerradoHoy")
            if (cerradoHoy === new Date().toDateString()) {
                return
            }

            const suenosGuardados = localStorage.getItem("suenos")
            if (!suenosGuardados) {
                setMostrar(true)
                setDiasSinRegistrar(-1) // Sin sueños registrados
                return
            }

            const suenos: Sueno[] = JSON.parse(suenosGuardados)
            if (suenos.length === 0) {
                setMostrar(true)
                setDiasSinRegistrar(-1)
                return
            }

            // Ordenar por fecha más reciente
            const suenosOrdenados = [...suenos].sort((a, b) => {
                if (!a.fecha) return 1
                if (!b.fecha) return -1
                return new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
            })

            const ultimoSueno = suenosOrdenados[0]
            if (ultimoSueno.fecha) {
                const ultimaFecha = new Date(ultimoSueno.fecha)
                const hoy = new Date()

                // Calcular días desde último registro
                const diff = Math.floor((hoy.getTime() - ultimaFecha.getTime()) / (1000 * 60 * 60 * 24))

                if (diff >= 1) {
                    setDiasSinRegistrar(diff)
                    setMostrar(true)
                }
            }
        } catch (error) {
            console.error("Error al verificar recordatorio:", error)
        }
    }, [])

    const cerrarRecordatorio = () => {
        setCerrado(true)
        localStorage.setItem("recordatorioCerradoHoy", new Date().toDateString())
    }

    if (!mostrar || cerrado) return null

    return (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-in slide-in-from-bottom-4 fade-in-0 duration-500">
            <div className="bg-gradient-to-br from-purple-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-[0_8px_32px_rgba(139,92,246,0.3)] p-4">
                <button
                    onClick={cerrarRecordatorio}
                    className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>

                <div className="flex items-start gap-3 pr-6">
                    <div className="p-2 bg-purple-600/30 rounded-xl">
                        <Moon className="h-6 w-6 text-purple-300" />
                    </div>

                    <div className="flex-1">
                        <h3 className="font-medium text-white mb-1 flex items-center gap-1">
                            <Sparkles className="h-4 w-4 text-yellow-400" />
                            {diasSinRegistrar === -1
                                ? "¡Comienza tu diario de sueños!"
                                : diasSinRegistrar === 1
                                    ? "¿Soñaste algo anoche?"
                                    : `${diasSinRegistrar} días sin registrar`}
                        </h3>
                        <p className="text-sm text-gray-300 mb-3">
                            {diasSinRegistrar === -1
                                ? "Registra tu primer sueño y descubre su significado oculto."
                                : "Los sueños se desvanecen rápido. Captura el tuyo ahora."}
                        </p>
                        <Link href="/registrar">
                            <Button variant="dream" size="sm" className="w-full">
                                <Moon className="h-4 w-4 mr-2" />
                                Registrar sueño
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
