"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, User, Bot, Loader2 } from "lucide-react"
import { conversarConAsistente, type Message } from "@/lib/openai-service"

const STOP_WORDS = new Set([
  "el", "la", "los", "las", "un", "una", "unos", "unas", "y", "o", "pero", "si", "de", "del", "al", "en", "por", "para", "con", "sin", "sobre", "mi", "tu", "su", "me", "te", "se", "nos", "que", "quien", "cual", "este", "esta", "ese", "esa", "aquel", "aquella", "ser", "estar", "haber", "hacer", "ir", "venir", "tener", "porque", "cuando", "donde", "como", "todo", "nada", "algo", "alguien", "nadie", "cada", "otro", "otra", "otros", "otras", "mismo", "misma", "mismos", "mismas", "tan", "tanto", "tanta", "tantos", "tantas", "muy", "mas", "menos", "poco", "poca", "pocos", "pocas", "mucho", "mucha", "muchos", "muchas", "bastante", "demasiado", "entonces", "luego", "pues", "asi", "bien", "mal", "siempre", "nunca", "jamas", "hoy", "ayer", "mañana", "ahora", "antes", "despues", "aqui", "ahi", "alli", "alla", "cerca", "lejos", "arriba", "abajo", "dentro", "fuera", "encima", "debajo", "delante", "detras", "izquierda", "derecha", "soy", "eres", "es", "somos", "son", "estoy", "estas", "esta", "estamos", "estan", "tengo", "tienes", "tiene", "tenemos", "tienen", "hago", "haces", "hace", "hacemos", "hacen", "voy", "vas", "va", "vamos", "van", "era", "eras", "eramos", "eran", "estaba", "estabas", "estabamos", "estaban", "tenia", "tenias", "teniamos", "tenian", "hacia", "hacias", "haciamos", "hacian", "iba", "ibas", "ibamos", "iban", "fui", "fuiste", "fue", "fuimos", "fueron", "estuve", "estuviste", "estuvo", "estuvimos", "estuvieron", "tuve", "tuviste", "tuvo", "tuvimos", "tuvieron", "hice", "hiciste", "hizo", "hicimos", "hicieron", "quisiera", "gustaria", "podria", "puedo", "puedes", "puede", "podemos", "pueden", "saber", "decir", "hablar", "contar", "explicar", "entender", "comprender", "significa", "significado", "interpretacion", "interpretar", "analisis", "analizar", "hola", "adios", "gracias", "favor", "bueno", "malo", "mejor", "peor", "gran", "grande", "pequeño", "importante", "interesante", "sueño", "soñar", "soñe"
]);

interface ChatAnalisisProps {
  suenoContexto: string
  analisisInicial?: string | null
}

