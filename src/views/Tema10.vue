<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Aprovechamiento, tratamiento y/o disposición final


    figure.mb-5(data-aos="fade")
      img(src='@/assets/curso/temas/tema10/img.png' alt='Banner')

    h4.t-green(data-aos="fade") Aprovechamiento, tratamiento y/o disposición final  

    p(data-aos="fade") Es importante registrar el tipo de aprovechamiento, tratamiento y/o disposición final que se utilizará para los residuos generados en la organización. Estos procesos deben ser seleccionados en función de las características de los residuos, las posibilidades de la organización, las alternativas disponibles y las regulaciones ambientales y sanitarias aplicables, y siempre buscando la opción o estrategia que genere el menor impacto ambiental posible.
    p.mb-5(data-aos="fade") En la siguiente tabla se presentan algunas alternativas de manejo que pueden aplicarse a los residuos:

    .row.justify-content-center
      .col-md-10
        .titulo-sexto.color-acento-contenido(data-aos="fade") 
          p.mb-0 #[b Tabla 8] Técnicas de manejo por tipo de residuo
        .tabla-a.tema10(data-aos="fade-down") 
          table
            caption.bg-gray.mt-2
              p.mb-0 Nota. Guía para elaboración y presentación del plan de gestión integral de residuos hospitalarios y similares-pgirhs aplicado a micro generadores. Área Metropolitana de Bucaramanga (2010, p.23) 
            thead
              tr.bg-green3.text-center
                th Tipos de residuos
                th Técnicas de manejo
            tbody
              tr   
                td Ordinarios e inertes
                td Relleno sanitario
              tr  
                td Biodegradables
                td Compostaje, lombricultura, alimentación de animales, etc.
              tr  
                td Recicables: plástico, vidrio, cartón y similares, chatarra
                td Reuso, reciclaje, etc.
              tr  
                td Peligrosos: con algunas restricciones dependiendo de sus características
                td Aprovechamiento, Incineración, Rellenos de seguridad, otras tecnologías de tratamiento (como térmicos, fisicoquímico, etc) 
              tr  
                td Escombros
                td Aprovechamiento


</template>

<script>
export default {
  name: 'Tema10',
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
