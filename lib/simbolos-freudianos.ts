export interface SimboloFreudiano {
  simbolo: string
  interpretacion: string
  categoria?: string
  palabrasClave: string[]
}

// Lista de símbolos freudianos comunes
export const simbolosFreudianos: SimboloFreudiano[] = [
  {
    simbolo: "Agua",
    interpretacion:
      "Representa el nacimiento, la vida intrauterina o puede simbolizar el líquido amniótico. También puede relacionarse con deseos sexuales o la necesidad de purificación.",
    categoria: "Elementos naturales",
    palabrasClave: ["agua", "mar", "océano", "lago", "río", "lluvia", "nadar", "ahogarse", "mojado", "líquido"],
  },
  {
    simbolo: "Casa",
    interpretacion:
      "Simboliza el cuerpo humano y sus diferentes habitaciones pueden representar diferentes aspectos de la psique. También puede representar el útero materno o la seguridad.",
    categoria: "Lugares",
    palabrasClave: ["casa", "hogar", "habitación", "edificio", "mansión", "apartamento", "vivienda", "morada"],
  },
  {
    simbolo: "Caída",
    interpretacion:
      "Puede representar la ansiedad, el miedo al fracaso, o ceder ante una tentación sexual. También puede simbolizar la pérdida de control o el abandono.",
    categoria: "Acciones",
    palabrasClave: ["caer", "caída", "precipicio", "abismo", "desplomarse", "hundirse", "tropezar"],
  },
  {
    simbolo: "Volar",
    interpretacion:
      "Según Freud, volar en sueños suele estar relacionado con deseos sexuales, especialmente en hombres. También puede representar la libertad o el escape de limitaciones.",
    categoria: "Acciones",
    palabrasClave: ["volar", "flotar", "elevarse", "aire", "cielo", "alas", "pájaro", "avión"],
  },
  {
    simbolo: "Dientes",
    interpretacion:
      "La caída de dientes puede simbolizar ansiedad por la castración, miedo a perder potencia sexual, o preocupaciones sobre la apariencia y el envejecimiento.",
    categoria: "Cuerpo",
    palabrasClave: ["dientes", "muela", "caerse los dientes", "perder dientes", "diente", "dentista", "masticar"],
  },
  {
    simbolo: "Escaleras",
    interpretacion:
      "Representan el acto sexual debido a su movimiento rítmico al subir y bajar. También pueden simbolizar la progresión o regresión en la vida.",
    categoria: "Objetos",
    palabrasClave: ["escalera", "escaleras", "subir", "bajar", "escalones", "peldaños"],
  },
  {
    simbolo: "Rey y Reina",
    interpretacion: "Suelen representar a los padres del soñador, especialmente en sueños de la infancia.",
    categoria: "Personas",
    palabrasClave: ["rey", "reina", "monarca", "corona", "trono", "realeza", "reino", "palacio"],
  },
  {
    simbolo: "Serpiente",
    interpretacion:
      "Símbolo fálico por excelencia en la teoría freudiana, representa deseos sexuales, tentación o amenaza sexual.",
    categoria: "Animales",
    palabrasClave: ["serpiente", "víbora", "culebra", "reptil", "anaconda", "boa", "cobra"],
  },
  {
    simbolo: "Túnel",
    interpretacion: "Representa el canal de nacimiento o la vagina, asociado con el nacimiento o el acto sexual.",
    categoria: "Lugares",
    palabrasClave: ["túnel", "pasadizo", "corredor", "pasillo", "caverna", "cueva", "agujero"],
  },
  {
    simbolo: "Fuego",
    interpretacion:
      "Simboliza la pasión sexual, el deseo ardiente o la transformación. También puede representar la destrucción o purificación.",
    categoria: "Elementos naturales",
    palabrasClave: ["fuego", "llama", "incendio", "arder", "quemar", "fogata", "hoguera", "calor"],
  },
  {
    simbolo: "Viaje",
    interpretacion:
      "Puede simbolizar la muerte en la teoría freudiana, o representar un cambio importante en la vida o una transición.",
    categoria: "Acciones",
    palabrasClave: ["viaje", "viajar", "camino", "trayecto", "partir", "destino", "ruta", "travesía"],
  },
  {
    simbolo: "Llave",
    interpretacion:
      "Símbolo fálico que representa la potencia sexual masculina o el acceso a secretos y conocimientos ocultos.",
    categoria: "Objetos",
    palabrasClave: ["llave", "cerradura", "abrir", "cerrar", "puerta", "acceso", "candado"],
  },
  {
    simbolo: "Puente",
    interpretacion:
      "Representa una transición o conexión entre dos estados o aspectos de la personalidad. También puede simbolizar el paso de la vida a la muerte.",
    categoria: "Lugares",
    palabrasClave: ["puente", "cruzar", "pasar", "conectar", "unir", "río", "abismo"],
  },
  {
    simbolo: "Desnudez",
    interpretacion: "Puede representar vulnerabilidad, vergüenza, exhibicionismo o deseo de ser visto y admirado.",
    categoria: "Estados",
    palabrasClave: ["desnudo", "desnudez", "sin ropa", "expuesto", "vergüenza", "exhibición", "descubierto"],
  },
  {
    simbolo: "Persecución",
    interpretacion: "Simboliza la huida de deseos reprimidos o aspectos de uno mismo que no se quieren reconocer.",
    categoria: "Acciones",
    palabrasClave: ["perseguir", "persecución", "huir", "escapar", "correr", "atrapar", "cazar", "seguir"],
  },
  {
    simbolo: "Examen",
    interpretacion:
      "Representa ansiedad por el rendimiento, miedo al fracaso o preocupación por ser juzgado por los demás.",
    categoria: "Situaciones",
    palabrasClave: ["examen", "prueba", "test", "evaluación", "estudiar", "suspender", "aprobar", "escuela"],
  },
  {
    simbolo: "Zapatos",
    interpretacion: "Pueden simbolizar los genitales femeninos o representar actitudes hacia la sexualidad.",
    categoria: "Objetos",
    palabrasClave: ["zapato", "zapatos", "calzado", "bota", "zapatilla", "pie", "caminar"],
  },
  {
    simbolo: "Árbol",
    interpretacion: "Símbolo fálico que representa la vida, el crecimiento y la potencia sexual masculina.",
    categoria: "Elementos naturales",
    palabrasClave: ["árbol", "tronco", "rama", "bosque", "madera", "raíz", "crecer", "planta"],
  },
  {
    simbolo: "Espejo",
    interpretacion:
      "Representa la auto-contemplación, el narcisismo o el encuentro con aspectos desconocidos de uno mismo.",
    categoria: "Objetos",
    palabrasClave: ["espejo", "reflejo", "verse", "imagen", "cristal", "mirar"],
  },
  {
    simbolo: "Muerte",
    interpretacion:
      "Raramente representa la muerte física; suele simbolizar el fin de una etapa, transformación o cambio importante en la vida.",
    categoria: "Conceptos",
    palabrasClave: ["muerte", "morir", "fallecer", "cadáver", "funeral", "entierro", "cementerio", "tumba"],
  },
]

