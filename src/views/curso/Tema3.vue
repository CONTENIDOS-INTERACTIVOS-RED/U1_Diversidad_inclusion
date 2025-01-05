<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Normas y legislaciones sobre diversidad e inclusión en diferentes contextos colombianos'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    p.mb-3 En esta temática, estaremos hablando de las normas y legislaciones que, en nuestro país, rigen la diversidad y la inclusión, pero primero conozcamos la definición de estos términos:
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src="@/assets/curso/t3/1.png", alt="")
      .col-sm-12.col-lg-7
        LineaTiempoD.color-acento-contenido.large
          div(numero="1" titulo="Norma") 
            p Las normas son pautas establecidas que regulan el comportamiento y las interacciones dentro de una sociedad. Estas directrices son vitales para mantener el orden y fomentar un ambiente en el que las personas se sientan seguras y respetadas. En el contexto de la diversidad y la inclusión, las normas juegan un papel fundamental al garantizar que todas las voces sean escuchadas y que se reconozcan las diferencias individuales.
            p Según Giddens (2013), las normas sociales no solo ayudan a definir lo que es aceptable, sino que también establecen un marco que promueve la igualdad de oportunidades para todos. Esto significa que las normas pueden ser una herramienta poderosa para combatir la discriminación y fomentar un entorno más inclusivo.
            p La importancia de estas normas se hace aún más evidente cuando se consideran sus implicaciones en la diversidad. Las organizaciones y sociedades que implementan normas inclusivas, no solo benefician a individuos de diferentes orígenes, sino que también mejoran su cohesión y productividad. Como señala Thomas (2018), la inclusión no es solo una cuestión ética, sino también una necesidad empresarial que puede llevar a una mayor innovación y éxito en el mercado. Al establecer normas que valoren la diversidad, se crea un espacio donde todas las personas pueden contribuir y prosperar, lo que en última instancia enriquece a toda la comunidad.
          div(numero="2" titulo="Legislación") 
            p Es el conjunto de normas y leyes que regulan el comportamiento de los individuos y las instituciones en una sociedad. En Colombia, la legislación es fundamental para garantizar derechos y deberes a todos los ciudadanos; en el caso de la diversidad, busca promover la inclusión de las personas en diferentes ámbitos de la vida social, como la educación y el trabajo. Estas leyes no solo establecen normas para la accesibilidad en espacios públicos, sino que también fomentan la participación activa de estas personas en la comunidad, contribuyendo a un entorno más diverso e inclusivo (Ministerio de Salud y Protección Social, 2013).
            p En el contexto de la diversidad, la legislación colombiana y autores como Gómez (2015), destacan que estas leyes son esenciales para construir una sociedad más equitativa, donde cada individuo pueda ejercer plenamente, sus derechos. Según el autor, "la legislación no solo debe existir, sino que debe ser implementada y respetada para lograr un verdadero cambio social" (Gómez, 2015).

    .bg-full-width.bg-fondo-5(data-aos="flip-up")
      .px-4.px-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .p-4
              .row.align-items-center
                .col-lg-auto.d-none.d-lg-block
                  img(src="@/assets/curso/t3/2.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 En conclusión, la norma y la legislación son pilares que no solo regulan las conductas, sino que también reflejan los valores de una sociedad, asegurando que se respeten los derechos y se mantenga el orden. 
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-7
        p.mb-3 Después de haber incursionado en la norma y legislación, vamos realizar un recorrido por las principales leyes colombianas que rigen la diversidad y la inclusión. En Colombia, diversas normas y legislaciones han sido establecidas para promover la diversidad y la inclusión. 
        p.mb-0 La Constitución Política de Colombia de 1991, reconoce la diversidad étnica y cultural del país, afirmando que el Estado está obligado a proteger y promover los derechos de todos los grupos étnicos y culturales.
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src="@/assets/curso/t3/3.png", alt="")

    .bg-5.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/t3/4.png', alt='')
        .col-lg
          .p-4
            p.mb-0 Esta disposición es fundamental para garantizar que las comunidades indígenas, afrodescendientes, raizales y otras minorías tengan sus derechos respetados y protegidos. La Constitución establece un marco legal que busca la inclusión y la igualdad de oportunidades para todos los ciudadanos, independientemente de su origen étnico o cultural.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Leyes colombianas sobre diversidad étnica
    p.mb-3 A continuación, conoceremos sobre 5 leyes fundamentales de nuestra diversidad étnica colombiana; consideramos que comprenderlas, asegura que los docentes cumplan con las leyes vigentes y eviten prácticas discriminatorias. Esto protege de posibles repercusiones legales, tanto a los estudiantes como a los educadores.
    .bg-7.p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-sm-12.col-lg-10
          ImagenInfografica.color-acento-contenido
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/t3/15.svg', alt='', style="max-width: 887px;").mx-auto

              .bg-white.p-3.br-10(x="20%" y="88%" numero="+")
                h5 Ley 70 de 1993
                p.mb-0 Establece medidas para la protección y promoción de los derechos de las comunidades afrodescendientes e indígenas, incluyendo el derecho a la tierra y la consulta previa.
              .bg-white.p-3.br-10(x="40%" y="10%" numero="+")
                h5 Ley 1381 del 2010	
                p.mb-0 Regula el reconocimiento, fomento, protección, uso, preservación y fortalecimiento de las lenguas de los grupos étnicos de Colombia, promoviendo sus derechos lingüísticos y culturales.
              .bg-white.p-3.br-10(x="57.5%" y="88%" numero="+")
                h5 Ley 1516 del 2012	
                p.mb-0 Aprueba la Convención sobre la Protección y Promoción de la Diversidad de las Expresiones Culturales, que busca proteger y promover la diversidad cultural y étnica en el país.
              .bg-white.p-3.br-10(x="76.3%" y="10%" numero="+")
                h5  Ley 1448 del 2011	
                p.mb-0 Dicta medidas de atención, asistencia y reparación integral, a las víctimas del conflicto armado interno, incluyendo a las comunidades étnicas afectadas.
              .bg-white.p-3.br-10(x="98%" y="88%" numero="+")
                h5 Ley 725 del 2001	
                p.mb-0 Establece el Día Nacional de la Afrocolombianidad, celebrado cada 20 de octubre, para reconocer y promover la cultura afrocolombiana.
    











    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t3/5.png", alt="")
      .col-sm-12.col-lg-8
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-12
            .p-4.bg-2
              .row.align-items-center
                .col-lg-auto.d-none.d-lg-block
                  img(src="@/assets/curso/t3/6.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Estas leyes reflejan el compromiso de Colombia con la protección y promoción de la diversidad étnica y cultural, asegurando que todas las comunidades tengan sus derechos respetados y promovidos. 
        p.mb-0 Para profundizar en el tema de diversidad étnica, lo invitamos a visitar el siguiente portal web, donde hablan más ampliamente sobre los pueblos indígenas, las comunidades afrocolombianas, los raizales, y el pueblo Rom o Gitano que habitan en nuestro país.

    .bg-full-width.bg-color-white.shadow-soft.mb-5(data-aos="flip-up")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg-12.mb-0
            .py-0.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto.d-none.d-lg-block
                  img(src="@/assets/template/bg-icono-link.svg", style="width: 60px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-0.mb-sm-0
                      h3.mb-1 Diversidad étnica en Colombia: 5 puntos clave
                      p.mb-0 Para conocer más sobre diversidad étnica en Colombia: 5 puntos clave, lo invitamos a consultar:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href='https://www.senalcolombia.tv/cultura/diversidad-etnica-colombia' target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Leyes colombianas sobre diversidad de género
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-9
        p.mb-0 En este espacio, estaremos conociendo sobre las principales leyes que abordan la diversidad de género; partiremos de nuestra Constitución Política de Colombia (1991), que busca garantizar la igualdad de oportunidades y derechos para todas las personas, sin discriminación por razones de sexo u orientación sexual.
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/t3/7.svg", alt="")
    .bg-full-width.bg-fondo-slider.mb-5(data-aos="flip-up")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src="@/assets/curso/t3/10.png")
            .col-sm-12.col-lg-7
              h5 Ley 1482 del 2011 
              p Establece sanciones penales para actos de discriminación por razones de raza, etnia, religión, nacionalidad, ideología política o filosófica, sexo u orientación sexual.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src="@/assets/curso/t3/11.png")
            .col-sm-12.col-lg-7
              h5 Decreto 762 del 2018
              p Adiciona un capítulo al Título 4 de la Parte 4 del Libro 2, del Decreto 1066 del 2015, adoptando la Política Pública para la garantía del ejercicio efectivo de los derechos de las personas que hacen parte de los sectores sociales LGBTI y de personas con diversas orientaciones sexuales e identidades de género.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src="@/assets/curso/t3/12.png")
            .col-sm-12.col-lg-7
              h5 Decreto 410 del 2018
              p Establece medidas para prevenir la discriminación por razones de orientación sexual e identidad de género diversa, promoviendo espacios libres de discriminación.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src="@/assets/curso/t3/13.png")
            .col-sm-12.col-lg-7
              h5 Ley 2337 del 2023
              p Fomenta la inclusión y participación de las mujeres, incluyendo a las mujeres transgénero, en programas de emprendimiento, formación y desarrollo empresarial.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src="@/assets/curso/t3/14.png")
            .col-sm-12.col-lg-7
              h5 Ley 2281 del 2023
              p Crea el Ministerio de la Igualdad y Equidad, encargado de diseñar, formular, adoptar, dirigir, coordinar, articular, ejecutar, fortalecer y evaluar políticas, planes, programas, estrategias, proyectos y medidas, para contribuir a la eliminación de las desigualdades económicas, políticas y sociales.
    p.mb-3 Antes de continuar con la legislación que respalda y defiende la diversidad, sugerimos que vea el siguiente video, el cual ayuda a clarificar de qué se trata la ideología de género.
    .bg-full-width.bg-color-white.shadow-soft.mb-5(data-aos="flip-up")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg-12.mb-0
            .py-0.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto.d-none.d-lg-block
                  img(src="@/assets/template/bg-icono-video.svg", style="width: 60px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-0.mb-sm-0
                      h3.mb-1 ¿Cuál es la joda con la ideología de género? 
                      p.mb-0 Antes de abordar ¿Cuál es la joda con la ideología de género? , lo invitamos a ver el siguiente video.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href='https://youtu.be/mxm8PqXPFf8?si=WgRS5zaigcsBF2OJ' target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3]  Leyes colombianas sobre diversidad cultural
    p.mb-3 Después de ver el video y tener más claridad sobre la ideología de género, hablemos ahora de la normatividad que protege otra diversidad trabajada en esta unidad: la cultural.
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-7
        LineaTiempoD.color-acento-contenido.large
          div(numero="1" titulo="Ley 397 de 1997") 
            p Ley General de Cultura. Esta ley establece principios fundamentales y normas sobre patrimonio cultural, fomentos y estímulos a la cultura, y crea el Ministerio de la Cultura. También garantiza el derecho de los grupos étnicos, comunidades negras y raizales, y pueblos indígenas, a conservar, enriquecer y difundir, su identidad y patrimonio cultural.
          div(numero="2" titulo="Ley 1516 del 2012") 
            p Por medio de la cual se aprueba la "Convención sobre la protección y la promoción de la diversidad de las expresiones culturales", firmada en París en el 2005. Esta ley busca proteger y promover la diversidad cultural en Colombia.
          div(numero="3" titulo="Ley 2319 del 2023") 
            p Reforma la Ley 397 de 1997; cambia la denominación del Ministerio de Cultura a Ministerio de la Igualdad y Equidad, y dicta otras disposiciones relacionadas con la cultura.
          div(numero="4" titulo="Ley 2347 del 2024") 
            p Establece el 12 de octubre de cada año como el Día de la Diversidad Étnica y Cultural de la Nación colombiana. Esta ley busca hacer visible y exaltar la diversidad étnica y cultural mediante acciones afirmativas que reivindiquen el reconocimiento de todas las etnias y culturas que habitan en el territorio colombiano.
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src="@/assets/curso/t3/9.svg", alt="")
    .bg-full-width.bg-3(data-aos="flip-up")
      .px-4.px-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .p-4
              .row.align-items-center
                .col-lg-auto.d-none.d-lg-block
                  img(src="@/assets/curso/t3/8.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 A manera de conclusión, podemos decir que, la diversidad y la inclusión, son conceptos fundamentales en la construcción de sociedades justas y equitativas. En un mundo cada vez más globalizado, es vital que se comprenden y se implementen prácticas inclusivas que reconozcan y valoren la diversidad en todas sus formas. A través de la educación, la legislación y el compromiso social, se puede avanzar hacia una Colombia donde todos los individuos tengamos la oportunidad de participar plenamente y ser valorados por lo que somos. 
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://unesdoc.unesco.org/ark:/48223/pf0000127162_spa' target='_blank' rel='noopener noreferrer') Stenou, K. (2002). Declaración Universal sobre la Diversidad Cultural: una visión, una plataforma conceptual, un semillero de ideas, un paradigma nuevo.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.senalcolombia.tv/cultura/diversidad-etnica-colombia' target='_blank' rel='noopener noreferrer') Sarmiento, D. J. (2024). Diversidad étnica en Colombia: 5 puntos clave. Señal Colombia. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://futureofinterface.org/signall/' target='_blank' rel='noopener noreferrer') Traduce el lenguaje de señas en texto o voz.
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/mxm8PqXPFf8?si=KU5eEVjDv4vsv_Qa' target='_blank' rel='noopener noreferrer') Magic Makers. (2016). ¿Cuál es la joda con la ideología de género? 
            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
    .bg-full-width.border-top.actividad.ctn-actividad.mb-0
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario='cuestionario'/>
    

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Inclusión y Diversidad',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste sobre inclusión y diversidad respondiendo las siguientes preguntas.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'En una escuela rural, se detectó que un estudiante con discapacidad auditiva no logra acceder a las lecciones debido a la falta de intérpretes. ¿Qué principio de inclusión se debe aplicar para resolver esta situación?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Equidad',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Accesibilidad',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Autonomía',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Justicia',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La accesibilidad es fundamental para garantizar que todos los estudiantes puedan participar efectivamente en el proceso educativo.',
          mensaje_incorrecto:
            'No es correcto. Recuerda que la accesibilidad es el principio que garantiza el acceso a la educación para todos.',
        },
        {
          id: 2,
          texto:
            'Una empresa adapta los espacios y horarios laborales para permitir que una empleada en silla de ruedas se integre sin dificultades. ¿Qué tipo de inclusión se está aplicando en este caso?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inclusión laboral',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Inclusión social',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inclusión cultural',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inclusión escolar',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La inclusión laboral implica adaptar el entorno de trabajo para garantizar la participación plena de todos los empleados.',
          mensaje_incorrecto:
            'No es correcto. La adaptación del espacio de trabajo corresponde a la inclusión laboral.',
        },
        {
          id: 3,
          texto:
            'En un aula diversa, se incluye un programa de aprendizaje bilingüe para estudiantes indígenas que están aprendiendo español. ¿A qué tipo de diversidad responde este caso?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diversidad cultural',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diversidad de género',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diversidad étnica',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diversidad lingüística',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Este caso refleja el respeto y la adaptación a la diversidad cultural en el entorno educativo.',
          mensaje_incorrecto:
            'No es correcto. El programa bilingüe responde principalmente a la diversidad cultural de los estudiantes.',
        },
        {
          id: 4,
          texto:
            'En una institución educativa, un niño diagnosticado con hiperactividad tiene dificultades para concentrarse durante las clases tradicionales. El docente decide implementar actividades interactivas y pausas activas. ¿Qué principio de la inclusión está aplicando el docente?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Autonomía',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Participación',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Equidad',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Universalización',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El docente está promoviendo la participación activa del estudiante mediante estrategias adaptadas.',
          mensaje_incorrecto:
            'No es correcto. Las actividades interactivas buscan fomentar la participación del estudiante.',
        },
        {
          id: 5,
          texto:
            'En una empresa, el departamento de recursos humanos diseña procesos de selección que consideran a personas con discapacidad y ajusta entrevistas según sus necesidades. ¿Qué tipo de inclusión refleja este escenario?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inclusión laboral',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Inclusión escolar',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inclusión social',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inclusión comunitaria',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La adaptación de los procesos de selección es un ejemplo claro de inclusión laboral.',
          mensaje_incorrecto:
            'No es correcto. Las adaptaciones en procesos de selección corresponden a la inclusión laboral.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Has demostrado un excelente entendimiento de los principios de inclusión y diversidad.',
      mensaje_final_reprobado:
        'Te invitamos a revisar nuevamente el material sobre inclusión y diversidad para reforzar tus conocimientos.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
