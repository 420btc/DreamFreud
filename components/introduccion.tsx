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
                <Button className="w-full text-sm sm:text-base py-1 sm:py-2 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white">
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
                <Button className="w-full text-sm sm:text-base py-1 sm:py-2 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white">
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
                <Button className="w-full text-sm sm:text-base py-1 sm:py-2 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white">
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
                <Button className="w-full text-sm sm:text-base py-1 sm:py-2 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white">
                  Ver Historial
                </Button>
              </Link>
            </div>
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
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center w-full">
          <div className="relative z-10">
            <img 
              src="/dreamer.png" 
              alt="Ai Dreamer Logo"
              className="h-[190px] w-[190px] object-contain"
            />
          </div>
          <div className="mt-10 text-center italic font-bold space-y-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
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
