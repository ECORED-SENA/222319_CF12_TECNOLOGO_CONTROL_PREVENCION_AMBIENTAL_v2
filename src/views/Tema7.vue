<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Almacenamiento de residuos


    p.mb-4(data-aos="fade") Un sitio de almacenamiento de residuos puede ser una bodega separada por residuos o en una sola pero dividida por compartimentos, también los hay estilo lockers o en buggies de gran tamaño, a continuación, se relaciona un sitio de almacenamiento de residuos estándar que se utilizan, de acuerdo con criterios de almacenamiento normativos para cuartos de almacenamiento.

    .row.justify-content-center.mb-5
      .col-md-5.mb-4(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 20] Sitio de almacenamiento de residuos ejemplo 1
        img(src='@/assets/curso/temas/tema7/fig20.jpg', alt='Sitio de almacenamiento de residuos ejemplo 1')
        figcaption.mt-2 
          p.mb-0 Nota. Almacenamiento de residuos peligrosos. SOCOAM (s.f)
      .col-md-5.mb-4(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 21] Sitio de almacenamiento de residuos ejemplo 2
        img(src='@/assets/curso/temas/tema7/fig21.jpg', alt='Sitio de almacenamiento de residuos ejemplo 2')
        figcaption.mt-2 
          p.mb-0 Nota. Unidad de verificación en temas de auditorías ambientales. Mario Duran Herrera (2005, p. 17) 
      .col-md-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 22] Cuarto de almacenamiento de residuos 
        img(src='@/assets/curso/temas/tema7/fig22.png', alt='Cuarto de almacenamiento de residuos ')
        figcaption.mt-2 
          p.mb-0 Nota. Guía para la gestión de residuos peligrosos. Universidad Pontificia Bolivariana. (2011, p.71) 


    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img.jpg')})`}")
      .bloque-texto-g__texto.p-5
        p.mb-0 Los sitios de almacenamiento para residuos no peligrosos y residuos peligrosos - RESPEL están diseñados para acopiar los residuos en un sitio seguro por un periodo de tiempo determinado, a la espera de su gestión externa. 
          br
          br
          | Es importante que la organización revise las características que presenta el sitio de almacenamiento y en caso de no presentarse conformidad con lo establecido en las normas vigentes sobre la materia, adopte las acciones pertinentes. 


    p(data-aos="fade") Para el almacenamiento interno de residuos debe contarse con un sitio de almacenamiento central y en caso de ser necesario con sitios de almacenamiento intermedios. Estos últimos se justifican cuando la organización presenta áreas grandes de generación o cuando se ubican en diferentes pisos de la edificación. 
    p.mb-4(data-aos="fade") Se recomienda establecer un lugar de almacenamiento de residuos dentro de la organización, evaluando las características que debe cumplir como:
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.fondo-tema7
        .row.align-items-center.p-4.pb-0
          .col-md-3.mb-4.mb-md-0
            img(src='@/assets/curso/temas/tema7/img2.svg', alt='Imagen decorativa')
          .col-md-9
            ul.lista-ul--color.color-primario
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
    
    
    .row.align-items-center.mb-md-3
      .col-md-6.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema7/img3.jpg', alt='Imagen decorativa')
      .col-md-6.mb-4(data-aos="fade-left")
        p Guía para elaboración y presentación del plan de gestión integral de residuos hospitalarios y similares-pgirhs aplicado a micro generadores. Área Metropolitana de Bucaramanga (2010, p. 8) 
        p Los residuos peligrosos que por su contenido puedan reaccionar entre sí de forma violenta, no deben ser almacenados conjuntamente, ya que, en caso de incendio, caídas, roturas o cualquier otro tipo de incidente, los recipientes que los contienen pueden resultar dañados y los productos contenidos en ellos pueden entrar en contacto produciendo reacciones peligrosas.


    p.mb-4(data-aos="fade") En el siguiente gráfico se presenta un resumen de las incompatibilidades más características para los residuos peligrosos:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-5
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 23] Matriz de incompatibilidad de residuos peligrosos
        img(src='@/assets/curso/temas/tema7/fig23.png', alt='Matriz de incompatibilidad de residuos peligrosos')
        figcaption.mt-2 
          p.mb-0 Nota. Manual para el manejo integral de residuos sólidos en el valle de aburrá. Área metropolitana del valle de aburra (2016, p. 22) 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .titulo-sexto.color-acento-contenido.mt-4
          p.mb-0 #[b Figura 24] Matriz de incompatibilidad de residuos químicos
        img(src='@/assets/curso/temas/tema7/fig24.png', alt='Matriz de incompatibilidad de residuos químicos')
        figcaption
          p.mb-0 Nota. Matriz de incompatibilidad .Universidad Javeriana (2017)


    p.text-center.mb-4(data-aos="fade") Considere a continuación algunos tips referentes al almacenamiento de residuos:      

    SlyderF.mb-5(columnas="col-md-6 col-lg-4" data-aos="fade-down")
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide1-ico1.svg' alt='Icono')
          p.text-center Usar los elementos de protección individual (tapabocas, botas, bata u overol, guantes de caucho y gafas si es requerido.) cuando se realice el almacenamiento de residuos. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide1-ico2.svg' alt='Icono')
          p.text-center Mantener limpios los elementos de protección personal. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide1-ico3.svg' alt='Icono')
          p.text-center Antes de almacenar los residuos se deben pesar, rotular y registrar en la planilla de control. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide1-ico4.svg' alt='Icono')
          p.text-center No comprimir las bolsas de residuos con el pie o con la mano. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide1-ico5.svg' alt='Icono')
          p.text-center No acercarse las bolsas al cuerpo o a las piernas. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide1-ico6.svg' alt='Icono')
          p.text-center No arrastrar las bolsas por el suelo o dejarlas en el piso. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide1-ico7.svg' alt='Icono')
          p.text-center No tirar las bolsas o recipientes.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide1-ico8.svg' alt='Icono')
          p.text-center No dejar temporalmente las bolsas y los recipientes con residuos en lugares de paso, sitios no autorizados o quemarlos o enterrarlos. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide1-ico9.svg' alt='Icono')
          p.text-center No apilar las bolsas en los recipientes que no corresponden ni a alturas considerables. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide1-ico10.svg' alt='Icono')
          p.text-center Dejar los residuos en el almacenamiento debidamente en la caneca según el residuo y tapar. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide1-ico11.svg' alt='Icono')
          p.text-center Una vez que los residuos llegan al sitio final de almacenamiento, no deben ser abiertos ni mucho menos debe extraerse parte o la totalidad de su contenido. 


    SlyderF.mb-5(columnas="col-md-6 col-lg-4" data-aos="fade-down")
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide2-ico1.svg' alt='Icono')
          p.text-center Debe garantizarse la integridad de los residuos hasta el momento de la recolección externa por el gestor externo. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide2-ico2.svg' alt='Icono')
          p.text-center En caso de accidente o derrame, inmediatamente se debe llevar a cabo una limpieza y desinfección del lugar. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide2-ico3.svg' alt='Icono')
          p.text-center Las escobas y traperos para el aseo del sitio de almacenamiento deben ser diferentes a los utilizados para la limpieza y aseo del área interna de la sede. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide2-ico4.svg' alt='Icono')
          p.text-center Realizar cada vez que el gestor externo se lleva los residuos del sitio de almacenamiento la limpieza y desinfección al mismo, aplica para la desinfección de pisos y paredes  
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide2-ico5.svg' alt='Icono')
          p.text-center Efectuar fumigaciones contra insectos y roedores, mínimo cada seis meses en el sitio de almacenamiento. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide2-ico6.svg' alt='Icono')
          p.text-center Absténgase de tocar con las manos enguantadas alguna parte de su cuerpo mientras manipula los residuos. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide2-ico7.svg' alt='Icono')
          p.text-center No fume y no consuma alimentos mientras realiza las operaciones de aseo y desinfección. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide2-ico8.svg' alt='Icono')
          p.text-center Si se presenta alguna herida por pequeña que sea, cúbrala con esparadrapo o curitas. Pero si no se controla la hemorragia no siga con las actividades, avise al asistente administrativo o algún representante del Grupo Administrativo de Gestión Ambiental y Sanitaria. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide2-ico9.svg' alt='Icono')
          p.text-center Mantenga actualizado su esquema de vacunación contra Hepatitis B, tétano y al personal femenino, si está en embarazo debe contar con Rubéola y Sarampión. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema7/slide2-ico10.svg' alt='Icono')
          p.text-center Lavarse las manos luego de realizar las actividades. 








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
