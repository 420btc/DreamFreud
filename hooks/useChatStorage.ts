import { useState, useEffect } from 'react';
import { ChatMessage } from '@/types/chat';

export function useChatStorage(userId: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Exponer setMessages para que pueda ser usado por otros componentes

  // Cargar mensajes del localStorage al montar el componente
  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem(`chat_messages_${userId}`);
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      }
    } catch (error) {
      console.error('Error al cargar mensajes del localStorage:', error);
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  // Guardar mensajes en el localStorage cuando cambian
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(`chat_messages_${userId}`, JSON.stringify(messages));
      } catch (error) {
        console.error('Error al guardar mensajes en localStorage:', error);
      }
    }
  }, [messages, userId, isLoading]);

  const addMessage = (message: Omit<ChatMessage, 'timestamp'>) => {
    setMessages(prev => [...prev, { ...message, timestamp: Date.now() }]);
  };

  const clearMessages = () => {
    setMessages([]);
    localStorage.removeItem(`chat_messages_${userId}`);
  };

  return {
    messages,
    addMessage,
    setMessages, // Exponer setMessages
    clearMessages,
    isLoading
  };
}
