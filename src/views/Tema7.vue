<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Almacenamiento de residuos


    p.mb-4(data-aos="fade") Un sitio de almacenamiento de residuos puede ser una bodega separada por residuos o en una sola, pero, dividida por compartimentos, también los hay estilo 
      em lockers 
      | o en 
      em buggies 
      | de gran tamaño, a continuación, se relaciona un sitio de almacenamiento de residuos estándar que se utiliza, de acuerdo con criterios de almacenamiento normativos para cuartos de almacenamiento.

    .row.justify-content-center.mb-5
      .col-md-5.mb-4(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 18.] Sitio de almacenamiento de residuos ejemplo 1
        img(src='@/assets/curso/temas/tema7/fig20.jpg', alt='Sitio de almacenamiento de residuos ejemplo 1')
        figcaption.mt-2 
          p.mb-0 Nota. Almacenamiento de residuos peligrosos. SOCOAM (s.f)
      .col-md-5.mb-4(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 19.] Sitio de almacenamiento de residuos ejemplo 2
        img(src='@/assets/curso/temas/tema7/fig21.jpg', alt='Sitio de almacenamiento de residuos ejemplo 2')
      .col-md-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 20.] Cuarto de almacenamiento de residuos 
        img(src='@/assets/curso/temas/tema7/fig22.png', alt='Cuarto de almacenamiento de residuos ')
        figcaption.mt-2 
          p.mb-0 Nota. Guía para la gestión de residuos peligrosos. Universidad Pontificia Bolivariana. (2011, p.71) 


    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img.jpg')})`}")
      .bloque-texto-g__texto.p-5
        p.mb-0 Los sitios de almacenamiento para residuos no peligrosos y residuos peligrosos (RESPEL) están diseñados para garantizar un acopio seguro por un período de tiempo determinado, hasta su posterior gestión externa.
          br
          br
          | Es fundamental que la organización revise las características del sitio de almacenamiento y, en caso de no cumplir con las normas vigentes en la materia, adopte las medidas necesarias para adecuarlo.


    p(data-aos="fade") Para el almacenamiento interno de residuos, se debe contar con un sitio de almacenamiento central y, en caso necesario, con sitios de almacenamiento intermedios. Estos últimos se justifican cuando la organización genera grandes cantidades de residuos o cuando se ubican en diferentes pisos de la edificación.
    p.mb-4(data-aos="fade") Se recomienda establecer un lugar de almacenamiento de residuos dentro de la organización, teniendo en cuenta las características que se presentan en la siguiente infografía:
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.fondo-tema7
        .row.align-items-center.p-4.pb-0
          .col-md-3.col-6.mb-4.mb-md-0
            img(src='@/assets/curso/temas/tema7/img2.svg', alt='')
          .col-md-9
            ul.lista-ul--color.color-primario.fa-ul
              li
                i.fas.fa-check
                | Área de acceso restringido, con elementos de señalización.
              li
                i.fas.fa-check
                | Cubierto para protección de aguas lluvias.
              li
                i.fas.fa-check
                | Iluminación y ventilación adecuadas.
              li
                i.fas.fa-check
                | Paredes lisas de fácil limpieza, pisos duros y lavables con ligera pendiente al interior.
              li
                i.fas.fa-check
                | Equipo de extinción de incendios.
              li
                i.fas.fa-check
                | Acometida de agua y drenajes para lavado.
              li
                i.fas.fa-check
                | Elementos que impidan el acceso de vectores, roedores, etc.
              li
                i.fas.fa-check
                | Disponer de una báscula y llevar un registro para el control de la generación de residuos.
              li
                i.fas.fa-check
                | A la entrada del lugar de almacenamiento debe colocarse un aviso a manera de cartelera, identificando claramente el sitio de trabajo, los materiales manipulados, el código de colores y los criterios de seguridad, implementándose un estricto programa de limpieza, desinfección y control de plagas. 
    
    
    
    p(data-aos="fade") Los residuos peligrosos que por su contenido puedan reaccionar entre sí de forma violenta, no deben ser almacenados conjuntamente, ya que, en caso de incendio, caídas, roturas o cualquier otro tipo de incidente, los recipientes que los contienen pueden resultar dañados y los productos contenidos en ellos pueden entrar en contacto, produciendo reacciones peligrosas.
    p.mb-4(data-aos="fade") En el siguiente gráfico se presenta un resumen de las incompatibilidades más características para los residuos peligrosos:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-5
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 21.] Matriz de incompatibilidad de residuos peligrosos
        img(src='@/assets/curso/temas/tema7/fig23.png', alt='Matriz de incompatibilidad de residuos peligrosos')
        figcaption.mt-2 
          p.mb-0 Nota. Manual para el manejo integral de residuos sólidos en el Valle de Aburrá. Área metropolitana del  Valle de Aburrá  (2016, p. 22) 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .titulo-sexto.color-acento-contenido.mt-4
          p.mb-0 #[b Figura 22.] Matriz de incompatibilidad de residuos químicos
        img(src='@/assets/curso/temas/tema7/fig24.png', alt='Matriz de incompatibilidad de residuos químicos')
        figcaption
          p.mb-0 #[b Nota.] Matriz de incompatibilidad. Universidad Javeriana (2017)




</template>

<script>
export default {
  name: 'Tema7',
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
