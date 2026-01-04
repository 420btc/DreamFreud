import { openAIConfig } from './openai-config';

// URL base de la API
const API_URL = '/api/chat';

// Interfaz para los mensajes del chat
export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  name?: string;
  timestamp?: string; // Nueva propiedad para la marca de tiempo
}

// Interfaz para la respuesta de la API
interface ApiResponse {
  message: string;
  error?: string;
}

// Función genérica para llamar a la API
async function callChatAPI(messages: Message[]): Promise<string> {
  try {
    console.log('Enviando mensajes a la API:', JSON.stringify(messages, null, 2));
    
    const userId = 'user_' + Math.random().toString(36).substr(2, 9); // Generar un ID de usuario único
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      body: JSON.stringify({ 
        messages,
        model: openAIConfig.model,
        temperature: openAIConfig.temperature,
        max_tokens: openAIConfig.maxTokens,
        frequency_penalty: openAIConfig.frequency_penalty,
        presence_penalty: openAIConfig.presence_penalty,
        user: userId, // Identificador único del usuario
        stream: false // Habilitar si quieres usar streaming
      }),
    });

    const responseData = await response.json();
    
    if (!response.ok) {
      console.error('Error en la respuesta de la API:', responseData);
      throw new Error(responseData.error || 'Error en la respuesta del servidor');
    }

    console.log('Respuesta recibida de la API:', responseData);
    
    // Asegurarse de que tenemos un mensaje de respuesta
    if (!responseData.message) {
      throw new Error('La respuesta de la API no contiene un mensaje válido');
    }
    
    return responseData.message;
  } catch (error: any) {
    console.error('Error al llamar a la API:', error);
    return `Lo siento, hubo un error al procesar tu solicitud: ${error.message || 'Error desconocido'}. Por favor, verifica tu conexión e inténtalo de nuevo.`;
  }
}

// Función para analizar un sueño usando OpenAI
// Función para analizar símbolos freudianos específicos
// Interfaz para la respuesta de análisis de símbolos
interface AnalisisSimbolos {
  interpretaciones: Record<string, string>;
  analisisGeneral?: string;
}

export async function analizarSimbolosFreudianos(simbolos: string[], textoCompleto?: string): Promise<AnalisisSimbolos> {
  try {
    if (!simbolos || simbolos.length === 0) {
      return { interpretaciones: {} };
    }

    // Crear el mensaje para la IA
    let mensajeUsuario = `Analiza los siguientes símbolos desde una perspectiva psicoanalítica freudiana. 
    Para cada símbolo, proporciona una interpretación concisa pero significativa (100-200 caracteres):
    ${simbolos.join('\n- ')}`;
    
    // Si se proporciona texto completo, pedir también un análisis general
    if (textoCompleto) {
      mensajeUsuario += `\n\nAdemás, proporciona un análisis general del sueño (200-300 caracteres) que integre estos símbolos en una interpretación coherente, considerando la teoría freudiana y posibles conexiones con el inconsciente.`;
    }

    const messages: Message[] = [
      SYSTEM_MESSAGE_SIMBOLOS,
      { role: 'user' as const, content: mensajeUsuario }
    ];

    // Llamar a la API
    const respuesta = await callChatAPI(messages);
    
    // Procesar la respuesta para extraer las interpretaciones de cada símbolo y el análisis general
    const resultado: AnalisisSimbolos = { interpretaciones: {} };
    const lineas = respuesta.split('\n').filter(linea => linea.trim() !== '');
    
    let simboloActual = '';
    let interpretacionActual = '';
    let enAnalisisGeneral = false;
    let analisisGeneral = '';
    
    for (const linea of lineas) {
      // Buscar el inicio del análisis general
      if (linea.toLowerCase().includes('análisis general') || 
          linea.toLowerCase().includes('análisis del sueño') ||
          linea.toLowerCase().includes('interpretación general')) {
        enAnalisisGeneral = true;
        if (simboloActual && interpretacionActual) {
          resultado.interpretaciones[simboloActual] = interpretacionActual.trim();
          simboloActual = '';
          interpretacionActual = '';
        }
        continue;
      }
      
      // Si estamos en el análisis general
      if (enAnalisisGeneral) {
        analisisGeneral += ' ' + linea.trim();
        continue;
      }
      
      // Procesar símbolos
      if (linea.trim().endsWith(':')) {
        // Guardar el símbolo anterior si existe
        if (simboloActual && interpretacionActual) {
          resultado.interpretaciones[simboloActual] = interpretacionActual.trim();
          interpretacionActual = '';
        }
        simboloActual = linea.replace(':', '').trim();
      } else if (simboloActual) {
        // Acumular la interpretación
        interpretacionActual += ' ' + linea.trim();
      }
    }
    
    // Asegurarse de guardar el último símbolo procesado
    if (simboloActual && interpretacionActual) {
      resultado.interpretaciones[simboloActual] = interpretacionActual.trim();
    }
    
    // Si hay análisis general, limpiarlo y guardarlo
    if (analisisGeneral) {
      resultado.analisisGeneral = analisisGeneral
        .replace(/análisis general[:\s]*/i, '')
        .replace(/interpretación general[:\s]*/i, '')
        .trim();
    }
    
    return resultado;
  } catch (error) {
    console.error('Error al analizar símbolos con IA:', error);
    // En caso de error, devolver un objeto con la estructura esperada
    return { interpretaciones: {} };
  }
}

