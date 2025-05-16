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
    palabrasClave: ["sótano", "subsuelo", "bodega", "cuarto de herramientas", "lugar oscuro", "espacio bajo tierra"],
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
