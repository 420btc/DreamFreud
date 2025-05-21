import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generarTituloAutomatico(texto: string): string {
  if (!texto || typeof texto !== 'string') return 'Sueño sin título';
  
  // Limpiar el texto y dividir en palabras
  const palabras = texto
    .toLowerCase()
    .replace(/[^\w\sáéíóúüñ]/g, '') // Eliminar signos de puntuación
    .split(/\s+/)
    .filter(palabra => palabra.length > 3); // Filtrar palabras muy cortas

  if (palabras.length === 0) return 'Sueño sin título';

  // Contar frecuencia de palabras
  const frecuencia: Record<string, number> = {};
  palabras.forEach(palabra => {
    frecuencia[palabra] = (frecuencia[palabra] || 0) + 1;
  });

  // Ordenar palabras por frecuencia
  const palabrasOrdenadas = Object.entries(frecuencia)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  // Tomar las 3 palabras más frecuentes (o menos si no hay suficientes)
  const palabrasClave = palabrasOrdenadas.slice(0, 3);

  // Unir las palabras con mayúscula inicial
  const titulo = palabrasClave
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(' ');

  return titulo || 'Sueño sin título';
}
