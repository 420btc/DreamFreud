"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, HelpCircle, CheckCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type MecanismoSueño = 'condensacion' | 'desplazamiento' | 'simbolizacion' | 'elaboracion'

const definicionesMecanismos = {
  condensacion: {
    titulo: "Condensación",
    descripcion: "Varios pensamientos o imágenes se combinan en un solo elemento del sueño. Por ejemplo, una persona en tu sueño podría tener rasgos de varias personas que conoces.",
    ejemplo: "Soñar con un jefe que tiene la voz de tu padre y el aspecto de un profesor antiguo.",
    pregunta: "¿Hay algún elemento en tu sueño que parezca combinar características de varias personas, objetos o situaciones?"
  },
  desplazamiento: {
    titulo: "Desplazamiento",
    descripcion: "La importancia emocional se transfiere de un elemento importante a otro que parece insignificante. La carga emocional está 'desplazada'.",
    ejemplo: "Soñar que pierdes un bolígrafo y sentir una angustia intensa, cuando en realidad estás preocupado por perder tu trabajo.",
    pregunta: "¿Hay alguna emoción en tu sueño que parezca desproporcionada en relación con los eventos que ocurren?"
  },
  simbolizacion: {
    titulo: "Simbolización",
    descripcion: "Pensamientos o conflictos abstractos se representan a través de imágenes concretas. Los símbolos a menudo tienen significados universales pero también personales.",
    ejemplo: "Soñar que estás desnudo en público podría simbolizar sentimientos de vulnerabilidad o exposición.",
    pregunta: "¿Hay imágenes o acciones en tu sueño que podrían representar algo más allá de su significado literal?"
  },
  elaboracion: {
    titulo: "Elaboración Secundaria",
    descripcion: "La mente intenta dar coherencia lógica al contenido del sueño, creando una narrativa que enmascara el verdadero significado inconsciente.",
    ejemplo: "Después de un sueño confuso, al despertar inventas una explicación que lo hace parecer más lógico de lo que fue.",
    pregunta: "¿Hay partes del sueño que parezcan intentar 'explicar' o 'justificar' elementos que de otra manera no tendrían sentido?"
  }
}

export default function TrabajoSuenoInteractivo({ suenoId, contenidoSueno }: { suenoId: string, contenidoSueno: string }) {
  const [mecanismoActual, setMecanismoActual] = useState<MecanismoSueño>('condensacion')
  const [respuestas, setRespuestas] = useState<Record<MecanismoSueño, string>>({
    condensacion: '',
    desplazamiento: '',
    simbolizacion: '',
    elaboracion: ''
  })
  const [mostrarAnalisis, setMostrarAnalisis] = useState(false)

  const mecanismos: MecanismoSueño[] = ['condensacion', 'desplazamiento', 'simbolizacion', 'elaboracion']
  const indiceActual = mecanismos.indexOf(mecanismoActual)
  const esUltimoPaso = indiceActual === mecanismos.length - 1
  const esPrimerPaso = indiceActual === 0

  const manejarSiguiente = () => {
    if (esUltimoPaso) {
      setMostrarAnalisis(true)
    } else {
      setMecanismoActual(mecanismos[indiceActual + 1])
    }
  }

  const manejarAnterior = () => {
    if (!esPrimerPaso) {
      setMecanismoActual(mecanismos[indiceActual - 1])
    }
  }

  const actualizarRespuesta = (valor: string) => {
    setRespuestas(prev => ({
      ...prev,
      [mecanismoActual]: valor
    }))
  }

  const generarAnalisis = () => {
    // Aquí podríamos implementar un análisis más sofisticado con IA
    let analisis = "## Análisis del Trabajo del Sueño\n\n"
    
    analisis += "Basado en tus respuestas, aquí tienes un análisis de los mecanismos del sueño que podrían estar presentes:\n\n"
    
    Object.entries(respuestas).forEach(([mecanismo, respuesta]) => {
      if (respuesta.trim()) {
        analisis += `### ${definicionesMecanismos[mecanismo as MecanismoSueño].titulo}\n`
        analisis += `- **Tu observación**: ${respuesta}\n\n`
      }
    })
    
    return analisis
  }

  if (mostrarAnalisis) {
    return (
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Análisis del Trabajo del Sueño</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: generarAnalisis().replace(/\n/g, '<br/>') }} />
          <div className="mt-6 flex justify-between">
            <Button variant="outline" onClick={() => setMostrarAnalisis(false)}>
              Volver al análisis
            </Button>
            <Button onClick={() => {
              setMostrarAnalisis(false)
              setMecanismoActual('condensacion')
            }}>
              Analizar otro sueño
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const mecanismo = definicionesMecanismos[mecanismoActual]

  return (
    <Card className="mt-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Trabajo del Sueño Interactivo</CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-5 w-5 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent className="max-w-sm">
                <p>Este módulo te guía a través de los mecanismos del sueño según Freud: condensación, desplazamiento, simbolización y elaboración secundaria.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div className="flex justify-between pt-4">
          {mecanismos.map((m, index) => (
            <div key={m} className="flex flex-col items-center">
              <div 
                className={`h-8 w-8 rounded-full flex items-center justify-center ${
                  index < indiceActual 
                    ? 'bg-green-100 text-green-600' 
                    : index === indiceActual 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                }`}
              >
                {index < indiceActual ? <CheckCircle className="h-5 w-5" /> : index + 1}
              </div>
              <span className="text-xs mt-1 text-center">
                {definicionesMecanismos[m].titulo.split(' ')[0]}
              </span>
            </div>
          ))}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              {mecanismo.titulo}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-sm">
                    <p className="font-medium">{mecanismo.titulo}:</p>
                    <p>{mecanismo.descripcion}</p>
                    <p className="mt-2 text-sm text-muted-foreground">Ejemplo: {mecanismo.ejemplo}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </h3>
            <p className="text-muted-foreground mt-1">{mecanismo.descripcion}</p>
            <div className="mt-2 p-3 bg-muted/50 rounded-md text-sm">
              <p className="font-medium">Ejemplo:</p>
              <p className="italic">"{mecanismo.ejemplo}"</p>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="respuesta" className="block text-sm font-medium">
              {mecanismo.pregunta}
            </label>
            <textarea
              id="respuesta"
              rows={4}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="Escribe tu respuesta aquí..."
              value={respuestas[mecanismoActual]}
              onChange={(e) => actualizarRespuesta(e.target.value)}
            />
          </div>

          <div className="flex justify-between pt-4">
            <Button 
              variant="outline" 
              onClick={manejarAnterior}
              disabled={esPrimerPaso}
            >
              Anterior
            </Button>
            <Button 
              onClick={manejarSiguiente}
              disabled={!respuestas[mecanismoActual].trim()}
            >
              {esUltimoPaso ? 'Ver análisis' : 'Siguiente'}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
