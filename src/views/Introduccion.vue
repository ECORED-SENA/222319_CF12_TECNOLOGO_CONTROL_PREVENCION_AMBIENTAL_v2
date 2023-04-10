<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    p.mb-5(data-aos="fade") A partir de un diagnóstico del manejo de los residuos se realiza la planeación e implementación de la gestión ambiental en el manejo de los residuos según la normativa y las acciones de mejora. El plan de gestión integral de residuos se divide en dos:  gestión interna y gestión externa, en este material se tendrá en cuenta la gestión integral de los residuos a nivel interno.

    .titulo-sexto.color-acento-contenido(data-aos="fade")
      p.mb-0 #[b Figura 1] Esquema para la elaboración del plan de gestión integral de residuos

    .row.fondo-degrade-azul.align-items-center.pt-5.pb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center
          
          .row.justify-content-center.mb-5
            .col-md-9(data-aos="fade-down")
              img(src="@/assets/curso/temas/intro/fig.svg", alt="Esquema para la elaboración del Plan de gestión Integral de Residuos")
              figcaption.mt-3 
                p.mb-0 Nota. Guía para el manejo integral de residuos. Universidad Pontificia Bolivariana y Área metropolitana del Valle de Aburrá (2008, p. 28) 
    
          p.mb-4(data-aos="fade") El plan de gestión integral de residuos en lo relación a la gestión interna hace relación a:
    
    .row.align-items-center.mb-md-4
      .col-md-6.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/temas/intro/img.png", alt="Imagen decorativa")
      .col-md-6.mb-4(data-aos="fade-left")
        .bg-green8.p-4
          ul.lista-ul--color.color-primario
            li 
              i.fas.fa-check
              | Compromiso, organización, objetivos y metas del plan de gestión de residuos.
            li 
              i.fas.fa-check
              | Estrategias de prevención y minimización
            li 
              i.fas.fa-check
              | Separación en la fuente que consiste en: clasificación de los residuos, color de los recipientes, etiquetado y embalado.
            li 
              i.fas.fa-check
              | Recolección y transporte interno de los residuos al cuarto de almacenamiento.
            li 
              i.fas.fa-check
              | Almacenamiento temporal de los residuos en la organización.
            li 
              i.fas.fa-check
              | Planeación en el aprovechamiento, tratamiento y/o disposición final de los residuos. 
            li 
              i.fas.fa-check
              | Capacitaciones internas de formación y educación ambiental en la gestión de los residuos en la organización.
            li 
              i.fas.fa-check
              | Plan de contingencia y seguridad y salud en el trabajo, manejo de elementos de protección personal.
            li.mb-0
              i.fas.fa-check
              | Plan de seguimiento de la gestión de los residuos.
    
    p.mb-4 Guía para el manejo integral de residuos. Universidad Pontificia Bolivariana y Área metropolitana del valle de aburrá (2008, p.28)

    .row.align-items-center.p-2.bg-blue2.pt-4
      .col-md-5.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/temas/intro/img2.png", alt="Imagen decorativa")
      .col-md-7.mb-4(data-aos="fade-left")
        p.mb-4 En el material complementario puede revisar los videos “Programa Integral de Residuos Sólidos PGIRS en IPSE” y “¿Cómo hacer un manejo integral de los residuos?”
        .row.justify-content-center
          .col-lg-10
            a.anexo.mb-4.mb-md-3(href="https://www.youtube.com/watch?v=tidePrlbXzU" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <strong>Programa Integral de Residuos Sólidos PGIRS en IPSE</strong>
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=MUTCWejAUAw" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <strong>Cómo hacer un manejo integral de los residuos</strong>
                                  





</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
