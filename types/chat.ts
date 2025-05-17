export interface ChatMessage {
  content: string;
  role: 'user' | 'assistant' | 'system';
  isLoading?: boolean;
  timestamp?: string; // Cambiado a string para ISO format
}

export interface APIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: string; // Añadido timestamp opcional
}
