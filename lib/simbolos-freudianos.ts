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
    categoria: "General",
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
  }
];

export function buscarSimbolos(texto: string): SimboloFreudiano[] {
  if (!texto) return [];

  const textoLower = texto.toLowerCase();
  const simbolosEncontrados: SimboloFreudiano[] = [];

  simbolosFreudianos.forEach((simbolo: SimboloFreudiano) => {
    // Verificar si alguna palabra clave del símbolo está en el texto
    const encontrado = simbolo.palabrasClave.some((palabra: string) => 
      textoLower.includes(palabra.toLowerCase())
    );

    if (encontrado && !simbolosEncontrados.some((s) => s.simbolo === simbolo.simbolo)) {
      simbolosEncontrados.push(simbolo);
    }
  });

  return simbolosEncontrados;
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
