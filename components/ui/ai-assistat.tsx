"use client";

import { useState, useRef, useEffect } from "react";
import { Send, X, Loader2, Bot, Sparkles } from "lucide-react";
import { analizarSueno, conversarConAsistente } from "@/lib/openai-service";

// Interfaz para los mensajes del chat
interface ChatMessage {
  text: string;
  isUser: boolean;
  isLoading?: boolean;
}

// Interfaz para los mensajes de la API
interface APIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Componente de carga
const Loader = () => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

// Componente AIMessageBar
const AIMessageBar = () => {
  // Estados iniciales
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [conversationHistory, setConversationHistory] = useState<APIMessage[]>([]);
  
  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Función para manejar la respuesta de la IA
  const handleAIResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    try {
      // Agregamos un mensaje de carga mientras se procesa
      setMessages(prev => [...prev, { text: "Analizando tu sueño...", isUser: false, isLoading: true }]);
      
      // Obtenemos la respuesta de la IA
      const aiResponse = await conversarConAsistente(userMessage, conversationHistory);
      
      // Actualizamos el historial de la conversación
      setConversationHistory(prev => [
        ...prev,
        { role: 'user', content: userMessage },
        { role: 'assistant', content: aiResponse }
      ]);
      
      // Reemplazamos el mensaje de carga con la respuesta real
      setMessages(prev => [
        ...prev.slice(0, -1), // Eliminamos el mensaje de carga
        { text: aiResponse, isUser: false }
      ]);
      
    } catch (error) {
      console.error('Error al obtener respuesta de la IA:', error);
      // Reemplazamos el mensaje de carga con un mensaje de error
      setMessages(prev => [
        ...prev.slice(0, -1),
        { 
          text: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, inténtalo de nuevo más tarde.', 
          isUser: false 
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    const userMessage = input.trim();
    if (!userMessage) return;
    
    // Agregar mensaje del usuario a la interfaz
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInput("");
    
    // Procesar el mensaje y obtener respuesta de la IA
    await handleAIResponse(userMessage);
  };

  const clearChat = () => {
    setMessages([]);
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  // Manejar la tecla Enter para enviar el mensaje
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-background rounded-xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Sparkles className="text-white h-5 w-5" />
          <h2 className="text-white font-semibold text-lg">Asistente de Sueños</h2>
        </div>
        <button 
          onClick={clearChat}
          className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
          title="Limpiar conversación"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      {/* Messages container */}
      <div className="flex-1 p-4 overflow-y-auto bg-background/95">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Sparkles className="h-12 w-12 text-indigo-400 mb-4" />
            <h3 className="text-indigo-200 text-xl mb-2">Explica tu sueño de la forma mas real</h3>
            <p className="text-slate-400 text-sm max-w-xs">
              Cuanto mas preciso seas mas exacta sera la respuesta
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isUser ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl ${
                    msg.isUser
                      ? "bg-blue-600 text-white rounded-tr-sm"
                      : "bg-muted/50 text-foreground rounded-tl-sm border border-border"
                  } shadow-sm`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-2xl bg-slate-700/60 text-slate-100 rounded-tl-none border border-slate-600/50">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse delay-75"></div>
                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      {/* Input area */}
      <div className={`p-4 border-t ${isFocused ? 'border-blue-500/30' : 'border-border'} bg-background/80 backdrop-blur-sm transition-colors`}>
        <form onSubmit={handleSubmit} className="flex items-end space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Escribe tu pregunta sobre sueños o psicoanálisis..."
              className="w-full p-4 pr-12 rounded-xl border border-border bg-background/80 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
            />
            {input && (
              <button
                type="button"
                onClick={() => setInput("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 hover:text-foreground transition-colors p-1"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex-shrink-0"
          >
            {isTyping ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </button>
        </form>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          La IA puede cometer errores. Verifica la información importante.
        </p>
      </div>
      
      <style>
        {`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        .delay-75 {
          animation-delay: 0.2s;
        }
        
        .delay-150 {
          animation-delay: 0.4s;
        }
        `}
      </style>
    </div>
  );
};

export default AIMessageBar;
