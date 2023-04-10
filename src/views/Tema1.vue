<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos generales


    p(data-aos="fade") A continuación, se presentan conceptos importantes que debe apropiar:

    .row.fondo-tema1.align-items-center.pt-3.pb-5.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          h4.t-green(data-aos="fade") Manejo integral de residuos

          p.mb-5(data-aos="fade") Es el conjunto de actividades que se realizan desde la generación hasta la eliminación del residuo o desecho sólido. Comprende las actividades de separación en la fuente, presentación, recolección, transporte, almacenamiento, tratamiento y/o la eliminación de los residuos o desechos sólidos. Decreto 1713. Ministerio de Ambiente Vivienda y Desarrollo Territorial (2002, p.3) 

          .col-md-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 1] Manejo integral de residuos
            img(src='@/assets/curso/temas/tema1/fig1.svg', alt='Manejo integral de residuos')
            figcaption.bg-white.mt-2
              p.mb-0.text-center Nota. Guía para el manejo integral de residuos. Universidad Pontificia Bolivariana y Área metropolitana del valle de aburrá (2008, p.11) 


    h4.t-green(data-aos="fade") Gestión integral de residuos sólidos

    p.mb-4(data-aos="fade") Es el conjunto de operaciones y disposiciones encaminadas a dar a los residuos producidos el destino más adecuado desde el punto de vista ambiental, de acuerdo con sus características, volumen, procedencia, costos, tratamiento, posibilidades de recuperación, aprovechamiento, comercialización y disposición final. Decreto 1713. Ministerio de Ambiente Vivienda y Desarrollo Territorial (2002, p.3) 

    .row.align-items-center.mb-md-3
      .col-md-6.mb-4(data-aos="fade-right")
        p El Manejo Integral de Residuos implica la planeación y cobertura de las actividades relacionadas con los residuos, desde la generación hasta la disposición final, incluyendo los aspectos de segregación, movimiento interno, almacenamiento, desactivación, recolección, transporte y tratamiento, con lo cual se pretende evitar y minimizar la generación de residuos e incrementar el aprovechamiento de éstos, de tal suerte que cada vez sea menor la cantidad de residuos a disponer, como se puede observar en el esquema de jerarquización  de la gestión de los residuos. Guía para el manejo integral de residuos. Universidad Pontificia Bolivariana y Área metropolitana del valle de aburrá (2008, p.11) 
      .col-md-6.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img.jpg', alt='Imagen decorativa')


    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 2] Manejo integral de residuos
        img(src='@/assets/curso/temas/tema1/fig2.svg', alt='Manejo integral de residuos')
        figcaption.mt-2
          p.mb-0 Nota. Guía para el manejo integral de residuos. Universidad Pontificia Bolivariana y Área metropolitana del valle de aburrá (2008, p.11)

    .row.d-flex(data-aos="fade-down")
      .col-md-4
        .h-100.bg-green5.b-radius20.py-5.px-4.p-md-5
          h5.text-center Gestión
          p.text-center Es el conjunto de actividades orientadas a dar a los residuos sanitarios el destino final adecuado de acuerdo con las características de cada residuo. 
      .col-md-4
        .h-100.bg-green5.b-radius20.py-5.px-4.p-md-5
          h5.text-center Gestión Interna de residuos
          p.text-center Son las operaciones de manipulación, clasificación, envasado, etiquetado y traslado al almacén temporal dentro del propio lugar u organización. Presenta:
          ol.lista-ol--cuadro.color-primario
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Dotación de contenedores donde depositar los residuos.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Clasificación de estos residuos en grupos en función de su peligrosidad o posibilidad de reciclaje. 
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Transporte de los residuos al almacén central de residuos sanitarios del centro. 
      .col-md-4
        .h-100.bg-green5.b-radius20.py-5.px-4.p-md-5
          h5.text-center Gestión Externa de residuos
          p.text-center Son las operaciones realizadas fuera del centro productor; recogida, traslado al centro de tratamiento y eliminación.  Presenta:
          p.text-center.mb-0 1) Recogida y transporte a Plantas de Transferencia o Tratamiento.
          p.text-center 2) Tratamiento y eliminación. Desde un punto de vista general los residuos que sufren una mala gestión, ya sea en su recogida, tratamiento o eliminación final, provocan una degradación del Medio Ambiente, por lo que resulta imprescindible un adecuado tratamiento de estos desde el momento de su generación hasta que son eliminados.”



      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
