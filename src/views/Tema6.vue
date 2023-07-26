<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Recolección y transporte interno de residuos

    .row.align-items-center.justify-content-center.mb-md-2
      .col-lg-7.mb-4(data-aos="fade-right")
        p Se deben diseñar rutas de recolección interna de residuos según la distribución de los puntos de generación y que cubran la totalidad de la organización, estableciendo horarios y frecuencias e identificando en cada uno de estos lo siguiente: 
        ul.lista-ul--color.color-primario.ps-md-4.ps-3.mb-4.fa-ul
          li 
            i.fas.fa-check
            | Localización, número y capacidad de los recipientes donde se encuentran los residuos. 
          li 
            i.fas.fa-check
            | Tipo de residuo generado, lo cual está asociado al color del recipiente. 
        p.bg-green.p-4 Esta actividad puede realizarse con la ayuda de planos de la edificación donde funciona la organización, creando un plano de ruta sanitaria. La frecuencia de recolección interna dependerá de la capacidad de almacenamiento y el tipo de residuo generado. Los elementos empleados para la recolección de residuos peligrosos son de uso exclusivo para este fin. 
      .col-lg-5.col-md-8.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema6/img.png', alt='')

    .row.align-items-center.mb-md-3
      .col-md-6.d-none.d-lg-block.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema6/img2.png', alt='')
      .col-lg-6.mb-4(data-aos="fade-left")
        p El tiempo de permanencia de los residuos en los puntos de generación debe ser el mínimo posible, especialmente en áreas donde se generan residuos peligrosos. En el evento de un derrame de residuos peligrosos, se efectuará de inmediato acciones correctivas, conforme a las recomendaciones dadas por los proveedores en las hojas de seguridad de cada material. Deben establecerse los procedimientos para este tipo de acontecimientos y debe quedar consignado en el Plan de Contingencias y el personal de recolección del residuo derramado debe saber cómo actuar ante la contingencia.
        .bloque-texto-c.bg-blue.p-4
          i.fas.fa-quote-right.mb-3
          p.mb-3 Es necesario disponer de un lugar adecuado para el almacenamiento, lavado, limpieza y desinfección de los recipientes, vehículos de recolección y demás implementos utilizados para la recolección interna. Los recipientes deben ser lavados, desinfectados y secados periódicamente, permitiendo su uso en condiciones sanitarias adecuadas. 
          h5.mb-0 (Área metropolitana del Valle de Aburrá, 2016, p.18) 

    p.mb-4(data-aos="fade") Para asegurar una correcta gestión de residuos, es necesario que 
      b.t-green la ruta de recolección sea visible y estratégica. 
      | Esto debe incluir la ubicación de los puntos ecológicos por colores de segregación, así como la demarcación de la ruta para residuos no peligrosos y la ruta para residuos peligrosos. Además, es importante especificar los horarios y frecuencias de recolección, así como la capacidad de los recipientes. A continuación, se muestra un ejemplo gráfico:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 15.] Ruta sanitaria ejemplo
        img(src='@/assets/curso/temas/tema6/fig18.svg', alt='Ruta sanitaria ejemplo')
        figcaption.mt-3
          p.mb-0 Nota. Guía para elaboración y presentación del plan de gestión integral de residuos hospitalarios y similares-pgirhs aplicado a microgeneradores. Área Metropolitana de Bucaramanga (2002, p.7)


    .row.fondo-green.align-items-center.pt-5.pb-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .col-lg-7.mb-4(data-aos="fade-right")
            p Los residuos son transportados y depositados en los centros de acopio temporal o "Shut" de residuos, ubicados en la organización o localización, y almacenados hasta que son recolectados por la empresa externa de servicio público de aseo, en el caso de los residuos no peligrosos no aprovechables, también conocidos como ordinarios y comunes. Por otro lado, los residuos peligrosos, de reciclaje y manejo especial son recolectados por gestores ambientales externos.
            p El personal que realice la recolección de residuos lo debe hacer con los elementos de protección personal adecuados para la labor, y deben efectuar controles puntuales para verificar que los residuos estén bien separados y segregados.
            p Los equipos de recolección son:
          .col-lg-5.mb-4(data-aos="fade-left")
            .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 16.] Equipos de recolección
            img(src='@/assets/curso/temas/tema6/fig19.png', alt='Equipos de recolección')
            figcaption.mt-2
              p.mb-0 Nota. Guía para la gestión de residuos peligrosos. Universidad Pontificia Bolivariana. (2011, p. 73) 


    p.mb-4(data-aos="fade") En el siguiente video, se presentan algunas recomendaciones útiles para el manejo interno de residuos:
    
    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/upslgyMxARY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Recolección y transporte interno de residuos

      




</template>

<script>
export default {
  name: 'Tema6',
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
