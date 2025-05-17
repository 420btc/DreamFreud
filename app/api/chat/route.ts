import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { openAIConfig } from '@/lib/openai-config';

// Configuración de OpenAI con manejo de errores mejorado
if (!process.env.OPENAI_API_KEY) {
  console.error('ERROR: OPENAI_API_KEY no está configurada en las variables de entorno');
  throw new Error('OPENAI_API_KEY no está configurada');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: openAIConfig.timeout,
});

// Función para manejar errores de la API
function handleApiError(error: any) {
  console.error('Error en la API de OpenAI:', error);
  
  if (error.code === 'insufficient_quota') {
    return {
      error: 'Has excedido tu cuota de la API de OpenAI. Por favor, verifica tu cuenta y tu saldo.',
      status: 429
    };
  }
  
  if (error.code === 'rate_limit_exceeded') {
    return {
      error: 'Has excedido el límite de solicitudes. Por favor, espera un momento antes de intentar de nuevo.',
      status: 429
    };
  }
  
  if (error.response) {
    return {
      error: `Error de OpenAI: ${error.response.data?.error?.message || 'Error desconocido'}`,
      status: error.response.status
    };
  }
  
  return {
    error: error.message || 'Error desconocido al procesar la solicitud',
    status: 500
  };
}

interface ChatRequest {
  messages: Array<{
    role: 'user' | 'assistant' | 'system';
    content: string;
    name?: string;
  }>;
  model?: string;
  temperature?: number;
  max_tokens?: number;
  frequency_penalty?: number;
  presence_penalty?: number;
  user?: string;
  stream?: boolean;
}

export async function POST(request: Request) {
  try {
    // Verificar que tenemos la clave de API
    if (!process.env.OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY no está configurada');
      return NextResponse.json(
        { error: 'Error de configuración del servidor: Falta la clave de API de OpenAI' },
        { status: 500 }
      );
    }

    const requestData: ChatRequest = await request.json();
    const { 
      messages, 
      model = openAIConfig.model, 
      temperature = openAIConfig.temperature,
      max_tokens = openAIConfig.maxTokens,
      frequency_penalty = openAIConfig.frequency_penalty,
      presence_penalty = openAIConfig.presence_penalty,
      user = 'anonymous_user',
      stream = false
    } = requestData;
    
    console.log('Mensajes recibidos:', JSON.stringify(messages, null, 2));
    console.log(`Iniciando solicitud a OpenAI con el modelo ${model}...`);
    
    const completion = await openai.chat.completions.create({
      model,
      messages: messages.map(({ role, content, name }) => ({
        role,
        content,
        ...(name && { name })
      })),
      temperature,
      max_tokens,
      frequency_penalty,
      presence_penalty,
      user, // Incluir el ID de usuario para seguimiento
      stream // Usar streaming si está habilitado
    }, {
      timeout: openAIConfig.timeout
    });

    console.log('Respuesta de OpenAI recibida exitosamente');
    
    // Manejar tanto respuestas normales como en streaming
    let responseContent = 'No se pudo generar una respuesta.';
    
    if (stream) {
      // Si es streaming, devolver el stream directamente
      const stream = completion as any;
      return new Response(stream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      });
    } else {
      // Respuesta normal
      const completionData = completion as any;
      responseContent = completionData.choices?.[0]?.message?.content || responseContent;
      
      // Registrar la respuesta para depuración
      console.log('Respuesta generada:', responseContent.substring(0, 100) + '...');

      return NextResponse.json({ 
        message: responseContent
      });
    }
    
  } catch (error: any) {
    // Manejo mejorado de errores
    console.error('Error en el endpoint /api/chat:', error);
    const { error: errorMessage, status } = handleApiError(error);
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status }
    );
  }
}