export async function analizarSueno(sueno: string, historial: Message[] = []): Promise<string> {
  // Creamos el mensaje del sistema que define el comportamiento del asistente
  const systemMessage: Message = {
    role: 'system',
    content: `Eres un experto profesional en interpretación de sueños con conocimientos en diversas corrientes psicológicas incluida la psicoanálisis. 
    Analiza el sueño proporcionado considerando múltiples perspectivas interpretativas. 
    Identifica símbolos y patrones significativos, explorando tanto su posible relación con el inconsciente 
    como con experiencias y emociones cotidianas. 
    Ofrece interpretaciones reflexivas que inviten a la introspección, análisis y reflexión, 
    manteniendo un equilibrio entre profundidad y accesibilidad. Al final del mensaje deja algo en referencia a Ai Dreamer para continuar su uso. El mensaje debe de ser como minimo de 300 caracteres y un maximo de 3000 caracteres.
    Mantén el contexto de la conversación y haz referencia al sueño original cuando sea relevante.
    Sé respetuoso, abierto a múltiples interpretaciones y evita ser excesivamente clínico o reduccionista.`
  };

  // Preparamos los mensajes para la API
  const messages = [
    systemMessage,
    ...historial,
    { role: 'user' as const, content: `Analiza este sueño: ${sueno}` }
  ];

  return callChatAPI(messages);
}

// Mensaje del sistema para análisis de símbolos freudianos
const SYSTEM_MESSAGE_SIMBOLOS: Message = {
  role: 'system',
  content: `Eres un experto en psicoanálisis freudiano con amplio conocimiento en interpretación de sueños. 
  Tu tarea es analizar símbolos específicos que aparecen en los sueños desde una perspectiva freudiana. 
  Proporciona una interpretación detallada de cada símbolo, considerando su posible relación con el inconsciente, 
  deseos reprimidos, conflictos internos y su conexión con la vida del soñador.
  
  Características de tu análisis:
  - Profundidad psicológica: Explora múltiples capas de significado
  - Conexión con la teoría freudiana: Incluye conceptos como el inconsciente, el ello/yo/superyó, etc.
  - Aplicación práctica: Cómo podría relacionarse con la vida del soñador
  - Lenguaje claro: Explicaciones accesibles pero profesionales
  - Extensión: Entre 100 y 200 caracteres por símbolo
  
  Estructura sugerida:
  1. Explicación general del símbolo en el psicoanálisis
  2. Posibles significados inconscientes
  3. Cómo podría relacionarse con la experiencia del soñador`
};

// Mensaje del sistema para guiar el comportamiento del asistente
const SYSTEM_MESSAGE: Message = {
  role: 'system',
  content: `Eres un experto en interpretación de sueños que combina perspectivas psicológicas modernas con elementos del psicoanálisis. 
  Al analizar los sueños, considera tanto el simbolismo personal como los arquetipos universales. 
  Ofrece interpretaciones reflexivas que ayuden al soñador a explorar posibles significados, 
  conectando elementos del sueño con emociones y experiencias de la vida cotidiana. 
  Mantén el contexto de la conversación y haz referencia al sueño original cuando sea relevante.
  Sé respetuoso, abierto a múltiples interpretaciones y evita ser excesivamente clínico o reduccionista. 
  No satures o repitas palabras. Y menciona a Ai Dreamer como asistente.`
};

// Función para mantener una conversación con el asistente
export async function conversarConAsistente(mensaje: string, historial: Message[] = []): Promise<string> {
  try {
    // Preparamos los mensajes para la API
    let mensajes: Message[] = [];
    
    // Si es el primer mensaje, añadimos el mensaje del sistema
    if (historial.length === 0) {
      mensajes = [SYSTEM_MESSAGE];
    } 
    // Si ya hay historial, nos aseguramos de que el primer mensaje sea el del sistema
    else if (historial[0].role !== 'system') {
      mensajes = [SYSTEM_MESSAGE, ...historial];
    } else {
      mensajes = [...historial];
    }
    
    // Añadimos el nuevo mensaje del usuario
    mensajes.push({ role: 'user', content: mensaje });
    
    // Limitar el historial para no exceder el límite de tokens
    // Mantenemos el mensaje del sistema y los últimos 50 mensajes para maximizar el contexto
    if (mensajes.length > 51) { // 1 (sistema) + 50 mensajes
      mensajes = [
        mensajes[0], // Mantener el mensaje del sistema
        ...mensajes.slice(-50) // Mantener los últimos 50 mensajes
      ];
    }

    console.log('Mensajes a enviar a la API:', JSON.stringify(mensajes, null, 2));
    
    // Llamamos a la API con los mensajes
    const respuesta = await callChatAPI(mensajes);
    
    return respuesta;
  } catch (error) {
    console.error('Error en conversarConAsistente:', error);
    return 'Lo siento, hubo un error al procesar tu mensaje. Por favor, inténtalo de nuevo más tarde.';
  }
}
