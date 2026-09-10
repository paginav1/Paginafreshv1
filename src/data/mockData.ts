import { FruitItem, PackagingOption, AddOnItem, SubscriptionPlan, RecipeItem, TestimonialItem, FaqItem } from '../types';

export const FRUITS_DATA: FruitItem[] = [
  {
    id: 'arandanos-premium',
    name: 'Arándanos Biloxi & Emerald (250g)',
    scientificName: 'Vaccinium corymbosum',
    variety: 'Biloxi / Emerald Alta Montaña',
    category: 'frescos',
    tagline: 'Crocantes, dulces y con pruina natural intacta',
    description: 'Nuestra fruta insignia. Cultivados a más de 2.450 m.s.n.m. bajo sol andino y neblina matutina, lo que potencia su concentración de antioxidantes y produce una pruina natural perfecta.',
    pricePerGram: 28, // 28 COP / g -> $7.000 COP los 250g
    defaultGramUnit: 250,
    standardPrice: 7000,
    presentation: 'Clamshell ventilado 250g',
    imageUrl: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Arándanos frescos variedad Biloxi y Emerald en clamshell de 250g, cosechados a 2.480 msnm con pruina natural intacta y agricultura responsable',
    brix: '14.5° - 16° Brix',
    altitude: '2.480 m.s.n.m.',
    benefits: ['Rico en antocianinas', 'Mejora la memoria y concentración', 'Bajo índice glucémico', '100% libre de ceras artificiales'],
    shelfLife: '14 - 18 días en refrigeración',
    inStock: true,
    popular: true,
  },
  {
    id: 'arandanos-jumbo-gourmet',
    name: 'Arándanos Jumbo Selección Especial (500g)',
    scientificName: 'Vaccinium corymbosum (Jumbo)',
    variety: 'Selección Calibre >18mm',
    category: 'jumbo',
    tagline: 'Bayas gigantes seleccionadas a mano, máxima dulzura y crocancia',
    description: 'Frutos de calibre gigante escogidos a mano durante la cosecha. Sorprenden por su gran tamaño, estallido de jugo en boca y alto grado de concentración de azúcares naturales.',
    pricePerGram: 30, // $15.000 COP los 500g
    defaultGramUnit: 500,
    standardPrice: 15000,
    presentation: 'Eco-estuche rígido 500g',
    imageUrl: 'https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Arándanos Jumbo Selección Especial de más de 18mm de diámetro, cosechados a mano en cultivo andino de alta montaña con buenas prácticas agrícolas',
    brix: '15.5° - 17° Brix',
    altitude: '2.520 m.s.n.m.',
    benefits: ['Calibre extra superior >18mm', 'Mayor textura y firmeza', 'Selección manual de máxima categoría'],
    shelfLife: '14 - 18 días en refrigeración',
    inStock: true,
    popular: true,
  },
  {
    id: 'arandanos-familiares-1kg',
    name: 'Caja Familiar Ahorro de Arándanos (1.000g)',
    scientificName: 'Vaccinium corymbosum (Grado Exportación)',
    variety: 'Biloxi & Emerald Grado 1',
    category: 'familiar',
    tagline: '1 Kilo de arándanos frescos recién cosechados al mejor precio',
    description: 'La opción más conveniente y rendidora para hogares, amantes de los smoothies y el consumo diario. 1.000 gramos de arándanos frescos de primera calidad directamente del campo.',
    pricePerGram: 25, // $25.000 COP el kilo (1000g)
    defaultGramUnit: 1000,
    standardPrice: 25000,
    presentation: 'Caja Kraft respirable 1.000g',
    imageUrl: 'https://images.unsplash.com/photo-1563746098251-d35aef196e83?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Caja familiar de 1kg de arándanos frescos de alta montaña grado exportación, libres de ceras químicas y cosechados con agricultura limpia',
    brix: '14.5° - 16° Brix',
    altitude: '2.450 m.s.n.m.',
    benefits: ['Formato ahorro familiar', 'Cosechado en el amanecer del despacho', 'Ideal para consumo de toda la semana'],
    shelfLife: '14 - 18 días en refrigeración',
    inStock: true,
    popular: true,
  },
  {
    id: 'arandanos-congelados-iqf',
    name: 'Arándanos Congelados IQF Grado A (500g)',
    scientificName: 'Vaccinium corymbosum (IQF)',
    variety: 'Congelación Rápida Individual',
    category: 'congelados',
    tagline: 'Enteros y sueltos para batidos, repostería y larga conservación',
    description: 'Arándanos seleccionados congelados individualmente (IQF) horas después de su cosecha. No forman bloques de hielo y conservan el 100% de sabor, vitaminas y antioxidantes.',
    pricePerGram: 22, // $11.000 COP los 500g
    defaultGramUnit: 500,
    standardPrice: 11000,
    presentation: 'Bolsa hermética con cierre fácil 500g',
    imageUrl: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Arándanos ultracongelados IQF grado A en bolsa resellable de 500g, granos sueltos enteros de alta montaña y agricultura limpia para repostería y batidos',
    brix: '14° - 15° Brix',
    altitude: '2.480 m.s.n.m.',
    benefits: ['Ultracongelados sin perder nutrientes', 'Granos 100% sueltos sin apelmazar', 'Durabilidad de hasta 12 meses en congelador'],
    shelfLife: '12 meses en congelador (-18°C)',
    inStock: true,
  }
];

