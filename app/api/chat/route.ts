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

    const { messages } = await request.json();
    
    console.log('Mensajes recibidos:', JSON.stringify(messages, null, 2));
    console.log(`Iniciando solicitud a OpenAI con el modelo ${openAIConfig.model}...`);
    
    const completion = await openai.chat.completions.create({
      model: openAIConfig.model,
      messages: messages,
      temperature: openAIConfig.temperature,
      max_tokens: openAIConfig.maxTokens,
    }, {
      timeout: openAIConfig.timeout
    });

    console.log('Respuesta de OpenAI recibida exitosamente');

    return NextResponse.json({ 
      message: completion.choices[0]?.message?.content || 'No se pudo generar una respuesta.'
    });
    
  } catch (error: any) {
    // Manejo mejorado de errores
    const { error: errorMessage, status } = handleApiError(error);
    
    return NextResponse.json(
      { error: errorMessage },
      { status }
    );
  }
}
