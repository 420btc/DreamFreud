export interface SimboloFreudiano {
  simbolo: string
  interpretacion: string
  categoria?: string
  palabrasClave: string[]
  referencia?: string
}

// Lista de símbolos freudianos comunes
export const simbolosFreudianos: SimboloFreudiano[] = [
  // Objetos
  {
    simbolo: "Armas (fusil, cuchillo, espada)",
    interpretacion: "Símbolos fálicos por excelencia, representan la potencia sexual masculina, agresión o deseos reprimidos de dominación. En algunos casos, pueden simbolizar la castración si están rotas o inutilizables.",
    categoria: "Objetos",
    palabrasClave: ["arma", "fusil", "cuchillo", "espada", "arma de fuego", "arma blanca", "arma corta", "arma larga", "militar", "combate", "guerra"],
    referencia: "Freud menciona armas como símbolos sexuales en su análisis de sueños masculinos, especialmente en contextos de rivalidad."
  },
  {
    simbolo: "Caja o baúl",
    interpretacion: "Representa los genitales femeninos o el útero. También puede simbolizar secretos reprimidos o el inconsciente.",
    categoria: "Objetos",
    palabrasClave: ["caja", "baúl", "maletín", "cajón", "contenedor", "caja fuerte", "caja de seguridad", "caja de herramientas"],
    referencia: "Freud asocia cajas y contenedores con el cuerpo femenino en varios ejemplos de sueños."
  },
  {
    simbolo: "Sombrero",
    interpretacion: "Puede representar la cabeza (como símbolo del yo) o, en hombres, un símbolo fálico. En mujeres, puede estar ligado a la sexualidad o la identidad.",
    categoria: "Objetos",
    palabrasClave: ["sombrero", "gorra", "boina", "sombrero de copa", "sombrero de paja", "sombrero de fiesta", "sombrero de sol", "sombrero de lluvia"],
    referencia: "Freud menciona sombreros en relación con simbolismos sexuales y de estatus."
  },
  {
    simbolo: "Reloj",
    interpretacion: "Simboliza el paso del tiempo, la ansiedad por el envejecimiento o la mortalidad. También puede estar relacionado con el ritmo del acto sexual.",
    categoria: "Objetos",
    palabrasClave: ["reloj", "reloj de pared", "reloj de pulsera", "reloj despertador", "reloj de arena", "cronómetro", "hora", "tiempo"],
    referencia: "Freud conecta relojes con la percepción temporal y ansiedades inconscientes."
  },
  
  // Lugares
  {
    simbolo: "Cueva",
    interpretacion: "Similar al túnel, representa el útero o la vagina, asociado con el nacimiento o deseos sexuales. También puede simbolizar el inconsciente.",
    categoria: "Lugares",
    palabrasClave: ["cueva", "caverna", "cueva subterránea", "cueva de montaña", "cueva oscura", "cueva húmeda", "cueva profunda"],
    referencia: "Freud usa cuevas como símbolos de refugio materno o sexualidad en sus análisis."
  },
  {
    simbolo: "Iglesia o templo",
    interpretacion: "Puede representar el cuerpo materno o el útero, pero también conflictos entre deseos sexuales y moralidad/restricciones religiosas.",
    categoria: "Lugares",
    palabrasClave: ["iglesia", "templo", "catedral", "basílica", "mezquita", "sinagoga", "iglesia antigua", "iglesia gótica"],
    referencia: "Freud interpreta edificios religiosos como símbolos de la madre o de la represión."
  },
  {
    simbolo: "Jardín",
    interpretacion: "Simboliza la fertilidad, la sexualidad femenina o un retorno al paraíso (infancia). También puede representar deseos reprimidos de placer.",
    categoria: "Lugares",
    palabrasClave: ["jardín", "huerto", "jardín botánico", "jardín japonés", "jardín zen", "jardín de flores", "jardín de invierno"],
    referencia: "Freud asocia jardines con imágenes de abundancia y sexualidad."
  },
  
  // Animales
  {
    simbolo: "Caballo",
    interpretacion: "Representa la energía sexual, la pasión descontrolada o deseos instintivos. En hombres, puede simbolizar la virilidad; en mujeres, deseos sexuales reprimidos.",
    categoria: "Animales",
    palabrasClave: ["caballo", "yegua", "potro", "caballo salvaje", "caballo de carreras", "caballo de guerra", "caballo de montar"],
    referencia: "Freud analiza caballos como símbolos de fuerza y sexualidad, especialmente en sueños de movimiento."
  },
  {
    simbolo: "Pájaro",
    interpretacion: "Similar a volar, representa deseos sexuales o libertad. También puede ser un símbolo fálico (por su forma) o de la sublimación de deseos.",
    categoria: "Animales",
    palabrasClave: ["pájaro", "ave", "pájaro pequeño", "pájaro grande", "pájaro exótico", "pájaro de presa", "pájaro cantor"],
    referencia: "Freud menciona pájaros en relación con el simbolismo sexual y la liberación."
  },
  {
    simbolo: "Rata o ratón",
    interpretacion: "Simboliza ansiedades sexuales, culpa o deseos reprimidos. También puede representar temores de contaminación o degradación.",
    categoria: "Animales",
    palabrasClave: ["rata", "ratón", "ratón de campo", "ratón de ciudad", "ratón blanco", "ratón negro", "ratón de laboratorio"],
    referencia: "Freud asocia ratas con ansiedades neuróticas y simbolismos fálicos en casos como el 'Hombre de las ratas'."
  },
  
  // Acciones
  {
    simbolo: "Bailar",
    interpretacion: "Representa el acto sexual debido a su ritmo y movimiento. También puede simbolizar la armonía o el conflicto en relaciones.",
    categoria: "Acciones",
    palabrasClave: ["bailar", "danza", "baile", "bailarín", "bailarina", "bailar salsa", "bailar rock"],
    referencia: "Freud interpreta el baile como una expresión sublimada de deseos sexuales."
  },
  {
    simbolo: "Nadar",
    interpretacion: "Relacionado con el agua, simboliza el nacimiento, la vida intrauterina o deseos sexuales. También puede representar la lucha contra resistencias inconscientes.",
    categoria: "Acciones",
    palabrasClave: ["nadar", "natación", "nadar en el mar", "nadar en la piscina", "nadar en río", "nadar de espaldas", "nadar estilo libre"],
    referencia: "Freud conecta nadar con el líquido amniótico y la sexualidad."
  },
  {
    simbolo: "Cortarse el cabello",
    interpretacion: "Simboliza la castración, la pérdida de potencia o el sacrificio de deseos. También puede representar un cambio en la identidad.",
    categoria: "Acciones",
    palabrasClave: ["cortar cabello", "cortarse el pelo", "peluquería", "barbería", "corte de pelo", "cabello corto", "cabello largo"],
    referencia: "Freud asocia cortes (especialmente de cabello) con ansiedades de castración."
  },
  
  // Cuerpo
  {
    simbolo: "Ojos",
    interpretacion: "Simbolizan la percepción, pero también pueden representar la castración (si están dañados) o el deseo de ser visto. En algunos casos, tienen connotaciones sexuales.",
    categoria: "Cuerpo",
    palabrasClave: ["ojo", "ojos", "mirada", "vista", "ver", "observar", "mirar", "mirarse"],
    referencia: "Freud analiza ojos en relación con la mirada y la ansiedad."
  },
  {
    simbolo: "Manos",
    interpretacion: "Representan la acción, el poder o la masturbación. Manos sucias o cortadas pueden simbolizar culpa sexual.",
    categoria: "Cuerpo",
    palabrasClave: ["mano", "manos", "palma", "dedos", "puño", "mano derecha", "mano izquierda"],
    referencia: "Freud conecta manos con actividades sexuales y conflictos de culpa."
  },
  
  // Situaciones
  {
    simbolo: "Perderse",
    interpretacion: "Simboliza la confusión en la vida, el miedo a perder el control o la desconexión con el inconsciente. También puede reflejar ansiedades sexuales.",
    categoria: "Situaciones",
    palabrasClave: ["perderse", "perdido", "desorientado", "confundido", "extraviado", "perdido en la ciudad", "perdido en el bosque"],
    referencia: "Freud interpreta perderse como una metáfora de conflictos internos."
  },
  {
    simbolo: "Embarazo",
    interpretacion: "Representa el deseo de creación, la fertilidad o ansiedades sobre la responsabilidad. También puede simbolizar un retorno al estado intrauterino.",
    categoria: "Situaciones",
    palabrasClave: ["embarazo", "embarazada", "embarazado", "gestación", "preñada", "preñado", "preñez"],
    referencia: "Freud asocia el embarazo con deseos de maternidad/paternidad o regresión."
  },
  
  // Conceptos
  {
    simbolo: "Dinero",
    interpretacion: "Simboliza el poder, la energía libidinal o la defecación (en un sentido infantil). También puede reflejar ansiedades sobre la seguridad.",
    categoria: "Conceptos",
    palabrasClave: ["dinero", "moneda", "billete", "efectivo", "dinero en efectivo", "dinero en el banco", "dinero en el bolsillo"],
    referencia: "Freud conecta dinero con el simbolismo anal y el control."
  },
  {
    simbolo: "Comida",
    interpretacion: "Representa el placer oral, la dependencia materna o deseos sexuales sublimados. También puede simbolizar carencias afectivas.",
    categoria: "Conceptos",
    palabrasClave: ["comida", "alimento", "comer", "comida rápida", "comida casera", "comida gourmet", "comida basura"],
    referencia: "Freud asocia comida con la fase oral y deseos infantiles."
  },
  {
    simbolo: "Oscuridad",
    interpretacion: "Simboliza el inconsciente, el miedo a lo desconocido o la represión de deseos. También puede representar la muerte o el caos.",
    categoria: "Conceptos",
    palabrasClave: ["oscuridad", "oscuro", "tenebroso", "penumbra", "luz tenue", "luz apagada", "luz encendida"],
    referencia: "Freud usa la oscuridad como metáfora del inconsciente en varios análisis."
  },
  
  // Símbolos existentes...
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
    simbolo: "Rey/Reina",
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
    simbolo: "Desnudez",
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
    simbolo: "Cuchillos, Dagas, Lanzas, Espadas, Armas de Fuego",
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
    interpretacion: "Pueden simbolizar receptividad, contención, protección, aspectos ocultos, el inconsciente o un viaje/transición.",
    categoria: "Objetos",
    palabrasClave: ["fosa", "cueva", "botella", "caja", "baúl", "jarra", "maleta", "bolsillo", "barco", "boca", "iglesia"],
  },
  {
    simbolo: "Manzanas, Melocotones, Frutas en general",
    interpretacion: "Pueden representar nutrición, crecimiento, sensualidad, tentación o los frutos del propio trabajo.",
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
    simbolo: "Serpientes",
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
    simbolo: "Ser Perseguido",
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
    simbolo: "Subir una Escalera",
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
    interpretacion: "Símbolo fálico que representa la vida, el crecimiento y la potencia sexual masculina. También simboliza conexión entre el cielo y la tierra, fuerza y conocimiento. Un árbol seco puede indicar falta de vitalidad.",
    categoria: "Elementos naturales",
    palabrasClave: ["árbol", "tronco", "rama", "hoja", "bosque", "selva", "naturaleza", "crecimiento", "vida", "conocimiento"],
  },
  {
    simbolo: "Alimentos/Comida",
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
    interpretacion: "Creatividad (tejer redes), sentirse atrapado, miedo, poder femenino, o una figura materna dominante/controladora.",
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
    simbolo: "Caja",
    interpretacion: "Secretos, potencial oculto, el inconsciente, o algo que necesita ser abierto o explorado.",
    categoria: "Objetos",
    palabrasClave: ["caja", "baúl", "cofre", "contenedor", "secreto", "oculto"]
  },
  {
    simbolo: "Cama",
    interpretacion: "Descanso, intimidad, enfermedad, o el lugar donde se procesan los sueños y el inconsciente.",
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
    simbolo: "Caminos/Carreteras",
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
    simbolo: "Casa",
    interpretacion: "El yo, la psique, seguridad, familia. Diferentes habitaciones representan aspectos del yo o áreas de la vida.",
    categoria: "Lugares",
    palabrasClave: ["casa", "hogar", "vivienda", "habitación", "hogar", "seguridad", "familia"]
  },
  {
    simbolo: "Cascada",
    interpretacion: "Gran liberación de emociones, flujo de energía, o sentimientos abrumadores.",
    categoria: "Naturaleza",
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
    categoria: "Personas",
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
    interpretacion: "Indulgencia, suciedad, terquedad, o a veces prosperidad (hucha de cerdito).",
    categoria: "Animales",
    palabrasClave: ["cerdo", "cerda", "cochinillo", "marrano", "puerco", "chancho", "hucha"]
  },
  {
    simbolo: "Faro",
    interpretacion: "Guía, esperanza, iluminación en tiempos de oscuridad o confusión.",
    categoria: "General",
    palabrasClave: ["faro", "guía", "luz", "esperanza", "iluminación", "navegación"]
  },
  {
    simbolo: "Fiesta",
    interpretacion: "Celebración, vida social, alegría, o, a veces, superficialidad o exceso.",
    categoria: "General",
    palabrasClave: ["fiesta", "celebración", "alegría", "reunión", "festejo", "social"]
  },
  {
    simbolo: "Flores",
    interpretacion: "Belleza, crecimiento, amor, alegría, o el florecimiento del potencial. Diferentes flores pueden tener significados específicos.",
    categoria: "General",
    palabrasClave: ["flor", "flores", "jardín", "belleza", "crecimiento", "amor", "alegría"]
  },
  {
    simbolo: "Fotografía",
    interpretacion: "Recuerdos, el pasado, una imagen fija de un momento o persona, o la necesidad de examinar algo más de cerca.",
    categoria: "General",
    palabrasClave: ["foto", "fotografía", "recuerdo", "imagen", "momento", "pasado"]
  },
  {
    simbolo: "Fuego",
    interpretacion: "Pasión, ira, destrucción, transformación, purificación, o una advertencia. Estar en llamas: ansiedad.",
    categoria: "General",
    palabrasClave: ["fuego", "llama", "ardor", "pasión", "ira", "destrucción", "transformación", "ansiedad"]
  },
  {
    simbolo: "Funeral",
    interpretacion: "Final de algo (una relación, una fase de la vida, un aspecto del yo), duelo, o la necesidad de dejar ir.",
    categoria: "General",
    palabrasClave: ["funeral", "entierro", "muerte", "duelo", "final", "despedida"]
  },
  {
    simbolo: "Gafas/Lentes",
    interpretacion: "Percepción, claridad de visión, o la necesidad de ver las cosas de manera diferente.",
    categoria: "General",
    palabrasClave: ["gafas", "lentes", "anteojos", "visión", "percepción", "claridad"]
  },
  {
    simbolo: "Gato",
    interpretacion: "Independencia, misterio, intuición, sensualidad, o el lado astuto y sigiloso de uno mismo.",
    categoria: "General",
    palabrasClave: ["gato", "gata", "felino", "independencia", "misterio", "intuición"]
  },
  {
    simbolo: "Gigante",
    interpretacion: "Poder abrumador (interno o externo), una figura de autoridad temida, o un gran desafío.",
    categoria: "Junguiano, General",
    palabrasClave: ["gigante", "enorme", "poder", "autoridad", "desafío", "miedo"]
  },
  {
    simbolo: "Globos",
    interpretacion: "Celebración, alegría, ligereza, aspiraciones, o algo frágil y efímero.",
    categoria: "Freudiano, General",
    palabrasClave: ["globo", "globos", "celebración", "alegría", "ligereza", "aspiraciones"]
  },
  {
    simbolo: "Guerra",
    interpretacion: "Conflicto interno o externo, agresión, lucha por el poder, o una situación caótica.",
    categoria: "General",
    palabrasClave: ["guerra", "batalla", "conflicto", "lucha", "poder", "caos"]
  },
  {
    simbolo: "Hadas",
    interpretacion: "Magia, imaginación, deseos, o el lado lúdico e infantil de la psique.",
    categoria: "General",
    palabrasClave: ["hada", "hadas", "magia", "imaginación", "deseo", "infantil"]
  },
  {
    simbolo: "Herida",
    interpretacion: "Dolor emocional o físico, vulnerabilidad, o un trauma pasado que necesita curación.",
    categoria: "General",
    palabrasClave: ["herida", "dolor", "vulnerabilidad", "trauma", "curación", "cicatriz"]
  },
  {
    simbolo: "Hielo",
    interpretacion: "Emociones congeladas, frialdad, aislamiento, o una situación estancada.",
    categoria: "General",
    palabrasClave: ["hielo", "frío", "congelado", "aislamiento", "estancamiento", "emoción"]
  },
  {
    simbolo: "Hogar",
    interpretacion: "Seguridad, comodidad, el yo, la familia, o el centro de la vida personal.",
    categoria: "General",
    palabrasClave: ["hogar", "casa", "seguridad", "comodidad", "familia", "refugio"]
  },
  {
    simbolo: "Humo",
    interpretacion: "Confusión, algo oculto o poco claro, o una advertencia de peligro (fuego).",
    categoria: "General",
    palabrasClave: ["humo", "confusión", "oculto", "peligro", "advertencia", "neblina"]
  },
  {
    simbolo: "Iglesia",
    interpretacion: "Espiritualidad, moralidad, comunidad, refugio, o dogmatismo.",
    categoria: "Freudiano, General",
    palabrasClave: ["iglesia", "templo", "religión", "espiritualidad", "moralidad", "comunidad"]
  },
  {
    simbolo: "Infierno",
    interpretacion: "Sufrimiento, culpa, miedos internos, o una situación de vida intolerable.",
    categoria: "General",
    palabrasClave: ["infierno", "sufrimiento", "culpa", "miedo", "dolor", "castigo"]
  },
  {
    simbolo: "Insectos",
    interpretacion: "Pequeñas molestias, ansiedades, o cosas que 'fastidian'. El tipo de insecto puede dar más detalles.",
    categoria: "Animales",
    palabrasClave: ["insecto", "bicho", "molestia", "ansiedad", "pequeño", "fastidio"]
  },
  {
    simbolo: "Luna",
    interpretacion: "Feminidad, intuición, emociones, ciclos, el inconsciente, misterio.",
    categoria: "Junguiano, General",
    palabrasClave: ["luna", "fase lunar", "noche", "misterio", "intuición", "ciclo"]
  },
  {
    simbolo: "Luz",
    interpretacion: "Conciencia, claridad, comprensión, esperanza, guía espiritual.",
    categoria: "General",
    palabrasClave: ["luz", "iluminación", "claridad", "esperanza", "guía", "espiritual"]
  },
  {
    simbolo: "Maestro/Profesor",
    interpretacion: "Guía, conocimiento, autoridad, o la necesidad de aprender una lección importante.",
    categoria: "Freudiano (padre), General",
    palabrasClave: ["maestro", "profesor", "guía", "conocimiento", "autoridad", "aprendizaje"]
  },
  {
    simbolo: "Magia/Mago",
    interpretacion: "Poder de transformación, lo desconocido, creatividad, o el deseo de controlar situaciones.",
    categoria: "Junguiano, General",
    palabrasClave: ["magia", "mago", "hechicero", "transformación", "creatividad", "control"]
  },
  {
    simbolo: "Maleta",
    interpretacion: "Viajes, cargas emocionales ('equipaje'), o preparación para un cambio.",
    categoria: "Freudiano, General",
    palabrasClave: ["maleta", "equipaje", "viaje", "cambio", "preparación", "carga"]
  },
  {
    simbolo: "Manos",
    interpretacion: "Acción, habilidad, creación, comunicación (lenguaje de señas), o ayuda.",
    categoria: "General",
    palabrasClave: ["mano", "manos", "acción", "habilidad", "creación", "comunicación"]
  },
  {
    simbolo: "Mapa",
    interpretacion: "Dirección, guía, planificación, o la búsqueda del propio camino en la vida.",
    categoria: "General",
    palabrasClave: ["mapa", "dirección", "guía", "planificación", "camino", "vida"]
  },
  {
    simbolo: "Máscara",
    interpretacion: "Ocultar el verdadero yo, la persona, engaño, o protección.",
    categoria: "Junguiano, General",
    palabrasClave: ["máscara", "careta", "ocultar", "personalidad", "engaño", "protección"]
  },
  {
    simbolo: "Medicinas/Fármacos",
    interpretacion: "Curación, necesidad de ayuda, o evasión de problemas.",
    categoria: "General",
    palabrasClave: ["medicina", "fármaco", "medicamento", "curación", "ayuda", "evasión"]
  },
  {
    simbolo: "Monstruos",
    interpretacion: "Miedos internos, aspectos reprimidos de la sombra, desafíos abrumadores, o traumas pasados.",
    categoria: "Junguiano, General",
    palabrasClave: ["monstruo", "miedo", "sombra", "trauma", "desafío", "represión"]
  },
  {
    simbolo: "Montaña",
    interpretacion: "Obstáculos, metas elevadas, desafíos, o un lugar para la perspectiva y la introspección.",
    categoria: "Junguiano, General",
    palabrasClave: ["montaña", "obstáculo", "meta", "desafío", "altura", "introspección"]
  },
  {
    simbolo: "Muerte",
    interpretacion: "Finales, transformación, cambio, dejar ir el pasado, o el miedo a lo desconocido (raramente muerte literal).",
    categoria: "Freudiano, General",
    palabrasClave: ["muerte", "fin", "transformación", "cambio", "miedo", "desconocido"]
  },
  {
    simbolo: "Multitud",
    interpretacion: "Conformidad, pérdida de individualidad, sentirse abrumado, o, por el contrario, conexión social.",
    categoria: "General",
    palabrasClave: ["multitud", "masa", "conformidad", "individualidad", "conexión", "social"]
  },
  {
    simbolo: "Música",
    interpretacion: "Emociones, armonía, autoexpresión, o el ritmo de la vida.",
    categoria: "General",
    palabrasClave: ["música", "canción", "melodía", "emoción", "armonía", "ritmo"]
  },
  {
    simbolo: "Nadar",
    interpretacion: "Navegar por las emociones, lidiar con el inconsciente, o la capacidad de mantenerse a flote en situaciones difíciles.",
    categoria: "General",
    palabrasClave: ["nadar", "navegar", "emoción", "inconsciente", "flotar", "dificultad"]
  },
  {
    simbolo: "Nieve",
    interpretacion: "Pureza, frialdad emocional, aislamiento, o un nuevo comienzo (cubrir lo viejo).",
    categoria: "General",
    palabrasClave: ["nieve", "frío", "pureza", "aislamiento", "nuevo comienzo", "blanco"]
  },
  {
    simbolo: "Niño/Niña",
    interpretacion: "Inocencia, vulnerabilidad, el niño interior, potencial, o aspectos inmaduros del yo.",
    categoria: "Freudiano, Junguiano (Niño Divino)",
    palabrasClave: ["niño", "niña", "inocencia", "vulnerabilidad", "potencial", "inmadurez"]
  },
  {
    simbolo: "Noche",
    interpretacion: "El inconsciente, misterio, miedo, descanso, o un tiempo para la introspección.",
    categoria: "Junguiano, General",
    palabrasClave: ["noche", "oscuridad", "inconsciente", "misterio", "miedo", "introspección"]
  },
  {
    simbolo: "Nubes",
    interpretacion: "Pensamientos, confusión, obstáculos a la claridad, o sueños y fantasías.",
    categoria: "General",
    palabrasClave: ["nube", "nubes", "pensamiento", "confusión", "claridad", "sueño"]
  },
  {
    simbolo: "Nudo",
    interpretacion: "Problemas, tensión, sentirse atado o restringido, o una conexión compleja.",
    categoria: "General",
    palabrasClave: ["nudo", "problema", "tensión", "atadura", "restricción", "conexión"]
  },
  {
    simbolo: "Números",
    interpretacion: "Pueden tener significados personales, simbólicos (según la numerología), o representar orden/caos.",
    categoria: "Freudiano (3), General",
    palabrasClave: ["número", "números", "numerología", "orden", "caos", "significado"]
  },
  {
    simbolo: "Océano",
    interpretacion: "El inconsciente colectivo, la inmensidad de las emociones, lo desconocido, o el origen de la vida.",
    categoria: "Junguiano, General",
    palabrasClave: ["océano", "mar", "inconsciente", "emoción", "inmensidad", "origen"]
  },
  {
    simbolo: "Oficina",
    interpretacion: "Trabajo, responsabilidades, estructura, o a veces, monotonía y estrés.",
    categoria: "General",
    palabrasClave: ["oficina", "trabajo", "responsabilidad", "estructura", "monotonía", "estrés"]
  },
  {
    simbolo: "Ojo(s)",
    interpretacion: "Visión, percepción, conciencia, alma ('las ventanas del alma'), o sentirse observado.",
    categoria: "General",
    palabrasClave: ["ojo", "ojos", "visión", "percepción", "conciencia", "alma"]
  },
  {
    simbolo: "Ola",
    interpretacion: "Emociones poderosas, cambios repentinos, o fuerza abrumadora.",
    categoria: "General",
    palabrasClave: ["ola", "olas", "emoción", "cambio", "fuerza", "mar"]
  },
  {
    simbolo: "Oro",
    interpretacion: "Valor, riqueza (material o espiritual), pureza, el yo superior.",
    categoria: "Freudiano (contexto específico), Junguiano, General",
    palabrasClave: ["oro", "valor", "riqueza", "pureza", "yo superior", "tesoro"]
  },
  {
    simbolo: "Oscuridad",
    interpretacion: "El inconsciente, miedo, lo desconocido, potencial oculto, o un período de confusión.",
    categoria: "Junguiano, General",
    palabrasClave: ["oscuridad", "oscuridad", "inconsciente", "miedo", "desconocido", "potencial"]
  },
  {
    simbolo: "Pájaro",
    interpretacion: "Libertad, trascendencia, mensajes, el alma, o aspiraciones. Diferentes pájaros tienen simbolismos específicos.",
    categoria: "Animales",
    palabrasClave: ["pájaro", "ave", "libertad", "trascendencia", "alma", "aspiración"]
  },
  {
    simbolo: "Pan",
    interpretacion: "Nutrición básica, sustento (físico o espiritual), o compartir.",
    categoria: "General",
    palabrasClave: ["pan", "alimento", "nutrición", "sustento", "compartir", "eucaristía"]
  },
  {
    simbolo: "Pantano",
    interpretacion: "Sentirse atascado, confusión, emociones negativas estancadas, o una situación difícil de la que salir.",
    categoria: "General",
    palabrasClave: ["pantano", "atascado", "confusión", "emoción", "estancamiento", "dificultad"]
  },
  {
    simbolo: "Paquete/Regalo",
    interpretacion: "Sorpresas, talentos ocultos, oportunidades, o algo que se recibe o se da.",
    categoria: "General",
    palabrasClave: ["paquete", "regalo", "sorpresa", "talento", "oportunidad", "obsequio"]
  },
  {
    simbolo: "Parálisis",
    interpretacion: "Incapacidad para actuar o tomar decisiones, sentirse atrapado o indefenso, a veces relacionado con la parálisis del sueño.",
    categoria: "General, Adleriano",
    palabrasClave: ["parálisis", "inmovilidad", "indecisión", "atrapado", "indefensión", "sueño"]
  },
  {
    simbolo: "Payaso",
    interpretacion: "Alegría fingida, ocultar verdaderos sentimientos, miedo (coulrofobia), o el arquetipo del bufón.",
    categoria: "Junguiano (Trickster), General",
    palabrasClave: ["payaso", "bufón", "alegría", "máscara", "miedo", "trickster"]
  },
  {
    simbolo: "Pelo (vello corporal)",
    interpretacion: "Instintos, naturaleza animal, o virilidad/feminidad.",
    categoria: "General",
    palabrasClave: ["pelo", "vello", "instinto", "naturaleza", "virilidad", "feminidad"]
  },
  {
    simbolo: "Perderse",
    interpretacion: "Incertidumbre, falta de dirección, confusión, o la búsqueda de un nuevo camino.",
    categoria: "General, Adleriano",
    palabrasClave: ["perderse", "perdido", "incertidumbre", "dirección", "confusión", "camino"]
  },
  {
    simbolo: "Perro",
    interpretacion: "Lealtad, amistad, protección, instintos. Un perro agresivo: traición o miedo.",
    categoria: "Freudiano (contexto específico), General",
    palabrasClave: ["perro", "can", "lealtad", "amistad", "protección", "instinto"]
  },
  {
    simbolo: "Persecución (ser perseguido)",
    interpretacion: "Ansiedad, evitación de un problema o emoción, sentirse amenazado por algo o alguien (interno o externo).",
    categoria: "Freudiano, General",
    palabrasClave: ["persecución", "perseguir", "ansiedad", "amenaza", "huida", "miedo"]
  },
  {
    simbolo: "Persona (arquetipo)",
    interpretacion: "La máscara social que se presenta al mundo, que puede diferir del verdadero yo.",
    categoria: "Junguiano",
    palabrasClave: ["persona", "máscara", "personalidad", "social", "yo", "arquetipo"]
  },
  {
    simbolo: "Pez",
    interpretacion: "El inconsciente, emociones, intuición, fertilidad, o conocimiento oculto.",
    categoria: "Animales",
    palabrasClave: ["pez", "peces", "inconsciente", "emoción", "intuición", "fertilidad"]
  },
  {
    simbolo: "Piedras/Rocas",
    interpretacion: "Obstáculos, fuerza, estabilidad, o cargas emocionales.",
    categoria: "General",
    palabrasClave: ["piedra", "roca", "obstáculo", "fuerza", "estabilidad", "carga"]
  },
  {
    simbolo: "Policía",
    interpretacion: "Autoridad, reglas, conciencia, orden, o sentirse controlado o culpable.",
    categoria: "Freudiano (padre), General",
    palabrasClave: ["policía", "autoridad", "regla", "conciencia", "orden", "culpa"]
  },
  {
    simbolo: "Príncipe/Princesa",
    interpretacion: "El yo idealizado, potencial, romance, o aspectos inmaduros de la personalidad.",
    categoria: "Junguiano, General",
    palabrasClave: ["príncipe", "princesa", "ideal", "potencial", "romance", "inmadurez"]
  },
  {
    simbolo: "Puente",
    interpretacion: "Transición, conexión entre dos estados o lugares, superar obstáculos, o tomar decisiones.",
    categoria: "Junguiano, General",
    palabrasClave: ["puente", "transición", "conexión", "obstáculo", "decisión", "cruce"]
  },
  {
    simbolo: "Puerta",
    interpretacion: "Oportunidades, transiciones, acceso a algo nuevo, o barreras. Abierta o cerrada es significativo.",
    categoria: "General",
    palabrasClave: ["puerta", "oportunidad", "transición", "acceso", "barrera", "umbral"]
  },
  {
    simbolo: "Reloj",
    interpretacion: "Tiempo, urgencia, plazos, el paso de la vida, o la necesidad de prestar atención al tiempo.",
    categoria: "General",
    palabrasClave: ["reloj", "tiempo", "urgencia", "plazo", "vida", "atención"]
  },
  {
    simbolo: "Rey/Reina",
    interpretacion: "Autoridad, poder, control, o figuras parentales internalizadas.",
    categoria: "Freudiano, Junguiano",
    palabrasClave: ["rey", "reina", "autoridad", "poder", "control", "padres"]
  },
  {
    simbolo: "Río",
    interpretacion: "El flujo de la vida, emociones, tiempo, o un viaje. Cruzar un río: una transición importante.",
    categoria: "Junguiano, General",
    palabrasClave: ["río", "flujo", "vida", "emoción", "tiempo", "viaje"]
  },
  {
    simbolo: "Ropa",
    interpretacion: "La imagen que se proyecta, la persona, roles sociales. Ropa sucia: necesidad de cambio; ropa nueva: nueva identidad.",
    categoria: "Freudiano, General",
    palabrasClave: ["ropa", "imagen", "persona", "rol", "identidad", "cambio"]
  },
  {
    simbolo: "Ruinas",
    interpretacion: "El pasado, decadencia, algo que ha terminado o necesita ser reconstruido.",
    categoria: "General",
    palabrasClave: ["ruina", "pasado", "decadencia", "fin", "reconstrucción", "abandono"]
  },
  {
    simbolo: "Sangre",
    interpretacion: "Energía vital, pasión, vida, muerte, herida emocional o física, o lazos familiares.",
    categoria: "General",
    palabrasClave: ["sangre", "energía", "pasión", "vida", "muerte", "familia"]
  },
  {
    simbolo: "Sapo/Rana",
    interpretacion: "Transformación (cuento del príncipe rana), repulsión, o fertilidad.",
    categoria: "Animales",
    palabrasClave: ["sapo", "rana", "transformación", "repulsión", "fertilidad", "cambio"]
  },
  {
    simbolo: "Semillas",
    interpretacion: "Potencial, nuevos comienzos, crecimiento, o ideas que necesitan ser cultivadas.",
    categoria: "General",
    palabrasClave: ["semilla", "potencial", "comienzo", "crecimiento", "idea", "cultivo"]
  },
  {
    simbolo: "Sexo",
    interpretacion: "Unión, intimidad, creatividad, deseo, o la integración de opuestos. No siempre literal.",
    categoria: "General (Freudiano: muy central)",
    palabrasClave: ["sexo", "unión", "intimidad", "creatividad", "deseo", "integración"]
  },
  {
    simbolo: "Sí Mismo (Self)",
    interpretacion: "El centro de la psique, totalidad, individuación, el objetivo del desarrollo psicológico.",
    categoria: "Junguiano",
    palabrasClave: ["sí mismo", "self", "totalidad", "individuación", "psique", "desarrollo"]
  },
  {
    simbolo: "Sombra (Shadow)",
    interpretacion: "Aspectos reprimidos o negados del yo, el 'lado oscuro', proyecciones.",
    categoria: "Junguiano",
    palabrasClave: ["sombra", "shadow", "reprimido", "negación", "oscuridad", "proyección"]
  },
  {
    simbolo: "Sombrero",
    interpretacion: "Rol, identidad, pensamientos, o protección.",
    categoria: "General",
    palabrasClave: ["sombrero", "rol", "identidad", "pensamiento", "protección", "cabeza"]
  },
  {
    simbolo: "Subir/Escalar",
    interpretacion: "Esfuerzo, ambición, superar obstáculos, o alcanzar metas.",
    categoria: "Freudiano, General, Adleriano",
    palabrasClave: ["subir", "escalar", "esfuerzo", "ambición", "obstáculo", "meta"]
  },
  {
    simbolo: "Teatro",
    interpretacion: "La vida como un escenario, roles que se desempeñan, o la observación de las propias acciones y emociones.",
    categoria: "General",
    palabrasClave: ["teatro", "escenario", "rol", "actuación", "observación", "emoción"]
  },
  {
    simbolo: "Telaraña",
    interpretacion: "Sentirse atrapado, situaciones complicadas, o redes de conexión.",
    categoria: "General",
    palabrasClave: ["telaraña", "atrapado", "complicación", "red", "conexión", "trampa"]
  },
  {
    simbolo: "Tesoro",
    interpretacion: "Algo de gran valor (interno o externo), el yo verdadero, talentos ocultos, o metas importantes.",
    categoria: "Freudiano, Junguiano",
    palabrasClave: ["tesoro", "valor", "yo", "talento", "meta", "importante"]
  },
  {
    simbolo: "Tierra/Suelo",
    interpretacion: "Realidad, fundamentos, estabilidad, naturaleza, o la madre tierra.",
    categoria: "Junguiano, General",
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
    categoria: "General",
    palabrasClave: ["tinta", "comunicación", "expresión", "marca", "permanencia", "escritura"]
  },
  {
    simbolo: "Tormenta",
    interpretacion: "Conflicto emocional, caos, ira, o una crisis que puede llevar a la limpieza y claridad.",
    categoria: "General",
    palabrasClave: ["tormenta", "conflicto", "caos", "ira", "crisis", "claridad"]
  },
  {
    simbolo: "Toro",
    interpretacion: "Fuerza, virilidad, terquedad, o agresión.",
    categoria: "General",
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
    categoria: "General, Adleriano",
    palabrasClave: ["trabajo", "empleo", "responsabilidad", "identidad", "estrés", "contribución"]
  },
  {
    simbolo: "Tren",
    interpretacion: "Viaje en la vida, destino, conformidad (seguir las vías), o oportunidades. Perder el tren: oportunidades perdidas.",
    categoria: "General",
    palabrasClave: ["tren", "viaje", "destino", "conformidad", "oportunidad", "vía"]
  },
  {
    simbolo: "Triángulo",
    interpretacion: "Unidad de tres (mente-cuerpo-espíritu), conflicto (triángulo amoroso), o estabilidad.",
    categoria: "General",
    palabrasClave: ["triángulo", "unidad", "mente", "cuerpo", "espíritu", "conflicto"]
  },
  {
    simbolo: "Tumba/Sepulcro",
    interpretacion: "Finales, el pasado enterrado, o la necesidad de dejar ir algo.",
    categoria: "General",
    palabrasClave: ["tumba", "sepulcro", "final", "pasado", "enterrar", "dejar ir"]
  },
  {
    simbolo: "Túnel",
    interpretacion: "Transición, paso a lo desconocido, o un período de incertidumbre antes de alcanzar la 'luz al final del túnel'.",
    categoria: "Junguiano, General",
    palabrasClave: ["túnel", "transición", "desconocido", "incertidumbre", "luz", "camino"]
  },
  {
    simbolo: "Universidad",
    interpretacion: "Aprendizaje superior, búsqueda de conocimiento, o un período de desarrollo y exploración.",
    categoria: "General, Adleriano",
    palabrasClave: ["universidad", "aprendizaje", "conocimiento", "desarrollo", "exploración", "educación"]
  },
  {
    simbolo: "Uvas",
    interpretacion: "Abundancia, placer, o celebración (vino).",
    categoria: "General",
    palabrasClave: ["uva", "uvas", "abundancia", "placer", "celebración", "vino"]
  },
  {
    simbolo: "Vampiro",
    interpretacion: "Algo o alguien que drena energía vital, miedo a la pérdida de vitalidad, o aspectos seductores y peligrosos.",
    categoria: "General",
    palabrasClave: ["vampiro", "energía", "vitalidad", "miedo", "seducción", "peligro"]
  },
  {
    simbolo: "Vela",
    interpretacion: "Luz en la oscuridad, esperanza, espiritualidad, o el paso del tiempo (vela que se consume).",
    categoria: "General",
    palabrasClave: ["vela", "luz", "esperanza", "espiritualidad", "tiempo", "consumo"]
  },
  {
    simbolo: "Ventana",
    interpretacion: "Perspectiva, oportunidades, la forma en que se ve el mundo o se es visto por él.",
    categoria: "General",
    palabrasClave: ["ventana", "perspectiva", "oportunidad", "visión", "mundo", "mirada"]
  },
  {
    simbolo: "Verano",
    interpretacion: "Plenitud, calidez, crecimiento, o un tiempo de ocio y disfrute.",
    categoria: "General",
    palabrasClave: ["verano", "plenitud", "calidez", "crecimiento", "ocio", "disfrute"]
  },
  {
    simbolo: "Volar",
    interpretacion: "Libertad, trascendencia, ambición, escapar de problemas, o una nueva perspectiva.",
    categoria: "Freudiano, General, Adleriano",
    palabrasClave: ["volar", "libertad", "trascendencia", "ambición", "escapar", "perspectiva"]
  },
  {
    simbolo: "Volcán",
    interpretacion: "Emociones reprimidas a punto de estallar, ira contenida, o un poder creativo inmenso.",
    categoria: "Lugares",
    palabrasClave: ["volcán", "emoción", "ira", "represión", "poder", "creatividad"]
  },
  {
    simbolo: "Voz",
    interpretacion: "Comunicación, autoexpresión, la conciencia, o un mensaje importante (interno o externo).",
    categoria: "General",
    palabrasClave: ["voz", "comunicación", "expresión", "conciencia", "mensaje", "importante"]
  },
  {
    simbolo: "Zapatos",
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

// Función para generar un resumen de análisis basado en los símbolos encontrados
export function generarAnalisisFreudiano(simbolos: SimboloFreudiano[]): string {
  if (simbolos.length === 0) {
    return "No se encontraron símbolos freudianos significativos en este sueño. " +
           "Esto podría deberse a que el contenido es muy simbólico o abstracto. " +
           "Considera reflexionar sobre los elementos del sueño que más te llamaron la atención.";
  }

  // Agrupar símbolos por categoría
  const porCategoria: Record<string, SimboloFreudiano[]> = {};
  simbolos.forEach(simbolo => {
    const categoria = simbolo.categoria || 'General';
    if (!porCategoria[categoria]) {
      porCategoria[categoria] = [];
    }
    porCategoria[categoria].push(simbolo);
  });

  // Construir el análisis
  let analisis = "## Análisis Freudiano del Sueño\n\n";
  
  analisis += "Basado en los símbolos encontrados en tu sueño, aquí tienes un análisis según la teoría freudiana:\n\n";
  
  // Añadir sección por categoría
  Object.entries(porCategoria).forEach(([categoria, simbolosCategoria]) => {
    analisis += `### ${categoria}\n`;
    
    simbolosCategoria.forEach(simbolo => {
      analisis += `- **${simbolo.simbolo}**: ${simbolo.interpretacion}\n`;
    });
    
    analisis += "\n";
  });

  // Añadir conclusión
  analisis += "### Interpretación General\n";
  analisis += "Recuerda que en el psicoanálisis freudiano, los sueños son considerados " +
             "como la vía regia hacia el inconsciente. Los símbolos aquí identificados pueden representar " +
             "deseos reprimidos, conflictos internos o aspectos de tu personalidad que merecen atención. " +
             "Te animamos a reflexionar sobre cómo estos elementos podrían relacionarse con tus experiencias " +
             "y emociones en la vida despierta.";

  return analisis;
}

export function buscarSimbolos(texto: string): {simbolos: SimboloFreudiano[], analisis: string} {
  if (!texto) return { simbolos: [], analisis: '' };

  const palabras = limpiarYTokenizar(texto);
  const simbolosConPuntuacion: {simbolo: SimboloFreudiano, puntuacion: number}[] = [];

  // Calcular puntuación para cada símbolo
  simbolosFreudianos.forEach(simbolo => {
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

// Función para obtener todas las categorías disponibles
export function obtenerCategorias(): string[] {
  const categorias = new Set<string>();

  simbolosFreudianos.forEach((simbolo: SimboloFreudiano) => {
    if (simbolo.categoria) {
      categorias.add(simbolo.categoria);
    }
  });

  return Array.from(categorias).sort();
}

// Función para filtrar símbolos por categoría
export function filtrarPorCategoria(categoria: string): SimboloFreudiano[] {
  if (categoria === "Todas") {
    return [...simbolosFreudianos];
  }

  return simbolosFreudianos.filter((simbolo: SimboloFreudiano) => 
    simbolo.categoria === categoria
  );
}

// Función para buscar símbolos por término
export function buscarPorTermino(termino: string): SimboloFreudiano[] {
  if (!termino.trim()) {
    return [...simbolosFreudianos];
  }

  const terminoLower = termino.toLowerCase();

  return simbolosFreudianos.filter(
    (simbolo) =>
      simbolo.simbolo.toLowerCase().includes(terminoLower) ||
      simbolo.interpretacion.toLowerCase().includes(terminoLower) ||
      simbolo.palabrasClave.some((palabra) => palabra.toLowerCase().includes(terminoLower)),
  )
}
