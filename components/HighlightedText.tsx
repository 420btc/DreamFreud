import React, { useEffect } from 'react';

interface HighlightedTextProps {
  text: string;
  input: string;
  onHighlightComplete?: () => void;
}

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
          .filter(word => word.length >= 3)
      )
    );

    if (wordsToHighlight.length === 0) {
      return <span className="text-white">{text}</span>;
    }

    // Crear un patrón de búsqueda seguro
    const pattern = new RegExp(
      `(${wordsToHighlight
        .map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
        .join('|')})`,
      'gi'
    );

    // Dividir el texto en partes y resaltar coincidencias
    const parts = text.split(pattern);
    
    return (
      <span className="text-white">
        {parts.map((part, i) => {
          if (!part) return null;
          
          const isMatch = wordsToHighlight.some(word => 
            part.toLowerCase() === word.toLowerCase()
          );
          
          if (isMatch) {
            const color = i % 2 === 0 ? 'text-blue-400' : 'text-purple-400';
            return (
              <span key={i} className={`${color} font-bold`}>
                {part}
              </span>
            );
          }
          
          return <span key={i}>{part}</span>;
        })}
      </span>
    );
  };

  return <div className="whitespace-pre-wrap">{highlightWords()}</div>;
};

export default HighlightedText;
