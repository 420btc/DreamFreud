"use client"

import { Button } from "@/components/ui/button"
import { Book, Brain, History, Moon, Bot } from "lucide-react"
import Link from "next/link"
import { TituloConSparkles } from "@/components/ui/TituloConSparkles"
import { GradientCard } from "@/components/ui/gradient-card"
import AIMessageBarWrapper from '@/components/ui/AIMessageBarWrapper';
import { HeroSection } from "@/components/hero-odyssey";

export default function Introduccion() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative -mt-6">
        <HeroSection />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <p className="text-2xl md:text-3xl font-light text-gray-300 italic mb-8 max-w-3xl mx-auto">
            
          </p>
          <TituloConSparkles>
            Tu Diario de Sueños
          </TituloConSparkles>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Explora el fascinante mundo de tus sueños con herramientas modernas basadas en las teorías de
            Sigmund Freud, el padre del psicoanálisis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Tarjeta 1 */}
          <div className="h-64">
            <GradientCard>
              <div className="h-full flex flex-col p-6">
                <div className="flex items-center justify-center mb-4">
                  <Book className="mr-2 h-6 w-6 text-gray-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Registra tus Sueños
                  </h3>
                </div>
                <p className="text-gray-300 text-center mb-6 flex-grow mt-1">
                  Mantén un diario de tus sueños para descubrir patrones y significados ocultos.
                </p>
                <Link href="/registrar" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white mt-4">
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
                  <Button className="w-full bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-700 hover:to-gray-500 text-white -mt-1">
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
                  <Moon className="mr-2 h-6 w-6 text-indigo-400 -mt-4" />
                  <h3 className="text-xl font-semibold text-white -mt-1">
                    Diccionario de Símbolos
                  </h3>
                </div>
                <p className="text-gray-300 text-center mb-6 flex-grow">
                  Explora el significado de los símbolos oníricos según Freud.
                </p>
                <Link href="/diccionario" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 text-white -mt-1">
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
                  <h3 className="text-xl font-semibold text-white -mt-2">
                    Historial de Sueños
                  </h3>
                </div>
                <p className="text-gray-300 text-center mb-6 flex-grow">
                  Revisa todos tus sueños anteriores y sus interpretaciones.
                </p>
                <Link href="/historial" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-gray-600 to-gray-400 hover:from-gray-500 hover:to-gray-300 text-white">
                    Ver Historial
                  </Button>
                </Link>
              </div>
            </GradientCard>
          </div>
        </div>

        {/* Sección del Asistente de IA */}
        <div className="w-full max-w-8xl mx-auto mt-20 mb-12" id="asistente-ia">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-blue-500/20 shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-center mb-6">
              <Bot className="h-8 w-8 mr-3 text-blue-400" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
                Asistente de Sueños
              </h3>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto text-center">
              Explora el significado de tus sueños con la ayuda de nuestra IA entrenada en la teoría psicoanalítica de Freud. 
              Haz preguntas sobre símbolos, interpretaciones o conceptos freudianos.
            </p>
            <div className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800/50 min-h-[400px] flex flex-col">
              <AIMessageBarWrapper />
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              No se guarda ningún mensaje en la base de datos. La IA puede cometer errores. 
              Usa tu criterio y consulta con un profesional para interpretaciones clínicas.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 italic text-lg">
            "Los sueños son la vía regia hacia el inconsciente." - Sigmund Freud
          </p>
        </div>
      </div>
    </div>
  );
}
