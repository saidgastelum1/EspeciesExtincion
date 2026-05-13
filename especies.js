const ESPECIES = [

  {
    id:        "jaguar",
    nombre:    "Jaguar",
    cient:     "Panthera onca",
    emoji:     "🐆",
    categoria: "Mamífero · Felino",
    estado:    "VULNERABLE",          /* "EN PELIGRO CRÍTICO" | "VULNERABLE" | "AMENAZADO" */
    habitat:   "Selva tropical",
    poblacion: "~64,000 ind.",
    tamaño:    "1.1 – 1.85 m",
    peso:      "56 – 96 kg",
    sonido:    "selva",               /* "selva" | "oceano" | "lluvia" | "viento" | "cueva" */
    desc: `El jaguar es el felino más grande de América y el tercero del mundo, superado solo por el tigre y el león. Habita en selvas tropicales, manglares y pastizales desde el sur de México hasta el norte de Argentina. Adora el agua: nada con destreza y caza tortugas, peces y caimanes directamente en ríos y lagunas. Su mordida es la más poderosa entre los felinos y puede perforar el cráneo de sus presas de un solo golpe.`,
    amenazas: [
      "Deforestación masiva para ganadería y agricultura que destruye su hábitat.",
      "Caza furtiva: pieles, huesos y colmillos traficados ilegalmente.",
      "Conflicto con ganaderos que matan jaguares por depredación de ganado.",
      "Fragmentación del territorio por carreteras y expansión urbana.",
      "Cambio climático que reduce las selvas y desplaza a sus presas.",
    ],
    curiosidades: [
      { t:"El único que ruge",    txt:"Es el único felino de América con anatomía para rugir. Su rugido se escucha a kilómetros de distancia en la selva." },
      { t:"Mandíbula legendaria", txt:"Ejerce 1,500 lb/pulg² de presión — la más fuerte entre los felinos, capaz de partir un cráneo de tapir." },
      { t:"Amante del agua",      txt:"Mientras leones y tigres evitan ríos, el jaguar los busca activamente. Pesca con sus garras como lo haría un oso." },
      { t:"Nombre que da miedo",  txt:"Del tupí-guaraní 'yaguara': bestia que mata de un salto. Los amazónicos lo llaman 'señor de la noche'." },
    ],
  },

  {
    id:        "axolote",
    nombre:    "Ajolote",
    cient:     "Ambystoma mexicanum",
    emoji:     "🦎",
    categoria: "Anfibio · Salamandra",
    estado:    "EN PELIGRO CRÍTICO",
    habitat:   "Lagos de Xochimilco",
    poblacion: "< 1,000 ind.",
    tamaño:    "15 – 45 cm",
    peso:      "60 – 250 g",
    sonido:    "lluvia",
    desc: `El ajolote mexicano es una salamandra acuática endémica del lago de Xochimilco en la Ciudad de México. Es mundialmente famoso por su extraordinaria capacidad de regeneración: puede regenerar extremidades, corazón, pulmones y partes del cerebro sin dejar cicatrices. A diferencia de otras salamandras, el ajolote retiene sus características larvales toda la vida, un fenómeno llamado neotenia. Hoy se estima que quedan menos de 1,000 individuos en estado silvestre.`,
    amenazas: [
      "Contaminación severa del agua en los canales de Xochimilco.",
      "Introducción de peces exóticos como la carpa y la tilapia que los depredan.",
      "Urbanización y desecación de los canales históricos.",
      "Captura ilegal para mascotas y comercio internacional.",
      "Enfermedades fúngicas importadas por anfibios exóticos.",
    ],
    curiosidades: [
      { t:"Regeneración sobrehumana", txt:"Puede regenerar un corazón, un pulmón o partes del cerebro. Los científicos estudian su ADN para aplicarlo en medicina humana." },
      { t:"Nombre náhuatl",          txt:"'Axolotl' en náhuatl significa 'monstruo del agua'. Era sagrado para los aztecas, asociado al dios Xólotl." },
      { t:"Neotenia",                txt:"Es un adulto que mantiene forma de larva toda su vida. Sus branquias externas (las 'plumas' rosadas) son su característica más icónica." },
    ],
  },

  {
    id:        "vaquita-marina",
    nombre:    "Vaquita Marina",
    cient:     "Phocoena sinus",
    emoji:     "🐬",
    categoria: "Mamífero · Cetáceo",
    estado:    "EN PELIGRO CRÍTICO",
    habitat:   "Golfo de California",
    poblacion: "< 10 ind.",
    tamaño:    "1.2 – 1.5 m",
    peso:      "30 – 55 kg",
    sonido:    "oceano",
    desc: `La vaquita marina es el mamífero marino más pequeño y más amenazado del planeta. Endémica del norte del Golfo de California, México, se distingue por sus marcas oscuras alrededor de los ojos y la boca. Con menos de 10 individuos estimados, es la especie de cetáceo más rara del mundo y podría extinguirse en pocos años si no se actúa de inmediato.`,
    amenazas: [
      "Captura incidental en redes de enmalle ilegales usadas para pescar totoaba.",
      "Tráfico ilegal de la vejiga natatoria de la totoaba hacia China.",
      "Reducción del flujo de agua del río Colorado por presas y desvíos.",
      "Contaminación agrícola que altera su ecosistema.",
    ],
    curiosidades: [
      { t:"La más rara del mundo",   txt:"Fue descubierta en 1958. En menos de 70 años pasó de miles de individuos a menos de diez. Es el cetáceo más escaso de la historia." },
      { t:"Marsopa tropical",        txt:"Es la única marsopa del mundo que vive en aguas tropicales cálidas. Sus parientes prefieren mares fríos." },
      { t:"Cara de panda marino",    txt:"Sus manchas oscuras alrededor de ojos y boca le dan una expresión única. En inglés la llaman 'little cow of the sea'." },
    ],
  },

  {
    id:        "lobo-mexicano",
    nombre:    "Lobo Mexicano",
    cient:     "Canis lupus baileyi",
    emoji:     "🐺",
    categoria: "Mamífero · Cánido",
    estado:    "EN PELIGRO CRÍTICO",
    habitat:   "Bosques y montañas",
    poblacion: "~380 ind.",
    tamaño:    "1.2 – 1.5 m",
    peso:      "25 – 45 kg",
    sonido:    "viento",
    desc: `El lobo mexicano es la subespecie de lobo gris más pequeña y más amenazada de Norteamérica. Fue prácticamente extirpado de la naturaleza a mediados del siglo XX por programas de exterminio gubernamental. Gracias a programas de cría en cautiverio y reintroducción, hoy sobrevive en pequeñas poblaciones en la Sierra Madre Occidental de México y Arizona.`,
    amenazas: [
      "Caza y exterminio histórico por ganaderos y gobiernos.",
      "Pérdida de hábitat por deforestación y expansión agropecuaria.",
      "Conflicto con ganaderos por depredación de ganado.",
      "Baja diversidad genética por el efecto cuello de botella.",
      "Atropellamientos en carreteras que cruzan su territorio.",
    ],
    curiosidades: [
      { t:"Casi extinto dos veces", txt:"En 1976 quedaban solo 7 individuos. Un programa de rescate los capturó y crió en cautiverio. Todos los lobos mexicanos actuales descienden de esos 7." },
      { t:"Regulador del ecosistema", txt:"Su reintroducción en Arizona cambió el comportamiento de los venados, lo que permitió que los ríos y bosques se recuperaran." },
      { t:"El más pequeño",          txt:"Es el lobo más pequeño de Norteamérica. Su tamaño compacto le permite moverse en la densa vegetación de la Sierra Madre." },
    ],
  },

  {
    id:        "manatí",
    nombre:    "Manatí del Caribe",
    cient:     "Trichechus manatus",
    emoji:     "🦭",
    categoria: "Mamífero · Sirenio",
    estado:    "VULNERABLE",
    habitat:   "Costas y ríos del Caribe",
    poblacion: "~6,000 ind.",
    tamaño:    "2.5 – 4.5 m",
    peso:      "400 – 600 kg",
    sonido:    "oceano",
    desc: `El manatí del Caribe es un mamífero marino herbívoro que habita en costas, bahías, estuarios y ríos de agua cálida. Conocido como "la vaca marina" por su apacible comportamiento y dieta de plantas acuáticas, puede consumir hasta 10% de su peso corporal en vegetación al día. A pesar de su tamaño, es un nadador gracioso que puede alcanzar los 8 km/h.`,
    amenazas: [
      "Colisiones con embarcaciones de motor, la principal causa de muerte.",
      "Pérdida de hábitat por desarrollo costero y destrucción de manglares.",
      "Enredamiento en redes de pesca.",
      "Proliferación de algas tóxicas causadas por contaminación agrícola.",
      "Cambio climático que altera la temperatura del agua.",
    ],
    curiosidades: [
      { t:"Sirena del Caribe",    txt:"Los marineros del siglo XV los confundieron con sirenas. Cristóbal Colón escribió que las sirenas 'no eran tan hermosas como se decía'." },
      { t:"Prima del elefante",   txt:"A pesar de vivir en el agua, el pariente vivo más cercano del manatí es el elefante. Comparten un ancestro común de hace 60 millones de años." },
      { t:"Dientes rotatorios",   txt:"Es uno de los pocos mamíferos con dentición conveyor: los dientes se mueven hacia adelante y los viejos caen, reemplazados por nuevos desde atrás." },
    ],
  },

  {
    id:        "tapir",
    nombre:    "Tapir Centroamericano",
    cient:     "Tapirus bairdii",
    emoji:     "🦏",
    categoria: "Mamífero · Perissodáctilo",
    estado:    "EN PELIGRO CRÍTICO",
    habitat:   "Bosque húmedo tropical",
    poblacion: "< 5,500 ind.",
    tamaño:    "1.8 – 2.5 m",
    peso:      "150 – 300 kg",
    sonido:    "selva",
    desc: `El tapir centroamericano, también llamado danta o tapir de Baird, es el mamífero terrestre más grande de Mesoamérica. Es un animal solitario y nocturno que habita bosques tropicales densos. Su pequeña trompa prensil —evolución independiente a la del elefante— le permite agarrar hojas, frutos y ramas. Es un dispersor de semillas fundamental para la regeneración del bosque.`,
    amenazas: [
      "Deforestación y fragmentación del bosque tropical.",
      "Caza furtiva por su carne, considerada un manjar en algunas regiones.",
      "Atropellamientos al cruzar carreteras que dividen su hábitat.",
      "Pérdida de corredores biológicos entre poblaciones.",
    ],
    curiosidades: [
      { t:"El jardinero del bosque", txt:"Dispersa semillas grandes que ninguna otra especie puede transportar. Sin tapires, muchos árboles tropicales no podrían reproducirse." },
      { t:"Diseño antiguo",          txt:"Los tapires han mantenido casi la misma forma corporal durante 35 millones de años. Son fósiles vivientes de una era pasada." },
      { t:"Nadador experto",         txt:"Se refugian del calor y de los depredadores sumergiéndose en ríos y lagunas. Pueden caminar por el fondo como hipopótamos." },
    ],
  },

  {
    id:        "mono-arana",
    nombre:    "Mono Araña",
    cient:     "Ateles geoffroyi",
    emoji:     "🐒",
    categoria: "Mamífero · Primate",
    estado:    "EN PELIGRO CRÍTICO",
    habitat:   "Selva alta perennifolia",
    poblacion: "< 2,000 ind. (México)",
    tamaño:    "38 – 63 cm",
    peso:      "6 – 9 kg",
    sonido:    "selva",
    desc: `El mono araña geoffroy es uno de los primates más inteligentes de América. Vive en las selvas altas de México y Centroamérica en grupos sociales complejos liderados por hembras. Su larga cola prensil actúa como un quinto miembro que le permite desplazarse ágilmente por el dosel del bosque. Es un dispersor de semillas crítico para la biodiversidad de la selva.`,
    amenazas: [
      "Deforestación masiva de la selva alta en México y Centroamérica.",
      "Cacería furtiva para alimento o captura como mascota.",
      "Baja tasa reproductiva: una cría cada 2-3 años.",
      "Fragmentación del hábitat que aísla poblaciones pequeñas.",
    ],
    curiosidades: [
      { t:"Cola de agarre",        txt:"Su cola prensil es tan fuerte que puede sostener su peso corporal completo. La usan como tercera mano para tomar frutos." },
      { t:"Memoria de árbol",      txt:"Recuerdan la ubicación de cientos de árboles frutales y planifican rutas según la temporada. Su inteligencia espacial rivaliza con la de los chimpancés." },
      { t:"Sociedades matriarcales", txt:"Las hembras lideran el grupo y deciden los movimientos. Los machos jóvenes emigran a otros grupos para evitar la consanguinidad." },
    ],
  },

  {
    id:        "ocelote",
    nombre:    "Ocelote",
    cient:     "Leopardus pardalis",
    emoji:     "🐱",
    categoria: "Mamífero · Felino",
    estado:    "VULNERABLE",
    habitat:   "Selva tropical y subtropical",
    poblacion: "~40,000 ind.",
    tamaño:    "55 – 100 cm",
    peso:      "8 – 16 kg",
    sonido:    "selva",
    desc: `El ocelote es uno de los felinos más hermosos del continente americano. Su pelaje manchado de rosetas lo hace inconfundible, aunque también lo ha convertido en blanco de cazadores de pieles durante siglos. Cazador nocturno experto, puede trepar árboles y nadar con facilidad. Habita desde el sur de Texas hasta el norte de Argentina.`,
    amenazas: [
      "Histórica caza masiva por su piel, que diezmó las poblaciones en el siglo XX.",
      "Pérdida de hábitat por deforestación y expansión agrícola.",
      "Atropellamientos en carreteras dentro de su territorio.",
      "Captura para el comercio ilegal de mascotas exóticas.",
    ],
    curiosidades: [
      { t:"El felino de la moda",  txt:"En los años 60 y 70 se mataban hasta 200,000 ocelotes al año solo para hacer abrigos de piel. Hoy está prohibido internacionalmente." },
      { t:"Visión nocturna",       txt:"Sus ojos tienen seis veces más células de luz que los humanos, lo que le permite cazar en casi total oscuridad." },
      { t:"Cazador versátil",      txt:"Puede cazar presas en el suelo, en los árboles o en el agua. Su menú incluye desde ratones hasta iguanas y peces." },
    ],
  },

  {
    id:        "nutria",
    nombre:    "Nutria de Río",
    cient:     "Lontra longicaudis",
    emoji:     "🦦",
    categoria: "Mamífero · Mustélido",
    estado:    "AMENAZADO",
    habitat:   "Ríos y humedales",
    poblacion: "Desconocida (en declive)",
    tamaño:    "45 – 73 cm",
    peso:      "5 – 14 kg",
    sonido:    "lluvia",
    desc: `La nutria neotropical habita ríos, lagunas y humedales desde México hasta Argentina. Es un indicador clave de la salud de los ecosistemas acuáticos: si hay nutrias, el río está sano. Cazadora ágil, puede mantenerse bajo el agua hasta 4 minutos y es capaz de capturar peces, crustáceos y hasta pequeños caimanes.`,
    amenazas: [
      "Caza histórica por su densa y valiosa piel.",
      "Contaminación de ríos por agroquímicos y metales pesados.",
      "Construcción de represas que fragmenta y destruye su hábitat.",
      "Disminución de presas por sobrepesca en los ríos.",
    ],
    curiosidades: [
      { t:"El guardián del río",   txt:"Su presencia indica aguas limpias y ecosistemas saludables. Los biólogos la usan como especie indicadora para monitorear la salud fluvial." },
      { t:"Juguetona por naturaleza", txt:"Las nutrias adultas siguen jugando toda su vida: se deslizan por barros y nadan en espirales sin ningún propósito más que el disfrute." },
      { t:"Comunicación rica",     txt:"Producen al menos 22 sonidos diferentes para comunicarse con su familia, desde gorjeos hasta chirridos de alarma." },
    ],
  },

  {
    id:        "murcielago-nariz-larga",
    nombre:    "Murciélago Nariz Larga",
    cient:     "Leptonycteris nivalis",
    emoji:     "🦇",
    categoria: "Mamífero · Quiróptero",
    estado:    "EN PELIGRO CRÍTICO",
    habitat:   "Cuevas y desierto",
    poblacion: "< 10,000 ind.",
    tamaño:    "7 – 9 cm",
    peso:      "18 – 30 g",
    sonido:    "cueva",
    desc: `El murciélago nariz larga mayor es un polinizador nocturno crítico para el desierto mexicano. Migra cientos de kilómetros siguiendo la floración de agaves, cactus y otras plantas. Sin él, muchas especies de agave —incluidas las que producen mezcal y tequila— no podrían reproducirse. Es el principal polinizador del agave silvestre.`,
    amenazas: [
      "Perturbación y destrucción de cuevas utilizadas como colonias de maternidad.",
      "Expansión de agaves cosechados antes de florecer, eliminando su fuente de alimento.",
      "Persecución por temor injustificado hacia los murciélagos.",
      "Uso de pesticidas que envenenan los insectos y flores de los que se alimenta.",
    ],
    curiosidades: [
      { t:"El padre del tequila",   txt:"Poliniza el agave azul silvestre. Sin murciélagos nariz larga, la industria del tequila y el mezcal no existiría como la conocemos." },
      { t:"Migrante nocturno",      txt:"Viaja hasta 150 km en una noche siguiendo el rastro de flores. Su ruta migratoria coincide exactamente con la floración del agave." },
      { t:"Echolocalización fina",  txt:"Emite pulsos ultrasónicos tan precisos que puede detectar una flor abierta entre cientos de flores cerradas en la oscuridad total." },
    ],
  },

  /* ── AVES ─────────────────────────────────────────────── */
  {
    id:        "quetzal",
    nombre:    "Quetzal",
    cient:     "Pharomachrus mocinno",
    emoji:     "🦜",
    categoria: "Ave · Trogon",
    estado:    "AMENAZADO",
    habitat:   "Bosque nublado",
    poblacion: "< 50,000 ind.",
    tamaño:    "35 – 40 cm (+60 cm cola)",
    peso:      "180 – 210 g",
    sonido:    "selva",
    desc: `El quetzal resplandeciente es considerado una de las aves más hermosas del mundo. Los mayas y aztecas lo consideraban sagrado y divino; sus plumas verdes iridiscentes eran más valiosas que el oro. Habita en los bosques nublados de las montañas de México y Centroamérica entre 1,200 y 3,000 metros de altitud. Es el ave nacional de Guatemala.`,
    amenazas: [
      "Deforestación de los bosques nublados de altura para agricultura y ganadería.",
      "Fragmentación del hábitat que aísla las poblaciones reproductoras.",
      "Captura ilegal para coleccionistas y comercio de aves exóticas.",
      "Cambio climático que desplaza la zona de niebla hacia cotas más altas.",
    ],
    curiosidades: [
      { t:"Ave de la libertad",   txt:"Los mayas creían que el quetzal moriría de pena si era enjaulado. Por eso nunca lo capturaban, solo tomaban sus plumas y lo liberaban." },
      { t:"Cola de novio",        txt:"Los machos desarrollan plumas de cola de hasta 90 cm solo durante la época de cría. Las usan para impresionar a las hembras en vuelos acrobáticos." },
      { t:"Cultivador de bosques", txt:"Dispersa las semillas del aguacate silvestre. Sin quetzales, este árbol sagrado de los mayas no podría regenerarse en las montañas." },
    ],
  },

  {
    id:        "aguila-real",
    nombre:    "Águila Real",
    cient:     "Aquila chrysaetos",
    emoji:     "🦅",
    categoria: "Ave · Rapaz",
    estado:    "AMENAZADO",
    habitat:   "Montañas y barrancas",
    poblacion: "< 2,000 ind. (México)",
    tamaño:    "76 – 102 cm",
    peso:      "3 – 6.3 kg",
    sonido:    "viento",
    desc: `El águila real es el símbolo nacional de México y aparece en el escudo nacional. Es el ave rapaz más grande de Norteamérica y uno de los cazadores aéreos más poderosos del mundo. Puede alcanzar los 320 km/h en picada. Vive en parejas monógamas de por vida y usa el mismo nido —que renueva año tras año— durante décadas.`,
    amenazas: [
      "Persecución directa por ganaderos que temen la depredación de ganado.",
      "Envenenamiento secundario por consumir presas intoxicadas con pesticidas.",
      "Pérdida de territorio por expansión urbana y agrícola en montañas.",
      "Electrocución en tendidos eléctricos de alta tensión.",
      "Tráfico ilegal de polluelos para cetrería.",
    ],
    curiosidades: [
      { t:"Velocidad de picada",   txt:"En picada puede superar los 320 km/h, siendo uno de los animales más rápidos de la Tierra en movimiento horizontal." },
      { t:"Nidos históricos",      txt:"Los nidos, llamados 'eyries', se amplifican cada año. Algunos tienen más de 100 años y pueden pesar hasta una tonelada." },
      { t:"Visión de águila",      txt:"Ve hasta 8 veces más nítido que un humano y puede detectar un conejo a 3 km de distancia desde el aire." },
    ],
  },

  {
    id:        "condor-california",
    nombre:    "Cóndor de California",
    cient:     "Gymnogyps californianus",
    emoji:     "🦅",
    categoria: "Ave · Buitre del Nuevo Mundo",
    estado:    "EN PELIGRO CRÍTICO",
    habitat:   "Acantilados y montañas",
    poblacion: "~500 ind.",
    tamaño:    "109 – 140 cm",
    peso:      "7 – 14 kg",
    sonido:    "viento",
    desc: `El cóndor de California es el ave voladora más grande de Norteamérica, con una envergadura de hasta 3 metros. En 1987, los últimos 27 individuos fueron capturados para evitar su extinción. Gracias a un programa de reproducción en cautiverio, hoy existen más de 500. Es uno de los mayores éxitos de conservación de la historia, aunque sigue en peligro crítico.`,
    amenazas: [
      "Envenenamiento por plomo: ingieren balas de plomo al comer carroña.",
      "Colisiones con tendidos eléctricos y líneas de alta tensión.",
      "Ingestión de microplásticos y basura que alimentan a sus polluelos.",
      "Baja reproducción: solo un huevo cada dos años por pareja.",
    ],
    curiosidades: [
      { t:"Rescate épico de 1987",  txt:"Los últimos 27 cóndores salvajes fueron capturados en una operación de rescate. Parecía el fin. Hoy son más de 500 gracias a ese acto desesperado." },
      { t:"Envergadura récord",     txt:"Con alas de hasta 3 metros, es el ave voladora más grande de Norteamérica. Puede planear durante horas sin mover las alas." },
      { t:"Detector de carroña",    txt:"No tiene sentido del olfato. Localiza carroña observando el comportamiento de otros buitres que sí pueden olerla desde kilómetros." },
    ],
  },

  {
    id:        "guacamayo-escarlata",
    nombre:    "Guacamayo Escarlata",
    cient:     "Ara macao",
    emoji:     "🦜",
    categoria: "Ave · Psitácido",
    estado:    "AMENAZADO",
    habitat:   "Selva húmeda tropical",
    poblacion: "~20,000 ind. (México)",
    tamaño:    "81 – 96 cm",
    peso:      "900 – 1,100 g",
    sonido:    "selva",
    desc: `El guacamayo escarlata es una de las aves más coloridas y carismáticas de México. Vive en parejas permanentes toda su vida y son conocidos por su fidelidad. Inteligente y longevo, puede vivir hasta 75 años. En México fue eliminado de gran parte de su rango histórico; hoy solo sobrevive en la Reserva de la Biósfera El Triunfo en Chiapas y en la costa de Oaxaca.`,
    amenazas: [
      "Captura ilegal masiva para el comercio de aves exóticas.",
      "Deforestación de las selvas húmedas donde anida en árboles huecos.",
      "Destrucción de sitios de anidación por tala selectiva.",
      "Caza histórica por sus plumas para adornos y rituales.",
    ],
    curiosidades: [
      { t:"De por vida",           txt:"Las parejas de guacamayos se mantienen unidas toda la vida. Si uno muere, el sobreviviente puede caer en un estado de duelo observable." },
      { t:"Inteligencia de niño",  txt:"Su inteligencia es comparable a la de un niño de 4 años. Pueden resolver puzzles, imitar voces y usar herramientas simples." },
      { t:"Memoria de ubicación",  txt:"Recuerdan la ubicación exacta de cientos de árboles frutales y los visitan en el momento óptimo de maduración." },
    ],
  },

  /* ── REPTILES Y ANFIBIOS ────────────────────────────── */
  {
    id:        "tortuga-laud",
    nombre:    "Tortuga Laúd",
    cient:     "Dermochelys coriacea",
    emoji:     "🐢",
    categoria: "Reptil · Tortuga marina",
    estado:    "VULNERABLE",
    habitat:   "Océanos tropicales",
    poblacion: "< 35,000 hembras",
    tamaño:    "1.3 – 1.8 m",
    peso:      "250 – 900 kg",
    sonido:    "oceano",
    desc: `La tortuga laúd es el reptil más grande del mundo y el más grande de las tortugas. A diferencia de otras tortugas marinas, no tiene caparazón duro sino una coraza de piel flexible y cartilaginosa. Puede bucear hasta 1,280 metros de profundidad y tolerar aguas frías gracias a un sistema circulatorio único. Regresa cada año a la misma playa donde nació para anidar.`,
    amenazas: [
      "Captura incidental en redes de pesca de palangre y arrastre.",
      "Recolección ilegal de huevos en playas de anidación.",
      "Ingestión de bolsas plásticas que confunden con medusas, su alimento principal.",
      "Iluminación artificial en playas que desorienta a las crías recién nacidas.",
      "Cambio climático que altera la temperatura de las playas de anidación.",
    ],
    curiosidades: [
      { t:"El reptil más grande",   txt:"Puede pesar hasta 900 kg y medir 1.8 m. El ejemplar más grande registrado pesó 916 kg." },
      { t:"Buzo récord",            txt:"Puede bucear hasta 1,280 metros de profundidad, más que cualquier otro reptil. En una sola inmersión puede durar 85 minutos bajo el agua." },
      { t:"GPS viviente",           txt:"Regresa exactamente a la playa donde nació para poner sus huevos, aunque hayan pasado 30 años. Usa el campo magnético de la Tierra como brújula." },
    ],
  },

  {
    id:        "tortuga-caguama",
    nombre:    "Tortuga Caguama",
    cient:     "Caretta caretta",
    emoji:     "🐢",
    categoria: "Reptil · Tortuga marina",
    estado:    "VULNERABLE",
    habitat:   "Océano Atlántico y Pacífico",
    poblacion: "~50,000 hembras",
    tamaño:    "70 – 95 cm",
    peso:      "80 – 200 kg",
    sonido:    "oceano",
    desc: `La tortuga caguama es conocida por su enorme cabeza y su poderosa mandíbula, capaz de triturar conchas de cangrejos y moluscos. Realiza migraciones de miles de kilómetros entre sus zonas de alimentación y sus playas de anidación. Una hembra puede poner hasta 5 nidadas por temporada, con unos 100 huevos cada una.`,
    amenazas: [
      "Captura incidental en redes de arrastre y palangre.",
      "Contaminación plástica y petróleo en océanos.",
      "Destrucción y urbanización de playas de anidación.",
      "Colisiones con embarcaciones de motor.",
      "Recolección ilegal de huevos y caza de adultos.",
    ],
    curiosidades: [
      { t:"La cabeza más grande",   txt:"Su cráneo enorme —de hasta 25 cm de ancho— alberga músculos mandibulares tan poderosos que pueden triturar un cangrejo herradura." },
      { t:"Migraciones épicas",     txt:"Una hembra marcada viajó 12,000 km desde Indonesia hasta las costas de Baja California para anidar. El viaje de ida y vuelta tarda tres años." },
      { t:"Temperatura determina sexo", txt:"El calor del nido decide si los huevos se convierten en machos o hembras. El calentamiento global está produciendo más hembras, desequilibrando la población." },
    ],
  },

  {
    id:        "cocodrilo-americano",
    nombre:    "Cocodrilo Americano",
    cient:     "Crocodylus acutus",
    emoji:     "🐊",
    categoria: "Reptil · Crocodiliano",
    estado:    "VULNERABLE",
    habitat:   "Manglares y estuarios",
    poblacion: "< 2,000 ind. (México)",
    tamaño:    "3 – 5 m",
    peso:      "180 – 450 kg",
    sonido:    "oceano",
    desc: `El cocodrilo americano es el mayor depredador de los humedales costeros de México. A diferencia del cocodrilo de pantano (Crocodylus moreletii), el americano tolera la sal y habita manglares, estuarios y bahías. Es un ingeniero del ecosistema: sus madrigueras crean refugios para otras especies durante las sequías.`,
    amenazas: [
      "Caza histórica masiva por su piel para la industria de la moda.",
      "Destrucción de manglares para desarrollos turísticos y camaroneras.",
      "Matanza por represalia al considerarse amenaza para humanos y ganado.",
      "Captura de juveniles para granjas de cocodrilos ilegales.",
    ],
    curiosidades: [
      { t:"Dinosaurio moderno",    txt:"Los cocodrilos han mantenido casi la misma forma durante 80 millones de años. Sobrevivieron la extinción que mató a los dinosaurios." },
      { t:"Padre del año",         txt:"Contrario a su imagen feroz, los cocodrilos son padres devotos. El macho guarda el nido y la hembra transporta gentilmente a las crías en su boca hasta el agua." },
      { t:"Termómetro del pantano", txt:"Sus madrigueras retienen agua durante las sequías, creando oasis donde beben y viven decenas de otras especies. Sin cocodrilos, el humedal colapsa." },
    ],
  },

  /* ── PECES Y MARINOS ────────────────────────────────── */
  {
    id:        "totoaba",
    nombre:    "Totoaba",
    cient:     "Totoaba macdonaldi",
    emoji:     "🐟",
    categoria: "Pez · Esciénido",
    estado:    "EN PELIGRO CRÍTICO",
    habitat:   "Golfo de California",
    poblacion: "Desconocida (crítica)",
    tamaño:    "hasta 2 m",
    peso:      "hasta 100 kg",
    sonido:    "oceano",
    desc: `La totoaba es el pez esciénido más grande del mundo y endémico del Golfo de California. Su vejiga natatoria, llamada "el oro blanco del mar", se vende en el mercado negro chino por más de 20,000 dólares el kilogramo. La pesca ilegal de totoaba con redes de enmalle es también la principal causa de muerte de la vaquita marina.`,
    amenazas: [
      "Pesca ilegal masiva impulsada por el altísimo precio de su vejiga natatoria.",
      "Redes de enmalle que atrapan incidentalmente a la vaquita marina.",
      "Reducción del flujo del río Colorado que alteró su ecosistema de reproducción.",
      "Sobrepesca histórica que colapsó la población en los años 70.",
    ],
    curiosidades: [
      { t:"El oro blanco del mar", txt:"Su vejiga natatoria seca vale más que la cocaína en el mercado negro chino, donde se usa en medicina tradicional. Un kilo puede superar los 20,000 dólares." },
      { t:"Canto submarino",       txt:"Produce sonidos tan fuertes durante el apareamiento que los pescadores históricos podían escucharlos desde la orilla sin sumergirse." },
      { t:"Doble víctima",         txt:"La pesca ilegal de totoaba usa redes que atrapan accidentalmente a la vaquita marina. Una especie amenazada está matando a otra especie amenazada." },
    ],
  },

  {
    id:        "tiburon-ballena",
    nombre:    "Tiburón Ballena",
    cient:     "Rhincodon typus",
    emoji:     "🦈",
    categoria: "Pez · Elasmobranquio",
    estado:    "AMENAZADO",
    habitat:   "Mares tropicales y templados",
    poblacion: "Desconocida (en declive)",
    tamaño:    "5.5 – 12 m",
    peso:      "hasta 21 toneladas",
    sonido:    "oceano",
    desc: `El tiburón ballena es el pez más grande del mundo. A pesar de su imponente tamaño, es completamente inofensivo para los humanos: se alimenta de plancton, krill y pequeños peces filtrando el agua con su enorme boca. Puede vivir hasta 150 años y realiza migraciones de miles de kilómetros. El Mar de Cortés en México es uno de sus sitios de alimentación más importantes del planeta.`,
    amenazas: [
      "Captura directa en Asia para consumo de su carne y aletas.",
      "Colisiones con embarcaciones de motor en rutas migratorias.",
      "Captura incidental en redes de arrastre.",
      "Turismo irresponsable que perturba su comportamiento.",
      "Reducción del plancton por el calentamiento del océano.",
    ],
    curiosidades: [
      { t:"El pez más grande",     txt:"El ejemplar más grande medido tenía 18.8 metros y pesaba 21 toneladas. Su boca puede abrir hasta 1.5 metros de ancho." },
      { t:"Filtro viviente",       txt:"Filtra hasta 6,000 litros de agua por hora para extraer su alimento. En un día puede consumir 21 kilogramos de plancton." },
      { t:"Constelación de puntos", txt:"Cada tiburón ballena tiene un patrón único de puntos blancos, como huellas digitales. Los científicos los identifican individualmente con software astronómico." },
    ],
  },

  /* ── FLORA E INSECTOS ───────────────────────────────── */
  {
    id:        "mariposa-monarca",
    nombre:    "Mariposa Monarca",
    cient:     "Danaus plexippus",
    emoji:     "🦋",
    categoria: "Insecto · Lepidóptero",
    estado:    "EN PELIGRO CRÍTICO",
    habitat:   "Bosques de oyamel, México",
    poblacion: "En fuerte declive",
    tamaño:    "8.9 – 10.2 cm (envergadura)",
    peso:      "< 1 g",
    sonido:    "selva",
    desc: `La mariposa monarca realiza una de las migraciones más extraordinarias de la naturaleza: viaja hasta 4,800 km desde Canadá y EE. UU. hasta los bosques de oyamel de Michoacán y Estado de México. Millones de mariposas cubren los árboles creando una alfombra naranja viva. En invierno de 2022, la población que hibernó en México cayó un 26% respecto al año anterior.`,
    amenazas: [
      "Pérdida de bosques de oyamel en México por tala ilegal y cambio climático.",
      "Desaparición del algodoncillo (Asclepias) en EE. UU. y Canadá por herbicidas.",
      "Eventos climáticos extremos que matan millones durante la migración.",
      "Deforestación de hábitats de verano en Norteamérica.",
    ],
    curiosidades: [
      { t:"Navegación solar",      txt:"Usan el sol como brújula y compensan su movimiento con un reloj biológico interno. También detectan el campo magnético terrestre." },
      { t:"La generación milagro", txt:"La generación que migra a México vive 8 meses (las otras solo 6 semanas). Nadie sabe cómo 'saben' que tienen que vivir más tiempo." },
      { t:"Veneno decorativo",     txt:"Son tóxicas para los pájaros porque las orugas comen algodoncillo venenoso. Su color naranja brillante avisa: 'no me comas'." },
    ],
  },

  {
    id:        "orquidea-monja",
    nombre:    "Orquídea Monja Blanca",
    cient:     "Lycaste skinneri",
    emoji:     "🌸",
    categoria: "Planta · Orquidácea",
    estado:    "EN PELIGRO CRÍTICO",
    habitat:   "Bosque nublado de Guatemala y Chiapas",
    poblacion: "< 3,000 ind. silvestres",
    tamaño:    "10 – 15 cm (flor)",
    peso:      "—",
    sonido:    "selva",
    desc: `La orquídea monja blanca es la flor nacional de Guatemala y una de las orquídeas más hermosas del mundo. Sus flores blancas con tonos rosados, que pueden durar semanas, la convirtieron en objetivo de coleccionistas desde el siglo XIX. Crece en los bosques nublados entre 1,500 y 2,500 metros de altitud, donde la humedad es constante y los árboles están cubiertos de musgo.`,
    amenazas: [
      "Extracción masiva del siglo XIX y XX que diezmó las poblaciones silvestres.",
      "Deforestación de los bosques nublados donde crece como epífita.",
      "Recolección ilegal continua a pesar de estar protegida internacionalmente.",
      "Cambio climático que desplaza la zona de niebla hacia cotas más altas.",
    ],
    curiosidades: [
      { t:"Robada por imperios",   txt:"En el siglo XIX, coleccionistas europeos enviaban expediciones a Centroamérica que extraían miles de plantas. La mayoría moría en el transporte." },
      { t:"Flor que dura semanas", txt:"Sus flores permanecen frescas durante 3 a 4 semanas en la planta, un récord entre las orquídeas. Por eso era tan codiciada para arreglos florales." },
      { t:"Epífita, no parásita",  txt:"Crece sobre los árboles pero no les hace daño. Obtiene nutrientes del aire, la lluvia y la materia orgánica que se acumula en la corteza." },
    ],
  },

{
    id: "zorrillo-rayado",
    nombre: "Zorrillo Rayado",
    cient: "Mephitis mephitis",
    emoji: "🦨",
    categoria: "Mamífero · Mephitidae",
    estado: "AMENAZADO",
    habitat: "Bosques, praderas y zonas rurales",
    poblacion: "Estable pero vulnerable a atropellamientos",
    tamaño: "50 – 80 cm",
    peso: "1 – 4 kg",
    sonido: "viento",
    desc: "Famoso por su eficaz mecanismo de defensa: un almizcle fétido que puede lanzar con gran precisión. Sus rayas blancas son una señal de advertencia para que nadie se le acerque.",
    amenazas: [
      "Atropellamientos masivos en carreteras durante sus búsquedas nocturnas.",
      "Enfermedades transmitidas por perros domésticos como la rabia.",
      "Persecución humana por el olor que emite cuando se defiende."
    ],
    curiosidades: [
      { t: "Puntería", txt: "Puede lanzar su líquido fétido hasta a 3 metros de distancia con precisión quirúrgica." },
      { t: "Baile", txt: "Antes de disparar, hace un pequeño 'baile' golpeando el suelo para avisar." }
    ],
  }

    {
    id: "abaniquillo-chiapas",
    nombre: "Abaniquillo de Chiapas",
    cient: "Anolis chiapensis",
    emoji: "🦎",
    categoria: "Reptil · Lagartija",
    estado: "AMENAZADO",
    habitat: "Bosques tropicales y cafetales de Chiapas",
    poblacion: "Localizada y en descenso",
    tamaño: "10 – 15 cm",
    peso: "5 – 12 g",
    sonido: "selva",
    desc: "El abaniquillo de Chiapas es una pequeña lagartija arborícola que destaca por su agilidad y su comportamiento territorial. Se encuentra principalmente en las zonas húmedas de Chiapas, donde habita entre la vegetación baja y los troncos de los árboles. Es un insectívoro voraz que ayuda a controlar poblaciones de pequeños artrópodos en su ecosistema.",
    amenazas: [
      "Pérdida y fragmentación de su hábitat debido al cambio de uso de suelo para agricultura.",
      "Uso intensivo de pesticidas en cafetales que reduce su fuente de alimento.",
      "Cambio climático que altera los niveles de humedad que necesita para sobrevivir.",
      "Depredación por especies domésticas introducidas como gatos."
    ],
    curiosidades: [
      { t: "Abanico gular", txt: "Los machos poseen una colorida extensión de piel bajo la garganta que despliegan rítmicamente para atraer hembras o intimidar a otros machos." },
      { t: "Comunicación visual", txt: "Usan señales visuales complejas, como movimientos de cabeza y flexiones, para comunicarse." }
    ],
  },
  {
    id: "abeto",
    nombre: "Abeto",
    cient: "Abies guatemalensis",
    emoji: "🌲",
    categoria: "Planta · Conífera",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Cumbres de montañas altas (2,800 - 3,500 msnm)",
    poblacion: "Poblaciones aisladas y muy reducidas",
    tamaño: "20 – 35 m de altura",
    peso: "—",
    sonido: "viento",
    desc: "Este abeto, también conocido como 'Pinabete', es el representante más austral de su género en Norteamérica. Sus bosques son reliquias vivientes de la última glaciación, sobreviviendo en las cimas más altas y frías de las montañas de Chiapas y Guatemala. Es una especie clave para la captura de agua de niebla y la recarga de acuíferos en las zonas altas.",
    amenazas: [
      "Tala ilegal masiva durante la temporada navideña para la venta de ramas y árboles.",
      "Pastoreo de ganado que consume las plántulas jóvenes e impide la regeneración natural.",
      "Reducción de las zonas de frío debido al calentamiento global.",
      "Incendios forestales que destruyen bosques centenarios."
    ],
    curiosidades: [
      { t: "Reliquia glacial", txt: "Sus bosques son considerados cápsulas del tiempo, ya que representan ecosistemas de hace miles de años." },
      { t: "Fragancia única", txt: "Posee uno de los aromas más intensos y agradables de todas las coníferas mexicanas." }
    ],
  },
  {
    id: "agave-victoria",
    nombre: "Agave Victoria",
    cient: "Agave victoria-reginae",
    emoji: "🌵",
    categoria: "Planta · Agavácea",
    estado: "AMENAZADO",
    habitat: "Paredes rocosas y cañones del Desierto Chihuahuense",
    poblacion: "Escasa y dispersa",
    tamaño: "30 – 50 cm de diámetro",
    peso: "—",
    sonido: "viento",
    desc: "Considerado uno de los agaves más bellos y geométricos del mundo, el Agave Victoria destaca por sus hojas rígidas y compactas adornadas con líneas blancas naturales. Crece en condiciones extremas, aferrándose a acantilados casi verticales donde pocas plantas pueden sobrevivir, siendo un ejemplo de resistencia y adaptación al desierto.",
    amenazas: [
      "Saqueo masivo de ejemplares silvestres para el mercado ilegal de plantas ornamentales.",
      "Destrucción de su hábitat por actividades mineras en la región del norte de México.",
      "Crecimiento extremadamente lento que dificulta la recuperación de las poblaciones.",
      "Baja tasa de germinación en condiciones naturales debido a la sequía extrema."
    ],
    curiosidades: [
      { t: "Geometría sagrada", txt: "Las líneas blancas en sus hojas son impresiones dejadas por las espinas de otras hojas cuando la planta brotaba." },
      { t: "Muerte por floración", txt: "Florece una sola vez en su vida tras décadas de crecimiento y muere poco después de producir semillas." }
    ],
  },
  {
    id: "aguila-real",
    nombre: "Águila Real",
    cient: "Aquila chrysaetos",
    emoji: "🦅",
    categoria: "Ave · Accipitridae",
    estado: "AMENAZADO",
    habitat: "Zonas áridas, estepas y montañas",
    poblacion: "En lenta recuperación gracias a programas de conservación",
    tamaño: "66 – 100 cm de largo; 2 m de envergadura",
    peso: "3 – 6.5 kg",
    sonido: "viento",
    desc: "El Águila Real es el símbolo vivo de la identidad mexicana, figurando en el escudo nacional. Es una de las aves de presa más poderosas del planeta, con garras capaces de ejercer una presión inmensa para capturar presas como liebres, zorros y crías de venado. Son monógamas y construyen nidos enormes en acantilados que utilizan por generaciones.",
    amenazas: [
      "Envenenamiento accidental al ingerir presas que han consumido pesticidas o cebos tóxicos.",
      "Pérdida de sitios de anidación adecuados debido a la expansión urbana y turística.",
      "Electrocución en líneas de alta tensión que no cuentan con protecciones para aves grandes.",
      "Saqueo de nidos para la cetrería ilegal o el comercio de plumas."
    ],
    curiosidades: [
      { t: "Visión telescópica", txt: "Su visión es 8 veces más aguda que la humana, permitiéndole detectar presas a más de 3 kilómetros." },
      { t: "Parejas eternas", txt: "Una vez que encuentran pareja, permanecen juntos de por vida y realizan danzas aéreas de cortejo." }
    ],
  },
  {
    id: "ajolote-altiplano",
    nombre: "Ajolote del Altiplano",
    cient: "Ambystoma velasci",
    emoji: "🦎",
    categoria: "Anfibio · Salamandra",
    estado: "AMENAZADO",
    habitat: "Cuerpos de agua dulce en el Altiplano Central de México",
    poblacion: "En declive por contaminación de cuerpos de agua",
    tamaño: "15 – 25 cm",
    peso: "50 – 150 g",
    sonido: "lluvia",
    desc: "El ajolote del Altiplano es un fascinante anfibio que habita en lagunas y charcas estacionales del centro de México. A diferencia de su primo de Xochimilco, esta especie tiene una mayor propensión a completar su metamorfosis y transformarse en una salamandra terrestre si las condiciones del agua se vuelven desfavorables.",
    amenazas: [
      "Contaminación severa de las lagunas por descargas de aguas negras y químicos agrícolas.",
      "Introducción de peces exóticos como carpas y tilapias que devoran sus huevos y larvas.",
      "Desecación de humedales para uso agrícola o desarrollo urbano.",
      "Captura para medicina tradicional en comunidades rurales."
    ],
    curiosidades: [
      { t: "Metamorfosis opcional", txt: "Puede elegir quedarse en el agua como larva o transformarse en adulto terrestre según el ambiente." },
      { t: "Control biológico", txt: "Es un aliado importante ya que consume grandes cantidades de larvas de mosquitos." }
    ],
  },
  {
    id: "ajolote-mexicano",
    nombre: "Ajolote Mexicano",
    cient: "Ambystoma mexicanum",
    emoji: "🦎",
    categoria: "Anfibio · Salamandra",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Canales de Xochimilco y humedales remanentes",
    poblacion: "Estimada en menos de 100 individuos en libertad",
    tamaño: "23 – 30 cm",
    peso: "60 – 120 g",
    sonido: "lluvia",
    desc: "El Ajolote de Xochimilco es uno de los animales más estudiados y venerados del mundo. Posee la asombrosa capacidad de regenerar casi cualquier parte de su cuerpo, incluyendo extremidades, órganos internos y partes de su sistema nervioso. Su apariencia única con branquias externas en forma de penacho lo ha convertido en un ícono cultural y científico global.",
    amenazas: [
      "Contaminación extrema del agua en Xochimilco por desechos domésticos y fertilizantes.",
      "Presencia de especies invasoras como la tilapia que compiten por alimento.",
      "Urbanización ilegal que destruye los canales y reduce su hábitat.",
      "Estrés térmico causado por el aumento de la temperatura del agua."
    ],
    curiosidades: [
      { t: "Eterna juventud", txt: "Llega a la madurez sexual conservando sus rasgos de larva, como sus branquias externas (neotenia)." },
      { t: "Superpoder", txt: "Es capaz de regenerar su corazón y su médula espinal sin dejar cicatrices." }
    ],
  },
  {
    id: "ballena-azul",
    nombre: "Ballena Azul",
    cient: "Balaenoptera musculus",
    emoji: "🐋",
    categoria: "Mamífero · Cetáceo",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Aguas profundas de todos los océanos, visita costas mexicanas en invierno",
    poblacion: "Entre 10,000 y 25,000 ejemplares en todo el mundo",
    tamaño: "24 – 30 metros de longitud",
    peso: "100 – 190 toneladas",
    sonido: "oceano",
    desc: "La ballena azul es el gigante indiscutible del planeta, superando en tamaño a cualquier dinosaurio conocido. Sus dimensiones son abrumadoras: su lengua pesa tanto como un elefante y su corazón es del tamaño de un automóvil pequeño. Cada invierno, estos majestuosos cetáceos visitan el Golfo de California en México para alimentarse y cuidar a sus crías.",
    amenazas: [
      "Cambio climático que altera las corrientes marinas y reduce las poblaciones de krill.",
      "Colisiones fatales con grandes buques de carga en rutas marítimas.",
      "Contaminación acústica submarina que interfiere con su comunicación.",
      "Ingesta de microplásticos que se acumulan en su organismo."
    ],
    curiosidades: [
      { t: "Voz de gigante", txt: "Sus cantos son tan potentes que pueden viajar por cientos de kilómetros bajo el agua." },
      { t: "Crecimiento explosivo", txt: "Un ballenato gana 90 kilos de peso cada 24 horas durante sus primeros meses de vida." }
    ],
  },
  {
    id: "biznaga-barril",
    nombre: "Biznaga Barril",
    cient: "Echinocactus platyacanthus",
    emoji: "🌵",
    categoria: "Planta · Cactácea",
    estado: "AMENAZADO",
    habitat: "Desiertos y matorrales áridos del centro y norte de México",
    poblacion: "En fuerte declive debido a la explotación comercial",
    tamaño: "Hasta 2 metros de altura y 1 metro de diámetro",
    peso: "Puede superar la tonelada en ejemplares viejos",
    sonido: "viento",
    desc: "La biznaga de barril es un cactus emblemático del paisaje mexicano, conocido por su forma globosa y sus costillas marcadas por espinas doradas. Es una planta de crecimiento extremadamente lento, tardando décadas en alcanzar su madurez. Cumple una función vital en el desierto al proporcionar néctar a polinizadores y refugio a pequeños animales.",
    amenazas: [
      "Extracción ilegal masiva para la producción de 'acitrón', un dulce tradicional.",
      "Saqueo de ejemplares centenarios para paisajismo y coleccionismo.",
      "Pérdida de hábitat por la expansión de la agricultura de riego.",
      "Cambios en los patrones de lluvia que afectan la supervivencia de las plántulas."
    ],
    curiosidades: [
      { t: "Siglos de vida", txt: "Los ejemplares más grandes pueden tener más de 300 años de edad." },
      { t: "Reserva de agua", txt: "Su cuerpo es casi todo agua almacenada para sobrevivir años de sequía." }
    ],
  },
  {
    id: "cantil-agua",
    nombre: "Cantil de Agua",
    cient: "Agkistrodon bilineatus",
    emoji: "🐍",
    categoria: "Reptil · Víbora",
    estado: "AMENAZADO",
    habitat: "Selvas bajas caducifolias y humedales",
    poblacion: "En declive moderado",
    tamaño: "60 – 100 cm",
    peso: "500 – 1,200 g",
    sonido: "selva",
    desc: "El Cantil o víbora de cascabel acuática es una serpiente altamente venenosa y robusta. Se distingue por las líneas blancas que cruzan su cara oscura. Es una especie semiacuática que prefiere vivir cerca de ríos y pantanos, donde utiliza su veneno hemotóxico para cazar peces, ranas y pequeños mamíferos.",
    amenazas: [
      "Persecución y muerte por humanos debido al miedo y su reputación.",
      "Pérdida de humedales costeros por el desarrollo turístico.",
      "Fragmentación de las selvas bajas que reduce sus áreas de caza.",
      "Atropellamientos frecuentes en carreteras cercanas a zonas húmedas."
    ],
    curiosidades: [
      { t: "Señuelo de cola", txt: "Los jóvenes mueven la punta de la cola como un gusano para atraer presas." },
      { t: "Advertencia", txt: "Cuando se siente amenazada, abre la boca mostrando su interior blanco (boca de algodón)." }
    ],
  },
  {
    id: "caracol-cuatro-cienegas",
    nombre: "Caracol de Cuatro Cienegas",
    cient: "Mexipyrgus carranzae",
    emoji: "🐚",
    categoria: "Molusco · Caracol",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Manantiales y pozas cristalinas de Cuatro Ciénegas, Coahuila",
    poblacion: "Extremadamente localizada",
    tamaño: "8 – 12 mm",
    peso: "< 1 g",
    sonido: "lluvia",
    desc: "Este pequeño caracol acuático es un tesoro evolutivo que solo habita en el valle de Cuatro Ciénegas. Sus conchas presentan una variedad asombrosa de colores y patrones, lo que lo hace parecer una joya viviente. Vive en las aguas ricas en minerales de las pozas, en un ambiente que ha cambiado poco en millones de años.",
    amenazas: [
      "Extracción de agua subterránea para riego que está secando las pozas.",
      "Introducción de especies de peces exóticos que los depredan.",
      "Turismo masivo no regulado que altera la química del agua.",
      "Sedimentación causada por la pérdida de vegetación en los alrededores."
    ],
    curiosidades: [
      { t: "Laboratorio evolutivo", txt: "Se le considera el 'Galápagos de México' por sus especies únicas." },
      { t: "Concha dura", txt: "Su concha es extremadamente dura por la alta concentración de minerales." }
    ],
  },
  {
    id: "cecilia-oaxaquena",
    nombre: "Cecilia Oaxaqueña",
    cient: "Dermophis oaxacae",
    emoji: "🐍",
    categoria: "Anfibio · Gimnofión",
    estado: "VULNERABLE",
    habitat: "Suelos húmedos y hojarasca de selvas en Oaxaca y Guerrero",
    poblacion: "Rara y difícil de observar",
    tamaño: "30 – 45 cm",
    peso: "100 – 250 g",
    sonido: "lluvia",
    desc: "La cecilia oaxaqueña es uno de los animales más extraños de México. Aunque parece una serpiente o una lombriz gigante, es un anfibio sin patas. Vive bajo tierra excavando túneles en suelos ricos en materia orgánica, emergiendo a la superficie solo durante lluvias torrenciales.",
    amenazas: [
      "Uso de fertilizantes y pesticidas químicos que dañan su piel permeable.",
      "Compactación del suelo por la ganadería intensiva.",
      "Deforestación de las selvas húmedas que elimina la humedad del suelo.",
      "Muerte accidental al ser confundida con serpientes venenosas."
    ],
    curiosidades: [
      { t: "Tentáculos", txt: "Tiene tentáculos retráctiles para detectar químicos y vibraciones bajo tierra." },
      { t: "Cuidado maternal", txt: "Las hembras protegen a sus crías y las alimentan con secreciones de su propia piel." }
    ],
  },
  {
    id: "chachalaca-ventricastana",
    nombre: "Chachalaca Ventricastaña",
    cient: "Ortalis wagleri",
    emoji: "🐦",
    categoria: "Ave · Cracidae",
    estado: "VULNERABLE",
    habitat: "Selvas secas y matorrales espinosos del noroeste de México",
    poblacion: "En declive debido a la pérdida de vegetación nativa",
    tamaño: "60 – 67 cm",
    peso: "500 – 850 g",
    sonido: "selva",
    desc: "La chachalaca ventricastaña es un ave social y ruidosa que forma parte del paisaje sonoro de las selvas del Pacífico. Se mueve en grupos familiares por el dosel, alimentándose de frutos y hojas. Su plumaje pardo le permite camuflarse perfectamente entre las ramas secas.",
    amenazas: [
      "Cacería de subsistencia inmoderada en comunidades rurales.",
      "Fragmentación de las selvas secas para agricultura y potreros.",
      "Aumento en la frecuencia e intensidad de incendios forestales.",
      "Predación de nidos por animales domésticos como gatos y perros."
    ],
    curiosidades: [
      { t: "Alarma", txt: "Sus gritos fuertes son la primera señal de alerta ante depredadores." },
      { t: "Sembradora", txt: "Es una dispersora fundamental de semillas de árboles de la selva seca." }
    ],
  },
  {
    id: "chara-enana",
    nombre: "Chara Enana",
    cient: "Cyanolyca nana",
    emoji: "🐦",
    categoria: "Ave · Córvido",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Bosques de niebla de alta montaña en Oaxaca y Veracruz",
    poblacion: "Menos de 2,500 individuos estimados",
    tamaño: "20 – 23 cm",
    peso: "40 – 55 g",
    sonido: "viento",
    desc: "La chara enana es el miembro más pequeño de la familia de los cuervos. Este ave de azul cobalto vive únicamente en los bosques nubosos más altos y húmedos. Son aves inteligentes y cooperativas que habitan un ecosistema que se está reduciendo por el cambio climático.",
    amenazas: [
      "Destrucción del bosque de niebla, un ecosistema muy escaso.",
      "Cambio climático que empuja los bosques hacia cumbres más altas.",
      "Aislamiento de poblaciones que reduce la diversidad genética.",
      "Introducción de especies invasoras y enfermedades aviarias."
    ],
    curiosidades: [
      { t: "Color óptico", txt: "Su azul intenso es un efecto de la luz, no un pigmento." },
      { t: "Hermanos mayores", txt: "Los hijos de años anteriores ayudan a criar a los nuevos polluelos." }
    ],
  },
  {
    id: "chara-sinaloense",
    nombre: "Chara Sinaloense",
    cient: "Cyanocorax beecheii",
    emoji: "🐦",
    categoria: "Ave · Córvido",
    estado: "AMENAZADO",
    habitat: "Selvas bajas caducifolias y bosques costeros de Sinaloa",
    poblacion: "En descenso por urbanización costera",
    tamaño: "35 – 40 cm",
    peso: "180 – 220 g",
    sonido: "selva",
    desc: "La chara sinaloense es un ave impresionante con plumaje negro azabache y alas de azul brillante. Es endémica del noroeste de México. Son sociables y ruidosas, con un complejo sistema de comunicación para coordinar actividades grupales.",
    amenazas: [
      "Pérdida de hábitat por el crecimiento de centros turísticos y urbanos.",
      "Captura ilegal para el mercado de aves de ornato.",
      "Uso de pesticidas en zonas agrícolas que afecta su alimento.",
      "Fragmentación que dificulta el intercambio genético entre colonias."
    ],
    curiosidades: [
      { t: "Mirada amarilla", txt: "Los adultos tienen ojos amarillos intensos que resaltan sobre su cara negra." },
      { t: "Herramientas", txt: "Son capaces de usar herramientas simples para obtener comida." }
    ],
  },
  {
    id: "cocodrilo-americano",
    nombre: "Cocodrilo Americano",
    cient: "Crocodylus acutus",
    emoji: "🐊",
    categoria: "Reptil · Crocodylidae",
    estado: "VULNERABLE",
    habitat: "Costas, manglares y estuarios del Pacífico y Caribe",
    poblacion: "~3,500 individuos en vida silvestre en México",
    tamaño: "3 – 5 metros",
    peso: "400 – 600 kg",
    sonido: "oceano",
    desc: "El cocodrilo de río o americano es uno de los reptiles más antiguos de México. Su capacidad para tolerar el agua salada le permite habitar desde ríos hasta manglares costeros. Es un depredador tope fundamental para el equilibrio de los ecosistemas acuáticos.",
    amenazas: [
      "Pérdida de manglares por desarrollos turísticos e industriales.",
      "Cacería furtiva por su piel valorada en la industria de la moda.",
      "Conflictos con humanos que llevan a su matanza preventiva.",
      "Contaminación de ríos por metales pesados y químicos."
    ],
    curiosidades: [
      { t: "Filtro de sal", txt: "Glándulas en su lengua filtran el exceso de sal del agua marina." },
      { t: "Madres protectoras", txt: "Cuidan activamente a sus crías durante los primeros meses." }
    ],
  },
  {
    id: "colorin-azulrosa",
    nombre: "Colorín Azulrosa",
    cient: "Passerina rositae",
    emoji: "🐦",
    categoria: "Ave · Cardenal",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Selvas bajas del Istmo de Tehuantepec",
    poblacion: "Menos de 5,000 ejemplares en un área restringida",
    tamaño: "12 – 14 cm",
    peso: "12 – 16 g",
    sonido: "selva",
    desc: "Una de las aves más raras y bellas del mundo. Su plumaje combina azul turquesa con un rosa vibrante. Es endémica del Istmo de Tehuantepec, lo que la hace extremadamente vulnerable a cambios en su entorno.",
    amenazas: [
      "Destrucción de su hábitat por parques eólicos y ganadería.",
      "Captura ilegal para el mercado de aves canoras.",
      "Fragmentación de las pocas selvas bajas que quedan.",
      "Impacto de sequías prolongadas por el cambio climático."
    ],
    curiosidades: [
      { t: "Endemismo extremo", txt: "Solo vive en una pequeña franja de Oaxaca y Chiapas." },
      { t: "Canto suave", txt: "Posee un canto melodioso que usa para comunicarse entre la vegetación densa." }
    ],
  },
  {
    id: "colorin-pecho-naranja",
    nombre: "Colorín Pecho Naranja",
    cient: "Passerina leclancherii",
    emoji: "🐦",
    categoria: "Ave · Cardenal",
    estado: "AMENAZADO",
    habitat: "Selvas secas de la vertiente del Pacífico",
    poblacion: "En declive por la pérdida de selvas bajas",
    tamaño: "12 cm",
    peso: "13 – 15 g",
    sonido: "selva",
    desc: "Este pequeño ave es una explosión de color en las selvas secas. Los machos tienen corona verde, dorso azul y pecho naranja. Son activos buscadores de semillas y fundamentales para la biodiversidad del occidente de México.",
    amenazas: [
      "Captura ilegal masiva para ser vendidos como aves de jaula.",
      "Pérdida de hábitat por agricultura y desarrollo inmobiliario costero.",
      "Competencia con especies introducidas en zonas suburbanas.",
      "Uso de herbicidas que eliminan las plantas de las que se alimentan."
    ],
    curiosidades: [
      { t: "Discreción femenina", txt: "Las hembras son verde oliva para camuflarse en el nido." },
      { t: "Sello mexicano", txt: "Es una especie que no se encuentra en ningún otro país del mundo." }
    ],
  },
  {
    id: "condor-california",
    nombre: "Cóndor de California",
    cient: "Gymnogyps californianus",
    emoji: "🦅",
    categoria: "Ave · Cathartidae",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Cañones y montañas de Baja California",
    poblacion: "~500 individuos en total",
    tamaño: "140 cm de largo; 3 m de envergadura",
    peso: "7 – 14 kg",
    sonido: "viento",
    desc: "Estuvo al borde de la extinción total (solo 22 aves en los 80). Hoy vuela nuevamente en Baja California gracias a programas de conservación. Es un limpiador esencial de los ecosistemas montañosos.",
    amenazas: [
      "Envenenamiento por plomo al comer restos con fragmentos de balas.",
      "Ingesta de basura plástica que los padres dan a sus polluelos.",
      "Colisiones con líneas eléctricas de alta tensión.",
      "Muy baja tasa de reproducción: un huevo cada dos años."
    ],
    curiosidades: [
      { t: "Planeador", txt: "Puede volar cientos de kilómetros casi sin aletear usando térmicas." },
      { t: "Estómago de acero", txt: "Su sistema digestivo destruye bacterias como el ántrax y botulismo." }
    ],
  },
  {
    id: "coral-alce",
    nombre: "Coral Alce",
    cient: "Acropora palmata",
    emoji: "🪸",
    categoria: "Invertebrado · Coral",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Aguas someras del Caribe Mexicano",
    poblacion: "Pérdida de más del 90% de su cobertura",
    tamaño: "Hasta 4 metros de ancho",
    peso: "—",
    sonido: "oceano",
    desc: "Fundamental para los arrecifes del Caribe. Sus 'astas' crean estructuras que sirven de refugio para cientos de especies marinas. Es uno de los corales más sensibles al cambio climático.",
    amenazas: [
      "Blanqueamiento por el aumento de temperatura del océano.",
      "Enfermedades como la 'banda blanca' que matan colonias rápido.",
      "Contaminación por fertilizantes que promueve algas asfixiantes.",
      "Daños físicos por huracanes y colisiones de barcos."
    ],
    curiosidades: [
      { t: "Barrera", txt: "Absorben el 97% de la energía de las olas durante tormentas." },
      { t: "Arquitecto", txt: "Su estructura compleja provee más espacio para la vida que otros corales." }
    ],
  },
  {
    id: "coralillo",
    nombre: "Coralillo",
    cient: "Micrurus spp.",
    emoji: "🐍",
    categoria: "Reptil · Elápido",
    estado: "AMENAZADO",
    habitat: "Selvas y zonas áridas de México",
    poblacion: "Vulnerable a la pérdida de hábitat",
    tamaño: "50 – 80 cm",
    peso: "100 – 300 g",
    sonido: "selva",
    desc: "Famosas por sus anillos brillantes. Poseen un veneno neurotóxico potente, pero son tímidas y pasan su tiempo ocultas bajo tierra o troncos, alimentándose de otras serpientes.",
    amenazas: [
      "Matanza por humanos que las confunden con otras especies.",
      "Pérdida de hábitat por urbanización y agricultura.",
      "Fragmentación de sus corredores biológicos.",
      "Atropellamientos en carreteras rurales."
    ],
    curiosidades: [
      { t: "Mnemotecnia", txt: "Rojo toca amarillo, es coralillo verdadero (R-A-N-A)." },
      { t: "Mordida", txt: "No tienen colmillos retráctiles; deben sujetar a su presa para inyectar veneno." }
    ],
  },
  {
    id: "culebra-ojo-gato",
    nombre: "Culebra Ojo de Gato",
    cient: "Leptodeira septentrionalis",
    emoji: "🐍",
    categoria: "Reptil · Serpiente",
    estado: "AMENAZADO",
    habitat: "Selvas y cercanías de ríos",
    poblacion: "Vulnerable por pérdida de humedales",
    tamaño: "60 – 100 cm",
    peso: "200 – 450 g",
    sonido: "selva",
    desc: "Serpiente nocturna con pupilas verticales. Habita cerca del agua cazando ranas. Su veneno es leve y no representa un peligro grave para los humanos.",
    amenazas: [
      "Desecación de charcas donde caza sus presas.",
      "Persecución humana por miedo injustificado.",
      "Uso de pesticidas que eliminan a los anfibios de los que se alimenta.",
      "Destrucción de la hojarasca por actividades ganaderas."
    ],
    curiosidades: [
      { t: "Experta", txt: "Es capaz de encontrar y comer huevos de rana en las hojas." },
      { t: "Coloración", txt: "Muestran un vientre naranja brillante para asustar depredadores." }
    ],
  },
  {
    id: "dalia-montana",
    nombre: "Dalia de Montaña",
    cient: "Dahlia imperialis",
    emoji: "🌸",
    categoria: "Planta · Compuesta",
    estado: "AMENAZADO",
    habitat: "Bosques templados y montañas del centro y sur",
    poblacion: "Escasa por urbanización",
    tamaño: "Hasta 8 metros de altura",
    peso: "—",
    sonido: "viento",
    desc: "La dalia gigante es una de las flores más espectaculares de México. A diferencia de las dalias de jardín, esta crece como un árbol pequeño con flores péndulas de gran tamaño.",
    amenazas: [
      "Pérdida de bosques templados por expansión urbana.",
      "Cambios en el régimen de lluvias que afectan su floración.",
      "Recolección excesiva en algunas zonas rurales."
    ],
    curiosidades: [
      { t: "Flor Nacional", txt: "Símbolo de la botánica mexicana desde 1963." },
      { t: "Gigante", txt: "Es una de las pocas plantas herbáceas que alcanza altura de árbol." }
    ],
  },
  {
    id: "dama-blanca-ciega",
    nombre: "Dama Blanca Ciega",
    cient: "Typhliasina pearsei",
    emoji: "🐟",
    categoria: "Pez · Brotula",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Cenotes y cuevas inundadas de Yucatán",
    poblacion: "Muy rara y localizada",
    tamaño: "10 cm",
    peso: "20 g",
    sonido: "cueva",
    desc: "Habitante de la oscuridad eterna de los acuíferos mayas. Ha perdido ojos y pigmentación, confiando en sus otros sentidos para sobrevivir en las aguas subterráneas.",
    amenazas: [
      "Contaminación de los cenotes por aguas negras y turismo masivo.",
      "Alteración del flujo de los ríos subterráneos por construcciones.",
      "Introducción de especies invasoras que depredan a este pez ciego."
    ],
    curiosidades: [
      { t: "Sin ojos", txt: "Nace con restos de ojos pero la piel los cubre totalmente al crecer." },
      { t: "Radar", txt: "Su línea lateral está hipersensibilizada para detectar el menor movimiento." }
    ],
  },
  {
    id: "escarabajo-verde",
    nombre: "Escarabajo Verde",
    cient: "Chrysina resplendens",
    emoji: "🪲",
    categoria: "Insecto · Coleóptero",
    estado: "AMENAZADO",
    habitat: "Bosques nublados y de montaña",
    poblacion: "Escasa y codiciada",
    tamaño: "2 – 3 cm",
    peso: "5 g",
    sonido: "selva",
    desc: "Conocido como el escarabajo de oro, posee un caparazón con un brillo metálico que parece metal fundido. Es una joya de la entomología mexicana.",
    amenazas: [
      "Deforestación de sus bosques nublados nativos.",
      "Coleccionismo ilegal por su valor comercial.",
      "Cambio climático que altera su ciclo reproductivo."
    ],
    curiosidades: [
      { t: "Brillo físico", txt: "Su color no es por pigmento, sino por la estructura microscópica de su caparazón." },
      { t: "Mimetismo", txt: "En la selva, su brillo metálico le ayuda a confundirse con gotas de agua." }
    ],
  },
  {
    id: "escorpion-arboricola",
    nombre: "Escorpión Arborícola",
    cient: "Centruroides spp.",
    emoji: "🦂",
    categoria: "Arácnido · Escorpión",
    estado: "AMENAZADO",
    habitat: "Corteza de árboles y selvas",
    poblacion: "Vulnerable a pesticidas",
    tamaño: "5 – 8 cm",
    peso: "5 – 10 g",
    sonido: "selva",
    desc: "A diferencia de otros alacranes, este prefiere vivir en las alturas de los árboles. Su veneno es potente y es una pieza clave en el control de insectos en el dosel forestal.",
    amenazas: [
      "Uso indiscriminado de pesticidas en zonas rurales.",
      "Tala de árboles viejos donde se refugian.",
      "Miedo humano que resulta en su exterminio local."
    ],
    curiosidades: [
      { t: "Luz UV", txt: "Brilla intensamente bajo luz negra." },
      { t: "Madres", txt: "Llevan a sus crías en el lomo hasta que pueden valerse por sí mismas." }
    ],
  },
  {
    id: "espada-clemencia",
    nombre: "Espada de Clemencia",
    cient: "Xiphophorus clemenciae",
    emoji: "🐟",
    categoria: "Pez · Poeciliidae",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Arroyos de montaña en Oaxaca",
    poblacion: "Muy reducida",
    tamaño: "4 – 6 cm",
    peso: "5 g",
    sonido: "lluvia",
    desc: "Pequeño pez de río donde los machos lucen una extensión de la cola en forma de espada. Es un habitante exclusivo de las aguas frescas de Oaxaca.",
    amenazas: [
      "Contaminación de los arroyos por desechos agrícolas.",
      "Fragmentación de los ríos por represas pequeñas.",
      "Competencia con peces ornamentales liberados."
    ],
    curiosidades: [
      { t: "Selección sexual", txt: "Las hembras eligen a los machos con las espadas más largas y brillantes." },
      { t: "Acuarismo", txt: "Es una especie muy valorada por su belleza y rareza." }
    ],
  },
  {
    id: "flor-montana",
    nombre: "Flor de Montaña",
    cient: "Drimys granadensis",
    emoji: "🌸",
    categoria: "Planta · Winterácea",
    estado: "AMENAZADO",
    habitat: "Bosques nublados de Chiapas y Oaxaca",
    poblacion: "Escasa",
    tamaño: "Hasta 10 m",
    peso: "—",
    sonido: "viento",
    desc: "Árbol con flores blancas muy fragantes y hojas con aroma a pimienta. Es una de las familias de plantas con flores más antiguas del mundo.",
    amenazas: [
      "Deforestación masiva de bosques nublados.",
      "Recolección de su corteza por propiedades medicinales.",
      "Pérdida de polinizadores específicos."
    ],
    curiosidades: [
      { t: "Primitiva", txt: "Sus flores no tienen vasos conductores de agua, un rasgo muy antiguo." },
      { t: "Medicinal", txt: "Se ha usado tradicionalmente para tratar problemas digestivos." }
    ],
  },
  {
    id: "gorrion-serrano",
    nombre: "Gorrión Serrano",
    cient: "Xenospiza baileyi",
    emoji: "🐦",
    categoria: "Ave · Gorrión",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Pastizales alpinos (zacatonales)",
    poblacion: "< 5,000 individuos",
    tamaño: "12 cm",
    peso: "15 g",
    sonido: "viento",
    desc: "Este pequeño ave depende totalmente de los pastizales de alta montaña. Solo se encuentra en dos sitios en México y su supervivencia pende de un hilo.",
    amenazas: [
      "Incendios forestales provocados para rebrote de pasto ganadero.",
      "Ganadería intensiva que destruye sus nidos en el suelo.",
      "Avance de la agricultura de altura."
    ],
    curiosidades: [
      { t: "Especialista", txt: "No puede vivir en ningún otro lugar que no sea el zacatonal alpino." },
      { t: "Canto", txt: "Posee un canto metálico distintivo para marcar su pequeño territorio." }
    ],
  },
  {
    id: "guacamayo-escarlata",
    nombre: "Guacamayo Escarlata",
    cient: "Ara macao",
    emoji: "🦜",
    categoria: "Ave · Psittacidae",
    estado: "EN PELIGRO",
    habitat: "Selvas altas de Chiapas",
    poblacion: "~1,000 individuos en México",
    tamaño: "80 – 90 cm",
    peso: "1 kg",
    sonido: "selva",
    desc: "Ícono de la selva maya. Inteligente, ruidosa y social. Sus nidos están en huecos de árboles gigantes, los cuales son cada vez más escasos.",
    amenazas: [
      "Tráfico ilegal de polluelos para mascotas.",
      "Tala de árboles grandes donde anidan.",
      "Fragmentación de la selva Lacandona."
    ],
    curiosidades: [
      { t: "Parejas", txt: "Son monógamas y vuelan siempre junto a su pareja." },
      { t: "Longevidad", txt: "Pueden vivir más de 60 años en libertad." }
    ],
  },
  {
    id: "guaqueque-mexicano",
    nombre: "Guaqueque Mexicano",
    cient: "Dasyprocta mexicana",
    emoji: "🐭",
    categoria: "Mamífero · Roedor",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Selvas húmedas del sur de México",
    poblacion: "En declive severo",
    tamaño: "40 – 55 cm",
    weight: "2 – 5 kg",
    sonido: "selva",
    desc: "Roedor grande parecido a un conejo pero con orejas cortas. Es esencial para la salud de la selva al dispersar las semillas de los árboles más grandes.",
    amenazas: [
      "Cacería furtiva constante.",
      "Deforestación masiva de selvas húmedas.",
      "Ataques de perros domésticos en zonas rurales."
    ],
    curiosidades: [
      { t: "Olvidadizo", txt: "Entierra semillas y al olvidar dónde las dejó, permite que nazcan nuevos árboles." },
      { t: "Velocidad", txt: "Es extremadamente ágil y puede saltar más de 2 metros desde una posición fija." }
    ],
  },
  {
    id: "hocofaisan",
    nombre: "Hocofaisán",
    cient: "Crax rubra",
    emoji: "🐦",
    categoria: "Ave · Cracidae",
    estado: "VULNERABLE",
    habitat: "Selvas húmedas bien conservadas",
    poblacion: "En descenso",
    tamaño: "80 – 95 cm",
    peso: "4 – 5 kg",
    sonido: "selva",
    desc: "Gran ave forestal con un característico copete de plumas rizadas. El macho es de un negro profundo con cera amarilla en el pico, mientras que la hembra es rojiza.",
    amenazas: [
      "Cacería de subsistencia excesiva.",
      "Pérdida de selvas primarias por actividades madereras.",
      "Predación de polluelos por especies introducidas."
    ],
    curiosidades: [
      { t: "Copete", txt: "Su copete es eréctil y lo usa para comunicar su estado de ánimo." },
      { t: "Canto grave", txt: "Emite un sonido de baja frecuencia que parece un mugido suave." }
    ],
  },
  {
    id: "iguana-espinoza-golfo",
    nombre: "Iguana Espinoza del Golfo",
    cient: "Ctenosaura acanthura",
    emoji: "🦎",
    categoria: "Reptil · Iguana",
    estado: "AMENAZADO",
    habitat: "Selvas secas y zonas costeras",
    poblacion: "En declive",
    tamaño: "Hasta 1.2 metros",
    peso: "2 – 4 kg",
    sonido: "selva",
    desc: "Gran lagarto con escamas espinosas en su cola. Es una excelente trepadora y una de las lagartijas más veloces del mundo sobre tierra firme.",
    amenazas: [
      "Cacería masiva para consumo humano (garrobos).",
      "Tráfico ilegal de ejemplares jóvenes.",
      "Destrucción de dunas y vegetación costera."
    ],
    curiosidades: [
      { t: "Velocidad", txt: "Alcanza los 35 km/h en distancias cortas." },
      { t: "Defensa", txt: "Usa su cola espinosa como un látigo muy efectivo contra depredadores." }
    ],
  },
  {
    id: "jaguar",
    nombre: "Jaguar",
    cient: "Panthera onca",
    emoji: "🐆",
    categoria: "Mamífero · Felidae",
    estado: "EN PELIGRO",
    habitat: "Selvas, manglares y bosques",
    poblacion: "~4,800 individuos en México",
    tamaño: "1.8 m de largo",
    peso: "45 – 110 kg",
    sonido: "selva",
    desc: "El rey de la selva americana. Sagrado para las culturas prehispánicas, el jaguar es un nadador experto y el depredador tope que regula la salud de nuestros ecosistemas.",
    amenazas: [
      "Fragmentación de selvas por proyectos de infraestructura.",
      "Cacería en represalia por ataques a ganado.",
      "Pérdida de sus presas naturales (venados, pecaríes)."
    ],
    curiosidades: [
      { t: "Mordida", txt: "Es capaz de perforar el caparazón de tortugas y cráneos con facilidad." },
      { t: "Agua", txt: "A diferencia de otros gatos, le encanta nadar y cazar en el agua." }
    ],
  },
  {
    id: "lacandonia",
    nombre: "Lacandonia",
    cient: "Lacandonia schismatica",
    emoji: "🌱",
    categoria: "Planta · Triuridácea",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Selva Lacandona, Chiapas",
    poblacion: "Extremadamente rara",
    tamaño: "5 cm",
    peso: "—",
    sonido: "selva",
    desc: "Planta única en el mundo que desafía las leyes de la botánica. No tiene clorofila y sus órganos reproductores están invertidos respecto a cualquier otra flor conocida.",
    amenazas: [
      "Deforestación de la Selva Lacandona.",
      "Alteración de los hongos del suelo de los que depende para comer."
    ],
    curiosidades: [
      { t: "Inversa", txt: "Tiene los estambres en el centro y los pistilos alrededor." },
      { t: "Sin sol", txt: "No necesita luz solar para vivir; es micoheterótrofa." }
    ],
  },
  {
    id: "lagartija-escorpion",
    nombre: "Lagartija Escorpión",
    cient: "Heloderma horridum",
    emoji: "🦎",
    categoria: "Reptil · Lagarto",
    estado: "AMENAZADO",
    habitat: "Selvas secas del Pacífico",
    poblacion: "En declive",
    tamaño: "Hasta 90 cm",
    peso: "2 – 4 kg",
    sonido: "selva",
    desc: "Uno de los únicos lagartos venenosos del mundo. Su piel granulada parece cubierta de cuentas de vidrio negras y amarillas. Son animales lentos y mayormente nocturnos.",
    amenazas: [
      "Muerte por miedo injustificado de pobladores.",
      "Tráfico ilegal de especies exóticas.",
      "Pérdida de selvas bajas."
    ],
    curiosidades: [
      { t: "Medicina", txt: "Su veneno se usa para fabricar fármacos contra la diabetes tipo 2." },
      { t: "Cola-almacén", txt: "Almacenan grasa en su cola para sobrevivir meses sin comer." }
    ],
  },
  {
    id: "lagartija-topo",
    nombre: "Lagartija Topo",
    cient: "Bipes biporus",
    emoji: "🦎",
    categoria: "Reptil · Anfisbena",
    estado: "AMENAZADO",
    habitat: "Desiertos de Baja California",
    poblacion: "Desconocida",
    tamaño: "20 cm",
    peso: "20 – 40 g",
    sonido: "viento",
    desc: "Extraño reptil que parece un gusano con dos pequeñas patas delanteras. Pasa casi toda su vida bajo tierra y es endémico de Baja California.",
    amenazas: [
      "Expansión de la agricultura de riego en el desierto.",
      "Uso de agroquímicos en el suelo."
    ],
    curiosidades: [
      { t: "Dos patas", txt: "Es uno de los poquísimos animales en el mundo con solo dos patas." },
      { t: "Subterráneo", txt: "Sus patas están diseñadas perfectamente para excavar rápido en la arena." }
    ],
  },
  {
    id: "lamprea-chapala",
    nombre: "Lamprea de Chapala",
    cient: "Tetrapleurodon spadiceus",
    emoji: "🐟",
    categoria: "Pez · Lamprea",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Lago de Chapala y ríos aledaños",
    poblacion: "Muy rara",
    tamaño: "20 – 30 cm",
    peso: "100 g",
    sonido: "lluvia",
    desc: "Pez primitivo sin mandíbulas que sobrevive desde hace millones de años. Es un parásito natural de otros peces y un indicador de la salud del lago.",
    amenazas: [
      "Contaminación severa del Lago de Chapala.",
      "Presencia de especies de peces exóticas.",
      "Pérdida de sus ríos de desove."
    ],
    curiosidades: [
      { t: "Fósil", txt: "No ha cambiado casi nada en 300 millones de años." },
      { t: "Boca circular", txt: "Tiene una ventosa llena de dientes para sujetarse a sus presas." }
    ],
  },
  {
    id: "liebre-tehuantepec",
    nombre: "Liebre de Tehuantepec",
    cient: "Lepus flavigularis",
    emoji: "🐇",
    categoria: "Mamífero · Lagomorfo",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Pastizales y sabanas de Oaxaca",
    poblacion: "< 1,000 individuos",
    tamaño: "55 – 60 cm",
    peso: "3.5 – 4 kg",
    sonido: "viento",
    desc: "Una de las liebres más raras y amenazadas del mundo. Se reconoce por sus rayas negras en la nuca y sus grandes orejas. Solo vive en cuatro pequeñas poblaciones aisladas.",
    amenazas: [
      "Cacería furtiva intensa.",
      "Incendios provocados en los pastizales.",
      "Predación por perros domésticos."
    ],
    curiosidades: [
      { t: "Rayas únicas", txt: "Es la única liebre mexicana con ese patrón de rayas negras." },
      { t: "Velocidad", txt: "Puede correr a más de 60 km/h para escapar de depredadores." }
    ],
  },
  {
    id: "lobo-mexicano",
    nombre: "Lobo Mexicano",
    cient: "Canis lupus baileyi",
    emoji: "🐺",
    categoria: "Mamífero · Canidae",
    estado: "EN PELIGRO",
    habitat: "Bosques de montaña y desiertos",
    poblacion: "~40 individuos en libertad en México",
    tamaño: "1.3 – 1.8 m",
    peso: "25 – 45 kg",
    sonido: "viento",
    desc: "El lobo más pequeño y genéticamente distinto de Norteamérica. Tras ser exterminado en la naturaleza, ha vuelto gracias a un programa de cría y reintroducción histórico.",
    amenazas: [
      "Cacería ilegal por conflictos con el ganado.",
      "Fragmentación de sus corredores biológicos.",
      "Pérdida de diversidad genética."
    ],
    curiosidades: [
      { t: "Líderes", txt: "Viven en manadas familiares con una pareja alfa dominante." },
      { t: "Aullido", txt: "Su aullido es fundamental para coordinar a la manada en la montaña." }
    ],
  },
  {
    id: "manati-caribe",
    nombre: "Manatí del Caribe",
    cient: "Trichechus manatus",
    emoji: "🧜‍♂️",
    categoria: "Mamífero · Trichechidae",
    estado: "VULNERABLE",
    habitat: "Ríos, estuarios y costas del Caribe",
    poblacion: "~1,000 individuos en México",
    tamaño: "3 – 4.5 m",
    peso: "300 – 600 kg",
    sonido: "lluvia",
    desc: "Gigantes gentiles del agua. Son mamíferos herbívoros que pasan gran parte del día comiendo pastos marinos. Son fundamentales para la salud de los ecosistemas costeros.",
    amenazas: [
      "Colisiones con motores de barcos y lanchas rápidas.",
      "Contaminación de ríos y lagunas por desechos industriales.",
      "Redes de pesca ilegales donde quedan atrapados."
    ],
    curiosidades: [
      { t: "Sirenas", txt: "Los marineros antiguos los confundían con sirenas reales." },
      { t: "Herbívoro", txt: "Un adulto puede comer hasta 50 kg de vegetación al día." }
    ],
  },
  {
    id: "mangle-colorado",
    nombre: "Mangle Colorado",
    cient: "Rhizophora mangle",
    emoji: "🌳",
    categoria: "Planta · Mangle",
    estado: "AMENAZADO",
    habitat: "Costas y estuarios",
    poblacion: "En declive por desarrollo costero",
    tamaño: "Hasta 20 m",
    peso: "—",
    sonido: "oceano",
    desc: "Árbol protector de las costas con raíces aéreas que parecen patas. Es el refugio principal para peces jóvenes y barrera natural contra huracanes.",
    amenazas: [
      "Desarrollo de complejos turísticos sobre zonas de manglar.",
      "Contaminación por derrames de petróleo.",
      "Tala para obtención de carbón vegetal."
    ],
    curiosidades: [
      { t: "Filtro", txt: "Es capaz de desalinizar el agua de mar para poder vivir en ella." },
      { t: "Cuna", txt: "Sin manglares, la mayoría de los peces de arrecife no podrían sobrevivir su etapa joven." }
    ],
  },
  {
    id: "mapache-cozumel",
    nombre: "Mapache de Cozumel",
    cient: "Procyon pygmaeus",
    emoji: "🦝",
    categoria: "Mamífero · Prociónido",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Manglares y selvas de la Isla de Cozumel",
    poblacion: "< 300 individuos",
    tamaño: "40 – 50 cm",
    peso: "3 – 4 kg",
    sonido: "oceano",
    desc: "Versión enana del mapache común, exclusiva de la isla de Cozumel. Es uno de los carnívoros más raros y amenazados del planeta.",
    amenazas: [
      "Huracanes catastróficos que destruyen su pequeño hábitat.",
      "Transmisión de enfermedades por perros y gatos domésticos.",
      "Atropellamientos en la carretera perimetral de la isla."
    ],
    curiosidades: [
      { t: "Enano", txt: "Es un 45% más pequeño que el mapache del continente." },
      { t: "Isla", txt: "Solo vive en Cozumel y en ningún otro lugar del mundo." }
    ],
  },
  {
    id: "maquique",
    nombre: "Maquique",
    cient: "Cyathea spp.",
    emoji: "🌿",
    categoria: "Planta · Helecho gigante",
    estado: "AMENAZADO",
    habitat: "Bosques de niebla de Chiapas y Veracruz",
    poblacion: "En declive por extracción artesanal",
    tamaño: "Hasta 15 m",
    peso: "—",
    sonido: "selva",
    desc: "Helecho arbóreo gigante que parece una palma. Es un sobreviviente de la era de los dinosaurios que hoy habita los bosques más húmedos de México.",
    amenazas: [
      "Extracción de su tronco para fabricar macetas y artesanías.",
      "Deforestación de los bosques nublados nativos.",
      "Cambio climático que reduce la humedad ambiental."
    ],
    curiosidades: [
      { t: "Prehistórico", txt: "Existía antes de que aparecieran las plantas con flores." },
      { t: "Tronco vivo", txt: "Su tronco es una masa densa de raíces que absorbe agua directamente del aire." }
    ],
  },
  {
    id: "mariposa-esperanza",
    nombre: "Mariposa Esperanza",
    cient: "Papilio esperanza",
    emoji: "🦋",
    categoria: "Insecto · Lepidóptero",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Bosques de niebla de la Sierra de Juárez, Oaxaca",
    poblacion: "Extremadamente limitada",
    tamaño: "8 – 10 cm",
    peso: "< 1 g",
    sonido: "viento",
    desc: "Mariposa mística y rarísima que solo vive en un pequeño rincón de Oaxaca. Fue redescubierta recientemente tras creerse extinguida durante décadas.",
    amenazas: [
      "Coleccionismo ilegal por su extrema rareza.",
      "Fragmentación de su hábitat nuboso único.",
      "Incendios forestales accidentales."
    ],
    curiosidades: [
      { t: "Redescubierta", txt: "Pasó casi 50 años sin que nadie viera un ejemplar vivo." },
      { t: "Misterio", txt: "Su ciclo de vida completo aún no es bien conocido por la ciencia." }
    ],
  },
  {
    id: "mariposa-monarca",
    nombre: "Mariposa Monarca",
    cient: "Danaus plexippus",
    emoji: "🦋",
    categoria: "Insecto · Danaidae",
    estado: "EN PELIGRO",
    habitat: "Bosques de oyamel en Michoacán y Estado de México",
    poblacion: "En declive fluctuante",
    tamaño: "9 – 10 cm",
    peso: "0.5 g",
    sonido: "viento",
    desc: "Protagonista de la migración más asombrosa de la naturaleza, viajando miles de kilómetros desde Canadá hasta México para pasar el invierno.",
    amenazas: [
      "Pérdida de bosques de oyamel por tala ilegal en México.",
      "Uso de pesticidas que eliminan el algodoncillo en EE. UU. y Canadá.",
      "Eventos climáticos extremos durante su migración."
    ],
    curiosidades: [
      { t: "Generación Matusalén", txt: "La generación que migra vive hasta 8 meses, mientras las otras solo 6 semanas." },
      { t: "Navegación", txt: "Usan el sol y el campo magnético de la Tierra para orientarse." }
    ],
  },
  {
    id: "moni",
    nombre: "Moní",
    cient: "Podostemum spp.",
    emoji: "🌿",
    categoria: "Planta · Acuática",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Ríos de corriente rápida y cascadas",
    poblacion: "Muy rara y sensible",
    tamaño: "10 – 30 cm",
    peso: "—",
    sonido: "lluvia",
    desc: "Planta acuática única que vive adherida a las rocas en zonas de turbulencia extrema. Es un indicador de agua extremadamente limpia y oxigenada.",
    amenazas: [
      "Contaminación química de los ríos de montaña.",
      "Sedimentación por deforestación en las cuencas altas.",
      "Construcción de represas que alteran el flujo del río."
    ],
    curiosidades: [
      { t: "Súper pegamento", txt: "Produce un pegamento biológico más fuerte que muchos pegamentos industriales." },
      { t: "Vida extrema", txt: "Solo florece cuando el nivel del río baja y queda expuesta al aire." }
    ],
  },
  {
    id: "mono-arana",
    nombre: "Mono Araña",
    cient: "Ateles geoffroyi",
    emoji: "🐒",
    categoria: "Mamífero · Atelidae",
    estado: "EN PELIGRO",
    habitat: "Selvas tropicales altas",
    poblacion: "En declive constante",
    tamaño: "Hasta 65 cm (cuerpo) y 90 cm (cola)",
    peso: "6 – 9 kg",
    sonido: "selva",
    desc: "El acróbata de la selva mexicana. Usa su cola prensil como una quinta extremidad para columpiarse con una agilidad impresionante entre las copas de los árboles.",
    amenazas: [
      "Tráfico ilegal de crías para el mercado de mascotas.",
      "Fragmentación de selvas que los aísla en parches pequeños.",
      "Cacería furtiva en algunas regiones del sur de México."
    ],
    curiosidades: [
      { t: "Quinta mano", txt: "Su cola tiene una 'huella' de piel rugosa al final para mejor agarre." },
      { t: "Sin pulgar", txt: "No tienen pulgares en las manos, lo que les ayuda a columpiarse más rápido." }
    ],
  },
  {
    id: "mono-aullador",
    nombre: "Mono Aullador",
    cient: "Alouatta palliata",
    emoji: "🐒",
    categoria: "Mamífero · Primate",
    estado: "VULNERABLE",
    habitat: "Selvas tropicales húmedas",
    poblacion: "En declive por enfermedades y calor extremo",
    tamaño: "50 – 70 cm",
    peso: "5 – 10 kg",
    sonido: "selva",
    desc: "Famoso por poseer uno de los sonidos más potentes del reino animal. Su rugido se usa para marcar territorio y puede escucharse a 5 kilómetros de distancia.",
    amenazas: [
      "Deforestación masiva de su hábitat selvático.",
      "Ondas de calor extremo que han causado muertes masivas recientemente.",
      "Brotes de enfermedades como la fiebre amarilla."
    ],
    curiosidades: [
      { t: "Hioides", txt: "Tienen un hueso en la garganta agrandado que funciona como caja de resonancia." },
      { t: "Sedentarios", txt: "Pasan hasta el 70% del día descansando para digerir las hojas que comen." }
    ],
  },
  {
    id: "murcielago-pecador",
    nombre: "Murciélago Pescador",
    cient: "Noctilio leporinus",
    emoji: "🦇",
    categoria: "Mamífero · Quiróptero",
    estado: "AMENAZADO",
    habitat: "Lagunas costeras, ríos y manglares",
    poblacion: "Vulnerable a la contaminación del agua",
    tamaño: "10 – 12 cm",
    peso: "60 – 90 g",
    sonido: "oceano",
    desc: "Uno de los pocos murciélagos en el mundo que se alimenta de peces. Posee garras enormes en sus patas traseras para 'pescar' en la superficie del agua.",
    amenazas: [
      "Contaminación de los cuerpos de agua por pesticidas.",
      "Pérdida de manglares y zonas de refugio costero.",
      "Destrucción de cuevas y árboles huecos donde anidan."
    ],
    curiosidades: [
      { t: "Ecolocación", txt: "Detectan las ondas que crean los peces en el agua con una precisión milimétrica." },
      { t: "Olor fuerte", txt: "Tienen un olor a pescado muy distintivo debido a su dieta." }
    ],
  },
  {
    id: "nauyaca-montana",
    nombre: "Nauyaca de Montaña",
    cient: "Cerrophidion godmani",
    emoji: "🐍",
    categoria: "Reptil · Víbora",
    estado: "VULNERABLE",
    habitat: "Bosques de pino-encino y de niebla",
    poblacion: "En declive por deforestación de altura",
    tamaño: "40 – 55 cm",
    peso: "200 – 350 g",
    sonido: "viento",
    desc: "Víbora de cuerpo robusto y temperamento tranquilo, adaptada a la vida en las montañas frías de Chiapas. Es una especie fascinante por su resistencia al clima extremo.",
    amenazas: [
      "Deforestación de bosques de montaña para agricultura.",
      "Muerte por humanos que la confunden con especies más agresivas.",
      "Cambio climático que altera su rango térmico de supervivencia."
    ],
    curiosidades: [
      { t: "Frío", txt: "Es capaz de estar activa a temperaturas donde otras serpientes morirían." },
      { t: "Camuflaje", txt: "Su color café con manchas oscuras la hace invisible entre las hojas secas del pinar." }
    ],
  },
  {
    id: "nutria-rio",
    nombre: "Nutria de Río",
    cient: "Lontra longicaudis",
    emoji: "🦦",
    categoria: "Mamífero · Mustelidae",
    estado: "AMENAZADO",
    habitat: "Ríos cristalinos, lagunas y pantanos",
    poblacion: "En declive por contaminación",
    tamaño: "Hasta 1.2 m",
    peso: "5 – 15 kg",
    sonido: "lluvia",
    desc: "Símbolo de la pureza de los ríos. La nutria es una nadadora experta y juguetona que regula las poblaciones de peces y crustáceos en nuestros sistemas de agua dulce.",
    amenazas: [
      "Contaminación severa de los ríos por desechos industriales y mineros.",
      "Cacería por su piel densa y valiosa.",
      "Pérdida de vegetación en las riberas de los ríos donde anidan."
    ],
    curiosidades: [
      { t: "Pelo denso", txt: "Tienen hasta 150,000 pelos por centímetro cuadrado, lo que las mantiene secas bajo el agua." },
      { t: "Juego", txt: "Pasan gran parte de su tiempo 'jugando' para fortalecer lazos y habilidades." }
    ],
  },
  {
    id: "ocelote",
    nombre: "Ocelote",
    cient: "Leopardus pardalis",
    emoji: "🐆",
    categoria: "Mamífero · Felidae",
    estado: "AMENAZADO",
    habitat: "Selvas tropicales, matorrales y manglares",
    poblacion: "~1,500 individuos en México",
    tamaño: "70 – 90 cm (cuerpo)",
    peso: "8 – 15 kg",
    sonido: "selva",
    desc: "Felino mediano con un patrón de manchas único para cada individuo. Es un cazador nocturno solitario que se adapta a una gran variedad de ecosistemas mexicanos.",
    amenazas: [
      "Fragmentación de hábitat que los obliga a cruzar carreteras peligrosas.",
      "Cacería ilegal por su piel y el comercio de cachorros.",
      "Conflictos por ataques a aves de corral en zonas rurales."
    ],
    curiosidades: [
      { t: "Huellas", txt: "Al igual que nuestras huellas digitales, sus manchas son únicas e irrepetibles." },
      { t: "Ojos", txt: "Tienen una capa especial en los ojos que les permite ver 6 veces mejor que nosotros en la oscuridad." }
    ],
  },
  {
    id: "pajarito-monte",
    nombre: "Pajarito de Monte",
    cient: "Vireo spp.",
    emoji: "🐦",
    categoria: "Ave · Paseriforme",
    estado: "AMENAZADO",
    habitat: "Sotobosque de bosques templados y selvas",
    poblacion: "Vulnerable a pesticidas",
    tamaño: "10 – 12 cm",
    peso: "10 – 15 g",
    sonido: "viento",
    desc: "Pequeño ave insectívora que habita las zonas bajas del bosque. Es fundamental para el control de plagas forestales y su canto es parte esencial del bosque.",
    amenazas: [
      "Uso extensivo de pesticidas que eliminan su alimento y lo envenenan.",
      "Deforestación selectiva que elimina el sotobosque donde vive.",
      "Ataques de gatos domésticos en zonas periurbanas."
    ],
    curiosidades: [
      { t: "Canto", txt: "Puede cantar hasta 20,000 veces en un solo día de primavera." },
      { t: "Migración", txt: "Muchas de estas especies viajan miles de kilómetros cada año." }
    ],
  },
  {
    id: "palma-espinuda",
    nombre: "Palma Espinuda",
    cient: "Cryosophila nana",
    emoji: "🌴",
    categoria: "Planta · Palma",
    estado: "VULNERABLE",
    habitat: "Selvas bajas del Pacífico mexicano",
    poblacion: "Escasa por pérdida de hábitat costero",
    tamaño: "2 – 4 metros",
    peso: "—",
    sonido: "selva",
    desc: "Palma única cuyo tronco está cubierto de espinas ramificadas que parecen raíces. Es una especie endémica de México que se adapta a suelos rocosos y secos.",
    amenazas: [
      "Desarrollo inmobiliario y turístico desmedido en las costas.",
      "Extracción ilegal de ejemplares silvestres para jardinería.",
      "Incendios forestales accidentales."
    ],
    curiosidades: [
      { t: "Raíces-espina", txt: "Sus espinas son en realidad raíces que se han endurecido y afilado para proteger el tronco." },
      { t: "Resistencia", txt: "Es capaz de sobrevivir meses de sequía extrema sin perder sus hojas." }
    ],
  },
  {
    id: "pata-elefante",
    nombre: "Pata de Elefante",
    cient: "Beaucarnea recurvata",
    emoji: "🌴",
    categoria: "Planta · Asparagácea",
    estado: "AMENAZADO",
    habitat: "Selvas secas y acantilados de Veracruz",
    poblacion: "Muy reducida en libertad",
    tamaño: "Hasta 10 metros de altura",
    peso: "—",
    sonido: "viento",
    desc: "Planta de apariencia prehistórica con una base ensanchada que parece la pata de un elefante. Es una de las plantas ornamentales mexicanas más famosas y codiciadas del mundo.",
    amenazas: [
      "Saqueo masivo de ejemplares centenarios para exportación ilegal.",
      "Destrucción de selvas bajas veracruzanas por agricultura.",
      "Crecimiento extremadamente lento que dificulta la recuperación."
    ],
    curiosidades: [
      { t: "Tanque", txt: "Su base ensanchada puede almacenar agua suficiente para vivir años sin lluvia." },
      { t: "Ancianidad", txt: "Algunos ejemplares en vida silvestre tienen más de 500 años." }
    ],
  },
  {
    id: "pavon",
    nombre: "Pavón",
    cient: "Oreophasis derbianus",
    emoji: "🐦",
    categoria: "Ave · Cracidae",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Bosques de niebla de alta montaña en Chiapas",
    poblacion: "< 2,000 individuos estimados",
    tamaño: "85 cm de largo",
    peso: "2 kg",
    sonido: "selva",
    desc: "Ave mítica de los bosques nubosos de Chiapas y Guatemala. Se reconoce por el 'cuerno' rojo que corona su cabeza, siendo el único miembro vivo de su linaje ancestral.",
    amenazas: [
      "Destrucción del frágil bosque de niebla por cambio de uso de suelo.",
      "Cacería furtiva por su carne y plumaje decorativo.",
      "Cambio climático que está secando los bosques nublados."
    ],
    curiosidades: [
      { t: "Cuerno", txt: "Su cuerno rojo es tejido óseo cubierto de piel muy vascularizada." },
      { t: "Prehistórico", txt: "Es considerado un 'eslabón perdido' entre diferentes grupos de aves." }
    ],
  },
  {
    id: "perrito-praderas",
    nombre: "Perrito de las Praderas",
    cient: "Cynomys mexicanus",
    emoji: "🐿️",
    categoria: "Mamífero · Roedor",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Pastizales del Norte de México",
    poblacion: "~12,000 individuos",
    tamaño: "38 – 44 cm",
    peso: "1 kg",
    sonido: "viento",
    desc: "Ingeniero de los pastizales. Sus colonias son vitales para la salud del suelo al oxigenarlo y permitir que el agua se infiltre, manteniendo la vida en el desierto.",
    amenazas: [
      "Expansión de la frontera agrícola que destruye sus colonias.",
      "Persecución humana al ser considerados erróneamente una plaga.",
      "Pérdida de conectividad entre sus poblaciones aisladas."
    ],
    curiosidades: [
      { t: "Lenguaje", txt: "Tienen un lenguaje tan complejo que pueden describir el color de ropa de un humano." },
      { t: "Beso", txt: "Se saludan 'besándose' para reconocer a los miembros de su familia." }
    ],
  },
  {
    id: "peyote",
    nombre: "Peyote",
    cient: "Lophophora williamsii",
    emoji: "🌵",
    categoria: "Planta · Cactácea",
    estado: "VULNERABLE",
    habitat: "Desierto Chihuahuense de México",
    poblacion: "En fuerte declive por saqueo",
    tamaño: "5 – 12 cm de diámetro",
    peso: "200 g",
    sonido: "viento",
    desc: "Cactus sagrado sin espinas, central en la cosmogonía huichol y otras culturas indígenas. Es una pieza clave de la medicina tradicional y el equilibrio del desierto.",
    amenazas: [
      "Saqueo masivo para el mercado negro internacional.",
      "Turismo psicodélico irresponsable que destruye poblaciones enteras.",
      "Pérdida de hábitat por minería y agricultura extensiva."
    ],
    curiosidades: [
      { t: "Lento", txt: "Puede tardar 15 años en alcanzar el tamaño de una moneda." },
      { t: "Defensa", txt: "No tiene espinas; usa alcaloides amargos para que no se lo coman los animales." }
    ],
  },
  {
    id: "picote-tequila",
    nombre: "Picote Tequila",
    cient: "Zoogoneticus tequila",
    emoji: "🐟",
    categoria: "Pez · Goodeidae",
    estado: "EXTINTO EN LIBERTAD (Reintroducido)",
    habitat: "Manantiales y ríos de Jalisco",
    poblacion: "En lenta recuperación tras reintroducción",
    tamaño: "6 – 8 cm",
    peso: "20 g",
    sonido: "lluvia",
    desc: "Este pequeño pez desapareció de la naturaleza en los 90. Gracias a acuaristas europeos y universidades mexicanas, fue salvado en cautiverio y hoy ha vuelto a sus ríos natales.",
    amenazas: [
      "Contaminación severa de los manantiales por residuos urbanos.",
      "Competencia con especies exóticas liberadas en los ríos.",
      "Desecación de arroyos por extracción de agua."
    ],
    curiosidades: [
      { t: "Éxito", txt: "Es un caso mundial de éxito en la reintroducción de una especie extinta." },
      { t: "Vivíparo", txt: "A diferencia de muchos peces, las hembras dan a luz a crías ya formadas." }
    ],
  },
  {
    id: "pino-azul",
    nombre: "Pino Azul",
    cient: "Pinus maximartinezii",
    emoji: "🌲",
    categoria: "Planta · Conífera",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Montañas semiáridas de Zacatecas",
    poblacion: "< 5,000 individuos en total",
    tamaño: "10 – 15 metros",
    peso: "—",
    sonido: "viento",
    desc: "Pino único en el mundo con piñones gigantes y un follaje de tono azulado espectacular. Solo existe en dos pequeñas poblaciones en la Sierra de Zacatecas.",
    amenazas: [
      "Incendios forestales accidentales que podrían extinguir a la especie.",
      "Sobrepastoreo de ganado que se come los pinos jóvenes.",
      "Recolección excesiva de piñones que impide la germinación natural."
    ],
    curiosidades: [
      { t: "Piñones", txt: "Produce los piñones comestibles más grandes de cualquier pino en el mundo." },
      { t: "Rango", txt: "Casi el 100% de la población mundial vive en un solo cerro zacatecano." }
    ],
  },
  {
    id: "quetzal",
    nombre: "Quetzal",
    cient: "Pharomachrus mocinno",
    emoji: "🦜",
    categoria: "Ave · Trogonidae",
    estado: "EN PELIGRO",
    habitat: "Bosque de niebla húmedo",
    poblacion: "Muy reducida y fragmentada",
    tamaño: "36 – 40 cm (cuerpo)",
    peso: "200 g",
    sonido: "selva",
    desc: "Ave sagrada de los antiguos mayas. El macho posee una cola de plumas esmeralda de más de medio metro de largo que brilla intensamente entre la niebla del bosque.",
    amenazas: [
      "Deforestación masiva de su hábitat nuboso único.",
      "Cambio climático que reduce la humedad de los bosques altos.",
      "Tráfico ilegal por su espectacular plumaje."
    ],
    curiosidades: [
      { t: "Cola", txt: "Sus largas plumas no son la cola real, sino plumas cobertoras de la rabadilla." },
      { t: "Simbolismo", txt: "Representaba la libertad, pues se creía que moría de tristeza si era enjaulado." }
    ],
  },
  {
    id: "rana-arbol-juanita",
    nombre: "Rana de Árbol de Juanita",
    cient: "Plectrohyla juanitae",
    emoji: "🐸",
    categoria: "Anfibio · Rana",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Arroyos en bosques de niebla",
    poblacion: "En situación crítica",
    tamaño: "3 – 4 cm",
    peso: "10 g",
    sonido: "lluvia",
    desc: "Rana de colores vibrantes que habita en los arroyos de las montañas altas. Su población ha colapsado debido a una pandemia fúngica que afecta a los anfibios globalmente.",
    amenazas: [
      "Hongo quítrido (Chytrid) que infecta su piel y les causa la muerte.",
      "Cambio climático que altera la temperatura de los arroyos de montaña.",
      "Contaminación del agua por agroquímicos."
    ],
    curiosidades: [
      { t: "Pandemia", txt: "Es una de las especies que más ha sufrido por el hongo global de los anfibios." },
      { t: "Color", txt: "Su color verde brillante le ayuda a camuflarse perfectamente con el musgo de las rocas." }
    ],
  },
  {
    id: "rana-ladradora-guerrero",
    nombre: "Rana Ladradora de Guerrero",
    cient: "Eleutherodactylus pipilans",
    emoji: "🐸",
    categoria: "Anfibio · Rana",
    estado: "VULNERABLE",
    habitat: "Selvas secas y cuevas de Guerrero",
    poblacion: "Desconocida pero vulnerable",
    tamaño: "3 – 5 cm",
    peso: "15 g",
    sonido: "lluvia",
    desc: "Pequeña rana con un canto potente y ronco que suena igual al ladrido de un perro pequeño. Es endémica de las regiones montañosas y cuevas de Guerrero.",
    amenazas: [
      "Deforestación de las selvas secas por ganadería.",
      "Contaminación de los mantos acuíferos subterráneos.",
      "Uso de pesticidas en zonas agrícolas cercanas."
    ],
    curiosidades: [
      { t: "Ladrido", txt: "Su canto es tan parecido a un perro que suele confundir a los viajeros en la selva." },
      { t: "Sin renacuajo", txt: "A diferencia de otras ranas, sus crías nacen directamente como ranitas miniatura de los huevos." }
    ],
  },
  {
    id: "rana-sierra",
    nombre: "Rana de la Sierra",
    cient: "Rana sierrae",
    emoji: "🐸",
    categoria: "Anfibio · Rana",
    estado: "VULNERABLE",
    habitat: "Lagos y arroyos helados de alta montaña",
    poblacion: "En declive por especies invasoras",
    tamaño: "5 – 7 cm",
    peso: "30 g",
    sonido: "lluvia",
    desc: "Rana adaptada a condiciones de frío extremo en las altas montañas de México. Son capaces de sobrevivir inviernos bajo el hielo de los lagos alpinos.",
    amenazas: [
      "Introducción de truchas invasoras que se comen a sus renacuajos.",
      "Calentamiento global que derrite los glaciares y seca sus lagos.",
      "Hongo quítrido que debilita sus poblaciones."
    ],
    curiosidades: [
      { t: "Hielo", txt: "Pueden permanecer en estado de aletargamiento bajo el agua congelada por meses." },
      { t: "Anticongelante", txt: "Su cuerpo produce azúcares naturales que evitan que sus células se rompan con el frío." }
    ],
  },
  {
    id: "ranita-chamula",
    nombre: "Ranita Chamula",
    cient: "Plectrohyla pycnochila",
    emoji: "🐸",
    categoria: "Anfibio · Rana",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Ciénagas y arroyos en las montañas de Chiapas",
    poblacion: "Posiblemente extinguida (sin avistamientos recientes)",
    tamaño: "4 cm",
    peso: "10 g",
    sonido: "lluvia",
    desc: "Rana mística de las tierras altas de Chiapas. No ha sido vista por científicos en décadas y se teme que haya sucumbido a los cambios ambientales extremos.",
    amenazas: [
      "Hongo quítrido catastrófico.",
      "Deforestación masiva de su hábitat nuboso en Los Altos de Chiapas.",
      "Contaminación de los pequeños arroyos donde vivía."
    ],
    curiosidades: [
      { t: "Búsqueda", txt: "Los biólogos organizan expediciones cada año con la esperanza de encontrarla viva." },
      { t: "Nombre", txt: "Su nombre honra a la cultura Chamula de la región donde fue descubierta." }
    ],
  },
  {
    id: "raton-alfalfar",
    nombre: "Ratón de Alfalfar",
    cient: "Reithrodontomys megalotis",
    emoji: "🐭",
    categoria: "Mamífero · Roedor",
    estado: "AMENAZADO",
    habitat: "Praderas, matorrales y campos de cultivo",
    poblacion: "Vulnerable a cambios en la agricultura",
    tamaño: "12 – 15 cm",
    peso: "15 g",
    sonido: "viento",
    desc: "Pequeño roedor con orejas desproporcionadamente grandes. Es fundamental en la cadena alimentaria, sirviendo de sustento a búhos, zorros y serpientes.",
    amenazas: [
      "Uso indiscriminado de raticidas y pesticidas en el campo.",
      "Mecanización de la agricultura que destruye sus nidos superficiales.",
      "Predación por gatos domésticos."
    ],
    curiosidades: [
      { t: "Arquitectos", txt: "Construyen nidos de pasto redondos y acolchados muy ingeniosos." },
      { t: "Oído", txt: "Sus grandes orejas le permiten detectar el aleteo de un búho a larga distancia." }
    ],
  },
  {
    id: "raya-redonda-arrecife",
    nombre: "Raya Redonda de Arrecife",
    cient: "Urobatis jamaicensis",
    emoji: "🐟",
    categoria: "Pez · Elasmobranquio",
    estado: "AMENAZADO",
    habitat: "Fondos arenosos de los arrecifes de coral",
    poblacion: "En declive por degradación de arrecifes",
    tamaño: "30 – 45 cm",
    peso: "2 kg",
    sonido: "oceano",
    desc: "Habitante discreto de los arrecifes. Posee un patrón de manchas hipnótico que le permite fundirse con la arena y el coral para acechar a sus presas.",
    amenazas: [
      "Degradación de los sistemas arrecifales por blanqueamiento de coral.",
      "Pesca incidental en redes de arrastre.",
      "Contaminación costera por aguas residuales."
    ],
    curiosidades: [
      { t: "Invisibilidad", txt: "Se sacude en el fondo para cubrirse de arena y quedar casi invisible." },
      { t: "Aguijón", txt: "Tienen un aguijón venenoso en la cola que solo usan para defenderse de tiburones." }
    ],
  },
  {
    id: "salamandra-tuxtlas",
    nombre: "Salamandra de los Tuxtlas",
    cient: "Pseudoeurycea tuxtlaensis",
    emoji: "🦎",
    categoria: "Anfibio · Salamandra",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Selvas altas del Volcán San Martín, Veracruz",
    poblacion: "Muy reducida y amenazada",
    tamaño: "8 – 12 cm",
    peso: "30 g",
    sonido: "selva",
    desc: "Salamandra terrestre exclusiva de los volcanes de Veracruz. Vive entre las bromelias y la hojarasca húmeda de un ecosistema que desaparece rápidamente.",
    amenazas: [
      "Deforestación extrema de la región de Los Tuxtlas.",
      "Aumento de la temperatura en la montaña que seca su piel.",
      "Avance de la frontera agrícola hacia la cima de los volcanes."
    ],
    curiosidades: [
      { t: "Piel", txt: "Respira totalmente a través de su piel, por lo que necesita humedad constante." },
      { t: "Única", txt: "No existe en ningún otro lugar de la Tierra fuera de ese volcán." }
    ],
  },
  {
    id: "salamandra-pie-plano",
    nombre: "Salamandra Pie Plano",
    cient: "Chiropterotriton spp.",
    emoji: "🦎",
    categoria: "Anfibio · Salamandra",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Bosques de pino-encino y cuevas de la Sierra Madre",
    poblacion: "Rara y en peligro por pérdida de bosque",
    tamaño: "5 – 8 cm",
    peso: "15 g",
    sonido: "viento",
    desc: "Pequeñas salamandras con pies anchos que actúan como ventosas. Son expertas trepadoras de bromelias en los bosques de niebla del centro de México.",
    amenazas: [
      "Deforestación masiva para obtención de madera y carbón.",
      "Cambio climático que reduce la formación de niebla.",
      "Recolección ilegal de bromelias donde habitan."
    ],
    curiosidades: [
      { t: "Ventosas", txt: "Sus pies les permiten caminar sobre superficies lisas y húmedas sin caer." },
      { t: "Escaladora", txt: "Pasa casi toda su vida en las copas de los árboles, sin tocar el suelo." }
    ],
  },
  {
    id: "sardinita-ciega",
    nombre: "Sardinita Ciega",
    cient: "Astyanax mexicanus (Ciego)",
    emoji: "🐟",
    categoria: "Pez · Carácido",
    estado: "AMENAZADO",
    habitat: "Ríos y pozas dentro de cuevas oscuras",
    poblacion: "Localizada en el centro de México",
    tamaño: "5 – 8 cm",
    peso: "10 g",
    sonido: "cueva",
    desc: "Este pez ha evolucionado para vivir en la oscuridad absoluta. Sus ojos han desaparecido y su piel carece de color, confiando en sus otros sentidos para cazar y nadar.",
    amenazas: [
      "Contaminación de los acuíferos subterráneos por agroquímicos.",
      "Turismo espeleológico irresponsable que altera su hábitat.",
      "Alteración de los niveles de agua de las cuevas por bombeo."
    ],
    curiosidades: [
      { t: "Sensor", txt: "Siente las vibraciones del agua tan bien que nunca choca con las paredes de la cueva." },
      { t: "Sin sueño", txt: "A diferencia de otros peces, duermen muy poco por vivir en oscuridad constante." }
    ],
  },
  {
    id: "tapir-centroamericano",
    nombre: "Tapir Centroamericano",
    cient: "Tapirus bairdii",
    emoji: "🐗",
    categoria: "Mamífero · Tapiridae",
    estado: "EN PELIGRO",
    habitat: "Selvas tropicales húmedas y manglares",
    poblacion: "~1,500 individuos en México",
    tamaño: "1.8 – 2.3 metros",
    peso: "150 – 300 kg",
    sonido: "selva",
    desc: "El 'jardinero de la selva'. Es el mamífero terrestre más grande de los trópicos mexicanos. Es un nadador incansable y una pieza clave para la dispersión de semillas grandes.",
    amenazas: [
      "Cacería ilegal por su carne y piel.",
      "Fragmentación de selvas por carreteras y ganadería.",
      "Sequías extremas que secan los bebederos naturales."
    ],
    curiosidades: [
      { t: "Trompa", txt: "Su labio superior es una trompa flexible que usa para arrancar hojas y frutos." },
      { t: "Agua", txt: "Suelen defecar en el agua para ocultar su rastro de los jaguares." }
    ],
  },
  {
    id: "tarantula-arboricola",
    nombre: "Tarántula Arborícola",
    cient: "Poecilotheria spp.",
    emoji: "🕷️",
    categoria: "Arácnido · Tarántula",
    estado: "AMENAZADO",
    habitat: "Huecos de árboles en selvas tropicales",
    poblacion: "Vulnerable a la pérdida de árboles viejos",
    tamaño: "Hasta 15 cm",
    peso: "40 g",
    sonido: "selva",
    desc: "Tarántulas rápidas y ágiles que viven en las alturas. A diferencia de las de tierra, son más ligeras y tienen patas más largas para saltar entre las ramas.",
    amenazas: [
      "Tala de árboles viejos con oquedades donde viven.",
      "Coleccionismo ilegal por su comportamiento y colores únicos.",
      "Uso de pesticidas en zonas de selva."
    ],
    curiosidades: [
      { t: "Rapidez", txt: "Son famosas por su velocidad explosiva, muy superior a las terrestres." },
      { t: "Seda", txt: "Tejen complejos túneles de seda dentro de la corteza de los árboles." }
    ],
  },
  {
    id: "tarantula-rodillas-rojas",
    nombre: "Tarántula Rodillas Rojas",
    cient: "Brachypelma hamorii",
    emoji: "🕷️",
    categoria: "Arácnido · Tarántula",
    estado: "AMENAZADO",
    habitat: "Selvas secas y matorrales del Pacífico",
    poblacion: "En declive por tráfico ilegal",
    tamaño: "15 – 18 cm",
    peso: "65 g",
    sonido: "selva",
    desc: "La tarántula más famosa y dócil del mundo. Su belleza la ha convertido en una especie sumamente codiciada, lo que ha puesto en riesgo sus poblaciones silvestres en México.",
    amenazas: [
      "Tráfico ilegal masivo para el mercado de mascotas.",
      "Destrucción de sus madrigueras subterráneas por agricultura.",
      "Incendios forestales en la costa del Pacífico."
    ],
    curiosidades: [
      { t: "Larga vida", txt: "Las hembras pueden vivir más de 30 años, convirtiéndose en compañeras de vida." },
      { t: "Defensa", txt: "En lugar de morder, lanzan pelos urticantes de su abdomen que pican mucho." }
    ],
  },
  {
    id: "tecolote-tamaulipeco",
    nombre: "Tecolote Tamaulipeco",
    cient: "Glaucidium sanchezi",
    emoji: "🦉",
    categoria: "Ave · Búho",
    estado: "VULNERABLE",
    habitat: "Bosques de pino-encino y de niebla en el noreste",
    poblacion: "Escasa y poco conocida",
    tamaño: "13 – 15 cm",
    peso: "50 g",
    sonido: "viento",
    desc: "Uno de los búhos más pequeños del planeta. A pesar de su diminuto tamaño, es un cazador feroz que puede capturar presas del mismo peso que él.",
    amenazas: [
      "Deforestación de los bosques de montaña en Tamaulipas y San Luis Potosí.",
      "Cambio climático que altera su limitado hábitat.",
      "Predación por aves de mayor tamaño."
    ],
    curiosidades: [
      { t: "Miniatura", txt: "Es tan pequeño que cabe perfectamente en la palma de una mano." },
      { t: "Falso ojo", txt: "Tiene dos manchas en la nuca que parecen ojos para engañar a depredadores." }
    ],
  },
  {
    id: "teporingo",
    nombre: "Teporingo",
    cient: "Romerolagus diazi",
    emoji: "🐇",
    categoria: "Mamífero · Lagomorfo",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Faldas altas de los volcanes (Popocatépetl e Iztaccíhuatl)",
    poblacion: "< 7,000 individuos estimados",
    tamaño: "23 – 32 cm",
    peso: "500 g",
    sonido: "viento",
    desc: "También llamado zacatuche, es el conejo más pequeño de México. Vive únicamente en las zonas de pastizales de alta montaña de los grandes volcanes centrales.",
    amenazas: [
      "Incendios forestales descontrolados que destruyen su alimento (zacatón).",
      "Expansión de la frontera agrícola y ganadera hacia las alturas.",
      "Turismo desordenado en las faldas de los volcanes."
    ],
    curiosidades: [
      { t: "Fósil viviente", txt: "Es una especie primitiva que casi no ha cambiado en miles de años." },
      { t: "Canto", txt: "A diferencia de otros conejos, emite sonidos agudos para avisar de peligro." }
    ],
  },
  {
    id: "tiburon-ballena",
    nombre: "Tiburón Ballena",
    cient: "Rhincodon typus",
    emoji: "🦈",
    categoria: "Pez · Rhincodontidae",
    estado: "EN PELIGRO",
    habitat: "Océanos tropicales de aguas cálidas",
    poblacion: "En descenso global",
    tamaño: "10 – 12 metros (máximo 20 m)",
    peso: "11 – 15 toneladas",
    sonido: "oceano",
    desc: "El pez más grande del mundo. Es un gigante pacífico que visita cada año las costas de Quintana Roo y Baja California para alimentarse de plancton. Su presencia es vital para la salud de los mares.",
    amenazas: [
      "Pesca incidental en redes de alta mar.",
      "Turismo de nado no regulado que los estresa y golpea con barcos.",
      "Ingesta masiva de microplásticos suspendidos en el agua."
    ],
    curiosidades: [
      { t: "Huellas", txt: "Sus manchas son únicas en cada individuo, como una huella dactilar." },
      { t: "Pacífico", txt: "No tiene dientes funcionales; filtra el agua para comer seres microscópicos." }
    ],
  },
  {
    id: "tillandsia-chiapas",
    nombre: "Tillandsia de Chiapas",
    cient: "Tillandsia chiapensis",
    emoji: "🌸",
    categoria: "Planta · Bromelia",
    estado: "VULNERABLE",
    habitat: "Acantilados verticales de Chiapas",
    poblacion: "Escasa y localizada",
    tamaño: "20 – 30 cm",
    peso: "—",
    sonido: "selva",
    desc: "Planta de aire espectacular con hojas plateadas y flores de color rosa intenso. Crece exclusivamente en las paredes rocosas de ciertos cañones en Chiapas.",
    amenazas: [
      "Recolección ilegal para fines ornamentales.",
      "Destrucción de su microclima por cambio de uso de suelo.",
      "Erosión de las paredes de roca donde habita."
    ],
    curiosidades: [
      { t: "Sin raíces", txt: "Usa sus raíces solo para sujetarse a la roca, no para comer." },
      { t: "Comida del aire", txt: "Obtiene todos sus nutrientes del polvo y la lluvia que atrapa el aire." }
    ],
  },
  {
    id: "tortuga-caguama",
    nombre: "Tortuga Caguama",
    cient: "Caretta caretta",
    emoji: "🐢",
    categoria: "Reptil · Cheloniidae",
    estado: "EN PELIGRO",
    habitat: "Océanos abiertos y playas de anidación mexicanas",
    poblacion: "En declive histórico",
    tamaño: "90 – 110 cm",
    peso: "80 – 150 kg",
    sonido: "oceano",
    desc: "Conocida por su gran cabeza y mandíbulas fuertes. Realiza migraciones transoceánicas de miles de kilómetros antes de volver a nacer en las playas mexicanas donde nació.",
    amenazas: [
      "Pesca accidental en redes de arrastre.",
      "Saqueo de sus nidos por humanos y animales domésticos.",
      "Contaminación de las playas por plásticos y luces urbanas."
    ],
    curiosidades: [
      { t: "Navegante", txt: "Puede cruzar el Océano Pacífico entero para buscar comida." },
      { t: "Mandíbula", txt: "Su mordida puede romper fácilmente los caparazones de caracoles y cangrejos." }
    ],
  },
  {
    id: "tortuga-cuatro-cienegas",
    nombre: "Tortuga de Cuatro Cienegas",
    cient: "Terrapene coahuila",
    emoji: "🐢",
    categoria: "Reptil · Tortuga",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Pozas y humedales de Cuatro Ciénegas, Coahuila",
    poblacion: "< 2,500 individuos",
    tamaño: "15 cm",
    weight: "500 – 800 g",
    sonido: "lluvia",
    desc: "La única tortuga de caja acuática del planeta. Vive en las pozas cristalinas del desierto, siendo una reliquia de un tiempo en que el norte de México era más húmedo.",
    amenazas: [
      "Desecación de las pozas por extracción excesiva de agua.",
      "Tráfico ilegal como mascota exótica.",
      "Contaminación de los manantiales por desechos agrícolas."
    ],
    curiosidades: [
      { t: "Caja", txt: "Puede cerrarse totalmente dentro de su caparazón gracias a una bisagra ventral." },
      { t: "Nadadora", txt: "A pesar de ser una tortuga de caja, pasa casi todo el tiempo sumergida." }
    ],
  },
  {
    id: "tortuga-laud",
    nombre: "Tortuga Laúd",
    cient: "Dermochelys coriacea",
    emoji: "🐢",
    categoria: "Reptil · Dermochelyidae",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Océanos abiertos, anida en playas del Pacífico mexicano",
    poblacion: "Estimada en menos de 1,000 hembras anidando en México",
    tamaño: "1.8 – 2.2 metros",
    peso: "300 – 600 kg",
    sonido: "oceano",
    desc: "La tortuga marina más grande del mundo. Su caparazón no es duro como el de otras, sino que tiene una textura similar al cuero, lo que le permite bucear a profundidades increíbles.",
    amenazas: [
      "Ingesta de bolsas plásticas que confunden con medusas (su alimento).",
      "Saqueo de nidos y pérdida de playas por construcciones.",
      "Captura accidental en redes de pesca de alta mar."
    ],
    curiosidades: [
      { t: "Buceo profundo", txt: "Puede sumergirse hasta los 1,200 metros de profundidad." },
      { t: "Viajera", txt: "Viajan desde Indonesia o Alaska para anidar en las costas de Oaxaca y Guerrero." }
    ],
  },
  {
    id: "totoaba",
    nombre: "Totoaba",
    cient: "Totoaba macdonaldi",
    emoji: "🐟",
    categoria: "Pez · Sciaenidae",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Aguas someras del Alto Golfo de California",
    poblacion: "Extremadamente reducida",
    tamaño: "Hasta 2 metros",
    peso: "Hasta 100 kg",
    sonido: "oceano",
    desc: "Pez gigante exclusivo de México. Su vejiga natatoria es trágicamente codiciada en Asia, lo que ha generado una crisis de pesca ilegal que amenaza con extinguirla a ella y a la vaquita marina.",
    amenazas: [
      "Pesca ilegal masiva para el tráfico de sus buches (vejigas natatorias).",
      "Pérdida de flujo de agua dulce del Río Colorado.",
      "Contaminación de sus zonas de desove."
    ],
    curiosidades: [
      { t: "Cocaína del mar", txt: "Su vejiga natatoria puede costar más que el oro en el mercado negro." },
      { t: "Longevidad", txt: "Pueden vivir más de 25 años y crecen hasta ser más grandes que un humano." }
    ],
  },
  {
    id: "tuza-tropical",
    nombre: "Tuza Tropical",
    cient: "Orthogeomys hispidus",
    emoji: "🐭",
    categoria: "Mamífero · Roedor",
    estado: "AMENAZADO",
    habitat: "Selvas y zonas agrícolas de Veracruz y Oaxaca",
    poblacion: "En declive por persecución",
    tamaño: "30 – 40 cm",
    peso: "500 – 800 g",
    sonido: "selva",
    desc: "Roedor subterráneo de gran tamaño con incisivos muy fuertes. Sus túneles son fundamentales para airear el suelo de las selvas y permitir que el agua llegue a las raíces de los árboles.",
    amenazas: [
      "Persecución y matanza por parte de agricultores.",
      "Uso de venenos en campos de cultivo.",
      "Fragmentación de las selvas que reduce su área de excavación."
    ],
    curiosidades: [
      { t: "Bolsas", txt: "Tienen bolsas en las mejillas fuera de la boca para cargar comida sin ensuciarla." },
      { t: "Ingeniería", txt: "Sus sistemas de túneles pueden ser muy complejos y compartidos por varios individuos." }
    ],
  },
  {
    id: "vaquita-marina",
    nombre: "Vaquita Marina",
    cient: "Phocoena sinus",
    emoji: "🐬",
    categoria: "Mamífero · Phocoenidae",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Pequeña zona del Alto Golfo de California, México",
    poblacion: "< 15 individuos (situación de extinción inminente)",
    tamaño: "1.4 – 1.5 metros",
    peso: "30 – 55 kg",
    sonido: "oceano",
    desc: "El cetáceo más pequeño y amenazado del mundo. Solo vive en México. Su timidez y su pequeño tamaño la hacen casi invisible, pero hoy es el símbolo mundial de la lucha por la conservación.",
    amenazas: [
      "Muerte accidental en redes de enmalle usadas para pescar ilegalmente totoaba.",
      "Consanguinidad debido a la bajísima población restante.",
      "Contaminación acumulada en el Alto Golfo."
    ],
    curiosidades: [
      { t: "Panda del mar", txt: "Tiene manchas negras alrededor de los ojos y la boca que parecen maquillaje." },
      { t: "Única", txt: "Es la única marsopa que habita en aguas tan cálidas." }
    ],
  },
  {
    id: "zapatilla-dama",
    nombre: "Zapatilla de Dama",
    cient: "Cypripedium irapeanum",
    emoji: "🌸",
    categoria: "Planta · Orquídea",
    estado: "EN PELIGRO CRÍTICO",
    habitat: "Bosques de pino-encino bien conservados",
    poblacion: "Extremadamente rara y dispersa",
    tamaño: "40 – 60 cm de altura",
    peso: "—",
    sonido: "viento",
    desc: "Una de las orquídeas terrestres más espectaculares de México. Su flor tiene un pétalo modificado en forma de bolsa o zapatilla de color amarillo intenso que atrae a polinizadores específicos.",
    amenazas: [
      "Recolección ilegal masiva por su belleza ornamental.",
      "Incendios forestales que destruyen los hongos del suelo de los que depende.",
      "Deforestación de los bosques templados de montaña."
    ],
    curiosidades: [
      { t: "Trampa", txt: "Los insectos caen en la 'zapatilla' y solo pueden salir por un túnel que los llena de polen." },
      { t: "Hongo", txt: "Depende de un hongo del suelo para que sus semillas puedan germinar." }
    ],
  },

  // ─── PUEDES CONTINUAR AGREGANDO ESPECIES AQUÍ ───────────
  // Copia el bloque de arriba, cambia los datos y pega.
  // El catálogo y la página de especie se actualizan solos.

];

/* No edites nada debajo de esta línea */
if(typeof module !== 'undefined') module.exports = ESPECIES;
