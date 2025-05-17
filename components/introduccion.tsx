"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Book, Brain, History, Moon, Bot } from "lucide-react"
import dynamic from 'next/dynamic';
import Link from "next/link"
import { TituloConSparkles } from "@/components/ui/TituloConSparkles"
import { RainbowButton } from "@/components/ui/rainbow-button"

// Importar el componente wrapper
import AIMessageBarWrapper from '@/components/ui/AIMessageBarWrapper';

export default function Introduccion() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <div className="max-w-3xl w-full text-center space-y-2 py-8">
        {/* Título con efecto sparkles */}
        <div className="mb-1">
          <TituloConSparkles />
        </div>
        <h2 className="text-2xl font-semibold text-muted-foreground mb-8">Basado en la obra de Sigmund Freud</h2>

        <p className="text-lg">
          Bienvenido a esta aplicación interactiva para el registro y análisis de tus sueños basada en las teorías de
          Sigmund Freud, el padre del psicoanálisis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          {/* Tarjeta 1 */}
          <div className="p-[1.5px] rounded-2xl" style={{background: 'conic-gradient(at top left, #3b82f6 10%, transparent 40%, #3b82f6 90%, transparent 100%)'}}>
            <Card className="bg-black rounded-2xl text-white shadow-none border-none">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Book className="mr-2 h-5 w-5" />
                  Registra tus Sueños
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Mantén un diario de tus sueños para descubrir patrones y significados ocultos.
                </CardDescription>
                <Link href="/registrar" className="w-full">
                  <RainbowButton className="w-full bg-black text-white hover:bg-black/90">
                    Registrar un Sueño
                  </RainbowButton>
                </Link>
              </CardContent>
            </Card>
          </div>
          {/* Tarjeta 2 */}
          <div className="p-[1.5px] rounded-2xl" style={{background: 'conic-gradient(at top left, #3b82f6 10%, transparent 40%, #3b82f6 90%, transparent 100%)'}}>
            <Card className="bg-black rounded-2xl text-white shadow-none border-none">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Brain className="mr-2 h-5 w-5" />
                  Analiza tus Sueños
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Descubre el significado de tus sueños según las teorías freudianas.
                </CardDescription>
                <Link href="/analizar" className="w-full">
                  <RainbowButton className="w-full bg-black text-white hover:bg-black/90">
                    Analizar Último Sueño
                  </RainbowButton>
                </Link>
              </CardContent>
            </Card>
          </div>
          {/* Tarjeta 3 */}
          <div className="p-[1.5px] rounded-2xl" style={{background: 'conic-gradient(at top left, #3b82f6 10%, transparent 40%, #3b82f6 90%, transparent 100%)'}}>
            <Card className="bg-black rounded-2xl text-white shadow-none border-none">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Moon className="mr-2 h-5 w-5" />
                  Diccionario de Símbolos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Explora el significado de los símbolos oníricos según Freud.
                </CardDescription>
                <Link href="/diccionario" className="w-full">
                  <RainbowButton className="w-full bg-black text-white hover:bg-black/90">
                    Consultar Diccionario
                  </RainbowButton>
                </Link>
              </CardContent>
            </Card>
          </div>
          {/* Tarjeta 4 */}
          <div className="p-[1.5px] rounded-2xl" style={{background: 'conic-gradient(at top left, #3b82f6 10%, transparent 40%, #3b82f6 90%, transparent 100%)'}}>
            <Card className="bg-black rounded-2xl text-white shadow-none border-none">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <History className="mr-2 h-5 w-5" />
                  Historial de Sueños
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Revisa todos tus sueños anteriores y sus interpretaciones.
                </CardDescription>
                <Link href="/historial" className="w-full">
                  <RainbowButton className="w-full bg-black text-white hover:bg-black/90">
                    Ver Historial
                  </RainbowButton>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sección del Asistente de IA */}
        <div className="w-full max-w-6xl mt-12 mb-12">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-blue-500/20 shadow-lg">
            <div className="flex items-center mb-6">
              <Bot className="h-8 w-8 mr-3 text-blue-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Asistente de Sueños Freudiano
              </h3>
            </div>
            <p className="text-muted-foreground text-lg mb-6 max-w-3xl">
              Explora el significado de tus sueños con la ayuda de nuestra IA entrenada en la teoría psicoanalítica de Freud. Haz preguntas sobre símbolos, interpretaciones o conceptos freudianos.
            </p>
            <div className="bg-background/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-border/50 min-h-[400px] flex flex-col">
              <AIMessageBarWrapper />
            </div>
            <p className="text-sm text-muted-foreground mt-3 text-center">
              La IA puede cometer errores. Usa tu criterio y consulta con un profesional para interpretaciones clínicas.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground italic">
            "Los sueños son la vía regia hacia el inconsciente." - Sigmund Freud
          </p>
        </div>
      </div>
    </div>
  );
}
