"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Download, ExternalLink, Quote } from "lucide-react"

export default function LibroFreud() {
  // URL del PDF (esto sería reemplazado por la URL real del libro)
  const pdfUrl = "https://ejemplo.com/la-interpretacion-de-los-suenos.pdf"

  // Función para abrir el PDF
  const abrirPdf = () => {
    window.open(pdfUrl, "_blank")
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">La Interpretación de los Sueños</h1>

      <div className="max-w-3xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Obra de Sigmund Freud
            </CardTitle>
            <CardDescription>
              Publicada originalmente en 1899, esta obra revolucionó la comprensión de los sueños
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-64 bg-muted rounded-md flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground" />
                </div>
              </div>

              <div className="md:w-2/3 space-y-4">
                <p>
                  "La Interpretación de los Sueños" (Die Traumdeutung) es considerada la obra maestra de Sigmund Freud y
                  uno de los textos fundamentales del psicoanálisis.
                </p>
                <p>
                  En este libro, Freud presenta su teoría de que los sueños son una forma de realización de deseos
                  reprimidos y desarrolla métodos para interpretar su significado oculto.
                </p>
                <p>
                  Freud distingue entre el contenido manifiesto (lo que recordamos del sueño) y el contenido latente (su
                  significado oculto), y explica los mecanismos del "trabajo del sueño": condensación, desplazamiento,
                  representabilidad y elaboración secundaria.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={abrirPdf} className="w-full md:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Acceder al PDF del Libro
            </Button>
          </CardFooter>
        </Card>

        <Tabs defaultValue="citas" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="citas">Citas Célebres</TabsTrigger>
            <TabsTrigger value="conceptos">Conceptos Clave</TabsTrigger>
            <TabsTrigger value="impacto">Impacto Cultural</TabsTrigger>
          </TabsList>

          <TabsContent value="citas" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Quote className="mr-2 h-5 w-5" />
                  Citas de la Obra
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="border-l-4 border-primary pl-4 py-2">
                    <p className="italic">"Los sueños son la vía regia hacia el inconsciente."</p>
                  </li>
                  <li className="border-l-4 border-primary pl-4 py-2">
                    <p className="italic">
                      "La interpretación de los sueños es, en realidad, el camino real hacia el conocimiento de las
                      actividades inconscientes de la mente."
                    </p>
                  </li>
                  <li className="border-l-4 border-primary pl-4 py-2">
                    <p className="italic">"Todo sueño es, en último término, la realización de un deseo."</p>
                  </li>
                  <li className="border-l-4 border-primary pl-4 py-2">
                    <p className="italic">"Los sueños son los guardianes del dormir, no sus perturbadores."</p>
                  </li>
                  <li className="border-l-4 border-primary pl-4 py-2">
                    <p className="italic">"El sueño nunca se ocupa de nimiedades."</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conceptos" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Conceptos Fundamentales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Contenido Manifiesto vs. Contenido Latente</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      El contenido manifiesto es lo que recordamos del sueño, mientras que el contenido latente es su
                      significado oculto, revelado a través de la interpretación.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium">Trabajo del Sueño</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Procesos que transforman los pensamientos latentes en el contenido manifiesto:
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                      <li>Condensación: múltiples ideas representadas por una sola imagen</li>
                      <li>Desplazamiento: transferencia de intensidad psíquica de una idea a otra</li>
                      <li>Representabilidad: transformación de pensamientos en imágenes visuales</li>
                      <li>Elaboración secundaria: intento de dar coherencia lógica al sueño</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium">Realización de Deseos</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Según Freud, todos los sueños representan la realización de un deseo reprimido, aunque a veces de
                      forma distorsionada o simbólica.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium">Simbolismo Onírico</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Ciertos objetos o acciones en los sueños tienen significados simbólicos universales, especialmente
                      relacionados con la sexualidad.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="impacto" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Impacto Cultural</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    "La Interpretación de los Sueños" revolucionó la comprensión de la mente humana y tuvo un profundo
                    impacto en diversos campos:
                  </p>

                  <div>
                    <h3 className="font-medium">Psicología y Psiquiatría</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Estableció las bases del psicoanálisis y transformó la práctica clínica, introduciendo nuevos
                      métodos terapéuticos basados en la interpretación de sueños.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium">Arte y Literatura</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Influyó profundamente en movimientos como el surrealismo y cambió la forma en que los artistas y
                      escritores representaban la mente humana y los sueños.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium">Cultura Popular</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Los conceptos freudianos sobre los sueños se han incorporado al lenguaje cotidiano y han influido
                      en el cine, la televisión y otros medios.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium">Críticas y Evolución</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Aunque muchas de las teorías específicas de Freud han sido cuestionadas por la neurociencia
                      moderna, su enfoque en el significado psicológico de los sueños sigue siendo relevante.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center">
          <a
            href="https://es.wikipedia.org/wiki/La_interpretaci%C3%B3n_de_los_sue%C3%B1os"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary hover:underline"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Más información sobre la obra
          </a>
        </div>
      </div>
    </div>
  )
}
