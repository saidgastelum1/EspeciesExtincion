// Base de datos de especies — fuentes: Enciclovida (CONABIO), IUCN Red List, iNaturalist México, NOM-059-SEMARNAT
const ESPECIES = [
  {
    id: "rana-ladradora-guerrero",
    nombre: "Rana Ladradora de Guerrero",
    cient: "Craugastor guerreroensis",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Anfibio • Anuro",
    habitat: "Bosque pino-encino de Guerrero",
    poblacion: "Desconocida",
    tamaño: "32 – 40 mm",
    peso: "< 5 g",
    emoji: "🐸",
    sonido: "selva",
    desc: "La rana ladradora de Guerrero es un anfibio endémico conocido únicamente de su localidad tipo cerca de Agua del Obispo, municipio de Chilpancingo, Guerrero. Habita en bosques de pino-encino a unos 980 m de altitud. Su cuerpo es esbelto, de coloración gris con tinte verdoso y manchas dorsales oscuras. Se reproduce sin fase larvaria acuática: las crías emergen directamente del huevo como pequeñas ranitas.",
    amenazas: [
      "Destrucción del hábitat por deforestación y cambio de uso de suelo en Guerrero.",
      "Pérdida de cobertura vegetal en bosques de pino-encino.",
      "Posible afectación por el hongo quitrídeo Batrachochytrium dendrobatidis.",
      "Distribución extremadamente restringida que la hace vulnerable a cualquier perturbación."
    ],
    curiosidades: [
      { t: "Reproducción directa", txt: "No tiene fase larvaria: los huevos se desarrollan directamente en ranitas completamente formadas, sin pasar por el estadio de renacuajo." },
      { t: "Endemismo extremo", txt: "Es conocida únicamente de una sola localidad en el municipio de Chilpancingo, lo que la convierte en una de las ranas más raras de México." },
      { t: "Dedos expandidos", txt: "Los extremos de sus dedos forman discos ovalados que le permiten adherirse a superficies verticales en el sotobosque." }
    ]
  },
  {
    id: "raya-arrecife",
    nombre: "Raya Redonda de Arrecife",
    cient: "Urobatis concentricus",
    estado: "AMENAZADO",
    categoria: "Pez cartilaginoso • Raya",
    habitat: "Pacífico mexicano, fondos rocosos",
    poblacion: "Reducida",
    tamaño: "Hasta 56 cm diámetro",
    peso: "Hasta 2 kg",
    emoji: "🐟",
    sonido: "oceano",
    desc: "La raya redonda de arrecife es una especie endémica del Pacífico mexicano, hallada desde Baja California hasta Nayarit. Habita fondos rocosos y arrecifes someros, donde se camufla perfectamente con el sustrato. Su disco circular presenta un patrón de manchas concéntricas que le da nombre. Es bentónica y nocturna, y se alimenta de crustáceos, moluscos y gusanos poliquetos.",
    amenazas: [
      "Captura incidental en redes de arrastre y palangres de fondo.",
      "Destrucción de arrecifes rocosos por actividades portuarias y turísticas.",
      "Endemismo restringido al Pacífico mexicano que limita su capacidad de recuperación."
    ],
    curiosidades: [
      { t: "Patrón único", txt: "Sus manchas concéntricas en el disco son únicas entre las rayas del Pacífico y sirven de camuflaje sobre fondos de piedra y arena." },
      { t: "Aguijón venenoso", txt: "Posee una espina caudal con veneno que usa como defensa; puede causar heridas dolorosas pero raramente son mortales para humanos." },
      { t: "Solo en México", txt: "Es endémica exclusiva de aguas mexicanas del Pacífico, lo que la hace especialmente vulnerable a la sobrepesca regional." }
    ]
  },
  {
    id: "culebra-ojo-gato",
    nombre: "Culebra Ojo de Gato del Suroeste",
    cient: "Leptodeira maculata",
    estado: "AMENAZADO",
    categoria: "Reptil • Serpiente",
    habitat: "Bosque tropical seco del SW México",
    poblacion: "Estable pero escasa",
    tamaño: "50 – 90 cm",
    peso: "80 – 200 g",
    emoji: "🐍",
    sonido: "selva",
    desc: "La culebra ojo de gato del suroeste es una serpiente de hábitos nocturnos distribuida en Guerrero, Oaxaca y Chiapas. Sus ojos de pupila vertical en forma de gato le permiten ver con poca luz. Se alimenta principalmente de ranas, lagartijas y huevos de anfibios. No es peligrosa para los humanos.",
    amenazas: [
      "Pérdida del bosque tropical seco, uno de los ecosistemas más amenazados de México.",
      "Captura para el comercio ilegal de fauna exótica.",
      "Persecución directa por confundirse con serpientes venenosas."
    ],
    curiosidades: [
      { t: "Visión nocturna", txt: "Su pupila vertical elíptica, similar a la del gato, le otorga excelente visión en condiciones de baja luminosidad para cazar anfibios de noche." },
      { t: "Cazadora de ranas", txt: "Especialista en localizar nidos de ranas arbóreas; trepa a la vegetación para depredar huevos y adultos mientras duermen." },
      { t: "Opistoglifa", txt: "Tiene colmillos en la parte posterior de la mandíbula con veneno leve, suficiente para inmovilizar presas pequeñas pero inofensivo para humanos." }
    ]
  },
  {
    id: "ballena-azul",
    nombre: "Ballena Azul",
    cient: "Balaenoptera musculus",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Mamífero • Cetáceo",
    habitat: "Océanos del mundo, costas mexicanas",
    poblacion: "10,000 – 25,000 individuos",
    tamaño: "24 – 33 m",
    peso: "100 – 200 t",
    emoji: "🐋",
    sonido: "oceano",
    desc: "La ballena azul es el animal más grande que ha existido sobre la Tierra. En aguas mexicanas se avista principalmente en el Pacífico, frente a Baja California, donde acude a alimentarse de kril. Su corazón pesa aproximadamente 180 kg. A pesar de su tamaño monumental, se alimenta de pequeños crustáceos que filtra con sus barbas.",
    amenazas: [
      "Colisiones con embarcaciones de gran calado en rutas de tráfico marítimo.",
      "Enredamiento en artes de pesca de deriva y redes fantasma.",
      "Contaminación acústica submarina que interfiere con su comunicación y navegación.",
      "Cambio climático que reduce las poblaciones de kril, su principal alimento."
    ],
    curiosidades: [
      { t: "El ser más grande", txt: "Con hasta 33 m de longitud y 200 toneladas, supera en masa a cualquier dinosaurio conocido, incluido el Argentinosaurus." },
      { t: "Corazón gigante", txt: "Su corazón pesa unos 180 kg y late entre 4 y 8 veces por minuto; un humano podría gatear por su aorta." },
      { t: "Canto a larga distancia", txt: "Emite vocalizaciones a frecuencias infrasónicas que pueden viajar miles de kilómetros bajo el agua." }
    ]
  },
  {
    id: "chachalaca-ventricastana",
    nombre: "Chachalaca Ventricastaña",
    cient: "Ortalis wagleri",
    estado: "AMENAZADO",
    categoria: "Ave • Cracidae",
    habitat: "Bosque tropical seco del NW México",
    poblacion: "Reducida",
    tamaño: "48 – 58 cm",
    peso: "430 – 600 g",
    emoji: "🦜",
    sonido: "selva",
    desc: "La chachalaca ventricastaña es un ave endémica de México que habita en el bosque tropical seco de Sinaloa, Nayarit, Jalisco y Colima. Su vientre color castaño la distingue de otras chachalacas. Es muy ruidosa al amanecer y atardecer, cuando grupos de aves cantan en coro estruendoso. Se alimenta de frutos, hojas tiernas e insectos.",
    amenazas: [
      "Pérdida del bosque tropical seco por desmonte para agricultura y ganadería.",
      "Caza furtiva para consumo local.",
      "Distribución restringida al noroeste mexicano."
    ],
    curiosidades: [
      { t: "Coro matutino", txt: "Al amanecer, grupos cantan simultáneamente produciendo un coro ensordecedor que puede escucharse a kilómetros de distancia." },
      { t: "Árbol frutal viviente", txt: "Dispersa semillas de frutos tropicales a través de sus excrementos, cumpliendo un papel clave en la regeneración del bosque." },
      { t: "Endémica del noroeste", txt: "Solo existe en la vertiente pacífica mexicana desde el sur de Sinaloa hasta Colima, en uno de los ecosistemas más deforestados del país." }
    ]
  },
  {
    id: "colorin-pecho-naranja",
    nombre: "Colorín Pecho Naranja",
    cient: "Passerina leclancherii",
    estado: "AMENAZADO",
    categoria: "Ave • Cardinalidae",
    habitat: "Bosque tropical seco, costas de México",
    poblacion: "Reducida",
    tamaño: "11 – 12 cm",
    peso: "11 – 14 g",
    emoji: "🐦",
    sonido: "selva",
    desc: "El colorín mexicano es un ave endémica de llamativa coloración. El macho luce plumaje azul brillante con pecho y vientre naranja intenso, mientras la hembra es parda. Habita en bosques tropicales secos y matorrales del Pacífico mexicano. Su canto melodioso y sus colores lo han hecho víctima del comercio ilegal de aves.",
    amenazas: [
      "Captura ilegal para el comercio de aves de jaula, principal amenaza.",
      "Destrucción del bosque tropical seco para usos agrícolas.",
      "Fragmentación del hábitat que aísla poblaciones reproductoras."
    ],
    curiosidades: [
      { t: "Colores llamativos", txt: "El macho combina azul ultramarino, naranja vivo y verde olivo en un plumaje considerado entre los más coloridos de las aves mexicanas." },
      { t: "Solo en México", txt: "Es endémico exclusivo de México, principalmente en Jalisco, Colima, Michoacán, Guerrero y Oaxaca en la vertiente del Pacífico." },
      { t: "Víctima del tráfico", txt: "Su belleza lo convierte en blanco de capturadores ilegales; miles de individuos son extraídos anualmente de la naturaleza." }
    ]
  },
  {
    id: "abaniquillo-chiapas",
    nombre: "Abaniquillo Adornado de Chiapas",
    cient: "Anolis anisolepis",
    estado: "AMENAZADO",
    categoria: "Reptil • Lagartija",
    habitat: "Selva húmeda de Chiapas",
    poblacion: "Desconocida",
    tamaño: "12 – 18 cm",
    peso: "5 – 15 g",
    emoji: "🦎",
    sonido: "selva",
    desc: "El abaniquillo adornado de Chiapas es una lagartija arbórea endémica de la selva húmeda chiapaneca. Los machos poseen un abanico gular vistoso que despliegan para defender territorio y atraer hembras. Su coloración críptica le permite mimetizarse con la vegetación. Se alimenta de insectos y arañas entre ramas y hojas.",
    amenazas: [
      "Deforestación acelerada de la selva húmeda de Chiapas.",
      "Degradación del hábitat por ganadería extensiva.",
      "Colecta para el comercio ilegal de reptiles exóticos."
    ],
    curiosidades: [
      { t: "Abanico comunicador", txt: "El abanico gular del macho es usado para señalar su presencia a otros machos y para el cortejo, siendo visible a varios metros de distancia." },
      { t: "Camaleón sin serlo", txt: "Aunque no es un camaleón, puede modificar su tono de verde a pardo según temperatura y estado emocional." },
      { t: "Territorial estricto", txt: "Los machos realizan flexiones corporales y exhiben el abanico ante los intrusos para defender activamente su espacio en la vegetación." }
    ]
  },
  {
    id: "cecilia-oaxaquena",
    nombre: "Cecilia Oaxaqueña",
    cient: "Dermophis oaxacae",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Anfibio • Gymnophiona",
    habitat: "Suelos húmedos de Oaxaca",
    poblacion: "Desconocida",
    tamaño: "30 – 50 cm",
    peso: "20 – 60 g",
    emoji: "🐛",
    sonido: "selva",
    desc: "La cecilia oaxaqueña es un anfibio vermiforme endémico de Oaxaca. Sin patas ni cola visible, vive enterrada en suelos húmedos y hojarasca de bosques tropicales. Es un depredador activo de lombrices, larvas de insectos y pequeños invertebrados. Su piel segmentada la hace parecida a una lombriz gigante, aunque son organismos totalmente distintos.",
    amenazas: [
      "Deforestación y pérdida de suelos húmedos en Oaxaca.",
      "Uso de agroquímicos que eliminan sus presas y contaminan el suelo.",
      "Desconocimiento científico: es tan poco estudiada que su estado real es incierto."
    ],
    curiosidades: [
      { t: "Anfibio sin patas", txt: "Las cecilias son el tercer orden de anfibios, junto a ranas y salamandras; perdieron las extremidades evolutivamente y viven vida subterránea." },
      { t: "Mandíbulas poderosas", txt: "Poseen dos hileras de dientes curvados con los que atrapan presas en el suelo, incluyendo lombrices más gruesas que ellas." },
      { t: "Viviparidad única", txt: "Algunas cecilias dan a luz crías vivas que se alimentan de la piel de la madre durante el desarrollo, un proceso único entre vertebrados." }
    ]
  },
  {
    id: "iguana-espinosa-golfo",
    nombre: "Iguana Espinosa del Golfo",
    cient: "Ctenosaura acanthura",
    estado: "AMENAZADO",
    categoria: "Reptil • Lagartija",
    habitat: "Costa del Golfo de México",
    poblacion: "Reducida",
    tamaño: "80 – 120 cm",
    peso: "1 – 2.5 kg",
    emoji: "🦎",
    sonido: "selva",
    desc: "La iguana espinosa del Golfo es una lagartija robusta endémica de la planicie costera del Golfo de México en Veracruz y Tamaulipas. Su cola cubierta de escamas espinosas en anillos alternos es su característica más distintiva. Principalmente herbívora de adulta, consume hojas, flores y frutos. Es especie importante en la dieta de comunidades indígenas y mestizas.",
    amenazas: [
      "Cacería intensa para consumo humano en comunidades rurales.",
      "Pérdida del hábitat por urbanización costera y agricultura.",
      "Introducción de depredadores exóticos como ratas y perros ferales."
    ],
    curiosidades: [
      { t: "Cola armada", txt: "Los anillos de espinas en la cola son una defensa efectiva; al ser amenazada, la usa como látigo contra depredadores." },
      { t: "Termorregulación solar", txt: "Pasa horas asoleándose en ramas o rocas para alcanzar la temperatura corporal óptima de unos 35 °C antes de alimentarse." },
      { t: "Corredor rápido", txt: "Puede alcanzar velocidades de hasta 35 km/h en carrera, siendo una de las lagartijas más veloces de México." }
    ]
  },
  {
    id: "lagartija-topo",
    nombre: "Lagartija Topo Cinco Dedos",
    cient: "Bipes biporus",
    estado: "AMENAZADO",
    categoria: "Reptil • Lagartija",
    habitat: "Tierras bajas tropicales del SE México",
    poblacion: "Desconocida",
    tamaño: "8 – 14 cm",
    peso: "3 – 8 g",
    emoji: "🦎",
    sonido: "selva",
    desc: "La lagartija topo cinco dedos es una lagartija de cuerpo esbelto y movimientos serpentinos que habita entre la hojarasca y suelos sueltos del sureste mexicano. Sus extremidades reducidas le permiten moverse entre la vegetación densa casi como una serpiente. Se alimenta de pequeños insectos, termitas y arañas. Su coloración dorsal brillante presenta un patrón de líneas claras.",
    amenazas: [
      "Pérdida de la selva húmeda en el sureste de México.",
      "Eliminación de la hojarasca del suelo en zonas perturbadas.",
      "Escaso conocimiento científico sobre sus poblaciones."
    ],
    curiosidades: [
      { t: "Movimiento ondulante", txt: "Sus patas son tan pequeñas que se mueve principalmente ondulando el cuerpo como una serpiente, enterrándose en hojarasca con facilidad." },
      { t: "Especialista de hojarasca", txt: "Vive exclusivamente en la capa de hojarasca del suelo selvático, un microhábitat que desaparece al deforestar." },
      { t: "Partenogénesis posible", txt: "Algunos individuos de su género pueden reproducirse sin machos, clonándose en poblaciones de hembras únicamente." }
    ]
  },
  {
    id: "nauyaca-guerrero",
    nombre: "Nauyaca de Montaña Guerrerense",
    cient: "Mixcoatlus barbouri",
    estado: "AMENAZADO",
    categoria: "Reptil • Serpiente venenosa",
    habitat: "Montañas húmedas de Guerrero",
    poblacion: "Reducida",
    tamaño: "120 – 180 cm",
    peso: "0.8 – 3 kg",
    emoji: "🐍",
    sonido: "selva",
    desc: "La nauyaca de montaña guerrerense es una serpiente venenosa de gran importancia ecológica como controladora de roedores en los bosques serranos de Guerrero. Evita a los humanos y solo ataca cuando se siente acorralada. Su veneno hemotóxico es potente pero existe antiveneno eficaz. Es una especie clave en los ecosistemas de montaña.",
    amenazas: [
      "Matanza indiscriminada por miedo o desconocimiento en comunidades rurales.",
      "Pérdida de hábitat por deforestación de zonas montañosas.",
      "Reducción de poblaciones de roedores que son su alimento base."
    ],
    curiosidades: [
      { t: "Control de plagas natural", txt: "Una sola nauyaca puede consumir decenas de roedores al año, regulando poblaciones que de otra forma dañarían cultivos." },
      { t: "Fosa termosensible", txt: "Posee órganos termorreceptores entre el ojo y la nariz que detectan el calor corporal de las presas en total oscuridad." },
      { t: "Veneno complejo", txt: "Su veneno contiene más de 50 componentes con propiedades hemotóxicas y enzimáticas estudiadas para desarrollar medicamentos." }
    ]
  },
  {
    id: "zorrillo-rayado",
    nombre: "Zorrillo Rayado",
    cient: "Conepatus semistriatus subsp. amazonicus",
    estado: "AMENAZADO",
    categoria: "Mamífero • Carnívoro",
    habitat: "Bosques y matorrales de México",
    poblacion: "Estable pero fragmentada",
    tamaño: "30 – 38 cm",
    peso: "0.5 – 1.8 kg",
    emoji: "🦨",
    sonido: "selva",
    desc: "El zorrillo rayado o mofeta de cola larga es un mamífero omnívoro distribuido desde el sur de Estados Unidos hasta Nicaragua. Sus rayas blancas sobre fondo negro son una advertencia para los depredadores. Cuando se siente amenazado, expulsa un líquido maloliente desde glándulas anales que puede alcanzar hasta 4 metros.",
    amenazas: [
      "Atropellamiento en carreteras, una de las principales causas de mortalidad.",
      "Persecución y envenenamiento en zonas rurales por creer que transmite rabia.",
      "Pérdida de hábitat por urbanización y agricultura."
    ],
    curiosidades: [
      { t: "Defensa química infalible", txt: "Su spray contiene tiol sulfurado que se adhiere a piel y ropa durante días; los depredadores aprenden a evitarlos tras una sola experiencia." },
      { t: "Aviso antes de disparar", txt: "Antes de rociar, patalea, eriza el pelaje y eleva la cola; solo usa su defensa cuando el aviso es ignorado." },
      { t: "Aliado de agricultores", txt: "Consume grandes cantidades de insectos, larvas, ratones y serpientes de cascabel, siendo un aliado natural del campo." }
    ]
  },
  {
    id: "cantil-agua",
    nombre: "Cantil de Agua",
    cient: "Agkistrodon bilineatus",
    estado: "AMENAZADO",
    categoria: "Reptil • Serpiente venenosa",
    habitat: "Ríos y humedales de México",
    poblacion: "Reducida",
    tamaño: "70 – 120 cm",
    peso: "300 – 800 g",
    emoji: "🐍",
    sonido: "oceano",
    desc: "El cantil es una serpiente semiacuática venenosa que habita márgenes de ríos, lagos y pantanos desde México hasta América Central. Pariente del mocasín de agua norteamericano, caza peces, ranas y pequeños mamíferos cerca del agua. Las crías tienen la punta de la cola amarilla que usan como señuelo para atraer presas.",
    amenazas: [
      "Destrucción de humedales y zonas ribereñas por agricultura y ganadería.",
      "Matanza directa por temor en zonas rurales.",
      "Contaminación de cuerpos de agua que reduce sus presas."
    ],
    curiosidades: [
      { t: "Cola señuelo", txt: "Los jóvenes tienen la cola de color amarillo brillante que agitan para imitar un gusano y atraer ranitas y peces." },
      { t: "Nadador experto", txt: "Nada con el cuerpo completamente sumergido o en superficie, pudiendo permanecer bajo el agua varios minutos en busca de presas." },
      { t: "Pupila elíptica", txt: "Su pupila vertical le permite cazar eficazmente tanto de día como de noche en los ríos." }
    ]
  },
  {
    id: "ajolote-altiplano",
    nombre: "Ajolote del Altiplano",
    cient: "Ambystoma velasci",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Anfibio • Salamandra",
    habitat: "Lagos del altiplano central",
    poblacion: "< 1,000 estimados",
    tamaño: "15 – 28 cm",
    peso: "60 – 200 g",
    emoji: "🦎",
    sonido: "oceano",
    desc: "El ajolote del altiplano es una salamandra acuática endémica de México que mantiene sus características larvarias toda la vida —neotenia— conservando branquias externas incluso en la edad adulta. Habita en lagos y canales del altiplano central. Es pariente cercano del famoso ajolote de Xochimilco y enfrenta una grave crisis por la degradación de su hábitat acuático.",
    amenazas: [
      "Contaminación de lagos y canales del altiplano por descargas urbanas e industriales.",
      "Introducción de peces exóticos (carpas, tilapia) que compiten y depredan larvas.",
      "Desecación de cuerpos de agua por extracción excesiva."
    ],
    curiosidades: [
      { t: "Neotenia permanente", txt: "Nunca experimenta metamorfosis completa: mantiene sus branquias externas y vive en el agua toda su vida como si fuera una larva gigante." },
      { t: "Regeneración", txt: "Como otros ajolotes, puede regenerar extremidades completas, partes del corazón e incluso porciones del cerebro sin cicatrices." },
      { t: "Pariente del ajolote famoso", txt: "Es pariente cercano del Ambystoma mexicanum de Xochimilco, aunque habita en lagos y canales de Hidalgo y Puebla." }
    ]
  },
  {
    id: "moni-chiapas",
    nombre: "Moní",
    cient: "Lactifluus chiapanensis",
    estado: "AMENAZADO",
    categoria: "Hongo • Basidiomycota",
    habitat: "Selvas y bosques de Chiapas",
    poblacion: "Desconocida",
    tamaño: "Sombrero 5 – 15 cm",
    peso: "Variable",
    emoji: "🍄",
    sonido: "selva",
    desc: "El Moni es un hongo comestible silvestre endémico de Chiapas, muy apreciado en la gastronomía local y en los mercados indígenas tzotziles y tzeltales. Forma asociaciones micorrízicas con raíces de árboles nativos del bosque chiapaneco, siendo fundamental para la salud del bosque y la nutrición de las comunidades indígenas.",
    amenazas: [
      "Deforestación que destruye los árboles con los que forma asociaciones micorrízicas.",
      "Sobrecolecta sin manejo sustentable en comunidades locales.",
      "Cambio climático que altera los patrones de lluvia necesarios para su fructificación."
    ],
    curiosidades: [
      { t: "Hongo micorrízico", txt: "No puede cultivarse artificialmente porque necesita asociarse con raíces de árboles específicos; solo existe en bosques naturales." },
      { t: "Gastronomía indígena", txt: "Es uno de los hongos silvestres más apreciados en Chiapas; forma parte de guisos tradicionales tzotziles y tzeltales." },
      { t: "Leche fúngica", txt: "Al cortarlo exuda una sustancia lechosa característica del género Lactifluus, de sabor que varía de dulce a picante según la especie." }
    ]
  },
  {
    id: "tillandsia-chiapas",
    nombre: "Tillandsia de Chiapas",
    cient: "Tillandsia chiapensis",
    estado: "AMENAZADO",
    categoria: "Planta • Bromelia",
    habitat: "Bosques húmedos de Chiapas",
    poblacion: "Reducida",
    tamaño: "20 – 40 cm",
    peso: "N/A",
    emoji: "🌿",
    sonido: "selva",
    desc: "La tillandsia de Chiapas es una planta epífita endémica que crece sobre ramas y troncos en los bosques húmedos chiapanecos. No necesita suelo para vivir, obtiene agua y nutrientes directamente del aire y la lluvia a través de tricomas especializados. Sus flores tubulares atraen colibríes que las polinizan.",
    amenazas: [
      "Deforestación que elimina los árboles hospederos donde crece.",
      "Colecta ilegal para el comercio ornamental de plantas exóticas.",
      "Cambio climático que altera la humedad de los bosques donde habita."
    ],
    curiosidades: [
      { t: "Planta del aire", txt: "Absorbe agua y minerales directamente de la atmósfera mediante tricomas en sus hojas, sin necesitar suelo ni raíces funcionales." },
      { t: "Polinizada por colibríes", txt: "Sus flores tubulares de color rojo o morado están diseñadas para ser polinizadas exclusivamente por colibríes." },
      { t: "Sin suelo", txt: "Puede vivir sobre cables eléctricos, techos de lámina y ramas secas siempre que haya humedad ambiental suficiente." }
    ]
  },
  {
    id: "rana-arbol-juanita",
    nombre: "Rana de Árbol de Juanita",
    cient: "Exerodonta juanitae",
    estado: "AMENAZADO",
    categoria: "Anfibio • Anuro",
    habitat: "Bosques tropicales del Pacífico mexicano",
    poblacion: "Reducida",
    tamaño: "40 – 65 mm",
    peso: "8 – 20 g",
    emoji: "🐸",
    sonido: "selva",
    desc: "La rana de árbol de Juanita habita en bosques tropicales de la costa del Pacífico mexicano desde Sonora hasta Guerrero. Nocturna y excelente trepadora, posee almohadillas adhesivas en los dedos. Se reproduce en charcos temporales durante la temporada de lluvias. Su canto es un coro nocturno característico del trópico.",
    amenazas: [
      "Pérdida de charcos y lagunas temporales donde se reproduce.",
      "Deforestación del bosque tropical seco y subhúmedo.",
      "Posible afectación por el hongo quitrídeo que ha diezmado ranas en todo el mundo."
    ],
    curiosidades: [
      { t: "Almohadillas mágicas", txt: "Sus dedos tienen discos adhesivos con estructuras hexagonales microscópicas que generan fuerza de sujeción por adhesión húmeda." },
      { t: "Coro reproductivo", txt: "Durante las lluvias, centenares de machos cantan simultáneamente en charcos; el estruendo puede escucharse a kilómetros de distancia." },
      { t: "Metamorfosis rápida", txt: "Sus renacuajos deben completar la metamorfosis en pocas semanas antes de que los charcos temporales se sequen." }
    ]
  },
  {
    id: "salamandra-tuxtlas",
    nombre: "Salamandra de los Tuxtlas",
    cient: "Bolitoglossa alberchi",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Anfibio • Salamandra",
    habitat: "Sierra de los Tuxtlas, Veracruz",
    poblacion: "< 500 estimados",
    tamaño: "7 – 12 cm",
    peso: "2 – 6 g",
    emoji: "🦎",
    sonido: "lluvia",
    desc: "La salamandra de los Tuxtlas es un anfibio endémico de la Sierra de los Tuxtlas en Veracruz, uno de los fragmentos de selva húmeda más aislados de México. Vive en la hojarasca y bajo rocas en zonas de alta humedad. Es completamente terrestre y se reproduce directamente en tierra. La acelerada deforestación de Los Tuxtlas la tiene al borde de la extinción.",
    amenazas: [
      "Deforestación extrema: más del 90% de la selva de Los Tuxtlas ha sido destruida.",
      "Fragmentación del hábitat que impide el flujo genético entre poblaciones.",
      "Sensibilidad extrema a la desecación del suelo por cambios en la cobertura vegetal."
    ],
    curiosidades: [
      { t: "Sin pulmones funcionales", txt: "Respira completamente a través de la piel y el tejido bucal, sin usar pulmones." },
      { t: "Huevos terrestres", txt: "Pone huevos en tierra húmeda que eclosionan directamente como pequeñas salamandras, sin fase acuática." },
      { t: "Isla biológica", txt: "Los Tuxtlas es un remanente de selva húmeda aislado en la llanura costera veracruzana, refugio de especies que ya no existen en otras partes." }
    ]
  },
  {
    id: "colorin-azulrosa",
    nombre: "Colorín Azulrosa",
    cient: "Passerina rositae",
    estado: "AMENAZADO",
    categoria: "Ave • Cardinalidae",
    habitat: "Matorrales áridos del norte de México",
    poblacion: "Reducida",
    tamaño: "11 – 13 cm",
    peso: "11 – 16 g",
    emoji: "🐦",
    sonido: "viento",
    desc: "El colorín morado es un pequeño pájaro cantor con el macho de un vistoso color azul con tintes morados y rosados. Habita en matorrales espinosos áridos y semiáridos del norte de México. Es migratorio parcial, pasando el invierno en zonas más cálidas.",
    amenazas: [
      "Captura ilegal para el comercio de aves de jaula.",
      "Pérdida de matorral espinoso por agricultura y ganadería.",
      "Colisiones con ventanas y tendidos eléctricos durante migración."
    ],
    curiosidades: [
      { t: "Plumaje cambiante", txt: "Los machos jóvenes son pardos y tardan dos años en adquirir el plumaje azul-morado completo del adulto." },
      { t: "Migratorio parcial", txt: "Las poblaciones del norte migran al sur en invierno, mientras algunas poblaciones mexicanas son residentes todo el año." },
      { t: "Canto complejo", txt: "Su canto incluye frases musicales complejas que los machos aprenden y modifican a lo largo de su vida." }
    ]
  },
  {
    id: "pajarito-monte",
    nombre: "Pajarito de Monte",
    cient: "Psilocybe fagicola",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Ave • Emberizidae",
    habitat: "Pastizales de montaña, centro de México",
    poblacion: "< 2,000 individuos",
    tamaño: "12 – 13 cm",
    peso: "14 – 18 g",
    emoji: "🐦",
    sonido: "viento",
    desc: "El pajarito de monte o gorrión de pastizal es una de las aves más amenazadas de México, endémica de los pastizales de zacatonales de alta montaña en el Eje Neovolcánico. Su distribución es extremadamente fragmentada, con solo unas pocas poblaciones conocidas en el Estado de México, Jalisco y Durango.",
    amenazas: [
      "Conversión de pastizales de montaña para cultivos de maíz y avena.",
      "Sobrepastoreo que elimina el zacatonal necesario para nidificación.",
      "Incendios recurrentes en la época reproductiva."
    ],
    curiosidades: [
      { t: "Género único", txt: "Es la única especie de su género Xenospiza, sin parientes cercanos vivos, representando una línea evolutiva única e irreemplazable." },
      { t: "Pastizal obligado", txt: "No puede sobrevivir fuera de los zacatonales de montaña; no utiliza ningún otro tipo de vegetación para anidar ni alimentarse." },
      { t: "Recuperación activa", txt: "Organizaciones trabajan con comunidades para restaurar pastizales y proteger sus escasas colonias reproductoras." }
    ]
  },
  {
    id: "tiburon-ballena",
    nombre: "Tiburón Ballena",
    cient: "Rhincodon typus",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Pez • Elasmobranquio",
    habitat: "Mares tropicales y subtropicales",
    poblacion: "~100,000 estimados",
    tamaño: "6 – 12 m (hasta 18 m)",
    peso: "9 – 20 t",
    emoji: "🦈",
    sonido: "oceano",
    desc: "El tiburón ballena es el pez más grande del mundo. A pesar de su tamaño colosal, se alimenta exclusivamente de plancton y pequeños cardúmenes que filtra con su enorme boca. En México, las costas de Quintana Roo son sitios importantes de agregación. Su longevidad puede superar los 130 años.",
    amenazas: [
      "Pesca directa en algunos países asiáticos para consumo de aletas y carne.",
      "Colisiones con embarcaciones en zonas de alimentación.",
      "Degradación de ecosistemas marinos que reducen la disponibilidad de plancton."
    ],
    curiosidades: [
      { t: "Pez más grande del mundo", txt: "Con hasta 18 metros de longitud, es el pez más grande del planeta, aunque completamente inofensivo para humanos." },
      { t: "Miles de dientes diminutos", txt: "Tiene entre 3,000 y 5,000 dientes muy pequeños en múltiples filas, aunque los usa como filtro y no para masticar." },
      { t: "Centenario", txt: "Se estima que puede vivir entre 130 y 150 años; los científicos determinan su edad estudiando capas de crecimiento en sus vértebras." }
    ]
  },
  {
    id: "vaquita-marina",
    nombre: "Vaquita Marina",
    cient: "Phocoena sinus",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Mamífero • Cetáceo",
    habitat: "Norte del Golfo de California",
    poblacion: "< 20 individuos",
    tamaño: "1.2 – 1.5 m",
    peso: "30 – 55 kg",
    emoji: "🐬",
    sonido: "oceano",
    desc: "La vaquita marina es el cetáceo más pequeño y el más amenazado del mundo. Endémica del extremo norte del Golfo de California, esta pequeña marsopa es conocida por los distintivos círculos oscuros alrededor de los ojos. Con menos de 20 individuos confirmados, está al borde de la extinción irreversible.",
    amenazas: [
      "Enredamiento en redes de pesca ilegales de totoaba, principal causa de muerte.",
      "Pesca con redes de enmalle de cualquier tipo en su área de distribución.",
      "Contaminación del agua por plaguicidas agrícolas del Valle del Colorado.",
      "Reducción del flujo del Río Colorado que altera el ecosistema del Alto Golfo."
    ],
    curiosidades: [
      { t: "El más pequeño", txt: "Con apenas 1.5 m de largo, es el cetáceo más pequeño del mundo y el único endémico de México entre las marsopas." },
      { t: "Manchas faciales únicas", txt: "Sus inconfundibles manchas oscuras alrededor de ojos y boca la hacen única entre los delfínidos." },
      { t: "Descubierta tarde", txt: "Fue descrita científicamente en 1958 y ya está a punto de desaparecer; símbolo de la velocidad con que la humanidad puede extinguir especies." }
    ]
  },
  {
    id: "raton-alfalfar",
    nombre: "Ratón de Alfalfar",
    cient: "Microtus californicus",
    estado: "AMENAZADO",
    categoria: "Mamífero • Roedor",
    habitat: "Campos agrícolas y pastizales",
    poblacion: "Reducida regionalmente",
    tamaño: "12 – 17 cm",
    peso: "15 – 32 g",
    emoji: "🐭",
    sonido: "viento",
    desc: "El ratón de alfalfar o ratón venado es un pequeño roedor de pelaje bicolor —pardo en el dorso y blanco en el vientre— distribuido en Norteamérica. En México habita pastizales, campos agrícolas y bordes de bosque. Juega un papel importante en la cadena alimentaria como presa de aves rapaces, serpientes y mamíferos carnívoros.",
    amenazas: [
      "Uso intensivo de rodenticidas en campos agrícolas que reduce sus poblaciones.",
      "Pérdida de pastizales por cambio de uso de suelo.",
      "Enfermedades como el hantavirus que afectan a humanos en zonas rurales."
    ],
    curiosidades: [
      { t: "Memoria espacial excepcional", txt: "Puede recordar la ubicación exacta de cientos de escondites de semillas que crea para el invierno, recuperando la mayoría con gran precisión." },
      { t: "Presa clave", txt: "Es el alimento principal de más de 100 especies de depredadores en Norteamérica, desde búhos hasta coyotes y serpientes." },
      { t: "Portador de hantavirus", txt: "Puede portar el virus sin enfermarse; el hantavirus en sus excrementos representa un riesgo de salud en zonas rurales." }
    ]
  },
  {
    id: "quetzal",
    nombre: "Quetzal",
    cient: "Pharomachrus mocinno",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Ave • Trogonidae",
    habitat: "Bosques nubosos de Chiapas y Oaxaca",
    poblacion: "~50,000 estimados",
    tamaño: "35 – 40 cm (cola hasta 65 cm)",
    peso: "210 – 225 g",
    emoji: "🦜",
    sonido: "selva",
    desc: "El quetzal resplandeciente es considerado una de las aves más bellas del mundo. El macho tiene plumas cobertoras de la cola de hasta 65 cm de longitud, de un verde iridiscente extraordinario. Era sagrado para los mayas y aztecas. Habita en bosques nubosos de Chiapas y Oaxaca. Se alimenta principalmente de aguacatillos silvestres.",
    amenazas: [
      "Deforestación acelerada de los bosques nubosos donde habita.",
      "Reducción de aguacatillos silvestres (Lauraceae), su alimento principal.",
      "Captura ilegal histórica por sus plumas, hoy prohibida."
    ],
    curiosidades: [
      { t: "Plumas sagradas", txt: "Las plumas cobertoras de la cola del macho, de hasta 65 cm, eran más valiosas que el oro para aztecas y mayas; solo la nobleza podía usarlas." },
      { t: "Malabarista del vuelo", txt: "Para entrar a su nido en huecos de árboles entra de frente y sale hacia atrás, o da media vuelta dentro del angosto agujero." },
      { t: "Símbolo nacional", txt: "Es el ave nacional de Guatemala y símbolo de los bosques de niebla chiapanecos en México." }
    ]
  },
  {
    id: "chara-enana",
    nombre: "Chara Enana",
    cient: "Cyanolyca nana",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Ave • Corvidae",
    habitat: "Bosque mesófilo de montaña, Oaxaca",
    poblacion: "< 1,000 individuos",
    tamaño: "24 – 28 cm",
    peso: "55 – 70 g",
    emoji: "🐦",
    sonido: "selva",
    desc: "La chara enana es la chara más pequeña de México y una de las aves más amenazadas del país. Endémica de los bosques de niebla de las sierras de Oaxaca, vive en grupos familiares que se desplazan entre las copas de los árboles. Su hábitat, el bosque mesófilo de montaña, es uno de los ecosistemas más biodiversos y amenazados de México.",
    amenazas: [
      "Fragmentación extrema del bosque mesófilo de montaña en Oaxaca.",
      "Solo se conocen tres localidades con poblaciones confirmadas.",
      "Tala selectiva e ilegal en sus áreas de distribución."
    ],
    curiosidades: [
      { t: "Familia unida", txt: "Vive en grupos familiares de 4 a 8 individuos que cooperan para cuidar a las crías, un comportamiento inusual entre aves pequeñas." },
      { t: "Córvido inteligente", txt: "Como todos los córvidos, es altamente inteligente, capaz de reconocer individuos de su especie y resolver problemas para obtener alimento." },
      { t: "Distribución mínima", txt: "Toda su población mundial se concentra en pocas montañas de la Sierra Juárez y Sierra de Miahuatlán en Oaxaca." }
    ]
  },
  {
    id: "lobo-mexicano",
    nombre: "Lobo Mexicano",
    cient: "Canis lupus ssp. baileyi",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Mamífero • Cánido",
    habitat: "Sierra Madre Occidental",
    poblacion: "~380 en vida silvestre",
    tamaño: "1.2 – 1.5 m",
    peso: "25 – 45 kg",
    emoji: "🐺",
    sonido: "viento",
    desc: "El lobo mexicano es la subespecie de lobo más pequeña y amenazada de Norteamérica. Fue extirpado de México en los años 70 y reintroducido en la Sierra Madre Occidental en 2011. Es el superdepredador del ecosistema serrano, regulando poblaciones de venados y jabalíes. Su reintroducción ha sido un esfuerzo binacional entre México y Estados Unidos.",
    amenazas: [
      "Cacería furtiva e ilegal, principal causa de mortalidad actual.",
      "Conflictos con ganaderos por ataques reales o percibidos al ganado.",
      "Pequeño tamaño poblacional que genera depresión endogámica."
    ],
    curiosidades: [
      { t: "El lobo más pequeño", txt: "Es la subespecie de lobo gris más pequeña del mundo; adultos apenas alcanzan 45 kg." },
      { t: "Extinto y reintroducido", txt: "Fue declarado extinto en México en los años 70; un programa de cría en cautiverio preservó la especie hasta su reintroducción en 2011." },
      { t: "Efecto cascada", txt: "Su regreso ha demostrado el efecto trófico en cascada: al depredar venados, permite la regeneración de la vegetación ribereña." }
    ]
  },
  {
    id: "tapir-centroamericano",
    nombre: "Tapir Centroamericano",
    cient: "Tapirus bairdii",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Mamífero • Perissodáctilo",
    habitat: "Selvas húmedas del SE de México",
    poblacion: "~5,500 en toda su distribución",
    tamaño: "1.8 – 2.5 m",
    peso: "150 – 300 kg",
    emoji: "🦏",
    sonido: "selva",
    desc: "El tapir de Baird o danta es el mamífero terrestre más grande de México y América Central. Pariente lejano de caballos y rinocerontes, habita selvas húmedas desde el sureste mexicano hasta Ecuador. Es excelente nadador y dispersor de semillas vital para la regeneración forestal.",
    amenazas: [
      "Cacería furtiva para consumo de su carne en comunidades rurales.",
      "Destrucción acelerada de la selva húmeda en Chiapas, Campeche y Quintana Roo.",
      "Atropellamientos en carreteras que fragmentan sus territorios."
    ],
    curiosidades: [
      { t: "Nariz prensil", txt: "Su nariz alargada y flexible funciona como una pequeña trompa con la que alcanza hojas altas, agarra frutos y nada como snorkel." },
      { t: "Sembrador de selvas", txt: "Consume enormes cantidades de frutos y defeca las semillas a kilómetros de distancia, siendo uno de los dispersores más importantes de la selva." },
      { t: "Fósil viviente", txt: "Los tapires tienen más de 50 millones de años de linaje evolutivo y han cambiado muy poco desde entonces." }
    ]
  },
  {
    id: "teporingo",
    nombre: "Teporingo",
    cient: "Romerolagus diazi",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Mamífero • Lagomorfo",
    habitat: "Volcanes del Eje Neovolcánico",
    poblacion: "~1,200 – 1,600 individuos",
    tamaño: "25 – 35 cm",
    peso: "350 – 600 g",
    emoji: "🐰",
    sonido: "viento",
    desc: "El teporingo o zacatuche es un pequeño conejo endémico de México que solo habita en las laderas volcánicas del Eje Neovolcánico: Popocatépetl, Iztaccíhuatl, Nevado de Toluca y El Pelado. Es el conejo más primitivo de América, con orejas más cortas y cola menos visible que cualquier otro. Vive en colonias en zacatonales de alta montaña entre 2,800 y 4,200 m de altitud.",
    amenazas: [
      "Incendios forestales en los zacatonales donde vive.",
      "Conversión de pastizales de alta montaña para cultivos y pastoreo.",
      "Depredación por perros domésticos y ferales en zonas periurbanas."
    ],
    curiosidades: [
      { t: "El conejo más primitivo", txt: "Es el lagomorfo más ancestral de América; su morfología primitiva le ha valido el apodo de 'fósil viviente' entre los mammalogistas." },
      { t: "Vivir en el volcán", txt: "Habita exclusivamente en volcanes del centro de México a más de 2,800 m de altitud." },
      { t: "Cecotrofía", txt: "Reingiere sus propias heces blandas nocturnas para extraer nutrientes adicionales que no absorbe en la primera digestión." }
    ]
  },
  {
    id: "manati",
    nombre: "Manatí",
    cient: "Trichechus manatus",
    estado: "VULNERABLE",
    categoria: "Mamífero • Sirénido",
    habitat: "Costas del Golfo de México",
    poblacion: "~1,000 en México",
    tamaño: "2.5 – 4.5 m",
    peso: "200 – 600 kg",
    emoji: "🐋",
    sonido: "oceano",
    desc: "El manatí del Caribe es un gran mamífero acuático de movimientos lentos que habita en aguas costeras, estuarios y ríos del Golfo de México y el Caribe. Se alimenta exclusivamente de plantas acuáticas, consumiendo hasta 50 kg de vegetación al día. Sus aletas delanteras tienen uñas vestigiales que los emparentan con los elefantes.",
    amenazas: [
      "Colisiones con embarcaciones de motor, causa más frecuente de mortalidad.",
      "Pérdida de praderas de pastos marinos que son su fuente de alimento.",
      "Contaminación de ríos y estuarios costeros en el Golfo de México."
    ],
    curiosidades: [
      { t: "Pariente del elefante", txt: "A pesar de su aspecto, el pariente terrestre más cercano del manatí es el elefante; comparten ancestros comunes hace 60 millones de años." },
      { t: "Sirena real", txt: "Los marineros del siglo XV confundieron a los manatíes con sirenas; Cristóbal Colón los describió como 'no tan hermosas como se pintan'." },
      { t: "Dientes migratorios", txt: "Sus muelas caen y son reemplazadas continuamente, moviéndose hacia adelante como una cinta transportadora para compensar el desgaste." }
    ]
  },
  {
    id: "tuza-tropical",
    nombre: "Tuza Tropical",
    cient: "Geomys tropicalis",
    estado: "AMENAZADO",
    categoria: "Mamífero • Roedor",
    habitat: "Tierras bajas tropicales de México",
    poblacion: "Reducida",
    tamaño: "22 – 35 cm",
    peso: "200 – 650 g",
    emoji: "🐹",
    sonido: "selva",
    desc: "La tuza tropical es un roedor subterráneo de cuerpo robusto con poderosas garras para excavar. Habita tierras bajas tropicales desde Veracruz hasta Honduras. Pasa casi toda su vida bajo tierra en extensos sistemas de túneles. Sus bolsas guayeras externas le sirven para transportar alimento al nido.",
    amenazas: [
      "Destrucción del hábitat por expansión agrícola.",
      "Control como plaga en cultivos de caña y hortalizas.",
      "Reducción de la selva húmeda tropical en su área de distribución."
    ],
    curiosidades: [
      { t: "Excavadora solitaria", txt: "Construye y mantiene sola sistemas de túneles de hasta 100 m de longitud, una hazaña de ingeniería para un animal de 400 gramos." },
      { t: "Bolsas externas", txt: "Sus mejillas tienen bolsas externas cubiertas de pelo donde almacena alimento; puede llevar bulbos más grandes que su cabeza." },
      { t: "Ingeniería del suelo", txt: "Sus excavaciones airean el suelo y mejoran su fertilidad; son consideradas una especie de ingeniería del ecosistema." }
    ]
  },
  {
    id: "lagarto-escorpion",
    nombre: "Lagarto Escorpión",
    cient: "Heloderma horridum",
    estado: "AMENAZADO",
    categoria: "Reptil • Lagartija venenosa",
    habitat: "Bosque tropical seco de México",
    poblacion: "Reducida",
    tamaño: "60 – 90 cm",
    peso: "0.8 – 2 kg",
    emoji: "🦎",
    sonido: "selva",
    desc: "El escorpión o lagarto enchaquirado es uno de los únicos dos lagartos venenosos del mundo. Su piel cubierta de escamas redondeadas tipo cuentas le da un aspecto característico. El veneno fluye por los dientes al morder. Habita en bosques tropicales secos del Pacífico mexicano. A pesar de su veneno, prefiere evitar el conflicto.",
    amenazas: [
      "Captura para el comercio ilegal de animales exóticos.",
      "Matanza por temor en comunidades rurales.",
      "Pérdida del bosque tropical seco donde habita."
    ],
    curiosidades: [
      { t: "Lagarto venenoso", txt: "Es uno de los únicos dos lagartos venenosos del mundo; su veneno está en glándulas de la mandíbula inferior, no superior." },
      { t: "Medicina moderna", txt: "Un componente de su saliva, la exenatida, fue base para desarrollar medicamentos contra la diabetes tipo 2." },
      { t: "Lengua detectora", txt: "Saca la lengua bífida continuamente para capturar moléculas del aire y detectar presas a decenas de metros de distancia." }
    ]
  },
  {
    id: "mono-aullador",
    nombre: "Mono Aullador",
    cient: "Alouatta pigra",
    estado: "VULNERABLE",
    categoria: "Mamífero • Primate",
    habitat: "Selvas húmedas del SE de México",
    poblacion: "Reducida",
    tamaño: "50 – 67 cm",
    peso: "6 – 10 kg",
    emoji: "🐒",
    sonido: "selva",
    desc: "El mono aullador de manto es el primate más grande de México. Su nombre se debe a los potentes rugidos que emiten los machos al amanecer y al atardecer, audibles hasta a 5 km de distancia. Vive en grupos de 6 a 20 individuos en las selvas húmedas del sureste. Se alimenta principalmente de hojas.",
    amenazas: [
      "Destrucción masiva de la selva húmeda en el sureste de México.",
      "Fragmentación del hábitat que aísla grupos en parches de selva.",
      "Electrocución en cables de luz al cruzar entre fragmentos de vegetación."
    ],
    curiosidades: [
      { t: "Rugido poderoso", txt: "El hueso hioides agrandado actúa como caja de resonancia; sus aullidos pueden escucharse a 5 km de distancia en la selva densa." },
      { t: "Foliívoro especializado", txt: "Come principalmente hojas, un alimento de baja calidad nutritiva; por eso duermen hasta 18 horas diarias para conservar energía." },
      { t: "Cola prensil", txt: "Su cola actúa como un quinto miembro, capaz de sostener todo el peso del animal para colgar mientras come con ambas manos libres." }
    ]
  },
  {
    id: "chara-sinaloense",
    nombre: "Chara Sinaloense",
    cient: "Cyanocorax beecheii",
    estado: "AMENAZADO",
    categoria: "Ave • Corvidae",
    habitat: "Bosque tropical seco, Nayarit-Jalisco",
    poblacion: "Reducida",
    tamaño: "30 – 35 cm",
    peso: "90 – 130 g",
    emoji: "🐦",
    sonido: "selva",
    desc: "La chara de San Blas es un córvido endémico de México que habita el bosque tropical seco de la costa del Pacífico entre Nayarit y Jalisco. De plumaje negro, azul y blanco con marcas faciales contrastantes, es un pájaro inteligente y ruidoso que vive en grupos familiares y almacena semillas como reserva alimentaria.",
    amenazas: [
      "Deforestación del bosque tropical seco en la costa de Nayarit y Jalisco.",
      "Reducción de la cobertura vegetal por expansión turística costera.",
      "Distribución geográfica reducida que la hace vulnerable."
    ],
    curiosidades: [
      { t: "Cría cooperativa", txt: "Los grupos familiares de hasta 10 individuos colaboran en alimentar a los polluelos, un comportamiento social raro entre aves cantoras." },
      { t: "Almacenamiento de alimento", txt: "Esconde bellotas, semillas y frutos en el suelo o entre la corteza de los árboles como reserva para épocas de escasez." },
      { t: "Vocabulario amplio", txt: "Tiene un repertorio de vocalizaciones muy amplio para comunicar alarmas, ubicación de alimento y reconocimiento entre individuos del grupo." }
    ]
  },
  {
    id: "caracol-cuatro-cienegas",
    nombre: "Caracol de Cuatro Ciénegas",
    cient: "Mexipyrgus carranzae",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Molusco • Gasterópodo",
    habitat: "Pozas de Cuatro Ciénegas, Coahuila",
    poblacion: "< 5,000 estimados",
    tamaño: "3 – 8 mm",
    peso: "< 1 g",
    emoji: "🐚",
    sonido: "oceano",
    desc: "El caracol de Cuatro Ciénegas es un pequeño gasterópodo endémico del sistema de pozas del Valle de Cuatro Ciénegas en Coahuila, uno de los ecosistemas acuáticos más biodiversos de Norteamérica. Estas pozas son relictos de mares antiguos. El caracol está adaptado a las condiciones de alta salinidad y temperatura de estas aguas.",
    amenazas: [
      "Extracción excesiva de agua subterránea para la agricultura que seca las pozas.",
      "Introducción de peces exóticos como carpas que depredan al caracol.",
      "Pisoteo de turistas en áreas no reguladas del valle."
    ],
    curiosidades: [
      { t: "Mar antiguo", txt: "Las pozas de Cuatro Ciénegas son remanentes de un mar interior que existió hace millones de años; por eso tienen fauna marina en tierra adentro." },
      { t: "Química única", txt: "Las aguas tienen una relación calcio-fósforo tan extrema que los organismos han evolucionado estrategias metabólicas únicas para sobrevivir." },
      { t: "Laboratorio evolutivo", txt: "El aislamiento de las pozas ha generado especies endémicas únicas; es modelo de estudio para evolución y la vida en otros planetas." }
    ]
  },
  {
    id: "jaguar",
    nombre: "Jaguar",
    cient: "Panthera onca",
    estado: "VULNERABLE",
    categoria: "Mamífero • Félido",
    habitat: "Selvas húmedas del SE México",
    poblacion: "~4,000 en México",
    tamaño: "1.5 – 1.8 m",
    peso: "56 – 96 kg",
    emoji: "🐆",
    sonido: "selva",
    desc: "El jaguar es el félido más grande de América y el tercero del mundo. Fue sagrado para las civilizaciones mesoamericanas. Habita selvas húmedas y zonas ribereñas del sureste mexicano. Es el único gran felino americano capaz de rugir. Ama el agua y nada con facilidad. Es un depredador de cúspide que regula poblaciones de herbívoros.",
    amenazas: [
      "Destrucción y fragmentación de la selva en el sureste de México.",
      "Caza ilegal por conflictos con ganaderos o tráfico de partes.",
      "Aislamiento de poblaciones por carreteras y zonas agropecuarias."
    ],
    curiosidades: [
      { t: "Mordida más potente", txt: "Tiene la mordida más poderosa en relación al cuerpo de todos los félidos, capaz de perforar el cráneo de sus presas con los colmillos." },
      { t: "Amor por el agua", txt: "A diferencia de la mayoría de los felinos, nada activamente, cruzando ríos y cazando caimanes, tortugas y peces en el agua." },
      { t: "Rosetas únicas", txt: "El patrón de rosetas de cada jaguar es único, lo que permite a investigadores identificar individuos con cámaras trampa." }
    ]
  },
  {
    id: "perrito-praderas",
    nombre: "Perrito de las Praderas",
    cient: "Cynomys mexicanus",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Mamífero • Roedor",
    habitat: "Pastizales de Coahuila, NL y Tamaulipas",
    poblacion: "~100,000 individuos",
    tamaño: "35 – 42 cm",
    peso: "0.7 – 1.4 kg",
    emoji: "🐿️",
    sonido: "viento",
    desc: "El perrito llanero mexicano es la única especie de perrito de las praderas endémica de México. Habita en colonias llamadas 'pueblos' en pastizales del noreste. Se comunica con un sofisticado sistema de ladridos que incluye información sobre el tamaño, color y velocidad de los depredadores.",
    amenazas: [
      "Fumigación masiva de sus colonias por ganaderos que los consideran plagas.",
      "Conversión de pastizales para agricultura y ganadería intensiva.",
      "Extirpación del águila real, su depredador natural que mantenía el equilibrio."
    ],
    curiosidades: [
      { t: "Lenguaje complejo", txt: "Sus ladridos pueden comunicar el color, tamaño, forma y velocidad de un predador, uno de los sistemas de comunicación animal más ricos conocidos." },
      { t: "Ecosistema completo", txt: "Sus madrigueras albergan búhos llaneros, cascabeles, comadrejas y decenas de invertebrados; sin ellos el pastizal pierde biodiversidad masivamente." },
      { t: "Ciudad subterránea", txt: "Una colonia puede tener miles de individuos viviendo en redes de túneles interconectados que ocupan cientos de hectáreas." }
    ]
  },
  {
    id: "tortuga-caguama",
    nombre: "Tortuga Caguama",
    cient: "Caretta caretta",
    estado: "VULNERABLE",
    categoria: "Reptil • Tortuga marina",
    habitat: "Océano Atlántico y Pacífico",
    poblacion: "~50,000 hembras",
    tamaño: "70 – 95 cm",
    peso: "80 – 200 kg",
    emoji: "🐢",
    sonido: "oceano",
    desc: "La tortuga caguama es conocida por su enorme cabeza y su poderosa mandíbula, capaz de triturar conchas de cangrejos y moluscos. Realiza migraciones de miles de kilómetros entre sus zonas de alimentación y sus playas de anidación. Una hembra puede poner hasta 5 nidadas por temporada, con unos 100 huevos cada una.",
    amenazas: [
      "Captura incidental en artes de pesca como redes de arrastre y palangres.",
      "Destrucción y urbanización de playas de anidación.",
      "Contaminación marina por plásticos y derrames de petróleo.",
      "Cambio climático que afecta la temperatura de las arenas y la proporción de sexos."
    ],
    curiosidades: [
      { t: "Navegación magnética", txt: "Poseen un sentido magnético que les permite regresar a la misma playa donde nacieron décadas después." },
      { t: "Longevidad", txt: "Pueden vivir más de 70 años. Las hembras tardan entre 20 y 30 años en alcanzar la madurez sexual." },
      { t: "Dieta especializada", txt: "Se alimentan de cangrejos, langostas, percebes, mejillones y medusas gracias a su potente mandíbula calcificada." }
    ]
  },
  {
    id: "tecolote-tamaulipeco",
    nombre: "Tecolote Tamaulipeco",
    cient: "Glaucidium sanchezi",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Ave • Strigidae",
    habitat: "Bosque mesófilo de Tamaulipas",
    poblacion: "< 2,500 individuos",
    tamaño: "13 – 15 cm",
    peso: "45 – 65 g",
    emoji: "🦉",
    sonido: "selva",
    desc: "El tecolotito tamaulipeco es el búho más pequeño y amenazado del noreste de México, endémico de los bosques húmedos de montaña de Tamaulipas. Su distribución se limita a la Sierra de Tamaulipas y la Sierra Madre Oriental tamaulipeca. Caza insectos grandes, arañas y pequeños vertebrados con gran efectividad.",
    amenazas: [
      "Deforestación del bosque mesófilo de montaña en Tamaulipas.",
      "Distribución extremadamente restringida a dos sierras en un solo estado.",
      "Poco estudiado: se desconocen aspectos básicos de su biología reproductiva."
    ],
    curiosidades: [
      { t: "Falsos ojos", txt: "Tiene manchas en la nuca que semejan ojos, confundiendo a los depredadores que atacan desde atrás." },
      { t: "Cazador diurno", txt: "A diferencia de muchos búhos, caza también de día, lo que lo hace más vulnerable a la perturbación humana." },
      { t: "Solo en dos sierras", txt: "Toda la población mundial se concentra en dos cadenas montañosas en Tamaulipas, ninguna completamente protegida." }
    ]
  },
  {
    id: "pino-azul",
    nombre: "Pino Azul",
    cient: "Pinus maximartinezii",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Planta • Conífera",
    habitat: "Sierra de Morones, Zacatecas",
    poblacion: "~2,500 – 5,000 individuos",
    tamaño: "Hasta 15 m",
    peso: "N/A",
    emoji: "🌲",
    sonido: "viento",
    desc: "El pino real o pino azul de Martínez es considerado el pino más raro del mundo, endémico de una pequeña sierra en Zacatecas. Solo existen aproximadamente 2,500 árboles maduros en un área de menos de 25 km². Produce los piñones más grandes de todos los pinos del mundo, de hasta 2.5 cm de largo.",
    amenazas: [
      "Colecta excesiva de piñones antes de que maduren y puedan germinar.",
      "Pastoreo intensivo que impide la regeneración de plántulas.",
      "Incendios forestales en su hábitat extremadamente restringido."
    ],
    curiosidades: [
      { t: "Piñones gigantes", txt: "Produce los piñones más grandes del mundo, de hasta 2.5 cm, con la semilla más grande de todos los pinos conocidos." },
      { t: "Pino más raro", txt: "Con solo ~2,500 individuos maduros en 25 km², es considerado el pino más raro y amenazado del planeta." },
      { t: "Descubierto tarde", txt: "Fue descrito científicamente en 1964 por el botánico Jerzy Rzedowski, sorprendiendo al mundo botánico." }
    ]
  },
  {
    id: "ocelote",
    nombre: "Ocelote",
    cient: "Leopardus pardalis",
    estado: "VULNERABLE",
    categoria: "Mamífero • Félido",
    habitat: "Selvas y matorrales de México",
    poblacion: "~800 en México",
    tamaño: "65 – 100 cm",
    peso: "8 – 18 kg",
    emoji: "🐆",
    sonido: "selva",
    desc: "El ocelote es un félido mediano de extraordinaria belleza, con un pelaje de manchas y rayas únicas en cada individuo. Habita desde el sur de Texas hasta Argentina. Es de hábitos nocturnos y solitario. Excelente trepador y nadador, caza desde pequeños roedores hasta venados pequeños.",
    amenazas: [
      "Tráfico ilegal para comercio de pieles y animales vivos.",
      "Fragmentación del hábitat por carreteras y zonas agrícolas.",
      "Atropellamiento en carreteras en el noreste de México y sur de Texas."
    ],
    curiosidades: [
      { t: "Manchas únicas", txt: "El patrón de manchas de cada ocelote es único y permite identificar individuos en estudios con cámaras trampa." },
      { t: "Supersentidos", txt: "Sus ojos capturan siete veces más luz que los humanos; puede cazar en oscuridad casi total en la selva nocturna." },
      { t: "Doble amenaza histórica", txt: "En los años 70-80, la demanda de pieles diezmó sus poblaciones; hoy la pérdida de hábitat y los atropellamientos son las principales amenazas." }
    ]
  },
  {
    id: "palma-espinuda",
    nombre: "Palma Espinuda",
    cient: "Dioon merolae",
    estado: "AMENAZADO",
    categoria: "Planta • Palma",
    habitat: "Bosque tropical seco de Sonora-Sinaloa",
    poblacion: "Reducida",
    tamaño: "Hasta 8 m",
    peso: "N/A",
    emoji: "🌴",
    sonido: "viento",
    desc: "La palma espinuda es una palma endémica del noroeste de México presente en el bosque tropical caducifolio de Sonora y Sinaloa. Sus hojas en forma de abanico con espinas en los pecíolos le dan nombre. Resistente a la sequía, proporciona refugio y alimento a numerosas aves y mamíferos. Comunidades locales usan sus hojas para techar casas.",
    amenazas: [
      "Conversión del bosque tropical seco para ganadería y agricultura.",
      "Extracción de hojas para artesanía sin manejo sustentable.",
      "Incendios forestales en zonas de bosque seco."
    ],
    curiosidades: [
      { t: "Refugio de fauna", txt: "Sus flores atraen abejas y murciélagos nectarívoros; sus frutos son consumidos por al menos 15 especies de aves y mamíferos del bosque seco." },
      { t: "Tejido tradicional", txt: "Comunidades yaquis y mayos usan sus hojas para techar casas, fabricar sombreros y hacer artesanías, tradición de siglos." },
      { t: "Resistencia a sequía", txt: "Puede sobrevivir meses sin lluvia gracias a reservas de agua en su tronco y al cierre de estomas para reducir evaporación." }
    ]
  },
  {
    id: "mono-arana",
    nombre: "Mono Araña",
    cient: "Ateles geoffroyi",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Mamífero • Primate",
    habitat: "Selvas húmedas del SE México",
    poblacion: "Reducida, fragmentada",
    tamaño: "38 – 55 cm",
    peso: "6 – 9 kg",
    emoji: "🐒",
    sonido: "selva",
    desc: "El mono araña de Geoffroy es uno de los primates más amenazados de México. Su nombre se debe a su aspecto al moverse entre ramas, con extremidades largas y cola prensil que recuerdan a arañas gigantes. Es el primate más ágil de las selvas americanas. Se alimenta principalmente de frutos maduros, siendo dispersor de semillas fundamental.",
    amenazas: [
      "Deforestación masiva de las selvas húmedas en el sureste mexicano.",
      "Cacería para consumo y captura de crías como mascotas ilegales.",
      "Fragmentación del hábitat: necesitan grandes extensiones continuas de selva."
    ],
    curiosidades: [
      { t: "Quinto miembro", txt: "Su cola prensil es tan funcional como un brazo; puede colgarse de ella con todo su peso mientras come con las cuatro extremidades libres." },
      { t: "Dispersor clave", txt: "Consume grandes frutos con semillas que defeca lejos del árbol madre; sin monos araña, muchos árboles de selva no se regenerarían." },
      { t: "Cerebro grande", txt: "Tiene el cerebro más grande en relación al cuerpo de todos los monos americanos, asociado con la planificación de rutas para encontrar frutos." }
    ]
  },
  {
    id: "picote-tequila",
    nombre: "Picote Tequila",
    cient: "Zoogoneticus tequila",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Pez • Goodeidae",
    habitat: "Río Teuchitlán, Jalisco",
    poblacion: "< 10,000 en cautiverio",
    tamaño: "4 – 6 cm",
    peso: "< 5 g",
    emoji: "🐟",
    sonido: "oceano",
    desc: "El picote tequila o pez tequila es un pequeño pez de agua dulce endémico del río Teuchitlán en Jalisco. Fue declarado extinto en la naturaleza en los años 90 por la introducción de carpas y tilapias. Gracias a un programa de conservación en acuarios internacionales fue reintroducido con éxito en su río de origen.",
    amenazas: [
      "Introducción de peces exóticos invasores como carpas y tilapias.",
      "Contaminación del río Teuchitlán por aguas residuales.",
      "Extracción excesiva de agua del río para uso agrícola."
    ],
    curiosidades: [
      { t: "Extinto y resucitado", txt: "Fue declarado extinto en vida silvestre; su reintroducción exitosa a partir de 2012 es uno de los mayores logros de conservación de peces en México." },
      { t: "Vivíparo único", txt: "Como todos los goodeidos, tiene fertilización interna y pare crías vivas; los embriones se nutren de la madre mediante una estructura similar a una placenta." },
      { t: "Restaurador del río", txt: "A diferencia de los peces invasores, mantiene el equilibrio del ecosistema; su reintroducción ha mejorado la salud del río Teuchitlán." }
    ]
  },
  {
    id: "aguila-arpia",
    nombre: "Águila Arpía",
    cient: "Harpia harpyja",
    estado: "VULNERABLE",
    categoria: "Ave • Accipitridae",
    habitat: "Selvas húmedas del SE de México",
    poblacion: "Muy reducida en México",
    tamaño: "86 – 107 cm",
    peso: "4 – 9 kg",
    emoji: "🦅",
    sonido: "selva",
    desc: "El águila arpía es el ave rapaz más poderosa del mundo y la de mayor masa de América. Su disco facial de plumas grises dirige el sonido hacia sus oídos. Las garras del tamaño de las de un oso pardo pueden ejercer una presión de 50 kg por cm². Caza monos, perezosos y otros mamíferos arbóreos en la selva.",
    amenazas: [
      "Deforestación de la selva húmeda en Chiapas y la península de Yucatán.",
      "Cacería por ganaderos que la perciben como amenaza al ganado.",
      "Necesita territorios muy grandes de selva continua para sobrevivir."
    ],
    curiosidades: [
      { t: "Garras de oso", txt: "Sus garras posteriores pueden alcanzar 13 cm de largo, comparables a las de un oso pardo, generando presión de 50 kg/cm²." },
      { t: "Radar de plumas", txt: "El disco facial actúa como una antena parabólica que dirige sonidos hacia los oídos ocultos, localizando presas bajo el dosel." },
      { t: "Cazadora sigilosa", txt: "No caza en vuelo rápido sino merodeando entre las copas de los árboles con vuelos lentos y certeros." }
    ]
  },
  {
    id: "pavon",
    nombre: "Pavón",
    cient: "Oreophasis derbianus",
    estado: "VULNERABLE",
    categoria: "Ave • Cracidae",
    habitat: "Selvas húmedas del SE México",
    poblacion: "Reducida",
    tamaño: "82 – 92 cm",
    peso: "3.5 – 4.8 kg",
    emoji: "🦃",
    sonido: "selva",
    desc: "El pavón o hocofaisán grande es el cracid más grande de México. El macho luce plumaje negro brillante con vientre blanco y una protuberancia nasal amarilla llamativa. Habita en selvas húmedas desde México hasta Ecuador. Se alimenta de frutos, semillas y pequeños animales del suelo.",
    amenazas: [
      "Cacería intensa para consumo; es una de las aves más cazadas de la selva.",
      "Pérdida de la selva húmeda en Chiapas, Tabasco y Yucatán.",
      "Captura de polluelos para criarlos como aves de traspatio."
    ],
    curiosidades: [
      { t: "Frutos en tierra", txt: "Aunque vuela bien, prefiere caminar por el suelo buscando frutos caídos; puede tragar frutos enteros que digiere con piedras en la molleja." },
      { t: "Cuerno amarillo", txt: "La protuberancia amarilla carnosa sobre el pico del macho es una señal sexual; las hembras prefieren machos con protuberancias más grandes." },
      { t: "Nido en altura", txt: "Construye su nido a varios metros del suelo en ramas gruesas, poniendo solo 2 a 3 huevos que cuida celosamente." }
    ]
  },
  {
    id: "lamprea-chapala",
    nombre: "Lamprea de Chapala",
    cient: "Tetrapleurodon spadiceus",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Pez • Petromyzontidae",
    habitat: "Lago de Chapala y ríos afluentes",
    poblacion: "Desconocida, muy reducida",
    tamaño: "15 – 25 cm",
    peso: "10 – 40 g",
    emoji: "🐟",
    sonido: "oceano",
    desc: "La lamprea de Chapala es un pez primitivo sin mandíbulas endémico de la cuenca del lago de Chapala en Jalisco. Las lampreras son animales muy antiguos cuyo diseño ha cambiado poco en 360 millones de años. En su fase adulta se adhiere a otros peces con su boca circular llena de dientes para alimentarse.",
    amenazas: [
      "Contaminación severa del lago de Chapala por descargas urbanas e industriales.",
      "Disminución del nivel del lago por sobreextracción de agua.",
      "Introducción de peces depredadores exóticos que afectan su ciclo de vida."
    ],
    curiosidades: [
      { t: "Fósil viviente", txt: "Las lampreras existen desde hace 360 millones de años sin cambios significativos; son más antiguas que los dinosaurios." },
      { t: "Sin mandíbulas", txt: "Son uno de los pocos vertebrados sin mandíbula; tienen una boca circular con anillos de dientes córneos para adherirse a los peces huésped." },
      { t: "Fase larvaria larga", txt: "Las larvas viven enterradas en sedimentos durante 3 a 7 años antes de metamorfosearse en adultos." }
    ]
  },
  {
    id: "mapache-cozumel",
    nombre: "Mapache de Cozumel",
    cient: "Procyon pygmaeus",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Mamífero • Procyonidae",
    habitat: "Isla de Cozumel, Quintana Roo",
    poblacion: "< 500 individuos",
    tamaño: "30 – 42 cm",
    peso: "3 – 4 kg",
    emoji: "🦝",
    sonido: "selva",
    desc: "El mapache enano de Cozumel es la especie de mapache más amenazada del mundo y la más pequeña. Es endémico exclusivamente de la isla de Cozumel en Quintana Roo. Habita manglares y selvas costeras, donde se alimenta de crustáceos, frutas e insectos.",
    amenazas: [
      "Desarrollo turístico masivo en la isla que destruye manglares y selva costera.",
      "Depredación por perros y gatos domésticos y ferales.",
      "Enfermedades transmitidas por animales domésticos como el moquillo."
    ],
    curiosidades: [
      { t: "El más pequeño", txt: "Es la especie de mapache más pequeña del mundo; un adulto pesa menos de 4 kg cuando los mapaches continentales llegan a los 8 kg." },
      { t: "Solo en Cozumel", txt: "Toda la población mundial vive en una sola isla de 478 km²; un huracán fuerte o una epidemia podría extinguirlo de golpe." },
      { t: "Manos lavadoras", txt: "Manipula su alimento con las patas delanteras con gran destreza, a menudo sumergiéndolo en agua antes de comer." }
    ]
  },
  {
    id: "guaqueque-mexicano",
    nombre: "Guaqueque Mexicano",
    cient: "Dasyprocta mexicana",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Mamífero • Roedor",
    habitat: "Selvas húmedas de Veracruz",
    poblacion: "< 2,500 estimados",
    tamaño: "40 – 55 cm",
    peso: "3 – 4 kg",
    emoji: "🐿️",
    sonido: "selva",
    desc: "El guaqueque mexicano es un roedor de mediano tamaño endémico de las selvas húmedas del norte de Veracruz y sur de Tamaulipas. De cuerpo esbelto y pelaje pardo-anaranjado brillante, es un corredor rápido en el suelo selvático. Es uno de los pocos animales capaz de abrir las duras semillas de la caoba y otras maderas preciosas.",
    amenazas: [
      "Deforestación extrema de las selvas húmedas del norte de Veracruz.",
      "Cacería para consumo en comunidades rurales del área.",
      "Menos del 10% de su hábitat original permanece en la región."
    ],
    curiosidades: [
      { t: "Abridor de semillas", txt: "Es uno de los pocos animales con mandíbulas suficientemente poderosas para abrir las durísimas semillas de la caoba y el cedro." },
      { t: "Dispersor clave", txt: "Entierra semillas como reserva; las que olvida germinan y renuevan el bosque, siendo esencial para la regeneración de árboles." },
      { t: "Corredor veloz", txt: "Puede alcanzar 40 km/h en carrera de huida, usando su agilidad en lugar del sigilo para escapar de depredadores." }
    ]
  },
  {
    id: "gorrion-serrano",
    nombre: "Gorrión Serrano",
    cient: "Xenospiza baileyi",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Ave • Passerellidae",
    habitat: "Bosques secos de Oaxaca",
    poblacion: "< 10,000 individuos",
    tamaño: "13 – 15 cm",
    peso: "17 – 22 g",
    emoji: "🐦",
    sonido: "viento",
    desc: "El gorrión oaxaqueño es una pequeña ave endémica del sur de Oaxaca que habita en matorrales y bosques secos de montaña. Se alimenta principalmente de semillas de gramíneas e insectos. Es una especie poco estudiada con distribución geográfica muy restringida.",
    amenazas: [
      "Pérdida de bosque seco y matorral en las sierras de Oaxaca.",
      "Cambio de uso de suelo para milpa y pastoreo.",
      "Distribución muy limitada que la hace vulnerable a perturbaciones locales."
    ],
    curiosidades: [
      { t: "Endémico de Oaxaca", txt: "Toda su distribución mundial se limita al estado de Oaxaca, siendo una de las aves más localizadas geográficamente de México." },
      { t: "Especialista de gramíneas", txt: "Depende de pastizales y matorrales con abundantes gramíneas nativas; los cambios por pastoreo lo afectan directamente." },
      { t: "Poco conocido", txt: "Su biología reproductiva, genética y estructura poblacional son aún mal conocidas, dificultando diseñar estrategias de conservación." }
    ]
  },
  {
    id: "liebre-tehuantepec",
    nombre: "Liebre de Tehuantepec",
    cient: "Lepus flavigularis",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Mamífero • Lagomorfo",
    habitat: "Praderas costeras del Istmo de Tehuantepec",
    poblacion: "< 1,000 individuos",
    tamaño: "47 – 60 cm",
    peso: "2.4 – 3.9 kg",
    emoji: "🐰",
    sonido: "viento",
    desc: "La liebre de Tehuantepec es uno de los mamíferos más amenazados de México, endémica de las planicies costeras del Istmo de Tehuantepec en Oaxaca. De gran tamaño, con orejas enormes y patas traseras muy largas, puede alcanzar velocidades de 70 km/h. Habita pastizales y matorrales abiertos.",
    amenazas: [
      "Conversión de pastizales costeros para ganadería y agricultura.",
      "Cacería furtiva intensiva para consumo de su carne.",
      "Solo quedan tres o cuatro poblaciones fragmentadas con menos de 1,000 individuos."
    ],
    curiosidades: [
      { t: "Velocista extrema", txt: "Puede correr a 70 km/h durante cortos tramos; sus patas traseras extra largas le dan una zancada que supera a cualquier depredador." },
      { t: "Orejas termorreguladoras", txt: "Sus enormes orejas están llenas de vasos sanguíneos; al orientarlas al viento, el flujo de aire enfría la sangre y regula la temperatura corporal." },
      { t: "Cecotrofía nocturna", txt: "Produce dos tipos de heces; las blandas nocturnas las reingiere directamente para aprovechar nutrientes de la primera digestión." }
    ]
  },
  {
    id: "tarantula-rodillas-rojas",
    nombre: "Tarántula de Rodillas Rojas",
    cient: "Brachypelma smithi",
    estado: "VULNERABLE",
    categoria: "Arácnido • Araña",
    habitat: "Bosque tropical seco, Jalisco-Colima",
    poblacion: "Reducida",
    tamaño: "Cuerpo 5 – 7 cm",
    peso: "15 – 30 g",
    emoji: "🕷️",
    sonido: "selva",
    desc: "La tarántula mexicana de rodillas rojas es una de las arañas más reconocidas del mundo, con llamativas manchas naranja-rojas en las articulaciones de las patas sobre un cuerpo negro aterciopelado. Endémica de la costa del Pacífico mexicano. Las hembras pueden vivir hasta 25 años. Su veneno es leve, comparable a la picadura de una abeja.",
    amenazas: [
      "Colecta masiva para el comercio internacional de arañas mascota.",
      "Pérdida del bosque tropical seco en Jalisco y Colima.",
      "Colecta ilegal histórica que diezmó poblaciones silvestres."
    ],
    curiosidades: [
      { t: "Longevidad extrema", txt: "Las hembras pueden vivir hasta 25-30 años, mientras los machos raramente superan los 5; es una de las arañas de mayor longevidad del mundo." },
      { t: "Pelos urticantes", txt: "Cuando se siente amenazada, lanza pelos microscópicos con púas del abdomen que causan irritación intensa en ojos y piel del agresor." },
      { t: "Muda anual", txt: "Muda el exoesqueleto completo una vez al año; durante la muda es completamente vulnerable pues el nuevo exoesqueleto tarda días en endurecerse." }
    ]
  },
  {
    id: "murcielago-pescador",
    nombre: "Murciélago Pescador",
    cient: "Myotis vivesi",
    estado: "AMENAZADO",
    categoria: "Mamífero • Quiróptero",
    habitat: "Costas y ríos tropicales de México",
    poblacion: "Reducida",
    tamaño: "Envergadura 50 – 60 cm",
    peso: "50 – 90 g",
    emoji: "🦇",
    sonido: "oceano",
    desc: "El murciélago pescador es uno de los más grandes de México y el único especializado en capturar peces. Vuela bajo sobre la superficie del agua y detecta los movimientos de peces con su ecolocalización. Con sus enormes patas y garras, pesca rozando la superficie y enganchando a los peces.",
    amenazas: [
      "Contaminación de ríos, lagunas y costas que reduce las poblaciones de peces.",
      "Destrucción de cavernas y grutas costeras donde forman sus colonias.",
      "Persecución directa por temor en comunidades costeras."
    ],
    curiosidades: [
      { t: "Ecolocalización de peces", txt: "Detecta peces a través de pequeñas ondas en la superficie del agua y las refleja con su sonar para localizar presas con precisión milimétrica." },
      { t: "Patas de garfio", txt: "Sus patas son desproporcionadamente grandes con garras curvas largas especializadas para enganchar peces en vuelo rasante." },
      { t: "Olor a camarón", txt: "Las colonias huelen notablemente a camarón: los peces y crustáceos que comen se acumulan en sus refugios." }
    ]
  },
  {
    id: "agave-victoria",
    nombre: "Agave Victoria",
    cient: "Agave victoriae-reginae",
    estado: "AMENAZADO",
    categoria: "Planta • Agave",
    habitat: "Cañones áridos de Nuevo León y Coahuila",
    poblacion: "Reducida",
    tamaño: "30 – 60 cm diámetro",
    peso: "N/A",
    emoji: "🌵",
    sonido: "viento",
    desc: "El agave Victoria Reina es considerado el agave más bello del mundo por las líneas blancas que dibujan patrones geométricos sobre sus hojas verde-oscuras. Endémico de los cañones áridos de Nuevo León y Coahuila. Crece muy lentamente durante 20 a 30 años antes de florecer una sola vez y morir.",
    amenazas: [
      "Colecta ilegal masiva para mercado de plantas suculentas de colección.",
      "Pastoreo de cabras que consume plántulas y jóvenes.",
      "Lento crecimiento que hace muy difícil la recuperación de poblaciones colectadas."
    ],
    curiosidades: [
      { t: "Florecimiento mortal", txt: "Florece una sola vez en su vida tras 20-30 años; envía toda su energía a la espiga floral de 4 m, luego muere dejando semillas." },
      { t: "El más bello", txt: "Es considerado por botánicos y coleccionistas como el agave más ornamentalmente bello del mundo; su precio en el mercado negro supera los 5,000 pesos." },
      { t: "Polinización nocturna", txt: "Sus flores tubulares de color crema se abren de noche y son polinizadas exclusivamente por murciélagos nectarívoros." }
    ]
  },
  {
    id: "salamandra-pie-plano",
    nombre: "Salamandra Pie Plano Pigmea",
    cient: "Chiropterotriton lavae",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Anfibio • Salamandra",
    habitat: "Bosques de niebla de Tamaulipas",
    poblacion: "< 250 estimados",
    tamaño: "6 – 10 cm",
    peso: "1 – 4 g",
    emoji: "🦎",
    sonido: "lluvia",
    desc: "La salamandra pie plano pigmea es una de las salamandras más raras y pequeñas de México. Endémica de los bosques de niebla de la Sierra Madre Oriental en Tamaulipas, se caracteriza por sus patas aplanadas con dedos muy desarrollados para trepar sobre rocas húmedas. Es completamente terrestre y respira exclusivamente a través de la piel.",
    amenazas: [
      "Distribución extremadamente limitada a pocas localidades en Tamaulipas.",
      "Deforestación del bosque mesófilo de montaña.",
      "Extrema sensibilidad a la desecación del ambiente."
    ],
    curiosidades: [
      { t: "Pies especializados", txt: "Sus patas aplanadas con dedos anchos son una adaptación única para desplazarse sobre rocas mojadas y musgosas en el bosque nebuloso." },
      { t: "Respiración cutánea", txt: "Carece de pulmones funcionales y respira completamente a través de la piel húmeda; si se seca, muere en minutos." },
      { t: "Una sola localidad", txt: "Fue conocida durante décadas de un solo sitio en Tamaulipas; su área de distribución total posiblemente no supera los 100 km²." }
    ]
  },
  {
    id: "tortuga-cuatro-cienegas",
    nombre: "Tortuga de Cuatro Ciénegas",
    cient: "Terrapene coahuila",
    estado: "VULNERABLE",
    categoria: "Reptil • Tortuga de agua dulce",
    habitat: "Pozas de Cuatro Ciénegas, Coahuila",
    poblacion: "Reducida",
    tamaño: "20 – 35 cm",
    peso: "0.5 – 2 kg",
    emoji: "🐢",
    sonido: "oceano",
    desc: "La tortuga de Cuatro Ciénegas habita en las cristalinas pozas del Valle de Cuatro Ciénegas en Coahuila. Sus colores verdes con líneas amarillas son inconfundibles. Se alimenta de plantas acuáticas y algas en las pozas termales del valle, un ecosistema único en el mundo.",
    amenazas: [
      "Extracción masiva de agua subterránea que seca las pozas donde vive.",
      "Introducción de tortugas exóticas y otros reptiles acuáticos.",
      "Colecta para el comercio ilegal de reptiles."
    ],
    curiosidades: [
      { t: "Pozas termales", txt: "Algunas pozas de Cuatro Ciénegas mantienen temperatura constante de 30 °C todo el año, creando un microclima que la tortuga aprovecha para actividad continua." },
      { t: "Algas especializadas", txt: "Las algas de las pozas han evolucionado en condiciones de muy bajo fósforo, siendo nutricionalmente únicas." },
      { t: "Sistema protegido", txt: "Cuatro Ciénegas es Área de Protección de Flora y Fauna y sitio Ramsar, uno de los ecosistemas acuáticos más singulares del mundo." }
    ]
  },
  {
    id: "dama-blanca-ciega",
    nombre: "Dama Blanca Ciega",
    cient: "Typhliasina pearsei",
    estado: "AMENAZADO",
    categoria: "Pez • Characidae",
    habitat: "Cuevas de San Luis Potosí y Tamaulipas",
    poblacion: "Muy reducida",
    tamaño: "5 – 9 cm",
    peso: "2 – 8 g",
    emoji: "🐟",
    sonido: "cueva",
    desc: "El pez de cueva o dama blanca ciega ha perdido los ojos y la pigmentación al adaptarse durante miles de años a la oscuridad total de las cuevas. Sin embargo, conserva en su genoma la información para desarrollar ojos; si se cruza con la forma superficial, los descendientes recuperan la vista parcialmente. Es uno de los mejores modelos de estudio de evolución adaptativa.",
    amenazas: [
      "Extracción de agua de los acuíferos que alimentan las cuevas.",
      "Contaminación de mantos freáticos por agroquímicos.",
      "Colecta para el mercado acuarístico sin control."
    ],
    curiosidades: [
      { t: "Ojos que regresan", txt: "Al cruzar esta forma ciega con la forma con ojos, los hijos recuperan ojos funcionales, demostrando que la información genética se conserva." },
      { t: "Ahorra energía", txt: "Perder los ojos y la pigmentación es ventajoso en la oscuridad: ambas estructuras son costosas energéticamente sin utilidad en cuevas." },
      { t: "Modelo científico", txt: "Es uno de los organismos más estudiados en biología evolutiva; sus genes de desarrollo ocular tienen similitudes con los humanos." }
    ]
  },
  {
    id: "zapatilla-dama",
    nombre: "Zapatilla de Dama",
    cient: "Mexipedium xerophyticum",
    estado: "AMENAZADO",
    categoria: "Planta • Orquídea",
    habitat: "Bosques de pino-encino de México",
    poblacion: "Reducida",
    tamaño: "30 – 80 cm",
    peso: "N/A",
    emoji: "🌺",
    sonido: "selva",
    desc: "La zapatilla de dama o sandalia de Venus es una de las orquídeas más espectaculares de México, con flores que forman una bolsa o labelo de color amarillo-verdoso que simula un recipiente. Esta estructura es una trampa para los insectos polinizadores que deben salir por una ruta específica, recogiendo el polen.",
    amenazas: [
      "Colecta ilegal para jardinería y coleccionistas de orquídeas.",
      "Pérdida del bosque de pino-encino en sus áreas de distribución.",
      "Dependencia de hongos micorrízicos específicos para germinar."
    ],
    curiosidades: [
      { t: "Trampa floral", txt: "Su labelo en forma de zapatilla es una trampa: los insectos caen en ella y solo pueden salir por una ruta que los unta de polen." },
      { t: "Orquídea protegida", txt: "Todas las orquídeas del género Cypripedium están en el Apéndice I de CITES, el nivel más alto de protección comercial internacional." },
      { t: "Micorriza obligada", txt: "Sus semillas solo pueden germinar en presencia de hongos micorrízicos específicos; sin ellos no prosperan aunque el suelo y clima sean perfectos." }
    ]
  },
  {
    id: "ajolote-mexicano",
    nombre: "Ajolote Mexicano",
    cient: "Ambystoma mexicanum",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Anfibio • Salamandra",
    habitat: "Canales de Xochimilco, CDMX",
    poblacion: "< 1,000 en estado silvestre",
    tamaño: "15 – 30 cm",
    peso: "60 – 220 g",
    emoji: "🦎",
    sonido: "oceano",
    desc: "El ajolote de Xochimilco es el anfibio más famoso de México y símbolo de la biodiversidad del país. Nunca completa su metamorfosis, conservando branquias externas durante toda la vida adulta. Tiene una capacidad regenerativa extraordinaria: puede regenerar extremidades, porciones del corazón y del cerebro. Solo existe en los canales de Xochimilco en la Ciudad de México.",
    amenazas: [
      "Introducción de carpas y tilapias que depredan huevos y juveniles.",
      "Contaminación de los canales de Xochimilco por aguas residuales y basura.",
      "Pérdida de chinampas tradicionales por abandono de la agricultura."
    ],
    curiosidades: [
      { t: "Regeneración asombrosa", txt: "Puede regenerar un miembro amputado completo, incluyendo huesos, músculos y nervios, en pocas semanas sin dejar cicatrices." },
      { t: "Eterna juventud", txt: "Mantiene sus branquias y vida acuática toda su vida; si se induce la metamorfosis artificialmente, pierde su capacidad regenerativa." },
      { t: "Dios del rayo", txt: "Su nombre en náhuatl significa 'monstruo del agua' y en la mitología azteca estaba asociado con Xólotl, dios de los relámpagos." }
    ]
  },
  {
    id: "escarabajo-tuxtlas",
    nombre: "Escarabajo Verde de los Tuxtlas",
    cient: "Chrysina alphabarrerai",
    estado: "AMENAZADO",
    categoria: "Insecto • Coleóptero",
    habitat: "Selva húmeda de Los Tuxtlas, Veracruz",
    poblacion: "Desconocida",
    tamaño: "2.5 – 3.5 cm",
    peso: "1 – 3 g",
    emoji: "🪲",
    sonido: "selva",
    desc: "El escarabajo joya verde es uno de los coleópteros más hermosos de México, con élitros de color verde esmeralda iridiscente y rayas plateadas o doradas. Habita en selvas húmedas y bosques de encino del sureste de México. Las larvas viven en madera en descomposición dentro del suelo.",
    amenazas: [
      "Colecta intensiva para el comercio de insectos en México y el extranjero.",
      "Pérdida de la selva húmeda y bosques de encino donde habita.",
      "Destrucción de madera muerta en el suelo, indispensable para sus larvas."
    ],
    curiosidades: [
      { t: "Color joya", txt: "Su color verde metálico no proviene de pigmentos sino de estructuras microscópicas en la cutícula que reflejan la luz selectivamente, como un cristal fotónico." },
      { t: "Reciclador forestal", txt: "Sus larvas descomponen madera muerta en el suelo, acelerando el reciclaje de nutrientes y participando en la formación de humus fértil." },
      { t: "Temporada corta", txt: "Los adultos viven solo unas semanas durante la temporada de lluvias, tiempo suficiente para alimentarse y reproducirse." }
    ]
  },
  {
    id: "mangle-colorado",
    nombre: "Mangle Colorado",
    cient: "Rhizophora mangle",
    estado: "AMENAZADO",
    categoria: "Planta • Manglar",
    habitat: "Costas tropicales de México",
    poblacion: "Reducida",
    tamaño: "Hasta 20 m",
    peso: "N/A",
    emoji: "🌿",
    sonido: "oceano",
    desc: "El mangle rojo es el árbol emblemático de los ecosistemas de manglar en las costas tropicales mexicanas. Sus raíces aéreas arqueadas crean un laberinto protector donde se reproducen cientos de especies de peces y crustáceos de importancia comercial. Los manglares capturan más carbono por hectárea que cualquier bosque tropical.",
    amenazas: [
      "Desmonte para desarrollos turísticos, acuícola y urbanización costera.",
      "Contaminación de estuarios y lagunas costeras por residuos industriales.",
      "Aumento del nivel del mar por el cambio climático."
    ],
    curiosidades: [
      { t: "Raíces respiradoras", txt: "Sus raíces aéreas tienen poros llamados lenticelas que capturan oxígeno del aire, pues el sedimento costero está completamente saturado de agua." },
      { t: "Vivero del mar", txt: "El 70% de las especies de peces e invertebrados comerciales en el Caribe y Golfo de México pasan su etapa juvenil entre las raíces del mangle." },
      { t: "Captura de carbono", txt: "Los manglares capturan entre 3 y 5 veces más carbono por hectárea que los bosques tropicales; destruirlos libera siglos de carbono almacenado." }
    ]
  },
  {
    id: "sardinita-ciega",
    nombre: "Sardinita Ciega",
    cient: "Astyanax jordani",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Pez • Bythitidae",
    habitat: "Cenotes de Yucatán",
    poblacion: "Desconocida, muy reducida",
    tamaño: "4 – 8 cm",
    peso: "< 3 g",
    emoji: "🐟",
    sonido: "cueva",
    desc: "La sardinita ciega es un pequeño pez cavernícola endémico de los cenotes y cuevas subacuáticas de Yucatán. Ha perdido los ojos y la pigmentación al adaptarse a la oscuridad total. Habita en aguas subterráneas cristalinas conectadas a través de un extenso sistema de ríos subterráneos.",
    amenazas: [
      "Contaminación del acuífero yucateco por residuos de granjas porcícolas y agrícolas.",
      "Intrusión de agua salada por sobreexplotación de acuíferos costeros.",
      "Turismo no regulado en cenotes que perturba ecosistemas subterráneos."
    ],
    curiosidades: [
      { t: "Sin ojos y sin color", txt: "Perdió ojos y pigmentación al evolucionar en oscuridad total; ambos rasgos son costosos energéticamente y sin utilidad en cuevas." },
      { t: "Red hídrica subterránea", txt: "Los cenotes de Yucatán están conectados por el sistema de cuevas subacuáticas más largo del mundo, extendiéndose cientos de kilómetros." },
      { t: "Linaje antiguo", txt: "Los bythitidos son peces de línea evolutiva antigua; las formas cavernícolas se han adaptado durante miles de años al ecosistema subterráneo yucateco." }
    ]
  },
  {
    id: "espada-clemencia",
    nombre: "Espada de Clemencia",
    cient: "Xiphophorus clemenciae",
    estado: "AMENAZADO",
    categoria: "Planta • Euforbia",
    habitat: "Desierto chihuahuense, Chihuahua y Coahuila",
    poblacion: "Reducida",
    tamaño: "30 – 80 cm",
    peso: "N/A",
    emoji: "🌵",
    sonido: "viento",
    desc: "La candelilla o espada de clemencia es una planta arbustiva endémica de los desiertos de Chihuahua y Coahuila. Sus tallos delgados y erectos cubiertos de una cera protectora blanquecina han sido aprovechados durante siglos para extraer la cera de candelilla, usada en cosméticos, barnices y lubricantes.",
    amenazas: [
      "Sobre-extracción de cera sin manejo sustentable que debilita las poblaciones.",
      "Cambio climático que intensifica las sequías en el desierto chihuahuense.",
      "Cambio de uso de suelo para ganadería en zonas áridas."
    ],
    curiosidades: [
      { t: "Cera natural valiosa", txt: "Su cera es más dura y brillante que la carnauba brasileña; se usa en cosméticos, chicles, barnices, tintas de impresión y como sustituto de la cera de abeja." },
      { t: "Economía rural", txt: "La extracción de candelilla es sustento de miles de familias en el desierto chihuahuense; existe una Norma Oficial que regula su aprovechamiento." },
      { t: "Savia lechosa", txt: "Como toda euforbia, produce látex tóxico que disuade a los herbívoros; el látex era usado por indígenas con fines medicinales." }
    ]
  },
  {
    id: "escorpion-arboricola",
    nombre: "Escorpión Arbóreo de Labios Rojos",
    cient: "Abronia lythrochila",
    estado: "AMENAZADO",
    categoria: "Arácnido • Escorpión",
    habitat: "Selvas húmedas del SE México",
    poblacion: "Desconocida",
    tamaño: "4 – 8 cm",
    peso: "1 – 5 g",
    emoji: "🦂",
    sonido: "selva",
    desc: "El escorpión arbóreo de labios rojos es una especie que habita en las selvas húmedas del sureste de México. A diferencia de la mayoría de los escorpiones terrestres, tiene adaptaciones para trepar por la corteza de los árboles y cazar en altura. Su nombre se debe a la coloración rojiza alrededor de la boca.",
    amenazas: [
      "Destrucción de la selva húmeda donde vive en el sureste mexicano.",
      "Colecta por comerciantes de artrópodos exóticos.",
      "Escaso conocimiento científico sobre su distribución y estado poblacional."
    ],
    curiosidades: [
      { t: "Escalador nocturno", txt: "Escala troncos y ramas de noche usando sus patas con estructuras adhesivas, cazando insectos y arañas que duermen en la corteza." },
      { t: "Fluorescencia UV", txt: "Como todos los escorpiones, brilla con luz azul-verde bajo luz ultravioleta; los investigadores usan linternas UV para detectarlos de noche." },
      { t: "Veneno selectivo", txt: "Su veneno puede ser doloroso pero raramente es peligroso para humanos sanos; está diseñado para presas de su tamaño." }
    ]
  },
  {
    id: "hocofaisan",
    nombre: "Hocofaisán",
    cient: "Crax rubra",
    estado: "VULNERABLE",
    categoria: "Ave • Cracidae",
    habitat: "Selvas húmedas del S y SE México",
    poblacion: "Reducida",
    tamaño: "80 – 95 cm",
    peso: "3.1 – 4.8 kg",
    emoji: "🦃",
    sonido: "selva",
    desc: "El hocofaisán es el cracid más conspicuo de México, con el macho de plumaje negro lustroso, vientre blanco y una protuberancia nasal amarilla. Habita en selvas húmedas desde el sur de Tamaulipas y Veracruz hasta el sur de Oaxaca y Chiapas. Se alimenta de frutos, semillas e invertebrados del suelo.",
    amenazas: [
      "Cacería furtiva como alimento en comunidades rurales de la selva.",
      "Fragmentación de la selva húmeda que aísla poblaciones.",
      "Colecta de huevos para cría en traspatio."
    ],
    curiosidades: [
      { t: "Resonador vocal", txt: "El macho produce un sonido retumbante grave audible a kilómetros en la selva, usando modificaciones de la tráquea como caja de resonancia." },
      { t: "Frugívoro clave", txt: "Consume y dispersa semillas de frutos grandes de árboles del dosel que pocas aves pueden procesar por su tamaño." },
      { t: "Cortejo elaborado", txt: "El macho infla la protuberancia nasal, extiende las alas y emite vocalizaciones en un elaborado despliegue de cortejo." }
    ]
  },
  {
    id: "tarantula-arboricola",
    nombre: "Tarántula Arbórea Mexicana",
    cient: "Psalmopoeus victori",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Arácnido • Araña",
    habitat: "Bosque tropical de Guerrero y Michoacán",
    poblacion: "Muy reducida",
    tamaño: "Cuerpo 5 – 7 cm",
    peso: "20 – 40 g",
    emoji: "🕷️",
    sonido: "selva",
    desc: "La tarántula de rodillas de llama o tarántula roja mexicana es una tarántula endémica de las costas de Guerrero y Michoacán, con llamativas franjas rojo-naranja en las patas que contrastan con el cuerpo negro. Es una de las tarántulas más escasas de México debido a la colecta masiva y la pérdida de hábitat.",
    amenazas: [
      "Colecta ilegal masiva para el mercado internacional de tarántulas mascota.",
      "Pérdida del bosque tropical en Guerrero y Michoacán.",
      "Muy poco conocida; apenas se realizan estudios poblacionales en campo."
    ],
    curiosidades: [
      { t: "Franjas de advertencia", txt: "Sus llamativas franjas rojo-naranja son aposematismo honesto: indica a los depredadores que puede defenderse con pelos urticantes." },
      { t: "Crecimiento lento", txt: "Tarda varios años en alcanzar la madurez y solo produce una puesta de huevos por año; sus poblaciones se recuperan muy lentamente." },
      { t: "Hembra longeva", txt: "Las hembras pueden vivir más de 20 años, mientras los machos mueren pronto tras la primera reproducción." }
    ]
  },
  {
    id: "mariposa-esperanza",
    nombre: "Mariposa Esperanza",
    cient: "Pterourus esperanza",
    estado: "AMENAZADO",
    categoria: "Insecto • Lepidóptero",
    habitat: "Bosque tropical seco de Oaxaca y Guerrero",
    poblacion: "Desconocida",
    tamaño: "5 – 6 cm envergadura",
    peso: "< 1 g",
    emoji: "🦋",
    sonido: "selva",
    desc: "La mariposa esperanza o cola de golondrina ancestral es la mariposa más primitiva del mundo viva, considerada un fósil viviente entre los lepidópteros. Es la única especie de la familia Baronidae. Solo vive en bosques tropicales secos de Oaxaca y Guerrero. Sus orugas se alimentan exclusivamente del copal (Bursera).",
    amenazas: [
      "Pérdida del bosque tropical seco donde crecen sus plantas huésped de Bursera.",
      "Colecta por lepidopteristas y coleccionistas de mariposas raras.",
      "Especialización extrema: solo puede reproducirse donde existe Bursera."
    ],
    curiosidades: [
      { t: "Mariposa más primitiva", txt: "Es la mariposa viva más antigua evolutivamente; su morfología y genética la ubican en la base del árbol familiar de los papilionidos." },
      { t: "Género único", txt: "Es la única especie del género Baronia y la única de la familia Baronidae; su extinción borraría una línea evolutiva de más de 90 millones de años." },
      { t: "Copal exclusivo", txt: "Sus orugas solo se alimentan de hojas de Bursera (copal); sin estos árboles, la mariposa no puede reproducirse aunque el hábitat sea ideal." }
    ]
  },
  {
    id: "lacandonia",
    nombre: "Lacandonia",
    cient: "Lacandonia schismatica",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Planta • Triuridaceae",
    habitat: "Selva Lacandona, Chiapas",
    poblacion: "< 3 localidades conocidas",
    tamaño: "2 – 6 cm",
    peso: "N/A",
    emoji: "🌺",
    sonido: "selva",
    desc: "La lacandonia es una de las plantas más extraordinarias y raras del mundo, endémica de la Selva Lacandona en Chiapas. Sin clorofila, no hace fotosíntesis y vive parasitando hongos del suelo. Su flor tiene los órganos sexuales invertidos: los estambres (masculinos) están en el centro y los pistilos (femeninos) alrededor, al contrario de cualquier otra planta del mundo.",
    amenazas: [
      "Deforestación de la Selva Lacandona por comunidades colonizadoras.",
      "Solo se conoce en tres localidades en todo el mundo.",
      "Dependencia de hongos micorrízicos específicos que desaparecen al deforestar."
    ],
    curiosidades: [
      { t: "Flor al revés", txt: "Es la única planta del mundo con los órganos florales invertidos: estambres al centro y pistilos alrededor; en todas las demás plantas es exactamente al contrario." },
      { t: "Sin clorofila", txt: "No tiene clorofila ni hace fotosíntesis; obtiene todos sus nutrientes parasitando hongos del suelo de la selva tropical." },
      { t: "Tres localidades mundiales", txt: "Solo se conoce en tres puntos específicos de la Selva Lacandona; toda la especie cabe en pocas hectáreas." }
    ]
  },
  {
    id: "dalia-montana",
    nombre: "Dalia de Montaña",
    cient: "Dahlia scapigera",
    estado: "AMENAZADO",
    categoria: "Planta • Asteraceae",
    habitat: "Bosques de montaña de México",
    poblacion: "Reducida",
    tamaño: "Hasta 5 m de altura",
    peso: "N/A",
    emoji: "🌸",
    sonido: "selva",
    desc: "La dalia de árbol o dalia imperial es la dalia más grande del mundo, pudiendo alcanzar 5 m de altura con troncos semi-leñosos. Endémica de los bosques húmedos de montaña de México y Guatemala, florece masivamente en otoño cubriendo las laderas con flores rosadas o lilas. Es el ancestro silvestre de todas las dalias de jardín del mundo.",
    amenazas: [
      "Pérdida del bosque de montaña donde habita por deforestación.",
      "Extracción de tubérculos para consumo y ornamento.",
      "Invasión de pastizales y cambio de uso de suelo en zonas montañosas."
    ],
    curiosidades: [
      { t: "Madre de las dalias", txt: "Todas las variedades de dahlia cultivadas en jardines del mundo son descendientes de las especies silvestres mexicanas." },
      { t: "Flor nacional", txt: "La dalia es la flor nacional de México por decreto oficial desde 1963, símbolo de la riqueza botánica del país." },
      { t: "Gigante del otoño", txt: "Crece de 1 a 5 metros en una sola temporada de lluvias; florece masivamente en octubre y noviembre cubriendo los bosques de montaña." }
    ]
  },
  {
    id: "serpiente-coralillo-oaxaquena",
    nombre: "Serpiente Coralillo Oaxaqueña",
    cient: "Micrurus ephippifer",
    estado: "AMENAZADO",
    categoria: "Reptil • Serpiente venenosa",
    habitat: "Sierra Madre del Sur, Oaxaca",
    poblacion: "Reducida",
    tamaño: "50 – 80 cm",
    peso: "60 – 150 g",
    emoji: "🐍",
    sonido: "selva",
    desc: "La coralillo oaxaqueña es una serpiente elapída endémica de las sierras de Oaxaca y Guerrero, con el característico patrón de anillos rojo, negro y amarillo que advierte de su peligrosidad. Su veneno neurotóxico actúa sobre el sistema nervioso. Es una serpiente tímida que prefiere la hojarasca y el suelo del bosque.",
    amenazas: [
      "Matanza indiscriminada por temor en comunidades rurales.",
      "Pérdida del bosque en sus áreas de distribución en las sierras oaxaqueñas.",
      "Confusión con la falsa coralillo no venenosa que lleva patrones similares."
    ],
    curiosidades: [
      { t: "Señal de peligro", txt: "Sus anillos rojos, negros y amarillos son aposematismo: advierten a los depredadores de su veneno neurotóxico antes de que intenten atacar." },
      { t: "Come serpientes", txt: "Se especializa en cazar otras serpientes, incluyendo cascabeles; su resistencia al veneno de crotálidos le da ventaja como depredador." },
      { t: "Veneno neurotóxico", txt: "Su veneno bloquea la transmisión nerviosa causando parálisis; sus efectos pueden tardar horas en aparecer, diferente al veneno hemotóxico." }
    ]
  },
  {
    id: "rana-sierra-madre",
    nombre: "Rana de la Sierra Madre Occidental",
    cient: "Lithobates sierramadrensis",
    estado: "AMENAZADO",
    categoria: "Anfibio • Anuro",
    habitat: "Ríos de la Sierra Madre Occidental",
    poblacion: "Reducida",
    tamaño: "50 – 90 mm",
    peso: "20 – 60 g",
    emoji: "🐸",
    sonido: "lluvia",
    desc: "La rana tarahumara es una rana robusta que habita en los ríos y arroyos de la Sierra Madre Occidental, especialmente en Sonora, Chihuahua y Sinaloa. Adaptada a aguas frías y bien oxigenadas de montaña, nada y bucea con destreza. Las ranas tarahumaras son cazadas y consumidas por comunidades rarámuri.",
    amenazas: [
      "Colecta para consumo humano, especialmente en Sonora y Chihuahua.",
      "Contaminación de ríos de montaña por actividades mineras.",
      "Disminución del caudal de ríos por extracción de agua para agricultura."
    ],
    curiosidades: [
      { t: "Rana de los rarámuri", txt: "Las comunidades tarahumara la han consumido como alimento por siglos; su nombre científico honra a este pueblo indígena." },
      { t: "Buceadora experta", txt: "Puede permanecer sumergida varios minutos; absorbe oxígeno a través de la piel en el agua fría y bien oxigenada de los ríos serranos." },
      { t: "Salto poderoso", txt: "Sus patas traseras musculosas le permiten saltar hasta 1.5 m de distancia para escapar de depredadores como serpientes y garzas." }
    ]
  },
  {
    id: "mariposa-monarca",
    nombre: "Mariposa Monarca",
    cient: "Danaus plexippus",
    estado: "VULNERABLE",
    categoria: "Insecto • Lepidóptero",
    habitat: "Oyamel, Michoacán y Estado de México",
    poblacion: "Reducida, variable",
    tamaño: "8 – 10 cm envergadura",
    peso: "0.3 – 0.5 g",
    emoji: "🦋",
    sonido: "viento",
    desc: "La mariposa monarca es famosa por su migración anual de hasta 4,500 km desde Canadá y el norte de Estados Unidos hasta los bosques de oyamel en Michoacán. Millones de mariposas cubren los árboles formando alfombras anaranjadas. Una misma mariposa no completa la migración: toma cuatro generaciones ir y volver.",
    amenazas: [
      "Pérdida de bosques de oyamel en sus sitios de hibernación en México.",
      "Desaparición del algodoncillo (Asclepias) en su ruta migratoria por uso de herbicidas.",
      "Cambio climático que altera las rutas y temporadas de migración."
    ],
    curiosidades: [
      { t: "Migración multigeneracional", txt: "Ninguna mariposa vive toda la ruta: la generación que llega a México es tataranieta de la que partió; no tienen mapa ni guía previa." },
      { t: "Generación Matusalén", txt: "La generación migradora vive 8 meses, cuatro veces más que las otras, acumulando grasa suficiente para el viaje y la hibernación." },
      { t: "Tóxica por diseño", txt: "Las orugas comen algodoncillo acumulando cardenólidos tóxicos en su cuerpo; las aves aprenden a evitarlas por asociación." }
    ]
  },
  {
    id: "ranita-chamula",
    nombre: "Ranita Chamula",
    cient: "Duellmanohyla chamulae",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Anfibio • Anuro",
    habitat: "Altos de Chiapas",
    poblacion: "Desconocida, muy reducida",
    tamaño: "20 – 35 mm",
    peso: "2 – 6 g",
    emoji: "🐸",
    sonido: "lluvia",
    desc: "La ranita chamula es un pequeño anfibio endémico de los Altos de Chiapas, zona habitada por comunidades tzotziles. Su nombre hace referencia a San Juan Chamula. Habita en bosques de pino-encino húmedos a gran altitud. Su reproducción es directa: no tiene renacuajos acuáticos, las crías emergen directamente del huevo.",
    amenazas: [
      "Deforestación de bosques de pino-encino en los Altos de Chiapas.",
      "Hongo quitrídeo Batrachochytrium dendrobatidis que ha diezmado anfibios en México.",
      "Distribución extremadamente restringida a una pequeña área geográfica."
    ],
    curiosidades: [
      { t: "Nombre indígena", txt: "Su nombre científico honra al pueblo tzotzil de San Juan Chamula; es una de las pocas especies nombradas en referencia a una comunidad indígena chiapaneca." },
      { t: "Sin renacuajos", txt: "Sus crías emergen directamente del huevo como ranitas completamente formadas, sin depender de cuerpos de agua permanentes." },
      { t: "Altitud extrema", txt: "Vive a más de 2,000 m en los Altos de Chiapas, donde las noches son frías y la humedad es permanente entre los bosques de pino." }
    ]
  },
  {
    id: "cocodrilo-pantano",
    nombre: "Cocodrilo del Pantano",
    cient: "Crocodylus moreletii",
    estado: "AMENAZADO",
    categoria: "Reptil • Cocodriliano",
    habitat: "Humedales del sureste de México",
    poblacion: "~20,000 en México",
    tamaño: "2 – 3 m",
    peso: "60 – 200 kg",
    emoji: "🐊",
    sonido: "oceano",
    desc: "El cocodrilo de pantano o de Morelet es el cocodrilo más común de México, endémico de la Península de Yucatán, Chiapas, Tabasco, Campeche, Veracruz y Belice. Habita en agua dulce: lagunas, ríos, cenotes y pantanos. Es un depredador de tope en los humedales. Fue cazado al borde de la extinción en el siglo XX.",
    amenazas: [
      "Cacería histórica por su piel, que casi lo extingue en los años 60-70.",
      "Pérdida de humedales y zonas inundables por drenaje y agricultura.",
      "Conflictos con humanos en zonas costeras y turísticas."
    ],
    curiosidades: [
      { t: "Madre protectora", txt: "La hembra cuida el nido durante los 80 días de incubación y transporta gentilmente a las crías en la boca hacia el agua al eclosionar." },
      { t: "Temperatura determina sexo", txt: "El sexo de las crías lo determina la temperatura del nido: machos por encima de 31.5 °C y hembras por debajo, no los cromosomas." },
      { t: "Recuperación notable", txt: "Gracias a vedas y programas de reproducción en cautiverio, se recuperó de menos de 1,000 individuos en los 70 a más de 20,000 en la actualidad." }
    ]
  },
  {
    id: "biznaga-barril",
    nombre: "Biznaga Barril",
    cient: "Ferocactus histrix",
    estado: "AMENAZADO",
    categoria: "Planta • Cactácea",
    habitat: "Zonas áridas del México central",
    poblacion: "Reducida",
    tamaño: "30 – 150 cm",
    peso: "N/A",
    emoji: "🌵",
    sonido: "viento",
    desc: "La biznaga barril es un cactus globoso o cilíndrico endémico del altiplano mexicano, presente en San Luis Potosí, Querétaro, Hidalgo y Guanajuato. Históricamente fue explotada para hacer 'acitrón', un dulce tradicional de Semana Santa que hoy está prohibido por la protección de la especie.",
    amenazas: [
      "Extracción de tejido pulposo para fabricar acitrón, actualmente prohibida por ley.",
      "Pastoreo que destruye plántulas y ejemplares jóvenes.",
      "Urbanización del altiplano central que destruye poblaciones enteras."
    ],
    curiosidades: [
      { t: "Barril de agua", txt: "Un ejemplar grande puede almacenar hasta 200 litros de agua en sus tejidos; en el desierto fue fuente de agua de emergencia para viajeros." },
      { t: "Acitrón prohibido", txt: "Su tejido cocido con azúcar formaba el acitrón, ingrediente del chiles en nogada; hoy su extracción es delito federal." },
      { t: "Crecimiento lentísimo", txt: "Un ejemplar de 1 m de diámetro tiene más de 50 años; esta lentitud hace imposible la recuperación rápida de poblaciones sobre-explotadas." }
    ]
  },
  {
    id: "pata-elefante",
    nombre: "Pata de Elefante",
    cient: "Beaucarnea recurvata",
    estado: "AMENAZADO",
    categoria: "Planta • Asparagaceae",
    habitat: "Bosque seco de Tamaulipas y SLP",
    poblacion: "Reducida",
    tamaño: "Hasta 9 m",
    peso: "N/A",
    emoji: "🌴",
    sonido: "viento",
    desc: "El nolina o pata de elefante es una planta icónica del noreste de México, con una base del tronco enormemente engrosada que almacena agua. Sus hojas delgadas y largas brotan en la cima en una corona que puede superar los 5 m. Es extremadamente longeva —puede vivir más de 350 años— y de crecimiento muy lento.",
    amenazas: [
      "Extracción masiva de ejemplares silvestres para el comercio ornamental global.",
      "Pérdida del matorral seco donde habita en Tamaulipas y San Luis Potosí.",
      "Colecta de ejemplares grandes centenarios que tardan siglos en reponerse."
    ],
    curiosidades: [
      { t: "Árbol de trescientos años", txt: "Puede vivir más de 350 años; muchos ejemplares que se venden en viveros son extraídos de la naturaleza y tienen décadas o siglos de edad." },
      { t: "Reservorio de agua", txt: "La base del tronco hinchada puede almacenar decenas de litros de agua para sobrevivir las largas sequías del noreste árido mexicano." },
      { t: "Planta global", txt: "Es una de las plantas de ornato más exportadas de México; su fama mundial como planta de interior ha impulsado la extracción ilegal." }
    ]
  },
  {
    id: "maquique",
    nombre: "Maquique",
    cient: "Cyathea fulva",
    estado: "AMENAZADO",
    categoria: "Ave • Ardeidae",
    habitat: "Ríos y humedales de México",
    poblacion: "Reducida",
    tamaño: "64 – 76 cm",
    peso: "900 – 1300 g",
    emoji: "🦅",
    sonido: "oceano",
    desc: "El maquique o garza tigre mexicana es una garza de gran tamaño con plumaje pardo rufo rayado que le da aspecto de tigre. Habita en ríos, lagunas y manglares de las costas tropicales mexicanas. Es solitaria y esquiva, cazando inmóvil a orillas del agua con paciencia extraordinaria.",
    amenazas: [
      "Destrucción de manglares y zonas ribereñas tropicales.",
      "Contaminación de ríos y lagunas costeras.",
      "Perturbación humana en zonas de anidación."
    ],
    curiosidades: [
      { t: "Cazador inmóvil", txt: "Puede permanecer absolutamente inmóvil durante horas a orillas del agua, confundiéndose con el entorno hasta que una presa se acerca." },
      { t: "Plumaje críptico", txt: "Sus rayas y colores pardos imitan perfectamente la luz y sombra de la vegetación riparia; puede estar a metros de un observador sin ser detectado." },
      { t: "Pico lanza", txt: "Cuando ataca, su largo cuello se extiende en una fracción de segundo para clavar el pico en la presa con velocidad casi imposible de seguir a simple vista." }
    ]
  },
  {
    id: "flor-montana",
    nombre: "Flor de Montaña",
    cient: "Laelia speciosa",
    estado: "AMENAZADO",
    categoria: "Planta • Orquídea",
    habitat: "Bosques de encino, México central",
    poblacion: "Reducida",
    tamaño: "20 – 40 cm",
    peso: "N/A",
    emoji: "🌺",
    sonido: "selva",
    desc: "La flor de mayo o laelia de mayo es una orquídea epífita endémica de los bosques de encino del altiplano mexicano, especialmente en Michoacán, Jalisco, Guanajuato y Querétaro. Sus grandes flores rosado-malva con labelo morado intenso, de hasta 12 cm de diámetro, son consideradas las más espectaculares de las orquídeas mexicanas.",
    amenazas: [
      "Extracción masiva de plantas del campo para el mercado de orquídeas.",
      "Pérdida del bosque de encino donde habita.",
      "Dependencia de hongos micorrízicos que desaparecen al degradar el hábitat."
    ],
    curiosidades: [
      { t: "Mayo florido", txt: "Florece masivamente en mayo; un árbol de encino cubierto de laelias en flor es uno de los espectáculos botánicos más impresionantes de México." },
      { t: "Solo en encinos viejos", txt: "Crece casi exclusivamente sobre encinos de más de 50 años, vulnerable a la tala y la regeneración de bosques jóvenes sin árboles viejos." },
      { t: "Protegida globalmente", txt: "Está incluida en el Apéndice I de CITES, prohibiéndose su comercio internacional; sin embargo, sigue extrayéndose ilegalmente." }
    ]
  },
  {
    id: "peyote",
    nombre: "Peyote",
    cient: "Lophophora williamsii",
    estado: "VULNERABLE",
    categoria: "Planta • Cactácea",
    habitat: "Desierto chihuahuense, SLP a Tamaulipas",
    poblacion: "Reducida",
    tamaño: "2 – 7 cm",
    peso: "N/A",
    emoji: "🌵",
    sonido: "viento",
    desc: "El peyote es un cactus pequeño y sin espinas endémico del Desierto Chihuahuense entre México y Texas. Contiene mescalina y decenas de alcaloides y es sagrado para los pueblos wixáritari (huicholes), rarámuri y otros grupos indígenas que lo usan en ceremonias espirituales desde hace milenios.",
    amenazas: [
      "Extracción ilegal masiva por turistas y comerciantes de psicotrópicos.",
      "Colecta ritual excesiva que supera la capacidad de regeneración natural.",
      "Crecimiento extremadamente lento: un ejemplar adulto tarda 10 a 30 años en madurar."
    ],
    curiosidades: [
      { t: "Sagrado wixáritari", txt: "Para los huicholes, el peyote no es una droga sino un ser sagrado llamado 'Hikuri'; su peregrinaje anual a Wirikuta es reconocido por la UNESCO." },
      { t: "Sin espinas", txt: "Es uno de los pocos cactus del mundo sin espinas; en su lugar tiene mechones de pelos sedosos, lo que lo hace vulnerable a herbívoros y a la extracción humana." },
      { t: "Botón de 30 años", txt: "Un botón adulto de 7 cm puede tener entre 10 y 30 años de crecimiento; colectarlo elimina décadas de desarrollo en segundos." }
    ]
  },
  {
    id: "coral-cuerno-alce",
    nombre: "Coral Cuerno de Alce",
    cient: "Acropora palmata",
    estado: "EN PELIGRO CRÍTICO",
    categoria: "Invertebrado • Coral",
    habitat: "Arrecife Mesoamericano, Caribe mexicano",
    poblacion: "< 10% de su abundancia histórica",
    tamaño: "Colonias hasta 3.7 m",
    peso: "Variable",
    emoji: "🪸",
    sonido: "oceano",
    desc: "El coral cuerno de alce es el coral más importante del Arrecife Mesoamericano en el Caribe mexicano. Sus ramas gruesas y aplanadas forman las estructuras tridimensionales del arrecife que dan refugio a cientos de especies marinas. Ha perdido más del 90% de su cobertura en el Caribe en los últimos 40 años.",
    amenazas: [
      "Blanqueamiento coralino por aumento de temperatura del agua causado por el cambio climático.",
      "Enfermedades coralinas como la banda blanca que destruye tejido coral.",
      "Contaminación de aguas costeras por nutrientes y sedimentos de tierra."
    ],
    curiosidades: [
      { t: "Constructor de ecosistemas", txt: "Una sola colonia puede proporcionar refugio a decenas de especies de peces, crustáceos y moluscos; sin ella el arrecife pierde su estructura tridimensional." },
      { t: "Crecimiento lento", txt: "Crece apenas 5 a 10 cm por año; una colonia del tamaño de un automóvil tiene décadas de crecimiento que el blanqueamiento puede destruir en semanas." },
      { t: "Restauración activa", txt: "En México se realizan proyectos donde fragmentos cultivados en viveros submarinos son trasplantados al arrecife para recuperar cobertura." }
    ]
  },
  {
    id: "abeto-douglas",
    nombre: "Abeto de Douglas",
    cient: "Pseudotsuga menziesii var. glauca",
    estado: "AMENAZADO",
    categoria: "Planta • Conífera",
    habitat: "Sierra Madre Occidental y Oriental",
    poblacion: "Reducida en México",
    tamaño: "Hasta 40 m en México",
    peso: "N/A",
    emoji: "🌲",
    sonido: "viento",
    desc: "El abeto de Douglas o pino de Oregon llega al límite sur de su distribución natural en las sierras mexicanas. Los ejemplares mexicanos son genéticamente distintos de los norteamericanos y representan una población relicta de alta importancia. En México sus bosques son ecosistemas de alta biodiversidad raramente protegidos.",
    amenazas: [
      "Tala ilegal en las sierras donde tiene sus poblaciones relictas en México.",
      "Incendios forestales que afectan sus hábitats de montaña.",
      "Cambio climático que reduce las condiciones óptimas de temperatura y humedad."
    ],
    curiosidades: [
      { t: "No es abeto ni pino", txt: "A pesar de su nombre común, no es un abeto verdadero ni un pino; es el único representante del género Pseudotsuga en el hemisferio occidental." },
      { t: "Árbol más alto de México", txt: "Los ejemplares mexicanos en la Sierra Madre pueden superar los 40 m, siendo uno de los árboles más altos de los bosques mexicanos de montaña." },
      { t: "Refugio de alta montaña", txt: "Sus bosques en México son refugio de especies como el pájaro carpintero imperial, el jaguar de montaña y diversas orquídeas de alta altitud." }
    ]
  }
];
