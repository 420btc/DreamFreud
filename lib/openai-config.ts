// Configuración para OpenAI
export const openAIConfig = {
  // Esta clave se obtiene de las variables de entorno
  apiKey: process.env.OPENAI_API_KEY || '',
  model: 'gpt-4o-mini',
  temperature: 0.7,
  maxTokens: 2000,
  timeout: 30000, // 30 segundos de tiempo de espera
  frequency_penalty: 0.5, // Reduce la repetición de frases
  presence_penalty: 0.5, // Fomenta la variedad en las respuestas
}
