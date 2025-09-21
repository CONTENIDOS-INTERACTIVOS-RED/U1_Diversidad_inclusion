<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Inclusión: significado y principios'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-3(data-aos="flip-up") Teniendo claro qué es la diversidad, continuaremos indagando sobre la inclusión, concepto que está directamente conectado con la diversidad en todos sus contextos.
    .bg-full-width.bg-fondo-4.mb-lg-5(data-aos="flip-up")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4  Inclusión y sus principios esenciales
            p.mb-4 La inclusión es un pilar fundamental para la construcción de sociedades equitativas y justas, donde todas las personas tienen la oportunidad de participar plenamente en los diferentes ámbitos de la vida, sin distinción alguna. El PDF Inclusión, profundiza en el significado de la inclusión y sus principios esenciales, destacando la importancia de eliminar las barreras que limitan la participación de individuos en situación de vulnerabilidad. A través de un análisis de sus dimensiones sociales, educativas y de salud, se explorará cómo la inclusión contribuye al reconocimiento de la diversidad, el respeto por la dignidad humana y la creación de entornos más colaborativos y enriquecedores.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Inclusión y sus principios esenciales

          .col-lg-5.d-none.d-lg-block
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/t2/1.png', alt='')
    p.mb-3(data-aos="flip-up") Para continuar con este tema, le invitamos a leer el siguiente artículo publicado por la OMS sobre la discapacidad y las desigualdades de acceso a la salud.
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
                      h3.mb-1 Discapacidad
                      p.mb-0 Para conocer más sobre la discapacidad, lo invitamos a consultar:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href='https://www.who.int/es/news-room/fact-sheets/detail/disability-and-health' target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Principios fundamentales de la inclusión 
    p.mb-3(data-aos="flip-up") La inclusión busca garantizar que todas las personas, independientemente de sus capacidades o antecedentes, tengan igual acceso a oportunidades y recursos. A continuación, se describen los principios claves de la inclusión:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-8
        LineaTiempoD.color-acento-contenido.large
          div(numero="1" titulo="Accesibilidad") 
            p El primer principio de la inclusión es la accesibilidad, que se refiere a la necesidad de eliminar barreras físicas y sociales, que impiden la participación plena de todos los individuos. Esto implica adaptar los entornos, materiales y métodos de enseñanza, para que sean utilizables por todas las personas.  Según la Convención sobre los Derechos de las Personas con Discapacidad (ONU, 2006), la accesibilidad es un derecho fundamental que permite a todos participar en la vida social y educativa.
          div(numero="2" titulo="Equidad y justicia") 
            p La equidad se centra en la justicia y la igualdad de oportunidades. Este principio reconoce que las personas tienen diferentes necesidades y, por lo tanto, requieren diferentes tipos de apoyo para alcanzar su máximo potencial.  El concepto de equidad se ha discutido ampliamente en estudios como los de Ainscow y Miles (2008), quienes argumentan que una educación inclusiva no solo debe proporcionar igualdad de acceso, sino también adaptarse a las necesidades individuales de los estudiantes.
          div(numero="3" titulo="Participación")  
            p La participación activa de todos los individuos, es esencial para una sociedad inclusiva. Este principio implica que todos, sin excepción, deben tener la oportunidad de contribuir y ser parte. La inclusión no se limita a la presencia física en un aula, sino que aboga por la participación significativa en todas las actividades. La inclusión implica crear comunidades donde cada voz sea escuchada y valorada. De acuerdo con Stiglitz (2012), la igualdad de oportunidades es esencial para el progreso social y económico. Las instituciones deben implementar políticas que aseguren que todas las personas tengan acceso a recursos y experiencias, que mejoren su calidad de vida.

          div(numero="4" titulo="Democracia") 
            p.mb-0 La democracia implica la participación activa de todos los individuos en la toma de decisiones que afectan sus vidas. La justicia social se basa en la inclusión de voces diversas en el proceso democrático. Esto significa que no solo se deben escuchar las opiniones de una mayoría, sino también las de grupos minoritarios, garantizando así un sistema equitativo. La implementación de prácticas democráticas en entornos educativos, fomenta un clima donde cada estudiante se siente valorado y capaz de contribuir.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t2/2.svg")

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t2/3.svg")
      .col-sm-12.col-lg-8
        LineaTiempoD.color-acento-contenido.large
          div(numero="5" titulo="Autonomía") 
            p La autonomía se refiere a la capacidad de las personas para tomar decisiones informadas sobre sus propias vidas. Según la teoría del desarrollo humano de Amartya Sen (1999), la autonomía es esencial para el bienestar individual y colectivo. En el contexto de la inclusión, la promoción de la autonomía permite a los estudiantes con diferentes capacidades y antecedentes, tener voz y control sobre su educación. Brindar oportunidades para el aprendizaje autodirigido y el empoderamiento es crucial para fomentar una cultura inclusiva en las instituciones educativas.

          div(numero="6" titulo="Diversidad") 
            p El principio de diversidad reconoce que cada individuo es único y aporta diferentes experiencias y perspectivas. La diversidad en el aula enriquece el aprendizaje y fomenta un ambiente donde las diferencias son valoradas. Según el trabajo de Tomlinson (2014), una educación inclusiva, abraza la diversidad al adaptar la enseñanza para satisfacer las variadas necesidades de los estudiantes, promoviendo así un aprendizaje más efectivo.

          div(numero="7" titulo="Colaboración")
            p Este principio enfatiza la importancia de trabajar juntos para crear un entorno que apoye a todos, es decir tener cohesión; esta se refiere a la capacidad de un grupo para trabajar en conjunto, apoyándose mutuamente. De acuerdo con Tuckman (1965), un equipo cohesionado es más efectivo y tiene un mejor rendimiento.

          div(numero="8" titulo="Respeto por la dignidad humana")
            p Este principio implica valorar a cada individuo por su singularidad y promover un entorno en el que todos se sientan valorados y respetados. Cada persona es única y posee una combinación única de características, experiencias y perspectivas, que la hacen valiosa y diferente. La dignidad es un derecho inherente a todos los seres humanos, independientemente de su origen, raza, género, religión, orientación sexual, discapacidad o cualquier otra condición. 
            p Sobre esto, Amartya Sen (1980-1990), destaca que el desarrollo humano no debe medirse solo por indicadores económicos, sino también por la capacidad de las personas para elegir y llevar a cabo las vidas que valoran. Su enfoque se alinea con el principio de la dignidad humana y la inclusión.


          div(numero="9" titulo="Universalización")
            p La universalización se refiere a la idea que todos los individuos, sin importar su origen, deben tener acceso a los mismos derechos y oportunidades. Según la UNESCO, la universalización de la educación es un objetivo global que busca eliminar las barreras que impiden que ciertos grupos accedan a una educación de calidad. La implementación de políticas inclusivas en los sistemas educativos, es esencial para garantizar que todos los estudiantes, independientemente de sus capacidades o circunstancias, puedan disfrutar de una educación que se adapte a sus necesidades y potenciales.
      
    .bg-full-width.bg-fondo-5(data-aos="flip-up")
      .px-4.px-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .p-4
              .row.align-items-center
                .col-lg-auto.d-none.d-lg-block
                  img(src="@/assets/curso/t2/4.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0  Estos principios se podrán profundizar, a través de la siguiente investigación. En ella, los autores estudian las competencias emocionales y la percepción de los docentes al atender la diversidad.

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
                      h3.mb-1 Responsabilidad social para la inclusión
                      p.mb-0 Para conocer más sobre responsabilidad social para la inclusión, lo invitamos a consultar:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href='https://elibro.net/es/ereader/tecnologicadeloriente/227595?page=48' target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right


    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Tipos de inclusión
    p.mb-5(data-aos="flip-up") Así como existen principios de inclusión, también hay tipos de la misma, según el contexto; a continuación, los mencionaremos y revisaremos sus enfoques:
    .bg-full-width.bg-fondo-6.mb-5(data-aos="flip-up")
      .px-4.p-md-5
        LineaTiempoD.color-acento-contenido.large
              div(numero="1" titulo="Inclusión social") 
                p La #[b inclusión social] es un proceso que busca asegurar que todos los individuos, independientemente de sus diferencias, tengan iguales oportunidades de participar plenamente en la vida económica, social y cultural de sus comunidades. Esto implica eliminar las barreras que impiden la plena participación de personas que, de otro modo, podrían ser excluidas, debido a factores como la pobreza, la discriminación, la falta de educación, y otras formas de marginalización.
                p Amartya Sen, el destacado economista y filósofo, también ha hecho importantes aportes al concepto de inclusión social. En su obra "Desarrollo y Libertad" (1999), Sen argumenta que el desarrollo debe ser visto como un proceso de expansión de las libertades reales que disfrutan las personas. Según Sen, la inclusión social es fundamental para el desarrollo, porque permite que todas las personas tengan acceso a las libertades y oportunidades necesarias para llevar una vida plena y significativa.
                p Un ejemplo destacado de inclusión social en Colombia, es el programa "Jóvenes en Acción". Este programa, implementado por el gobierno colombiano, busca promover la inclusión social y económica de jóvenes en situación de vulnerabilidad, especialmente aquellos que viven en áreas rurales y urbanas, de alta pobreza. A través de capacitaciones, apoyo financiero y acceso a oportunidades laborales, "Jóvenes en Acción" ha logrado mejorar significativamente, las condiciones de vida de muchos jóvenes, permitiéndoles integrarse, de manera más efectiva, en la sociedad y contribuir al desarrollo económico del país.

              div(numero="2" titulo="Inclusión laboral") 
                p La #[b inclusión laboral], se refiere a la integración de personas que, por diversas razones, han sido excluidas del mercado laboral, garantizando su acceso a oportunidades de empleo digno y condiciones laborales justas. Según la Organización Internacional del Trabajo (OIT), la inclusión laboral implica que todos los trabajadores tengan la capacidad de prosperar y contribuir plenamente, en un entorno libre de discriminación.
                p Un autor que ha abordado este tema es Paulina Millán Aguilar, quien en su artículo "Inclusión laboral, paz y sostenibilidad" (2018), analiza cómo la inclusión laboral puede contribuir al desarrollo sostenible y la paz. Millán Aguilar destaca la importancia de eliminar las barreras que impiden el acceso al empleo para grupos vulnerables y promover un entorno laboral inclusivo.
                p Un ejemplo de inclusión laboral en Colombia, es la implementación, en Bucaramanga, de programas de empleo para personas con discapacidad visual. Estos programas buscan garantizar que las personas con discapacidad visual tengan acceso a empleos con condiciones laborales favorables, promoviendo así su inclusión social y económica.
                p Para ahondar un poco más en este tema y en las problemáticas que se generan a su alrededor, los invitamos a leer un apartado del libro Dignidad Humana e inclusión laboral, donde hablan sobre la importancia entre muchos otros factores de un trabajo digno para la salud mental y la discapacidad.

              div(numero="3" titulo="Inclusión digital") 
                p La #[b inclusión digital] que se refiere al acceso equitativo a TIC y a las habilidades necesarias para utilizarlas de manera efectiva. Este concepto busca eliminar la brecha digital que limita a ciertos grupos, como personas de bajos ingresos, comunidades rurales o personas mayores, asegurando que todos puedan beneficiarse de las oportunidades digitales.
                p Han contribuido, significativamente, a este campo, Yazmín Gallegos García y María Teresa García Ramírez, quienes en su artículo "Inclusión digital educativa: una cartografía conceptual" (2022), analizan la noción de inclusión digital educativa y establecen los bordes del concepto frente a su relación con otros términos.
                p Un ejemplo de inclusión digital es el uso de plataformas de e-learning que permiten el aprendizaje a través de Internet, facilitando el acceso a la educación, para personas en áreas rurales o con limitaciones económicas. En Colombia, el uso de plataformas de e-learning ha crecido significativamente, especialmente durante la pandemia del COVID-19. Según datos del Sistema Nacional de Información de la Educación Superior (SNIES), en el 2023, la cantidad de estudiantes inscritos en programas en línea, aumentó un 4 %, con una distribución equilibrada entre pregrados (49.8 %) y posgrados (50.1 %). Este crecimiento se ha visto respaldado por los avances en conectividad, con 47.4 millones de accesos a Internet en el tercer trimestre del 2023, representando casi el 90 % de la población.
                p Un aspecto relevante es la implementación de inteligencia artificial (IA) en la educación en línea. La IA se utiliza principalmente para la supervisión de evaluaciones, el análisis del comportamiento estudiantil y la detección temprana de las deserciones. Sin embargo, aún persisten desafíos como la baja alfabetización digital de los estudiantes y el bajo nivel de habilidades digitales de los docentes.

              div(numero="4" titulo="Inclusión escolar") 
                p Según Ainscow (2008), la inclusión escolar se define como "el proceso de identificar y eliminar barreras, que impiden la participación plena de todos los estudiantes en el aprendizaje y la vida escolar". Esta definición enfatiza la importancia de un sistema educativo que no solo acepte la diversidad, sino que también la valore y la utilice como una herramienta para el desarrollo educativo. La UNESCO (2009), también resalta que la inclusión escolar es un enfoque educativo que busca asegurar que todos los estudiantes, sin excepción, puedan participar en el aprendizaje y la vida escolar Esto implica que las instituciones deben adaptarse a las necesidades de todos los estudiantes, proporcionando diferentes recursos y métodos de enseñanza.
                p Un ejemplo de este es la Institución Educativa Francisco Luis Hernández Betancur, en Medellín, que ha implementado varios procesos de inclusión para estudiantes con discapacidades auditivas y visuales. Uno de los enfoques más destacados es la metodología de inclusión a la inversa, donde los estudiantes con discapacidades acogen a aquellos sin discapacidades. Este enfoque promueve la comprensión y el respeto mutuo entre todos los estudiantes.
        p.mb-3 Si desea conocer más sobre esta maravillosa experiencia de inclusión, lo invitamos a leer:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-6
        .bg-color-white.shadow-soft.mb-5.h-card-1
          .px-3.py-4
            .row.justify-content-center.align-items-center
              .col-sm-12.col-lg-12.mb-0
                  .row.justify-content-around.align-items-center
                    .col-md-auto.d-none.d-lg-block
                      img(src="@/assets/template/bg-icono-link.svg", style="width: 60px;")
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-0.mb-sm-0
                          h3.mb-1 Educación inclusiva y marco legal en Colombia, una mirada desde la alteridad y las diferencias.
                          p.mb-0 Para conocer más, lo invitamos a consultar:
                        .col-sm-auto
                          a.boton.color-acento-botones.texto-blanco(href='https://www.redalyc.org/journal/1390/139069262005/' target="_blank")
                            span Ir al sitio
                            i.fas.fa-arrow-right
      .col-sm-12.col-lg-6
        .bg-color-white.shadow-soft.mb-5.h-card-1
          .px-3.py-4
            .row.justify-content-center.align-items-center
              .col-sm-12.col-lg-12.mb-0
                  .row.justify-content-around.align-items-center
                    .col-md-auto.d-none.d-lg-block
                      img(src="@/assets/template/bg-icono-link.svg", style="width: 60px;")
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-0.mb-sm-0
                          h3.mb-1 Dignidad humana e inclusión laboral
                          p.mb-0 Para conocer más, dignidad humana e inclusión laboral, lo invitamos a consultar:
                        .col-sm-auto
                          a.boton.color-acento-botones.texto-blanco(href='https://elibro.net/es/ereader/tecnologicadeloriente/250746?page=80' target="_blank")
                            span Ir al sitio
                            i.fas.fa-arrow-right

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t2/5.png", alt="")
      .col-sm-12.col-lg-8
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-12
            .p-4.bg-6
              .row.align-items-center
                .col-lg-auto.d-none.d-lg-block
                  img(src="@/assets/curso/t1/2.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 En conclusión, la inclusión es más que un enfoque, es una filosofía que promueve la equidad y el respeto. Implementar sus principios no solo beneficia a los individuos con necesidades especiales, sino que enriquece la experiencia de aprendizaje, participación y de vida de todos. Como futuros educadores, es crucial comprender y aplicar estos principios para construir aulas inclusivas que reflejen la diversidad de la sociedad. 
        p.mb-0.fw-bold Para finalizar, se recomienda ver un corto video sobre cómo podemos aportar a la no exclusión en nuestro día a día.


    .bg-full-width.bg-color-white(data-aos="flip-up")
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
                      h3.mb-1 Educación para la inclusión ¿Cómo evitas la exclusión? 
                      p.mb-0 Antes de abordar educación para la inclusión, lo invitamos a ver el siguiente video.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href='https://youtu.be/24qJrjBfE1s?si=deD48O29EE8W9KPe' target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://www.redalyc.org/journal/1390/139069262005/' target='_blank' rel='noopener noreferrer') Fundación Universitaria Los Libertadores. (2020). Educación inclusiva y marco legal en Colombia: Una mirada desde la alteridad y las diferencias. Redalyc.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.who.int/es/news-room/fact-sheets/detail/disability-and-health' target='_blank' rel='noopener noreferrer') O.M.S. (2023). Discapacidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://monica.im/es' target='_blank' rel='noopener noreferrer') Apoyo en la creación de textos para personas con discapacidad.

            
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://open.spotify.com/show/3Qt2hOZv3m4gznSnAiYdGb?si=9ljChwRpTN6Y-D5mYvG8lg' target='_blank' rel='noopener noreferrer') Asdown Colombia (2022). El abc de la educación inclusiva (pódcast)

            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')




</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
