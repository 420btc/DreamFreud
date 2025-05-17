// Configuración para OpenAI
export const openAIConfig = {
  // Esta clave ya no se usa directamente, se accede a través de la API de Next.js
  apiKey: '',
  model: 'gpt-3.5-turbo', // Modelo estándar y ampliamente compatible
  temperature: 0.7,
  maxTokens: 2000, // Límite razonable para respuestas
  timeout: 30000, // 30 segundos de tiempo de espera
}