export const PACKAGING_OPTIONS: PackagingOption[] = [
  {
    id: 'pack-eco-kraft',
    name: 'Caja Kraft Biodegradable',
    description: 'Elaborada con cartón virgen reciclable y visor de almidón de maíz. Sostenible y protege la fruta fresca.',
    extraPrice: 0,
    iconName: 'Package',
    bestFor: 'Uso diario en familia y cocina consciente',
    badge: 'Sin costo adicional'
  },
  {
    id: 'pack-canasta-regalo',
    name: 'Canasta Artesanal de Fique con Lazo',
    description: 'Canasta tejida a mano por artesanas andinas, forrada en papel encerado vegetal y lazo decorativo.',
    extraPrice: 14000,
    iconName: 'Gift',
    bestFor: 'Obsequios de cumpleaños, aniversarios y detalles saludables',
    badge: 'Favorito para regalo'
  },
  {
    id: 'pack-clamshell-refrigerable',
    name: 'Set Clamshells rPET Ventilados',
    description: 'Contenedores individuales transparentes de plástico reciclado post-consumo que caben perfecto en gavetas de nevera.',
    extraPrice: 3500,
    iconName: 'Snowflake',
    bestFor: 'Mayor duración y control de porciones individuales'
  },
  {
    id: 'pack-corporativo-catering',
    name: 'Caja Gourmet Exhibición Catering',
    description: 'Caja amplia de doble fondo con divisiones acolchadas, lista para poner en mesas de eventos o buffets.',
    extraPrice: 18000,
    iconName: 'Award',
    bestFor: 'Eventos corporativos, restaurantes y reposterías'
  }
];

