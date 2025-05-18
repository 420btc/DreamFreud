export interface SimboloFreudiano {
  simbolo: string
  interpretacion: string
  categoria?: string
  palabrasClave: string[]
  referencia?: string
}

// Lista de símbolos interpretados de forma general
export const simbolosInterpretados = [
  // Objetos
  {
    simbolo: "Armas (fusil, cuchillo, espada)",
    interpretacion: "Representan la fuerza, agresión o deseos reprimidos de dominación. En algunos casos, pueden simbolizar la pérdida de poder si están rotas o inutilizables.",
    categoria: "Objetos",
    palabrasClave: ["arma", "fusil", "cuchillo", "espada", "arma de fuego", "arma blanca", "arma corta", "arma larga", "militar", "combate", "guerra"],
    referencia: "Algunas teorías interpretan las armas en sueños en contextos de rivalidad o poder."
  },
  {
    simbolo: "Caja o baúl",
    interpretacion: "Representa lo contenido, lo interno o el refugio. También puede simbolizar secretos reprimidos o el inconsciente.",
    categoria: "Objetos",
    palabrasClave: ["caja", "baúl", "maletín", "cajón", "contenedor", "caja fuerte", "caja de seguridad", "caja de herramientas"],
    referencia: "Se asocian cajas y contenedores con lo interno o lo oculto en varios ejemplos de sueños."
  },
  {
    simbolo: "Sombrero",
    interpretacion: "Puede representar la cabeza (como símbolo del yo) o la identidad. En algunos contextos, puede estar ligado a la individualidad.",
    categoria: "Objetos",
    palabrasClave: ["sombrero", "gorra", "boina", "sombrero de copa", "sombrero de paja", "sombrero de fiesta", "sombrero de sol", "sombrero de lluvia"],
    referencia: "Se mencionan sombreros en relación con simbolismos de identidad y de estatus."
  },
  {
    simbolo: "Reloj",
    interpretacion: "Simboliza el paso del tiempo, la ansiedad por el envejecimiento o la mortalidad. También puede estar relacionado con ritmos vitales.",
    categoria: "Objetos",
    palabrasClave: ["reloj", "reloj de pared", "reloj de pulsera", "reloj despertador", "reloj de arena", "cronómetro", "hora", "tiempo"],
    referencia: "Se conectan relojes con la percepción temporal y ansiedades inconscientes."
  },
  
  // Lugares
  {
    simbolo: "Cueva",
    interpretacion: "Representa un lugar de origen, refugio o el inconsciente. Puede asociarse con el nacimiento o deseos profundos.",
    categoria: "Lugares",
    palabrasClave: ["cueva", "caverna", "cueva subterránea", "cueva de montaña", "cueva oscura", "cueva húmeda", "cueva profunda"],
    referencia: "Se usan cuevas como símbolos de refugio o introspección en análisis de sueños."
  },
  {
    simbolo: "Iglesia o templo",
    interpretacion: "Puede representar un espacio sagrado, el cuerpo o un lugar de protección, pero también conflictos entre deseos profundos y moralidad/restricciones religiosas.",
    categoria: "Lugares",
    palabrasClave: ["iglesia", "templo", "catedral", "basílica", "mezquita", "sinagoga", "iglesia antigua", "iglesia gótica"],
    referencia: "Se interpretan edificios religiosos como símbolos de figuras protectoras o de la represión."
  },
  {
    simbolo: "Jardín",
    interpretacion: "Simboliza la abundancia, el crecimiento, la belleza o un retorno a un estado de inocencia (infancia). También puede representar deseos reprimidos de placer.",
    categoria: "Lugares",
    palabrasClave: ["jardín", "huerto", "jardín botánico", "jardín japonés", "jardín zen", "jardín de flores", "jardín de invierno"],
    referencia: "Se asocian jardines con imágenes de abundancia y bienestar."
  },
  
  // Animales
  {
    simbolo: "Caballo",
    interpretacion: "Representa la energía vital, la pasión descontrolada o deseos instintivos. Puede simbolizar la fuerza o deseos reprimidos.",
    categoria: "Animales",
    palabrasClave: ["caballo", "yegua", "potro", "caballo salvaje", "caballo de carreras", "caballo de guerra", "caballo de montar"],
    referencia: "Se analizan caballos como símbolos de fuerza y energía, especialmente en sueños de movimiento."
  },
  {
    simbolo: "Pájaro",
    interpretacion: "Similar a volar, representa anhelos de libertad o la trascendencia. También puede ser un símbolo de la elevación de deseos.",
    categoria: "Animales",
    palabrasClave: ["pájaro", "ave", "pájaro pequeño", "pájaro grande", "pájaro exótico", "pájaro de presa", "pájaro cantor"],
    referencia: "Se mencionan pájaros en relación con el simbolismo de anhelos y la liberación."
  },
  {
    simbolo: "Rata o ratón",
    interpretacion: "Simboliza ansiedades profundas, culpa o deseos reprimidos. También puede representar temores de contaminación o degradación.",
    categoria: "Animales",
    palabrasClave: ["rata", "ratón", "ratón de campo", "ratón de ciudad", "ratón blanco", "ratón negro", "ratón de laboratorio"],
    referencia: "Se asocian ratas con ansiedades neuróticas en algunos análisis."
  },
  
  // Acciones
  {
    simbolo: "Bailar",
    interpretacion: "Representa la expresión corporal, el ritmo y el movimiento. También puede simbolizar la armonía o el conflicto en relaciones.",
    categoria: "Acciones",
    palabrasClave: ["bailar", "danza", "baile", "bailarín", "bailarina", "bailar salsa", "bailar rock"],
    referencia: "Se interpreta el baile como una expresión sublimada de deseos profundos."
  },
  {
    simbolo: "Nadar",
    interpretacion: "Relacionado con el agua, simboliza el origen, la vida o deseos profundos. También puede representar la lucha contra resistencias inconscientes.",
    categoria: "Acciones",
    palabrasClave: ["nadar", "natación", "nadar en el mar", "nadar en la piscina", "nadar en río", "nadar de espaldas", "nadar estilo libre"],
    referencia: "Se conecta nadar con el medio acuoso primordial y las emociones."
  },
  {
    simbolo: "Cortarse el cabello",
    interpretacion: "Simboliza la pérdida de poder, el sacrificio de deseos o un cambio en la identidad.",
    categoria: "Acciones",
    palabrasClave: ["cortar cabello", "cortarse el pelo", "peluquería", "barbería", "corte de pelo", "cabello corto", "cabello largo"],
    referencia: "Se asocian cortes (especialmente de cabello) con ansiedades de pérdida o cambio."
  },
  
  // Cuerpo
  {
    simbolo: "Ojos",
    interpretacion: "Simbolizan la percepción, pero también pueden representar la vulnerabilidad (si están dañados) o el deseo de ser visto. En algunos casos, tienen connotaciones intensas.",
    categoria: "Cuerpo",
    palabrasClave: ["ojo", "ojos", "mirada", "vista", "ver", "observar", "mirar", "mirarse"],
    referencia: "Se analizan ojos en relación con la mirada y la ansiedad."
  },
  {
    simbolo: "Manos",
    interpretacion: "Representan la acción, el poder o la autoexploración. Manos sucias o cortadas pueden simbolizar culpa o arrepentimiento.",
    categoria: "Cuerpo",
    palabrasClave: ["mano", "manos", "palma", "dedos", "puño", "mano derecha", "mano izquierda"],
    referencia: "Se conectan manos con actividades y conflictos de culpa."
  },
  
  // Situaciones
  {
    simbolo: "Perderse",
    interpretacion: "Simboliza la confusión en la vida, el miedo a perder el control o la desconexión con el inconsciente. También puede reflejar ansiedades profundas.",
    categoria: "Situaciones",
    palabrasClave: ["perderse", "perdido", "desorientado", "confundido", "extraviado", "perdido en la ciudad", "perdido en el bosque"],
    referencia: "Se interpreta perderse como una metáfora de conflictos internos."
  },
  {
    simbolo: "Embarazo",
    interpretacion: "Representa el deseo de creación, la gestación de ideas o ansiedades sobre la responsabilidad. También puede simbolizar un retorno a un estado de protección.",
    categoria: "Situaciones",
    palabrasClave: ["embarazo", "embarazada", "embarazado", "gestación", "preñada", "preñado", "preñez"],
    referencia: "Se asocia el embarazo con deseos de creación o regresión."
  },
  
  // Conceptos
  {
    simbolo: "Dinero",
    interpretacion: "Simboliza el poder, la energía vital o la retención/expulsión (en un sentido infantil). También puede reflejar ansiedades sobre la seguridad.",
    categoria: "Conceptos",
    palabrasClave: ["dinero", "moneda", "billete", "efectivo", "dinero en efectivo", "dinero en el banco", "dinero en el bolsillo"],
    referencia: "Se conecta dinero con el simbolismo de control y valor."
  },
  {
    simbolo: "Comida",
    interpretacion: "Representa el placer sensorial, la dependencia o deseos profundos sublimados. También puede simbolizar carencias afectivas.",
    categoria: "Conceptos",
    palabrasClave: ["comida", "alimento", "comer", "comida rápida", "comida casera", "comida gourmet", "comida basura"],
    referencia: "Se asocia comida con fases tempranas y deseos infantiles."
  },
  {
    simbolo: "Oscuridad",
    interpretacion: "Simboliza el inconsciente, el miedo a lo desconocido o la represión de deseos. También puede representar la muerte o el caos.",
    categoria: "Conceptos",
    palabrasClave: ["oscuridad", "oscuro", "tenebroso", "penumbra", "luz tenue", "luz apagada", "luz encendida"],
    referencia: "Se usa la oscuridad como metáfora del inconsciente en varios análisis."
  },
  
  // Símbolos existentes... (adaptados)
  {
    simbolo: "Agua",
    interpretacion: "Representa el origen, la vida o puede simbolizar el medio primordial. También puede relacionarse con emociones profundas o la necesidad de purificación.",
    categoria: "Elementos naturales",
    palabrasClave: ["agua", "mar", "océano", "lago", "río", "lluvia", "nadar", "ahogarse", "mojado", "líquido"],
  },
  {
    simbolo: "Casa",
    interpretacion: "Simboliza el cuerpo humano y sus diferentes habitaciones pueden representar diferentes aspectos de la psique. También puede representar un lugar de origen o la seguridad.",
    categoria: "Lugares",
    palabrasClave: ["casa", "hogar", "habitación", "edificio", "mansión", "apartamento", "vivienda", "morada"],
  },
  {
    simbolo: "Caída",
    interpretacion: "Puede representar la ansiedad, el miedo al fracaso, o ceder ante una tentación. También puede simbolizar la pérdida de control o el abandono.",
    categoria: "Acciones",
    palabrasClave: ["caer", "caída", "precipicio", "abismo", "desplomarse", "hundirse", "tropezar"],
  },
  {
    simbolo: "Volar",
    interpretacion: "Suele estar relacionado con anhelos de superación. También puede representar la libertad o el escape de limitaciones.",
    categoria: "Acciones",
    palabrasClave: ["volar", "flotar", "elevarse", "aire", "cielo", "alas", "pájaro", "avión"],
  },
  {
    simbolo: "Dientes",
    interpretacion: "La caída de dientes puede simbolizar ansiedad por la pérdida de poder, o preocupaciones sobre la apariencia y el envejecimiento.",
    categoria: "Cuerpo",
    palabrasClave: ["dientes", "muela", "caerse los dientes", "perder dientes", "diente", "dentista", "masticar"],
  },
  {
    simbolo: "Escaleras",
    interpretacion: "Representan el ascenso o descenso, o un movimiento rítmico. También pueden simbolizar la progresión o regresión en la vida.",
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
    interpretacion: "Símbolo de transformación, representa deseos profundos, tentación o una amenaza percibida.",
    categoria: "Animales",
    palabrasClave: ["serpiente", "víbora", "culebra", "reptil", "anaconda", "boa", "cobra"],
  },
  {
    simbolo: "Túnel",
    interpretacion: "Representa un pasaje, asociado con el origen o una transición importante.",
    categoria: "Lugares",
    palabrasClave: ["túnel", "pasadizo", "corredor", "pasillo", "caverna", "cueva", "agujero"],
  },
  {
    simbolo: "Fuego",
    interpretacion: "Simboliza la pasión intensa, el deseo ardiente o la transformación. También puede representar la destrucción o purificación.",
    categoria: "Elementos naturales",
    palabrasClave: ["fuego", "llama", "incendio", "arder", "quemar", "fogata", "hoguera", "calor"],
  },
  {
    simbolo: "Viaje",
    interpretacion: "Puede simbolizar la muerte en algunas teorías, o representar un cambio importante en la vida o una transición.",
    categoria: "Acciones",
    palabrasClave: ["viaje", "viajar", "camino", "trayecto", "partir", "destino", "ruta", "travesía"],
  },
  {
    simbolo: "Llave",
    interpretacion: "Símbolo que representa el poder de acceso o el acceso a secretos y conocimientos ocultos.",
    categoria: "Objetos",
    palabrasClave: ["llave", "cerradura", "abrir", "cerrar", "puerta", "acceso", "candado"],
  },
  {
    simbolo: "Puente",
    interpretacion: "Representa una transición o conexión entre dos estados o aspectos de la personalidad. También puede simbolizar el paso de la vida a la muerte.",
    categoria: "Lugares",
    palabrasClave: ["puente", "cruzar", "pasar", "conectar", "unir", "río", "abismo"],
  },
  {
    simbolo: "Desnudez",
    interpretacion: "Puede representar vulnerabilidad, vergüenza, exhibicionismo o deseo de ser visto y admirado.",
    categoria: "Estados", // O Cuerpo
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
    interpretacion: "Representa ansiedad por el rendimiento, miedo al fracaso o preocupación por ser juzgado por los demás.",
    categoria: "Situaciones",
    palabrasClave: ["examen", "prueba", "test", "evaluación", "estudiar", "suspender", "aprobar", "escuela"],
  },
  {
    simbolo: "Zapatos",
    interpretacion: "Pueden simbolizar el camino o la base sobre la que uno se sostiene, o representar actitudes hacia la propia intimidad o la forma de avanzar en la vida.",
    categoria: "Objetos",
    palabrasClave: ["zapato", "zapatos", "calzado", "bota", "zapatilla", "pie", "caminar"],
  },
  {
    simbolo: "Rey/Reina", // Repetido, se mantiene la primera interpretación más específica.
    interpretacion: "Figuras de autoridad, poder o aspectos idealizados de uno mismo o de personas influyentes en la vida, como padres o mentores.",
    categoria: "Figuras",
    palabrasClave: ["rey", "reina", "monarca", "gobernante", "autoridad", "poder", "corona"],
  },
  {
    simbolo: "Animales Pequeños/Alimañas",
    interpretacion: "Pueden representar aspectos de uno mismo percibidos como molestos, subdesarrollados, o relacionados con figuras más jóvenes o responsabilidades.",
    categoria: "Animales",
    palabrasClave: ["insecto", "alimaña", "bicho", "animal pequeño", "cucaracha", "araña", "hormiga", "mosca"],
  },
  {
    simbolo: "Viaje/Traslado",
    interpretacion: "Puede significar el camino de la vida, transiciones, desarrollo personal, o el proceso de avanzar hacia una meta o alejarse de una situación.",
    categoria: "Acciones",
    palabrasClave: ["viaje", "viajar", "traslado", "mudanza", "emigrar", "cambio", "transición"],
  },
  {
    simbolo: "Desnudez", // Repetido
    interpretacion: "Sentimientos de vulnerabilidad, exposición, veracidad, o ansiedad por ser juzgado o revelar el verdadero yo.",
    categoria: "Cuerpo",
    palabrasClave: ["desnudo", "desnudez", "desvestirse", "sin ropa", "desnudarse", "desnudo en público"],
  },
  {
    simbolo: "Uniformes/Ropa",
    interpretacion: "Se relaciona con el rol social, la persona, la conformidad, o cómo uno se presenta al mundo.",
    categoria: "Objetos",
    palabrasClave: ["uniforme", "ropa", "vestimenta", "disfraz", "atuendo", "traje", "vestido"],
  },
  {
    simbolo: "Palos, Paraguas, Postes, Árboles",
    interpretacion: "Pueden representar fuerza, poder, ambición, crecimiento o energía asertiva.",
    categoria: "Objetos",
    palabrasClave: ["palo", "paraguas", "poste", "árbol", "vara", "bastón", "tronco"],
  },
  {
    simbolo: "Cuchillos, Dagas, Lanzas, Espadas, Armas de Fuego", // Similar a "Armas"
    interpretacion: "Pueden simbolizar agresión, conflicto, atravesar ilusiones, tomar decisiones, o sentimientos de amenaza o empoderamiento.",
    categoria: "Objetos",
    palabrasClave: ["cuchillo", "daga", "lanza", "espada", "arma de fuego", "arma blanca", "filo", "pistola"],
  },
  {
    simbolo: "Grifos, Fuentes",
    interpretacion: "Pueden representar la expresión emocional, el flujo de energía o creatividad, o la liberación.",
    categoria: "Objetos",
    palabrasClave: ["grifo", "fuente", "agua corriente", "manantial", "chorro", "flujo de agua"],
  },
  {
    simbolo: "Globos, Aviones, Cohetes",
    interpretacion: "Pueden significar aspiración, ambición, libertad, superar desafíos o un deseo de escape.",
    categoria: "Objetos",
    palabrasClave: ["globo", "avión", "cohete", "volar", "elevarse", "despegar", "espacio"],
  },
  {
    simbolo: "Fosas, Cuevas, Botellas, Cajas, Baúles, Jarras, Maletas, Bolsillos, Barcos, Boca, Iglesias",
    interpretacion: "Pueden simbolizar receptividad, contención, protección, aspectos ocultos, el inconsciente o un viaje/transición. (Verificar interpretaciones individuales ya ajustadas).",
    categoria: "Objetos",
    palabrasClave: ["fosa", "cueva", "botella", "caja", "baúl", "jarra", "maleta", "bolsillo", "barco", "boca", "iglesia"],
  },
  {
    simbolo: "Manzanas, Melocotones, Frutas en general",
    interpretacion: "Pueden representar nutrición, crecimiento, disfrute sensorial, tentación o los frutos del propio trabajo.",
    categoria: "Objetos",
    palabrasClave: ["manzana", "melocotón", "fruta", "manzana roja", "manzana verde", "melocotón maduro", "cesta de frutas"],
  },
  {
    simbolo: "Joyas, Tesoro",
    interpretacion: "Simboliza algo de gran valor, valía interna, talentos, o una persona o aspecto querido de uno mismo.",
    categoria: "Objetos",
    palabrasClave: ["joya", "joyas", "tesoro", "collar", "anillo", "pulsera", "piedras preciosas"],
  },
  {
    simbolo: "Dulces",
    interpretacion: "Representa placer, indulgencia, recompensa o alegrías simples.",
    categoria: "Objetos",
    palabrasClave: ["dulce", "caramelo", "chocolate", "postre", "azúcar", "golosina", "helado"],
  },
  {
    simbolo: "Deslizarse, Resbalar, Arrancar Ramas de los Árboles",
    interpretacion: "Puede significar una pérdida de control, un pasaje suave o difícil, o acciones con consecuencias no deseadas.",
    categoria: "Acciones",
    palabrasClave: ["deslizarse", "resbalar", "resbalón", "caída", "rama", "árbol", "pérdida de control"],
  },
  {
    simbolo: "Serpientes", // Repetido, mantener la versión ajustada.
    interpretacion: "Pueden representar transformación, curación, amenazas ocultas, sabiduría o problemas vitales no resueltos.",
    categoria: "Animales",
    palabrasClave: ["serpiente", "culebra", "víbora", "reptil", "serpiente venenosa", "serpiente constrictora"],
  },
  {
    simbolo: "Muerte (de una persona en un sueño)",
    interpretacion: "Simboliza cambio, finales, nuevos comienzos, dejar ir viejos patrones o confrontar la mortalidad.",
    categoria: "Conceptos",
    palabrasClave: ["muerte", "morir", "fallecer", "fallecimiento", "deceso", "muerte de un ser querido"],
  },
  {
    simbolo: "Caminos",
    interpretacion: "Representa el camino de la vida, elecciones, dirección o el viaje hacia una meta.",
    categoria: "Lugares",
    palabrasClave: ["camino", "sendero", "ruta", "trayecto", "dirección", "cruce de caminos"],
  },
  {
    simbolo: "Ser Perseguido", // Similar a Persecución
    interpretacion: "Sentirse amenazado, evitar una situación o emoción, ansiedad o presión de fuentes externas o internas.",
    categoria: "Situaciones",
    palabrasClave: ["perseguido", "persecución", "huir", "escapar", "acoso", "amenaza", "miedo"],
  },
  {
    simbolo: "Jirafas",
    interpretacion: "Pueden simbolizar un deseo de ver las cosas desde una perspectiva más elevada, cualidades únicas o relacionarse con figuras o dinámicas parentales.",
    categoria: "Animales",
    palabrasClave: ["jirafa", "cuello largo", "animal alto", "sabana", "animal exótico"],
  },
  {
    simbolo: "Perro (estrangular un perro blanco)",
    interpretacion: "Puede representar ira reprimida, el deseo de controlar o silenciar un aspecto de uno mismo o una situación asociada con las cualidades del animal o la persona que podría representar.",
    categoria: "Animales",
    palabrasClave: ["perro", "perro blanco", "mascota", "can", "cachorro", "perro callejero"],
  },
  {
    simbolo: "Subir una Escalera", // Similar a Escaleras
    interpretacion: "Simboliza ambición, esforzarse por alcanzar metas, progreso o ascenso social.",
    categoria: "Acciones",
    palabrasClave: ["escalera", "escalar", "subir", "escalones", "peldaños", "escalera de mano"],
  },
  {
    simbolo: "Bailar/Montar a Caballo",
    interpretacion: "Puede representar alegría, libertad de expresión, interacción social, ritmo en la vida o una sensación de control y compañerismo (montar a caballo).",
    categoria: "Acciones",
    palabrasClave: ["bailar", "baile", "montar a caballo", "equitación", "ritmo", "movimiento"],
  },
  {
    simbolo: "Pez (retorciéndose)",
    interpretacion: "Puede simbolizar una idea o percepción que emerge del inconsciente, algo elusivo o fertilidad/abundancia.",
    categoria: "Animales",
    palabrasClave: ["pez", "peces", "pez dorado", "pez de colores", "pez tropical", "pez en el agua"],
  },
  {
    simbolo: "Número Tres",
    interpretacion: "Puede representar creatividad, síntesis, un grupo pequeño o una etapa en un proceso.",
    categoria: "Símbolos",
    palabrasClave: ["tres", "número tres", "trinidad", "trío", "tercero"],
  },
  {
    simbolo: "Objetos Circulares/Contenedores",
    interpretacion: "Pueden simbolizar totalidad, ciclos, receptividad o un espacio/situación contenida.",
    categoria: "Objetos",
    palabrasClave: ["círculo", "redondo", "esfera", "cuenco", "tazón", "olla", "recipiente"],
  },
  {
    simbolo: "Objetos Alargados (general)",
    interpretacion: "Pueden representar dirección, enfoque, aserción o una herramienta para un propósito.",
    categoria: "Objetos",
    palabrasClave: ["objeto alargado", "varilla", "tubo", "caña", "palo largo", "vara"],
  },
  {
    simbolo: "Decapitación/Pérdida de una Extremidad/Rueda que se Sale",
    interpretacion: "Podría significar una pérdida de poder, identidad, control o una función/apoyo importante.",
    categoria: "Cuerpo",
    palabrasClave: ["decapitación", "cabeza cortada", "pérdida de extremidad", "amputación", "rueda suelta", "descontrol"],
  },
  {
    simbolo: "Chocolate/Oro",
    interpretacion: "Chocolate: indulgencia, confort. Oro: valor, sabiduría, pureza, algo precioso.",
    categoria: "Objetos",
    palabrasClave: ["chocolate", "oro", "dulce", "metal precioso", "joyería", "tesoro"],
  },
  {
    simbolo: "Amarillo (color)",
    interpretacion: "Puede representar intelecto, precaución, enfermedad o cobardía según el contexto.",
    categoria: "Símbolos",
    palabrasClave: ["amarillo", "color amarillo", "tonalidad amarilla", "amarillo brillante", "amarillo pálido"],
  },
  {
    simbolo: "Sustancia Lechosa",
    interpretacion: "Puede simbolizar nutrición, pureza, conexión maternal o esencia vital.",
    categoria: "Símbolos",
    palabrasClave: ["leche", "sustancia blanca", "líquido lechoso", "leche materna", "crema"],
  },
  {
    simbolo: "Animal Salvaje",
    interpretacion: "Representa instintos primarios, emociones indómitas o energías naturales poderosas, quizás abrumadoras.",
    categoria: "Animales",
    palabrasClave: ["animal salvaje", "bestia", "fiera", "animal peligroso", "animal exótico"],
  },
  {
    simbolo: "Policía, Oficial del Ejército, Maestro",
    interpretacion: "Figuras de autoridad, reglas, guía, disciplina o expectativas sociales.",
    categoria: "Figuras",
    palabrasClave: ["policía", "oficial", "ejército", "maestro", "profesor", "autoridad", "disciplina"],
  },
  {
    simbolo: "Enfermera",
    interpretacion: "Representa cuidado, curación, crianza o una necesidad de apoyo.",
    categoria: "Figuras",
    palabrasClave: ["enfermera", "enfermero", "cuidados", "hospital", "sanación", "asistencia médica"],
  },
  {
    simbolo: "Sótano",
    interpretacion: "Simboliza aspectos más profundos, a menudo ocultos o no reconocidos del yo, recuerdos pasados o creencias fundamentales.",
    categoria: "Lugares",
    palabrasClave: ["sótano", "subsuelo", "bodega", "cuarto de herramientas", "lugar oscuro", "espacio bajo tierra", "basement"],
  },
  {
    simbolo: "Abandono",
    interpretacion: "Miedo a la pérdida, inseguridad, sentimientos de soledad o rechazo.",
    categoria: "Emociones",
    palabrasClave: ["abandono", "abandonado", "solo", "solitario", "rechazado", "inseguridad", "pérdida"],
  },
  {
    simbolo: "Abismo",
    interpretacion: "Lo desconocido, miedo a caer o fracasar, una situación peligrosa o el inconsciente profundo.",
    categoria: "Lugares",
    palabrasClave: ["abismo", "precipicio", "vacío", "profundidad", "caída libre", "desconocido"],
  },
  {
    simbolo: "Accidente",
    interpretacion: "Culpabilidad inconsciente, advertencia, miedos sobre la pérdida de control, o un evento disruptivo inesperado en la vida.",
    categoria: "Situaciones",
    palabrasClave: ["accidente", "choque", "colisión", "caída", "imprevisto", "error"],
  },
  {
    simbolo: "Actor/Actriz",
    interpretacion: "Representa la persona o máscara social, roles que se desempeñan en la vida, o el deseo de ser visto o reconocido.",
    categoria: "Figuras",
    palabrasClave: ["actor", "actriz", "teatro", "disfraz", "máscara", "rol", "papel", "fingir"],
  },
  {
    simbolo: "Águila",
    interpretacion: "Poder, visión clara, libertad, aspiraciones elevadas, conexión con lo espiritual.",
    categoria: "Animales",
    palabrasClave: ["águila", "ave rapaz", "vuelo alto", "libertad", "visión", "poder"],
  },
  {
    simbolo: "Aire/Viento",
    interpretacion: "Intelecto, comunicación, cambio, libertad, espíritu.",
    categoria: "Elementos naturales",
    palabrasClave: ["aire", "viento", "brisa", "ventisca", "huracán", "tornado"],
  },
  {
    simbolo: "Alas",
    interpretacion: "Deseo de libertad, escape, trascendencia, aspiraciones espirituales o creativas.",
    categoria: "Símbolos",
    palabrasClave: ["alas", "volar", "libertad", "escapar", "vuelo", "elevación"],
  },
  {
    simbolo: "Árbol",
    interpretacion: "Representa la vida, el crecimiento y la fuerza. También simboliza conexión entre el cielo y la tierra, y conocimiento. Un árbol seco puede indicar falta de vitalidad.",
    categoria: "Elementos naturales",
    palabrasClave: ["árbol", "tronco", "rama", "hoja", "bosque", "selva", "naturaleza", "crecimiento", "vida", "conocimiento"],
  },
  {
    simbolo: "Alimentos/Comida", // Similar a "Comida"
    interpretacion: "Nutrición (física, emocional o intelectual), consuelo, necesidades, deseos, o la forma en que se 'asimilan' las experiencias.",
    categoria: "Objetos",
    palabrasClave: ["comida", "alimento", "nutrición", "hambre", "comer", "banquete", "alimentarse"],
  },
  {
    simbolo: "Anciano/Anciana Sabia",
    interpretacion: "Sabiduría, guía, conocimiento intuitivo, el inconsciente colectivo, una figura mentora interna.",
    categoria: "Figuras",
    palabrasClave: ["anciano", "anciana", "sabio", "mentor", "guía", "consejero", "sabiduría"],
  },
  {
    simbolo: "Ancla",
    interpretacion: "Estabilidad, seguridad, aquello que te mantiene firme o, por el contrario, lo que te impide avanzar.",
    categoria: "Objetos",
    palabrasClave: ["ancla", "amarre", "estabilidad", "seguridad", "firmeza", "bloqueo", "seguro"],
  },
  {
    simbolo: "Anillo",
    interpretacion: "Compromiso, totalidad, unión, ciclos, promesas o un vínculo importante.",
    categoria: "Objetos",
    palabrasClave: ["anillo", "aro", "compromiso", "matrimonio", "unión", "círculo", "alianza"],
  },
  {
    simbolo: "Araña",
    interpretacion: "Creatividad (tejer redes), sentirse atrapado, miedo, poder, o una figura materna/creadora dominante/controladora.",
    categoria: "Animales",
    palabrasClave: ["araña", "telaraña", "tejer", "red", "atrapado", "miedo", "control"],
  },
  {
    simbolo: "Arena",
    interpretacion: "Inestabilidad, el paso del tiempo, fundamentos poco sólidos, o la infancia (juegos en la arena).",
    categoria: "Elementos naturales",
    palabrasClave: ["arena", "playa", "desierto", "reloj de arena", "tiempo", "inestabilidad", "jugar"],
  },
  {
    simbolo: "Armario/Clóset",
    interpretacion: "Aspectos ocultos del yo, secretos, o cosas que se guardan (recuerdos, talentos no usados).",
    categoria: "Objetos",
    palabrasClave: ["armario", "clóset", "ropero", "guardarropa", "esconder", "secreto", "oculto"],
  },
  {
    simbolo: "Ascensor/Elevador",
    interpretacion: "Ascensos y descensos en la vida, cambios de estatus, progreso o retroceso, o el estado de ánimo.",
    categoria: "Objetos",
    palabrasClave: ["ascensor", "elevador", "subir", "bajar", "niveles", "estatus", "ascenso"],
  },
  {
    simbolo: "Asesinato/Matar a Alguien",
    interpretacion: "Deseo de eliminar un aspecto de uno mismo, una influencia negativa, o terminar una situación; raramente un deseo literal.",
    categoria: "Acciones",
    palabrasClave: ["asesinato", "matar", "muerte", "eliminar", "acabar", "terminar", "asesino"],
  },
  {
    simbolo: "Avalancha/Derrumbe",
    interpretacion: "Emociones reprimidas que estallan, sentirse abrumado, o un cambio drástico e incontrolable.",
    categoria: "Situaciones",
    palabrasClave: ["avalancha", "derrumbe", "deslizamiento", "tierra", "pérdida de control", "catástrofe", "desastre"],
  },
  {
    simbolo: "Baño (cuarto de)",
    interpretacion: "Limpieza emocional, liberación, privacidad, o la necesidad de deshacerse de lo innecesario.",
    categoria: "Lugares",
    palabrasClave: ["baño", "aseo", "lavabo", "ducha", "bañera", "higiene", "limpieza"],
  },
  {
    simbolo: "Barco/Nave",
    interpretacion: "El viaje de la vida, la forma en que se navegan las emociones o situaciones, exploración del inconsciente.",
    categoria: "Objetos",
    palabrasClave: ["barco", "nave", "velero", "viaje", "navegar", "océano", "mar"],
  },
  {
    simbolo: "Basura",
    interpretacion: "Cosas que se necesitan descartar (ideas, hábitos, emociones), sentimientos de inutilidad, o desorden en la vida.",
    categoria: "Objetos",
    palabrasClave: ["basura", "desecho", "residuo", "tirar", "descartar", "desechar"],
  },
  {
    simbolo: "Bebé",
    interpretacion: "Nuevos comienzos, inocencia, vulnerabilidad, potencial no desarrollado, una nueva idea o proyecto, o anhelo de cuidado.",
    categoria: "Figuras",
    palabrasClave: ["bebé", "niño", "recién nacido", "inocencia", "nuevo comienzo", "cuidado"],
  },
  {
    simbolo: "Biblioteca",
    interpretacion: "Búsqueda de conocimiento, sabiduría acumulada, recuerdos, o la necesidad de aprender algo nuevo.",
    categoria: "Lugares",
    palabrasClave: ["biblioteca", "libros", "conocimiento", "aprendizaje", "sabiduría", "lectura"],
  },
  {
    simbolo: "Bicicleta",
    interpretacion: "Equilibrio, esfuerzo personal para avanzar, independencia, o un viaje más simple y personal.",
    categoria: "Objetos",
    palabrasClave: ["bicicleta", "bici", "montar en bici", "ciclismo", "ruedas"]
  },
  {
    simbolo: "Caja", // Similar a Caja o Baúl
    interpretacion: "Secretos, potencial oculto, el inconsciente, o algo que necesita ser abierto o explorado.",
    categoria: "Objetos",
    palabrasClave: ["caja", "baúl", "cofre", "contenedor", "secreto", "oculto"]
  },
  {
    simbolo: "Cama",
    interpretacion: "Descanso, intimidad (no necesariamente sexual), enfermedad, o el lugar donde se procesan los sueños y el inconsciente.",
    categoria: "Objetos",
    palabrasClave: ["cama", "dormir", "descansar", "intimidad", "enfermedad", "dormitorio"]
  },
  {
    simbolo: "Caminar/Correr en el sitio",
    interpretacion: "Sentirse estancado, esfuerzo sin progreso, frustración.",
    categoria: "Acciones",
    palabrasClave: ["caminar en el sitio", "correr sin avanzar", "estancamiento", "esfuerzo inútil", "frustración"]
  },
  {
    simbolo: "Caminos/Carreteras", // Similar a Caminos
    interpretacion: "El curso de la vida, elecciones, dirección, oportunidades o desafíos en el viaje personal.",
    categoria: "Lugares",
    palabrasClave: ["camino", "carretera", "sendero", "ruta", "viaje", "dirección", "elección"]
  },
  {
    simbolo: "Campo/Pradera",
    interpretacion: "Libertad, paz, naturaleza, crecimiento, o un espacio abierto para la exploración.",
    categoria: "Lugares",
    palabrasClave: ["campo", "pradera", "prado", "naturaleza", "libertad", "crecimiento", "exploración"]
  },
  {
    simbolo: "Cárcel/Prisión",
    interpretacion: "Sentirse atrapado, restricciones autoimpuestas o externas, culpa, o castigo.",
    categoria: "Lugares",
    palabrasClave: ["cárcel", "prisión", "celda", "encerrado", "atrapado", "restricción", "castigo"]
  },
  {
    simbolo: "Casa", // Repetido, mantener la versión ajustada
    interpretacion: "El yo, la psique, seguridad, familia. Diferentes habitaciones representan aspectos del yo o áreas de la vida.",
    categoria: "Lugares",
    palabrasClave: ["casa", "hogar", "vivienda", "habitación", "hogar", "seguridad", "familia"]
  },
  {
    simbolo: "Cascada",
    interpretacion: "Gran liberación de emociones, flujo de energía, o sentimientos abrumadores.",
    categoria: "Naturaleza", // O Elementos naturales
    palabrasClave: ["cascada", "caída de agua", "flujo", "emoción", "liberación", "energía"]
  },
  {
    simbolo: "Castillo",
    interpretacion: "Protección, el yo idealizado, metas elevadas, o un lugar de poder y misterio.",
    categoria: "Lugares",
    palabrasClave: ["castillo", "fortaleza", "torre", "protección", "poder", "misterio"]
  },
  {
    simbolo: "Celebridad/Famoso",
    interpretacion: "Cualidades que se admiran o se desean, aspiraciones, o la forma en que uno quiere ser percibido.",
    categoria: "Personas", // O Figuras
    palabrasClave: ["celebridad", "famoso", "fama", "ídolo", "aspiración", "reconocimiento"]
  },
  {
    simbolo: "Cementerio",
    interpretacion: "Finales, el pasado, recuerdos, o la necesidad de dejar ir algo o a alguien.",
    categoria: "Lugares",
    palabrasClave: ["cementerio", "tumba", "lápida", "muerte", "recuerdo", "pasado"]
  },
  {
    simbolo: "Cerdos",
    interpretacion: "Indulgencia, suciedad (en sentido figurado), terquedad, o a veces prosperidad (hucha de cerdito).",
    categoria: "Animales",
    palabrasClave: ["cerdo", "cerda", "cochinillo", "marrano", "puerco", "chancho", "hucha"]
  },
  {
    simbolo: "Faro",
    interpretacion: "Guía, esperanza, iluminación en tiempos de oscuridad o confusión.",
    categoria: "General", // O Objetos
    palabrasClave: ["faro", "guía", "luz", "esperanza", "iluminación", "navegación"]
  },
  {
    simbolo: "Fiesta",
    interpretacion: "Celebración, vida social, alegría, o, a veces, superficialidad o exceso.",
    categoria: "General", // O Situaciones
    palabrasClave: ["fiesta", "celebración", "alegría", "reunión", "festejo", "social"]
  },
  {
    simbolo: "Flores",
    interpretacion: "Belleza, crecimiento, amor, alegría, o el florecimiento del potencial. Diferentes flores pueden tener significados específicos.",
    categoria: "General", // O Elementos naturales
    palabrasClave: ["flor", "flores", "jardín", "belleza", "crecimiento", "amor", "alegría"]
  },
  {
    simbolo: "Fotografía",
    interpretacion: "Recuerdos, el pasado, una imagen fija de un momento o persona, o la necesidad de examinar algo más de cerca.",
    categoria: "General", // O Objetos
    palabrasClave: ["foto", "fotografía", "recuerdo", "imagen", "momento", "pasado"]
  },
  {
    simbolo: "Fuego", // Repetido, mantener versión ajustada
    interpretacion: "Pasión, ira, destrucción, transformación, purificación, o una advertencia. Estar en llamas: ansiedad.",
    categoria: "General", // O Elementos naturales
    palabrasClave: ["fuego", "llama", "ardor", "pasión", "ira", "destrucción", "transformación", "ansiedad"]
  },
  {
    simbolo: "Funeral",
    interpretacion: "Final de algo (una relación, una fase de la vida, un aspecto del yo), duelo, o la necesidad de dejar ir.",
    categoria: "General", // O Situaciones
    palabrasClave: ["funeral", "entierro", "muerte", "duelo", "final", "despedida"]
  },
  {
    simbolo: "Gafas/Lentes",
    interpretacion: "Percepción, claridad de visión, o la necesidad de ver las cosas de manera diferente.",
    categoria: "General", // O Objetos
    palabrasClave: ["gafas", "lentes", "anteojos", "visión", "percepción", "claridad"]
  },
  {
    simbolo: "Gato",
    interpretacion: "Independencia, misterio, intuición, gracia, o el lado astuto y sigiloso de uno mismo.",
    categoria: "General", // O Animales
    palabrasClave: ["gato", "gata", "felino", "independencia", "misterio", "intuición"]
  },
  {
    simbolo: "Gigante",
    interpretacion: "Poder abrumador (interno o externo), una figura de autoridad temida, o un gran desafío.",
    categoria: "Junguiano, General", // O Figuras
    palabrasClave: ["gigante", "enorme", "poder", "autoridad", "desafío", "miedo"]
  },
  {
    simbolo: "Globos", // Similar a Globos, Aviones, Cohetes
    interpretacion: "Celebración, alegría, ligereza, aspiraciones, o algo frágil y efímero.",
    categoria: "Freudiano, General", // O Objetos
    palabrasClave: ["globo", "globos", "celebración", "alegría", "ligereza", "aspiraciones"]
  },
  {
    simbolo: "Guerra",
    interpretacion: "Conflicto interno o externo, agresión, lucha por el poder, o una situación caótica.",
    categoria: "General", // O Situaciones
    palabrasClave: ["guerra", "batalla", "conflicto", "lucha", "poder", "caos"]
  },
  {
    simbolo: "Hadas",
    interpretacion: "Magia, imaginación, deseos, o el lado lúdico e infantil de la psique.",
    categoria: "General", // O Figuras
    palabrasClave: ["hada", "hadas", "magia", "imaginación", "deseo", "infantil"]
  },
  {
    simbolo: "Herida",
    interpretacion: "Dolor emocional o físico, vulnerabilidad, o un trauma pasado que necesita curación.",
    categoria: "General", // O Cuerpo/Situaciones
    palabrasClave: ["herida", "dolor", "vulnerabilidad", "trauma", "curación", "cicatriz"]
  },
  {
    simbolo: "Hielo",
    interpretacion: "Emociones congeladas, frialdad, aislamiento, o una situación estancada.",
    categoria: "General", // O Elementos naturales
    palabrasClave: ["hielo", "frío", "congelado", "aislamiento", "estancamiento", "emoción"]
  },
  {
    simbolo: "Hogar", // Similar a Casa
    interpretacion: "Seguridad, comodidad, el yo, la familia, o el centro de la vida personal.",
    categoria: "General", // O Lugares
    palabrasClave: ["hogar", "casa", "seguridad", "comodidad", "familia", "refugio"]
  },
  {
    simbolo: "Humo",
    interpretacion: "Confusión, algo oculto o poco claro, o una advertencia de peligro (fuego).",
    categoria: "General", // O Elementos naturales
    palabrasClave: ["humo", "confusión", "oculto", "peligro", "advertencia", "neblina"]
  },
  {
    simbolo: "Iglesia", // Repetido, mantener versión ajustada
    interpretacion: "Espiritualidad, moralidad, comunidad, refugio, o dogmatismo.",
    categoria: "Freudiano, General", // O Lugares
    palabrasClave: ["iglesia", "templo", "religión", "espiritualidad", "moralidad", "comunidad"]
  },
  {
    simbolo: "Infierno",
    interpretacion: "Sufrimiento, culpa, miedos internos, o una situación de vida intolerable.",
    categoria: "General", // O Lugares/Conceptos
    palabrasClave: ["infierno", "sufrimiento", "culpa", "miedo", "dolor", "castigo"]
  },
  {
    simbolo: "Insectos", // Similar a Animales Pequeños/Alimañas
    interpretacion: "Pequeñas molestias, ansiedades, o cosas que 'fastidian'. El tipo de insecto puede dar más detalles.",
    categoria: "Animales",
    palabrasClave: ["insecto", "bicho", "molestia", "ansiedad", "pequeño", "fastidio"]
  },
  {
    simbolo: "Luna",
    interpretacion: "Aspectos femeninos, intuición, emociones, ciclos, el inconsciente, misterio.",
    categoria: "Junguiano, General", // O Símbolos/Elementos naturales
    palabrasClave: ["luna", "fase lunar", "noche", "misterio", "intuición", "ciclo"]
  },
  {
    simbolo: "Luz",
    interpretacion: "Conciencia, claridad, comprensión, esperanza, guía espiritual.",
    categoria: "General", // O Símbolos
    palabrasClave: ["luz", "iluminación", "claridad", "esperanza", "guía", "espiritual"]
  },
  {
    simbolo: "Maestro/Profesor", // Similar a Policía, Oficial, Maestro
    interpretacion: "Guía, conocimiento, autoridad, o la necesidad de aprender una lección importante.",
    categoria: "Freudiano (padre), General", // O Figuras
    palabrasClave: ["maestro", "profesor", "guía", "conocimiento", "autoridad", "aprendizaje"]
  },
  {
    simbolo: "Magia/Mago",
    interpretacion: "Poder de transformación, lo desconocido, creatividad, o el deseo de controlar situaciones.",
    categoria: "Junguiano, General", // O Conceptos/Figuras
    palabrasClave: ["magia", "mago", "hechicero", "transformación", "creatividad", "control"]
  },
  {
    simbolo: "Maleta", // Similar a Fosas, Cuevas, etc.
    interpretacion: "Viajes, cargas emocionales ('equipaje'), o preparación para un cambio.",
    categoria: "Freudiano, General", // O Objetos
    palabrasClave: ["maleta", "equipaje", "viaje", "cambio", "preparación", "carga"]
  },
  {
    simbolo: "Manos", // Repetido, mantener versión ajustada
    interpretacion: "Acción, habilidad, creación, comunicación (lenguaje de señas), o ayuda.",
    categoria: "General", // O Cuerpo
    palabrasClave: ["mano", "manos", "acción", "habilidad", "creación", "comunicación"]
  },
  {
    simbolo: "Mapa",
    interpretacion: "Dirección, guía, planificación, o la búsqueda del propio camino en la vida.",
    categoria: "General", // O Objetos
    palabrasClave: ["mapa", "dirección", "guía", "planificación", "camino", "vida"]
  },
  {
    simbolo: "Máscara",
    interpretacion: "Ocultar el verdadero yo, la persona, engaño, o protección.",
    categoria: "Junguiano, General", // O Objetos
    palabrasClave: ["máscara", "careta", "ocultar", "personalidad", "engaño", "protección"]
  },
  {
    simbolo: "Medicinas/Fármacos",
    interpretacion: "Curación, necesidad de ayuda, o evasión de problemas.",
    categoria: "General", // O Objetos
    palabrasClave: ["medicina", "fármaco", "medicamento", "curación", "ayuda", "evasión"]
  },
  {
    simbolo: "Monstruos",
    interpretacion: "Miedos internos, aspectos reprimidos de la sombra, desafíos abrumadores, o traumas pasados.",
    categoria: "Junguiano, General", // O Figuras
    palabrasClave: ["monstruo", "miedo", "sombra", "trauma", "desafío", "represión"]
  },
  {
    simbolo: "Montaña",
    interpretacion: "Obstáculos, metas elevadas, desafíos, o un lugar para la perspectiva y la introspección.",
    categoria: "Junguiano, General", // O Lugares
    palabrasClave: ["montaña", "obstáculo", "meta", "desafío", "altura", "introspección"]
  },
  {
    simbolo: "Muerte", // Similar a Muerte (de una persona)
    interpretacion: "Finales, transformación, cambio, dejar ir el pasado, o el miedo a lo desconocido (raramente muerte literal).",
    categoria: "Freudiano, General", // O Conceptos
    palabrasClave: ["muerte", "fin", "transformación", "cambio", "miedo", "desconocido"]
  },
  {
    simbolo: "Multitud",
    interpretacion: "Conformidad, pérdida de individualidad, sentirse abrumado, o, por el contrario, conexión social.",
    categoria: "General", // O Situaciones
    palabrasClave: ["multitud", "masa", "conformidad", "individualidad", "conexión", "social"]
  },
  {
    simbolo: "Música",
    interpretacion: "Emociones, armonía, autoexpresión, o el ritmo de la vida.",
    categoria: "General", // O Conceptos
    palabrasClave: ["música", "canción", "melodía", "emoción", "armonía", "ritmo"]
  },
  {
    simbolo: "Nadar", // Repetido, mantener versión ajustada
    interpretacion: "Navegar por las emociones, lidiar con el inconsciente, o la capacidad de mantenerse a flote en situaciones difíciles.",
    categoria: "General", // O Acciones
    palabrasClave: ["nadar", "navegar", "emoción", "inconsciente", "flotar", "dificultad"]
  },
  {
    simbolo: "Nieve",
    interpretacion: "Pureza, frialdad emocional, aislamiento, o un nuevo comienzo (cubrir lo viejo).",
    categoria: "General", // O Elementos naturales
    palabrasClave: ["nieve", "frío", "pureza", "aislamiento", "nuevo comienzo", "blanco"]
  },
  {
    simbolo: "Niño/Niña", // Similar a Bebé
    interpretacion: "Inocencia, vulnerabilidad, el niño interior, potencial, o aspectos inmaduros del yo.",
    categoria: "Freudiano, Junguiano (Niño Divino)", // O Figuras
    palabrasClave: ["niño", "niña", "inocencia", "vulnerabilidad", "potencial", "inmadurez"]
  },
  {
    simbolo: "Noche", // Similar a Oscuridad
    interpretacion: "El inconsciente, misterio, miedo, descanso, o un tiempo para la introspección.",
    categoria: "Junguiano, General", // O Conceptos/Situaciones
    palabrasClave: ["noche", "oscuridad", "inconsciente", "misterio", "miedo", "introspección"]
  },
  {
    simbolo: "Nubes",
    interpretacion: "Pensamientos, confusión, obstáculos a la claridad, o sueños y fantasías.",
    categoria: "General", // O Elementos naturales
    palabrasClave: ["nube", "nubes", "pensamiento", "confusión", "claridad", "sueño"]
  },
  {
    simbolo: "Nudo",
    interpretacion: "Problemas, tensión, sentirse atado o restringido, o una conexión compleja.",
    categoria: "General", // O Objetos/Conceptos
    palabrasClave: ["nudo", "problema", "tensión", "atadura", "restricción", "conexión"]
  },
  {
    simbolo: "Números", // Similar a Número Tres
    interpretacion: "Pueden tener significados personales, simbólicos (según la numerología), o representar orden/caos.",
    categoria: "Freudiano (3), General", // O Símbolos
    palabrasClave: ["número", "números", "numerología", "orden", "caos", "significado"]
  },
  {
    simbolo: "Océano", // Similar a Agua
    interpretacion: "El inconsciente colectivo, la inmensidad de las emociones, lo desconocido, o el origen de la vida.",
    categoria: "Junguiano, General", // O Elementos naturales/Lugares
    palabrasClave: ["océano", "mar", "inconsciente", "emoción", "inmensidad", "origen"]
  },
  {
    simbolo: "Oficina",
    interpretacion: "Trabajo, responsabilidades, estructura, o a veces, monotonía y estrés.",
    categoria: "General", // O Lugares
    palabrasClave: ["oficina", "trabajo", "responsabilidad", "estructura", "monotonía", "estrés"]
  },
  {
    simbolo: "Ojo(s)", // Repetido, mantener versión ajustada
    interpretacion: "Visión, percepción, conciencia, alma ('las ventanas del alma'), o sentirse observado.",
    categoria: "General", // O Cuerpo
    palabrasClave: ["ojo", "ojos", "visión", "percepción", "conciencia", "alma"]
  },
  {
    simbolo: "Ola",
    interpretacion: "Emociones poderosas, cambios repentinos, o fuerza abrumadora.",
    categoria: "General", // O Elementos naturales
    palabrasClave: ["ola", "olas", "emoción", "cambio", "fuerza", "mar"]
  },
  {
    simbolo: "Oro", // Similar a Chocolate/Oro
    interpretacion: "Valor, riqueza (material o espiritual), pureza, el yo superior.",
    categoria: "Freudiano (contexto específico), Junguiano, General", // O Objetos/Símbolos
    palabrasClave: ["oro", "valor", "riqueza", "pureza", "yo superior", "tesoro"]
  },
  {
    simbolo: "Oscuridad", // Repetido, mantener versión ajustada
    interpretacion: "El inconsciente, miedo, lo desconocido, potencial oculto, o un período de confusión.",
    categoria: "Junguiano, General", // O Conceptos
    palabrasClave: ["oscuridad", "oscuridad", "inconsciente", "miedo", "desconocido", "potencial"]
  },
  {
    simbolo: "Pájaro", // Repetido, mantener versión ajustada
    interpretacion: "Libertad, trascendencia, mensajes, el alma, o aspiraciones. Diferentes pájaros tienen simbolismos específicos.",
    categoria: "Animales",
    palabrasClave: ["pájaro", "ave", "libertad", "trascendencia", "alma", "aspiración"]
  },
  {
    simbolo: "Pan",
    interpretacion: "Nutrición básica, sustento (físico o espiritual), o compartir.",
    categoria: "General", // O Objetos
    palabrasClave: ["pan", "alimento", "nutrición", "sustento", "compartir", "eucaristía"]
  },
  {
    simbolo: "Pantano",
    interpretacion: "Sentirse atascado, confusión, emociones negativas estancadas, o una situación difícil de la que salir.",
    categoria: "General", // O Lugares
    palabrasClave: ["pantano", "atascado", "confusión", "emoción", "estancamiento", "dificultad"]
  },
  {
    simbolo: "Paquete/Regalo",
    interpretacion: "Sorpresas, talentos ocultos, oportunidades, o algo que se recibe o se da.",
    categoria: "General", // O Objetos
    palabrasClave: ["paquete", "regalo", "sorpresa", "talento", "oportunidad", "obsequio"]
  },
  {
    simbolo: "Parálisis",
    interpretacion: "Incapacidad para actuar o tomar decisiones, sentirse atrapado o indefenso, a veces relacionado con la parálisis del sueño.",
    categoria: "General, Adleriano", // O Estados/Situaciones
    palabrasClave: ["parálisis", "inmovilidad", "indecisión", "atrapado", "indefensión", "sueño"]
  },
  {
    simbolo: "Payaso",
    interpretacion: "Alegría fingida, ocultar verdaderos sentimientos, miedo (coulrofobia), o el arquetipo del bufón.",
    categoria: "Junguiano (Trickster), General", // O Figuras
    palabrasClave: ["payaso", "bufón", "alegría", "máscara", "miedo", "trickster"]
  },
  {
    simbolo: "Pelo (vello corporal)",
    interpretacion: "Instintos, naturaleza animal, o aspectos primarios.",
    categoria: "General", // O Cuerpo
    palabrasClave: ["pelo", "vello", "instinto", "naturaleza", "virilidad", "feminidad"]
  },
  {
    simbolo: "Perderse", // Repetido, mantener versión ajustada
    interpretacion: "Incertidumbre, falta de dirección, confusión, o la búsqueda de un nuevo camino.",
    categoria: "General, Adleriano", // O Situaciones
    palabrasClave: ["perderse", "perdido", "incertidumbre", "dirección", "confusión", "camino"]
  },
  {
    simbolo: "Perro", // Similar a Perro (estrangular...)
    interpretacion: "Lealtad, amistad, protección, instintos. Un perro agresivo: traición o miedo.",
    categoria: "Freudiano (contexto específico), General", // O Animales
    palabrasClave: ["perro", "can", "lealtad", "amistad", "protección", "instinto"]
  },
  {
    simbolo: "Persecución (ser perseguido)", // Repetido, mantener versión ajustada
    interpretacion: "Ansiedad, evitación de un problema o emoción, sentirse amenazado por algo o alguien (interno o externo).",
    categoria: "Freudiano, General", // O Acciones/Situaciones
    palabrasClave: ["persecución", "perseguir", "ansiedad", "amenaza", "huida", "miedo"]
  },
  {
    simbolo: "Persona (arquetipo)",
    interpretacion: "La máscara social que se presenta al mundo, que puede diferir del verdadero yo.",
    categoria: "Junguiano", // O Figuras/Conceptos
    palabrasClave: ["persona", "máscara", "personalidad", "social", "yo", "arquetipo"]
  },
  {
    simbolo: "Pez", // Similar a Pez (retorciéndose)
    interpretacion: "El inconsciente, emociones, intuición, abundancia, o conocimiento oculto.",
    categoria: "Animales",
    palabrasClave: ["pez", "peces", "inconsciente", "emoción", "intuición", "fertilidad"]
  },
  {
    simbolo: "Piedras/Rocas",
    interpretacion: "Obstáculos, fuerza, estabilidad, o cargas emocionales.",
    categoria: "General", // O Elementos naturales
    palabrasClave: ["piedra", "roca", "obstáculo", "fuerza", "estabilidad", "carga"]
  },
  {
    simbolo: "Policía", // Similar a Policía, Oficial...
    interpretacion: "Autoridad, reglas, conciencia, orden, o sentirse controlado o culpable.",
    categoria: "Freudiano (padre), General", // O Figuras
    palabrasClave: ["policía", "autoridad", "regla", "conciencia", "orden", "culpa"]
  },
  {
    simbolo: "Príncipe/Princesa",
    interpretacion: "El yo idealizado, potencial, romance, o aspectos inmaduros de la personalidad.",
    categoria: "Junguiano, General", // O Figuras
    palabrasClave: ["príncipe", "princesa", "ideal", "potencial", "romance", "inmadurez"]
  },
  {
    simbolo: "Puente", // Repetido, mantener versión ajustada
    interpretacion: "Transición, conexión entre dos estados o lugares, superar obstáculos, o tomar decisiones.",
    categoria: "Junguiano, General", // O Lugares
    palabrasClave: ["puente", "transición", "conexión", "obstáculo", "decisión", "cruce"]
  },
  {
    simbolo: "Puerta",
    interpretacion: "Oportunidades, transiciones, acceso a algo nuevo, o barreras. Abierta o cerrada es significativo.",
    categoria: "General", // O Objetos
    palabrasClave: ["puerta", "oportunidad", "transición", "acceso", "barrera", "umbral"]
  },
  {
    simbolo: "Reloj", // Repetido, mantener versión ajustada
    interpretacion: "Tiempo, urgencia, plazos, el paso de la vida, o la necesidad de prestar atención al tiempo.",
    categoria: "General", // O Objetos
    palabrasClave: ["reloj", "tiempo", "urgencia", "plazo", "vida", "atención"]
  },
  {
    simbolo: "Rey/Reina", // Repetido, mantener versión ajustada (la más general)
    interpretacion: "Autoridad, poder, control, o figuras parentales internalizadas.",
    categoria: "Freudiano, Junguiano", // O Figuras
    palabrasClave: ["rey", "reina", "autoridad", "poder", "control", "padres"]
  },
  {
    simbolo: "Río",
    interpretacion: "El flujo de la vida, emociones, tiempo, o un viaje. Cruzar un río: una transición importante.",
    categoria: "Junguiano, General", // O Elementos naturales/Lugares
    palabrasClave: ["río", "flujo", "vida", "emoción", "tiempo", "viaje"]
  },
  {
    simbolo: "Ropa", // Similar a Uniformes/Ropa
    interpretacion: "La imagen que se proyecta, la persona, roles sociales. Ropa sucia: necesidad de cambio; ropa nueva: nueva identidad.",
    categoria: "Freudiano, General", // O Objetos
    palabrasClave: ["ropa", "imagen", "persona", "rol", "identidad", "cambio"]
  },
  {
    simbolo: "Ruinas",
    interpretacion: "El pasado, decadencia, algo que ha terminado o necesita ser reconstruido.",
    categoria: "General", // O Lugares
    palabrasClave: ["ruina", "pasado", "decadencia", "fin", "reconstrucción", "abandono"]
  },
  {
    simbolo: "Sangre",
    interpretacion: "Energía vital, pasión, vida, muerte, herida emocional o física, o lazos familiares.",
    categoria: "General", // O Elementos naturales/Símbolos
    palabrasClave: ["sangre", "energía", "pasión", "vida", "muerte", "familia"]
  },
  {
    simbolo: "Sapo/Rana",
    interpretacion: "Transformación (cuento del príncipe rana), repulsión, o abundancia.",
    categoria: "Animales",
    palabrasClave: ["sapo", "rana", "transformación", "repulsión", "fertilidad", "cambio"]
  },
  {
    simbolo: "Semillas",
    interpretacion: "Potencial, nuevos comienzos, crecimiento, o ideas que necesitan ser cultivadas.",
    categoria: "General", // O Elementos naturales/Objetos
    palabrasClave: ["semilla", "potencial", "comienzo", "crecimiento", "idea", "cultivo"]
  },
  {
    simbolo: "Conexión Íntima", // Anteriormente "Sexo"
    interpretacion: "Unión, conexión profunda, creatividad, deseo intenso, o la integración de opuestos. No siempre literal.",
    categoria: "General (Freudiano: muy central)", // O Acciones/Conceptos
    palabrasClave: ["unión", "intimidad", "creatividad", "deseo", "integración", "conexión"]
  },
  {
    simbolo: "Sí Mismo (Self)",
    interpretacion: "El centro de la psique, totalidad, individuación, el objetivo del desarrollo psicológico.",
    categoria: "Junguiano", // O Conceptos
    palabrasClave: ["sí mismo", "self", "totalidad", "individuación", "psique", "desarrollo"]
  },
  {
    simbolo: "Sombra (Shadow)",
    interpretacion: "Aspectos reprimidos o negados del yo, el 'lado oscuro', proyecciones.",
    categoria: "Junguiano", // O Conceptos
    palabrasClave: ["sombra", "shadow", "reprimido", "negación", "oscuridad", "proyección"]
  },
  {
    simbolo: "Sombrero", // Repetido, mantener versión ajustada
    interpretacion: "Rol, identidad, pensamientos, o protección.",
    categoria: "General", // O Objetos
    palabrasClave: ["sombrero", "rol", "identidad", "pensamiento", "protección", "cabeza"]
  },
  {
    simbolo: "Subir/Escalar", // Similar a Subir una Escalera
    interpretacion: "Esfuerzo, ambición, superar obstáculos, o alcanzar metas.",
    categoria: "Freudiano, General, Adleriano", // O Acciones
    palabrasClave: ["subir", "escalar", "esfuerzo", "ambición", "obstáculo", "meta"]
  },
  {
    simbolo: "Teatro",
    interpretacion: "La vida como un escenario, roles que se desempeñan, o la observación de las propias acciones y emociones.",
    categoria: "General", // O Lugares/Situaciones
    palabrasClave: ["teatro", "escenario", "rol", "actuación", "observación", "emoción"]
  },
  {
    simbolo: "Telaraña", // Similar a Araña
    interpretacion: "Sentirse atrapado, situaciones complicadas, o redes de conexión.",
    categoria: "General", // O Objetos/Estructuras
    palabrasClave: ["telaraña", "atrapado", "complicación", "red", "conexión", "trampa"]
  },
  {
    simbolo: "Tesoro", // Similar a Joyas, Tesoro
    interpretacion: "Algo de gran valor (interno o externo), el yo verdadero, talentos ocultos, o metas importantes.",
    categoria: "Freudiano, Junguiano", // O Objetos
    palabrasClave: ["tesoro", "valor", "yo", "talento", "meta", "importante"]
  },
  {
    simbolo: "Tierra/Suelo",
    interpretacion: "Realidad, fundamentos, estabilidad, naturaleza, o la madre tierra.",
    categoria: "Junguiano, General", // O Elementos naturales
    palabrasClave: ["tierra", "suelo", "realidad", "estabilidad", "naturaleza", "madre tierra"]
  },
  {
    simbolo: "Tigre",
    interpretacion: "Poder, agresión, pasión, o belleza peligrosa.",
    categoria: "Animales",
    palabrasClave: ["tigre", "poder", "agresión", "pasión", "belleza", "peligro"]
  },
  {
    simbolo: "Tinta",
    interpretacion: "Comunicación, autoexpresión, o dejar una marca permanente.",
    categoria: "General", // O Objetos
    palabrasClave: ["tinta", "comunicación", "expresión", "marca", "permanencia", "escritura"]
  },
  {
    simbolo: "Tormenta",
    interpretacion: "Conflicto emocional, caos, ira, o una crisis que puede llevar a la limpieza y claridad.",
    categoria: "General", // O Elementos naturales/Situaciones
    palabrasClave: ["tormenta", "conflicto", "caos", "ira", "crisis", "claridad"]
  },
  {
    simbolo: "Toro",
    interpretacion: "Fuerza, potencia, terquedad, o agresión.",
    categoria: "General", // O Animales
    palabrasClave: ["toro", "fuerza", "virilidad", "terquedad", "agresión", "animal"]
  },
  {
    simbolo: "Tortuga",
    interpretacion: "Lentitud, perseverancia, sabiduría ancestral, protección, o el inconsciente colectivo animal.",
    categoria: "Animales",
    palabrasClave: ["tortuga", "lentitud", "perseverancia", "sabiduría", "protección", "inconsciente"]
  },
  {
    simbolo: "Trabajo/Empleo",
    interpretacion: "Responsabilidades, identidad profesional, estrés, o la forma en que uno contribuye al mundo.",
    categoria: "General, Adleriano", // O Situaciones
    palabrasClave: ["trabajo", "empleo", "responsabilidad", "identidad", "estrés", "contribución"]
  },
  {
    simbolo: "Tren",
    interpretacion: "Viaje en la vida, destino, conformidad (seguir las vías), o oportunidades. Perder el tren: oportunidades perdidas.",
    categoria: "General", // O Objetos
    palabrasClave: ["tren", "viaje", "destino", "conformidad", "oportunidad", "vía"]
  },
  {
    simbolo: "Triángulo",
    interpretacion: "Unidad de tres (mente-cuerpo-espíritu), conflicto (triángulo interpersonal), o estabilidad.",
    categoria: "General", // O Símbolos
    palabrasClave: ["triángulo", "unidad", "mente", "cuerpo", "espíritu", "conflicto"]
  },
  {
    simbolo: "Tumba/Sepulcro", // Similar a Cementerio
    interpretacion: "Finales, el pasado enterrado, o la necesidad de dejar ir algo.",
    categoria: "General", // O Lugares
    palabrasClave: ["tumba", "sepulcro", "final", "pasado", "enterrar", "dejar ir"]
  },
  {
    simbolo: "Túnel", // Repetido, mantener versión ajustada
    interpretacion: "Transición, paso a lo desconocido, o un período de incertidumbre antes de alcanzar la 'luz al final del túnel'.",
    categoria: "Junguiano, General", // O Lugares
    palabrasClave: ["túnel", "transición", "desconocido", "incertidumbre", "luz", "camino"]
  },
  {
    simbolo: "Universidad",
    interpretacion: "Aprendizaje superior, búsqueda de conocimiento, o un período de desarrollo y exploración.",
    categoria: "General, Adleriano", // O Lugares
    palabrasClave: ["universidad", "aprendizaje", "conocimiento", "desarrollo", "exploración", "educación"]
  },
  {
    simbolo: "Uvas",
    interpretacion: "Abundancia, placer, o celebración (vino).",
    categoria: "General", // O Objetos/Elementos naturales
    palabrasClave: ["uva", "uvas", "abundancia", "placer", "celebración", "vino"]
  },
  {
    simbolo: "Vampiro",
    interpretacion: "Algo o alguien que drena energía vital, miedo a la pérdida de vitalidad, o aspectos seductores y peligrosos.",
    categoria: "General", // O Figuras
    palabrasClave: ["vampiro", "energía", "vitalidad", "miedo", "seducción", "peligro"]
  },
  {
    simbolo: "Vela",
    interpretacion: "Luz en la oscuridad, esperanza, espiritualidad, o el paso del tiempo (vela que se consume).",
    categoria: "General", // O Objetos
    palabrasClave: ["vela", "luz", "esperanza", "espiritualidad", "tiempo", "consumo"]
  },
  {
    simbolo: "Ventana",
    interpretacion: "Perspectiva, oportunidades, la forma en que se ve el mundo o se es visto por él.",
    categoria: "General", // O Objetos
    palabrasClave: ["ventana", "perspectiva", "oportunidad", "visión", "mundo", "mirada"]
  },
  {
    simbolo: "Verano",
    interpretacion: "Plenitud, calidez, crecimiento, o un tiempo de ocio y disfrute.",
    categoria: "General", // O Conceptos/Situaciones
    palabrasClave: ["verano", "plenitud", "calidez", "crecimiento", "ocio", "disfrute"]
  },
  {
    simbolo: "Volar", // Repetido, mantener versión ajustada
    interpretacion: "Libertad, trascendencia, ambición, escapar de problemas, o una nueva perspectiva.",
    categoria: "Freudiano, General, Adleriano", // O Acciones
    palabrasClave: ["volar", "libertad", "trascendencia", "ambición", "escapar", "perspectiva"]
  },
  {
    simbolo: "Volcán",
    interpretacion: "Emociones reprimidas a punto de estallar, ira contenida, o un poder creativo inmenso.",
    categoria: "Lugares", // O Elementos naturales
    palabrasClave: ["volcán", "emoción", "ira", "represión", "poder", "creatividad"]
  },
  {
    simbolo: "Voz",
    interpretacion: "Comunicación, autoexpresión, la conciencia, o un mensaje importante (interno o externo).",
    categoria: "General", // O Conceptos/Símbolos
    palabrasClave: ["voz", "comunicación", "expresión", "conciencia", "mensaje", "importante"]
  },
  {
    simbolo: "Zapatos", // Repetido, mantener versión ajustada
    interpretacion: "El camino en la vida, la postura ante el mundo, o la preparación para un viaje.",
    categoria: "Objetos",
    palabrasClave: ["zapato", "zapatos", "camino", "vida", "postura", "viaje"]
  },
  {
    simbolo: "Zoo",
    interpretacion: "Instintos controlados o reprimidos, sentirse enjaulado, o la necesidad de organizar aspectos caóticos de la vida.",
    categoria: "Lugares",
    palabrasClave: ["zoo", "zoológico", "instinto", "control", "jaula", "caos"]
  }
];

