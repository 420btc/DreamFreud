"use client";

import { useState, useRef, useEffect } from "react";
import { Send, X, Loader2, Bot, Sparkles } from "lucide-react";
import { conversarConAsistente } from "@/lib/openai-service";
import { useChatStorage } from "@/hooks/useChatStorage";
import { ChatMessage, APIMessage } from "@/types/chat";

// Componente Typewriter para el efecto de escritura
type TypewriterProps = {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
};

const Typewriter = ({ text, speed = 20, onComplete, className = '' }: TypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= text.length) {
      onComplete?.();
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, currentIndex, speed, onComplete]);

  return <span className={className}>{displayText}</span>;
};

// Componente de carga
const Loader = () => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

// Componente AIMessageBar
export const AIMessageBar = () => {
  // Estados iniciales
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [conversationHistory, setConversationHistory] = useState<APIMessage[]>([]);
  
  // Usar el hook de almacenamiento de chat
  const { messages, addMessage, setMessages, isLoading: isLoadingMessages } = useChatStorage('current_user');
  
  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setInput("");

    // Agregar el mensaje del usuario al chat con marca de tiempo
    addMessage({ 
      content: userMessage,
      role: 'user'
    });
    
    // Actualizar el historial de la conversación
    const newHistory = [
      ...conversationHistory, 
      { role: 'user' as const, content: userMessage }
    ];
    setConversationHistory(newHistory);

    // Manejar la respuesta de la IA
    await handleAIResponse(userMessage);
  };

  // Función para guardar la conversación en el historial
  const guardarEnHistorial = (mensajes: ChatMessage[]) => {
    try {
      // Extraer el mensaje del usuario (asumimos que es el primer mensaje)
      const mensajeUsuario = mensajes.find(m => m.role === 'user');
      const respuestaIA = mensajes.find(m => m.role === 'assistant' && !m.isLoading);
      
      if (!mensajeUsuario || !respuestaIA) return;
      
      // Crear un nuevo objeto de sueño
      const nuevoSueno = {
        id: Date.now().toString(),
        fecha: new Date().toISOString(),
        texto: mensajeUsuario.content,
        titulo: `Sueño del ${new Date().toLocaleDateString()}`,
        mensajes: mensajes.map(m => ({
          role: m.role,
          content: m.content,
          timestamp: m.timestamp
        })),
        notas: respuestaIA.content.substring(0, 100) + '...' // Resumen de la respuesta
      };
      
      // Obtener sueños existentes
      const suenosExistentes = JSON.parse(localStorage.getItem('suenos') || '[]');
      
      // Agregar el nuevo sueño al principio del array
      const nuevosSuenos = [nuevoSueno, ...suenosExistentes];
      
      // Guardar en localStorage
      localStorage.setItem('suenos', JSON.stringify(nuevosSuenos));
      
      console.log('Conversación guardada en el historial');
    } catch (error) {
      console.error('Error al guardar en el historial:', error);
    }
  };

  // Función para manejar la respuesta de la IA
  const handleAIResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    try {
      // Primero, obtenemos los mensajes actuales
      const currentMessages = [...messages];
      
      // Agregamos un mensaje de carga mientras se procesa
      const loadingMessage: ChatMessage = { 
        content: "Analizando tu sueño...", 
        role: 'assistant',
        isLoading: true,
        timestamp: new Date().toISOString()
      };
      
      // Actualizamos los mensajes con el indicador de carga
      const messagesWithLoading = [...currentMessages, loadingMessage];
      setMessages(messagesWithLoading);
      
      // Obtenemos la respuesta de la IA
      const aiResponse = await conversarConAsistente(userMessage, conversationHistory);
      
      // Actualizamos el historial de la conversación con la respuesta de la IA
      setConversationHistory(prev => [
        ...prev,
        { role: 'assistant', content: aiResponse }
      ]);
      
      // Creamos el mensaje de respuesta
      const responseMessage: ChatMessage = {
        content: aiResponse,
        role: 'assistant',
        timestamp: new Date().toISOString()
      };
      
      // Actualizamos los mensajes manteniendo los mensajes del usuario
      // y reemplazando el mensaje de carga por la respuesta real
      const finalMessages = [
        ...currentMessages, // Mantenemos los mensajes anteriores (incluyendo el del usuario)
        responseMessage    // Añadimos la respuesta de la IA
      ];
      
      setMessages(finalMessages);
      
      // Guardamos la conversación en el historial
      guardarEnHistorial(finalMessages);
      
      return aiResponse;
    } catch (error) {
      console.error('Error al obtener respuesta de la IA:', error);
      
      // Reemplazamos el mensaje de carga con un mensaje de error
      const errorMessage: ChatMessage = {
        content: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
        role: 'assistant'
      };
      
      const updatedMessages = messages
        .filter((msg: ChatMessage) => !msg.isLoading)
        .concat(errorMessage);
      
      setMessages(updatedMessages);
      
      throw error;
    } finally {
      setIsTyping(false);
    }
  };

  // Efecto para hacer scroll al final de los mensajes
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const initialLoad = useRef(true);

  useEffect(() => {
    // No hacer scroll en la carga inicial
    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }

    // Solo hacer scroll si el usuario ha interactuado o hay nuevos mensajes
    if (hasUserInteracted || messages.length > 0) {
      const timer = setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [messages, isTyping, hasUserInteracted]);

  // Marcar que el usuario ha interactuado cuando escribe o envía un mensaje
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setHasUserInteracted(true);
  };

  // Función para formatear la hora
  const formatTime = (timestamp?: string | number) => {
    if (!timestamp) return '';
    try {
      const date = new Date(timestamp);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (e) {
      return '';
    }
  };

  // Renderizar mensajes
  const renderMessage = (message: ChatMessage, index: number) => {
    const isUser = message.role === 'user';
    const isLastMessage = index === messages.length - 1;
    const isLastAIReply = !isUser && isLastMessage;
    
    return (
      <div 
        key={`${message.role}-${index}-${message.timestamp}`} 
        className={`flex w-full ${isUser ? 'justify-end' : 'justify-center'} mb-4 px-2 sm:px-4`}
      >
        <div 
          className={`relative w-full px-4 py-3 sm:px-6 sm:py-3 rounded-lg ${
            isUser 
              ? 'bg-black/80 text-white rounded-br-lg max-w-full sm:max-w-2xl' 
              : 'bg-black/80 text-white rounded-lg border border-gray-700 shadow-lg mx-auto max-w-full sm:max-w-2xl'
          }`}
        >
          {!isUser && !message.isLoading && (
            <div className="text-xs font-medium text-gray-300 mb-1">
              Ai Dreamer
            </div>
          )}
          {isUser && !message.isLoading && (
            <div className="text-xs font-medium text-blue-400 mb-1">
              Tú
            </div>
          )}
          {message.isLoading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              <span className="text-sm">Pensando...</span>
            </div>
          ) : (
            <div className="relative">
              <p className="pr-8 pb-4 whitespace-pre-wrap">
                {isLastAIReply ? (
                  <Typewriter 
                    text={message.content} 
                    speed={10} 
                    onComplete={() => {
                      // Scroll al finalizar la escritura
                      setTimeout(() => {
                        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  />
                ) : (
                  message.content
                )}
              </p>
              <span className="absolute bottom-0 right-2 text-xs opacity-70">
                {formatTime(message.timestamp)}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const clearChat = () => {
    setMessages([]);
    setConversationHistory([]);
  };

  return (
    <div className="flex flex-col h-full w-full max-w-full overflow-hidden">
      {/* Encabezado */}
      <div className="flex items-center justify-between p-4 sm:p-6 border-b">
        <div className="flex items-center">
          <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2" />
          <h2 className="text-base sm:text-lg font-semibold">Ai Dreamer</h2>
        </div>
        <button 
          className="text-gray-500 hover:text-gray-700 p-1"
          onClick={clearChat}
          title="Limpiar conversación"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Área de mensajes */}
      <div className="flex-1 overflow-y-auto w-full px-0 sm:px-4 py-2" style={{ maxHeight: 'calc(100vh - 140px)' }}>
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full min-h-[60vh] sm:min-h-[400px] text-center text-gray-400 px-2">
            <Sparkles className="h-16 w-16 sm:h-24 sm:w-24 mb-4 sm:mb-6 text-blue-200" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-2">¿Sueñas con algo interesante?</h3>
            <p className="text-base sm:text-lg max-w-2xl px-2">Cuéntame sobre tu sueño y te ayudaré a analizarlo.</p>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4 w-full">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}-${message.timestamp}`} className="message-container w-full">
                {renderMessage(message, index)}
              </div>
            ))}
          </div>
        )}
        <div ref={messagesEndRef} className="h-4" />
      </div>

      {/* Área de entrada */}
      <div className="px-2 py-3 sm:px-4 border-t bg-black w-full">
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex items-center gap-1 sm:gap-2 w-full"
        >
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onFocus={() => setHasUserInteracted(true)}
            placeholder="Escribe tu mensaje..."
            className="flex-1 px-3 sm:px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm sm:text-base min-w-0"
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className={`p-1.5 sm:p-2 rounded-full flex-shrink-0 ${
              input.trim() && !isTyping
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
            }`}
            title={!input.trim() ? "Escribe un mensaje" : "Enviar mensaje"}
          >
            {isTyping ? (
              <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
            ) : (
              <Send className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIMessageBar;