export const ADDONS_DATA: AddOnItem[] = [
  {
    id: 'miel-finca',
    name: 'Miel Cruda de Nuestras Abejas',
    description: 'Miel 100% pura y sin pasteurizar cosechada en los apiarios de polinización de la finca.',
    price: 18000,
    unit: 'Frasco de vidrio 300g',
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Frasco de miel cruda pura de abejas polinizadoras de cultivos de arándanos de alta montaña con agricultura responsable'
  },
  {
    id: 'granola-artesanal',
    name: 'Granola Andina Horneada con Semillas',
    description: 'Avena integral tostada con almendras, semillas de calabaza, canela y chips de coco.',
    price: 15000,
    unit: 'Bolsa kraft resellable 350g',
    imageUrl: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Bolsa de granola andina artesanal horneada con avena integral, frutos secos y semillas para acompañar arándanos frescos'
  },
  {
    id: 'mermelada-arandanos',
    name: 'Mermelada de Arándanos 0% Azúcar',
    description: 'Preparada únicamente con nuestros arándanos de alta montaña, zumo de limón y pectina natural.',
    price: 16500,
    unit: 'Tarro gourmet 230g',
    imageUrl: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Tarro de mermelada artesanal 0% azúcar añadida elaborada con arándanos frescos de alta montaña y agricultura limpia'
  }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'plan-esencial',
    title: 'Plan Esencial Frescura',
    subtitle: 'Para personas individuales o parejas que aman los desayunos saludables.',
    weight: '1.5 kg al mes (375g por semana)',
    priceMonth: 46000,
    deliveryFrequency: 'Entregas semanales o quincenales a tu elección',
    idealFor: '1 - 2 personas',
    features: [
      'Arándanos Biloxi seleccionados de cosecha fresca semanal',
      'Despacho en 24h tras la recolección matutina',
      '10% de descuento incluido respecto al precio por gramo',
      'Pausa o cancela tu suscripción en cualquier momento',
      'Prioridad de cosecha los días lunes y jueves'
    ]
  },
  {
    id: 'plan-familiar',
    title: 'Plan Familiar Vitalidad',
    subtitle: 'El favorito de los hogares con niños y amantes de los smoothies.',
    weight: '3.5 kg al mes (875g por semana)',
    priceMonth: 95000,
    deliveryFrequency: 'Entregas semanales los martes o viernes',
    isPopular: true,
    idealFor: '3 - 5 personas',
    features: [
      'Arándanos frescos de alta montaña calibre superior',
      'Envío a domicilio 100% gratuito todas las semanas',
      '18% de ahorro sobre precio regular',
      '1 Frasco de Miel Cruda de la Finca gratis cada mes',
      'Acceso exclusivo a cosechas limitadas de temporada',
      'Cajas ecológicas retornables con bono verde'
    ]
  },
  {
    id: 'plan-gourmet-pro',
    title: 'Plan Gourmet & Negocios',
    subtitle: 'Diseñado para hogares de alto consumo, repostería casera o cafeterías specialty.',
    weight: '7.0 kg al mes (1.75 kg por semana)',
    priceMonth: 175000,
    deliveryFrequency: '2 entregas semanales programadas',
    idealFor: 'Familias grandes, fitness & pequeños negocios',
    features: [
      'Calibre Jumbo Premium garantizado en cada entrega',
      'Envíos prioritarios refrigerados sin costo',
      '25% de ahorro total garantizado',
      'Atención personalizada con agrónomo vía WhatsApp VIP',
      'Invitación especial para visita guiada a nuestra finca',
      'Empaques grado alimentario certificados con trazabilidad'
    ]
  }
];

export const CERTIFICATIONS_LIST = [
  {
    id: 'global-gap',
    title: 'GLOBALG.A.P. Certified',
    code: 'GGN: 4063061238910',
    description: 'Estándar internacional de referencia que certifica inocuidad alimentaria rigurosa, trazabilidad completa de cosecha y sostenibilidad ambiental.'
  },
  {
    id: 'grasp',
    title: 'Evaluación Social GRASP',
    code: 'GLOBALG.A.P. Risk Assessment on Social Practice',
    description: 'Módulo auditado de responsabilidad social que garantiza el bienestar, salud, seguridad y derechos laborales justos de nuestros trabajadores agrícolas.'
  },
  {
    id: 'bpa-ica',
    title: 'BPA ICA Colombia',
    code: 'Certificado Sanitario ICA N° 25-04-0018',
    description: 'Acreditación oficial del Instituto Colombiano Agropecuario de producción limpia, inocua y libre de contaminantes.'
  },
  {
    id: 'polinizacion-biofabrica',
    title: 'Polinización & Biofábrica',
    code: 'Economía Circular & 40+ Colmenas',
    description: 'Polinización natural activa con abejas nativas y biofábrica propia que convierte 100% de las podas en abonos orgánicos vivos.'
  }
];

