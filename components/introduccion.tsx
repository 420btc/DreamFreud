"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Book, Brain, History, Moon } from "lucide-react"
import Link from "next/link"
import { TituloConSparkles } from "@/components/ui/TituloConSparkles"

export default function Introduccion() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <div className="max-w-3xl w-full text-center space-y-8 py-8">

        {/* Título con efecto sparkles */}
        <div className="mb-4">
          <TituloConSparkles />
        </div>
        <h2 className="text-2xl font-semibold text-muted-foreground">Basado en la obra de Sigmund Freud</h2>

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
                <Link href="/registrar">
                  <Button className="w-full">Registrar un Sueño</Button>
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
                <Link href="/analizar">
                  <Button className="w-full">Analizar Último Sueño</Button>
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
                <Link href="/diccionario">
                  <Button className="w-full">Consultar Diccionario</Button>
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
                <Link href="/historial">
                  <Button className="w-full">Ver Historial</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-muted-foreground mb-4">
            "Los sueños son la vía regia hacia el inconsciente." - Sigmund Freud
          </p>
        </div>
      </div>
    </div>
  );
}