export default function ChatAnalisis({ suenoContexto, analisisInicial }: ChatAnalisisProps) {
  const [mensajes, setMensajes] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [cargando, setCargando] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  // Inicializar chat con contexto
  useEffect(() => {
    const mensajesIniciales: Message[] = []
    
    // Mensaje de sistema implícito (ya se maneja en openai-service, pero aquí guardamos el historial local)
    // Agregamos el sueño como contexto inicial del usuario, pero oculto o marcado como contexto
    
    if (analisisInicial) {
      // Si hay un análisis previo, simulamos que es la primera respuesta del asistente
      // Primero "simulamos" que el usuario envió el sueño
      mensajesIniciales.push({
        role: "user",
        content: `He tenido este sueño: "${suenoContexto}". ¿Podrías ayudarme a analizarlo más a fondo?`
      })
      
      mensajesIniciales.push({
        role: "assistant",
        content: analisisInicial
      })
    } else {
       // Si no hay análisis, iniciamos con el sueño
       mensajesIniciales.push({
        role: "user",
        content: `He tenido este sueño: "${suenoContexto}". Quiero analizarlo.`
      })
    }
    
    setMensajes(mensajesIniciales)
  }, [suenoContexto, analisisInicial])

  // Auto-scroll al final
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]')
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }, [mensajes])

  const enviarMensaje = async () => {
    if (!input.trim() || cargando) return

    const nuevoMensajeUsuario: Message = {
      role: "user",
      content: input
    }

    const nuevosMensajes = [...mensajes, nuevoMensajeUsuario]
    setMensajes(nuevosMensajes)
    setInput("")
    setCargando(true)

    try {
      // Llamar a la API
      const respuesta = await conversarConAsistente(input, nuevosMensajes)
      
      const nuevoMensajeAsistente: Message = {
        role: "assistant",
        content: respuesta
      }

      setMensajes(prev => [...prev, nuevoMensajeAsistente])
    } catch (error) {
      console.error("Error al conversar:", error)
    } finally {
      setCargando(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      enviarMensaje()
    }
  }

  const renderizarMensajeUsuario = (texto: string) => {
    // 1. Limpiar y tokenizar para análisis
    const palabras = texto.split(/\s+/);
    
    // 2. Identificar candidatos (filtrar stop words y cortos)
    const candidatos = palabras
      .map(p => ({ original: p, limpio: p.toLowerCase().replace(/[^\wáéíóúüñ]/g, '') }))
      .filter(p => p.limpio.length > 3 && !STOP_WORDS.has(p.limpio));

    // 3. Seleccionar top 3 por longitud (heurística)
    const unicos = Array.from(new Set(candidatos.map(c => c.limpio)));
    const topWords = unicos
      .sort((a, b) => b.length - a.length)
      .slice(0, 3);
      
    const topWordsSet = new Set(topWords);

    // 4. Renderizar preservando espacios y puntuación
    // Dividimos por palabras manteniendo separadores
    const partes = texto.split(/(\s+|[.,;?!¡¿()]+)/);
    
    return partes.map((parte, index) => {
      const limpia = parte.toLowerCase().replace(/[^\wáéíóúüñ]/g, '');
      // Verificamos si la parte limpia coincide con alguna de las top words
      // y si es una palabra completa (no un espacio o signo)
      if (limpia.length > 0 && topWordsSet.has(limpia)) {
        return <span key={index} className="text-blue-200 font-extrabold underline decoration-blue-400 decoration-2 underline-offset-2">{parte}</span>;
      }
      return <span key={index}>{parte}</span>;
    });
  };

  return (
    <Card className="flex flex-col h-[600px] bg-black/40 backdrop-blur-xl border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_0_40px_rgba(0,0,0,0.5)] text-white">
      <CardHeader className="border-b border-white/5 bg-black/20">
        <CardTitle className="flex items-center gap-2 text-white">
          <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <Bot className="h-4 w-4 text-white" />
          </div>
          Chat con IA Freudiana
        </CardTitle>
        <CardDescription className="text-white/60">
          Profundiza en el significado de tu sueño conversando con el asistente.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden p-0">
        <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
          <div className="space-y-6">
            {mensajes.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  msg.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <Avatar className="h-8 w-8 border border-white/10 shadow-lg">
                  {msg.role === "user" ? (
                    <>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback className="bg-white/10 text-white"><User className="h-4 w-4" /></AvatarFallback>
                    </>
                  ) : (
                    <>
                      <AvatarImage src="/iconos/bird.png" />
                      <AvatarFallback className="bg-white/10 text-white"><Bot className="h-4 w-4" /></AvatarFallback>
                    </>
                  )}
                </Avatar>
                <div
                  className={`rounded-2xl p-4 max-w-[85%] text-sm shadow-md backdrop-blur-sm ${
                    msg.role === "user"
                      ? "bg-black/60 text-white border border-white/10 rounded-tr-sm"
                      : "bg-white/5 text-white border border-white/5 rounded-tl-sm"
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">
                    {msg.role === "user" ? renderizarMensajeUsuario(msg.content) : msg.content}
                  </p>
                </div>
              </div>
            ))}
            {cargando && (
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8 border border-white/10">
                  <AvatarFallback className="bg-white/10 text-white"><Bot className="h-4 w-4" /></AvatarFallback>
                </Avatar>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 rounded-tl-sm">
                  <Loader2 className="h-4 w-4 animate-spin text-white/70" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-2 border-t border-white/5 bg-black/20">
        <div className="flex w-full items-center space-x-2 mt-4">
          <Input
            placeholder="Pregunta sobre tu sueño..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={cargando}
            className="flex-1 bg-white/5 border-white/10 text-white placeholder-white/30 focus-visible:ring-white/20 focus-visible:border-white/20 rounded-full px-4 py-6"
          />
          <Button 
            size="icon" 
            onClick={enviarMensaje} 
            disabled={cargando || !input.trim()}
            className="rounded-full h-12 w-12 bg-white text-black hover:bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            <Send className="h-5 w-5" />
            <span className="sr-only">Enviar</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
