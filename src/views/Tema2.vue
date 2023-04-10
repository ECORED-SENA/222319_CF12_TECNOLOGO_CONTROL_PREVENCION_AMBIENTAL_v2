<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Definición de compromiso organizacional, objetivos y metas


    .row.align-items-center
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img.png', alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        p De acuerdo con lo identificado en el diagnóstico realizado por la organización, se deben formular un compromiso organizacional conocido como Política Ambiental y unos objetivos y metas orientados hacia la prevención de la generación y hacia la minimización de los residuos que debe verse reflejado en la política ambiental de la organización.
        p Se recomienda plantear unos objetivos congruentes con las condiciones, recursos y necesidades que posea el generador, procurando que sean coherentes y alcanzables. 
        p.bg-green.p-4 En cuanto a las metas se debe evitar que sean vagas, o que sean demasiado ambiciosas sin que exista un compromiso real para cumplirlas, y por ello deben ser realistas y ejecutables desde las perspectivas ambiental, técnica y financiera. Las metas deben ser cuantificables, siempre que sea posible, y tener escalas de tiempo. 


    p(data-aos="fade") “Los objetivos y metas deben ser propuestos por el generador de acuerdo con sus intereses y necesidades. Igualmente, se recomienda formular indicadores que permitan medir el avance en el cumplimiento de los objetivos y las metas propuestas”. Manual para el manejo integral de residuos sólidos en el valle de aburrá. Área metropolitana del valle de aburrá (2016, p.16) 
    p.mb-4(data-aos="fade") Los objetivos y metas deben estar orientados a: 

    .row.mb-5(data-aos="fade-down")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/ico1.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido
            .p-4.p-md-5.pt-md-4
              p.text-center La prevención y minimización de la generación de residuos. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/ico2.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido
            .p-4.p-md-5.pt-md-4
              p.text-center Mejorar las condiciones de separación en la fuente, almacenamiento, aprovechamiento, tratamiento, disposición final de los residuos especiales, peligrosos y no peligrosos. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/ico3.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido
            .p-4.p-md-5.pt-md-4
              p.text-center Disminuir los riesgos a los que están expuestos los trabajadores que manejan los residuos generados en la organización. 
    

    p.mb-4(data-aos="fade") El siguiente caso, es un ejemplo de Política:


    .row.fondo-blue.align-items-center.pt-5.pb-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-6.mb-4(data-aos="fade-right")
            p La empresa PAMPA LTDA fabricante y comercializadora de productos alimenticios, está comprometida con la protección del medio ambiente y el desarrollo sostenible en todas sus operaciones. Para dar cumplimiento a este compromiso, así como los requisitos que exige la legislación colombiana vigente, nos esforzaremos por eliminar las prácticas empresariales que puedan producir impactos negativos en el medio ambiente y disminución y aprovechamiento de los residuos y vertimientos. La empresa proveerá y mantendrá un ambiente de trabajo sano y seguro, en la medida que se considere razonablemente posible, según se indique en las prácticas aceptadas para el desarrollo sostenible. Promoverá programas de mejoramiento continuo y desarrollo sostenible, generando una imagen positiva a la sociedad, brindando servicios oportunos que garanticen la confianza y el bienestar de sus socios, clientes, proveedores y colaboradores. Confiamos en que todos, gerencia, personal directivo y operativo, se asociarán en el compromiso personal hacia el cuidado del medio ambiente como una forma de vida. Esta política será revisada anualmente, de acuerdo con los resultados obtenidos en la evaluación de los indicadores del sistema de Gestión Ambiental. Política ambiental PAMPA (2016, p.1) 
          .col-md-5.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema2/img2.jpg', alt='PAMPA LTDA')


    .row.justify-content-center
      .col-md-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1] Ejemplo de objetivo, meta e indicador en residuos
        .tabla-a.tema2
          table
            caption.bg-gray.mt-2
              p.mb-0 Nota. Autores (2020) Objetivos, metas e indicadores.
            thead
              tr.bg-green4.text-center
                th OBJETIVO
                th META
                th INDICADOR
            tbody
              tr.bg-gray   
                td Disminuir los residuos en la organización
                td Disminuir en un 30% la generación de residuos en la organización en un año.
                td 
                  img(src='@/assets/curso/temas/tema2/form1.svg', alt='Formula')
              tr
                td Reciclar la mayoría de los residuos generados en la organización
                td Reciclar el 70% de los residuos generados en la organización
                td 
                  img(src='@/assets/curso/temas/tema2/form2.svg', alt='Formula')



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
