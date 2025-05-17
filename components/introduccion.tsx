"use client"

import { Button } from "@/components/ui/button"
import { Book, Brain, History, Moon, Bot } from "lucide-react"
import Link from "next/link"
import { TituloConSparkles } from "@/components/ui/TituloConSparkles"
import { GradientCard } from "@/components/ui/gradient-card"
import AIMessageBarWrapper from '@/components/ui/AIMessageBarWrapper';

export default function Introduccion() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <div className="max-w-3xl w-full text-center space-y-2">
         {/* Contenido principal */}
      <div className="relative z-20 w-full">
        <div className="w-fit mx-auto flex flex-col items-center">
          <h1 className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-5xl font-bold">
            La interpretación de los Sueños
          </h1>
          {/* Línea blanca exactamente debajo del texto */}
          <div className="mt-1 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent blur-sm" />
          <div className="-mt-2 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
      </div>
        {/* Título con efecto sparkles */}
        <div className="mb-4 -mt-8">
          <TituloConSparkles />
        </div>

        <p className="text-lg">
          Bienvenido a esta aplicación interactiva para el registro y análisis de tus sueños basada en las teorías de
          Sigmund Freud, el padre del psicoanálisis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Tarjeta 1 */}
          <div className="h-64">
            <GradientCard>
              <div className="h-full flex flex-col p-6">
                <div className="flex items-center justify-center mb-4">
                  <Book className="mr-2 h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Registra tus Sueños
                  </h3>
                </div>
                <p className="text-gray-300 text-center mb-6 flex-grow">
                  Mantén un diario de tus sueños para descubrir patrones y significados ocultos.
                </p>
                <Link href="/registrar" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                    Registrar un Sueño
                  </Button>
                </Link>
              </div>
            </GradientCard>
          </div>

          {/* Tarjeta 2 */}
          <div className="h-64">
            <GradientCard>
              <div className="h-full flex flex-col p-6">
                <div className="flex items-center justify-center mb-4">
                  <Brain className="mr-2 h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Analiza tus Sueños
                  </h3>
                </div>
                <p className="text-gray-300 text-center mb-6 flex-grow">
                  Descubre el significado de tus sueños según las teorías más comunes, o incluso las más raras.
                </p>
                <Link href="/analizar" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white">
                    Analizar Último Sueño
                  </Button>
                </Link>
              </div>
            </GradientCard>
          </div>

          {/* Tarjeta 3 */}
          <div className="h-64">
            <GradientCard>
              <div className="h-full flex flex-col p-6">
                <div className="flex items-center justify-center mb-4">
                  <Moon className="mr-2 h-6 w-6 text-indigo-400" />
                  <h3 className="text-xl font-semibold text-white -mt-2">
                    Diccionario de Símbolos
                  </h3>
                </div>
                <p className="text-gray-300 text-center mb-6 flex-grow -mt-4">
                  Explora el significado de los símbolos oníricos según Freud.
                </p>
                <Link href="/diccionario" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white -mt-1">
                    Consultar Diccionario
                  </Button>
                </Link>
              </div>
            </GradientCard>
          </div>

          {/* Tarjeta 4 */}
          <div className="h-64">
            <GradientCard>
              <div className="h-full flex flex-col p-6">
                <div className="flex items-center justify-center mb-4">
                  <History className="mr-2 h-6 w-6 text-pink-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Historial de Sueños
                  </h3>
                </div>
                <p className="text-gray-300 text-center mb-6 flex-grow">
                  Revisa todos tus sueños anteriores y sus interpretaciones.
                </p>
                <Link href="/historial" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white">
                    Ver Historial
                  </Button>
                </Link>
              </div>
            </GradientCard>
          </div>
        </div>

        {/* Sección del Asistente de IA */}
        <div className="w-full max-w-6xl mt-12 mb-12">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-blue-500/20 shadow-xl backdrop-blur-sm">
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
              No se guarda ningún mensaje en la base de datos. La IA puede cometer errores. Usa tu criterio y consulta con un profesional para interpretaciones clínicas.
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
