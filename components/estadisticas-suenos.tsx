"use client"

import { useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Moon, Smile, Flame, Hash, TrendingUp } from "lucide-react"
import type { Sueno } from "@/types/sueno"
import { EMOCIONES, TIPOS_SUENO } from "@/types/sueno"
import { buscarSimbolos } from "@/lib/simbolos-freudianos"

interface EstadisticasSuenosProps {
    suenos: Sueno[]
}

export default function EstadisticasSuenos({ suenos }: EstadisticasSuenosProps) {
    // Calcular distribución de emociones
    const distribucionEmociones = useMemo(() => {
        const emociones: Record<string, number> = {}
        suenos.forEach(sueno => {
            if (sueno.emocion) {
                emociones[sueno.emocion] = (emociones[sueno.emocion] || 0) + 1
            }
        })
        return Object.entries(emociones)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6)
    }, [suenos])

    // Calcular distribución de tipos
    const distribucionTipos = useMemo(() => {
        const tipos: Record<string, number> = {}
        suenos.forEach(sueno => {
            if (sueno.tipoSueno) {
                tipos[sueno.tipoSueno] = (tipos[sueno.tipoSueno] || 0) + 1
            }
        })
        return Object.entries(tipos)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
    }, [suenos])

    // Calcular palabras más frecuentes
    const palabrasFrecuentes = useMemo(() => {
        const palabras: Record<string, number> = {}
        const stopWords = ['que', 'era', 'una', 'con', 'del', 'los', 'las', 'por', 'para', 'pero', 'como', 'más', 'muy', 'este', 'esta', 'ese', 'esa', 'hay', 'estaba', 'había', 'fue', 'ser', 'tiene', 'tiene', 'son', 'está', 'están']

        suenos.forEach(sueno => {
            if (sueno.texto) {
                const words = sueno.texto
                    .toLowerCase()
                    .replace(/[^\wáéíóúüñ\s]/g, '')
                    .split(/\s+/)
                    .filter(w => w.length > 3 && !stopWords.includes(w))

                words.forEach(word => {
                    palabras[word] = (palabras[word] || 0) + 1
                })
            }
        })

        return Object.entries(palabras)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
    }, [suenos])

    // Calcular símbolos más frecuentes
    const simbolosFrecuentes = useMemo(() => {
        const simbolos: Record<string, number> = {}

        suenos.forEach(sueno => {
            if (sueno.texto) {
                const { simbolos: simbolosEncontrados } = buscarSimbolos(sueno.texto)
                simbolosEncontrados.forEach(s => {
                    simbolos[s.simbolo] = (simbolos[s.simbolo] || 0) + 1
                })
            }
        })

        return Object.entries(simbolos)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 8)
    }, [suenos])

    // Calcular racha de días
    const rachaDias = useMemo(() => {
        if (suenos.length === 0) return 0

        const fechas = suenos
            .filter(s => s.fecha)
            .map(s => new Date(s.fecha).toDateString())
            .filter((v, i, a) => a.indexOf(v) === i) // Únicas
            .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())

        if (fechas.length === 0) return 0

        let racha = 1
        const hoy = new Date().toDateString()
        const ayer = new Date(Date.now() - 86400000).toDateString()

        // Si el último sueño no es de hoy ni ayer, racha = 0
        if (fechas[0] !== hoy && fechas[0] !== ayer) return 0

        for (let i = 0; i < fechas.length - 1; i++) {
            const fecha1 = new Date(fechas[i])
            const fecha2 = new Date(fechas[i + 1])
            const diff = (fecha1.getTime() - fecha2.getTime()) / 86400000

            if (diff === 1) {
                racha++
            } else {
                break
            }
        }

        return racha
    }, [suenos])

    // Calcular claridad promedio
    const claridadPromedio = useMemo(() => {
        const suenosConClaridad = suenos.filter(s => s.claridad !== undefined)
        if (suenosConClaridad.length === 0) return 0
        const total = suenosConClaridad.reduce((sum, s) => sum + (s.claridad || 0), 0)
        return Math.round((total / suenosConClaridad.length) * 10) / 10
    }, [suenos])

    if (suenos.length === 0) {
        return (
            <div className="text-center py-8">
                <Moon className="h-12 w-12 mx-auto text-gray-500 mb-4" />
                <p className="text-gray-400">Registra sueños para ver tus estadísticas</p>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {/* Resumen rápido */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-gradient-to-br from-purple-900/40 to-purple-800/20">
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-2 text-purple-400 mb-1">
                            <Moon className="h-4 w-4" />
                            <span className="text-sm">Total</span>
                        </div>
                        <p className="text-2xl font-bold">{suenos.length}</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-900/40 to-orange-800/20">
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-2 text-orange-400 mb-1">
                            <Flame className="h-4 w-4" />
                            <span className="text-sm">Racha</span>
                        </div>
                        <p className="text-2xl font-bold">{rachaDias} días</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-900/40 to-blue-800/20">
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-2 text-blue-400 mb-1">
                            <TrendingUp className="h-4 w-4" />
                            <span className="text-sm">Claridad</span>
                        </div>
                        <p className="text-2xl font-bold">{claridadPromedio}/10</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-900/40 to-green-800/20">
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-2 text-green-400 mb-1">
                            <Hash className="h-4 w-4" />
                            <span className="text-sm">Símbolos</span>
                        </div>
                        <p className="text-2xl font-bold">{simbolosFrecuentes.length}</p>
                    </CardContent>
                </Card>
            </div>

            {/* Emociones */}
            {distribucionEmociones.length > 0 && (
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center gap-2">
                            <Smile className="h-4 w-4 text-purple-400" />
                            Emociones más frecuentes
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            {distribucionEmociones.map(([emocion, count]) => {
                                const emocionInfo = EMOCIONES.find(e => e.value === emocion)
                                const porcentaje = Math.round((count / suenos.length) * 100)
                                return (
                                    <div key={emocion} className="flex items-center gap-2">
                                        <span className="text-xl w-8">{emocionInfo?.emoji || '🤔'}</span>
                                        <div className="flex-1">
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>{emocionInfo?.label || emocion}</span>
                                                <span className="text-gray-400">{count} ({porcentaje}%)</span>
                                            </div>
                                            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full"
                                                    style={{ width: `${porcentaje}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Tipos de sueño */}
            {distribucionTipos.length > 0 && (
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center gap-2">
                            <Moon className="h-4 w-4 text-indigo-400" />
                            Tipos de sueño
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {distribucionTipos.map(([tipo, count]) => {
                                const tipoInfo = TIPOS_SUENO.find(t => t.value === tipo)
                                return (
                                    <div
                                        key={tipo}
                                        className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 rounded-lg border border-slate-700"
                                    >
                                        <span className="text-lg">{tipoInfo?.emoji || '🌙'}</span>
                                        <span className="text-sm">{tipoInfo?.label || tipo}</span>
                                        <span className="text-xs text-purple-400 font-medium">({count})</span>
                                    </div>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Palabras frecuentes */}
            {palabrasFrecuentes.length > 0 && (
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center gap-2">
                            <Hash className="h-4 w-4 text-cyan-400" />
                            Palabras más frecuentes
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {palabrasFrecuentes.map(([palabra, count]) => (
                                <span
                                    key={palabra}
                                    className="px-3 py-1 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 text-cyan-300 text-sm rounded-full border border-cyan-500/30"
                                    style={{
                                        fontSize: `${Math.max(0.75, Math.min(1.25, 0.75 + count * 0.1))}rem`,
                                        opacity: Math.max(0.6, Math.min(1, 0.6 + count * 0.1))
                                    }}
                                >
                                    {palabra} ({count})
                                </span>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Símbolos Freudianos */}
            {simbolosFrecuentes.length > 0 && (
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center gap-2">
                            🧠 Símbolos freudianos detectados
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {simbolosFrecuentes.map(([simbolo, count]) => (
                                <div
                                    key={simbolo}
                                    className="flex items-center justify-between p-2 bg-slate-800/50 rounded-lg border border-purple-500/20"
                                >
                                    <span className="text-sm truncate">{simbolo}</span>
                                    <span className="text-xs text-purple-400 font-medium ml-2">×{count}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
