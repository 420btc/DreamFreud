"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, BookOpen } from "lucide-react"
import { simbolosInterpretados, obtenerCategorias, buscarPorTermino, type SimboloFreudiano } from "@/lib/simbolos-freudianos"

export default function DiccionarioSuenos() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("")
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas")
  const categorias = ["Todas", ...obtenerCategorias()]

  // Filtrar símbolos por término de búsqueda y categoría
  const simbolosFiltrados = (): SimboloFreudiano[] => {
    let resultados: SimboloFreudiano[] = [...simbolosInterpretados]

    if (terminoBusqueda) {
      resultados = buscarPorTermino(terminoBusqueda)
    }

    if (categoriaSeleccionada !== "Todas") {
      resultados = resultados.filter((simbolo) => simbolo.categoria === categoriaSeleccionada)
    }

    return resultados
  }

  const resultados = simbolosFiltrados()

  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Diccionario de Símbolos Oníricos</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Buscar Símbolos
          </CardTitle>
          <CardDescription>Explora el significado de los símbolos según la teoría freudiana</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="busqueda">Buscar por palabra</Label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="busqueda"
                  type="search"
                  placeholder="Ej: agua, casa, volar..."
                  className="pl-8"
                  value={terminoBusqueda}
                  onChange={(e) => setTerminoBusqueda(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="categoria">Filtrar por categoría</Label>
              <Select value={categoriaSeleccionada} onValueChange={setCategoriaSeleccionada}>
                <SelectTrigger id="categoria">
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categorias.map((categoria) => (
                    <SelectItem key={categoria} value={categoria}>
                      {categoria}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Resultados</h2>
          <p className="text-sm text-muted-foreground">
            {resultados.length} {resultados.length === 1 ? "símbolo" : "símbolos"} encontrados
          </p>
        </div>

        {resultados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resultados.map((simbolo: SimboloFreudiano, index: number) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{simbolo.simbolo}</CardTitle>
                  {simbolo.categoria && (
                    <CardDescription className="text-xs">Categoría: {simbolo.categoria}</CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">{simbolo.interpretacion}</p>
                  {simbolo.simbolo.includes('Sombrero') && (
                    <div className="flex justify-center mt-2">
                      <img 
                        src="/iconos/hat.png" 
                        alt="Ícono de sombrero" 
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                  )}
                  {simbolo.simbolo.includes('Reloj') && (
                    <div className="flex justify-center mt-2">
                      <img 
                        src="/iconos/clock.png" 
                        alt="Ícono de reloj" 
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                  )}
                  {simbolo.simbolo.includes('Cueva') && (
                    <div className="flex justify-center mt-2">
                      <img 
                        src="/iconos/cave.png" 
                        alt="Ícono de cueva" 
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                  )}
                  {(simbolo.simbolo.includes('templo') || simbolo.simbolo.includes('Templo') || simbolo.simbolo.includes('iglesia') || simbolo.simbolo.includes('Iglesia')) && (
                    <div className="flex justify-center mt-2">
                      <img 
                        src="/iconos/temple.png" 
                        alt="Ícono de templo" 
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                  )}
                  {(simbolo.simbolo.includes('jardín') || simbolo.simbolo.includes('Jardín') || simbolo.simbolo.includes('jardin') || simbolo.simbolo.includes('Jardin')) && (
                    <div className="flex justify-center mt-2">
                      <img 
                        src="/iconos/jardin.png" 
                        alt="Ícono de jardín" 
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                  )}
                  {(simbolo.simbolo.includes('caballo') || simbolo.simbolo.includes('Caballo') || simbolo.simbolo.includes('yegua') || simbolo.simbolo.includes('Yegua')) && (
                    <div className="flex justify-center mt-2">
                      <img 
                        src="/iconos/horse.png" 
                        alt="Ícono de caballo" 
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                  )}
                  {(simbolo.simbolo.includes('pájaro') || simbolo.simbolo.includes('Pájaro') || simbolo.simbolo.includes('pajaro') || simbolo.simbolo.includes('Pajaro')) && (
                    <div className="flex justify-center mt-2">
                      <img 
                        src="/iconos/bird.png" 
                        alt="Ícono de pájaro" 
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No se encontraron símbolos</h3>
            <p className="text-muted-foreground">Intenta con otros términos de búsqueda o selecciona otra categoría.</p>
          </div>
        )}
      </div>
    </div>
  )
}
