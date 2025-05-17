// Configuración para OpenAI
export const openAIConfig = {
  // Esta clave ya no se usa directamente, se accede a través de la API de Next.js
  apiKey: '',
  model: 'gpt-4o-mini', // Modelo más rápido y económico
  temperature: 0.7, // Mismo nivel de creatividad
  maxTokens: 2000, // Mantenemos el mismo límite de tokens
  timeout: 30000, // 30 segundos de tiempo de espera
  // Nota: gpt-4o-mini es más rápido y económico, ideal para respuestas rápidas
}
