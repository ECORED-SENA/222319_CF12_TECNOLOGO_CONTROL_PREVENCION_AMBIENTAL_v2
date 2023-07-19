export default {
  global: {
    componenteFormativo:
      'Gestionar integralmente el manejo de residuos según normativa vigente',
    descripcionCurso:
      'El propósito de este componente es brindar orientación para la elaboración de un plan de gestión integral de residuos. Esto incluirá la gestión y diseño de estrategias para el manejo de residuos sólidos, basadas en el análisis del diagnóstico de residuos, para lograr su adecuada minimización, aprovechamiento, tratamiento y disposición final; en cumplimiento con la normativa. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos generales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Definición de compromiso organizacional, objetivos y metas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estrategias de formación y educación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Prevención y minimización de residuos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Segregación en la fuente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Código de colores en los recipientes',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Características de los recipientes             ',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Recolección y transporte interno de residuos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Almacenamiento de residuos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Control de plagas y técnicas de desinfección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Seguridad y Salud en el Trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Aprovechamiento, tratamiento y/o disposición final',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/222319_CF012_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alcaldía Santiago de Cali (2015) <em>La problemática principal del manejo de las basuras</em>.',
      link:
        'https://www.cali.gov.co/dagma/publicaciones/110286/la_problematica_principal_del_manejo_de_basuras/',
    },
    {
      referencia:
        'Área metropolitana del Valle de Aburrá (2016) <em>Manual para el manejo integral de residuos sólidos en el Valle de Aburrá</em>.',
      link:
        'https://docplayer.es/4184174-Manual-para-el-manejo-integral-de-residuos-en-el-valle-de-aburra.html',
    },
    {
      referencia:
        'Decreto 1713 de 2002. [Ministerio del Interior]. Por el cual se reglamenta la Ley 142 de 1994, la Ley 632 de 2000 y la Ley 689 de 2001, en relación con la prestación del servicio público de aseo, y el Decreto Ley 2811 de 1974 y la Ley 99 de 1993 en relación con la Gestión Integral de Residuos Sólidos. Diario Oficial No. 44.893 de Agosto 7 de 2002.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5542',
    },
    {
      referencia:
        'IGAC (2018) <em>Manejo de residuos peligrosos y especiales</em>.',
      link:
        'http://igacnet2.igac.gov.co/intranet/UserFiles/File/procedimientos/instructivos/2018/I20604-01%2018V6%20Manejo%20de%20residuos%20pe.pdf',
    },
    {
      referencia:
        'ICONTEC (2009) <em>GTC 24- Gestión Ambiental Residuos sólidos</em>. Guía para la separación en la fuente.',
      link: 'https://tienex.co/media/b096d37fcdee87a1f193271978cc2965.pdf',
    },
    {
      referencia:
        'ICONTEC (2005) <em>Norma técnica colombiana NTC1692 Transporte de mercancías peligrosas definiciones, clasificación, marcado, etiquetado y rotulado</em>',
      link:
        'https://web.mintransporte.gov.co/consultas/mercapeli/Reglamento/Anexos/NTC1692.pdf',
    },
    {
      referencia:
        'IMPALA (2017) <em>Plan de Gestión Integral de Residuos</em>.',
    },
    {
      referencia:
        '<em>MARBE Departamento químico (2016) Etiqueta SGA (Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos).</em>',
      link:
        'https://www.marbequimica.com.ar/etiqueta-sga-sistema-globalmente-armonizado-de-clasificacion-y-etiquetado-de-productos-quimicos/',
    },
    {
      referencia:
        'Minambiente (2020) <em>Gobierno unifica el código de colores para la separación de residuos en la fuente a nivel nacional</em>',
      link:
        'https://archivo.minambiente.gov.co/index.php/noticias-minambiente/4595-gobierno-unifica-el-codigo-de-colores-para-la-separacion-de-residuos-en-la-fuente-a-nivel-nacional#:~:text=Los%20colores%20para%20la%20presentaci%C3%B3n,negro%20(residuos%20no%20aprovechables).',
    },
    {
      referencia: 'PAMPA (2016). <em>POLÍTICA AMBIENTAL</em>.',
      link:
        'https://www.pampaltda.com.co/resources/politicas/PAMPA%20POL%C3%8DTICA%20AMBIENTAL%20PAMPA%20LTDA.pdf',
    },
    {
      referencia:
        'Resolución en proyecto 2020 [Ministerio de Salud y Protección Social] Por la cual se adopta el Manual para la Gestión Integral de Residuos Generados en la Atención en Salud y otras actividades, y se dictan otras disposiciones.',
      link:
        'https://consultorsalud.com/wp-content/uploads/2020/02/Manual-para-la-Gesti%C3%B3n-Integral-de-Residuos-Generados-en-la-Atenci%C3%B3n-en-Salud-proyecto-de-resolucion_compressed.pdf',
    },
    {
      referencia:
        'Resolución 2184 de 2019 [Ministerio de Ambiente y Desarrollo Sostenible] Por la cual se modifica la resolución 668 de 2016 sobre uso racional de bolsas plásticas y se adoptan otras disposiciones. Diciembre 26 de 2019.',
      link:
        'https://www.minambiente.gov.co/documento-entidad/resolucion-2184-de-2019/',
    },
    {
      referencia:
        'Universidad Industrial de Santander (2013) <em>Plan de gestión Integral de Residuos</em>.',
      link:
        'https://docplayer.es/16486008-Implementacion-del-plan-de-gestion-integral-de-residuos-en-la-universidad-industrial-de-santander-comite-tecnico-ambiental-y-sanitario.html',
    },
    {
      referencia:
        'Universidad Pontificia Bolivariana y Área metropolitana del Valle de Aburrá (2008). <em>Guía para el manejo integral de residuos</em>.',
      link:
        'https://www.sabaneta.gov.co/files/doc_varios/Gu%C3%ADa%20para%20el%20Manejo%20Integral%20de%20Residuos-%20Subsector%20instituciones%20educativas.pdf',
    },
    {
      referencia:
        'Universidad de los Andes (2012) <em>Procedimiento para la gestión y disposición de residuos sólidos y peligrosos</em>.',
      link:
        'https://gerenciacampus.uniandes.edu.co/content/download/4106/19770/file/Procedimiento%20para%20la%20Gesti%C3%B3n%20y%20Disposici%C3%B3n%20de%20Residuos.pdf',
    },
    {
      referencia:
        'Universidad de California (2011) Manejo integrado de plagas.',
      link:
        'https://wspehsu.ucsf.edu/wp-content/uploads/2015/10/IPM_CurriculumSpanish1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aprovechamiento y/o valorización',
      significado:
        'es el proceso de recuperar el valor remanente o el poder calorífico de los materiales que componen los residuos o desechos peligrosos, por medio de la recuperación, el reciclado o la regeneración.',
    },
    {
      termino: 'Disposición final',
      significado:
        'es el proceso de aislar y confinar los residuos o desechos peligrosos, en especial los no aprovechables, en lugares especialmente seleccionados, diseñados y debidamente autorizados, para evitar la contaminación y los daños o riesgos a la salud humana y al ambiente.',
    },
    {
      termino: 'Gestión',
      significado:
        'es el conjunto de actividades orientadas a dar a los residuos sanitarios el destino final adecuado de acuerdo con las características de cada residuo.',
    },
    {
      termino: 'Gestión integral de residuos sólidos',
      significado:
        'es el conjunto de operaciones y disposiciones encaminadas a dar a los residuos producidos el destino más adecuado desde el punto de vista ambiental, de acuerdo con sus características, volumen, procedencia, costos, tratamiento, posibilidades de recuperación, aprovechamiento, comercialización y disposición final. ',
    },
    {
      termino: 'Gestión interna de residuos',
      significado:
        'las acciones y estrategias que se aplican dentro de una organización para manejar de manera adecuada los residuos que se generan, desde su origen hasta su disposición final, con el fin de minimizar su impacto ambiental y proteger la salud pública.',
    },
    {
      termino: 'Manejo integral de residuos',
      significado:
        'es un conjunto de acciones y estrategias que se aplican para controlar y minimizar el impacto ambiental y sanitario de los residuos, desde su generación hasta su disposición final. Incluye la reducción en la fuente, la reutilización, el reciclaje, el tratamiento y la disposición final adecuada de los residuos, de acuerdo con la normativa ambiental y sanitaria aplicable.',
    },
    {
      termino: 'Residuo sólido o desecho',
      significado:
        'es cualquier material que ya no se necesita y se descarta, como basura doméstica, residuos industriales, entre otros. ',
    },
    {
      termino: 'Residuo peligroso',
      significado:
        'es un material que representa un riesgo significativo para la salud pública o el medio ambiente debido a sus características químicas, físicas o biológicas.',
    },
    {
      termino: 'Reciclaje',
      significado:
        'es el proceso mediante el cual se aprovechan y transforman los residuos sólidos recuperados y se devuelve a los materiales su potencialidad de reincorporación como materia prima para la fabricación de nuevos productos. El reciclaje puede constar de varias etapas: procesos de tecnologías limpias.',
    },
    {
      termino: 'Reutilización',
      significado:
        'es la prolongación y adecuación de la vida útil de los residuos sólidos recuperados y que mediante procesos, operaciones o técnicas devuelven a los materiales su posibilidad de utilización en su función original o en alguna relacionada, sin que para ello requieran procesos adicionales de transformación.',
    },
    {
      termino: 'Separación en la fuente',
      significado:
        'es la clasificación de los residuos sólidos en el sitio donde se generan para su posterior recuperación.',
    },
  ],
  complementario: [
    {
      tema: '4. Prevención y minimización de residuos.',
      referencia:
        'SENA (2012, 16 julio) Campaña cero papel SENA. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=37Y2a2R0ORg',
    },
    {
      tema: '6. Recolección y transporte interno de residuos.',
      referencia:
        'IPSE EnergiaZNI (2014, 19 diciembre) Programa Integral de Residuos Sólidos PGIRS en IPS. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tidePrlbXzU',
    },
    {
      tema: '8. Almacenamiento de residuos.',
      referencia:
        'Revista consultoría TV (2018, 23 octubre) ¿Cómo hacer un manejo integral de los residuos? [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MUTCWejAUAw',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable ecosistema de producción de RED Santander	',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Triana Guarnizo',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Juan Carlos Cárdenas Sánchez',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Zenith Chinchilla Ruedas',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Vilma Lucia Perilla ',
          cargo: 'Revisora metodológica y pedagógica',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Revisión y corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
