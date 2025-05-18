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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-4">
          {/* Tarjeta 1 */}
          <div className="h-56 md:h-72">
            <GradientCard>
              <div className="h-full flex flex-col p-3 md:p-4">
                <div className="flex items-center justify-center mb-4">
                  <Book className="mr-2 h-6 w-6 text-gray-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Registra tus Sueños
                  </h3>
                </div>
                <p className="text-gray-300 text-center mb-6 mt-2">
                  Mantén un diario de tus sueños para descubrir patrones y significados ocultos.
                </p>
                <div className="mt-auto">
                  <Link href="/registrar" className="w-full block">
                    <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white">
                      Registrar un Sueño
                    </Button>
                  </Link>
                </div>
              </div>
            </GradientCard>
          </div>

          {/* Tarjeta 2 */}
          <div className="h-56 md:h-72">
            <GradientCard>
              <div className="h-full flex flex-col p-3 md:p-4">
                <div className="flex items-center justify-center mb-4">
                  <Brain className="mr-2 h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Analiza tus Sueños
                  </h3>
                </div>
                <p className="text-gray-300 text-center mb-6 mt-2">
                  Descubre el significado de tus sueños según las teorías más comunes, o incluso las más raras.
                </p>
                <div className="mt-auto">
                  <Link href="/analizar" className="w-full block">
                    <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white">
                      Analizar Último Sueño
                    </Button>
                  </Link>
                </div>
              </div>
            </GradientCard>
          </div>

          {/* Tarjeta 3 */}
          <div className="h-56 md:h-72">
            <GradientCard>
              <div className="h-full flex flex-col p-3 md:p-4">
                <div className="flex items-center justify-center mb-4">
                  <Moon className="mr-2 h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Diccionario de Símbolos
                  </h3>
                </div>
                <p className="text-gray-300 text-center mb-6">
                  Explora el significado de los símbolos oníricos según Freud.
                </p>
                <div className="mt-auto">
                  <Link href="/diccionario" className="w-full block">
                    <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white">
                      Consultar Diccionario
                    </Button>
                  </Link>
                </div>
              </div>
            </GradientCard>
          </div>

          {/* Tarjeta 4 */}
          <div className="h-56 md:h-72">
            <GradientCard>
              <div className="h-full flex flex-col p-3 md:p-4">
                <div className="flex items-center justify-center mb-4">
                  <History className="mr-2 h-6 w-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Historial de Sueños
                  </h3>
                </div>
                <p className="text-gray-300 text-center mb-6">
                  Revisa todos tus sueños anteriores y sus interpretaciones.
                </p>
                <div className="mt-auto">
                  <Link href="/historial" className="w-full block">
                    <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white">
                      Ver Historial
                    </Button>
                  </Link>
                </div>
              </div>
            </GradientCard>
          </div>
        </div>

        {/* Sección del Asistente de IA */}
        <div className="w-full max-w-8xl mx-auto mt-20 mb-12" id="asistente-ia">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-blue-500/20 shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/aidream.png" 
                alt="Ai Dreamer Logo" 
                className="h-24 w-24 mr-3 object-contain"
              />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
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
