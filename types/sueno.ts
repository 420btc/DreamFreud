// Definición de tipos
type Emocion = 'felicidad' | 'tristeza' | 'miedo' | 'enojo' | 'sorpresa' | 'asombro' | 'calma' | 'ansiedad' | 'culpa' | 'vergüenza' | 'confusion' | 'otro';

type TipoSueno = 'normal' | 'lucido' | 'recurrente' | 'pesadilla' | 'profetico' | 'vivido' | 'fragmentado';

interface Sueno {
  id: string;
  fecha: string;
  titulo?: string;
  contenido?: string;
  texto?: string;
  notas?: string;
  emocion?: Emocion;
  tipoSueno?: TipoSueno;
  claridad?: number; // 1-10
  personajes?: string[];
  etiquetas?: string[];
  interpretacion?: string;
  simbolosEncontrados?: Array<{
    simbolo: string;
    significado: string;
  }>;
  analisisFreudiano?: string;
  analisisGuardado?: string; // Análisis guardado por el usuario
  notasAnalisis?: string; // Notas personales del análisis
  contexto?: string;
  createdAt: number;
  updatedAt?: number;
}

interface FiltroSuenos {
  fechaInicio?: string;
  fechaFin?: string;
  emocion?: Emocion;
  tipoSueno?: TipoSueno;
  etiquetas?: string[];
  busqueda?: string;
  claridad?: { min?: number; max?: number };
}

interface EstadisticasSuenos {
  total: number;
  porEmocion: Record<string, number>;
  porTipo: Record<string, number>;
  etiquetasFrecuentes: Array<{ etiqueta: string; count: number }>;
  frecuenciaMensual: Array<{ mes: string; count: number }>;
  longitudPromedio: number;
  claridadPromedio: number;
  rachaDias: number;
  ultimoRegistro?: string;
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

// Constantes útiles
export const TIPOS_SUENO: { value: TipoSueno; label: string; emoji: string }[] = [
  { value: 'normal', label: 'Normal', emoji: '🌙' },
  { value: 'lucido', label: 'Lúcido', emoji: '✨' },
  { value: 'recurrente', label: 'Recurrente', emoji: '🔄' },
  { value: 'pesadilla', label: 'Pesadilla', emoji: '😱' },
  { value: 'profetico', label: 'Profético', emoji: '🔮' },
  { value: 'vivido', label: 'Muy vívido', emoji: '🌈' },
  { value: 'fragmentado', label: 'Fragmentado', emoji: '🧩' },
];

export const EMOCIONES: { value: Emocion; label: string; emoji: string }[] = [
  { value: 'felicidad', label: 'Felicidad', emoji: '😊' },
  { value: 'tristeza', label: 'Tristeza', emoji: '😢' },
  { value: 'miedo', label: 'Miedo', emoji: '😨' },
  { value: 'enojo', label: 'Enojo', emoji: '😠' },
  { value: 'sorpresa', label: 'Sorpresa', emoji: '😮' },
  { value: 'asombro', label: 'Asombro', emoji: '🤩' },
  { value: 'calma', label: 'Calma', emoji: '😌' },
  { value: 'ansiedad', label: 'Ansiedad', emoji: '😰' },
  { value: 'culpa', label: 'Culpa', emoji: '😔' },
  { value: 'vergüenza', label: 'Vergüenza', emoji: '😳' },
  { value: 'confusion', label: 'Confusión', emoji: '😵' },
  { value: 'otro', label: 'Otro', emoji: '🤔' },
];

// Exportar tipos
export type { Sueno, Emocion, TipoSueno, FiltroSuenos, EstadisticasSuenos, AnalisisSueno };

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
  porTipo: {},
  etiquetasFrecuentes: [],
  frecuenciaMensual: [],
  longitudPromedio: 0,
  claridadPromedio: 0,
  rachaDias: 0
};

export const defaultAnalisis: AnalisisSueno = {
  interpretacion: '',
  simbolos: [],
  emocionPredominante: 'otro',
  temasComunes: [],
  fechaAnalisis: new Date().toISOString()
};