export const RECIPES_DATA: RecipeItem[] = [
  {
    id: 'smoothie-bowl-antioxidante',
    title: 'Bowl Andino de Arándanos & Granola',
    prepTime: '10 min',
    difficulty: 'Fácil',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Bowl antioxidante preparado con arándanos frescos de alta montaña, granola andina artesanal y miel pura de finca con agricultura limpia',
    description: 'Un desayuno revitalizante rico en polifenoles que te mantendrá con energía durante todo el día.',
    ingredients: [
      '150g de Arándanos Fresh Pick congelados',
      '1 banano maduro congelado',
      '1/2 taza de leche de almendras o yogurt griego natural',
      '1 cda de miel cruda de la finca',
      'Topping: Granola andina, semillas de chía y arándanos frescos enteros'
    ],
    instructions: [
      'Licuar los arándanos con el banano y la leche vegetal a velocidad alta hasta lograr textura espesa.',
      'Servir de inmediato en un cuenco hondo.',
      'Decorar con arándanos frescos crocantes, un hilo de miel y la granola artesanal.'
    ]
  },
  {
    id: 'torta-rustica-berries',
    title: 'Galette Rústica de Arándanos Andinos',
    prepTime: '35 min',
    difficulty: 'Intermedio',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Galette rústica dorada horneada con arándanos enteros de alta montaña recién cosechados con agricultura responsable',
    description: 'Una galette rústica dorada que resalta los jugos naturales y el brillo de nuestros arándanos recién recolectados.',
    ingredients: [
      '350g de Arándanos Frescos Fresh Pick',
      '1 lámina de masa quebrada artesanal',
      '2 cucharadas de panela pulverizada o azúcar morena orgánica',
      'Ralladura de 1 limón verde y canela al gusto'
    ],
    instructions: [
      'Extender la masa sobre papel vegetal en una bandeja de horno.',
      'Mezclar con suavidad los arándanos con la ralladura y la panela.',
      'Colocar los arándanos en el centro y doblar los bordes rústicamente hacia adentro.',
      'Hornear a 190°C por 25 minutos hasta dorar la corteza. Servir tibia.'
    ]
  },
  {
    id: 'infusion-tonica-berries',
    title: 'Limonada Helada de Arándanos & Menta',
    prepTime: '5 min',
    difficulty: 'Muy fácil',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Limonada helada refrescante con arándanos frescos de alta montaña macerados y hojas de menta de cultivo limpio',
    description: 'Bebida de hidratación alcalina con arándanos frescos macerados, menta de huerta y hielo picado.',
    ingredients: [
      '1 taza de arándanos frescos Fresh Pick',
      'Jugo de 2 limones frescos',
      'Hojas de menta o hierbabuena fresca',
      '1 litro de agua con o sin gas',
      'Hielo al gusto'
    ],
    instructions: [
      'Macerar ligeramente los arándanos y la menta en el fondo de una jarra de vidrio para soltar su jugo azulado.',
      'Añadir el jugo de limón recién exprimido y el hielo abundante.',
      'Completar con agua fría y dejar reposar 5 minutos antes de disfrutar.'
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Carolina Velásquez',
    role: 'Chef Pastelera & Propietaria de Café Dulce Cacao',
    city: 'Bogotá, Colombia',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    imageAlt: 'Carolina Velásquez, chef pastelera cliente de arándanos frescos de alta montaña Fresh Pick en Bogotá',
    rating: 5,
    comment: 'Trabajar con Fresh Pick cambió el estándar de nuestras tartaletas. El calibre de los arándanos es gigante y nunca vienen húmedos ni golpeados. El pedido personalizado nos permite pedir la fruta en su punto exacto.',
    verifiedOrder: 'Pedido Personalizado recurrente (4 kg/semana)'
  },
  {
    id: 'test-2',
    name: 'Dr. Santiago Restrepo',
    role: 'Médico Deportólogo y Maratonista',
    city: 'Medellín, Colombia',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    imageAlt: 'Dr. Santiago Restrepo, médico deportólogo que consume arándanos de alta montaña cultivados con agricultura responsable',
    rating: 5,
    comment: 'Compro la Caja Familiar de Arándanos semanalmente. Se nota la diferencia de la altitud: son mucho más dulces y la cáscara cruje al morder. Mis hijos ahora comen arándanos frescos en vez de golosinas procesadas.',
    verifiedOrder: 'Suscripción Plan Familiar Vitalidad'
  },
  {
    id: 'test-3',
    name: 'Mariana Duarte',
    role: 'Nutricionista Clínica',
    city: 'Chía, Cundinamarca',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    imageAlt: 'Mariana Duarte, nutricionista clínica que recomienda arándanos frescos de alta montaña y agricultura limpia',
    rating: 5,
    comment: 'Poder enviar canastas personalizadas de regalo con mensaje dedicado a mis pacientes y familiares es genial. La presentación con cartón kraft y lazo de fique es hermosa y 100% responsable con el medio ambiente.',
    verifiedOrder: 'Canasta Artesanal Personalizada con Regalo'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'pedidos',
    question: '¿Cómo funciona la sección de pedidos personalizados de arándanos?',
    answer: 'En nuestra sección de pedidos personalizados puedes elegir exactamente la cantidad y formato de arándanos (clamshells 250g, selección jumbo 500g o cajas familiares de 1.000g), el tipo de empaque (desde cajas kraft eco hasta canastas de regalo), el nivel de maduración deseado, notas especiales o dedicatorias, y la fecha de entrega. Al finalizar puedes confirmar directamente en línea o enviarnos el resumen por WhatsApp con un solo clic.'
  },
  {
    id: 'faq-2',
    category: 'calidad',
    question: '¿Por qué los arándanos de Fresh Pick tienen mejor sabor y firmeza?',
    answer: 'Nuestros cultivos se encuentran situados a 2.480 metros sobre el nivel del mar en la cordillera andina. La amplitud térmica entre el día y la noche genera una acumulación superior de azúcares naturales (Brix entre 14.5° y 17°) y una consistencia crocante insuperable. Además, practicamos polinización 100% natural con abejas nativas y no usamos ceras artificiales.'
  },
  {
    id: 'faq-3',
    category: 'entregas',
    question: '¿Cuánto tardan en entregar y cómo garantizan la cadena de frío?',
    answer: 'Recolectamos los arándanos a primera hora del amanecer y los despachamos en vehículos acondicionados el mismo día o a la mañana siguiente (en menos de 24 horas tras la cosecha). Para envíos locales en Bogotá, Sabana, Chía, Cajicá, Cota y municipios aledaños la entrega se realiza el mismo día programado. También contamos con envíos exprés a principales ciudades.'
  },
  {
    id: 'faq-4',
    category: 'pagos',
    question: '¿Qué métodos de pago tienen disponibles?',
    answer: 'Aceptamos transferencias inmediatas por Nequi y Daviplata, transferencias Bancolombia / PSE, tarjetas de crédito y débito, y pago contraentrega en efectivo o datafono al recibir tu pedido en tu puerta.'
  },
  {
    id: 'faq-5',
    category: 'pedidos',
    question: '¿Hay un monto mínimo para hacer un pedido personalizado?',
    answer: 'No tenemos monto mínimo de compra. Sin embargo, para todos los pedidos superiores a $60.000 COP el envío es completamente GRATIS en nuestra zona de cobertura principal.'
  },
  {
    id: 'faq-6',
    category: 'calidad',
    question: '¿Qué certificados respaldan la inocuidad y responsabilidad de sus arándanos?',
    answer: 'Contamos con la certificación internacional GLOBALG.A.P. (norma mundial para buenas prácticas e inocuidad agrícola) y la acreditación social GRASP (GLOBALG.A.P. Risk Assessment on Social Practice), que certifica el bienestar, salud y condiciones laborales dignas de nuestros recolectadores y trabajadores. También contamos con registro BPA otorgado por el ICA.'
  }
];
