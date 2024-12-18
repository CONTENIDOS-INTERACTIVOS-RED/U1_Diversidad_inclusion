<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'Definición de diversidad'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-fondo-3(data-aos="flip-up")
      .px-4.px-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src="@/assets/curso/t1/1.svg", alt="")
            .col-sm-12.col-lg-9
              p.mb-5 Al pensar en la palabra #[b “diversidad”], pueden venir a nuestra mente muchas ideas, ejemplos y metáforas, como una manera de definirla. 
              .row.justify-content-center.align-items-center.mb-0
                .col-sm-12.col-lg-12
                  .bg-color-white.shadow-soft.py-4.px-lg-5
                    .row.justify-content-around.align-items-center
                      .col-md-auto.d-none.d-lg-block
                        img(src="@/assets/template/bg-icono-video.svg", style="width: 90px;")
                      .col
                        .row.justify-content-between.align-items-center
                          .col.mb-3.mb-sm-0
                            h3.mb-1 Mar de Fueguitos Galeano 
                            p.mb-0 Antes de abordar definiciones y conceptos, lo invitamos a ver el siguiente cuento.
                          .col-sm-auto
                            a.boton.color-acento-botones.texto-blanco(href='https://youtu.be/btDgoylQ3ns?si=qZ6y0NHPOg7U59PM' target="_blank")
                              span Ver Video
                              i.fas.fa-arrow-right
          p.mb-3 Ahora, reflexionemos: ¿se reconocen como un "fueguito"? ¿Qué cualidades o características suyas les hacen sentir únicos y especiales? Y, ¿cómo sus fuegos los conectan con los de los demás?
          .row.justify-content-center.align-items-center.mb-5
            .col-sm-12.col-lg-8
              .row.justify-content-center.align-items-center.mb-3
                .col-lg-12
                  .p-4.bg-2
                    .row.align-items-center
                      .col-lg-auto.d-none.d-lg-block
                        img(src="@/assets/curso/t1/2.svg", style="max-width: 90px").mx-auto
                      .col-lg
                        p.mb-0 Este relato es una invitación a valorar la diversidad humana y a construir un mundo más justo y equitativo para todos. A través de esta sencilla metáfora, Galeano nos recuerda que cada uno de nosotros es una pieza fundamental del gran mosaico de la humanidad. 
              p.mb-0.fw-bold Después de esta reflexión, respondamos entonces qué se entiende por diversidad: 
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src="@/assets/curso/t1/3.png", alt="")
    .bg-full-width.bg-fondo-slider.mb-0(data-aos="flip-up")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src="@/assets/curso/t1/4.png")
            .col-sm-12.col-lg-7
              h5 Primero 
              p Diversidad se refiere a la variedad de características que hacen a cada individuo, único.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src="@/assets/curso/t1/5.png")
            .col-sm-12.col-lg-7
              h5 Segundo
              p En el contexto cultural, étnico y de género, la diversidad abarca aspectos como la raza, la etnicidad, el género, la orientación sexual, la religión, la edad y la capacidad física.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src="@/assets/curso/t1/6.png")
            .col-sm-12.col-lg-7
              h5 Tercero
              p En Colombia, un país caracterizado por su rica pluralidad, la diversidad cultural se manifiesta a través de diferentes grupos étnicos, incluidos indígenas, afrodescendientes y mestizos. Cada grupo aporta su propia historia, tradiciones y forma de ver el mundo, enriqueciendo así la identidad nacional.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src="@/assets/curso/t1/7.png")
            .col-sm-12.col-lg-7
              h5 Cuarto
              p Según la Real Academia Española (RAE), la palabra diversidad implica diferencia, variedad y complejidad, lo que nos lleva a reconocer que la desemejanza y la disparidad, enriquecen nuestras interacciones y convivencias. Este concepto es fundamental, dado que nos permite entender que la homogeneidad y la semejanza, pueden limitar nuestras perspectivas y experiencias. La diversidad no solo enriquece nuestras vidas, sino que también fomenta un ambiente en el que se valoran y respetan las diferencias, promoviendo entonces, una sociedad más inclusiva y justa.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src="@/assets/curso/t1/8.png")
            .col-sm-12.col-lg-7
              h5 Quinto
              p Frecuentemente, la diversidad humana se relaciona con conflictos y se emiten juicios de valor que clasifican a las personas como buenas o malas, basándose en características asociadas a grupos sociales, como la lengua, la religión o la edad. Esta categorización puede justificar desigualdades, evidenciadas en afirmaciones que invalidan a individuos, debido a su origen o afiliación a ciertos grupos.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src="@/assets/curso/t1/9.png")
            .col-sm-12.col-lg-7
              h5 Sexto
              p Diversidad se refiere a la variedad y coexistencia de diferentes culturas en una sociedad, incluyendo lenguas, tradiciones, y costumbres, y surgió en el contexto de los movimientos de derechos civiles, que luchaban contra la opresión y discriminación.

    .bg-full-width.bg-fondo-4(data-aos="flip-up")
      .px-4.px-md-5
        .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
          .col-lg-12
            .p-4
              .row.align-items-center
                .col-lg-auto.d-none.d-lg-block
                  img(src="@/assets/curso/t1/10.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Según Kiss (2024), hoy, es un valor fundamental que fomenta la igualdad y el respeto en un mundo globalizado, respaldado por el derecho internacional a través de la Declaración Universal sobre la Diversidad Cultural de la Unesco y la Convención sobre la Protección y Promoción de la Diversidad de las Expresiones Culturales, que establecen normas para su reconocimiento y defensa.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Tipos de diversidad

    p.mb-3(data-aos="flip-up") Existen diferentes tipos de diversidad, como estudiaremos a continuación.
    h3.mb-3(data-aos="flip-up") La diversidad cultural
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-8
        .bg-3.p-4
          p.my-2 Enriquece nuestras vidas al fomentar la creatividad, promover el entendimiento y el respeto entre diferentes grupos, y contribuir al desarrollo social y económico. Según el Informe de la UNESCO sobre la Diversidad Cultural (2009), esta es esencial para el desarrollo sostenible y el bienestar humano, puesto que cada cultura aporta una visión única del mundo. Es fundamental reconocer y valorar esta diversidad, para construir sociedades más inclusivas y justas.
      .col-sm-12.col-lg-4
        img(src="@/assets/curso/t1/11.png", alt="")

    h3.mb-3(data-aos="flip-up") La diversidad étnica
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/t1/12.svg", alt="Ilustración que representa la diversidad étnica")
      .col-sm-12.col-lg-9
          p.mb-3 Se refiere a la coexistencia de diferentes grupos humanos que varían en características como el color de piel, idioma y costumbres, formando comunidades con afinidades culturales que se integran entre sí. Las características de la diversidad étnica incluyen la convivencia de varios pueblos en un mismo espacio geográfico, la integración con culturas nativas, mayores libertades en sociedades diversas, la preservación de costumbres propias y el intercambio de bienes culturales que generan influencia mutua.
          p.mb-3 #[b Por ejemplo:] en Colombia, se refleja en la coexistencia de más de 80 grupos indígenas, cada uno con su idioma, costumbres y modos de vida.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-12
              .p-4.bg-4
                .row.align-items-center
                  .col-lg-auto.d-none.d-lg-block
                    img(src="@/assets/curso/t1/13.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    p.mb-0 Si se desea profundizar más sobre la diversidad cultural y étnica de Colombia y el mundo, puede visitar el siguiente portal web, donde los autores comparten las características principales de estas, según su contexto geográfico.
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-12
        .bg-color-white.shadow-soft.py-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-md-auto.d-none.d-lg-block
              img(src="@/assets/template/bg-icono-link.svg", style="width: 60px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Diversidad étnica
                  p.mb-0 Para conocer más sobre La diversidad etnica, lo invitamos a consultar:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href='https://www.lifeder.com/diversidad-etnica/' target="_blank")
                    span Ir al sitio
                    i.fas.fa-arrow-right
    h3.mb-3(data-aos="flip-up") La diversidad de género
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t1/14.png", alt="")
      .col-sm-12.col-lg-8
        p.mb-3 Desde los años setenta, Monco, (s.f.), sustenta que, impulsado por el movimiento feminista, el género se ha incorporado como una categoría clave para analizar la realidad social, cultural e histórica de los grupos humanos, aunque su introducción generó debates debido a su origen gramatical y su transposición a un contexto sociocultural más amplio. Historiadores como Joan Scott destacan que, a pesar de la resistencia inicial en algunos círculos académicos, desde los años ochenta el término ha sido aceptado en las ciencias sociales y se ha popularizado, aunque su uso y comprensión no siempre son precisos.
        p.mb-0.fw-bold Por encima de las discusiones terminológicas, es importante destacar que:
    
    .bg-full-width.bg-fondo-4(data-aos="flip-up")
      .px-4.px-md-5
        .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
          .col-lg-12
            .p-4
              .row.align-items-center
                .col-lg-auto.d-none.d-lg-block
                  img(src="@/assets/curso/t1/15.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0  Mucho antes de su popularización y uso general en las disciplinas sociales, la noción de género surge a partir de la idea que lo ‘femenino’ y lo ‘masculino’ no son hechos naturales o biológicos, sino construcciones culturales (p.32). 
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-sm-12.col-lg-8
        p.mb-4 La #[b diversidad de género incluye] no solo las diferencias biológicas entre hombres y mujeres, sino también las construcciones sociales y culturales que determinan el rol de género en la sociedad. 
        .bg-2.p-4
          p.mb-0 Para Rayna Rapp (1979), citada por Monco, argumenta que la biología es neutra y no impone normas, siendo los humanos quienes interpretamos y utilizamos la naturaleza para justificar construcciones culturales. Las disciplinas como la sociobiología y la etología, han resaltado la relevancia de la biología en la comprensión de las diferencias entre sexos y su aplicación en el ámbito social. 
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t1/16.png", alt="")

    p.mb-5(data-aos="flip-up") #[b El análisis de género] desafía la noción que las desigualdades entre hombres y mujeres son de origen natural, planteando que las posiciones sociales, políticas y culturales no deben fundamentarse en causas biológicas.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t1/17.png", alt="Ilustración que representa la diversidad étnica")
      .col-sm-12.col-lg-8
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-12
              .p-4.bg-3
                .row.align-items-center
                  .col-lg-auto.d-none.d-lg-block
                    img(src="@/assets/curso/t1/18.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    p.mb-0 Esto invita a cuestionar la validez de basar distinciones morales en diferencias naturales, lo que a menudo resulta en una división desigual de roles, según el sexo; además, nos invita a reconocer y valorar la diversidad para promover la convivencia pacífica y el respeto mutuo en una sociedad plural.
          p.mb-3 Por otro lado, la diversidad de género se refiere también a la variedad de identidades de género y expresiones de género que existen en la sociedad. No se limita únicamente a la tradicional dicotomía de masculino y femenino, sino que reconoce que el género es un espectro amplio que incluye identidades como personas transgénero, no binarias, género fluido, agénero, entre otras.
          p.mb-0.fw-bold A continuación, veremos una breve descripción de cada una de estas identidades de género:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-8
        LineaTiempoD.color-acento-contenido.large
          div(numero="1" titulo="Transgénero") Son aquellas personas cuya identidad de género no coincide con el sexo asignado al nacer. Esto puede implicar la transición de un género a otro, a través de cambios físicos, hormonales y/o legales. Bornstein (1994), expresa la importancia de reconocer que ser transgénero no se relaciona necesariamente con la orientación sexual; una persona trans puede identificarse como heterosexual, homosexual, bisexual, etc.
          div(numero="2" titulo="No binarias") Estas personas no se identifican exclusivamente como hombre o mujer. Su identidad de género puede combinar aspectos de ambos géneros, situarse entre ellos o ser completamente independiente de ellos. Bornstein (1994), las personas no binarias pueden usar pronombres neutros, como "elle" en español o "they/them" en inglés.
          div(numero="3" titulo="Género fluido")  Las personas que se consideran de este género, con el tiempo experimentan cambios en su identidad de género. Pueden sentirse más como un hombre en ciertos momentos y como una mujer en otros, o pueden identificarse con otros géneros en diferentes momentos. Bornstein (1994), el género fluido reconoce la flexibilidad y la variabilidad de la identidad de género.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t1/19.svg")

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t1/20.svg")
      .col-sm-12.col-lg-8
        LineaTiempoD.color-acento-contenido.large
          div(numero="4" titulo="Agénero") Las personas agéneros no se identifican con ningún género en absoluto. Pueden sentirse como si no tuvieran género o como si su género no fuera relevante para su identidad personal. Bornstein (1994), el término "agénero" destaca la ausencia de una identidad de género específica.
          div(numero="5" titulo="Bigénero") Personas que se identifican con dos géneros simultáneamente, o en diferentes momentos.
          div(numero="6" titulo="Demigénero") Personas que se sienten parcialmente identificadas con un género en particular, pero no completamente.
          div(numero="7" titulo="Género neutro") Personas que se identifican con un género que no es específicamente masculino ni femenino.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-8
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-12
              .p-4.bg-4
                .row.align-items-center
                  .col-lg-auto.d-none.d-lg-block
                    img(src="@/assets/curso/t1/21.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    p.mb-0 Concluyendo, las diferentes identidades reflejan la riqueza y complejidad de la experiencia humana, cada una con sus propias características y necesidades. Al conocer y aplicar estas nociones, fomentamos un ambiente de respeto y comprensión que fortalece la cohesión social y asegura que todas las personas puedan vivir y desarrollarse plenamente, sin discriminación. 
          p.mb-3 A continuación, le invitamos a leer la siguiente investigación titulada “Educación Física y diversidad de género: un análisis desde la experiencia de profesores de aula”; en ella, los autores pretenden conocer la preparación que tienen los docentes, referente a este tema.
          p.mb-0.fw-bold
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t1/22.png", alt="Ilustración que representa la diversidad étnica")

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-12
        .bg-color-white.shadow-soft.py-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-md-auto.d-none.d-lg-block
              img(src="@/assets/template/bg-icono-link.svg", style="width: 60px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Educación Física y diversidad de género: un análisis desde la experiencia de profesores de aula
                  p.mb-0 Para conocer más sobre Educación Física y diversidad de género, lo invitamos a consultar:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href='http://www.repositorio.ucm.cl/handle/ucm/5067' target="_blank")
                    span Ir al sitio
                    i.fas.fa-arrow-right

    .bg-5.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/t1/24.png', alt='')
        .col-lg
          .p-4
            p.mb-0 Para sintetizar, #[b la diversidad cultural, étnica y de género], son conceptos interrelacionados que enriquecen nuestras sociedades. Mientras que la #[b diversidad cultural] se refiere a las diferentes costumbres, creencias y prácticas que caracterizan a cada grupo, #[b la diversidad étnica] se centra en las variaciones entre grupos raciales y étnicos, incluyendo sus orígenes y tradiciones. Por otro lado, la diversidad de género aborda las diferencias entre los géneros y las identidades de género, promoviendo la igualdad y el respeto hacia todas las personas, independientemente de su género. 
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-10
        p.mb-0 A pesar de sus diferencias, estos tipos de diversidad comparten la importancia de la inclusión y el reconocimiento de la valía de todas las personas, contribuyendo a una sociedad más equitativa y armoniosa. Reconocer y valorar estas diversidades no solo enriquece nuestras interacciones sociales, sino que también fomenta un ambiente de respeto y entendimiento mutuo.
      .col-sm-12.col-lg-2.d-none.d-lg-block
        img(src="@/assets/curso/t1/23.svg", alt="")

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>
