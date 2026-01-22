"use client"

import { Button } from "@/components/ui/button"
import { Book, Brain, History, Moon, Bot } from "lucide-react"
import Link from "next/link"
import { TituloConSparkles } from "@/components/ui/TituloConSparkles"
import AIMessageBarWrapper from '@/components/ui/AIMessageBarWrapper';
import { HeroSection } from "@/components/hero-odyssey";

export default function Introduccion() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section */}
      <div className="relative flex-shrink-0">
        <HeroSection />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10 flex-grow">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-4 px-2 sm:px-0">
          {/* Sección 1 */}
          <div className="h-auto min-h-[200px] md:h-72 flex flex-col p-3 sm:p-4">
            <div className="flex flex-col items-center justify-center mb-3 sm:mb-4">
              <Book className="h-6 w-6 text-gray-400 mb-2" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">
                Registra tus Sueños
              </h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base text-center mb-4 sm:mb-6 px-1">
              Mantén un diario de tus sueños para descubrir patrones y significados ocultos.
            </p>
            <div className="mt-2 sm:mt-auto">
              <Link href="/registrar" className="w-full block">
                <Button variant="dream" className="w-full text-sm sm:text-base py-1 sm:py-2">
                  Registrar un Sueño
                </Button>
              </Link>
            </div>
          </div>

          {/* Sección 2 */}
          <div className="h-auto min-h-[200px] md:h-72 flex flex-col p-3 sm:p-4">
            <div className="flex flex-col items-center justify-center mb-3 sm:mb-4">
              <Brain className="h-6 w-6 text-purple-400 mb-2" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">
                Analiza tus Sueños
              </h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base text-center mb-4 sm:mb-6 px-1">
              Descubre el significado de tus sueños según las teorías más comunes, o incluso las más raras.
            </p>
            <div className="mt-2 sm:mt-auto">
              <Link href="/analizar" className="w-full block">
                <Button variant="dream" className="w-full text-sm sm:text-base py-1 sm:py-2">
                  Analizar Último Sueño
                </Button>
              </Link>
            </div>
          </div>

          {/* Sección 3 */}
          <div className="h-auto min-h-[200px] md:h-72 flex flex-col p-3 sm:p-4">
            <div className="flex flex-col items-center justify-center mb-3 sm:mb-4">
              <Moon className="h-6 w-6 text-blue-400 mb-2" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">
                Diccionario de Símbolos
              </h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base text-center mb-4 sm:mb-6 px-1">
              Explora el significado de los símbolos oníricos según Freud.
            </p>
            <div className="mt-2 sm:mt-auto">
              <Link href="/diccionario" className="w-full block">
                <Button variant="dream" className="w-full text-sm sm:text-base py-1 sm:py-2">
                  Consultar Diccionario
                </Button>
              </Link>
            </div>
          </div>

          {/* Sección 4 */}
          <div className="h-auto min-h-[200px] md:h-72 flex flex-col p-3 sm:p-4">
            <div className="flex flex-col items-center justify-center mb-3 sm:mb-4">
              <History className="h-6 w-6 text-green-400 mb-2" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">
                Historial de Sueños
              </h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base text-center mb-4 sm:mb-6 px-1">
              Revisa todos tus sueños anteriores y sus interpretaciones.
            </p>
            <div className="mt-2 sm:mt-auto">
              <Link href="/historial" className="w-full block">
                <Button variant="dream" className="w-full text-sm sm:text-base py-1 sm:py-2">
                  Ver Historial
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Sección del Asistente de IA */}
        <div className="w-full max-w-8xl mx-auto mt-20 mb-12" id="asistente-ia">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="flex items-center justify-center mb-6 relative z-10">
              <img
                src="/aidream.png"
                alt="Ai Dreamer Logo"
                className="h-24 w-24 mr-3 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />
              <h3 className="text-3xl font-bold text-white drop-shadow-md">
                Asistente de Sueños
              </h3>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto text-center relative z-10">
              Explora el significado de tus sueños con la ayuda de nuestra IA entrenada en la teoría psicoanalítica de Freud.
              Haz preguntas sobre símbolos, interpretaciones o conceptos freudianos.
            </p>
            <div className="bg-black/60 backdrop-blur-md rounded-xl overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] border border-white/5 min-h-[400px] flex flex-col relative z-10">
              <AIMessageBarWrapper />
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center relative z-10">
              No se guarda ningún mensaje en la base de datos. La IA puede cometer errores.
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center w-full">
          <div className="mt-10 text-center font-serif italic text-xl tracking-wide text-white/90 space-y-2">
            <p>Sueños que danzan en la noche callada,</p>
            <p>tejen promesas en luz plateada.</p>
            <p>Alas del alma, sin fin ni adiós,</p>
            <p>vuelan los sueños donde eres voz.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
