<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Prevención y minimización de residuos

    
    figure.mb-4(data-aos="fade")
      img(src='@/assets/curso/temas/tema4/img.jpg' alt='Banner')

    p(data-aos="fade") La prevención y la minimización en la generación de los residuos desde su origen es la forma más eficaz de reducir la cantidad de residuos a manejar, el costo asociado a su manipulación y los impactos a la salud y al ambiente. 
    p.mb-4(data-aos="fade") Esta actividad implica:

    TabsA.color-acento-contenido.mb-5(data-aos="fade-down")
      .tarjeta.bg-green7.p-4(titulo="La adopción de buenas prácticas")
        .row.justify-content-center
          .col-md-7
            h4 La adopción de buenas prácticas
            p La adopción de buenas prácticas, la optimización de los procesos, el cambio a tecnologías limpias, la sustitución de materias primas y la modificación de productos. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema4/tab1.png', alt='Imagen decorativa')
      .tarjeta.bg-green7.p-4(titulo="La reutilización de elementos")
        .row.justify-content-center
          .col-md-7
            h4 La reutilización de elementos
            p La reutilización de elementos que se generan en los procesos de la organización. Igualmente, el reciclaje de materiales, aprovechamiento de subproductos utilizándolos como materias primas dentro del mismo proceso productivo o dentro de otro. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema4/tab2.png', alt='Imagen decorativa')
      .tarjeta.bg-green7.p-4(titulo="La utilización de una menor cantidad de empaques")
        .row.justify-content-center
          .col-md-7
            h4 La utilización de una menor cantidad de empaques
            p La utilización de una menor cantidad de empaques, solicitando al proveedor la entrega de productos sin envolturas innecesarias, el empleo de elementos que sean susceptibles de aprovechamiento para reemplazar el uso de aquellos que no lo son. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema4/tab3.png', alt='Imagen decorativa')
    
    
    p.mb-4 El siguiente gráfico ilustra las estrategias de gestión de residuos que puede tener en cuenta el generador, para lograr la minimización.
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 4] Estrategias de minimización
        img(src='@/assets/curso/temas/tema4/fig4.svg', alt='Estrategias de minimización')
        figcaption.mt-2 
          p.mb-0 Nota. Manual para el manejo integral de residuos sólidos en el Valle de Aburrá. Área metropolitana del Valle de Aburrá (2016, p. 18)
    
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img2.png')})`}")
      .bloque-texto-g__texto.p-4.p-md-5
        p.mb-0 Para los generadores, la implementación de estrategias de gestión orientadas a la prevención y minimización de los residuos representa beneficios económicos, ambientales, legales y de imagen pública, entre otros. Sin embargo, debe haber un compromiso de la gerencia o de la dirección de la organización frente a la gestión de los residuos, para garantizar que el programa tenga éxito, reconociendo que su implementación reducirá costos y mejorará su actuación ambiental, expresando su adopción a través de la política ambiental de la empresa, organización o institución. 
    

    p.mb-0(data-aos="fade") Antes de tomar la decisión sobre la implementación de una o varias alternativas identificadas, se recomienda evaluar su factibilidad utilizando criterios técnicos, legales, financieros y ambientales. Manual para el manejo integral de residuos sólidos en el Valle de Aburrá. Área metropolitana del Valle de Aburrá (2016, p.18)
    p.mb-4(data-aos="fade") Para estas actividades en las organizaciones generan estrategias de prevención y minimización llamados programas o por medio de campañas, si por medio de programas ambientales muchas veces llevan objetivo, meta e indicador específico para saber la eficacia del programa, como:
    
    .row.mb-4
      .col-md-6.h-100(data-aos="fade-right")
        .bg-green8.px-4.py-5
          ul.lista-ul--color.color-primario
            li 
              i.fas.fa-check
              | Programa de disminución de consumo de papel.

            li 
              i.fas.fa-check
              | Programa de no uso del pitillo.
            li 
              i.fas.fa-check
              | Programa de no uso de vasos desechables.
            li 
              i.fas.fa-check
              | Programa de no uso de la bolsa desechable.
            li 
              i.fas.fa-check
              | Programa de ahorro de recursos de productos en general teniendo en cuenta la normativa obligatoria o tendencias de disminución de algún tipo de bien que puede ser un potencial residuo y que puede ser prevenido.
      .col-md-6.h-100(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema4/img3.png', alt='Imagen decorativa')


    .row.align-items-center.p-2.bg-blue2.pt-4
      .col-lg-5(data-aos="fade-right")
        img(src="@/assets/curso/temas/intro/img2.png", alt="Imagen decorativa")
      .col-lg-7(data-aos="fade-left")
        p.mb-4 En el material complementario puede revisar el video “Campaña cero papel SENA”, para conocer más del tema.
        .row.justify-content-center
          .col-lg-10
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=37Y2a2R0ORg&ab_channel=comunicacionesfusa" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <strong>Campaña cero papel SENA</strong>
   

</template>

<script>
export default {
  name: 'Tema4',
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
