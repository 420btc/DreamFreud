import React, { useEffect } from 'react';

interface HighlightedTextProps {
  text: string;
  input: string;
  onHighlightComplete?: () => void;
}

// Función para normalizar texto (eliminar tildes y convertir a minúsculas)
const normalizeText = (str: string): string => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

// Función para calcular la similitud entre dos cadenas (distancia de Levenshtein)
const similarity = (s1: string, s2: string): number => {
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length <= s2.length ? s1 : s2;
  
  if (longer.length === 0) return 1.0;
  
  // Si la diferencia de longitud es significativa, considerar como no coincidente
  if (longer.length - shorter.length > 2) return 0.0;
  
  // Si una es subcadena de la otra, alta probabilidad de ser la misma palabra
  if (longer.includes(shorter)) return 0.8;
  
  // Si comparten el mismo prefijo de 3 caracteres, considerar como posible coincidencia
  if (shorter.length >= 3 && longer.startsWith(shorter.substring(0, 3))) return 0.7;
  
  return 0.0;
};

const HighlightedText: React.FC<HighlightedTextProps> = ({ text, input, onHighlightComplete }) => {
  useEffect(() => {
    if (onHighlightComplete) {
      onHighlightComplete();
    }
  }, [onHighlightComplete]);

  const highlightWords = () => {
    if (!input?.trim()) {
      return <span className="text-white">{text}</span>;
    }

    // Obtener palabras del input (mínimo 3 caracteres)
    const wordsToHighlight = Array.from(
      new Set(
        input
          .toLowerCase()
          .split(/\s+/)
          .map(word => word.replace(/[^\wáéíóúüñ]/g, ''))
          .filter(word => word.length >= 3) // Solo palabras de 3 o más caracteres
      )
    );

    if (wordsToHighlight.length === 0) {
      return <span className="text-white">{text}</span>;
    }

    // Normalizar las palabras a buscar
    const normalizedWords = wordsToHighlight.map(normalizeText);
    
    // Dividir el texto en palabras completas (incluyendo signos de puntuación adyacentes)
    const wordRegex = /(\w+|[^\w\s]+|\s+)/g;
    const parts = [];
    let match;
    let lastIndex = 0;
    
    // Dividir el texto en palabras y signos de puntuación
    while ((match = wordRegex.exec(text)) !== null) {
      parts.push({
        text: match[0],
        isWord: /^\w+$/.test(match[0]) && match[0].length >= 3
      });
      lastIndex = wordRegex.lastIndex;
    }
    
    // Añadir cualquier texto restante
    if (lastIndex < text.length) {
      parts.push({
        text: text.substring(lastIndex),
        isWord: false
      });
    }
    
    return (
      <span className="text-white">
        {parts.map((part, i) => {
          if (!part.text.trim()) return <span key={i}>{part.text}</span>;
          
          // Solo procesar palabras completas
          if (part.isWord) {
            const normalizedWord = normalizeText(part.text);
            
            // Buscar coincidencias exactas o muy similares
            const match = normalizedWords.some(term => 
              normalizedWord === term || 
              similarity(normalizedWord, term) > 0.7
            );
            
            if (match) {
              return (
                <span 
                  key={i} 
                  className="font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"
                >
                  {part.text}
                </span>
              );
            }
          }
          
          return <span key={i}>{part.text}</span>;
        })}
      </span>
    );
  };

  return <div className="whitespace-pre-wrap">{highlightWords()}</div>;
};

export default HighlightedText;
