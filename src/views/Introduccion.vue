<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    



    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
          .col-sm-12.col-lg-7
            .bg-1.p-4.mb-3
              p.mb-0 Bienvenidos a la Unidad 1 de la asignatura #[b Diversidad e inclusión]. En esta Unidad se desarrollarán los conceptos fundamentales que sustentan estas temáticas, así como los tipos de diversidad que enriquecen nuestras interacciones y experiencias, cuya comprensión fortalece la existencia de entornos inclusivos y respetuosos, en todos los ámbitos de la vida.
            p.mb-3 Comenzaremos analizando el significado de la inclusión y cómo se diferencia de otros términos similares. Se abordará la importancia de la diversidad y sus tipos, desde la cultural y social, hasta la étnica y de género. Además, examinaremos las leyes colombianas que amparan y protegen la diversidad, subrayando el compromiso del país, con la promoción de una sociedad equitativa y justa para todos.
            p.mb-0.fw-bold Al finalizar esta unidad, los estudiantes serán capaces de:
          .col-sm-12.col-lg-5
            img(src='@/assets/curso/intro/1.svg', alt='Texto que describa la imagen')
      
        .row.justify-content-center.align-items-stretch.mb-5(data-aos="flip-up")
          .col-sm-12.col-lg-4.mb-4
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/1.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tema 1
                p.mb-0 Comprender los conceptos fundamentales de diversidad e inclusión.
          .col-sm-12.col-lg-4.mb-4
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tema 2
                p.mb-0 Reconocer la importancia de estos conceptos en contextos sociales y profesionales.
          .col-sm-12.col-lg-4.mb-4
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tema 3
                p.mb-0 Identificar las leyes colombianas que protegen y promueven la diversidad.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-5
        img(src='@/assets/curso/intro/4.png', alt='Texto que describa la imagen')
      .col-sm-12.col-lg-7
        p.mb-3 Este curso está diseñado para que estos temas se puedan explorar de manera gradual, apoyados por una variedad de recursos que permitirán adquirir un conocimiento sólido y obtener excelentes resultados. 
        p.mb-0 A través de videos, lecturas, debates y actividades prácticas, se irá construyendo una comprensión integral que les capacitará para ser agentes de cambio en la promoción de la inclusión y la diversidad, en sus comunidades y profesiones.

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
          .col-lg-12
            .p-4
              .row.align-items-center
                .col-lg-auto.d-none.d-lg-block
                  img(src="@/assets/curso/intro/5.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Les invitamos a embarcarse en este viaje de aprendizaje con curiosidad y apertura, sabiendo que, cada paso que den, fortalecerá su capacidad para contribuir a una sociedad más inclusiva y equitativa.

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
