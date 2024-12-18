export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Conceptos fundamentales de diversidad e inclusión',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Definición de diversidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de diversidad',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Unidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Texto destacado',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Llamado a la acción - Recursos externos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Audios',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Listado',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Línea de tiempo',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Unidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Carrusel',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tablas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ainscow, M., & Miles, S. (2008). Developing Inclusive Schools: A Collaborative Approach. Routledge.',
    },
    {
      referencia:
        'Bornstein, K. (1994). Gender Outlaw: On Men, Women and the Rest of Us. Vintage.',
    },
    {
      referencia:
        'Butler, J. (1990). Gender Trouble: Feminism and the Subversion of Identity. Routledge.',
    },
    {
      referencia:
        'Cantábrica, C. (2023). Descubre las Diferencias entre Igualdad e Inclusión. Efecto Ping Pong.',
      link:
        'https://educainclusion.com/cual-es-la-diferencia-entre-igualdad-e-inclusion',
    },
    {
      referencia:
        'Constitución Política de Colombia. (1991). Constitución Política de Colombia de 1991.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/constitucion_politica_1991.html',
    },
    {
      referencia:
        'Congreso de Colombia. (1993). Ley 70 de 1993: Por la cual se desarrolla el artículo transitorio 55 de la Constitución Política.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=33925',
    },
    {
      referencia:
        'Congreso de Colombia. (2010). Ley 1381 de 2010: Regula el reconocimiento, fomento, protección, uso, preservación y fortalecimiento de las lenguas de los grupos étnicos de Colombia.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=35628',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). Ley 1516 de 2012: Por la cual se aprueba la Convención sobre la Protección y Promoción de la Diversidad de las Expresiones Culturales.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=44383',
    },
    {
      referencia:
        'Congreso de Colombia. (2011). Ley 1448 de 2011: Por la cual se dictan medidas de atención, asistencia y reparación integral a las víctimas del conflicto armado interno.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=43285',
    },
    {
      referencia:
        'Congreso de Colombia. (2001). Ley 725 de 2001: Establece el Día Nacional de la Afrocolombianidad.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4482',
    },
    {
      referencia:
        'El Sector de la Inclusión Social. (2018). Prosperidad Social.',
      link:
        'https://prosperidadsocial.gov.co/la-entidad/el-sector-de-la-inclusion-social/?form=MG0AV3',
    },
    {
      referencia:
        'Fundación ConTrabajo. (2022). "¿Qué es inclusión laboral?" Fundación ConTrabajo',
    },
    {
      referencia:
        'Gallegos García, Y., & García Ramírez, M. T. (2022). Inclusión digital educativa: una cartografía conceptual. Apertura, 14(1), 1-32.',
      link: 'https://doi.org/10.32870/ap.v14n1.2118',
    },
    {
      referencia: 'Giddens, A. (2013). Sociology (7th ed.). Polity Press.',
    },
    {
      referencia:
        'Gómez, J. (2015). La importancia de la legislación en la inclusión social. Editorial Universitaria.',
    },
    {
      referencia:
        'Kiss, T. (2024). Diversidad cultural - Qué es, tipos, importancia y ejemplos.',
      link: 'https://concepto.de/diversidad-cultural/',
    },
    {
      referencia:
        'MATA BENITO, P., MELERO SÁNCHEZ, H., & AGUADO ODINA, M. T. (2021). Diversidad e igualdad en educación. UNED.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/189579?page=29',
    },
    {
      referencia:
        'Millán Aguilar, P., Arredondo Trapero, F. G., & Vázquez Parra, J. C. (2018). "Inclusión laboral, paz y sostenibilidad." Methaodos. Revista de Ciencias Sociales, 6(2), 174-189.',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC). (2023). Cierre del tercer trimestre de 2023: 47.4 millones de accesos a Internet en Colombia.',
      link: 'https://www.mintic.gov.co',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Ley 1618 de 2013.',
      link: 'www.minsalud.gov.co',
    },
    {
      referencia:
        'Monco, B. (S/f). Antropología del género. Editorial Síntesis.',
    },
    {
      referencia:
        'ONU. (2006). Convención sobre los Derechos de las Personas con Discapacidad. Organización de las Naciones Unidas.',
    },
    {
      referencia:
        'Organización Internacional del Trabajo (OIT). (s.f.). "Inclusión laboral." OIT.',
    },
    {
      referencia: 'Rae.es. (S/f). Diversidad.',
      link: 'https://dle.rae.es/diversidad?m=form',
    },
    {
      referencia:
        'R.S.S (2023). Qué es la inclusión. Responsabilidad Social Empresarial y Sustentabilidad.',
      link:
        'https://responsabilidadsocial.net/inclusion-que-es-definicion-tipos-caracteristicas-y-ejemplos/',
    },
    {
      referencia:
        'Rawls, J. (1999). A Theory of Justice: Revised Edition. Harvard University Press.',
      link: 'https://doi.org/10.2307/j.ctvkjb25m',
    },
    {
      referencia:
        'Sen, A. (1999). Desarrollo y Libertad. Oxford University Press.',
    },
    {
      referencia:
        'SNIES. (2023). Informe de inscripciones en programas en línea 2023.',
      link: 'https://www.snies.gov.co',
    },
    {
      referencia:
        "Stiglitz, J. E. (2012). The Price of Inequality: How Today's Divided Society Endangers Our Future. W.W. Norton & Company.",
      link: 'https://doi.org/10.7916/d8-96ed-6058',
    },
    {
      referencia:
        'Thomas, D. A. (2018). Diversity as Strategy: How to Make Diversity Work for You. Harvard Business Review Press.',
    },
    {
      referencia:
        'Tomlinson, C. A. (2014). The Differentiated Classroom: Responding to the Needs of All Learners. ASCD.',
    },
    {
      referencia:
        'Tuckman, B. W. (1965). Developmental Sequence in Small Groups. Psychological Bulletin, 63(6), 384-399.',
    },
    {
      referencia:
        'UNESCO. (2009). Informe de la UNESCO sobre la Diversidad Cultural',
    },
    {
      referencia:
        'UNESCO. (2000). Índice de inclusión: desarrollando el aprendizaje y la participación en las escuelas.',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000138159',
    },
  ],
  glosario: [
    {
      termino: 'Agénero',
      significado:
        'persona que no se identifica con ningún género. Esta identidad puede implicar una sensación de ser sin género o de que el género no es relevante para la identidad personal.',
    },
    {
      termino: 'Diversidad',
      significado:
        'variedad de características y experiencias que hacen única a cada persona, incluyendo aspectos culturales, sociales, étnicos y de género.',
    },
    {
      termino: 'Diversidad Cultural',
      significado:
        'conjunto de distintas culturas que coexisten en un mismo espacio y que se reconocen y valoran mutuamente.',
    },
    {
      termino: 'Equidad',
      significado:
        'principio que busca corregir las desigualdades proporcionando a cada persona lo necesario para alcanzar las mismas oportunidades.',
    },
    {
      termino: 'Género Fluido',
      significado:
        'persona cuya identidad de género cambia con el tiempo, pudiendo identificarse en diferentes momentos con distintos géneros.',
    },
    {
      termino: 'Inclusión',
      significado:
        'integración plena y equitativa de todas las personas en la sociedad, sin importar sus diferencias, promoviendo un entorno respetuoso y participativo.',
    },
    {
      termino: 'No Binarias',
      significado:
        'personas que no se identifican exclusivamente como hombre o mujer, pudiendo combinar aspectos de ambos géneros o situarse entre ellos.',
    },
    {
      termino: 'Transgénero',
      significado:
        'persona cuya identidad de género no coincide con el sexo asignado al nacer, y que puede realizar una transición a través de cambios físicos, hormonales y/o legales.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
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
