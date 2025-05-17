export interface ChatMessage {
  content: string;
  role: 'user' | 'assistant' | 'system';
  isLoading?: boolean;
  timestamp?: number;
}

export interface APIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}