// Función para limpiar y tokenizar el texto
function limpiarYTokenizar(texto: string): string[] {
  // Eliminar signos de puntuación y dividir en palabras
  return texto
    .toLowerCase()
    .replace(/[.,;:!?¡¿"'()\[\]{}]/g, '') // Eliminar signos de puntuación
    .split(/\s+/) // Dividir por espacios
    .filter(palabra => palabra.length > 0); // Filtrar palabras vacías
}

// Función para calcular la relevancia de un símbolo en el texto
function calcularRelevancia(simbolo: SimboloFreudiano, palabras: string[]): number {
  let puntuacion = 0;
  
  // Contar coincidencias de palabras clave
  simbolo.palabrasClave.forEach(palabraClave => {
    const palabraClaveLower = palabraClave.toLowerCase();
    // Buscar coincidencias exactas de palabras completas
    if (palabras.includes(palabraClaveLower)) {
      puntuacion += 2; // Puntuación más alta para coincidencias exactas
    } else if (palabras.some(p => p.includes(palabraClaveLower))) {
      puntuacion += 1; // Puntuación más baja para coincidencias parciales
    }
  });

  return puntuacion;
}

// Interfaz para el resultado de encontrarConexiones
interface AnalisisConexiones {
  temasComunes: string[];
  categoriaPrincipal: string;
}

// Función para encontrar conexiones entre símbolos
function encontrarConexiones(simbolos: SimboloFreudiano[]): AnalisisConexiones {
  const temas: Record<string, number> = {};
  const categorias: Record<string, number> = {};
  
  // Analizar temas y categorías recurrentes
  simbolos.forEach(simbolo => {
    // Contar categorías
    const categoria = simbolo.categoria || 'General';
    categorias[categoria] = (categorias[categoria] || 0) + 1;
    
    // Extraer temas clave de la interpretación
    const palabrasClave = simbolo.interpretacion
      .toLowerCase()
      .split(/[ ,.]+/)
      .filter(palabra => palabra.length > 4); // Filtrar palabras significativas
    
    palabrasClave.forEach(palabra => {
      temas[palabra] = (temas[palabra] || 0) + 1;
    });
  });
  
  // Encontrar temas recurrentes (aparecen en múltiples símbolos)
  const temasComunes = Object.entries(temas)
    .filter(([_, count]) => count > 1)
    .sort((a, b) => b[1] - a[1])
    .map(([tema]) => tema);
    
  // Encontrar categorías predominantes
  const categoriaPrincipal = Object.entries(categorias)
    .sort((a, b) => b[1] - a[1])[0]?.[0] || 'General';
    
  return { temasComunes, categoriaPrincipal };
}

// Función para generar una interpretación coherente basada en los símbolos
export function generarAnalisisFreudiano(simbolos: SimboloFreudiano[]): string {
  if (simbolos.length === 0) {
    return "## Análisis del Sueño\n\n" +
           "No se encontraron símbolos claramente identificables en tu sueño. " +
           "Esto podría deberse a que el contenido es muy simbólico o abstracto. " +
           "Te sugiero reflexionar sobre qué elementos del sueño te llamaron más la atención y qué emociones despertaron en ti.";
  }

  // Agrupar símbolos por categoría
  const porCategoria: Record<string, SimboloFreudiano[]> = {};
  simbolos.forEach(simbolo => {
    const categoria = simbolo.categoria?.split(', ')[0] || 'General'; // Tomar solo la primera categoría si hay múltiples
    if (!porCategoria[categoria]) {
      porCategoria[categoria] = [];
    }
    porCategoria[categoria].push(simbolo);
  });

  // Analizar conexiones entre símbolos
  const { temasComunes, categoriaPrincipal } = encontrarConexiones(simbolos);
  
  // Construir el análisis
  let analisis = "## Análisis del Sueño\n\n";
  
  // Introducción personalizada
  analisis += `Tu sueño presenta varios elementos significativos que, según el enfoque freudiano, ` +
             `pueden ofrecer pistas sobre tu mundo inconsciente. `;
  
  // Mencionar la categoría predominante si es relevante
  if (categoriaPrincipal !== 'General') {
    analisis += `Los símbolos se agrupan principalmente en la categoría de "${categoriaPrincipal}", ` +
               `lo que sugiere que este sueño podría estar relacionado con `;
               
    switch(categoriaPrincipal.toLowerCase()) {
      case 'objetos':
        analisis += "aspectos materiales o simbólicos de tu vida cotidiana. ";
        break;
      case 'animales':
        analisis += "tus instintos más básicos o aspectos primitivos de tu personalidad. ";
        break;
      case 'acciones':
        analisis += "dinámicas de acción o interacción que estás experimentando. ";
        break;
      case 'lugares':
        analisis += "tu sentido de pertenencia o ubicación en diferentes aspectos de tu vida. ";
        break;
      default:
        analisis += "esta área específica de tu experiencia. ";
    }
  }
  
  // Mencionar temas recurrentes si los hay
  if (temasComunes.length > 0) {
    analisis += `\n\n### Temas recurrentes\n\n` +
               `Los siguientes temas aparecen de manera recurrente en los símbolos de tu sueño:\n\n` +
               `- ${temasComunes.slice(0, 3).join("\n- ")}\n\n` +
               `Esto sugiere que estos elementos podrían ser particularmente significativos ` +
               `en la interpretación de tu sueño.`;
  }
  
  // Detallar los símbolos encontrados por categoría
  analisis += "\n\n## Símbolos identificados\n\n";
  
  Object.entries(porCategoria).forEach(([categoria, simbolosCategoria]) => {
    analisis += `### ${categoria}\n`;
    
    simbolosCategoria.forEach(simbolo => {
      // Resaltar las palabras clave dentro de la interpretación
      let interpretacion = simbolo.interpretacion;
      simbolo.palabrasClave.forEach(palabra => {
        const regex = new RegExp(`\\b${palabra}\\b`, 'gi');
        interpretacion = interpretacion.replace(regex, `**${palabra}**`);
      });
      
      analisis += `- **${simbolo.simbolo}**: ${interpretacion}\n`;
    });
    
    analisis += "\n";
  });

  // Interpretación integrada
  analisis += "## Interpretación integrada\n\n";
  
  // Crear una interpretación coherente basada en los símbolos
  const simbolosPrincipales = simbolos.slice(0, 3).map(s => s.simbolo).join(", ");
  
  analisis += `Considerando los principales símbolos (${simbolosPrincipales}), ` +
             `este sueño parece reflejar una dinámica donde `;
  
  // Añadir interpretación basada en la categoría principal
  switch(categoriaPrincipal.toLowerCase()) {
    case 'objetos':
      analisis += "los objetos que te rodean adquieren un significado especial. " +
                "Podrías estar procesando tu relación con el mundo material o con herramientas que utilizas en tu vida diaria. ";
      break;
    case 'animales':
      analisis += "tus instintos y emociones más básicas están jugando un papel importante. " +
                "Esto podría indicar que estás en contacto con aspectos más primitivos de tu personalidad. ";
      break;
    case 'acciones':
      analisis += "las acciones y dinámicas de movimiento son fundamentales. " +
                "Podrías estar procesando cambios o transiciones en tu vida. ";
      break;
    case 'lugares':
      analisis += "el sentido de lugar y ubicación es significativo. " +
                "Esto podría reflejar tu búsqueda de pertenencia o tu relación con diferentes aspectos de tu vida. ";
      break;
    default:
      analisis += "varios elementos simbólicos están interactuando de maneras significativas. ";
  }
  
  // Añadir sección de posibles razones del sueño
  analisis += "\n\n## Posibles razones de este sueño\n\n" +
             "Basándome en los símbolos analizados, este sueño podría estar relacionado con:\n\n" +
             "1. **Procesamiento emocional**: Tu mente podría estar procesando emociones o experiencias recientes. " +
             `Los elementos como ${simbolos.slice(0, 2).map(s => `"${s.simbolo}"`).join(' y ')} sugieren ` +
             `que estás trabajando en asuntos relacionados con ${categoriaPrincipal.toLowerCase()}.\n\n` +
             
             "2. **Deseos o preocupaciones inconscientes**: Según Freud, los sueños son la realización disfrazada de deseos reprimidos. " +
             "¿Hay algún deseo o temor que estés evitando enfrentar en tu vida diaria?\n\n" +
             
             "3. **Conflictos internos**: La presencia de símbolos contrastantes podría indicar tensiones internas. " +
             "¿Estás experimentando alguna situación que te haga sentir dividido o en conflicto?\n\n" +
             
             "4. **Procesos de cambio**: Si hay símbolos de transformación, podrían reflejar transiciones importantes " +
             "que estás experimentando o que necesitas realizar.`;\n\n" +
             
             // Mantener la reflexión final original
             "## Reflexión final\n\n" +
             "Recuerda que, según Freud, los sueños son la vía regia hacia el inconsciente. " +
             "Los símbolos aquí identificados pueden representar deseos reprimidos, conflictos internos " +
             "o aspectos de tu personalidad que merecen atención. " +
             "Te animo a reflexionar sobre cómo estos elementos podrían estar relacionados con tus experiencias, " +
             "emociones y relaciones en tu vida despierta. " +
             "¿Qué conexiones personales puedes establecer con estos símbolos? ¿Qué emociones evocan en ti?";

  return analisis;
}

export function buscarSimbolos(texto: string): {simbolos: SimboloFreudiano[], analisis: string} {
  if (!texto) return { simbolos: [], analisis: '' };

  const palabras = limpiarYTokenizar(texto);
  const simbolosConPuntuacion: {simbolo: SimboloFreudiano, puntuacion: number}[] = [];

  // Calcular puntuación para cada símbolo
  simbolosInterpretados.forEach((simbolo: SimboloFreudiano) => {
    const puntuacion = calcularRelevancia(simbolo, palabras);
    if (puntuacion > 0) {
      // Verificar si ya existe un símbolo similar (mismo nombre)
      const indiceExistente = simbolosConPuntuacion.findIndex(s => 
        s.simbolo.simbolo === simbolo.simbolo
      );
      
      if (indiceExistente === -1) {
        // Si no existe, agregarlo
        simbolosConPuntuacion.push({ simbolo, puntuacion });
      } else if (puntuacion > simbolosConPuntuacion[indiceExistente].puntuacion) {
        // Si existe y tiene mayor puntuación, reemplazarlo
        simbolosConPuntuacion[indiceExistente] = { simbolo, puntuacion };
      }
    }
  });

  // Ordenar por puntuación (mayor a menor)
  simbolosConPuntuacion.sort((a, b) => b.puntuacion - a.puntuacion);
  
  // Extraer solo los símbolos
  const simbolosEncontrados = simbolosConPuntuacion.map(item => item.simbolo);
  
  // Generar análisis
  const analisis = generarAnalisisFreudiano(simbolosEncontrados);

  return {
    simbolos: simbolosEncontrados,
    analisis
  };
}

export function obtenerCategorias(): string[] {
  const simbolosUnicos = simbolosInterpretados.filter((simbolo: SimboloFreudiano, index: number, self: SimboloFreudiano[]) =>
    index === self.findIndex(s => s.simbolo === simbolo.simbolo)
  );
  return simbolosUnicos.map((simbolo: SimboloFreudiano) => simbolo.categoria).filter(Boolean) as string[];
}

export function filtrarPorCategoria(categoria: string): SimboloFreudiano[] {
  if (categoria === "Todas") {
    return [...simbolosInterpretados];
  }

  return simbolosInterpretados.filter((simbolo: SimboloFreudiano) => 
    simbolo.categoria === categoria
  );
}

// Función para buscar símbolos por término
export function buscarPorTermino(termino: string): SimboloFreudiano[] {
  if (!termino.trim()) {
    return [...simbolosInterpretados];
  }

  const terminoLimpio = termino.toLowerCase().trim();
  return simbolosInterpretados.filter((simbolo: SimboloFreudiano) => {
    // Buscar en el nombre del símbolo
    if (simbolo.simbolo.toLowerCase().includes(terminoLimpio)) {
      return true;
    }
    
    // Buscar en las palabras clave
    if (simbolo.palabrasClave.some((palabra: string) => 
      palabra.toLowerCase().includes(terminoLimpio)
    )) {
      return true;
    }
    
    return false;
  });
}
