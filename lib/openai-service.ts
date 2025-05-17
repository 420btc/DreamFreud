import { openAIConfig } from './openai-config';

// URL base de la API
const API_URL = '/api/chat';

// Interfaz para los mensajes del chat
export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Función genérica para llamar a la API
async function callChatAPI(messages: any[]): Promise<string> {
  try {
    console.log('Enviando mensajes a la API:', JSON.stringify(messages, null, 2));
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      body: JSON.stringify({ 
        messages,
        model: 'gpt-4o-mini' // Asegurando que usamos el modelo correcto
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Error en la respuesta de la API:', errorData);
      throw new Error(errorData.error || 'Error en la respuesta del servidor');
    }

    const data = await response.json();
    console.log('Respuesta recibida de la API:', data);
    
    return data.message || data.choices?.[0]?.message?.content || 'No se pudo generar una respuesta.';
  } catch (error: any) {
    console.error('Error al llamar a la API:', error);
    return `Lo siento, hubo un error al procesar tu solicitud. Por favor, verifica tu conexión e inténtalo de nuevo.`;
  }
}

// Función para analizar un sueño usando OpenAI
export async function analizarSueno(sueno: string, historial: Message[] = []): Promise<string> {
  // Creamos el mensaje del sistema que define el comportamiento del asistente
  const systemMessage: Message = {
    role: 'system',
    content: `Eres un experto en interpretación de sueños con conocimientos en diversas corrientes psicológicas. 
    Analiza el sueño proporcionado considerando múltiples perspectivas interpretativas. 
    Identifica símbolos y patrones significativos, explorando tanto su posible relación con el inconsciente 
    como con experiencias y emociones cotidianas. 
    Ofrece interpretaciones reflexivas que inviten a la introspección, 
    manteniendo un equilibrio entre profundidad y accesibilidad.`
  };

  // Preparamos los mensajes para la API
  const messages = [
    systemMessage,
    ...historial,
    { role: 'user' as const, content: `Analiza este sueño: ${sueno}` }
  ];

  return callChatAPI(messages);
}

// Función para mantener una conversación con el asistente
export async function conversarConAsistente(mensaje: string, historial: Message[] = []): Promise<string> {
  try {
    // Mensaje del sistema para guiar el comportamiento del asistente
    const systemMessage: Message = {
      role: 'system',
      content: `Eres un experto en interpretación de sueños que combina perspectivas psicológicas modernas con elementos del psicoanálisis. 
      Al analizar los sueños, considera tanto el simbolismo personal como los arquetipos universales. 
      Ofrece interpretaciones reflexivas que ayuden al soñador a explorar posibles significados, 
      conectando elementos del sueño con emociones y experiencias de la vida cotidiana. 
      Sé respetuoso, abierto a múltiples interpretaciones y evita ser excesivamente clínico o reduccionista. No satures o repitas palabras.`
    };

    // Agregamos el mensaje del sistema solo si no hay historial
    const mensajes: Message[] = historial.length > 0 
      ? [...historial, { role: 'user', content: mensaje }]
      : [systemMessage, { role: 'user', content: mensaje }];

    console.log('Mensajes a enviar a la API:', JSON.stringify(mensajes, null, 2));
    
    // Llamamos a la API con los mensajes
    const respuesta = await callChatAPI(mensajes);
    
    return respuesta;
  } catch (error) {
    console.error('Error en conversarConAsistente:', error);
    return 'Lo siento, hubo un error al procesar tu mensaje. Por favor, inténtalo de nuevo más tarde.';
  }
}