// Función para buscar símbolos en un texto
export function buscarSimbolos(texto: string): SimboloFreudiano[] {
  if (!texto) return []

  const textoLower = texto.toLowerCase()
  const simbolosEncontrados: SimboloFreudiano[] = []

  simbolosFreudianos.forEach((simbolo) => {
    // Verificar si alguna palabra clave del símbolo está en el texto
    const encontrado = simbolo.palabrasClave.some((palabra) => textoLower.includes(palabra.toLowerCase()))

    if (encontrado && !simbolosEncontrados.some((s) => s.simbolo === simbolo.simbolo)) {
      simbolosEncontrados.push(simbolo)
    }
  })

  return simbolosEncontrados
}

// Función para obtener todas las categorías disponibles
export function obtenerCategorias(): string[] {
  const categorias = new Set<string>()

  simbolosFreudianos.forEach((simbolo) => {
    if (simbolo.categoria) {
      categorias.add(simbolo.categoria)
    }
  })

  return Array.from(categorias).sort()
}

// Función para filtrar símbolos por categoría
export function filtrarPorCategoria(categoria: string): SimboloFreudiano[] {
  if (categoria === "Todas") {
    return simbolosFreudianos
  }

  return simbolosFreudianos.filter((simbolo) => simbolo.categoria === categoria)
}

// Función para buscar símbolos por término
export function buscarPorTermino(termino: string): SimboloFreudiano[] {
  if (!termino.trim()) {
    return simbolosFreudianos
  }

  const terminoLower = termino.toLowerCase()

  return simbolosFreudianos.filter(
    (simbolo) =>
      simbolo.simbolo.toLowerCase().includes(terminoLower) ||
      simbolo.interpretacion.toLowerCase().includes(terminoLower) ||
      simbolo.palabrasClave.some((palabra) => palabra.toLowerCase().includes(terminoLower)),
  )
}
