// Definición de tipos
type Emocion = 'felicidad' | 'tristeza' | 'miedo' | 'enojo' | 'sorpresa' | 'asombro' | 'calma' | 'ansiedad' | 'culpa' | 'vergüenza' | 'otro';

interface Sueno {
  id: string;
  fecha: string;
  titulo?: string;
  contenido?: string;
  texto?: string;
  notas?: string;
  emocion?: string;
  etiquetas?: string[];
  interpretacion?: string;
  simbolosEncontrados?: Array<{
    simbolo: string;
    significado: string;
  }>;
  analisisFreudiano?: string;
  contexto?: string;
  createdAt: number;
  updatedAt?: number;
}

interface FiltroSuenos {
  fechaInicio?: string;
  fechaFin?: string;
  emocion?: string;
  etiquetas?: string[];
  busqueda?: string;
}

interface EstadisticasSuenos {
  total: number;
  porEmocion: Record<string, number>;
  etiquetasFrecuentes: Array<{ etiqueta: string; count: number }>;
  frecuenciaMensual: Array<{ mes: string; count: number }>;
  longitudPromedio: number;
}

interface AnalisisSueno {
  interpretacion: string;
  simbolos: Array<{
    simbolo: string;
    significado: string;
    frecuencia: number;
  }>;
  emocionPredominante: string;
  temasComunes: string[];
  fechaAnalisis: string;
}

// Exportar tipos
export type { Sueno, Emocion, FiltroSuenos, EstadisticasSuenos, AnalisisSueno };

// Exportar valores por defecto
export const defaultSueno: Sueno = {
  id: '',
  fecha: new Date().toISOString(),
  titulo: '',
  contenido: '',
  texto: '',
  notas: '',
  createdAt: Date.now()
};

export const defaultEstadisticas: EstadisticasSuenos = {
  total: 0,
  porEmocion: {},
  etiquetasFrecuentes: [],
  frecuenciaMensual: [],
  longitudPromedio: 0
};

export const defaultAnalisis: AnalisisSueno = {
  interpretacion: '',
  simbolos: [],
  emocionPredominante: 'otro',
  temasComunes: [],
  fechaAnalisis: new Date().toISOString()
};