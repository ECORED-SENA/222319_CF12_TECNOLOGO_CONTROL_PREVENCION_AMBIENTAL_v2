<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estrategias de formación y educación


    figure.mb-4(data-aos="fade")
      img(src='@/assets/curso/temas/tema3/img.jpg' alt='Banner')

    p(data-aos="fade") En la organización es recomendable establecer procesos de sensibilización y capacitación dirigidas a todo su personal, con el propósito de dar a conocer los aspectos relacionados con el manejo integral de los residuos, en especial los procedimientos específicos, funciones, responsabilidades, mecanismos de coordinación, así como las directrices establecidas en la normatividad vigente. 
    p.mb-4(data-aos="fade") Los temas que pueden desarrollarse en el programa de capacitación son: 

    SlyderF.mb-5(columnas="col-md-6 col-lg-4" data-aos="fade-down")
      .tarjeta.bg-green.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/ico1.svg' alt='')
        p.text-center Prevención en la generación de residuos y Reducción en el origen. 
      .tarjeta.bg-green.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/ico2.svg' alt='')
        p.text-center Talleres de segregación de residuos, recolección, almacenamiento, simulacros de aplicación del Plan de Contingencia. 
      .tarjeta.bg-green.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/ico3.svg' alt='')
        p.text-center Legislación ambiental vigente. 
      .tarjeta.bg-green.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/ico4.svg' alt='')
        p.text-center Riesgos ambientales por el inadecuado manejo de los residuos. 
      .tarjeta.bg-green.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/ico5.svg' alt='')
        p.text-center Conocimiento del organigrama y responsabilidades asignadas. 
      .tarjeta.bg-green.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/ico6.svg' alt='')
        p.text-center Manejo de residuos o desechos peligrosos.
      .tarjeta.bg-green.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/ico7.svg' alt='')
        p.text-center Beneficios ambientales por el adecuado manejo de residuos. 


    p.mb-4(data-aos="fade") Es importante que la capacitación sea continua, para lo cual se puede establecer un cronograma de actividades en donde estructure el proceso y planifique las distintas actividades programadas para tal fin, empleando métodos como talleres, carteleras, actividades lúdicas, envío de correos electrónicos, altavoz al interior de la organización, entre otros. 
    
    .row.align-items-center
      .col-md-6(data-aos="fade-right")
        .bloque-texto-c.bg-green.p-4
          i.fas.fa-quote-right.mb-3
          p.mb-3 Estos procesos de formación y capacitación están orientados a fortalecer a la organización en aquellas actividades que presenten falencias. Es importante que quede el soporte o certificación de las actividades desarrolladas, que incluya como mínimo los siguientes elementos: el tema abordado, los listados y firmas de las personas asistentes, la intensidad de la capacitación y la fecha de realización, adicional puede agregar las evidencias como fotografías. 
          h5.mb-0 (Área metropolitana del Valle de Aburrá, 2016, p. 17) 
      .col-md-6(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img2.jpg' alt='')




</template>

<script>
export default {
  name: 'Tema3',
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
