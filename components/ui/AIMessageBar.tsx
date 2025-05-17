"use client";

import { useState, useRef, useEffect } from "react";
import { Send, X, Loader2, Bot, Sparkles } from "lucide-react";
import { conversarConAsistente } from "@/lib/openai-service";
import { useChatStorage } from "@/hooks/useChatStorage";
import { ChatMessage, APIMessage } from "@/types/chat";

// Componente de carga
const Loader = () => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
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

    // Agregar el mensaje del usuario al chat
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
        timestamp: Date.now()
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
        timestamp: Date.now()
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
  useEffect(() => {
    // Usar un pequeño retraso para asegurar que el DOM se haya actualizado
    const timer = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    
    return () => clearTimeout(timer);
  }, [messages, isTyping]); // También activar cuando cambie el estado de isTyping

  // Renderizar mensajes
  const renderMessage = (message: ChatMessage, index: number) => {
    const isUser = message.role === 'user';
    
    return (
      <div 
        key={index} 
        className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
      >
        <div 
          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
            isUser 
              ? 'bg-blue-600 text-white rounded-br-none' 
              : 'bg-black text-white rounded-bl-none'
          }`}
        >
          {message.isLoading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              <span>{message.content}</span>
            </div>
          ) : (
            <p>{message.content}</p>
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
    <div className="flex flex-col h-full">
      {/* Encabezado */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <Bot className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-lg font-semibold">Ai Dreamer</h2>
        </div>
        <button 
          className="text-gray-500 hover:text-gray-700"
          onClick={clearChat}
          title="Limpiar conversación"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Área de mensajes */}
      <div className="flex-1 overflow-y-auto p-4" style={{ maxHeight: 'calc(100vh - 180px)' }}>
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center text-gray-400">
            <Sparkles className="h-24 w-24 mb-6 text-blue-200" />
            <h3 className="text-3xl font-bold mb-4">¿Sueñas con algo interesante?</h3>
            <p className="text-xl max-w-2xl">Cuéntame sobre tu sueño y te ayudaré a analizarlo.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}-${message.timestamp}`} className="message-container">
                {renderMessage(message, index)}
              </div>
            ))}
          </div>
        )}
        <div ref={messagesEndRef} className="h-4" />
      </div>

      {/* Área de entrada */}
      <div className="p-4 border-t bg-black">
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu mensaje..."
            className="flex-1 px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className={`p-2 rounded-full ${
              input.trim() && !isTyping
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
            }`}
            title={!input.trim() ? "Escribe un mensaje" : "Enviar mensaje"}
          >
            {isTyping ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIMessageBar;
