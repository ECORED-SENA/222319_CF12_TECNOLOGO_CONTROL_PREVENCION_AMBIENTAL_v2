<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Recolección y transporte interno de residuos

    .row.align-items-center.mb-md-2
      .col-md-7.mb-4(data-aos="fade-right")
        p Se deben diseñar rutas de recolección interna de residuos según la distribución de los puntos de generación y que cubran la totalidad de la organización, estableciendo horarios y frecuencias e identificando en cada uno de estos lo siguiente: 
        ul.lista-ul--color.color-primario.ps-md-4.ps-3.mb-4
          li 
            i.fas.fa-check
            | Localización, número y capacidad de los recipientes donde se encuentran los residuos. 
          li 
            i.fas.fa-check
            | Tipo de residuo generado, lo cual está asociado al color del recipiente. 
        p.bg-green.p-4 Esta actividad puede realizarse con la ayuda de planos de la edificación donde funciona la organización, creando un plano de ruta sanitaria.
        p La frecuencia de recolección interna dependerá de la capacidad de almacenamiento y el tipo de residuo generado. Los elementos empleados para la recolección de residuos peligrosos son de uso exclusivo para este fin. 
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema6/img.png', alt='Imagen decorativa')

    .row.align-items-center.mb-md-3
      .col-md-6.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema6/img2.png', alt='Imagen decorativa')
      .col-md-6.mb-4(data-aos="fade-left")
        p El tiempo de permanencia de los residuos en los puntos de generación debe ser el mínimo posible, especialmente en áreas donde se generan residuos peligrosos. En el evento de un derrame de residuos peligrosos, se efectuará de inmediato acciones correctivas, conforme a las recomendaciones dadas por los proveedores en las hojas de seguridad de cada material. Deben establecerse los procedimientos para este tipo de acontecimientos y debe quedar consignado en el Plan de Contingencias y el personal de recolección del residuo derramado debe saber cómo actuar ante la contingencia.
        .bloque-texto-c.bg-blue.p-4
          i.fas.fa-quote-right.mb-3
          p.mb-3 Es necesario disponer de un lugar adecuado para el almacenamiento, lavado, limpieza y desinfección de los recipientes, vehículos de recolección y demás implementos utilizados para la recolección interna. Los recipientes deben ser lavados, desinfectados y secados periódicamente, permitiendo su uso en condiciones sanitarias adecuadas. Manual para el manejo integral de residuos sólidos en el valle de aburra. 
          h5.mb-0 Área metropolitana del valle de aburrá (2016, p.18) 

    p.mb-4(data-aos="fade") La ruta de recolección requiere estar en plano y estar publicada en un lugar visible y estratégico y verse en el plano la ubicación de los puntos ecológicos por colores de segregación y la demarcación de la ruta de residuo no peligroso y la ruta de residuo peligroso, los horarios y frecuencias de recolección y la capacidad de los recipientes. En la siguiente gráfica se presenta un ejemplo.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 18] Ruta sanitaria ejemplo
        img(src='@/assets/curso/temas/tema6/fig18.svg', alt='Ruta sanitaria ejemplo')
        figcaption.mt-3
          p.mb-0 Nota. Guía para elaboración y presentación del plan de gestión integral de residuos hospitalarios y similares-pgirhs aplicado a microgeneradores. Área Metropolitana de Bucaramanga (2002, p.7)


    .row.fondo-green.align-items-center.pt-5.pb-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .col-md-7.mb-4(data-aos="fade-right")
            p Los residuos son transportados, depositados y almacenados en los centros de acopio temporal y/o “Shut” de residuos dispuesto en la organización o localización a la espera de la recolección de la empresa externa local de servicio público de aseo si es residuo no peligroso no aprovechable los conocidos como ordinarios y comunes y de gestores ambientales externos para los residuos peligrosos, de reciclaje y manejo especial. 
            p El personal que realice la recolección de residuos lo debe hacer con los elementos de protección personal adecuados para la labor, y deben efectuar controles puntuales para verificar que los residuos estén bien separados y segregados.
            p Los equipos de recolección son:
          .col-md-5.mb-4(data-aos="fade-left")
            .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 19] Equipos de recolección
            img(src='@/assets/curso/temas/tema6/fig19.png', alt='Equipos de recolección')
            figcaption.mt-2
              p.mb-0 Nota. Guía para la gestión de residuos peligrosos. Universidad Pontificia Bolivariana. (2011, p. 73) 


    p.text-center.mb-4(data-aos="fade") Considere a continuación unos tips referentes al movimiento interno de residuos:
    
    SlyderF.mb-5(columnas="col-md-6 col-lg-4" data-aos="fade-down")
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide1-ico1.svg' alt='Icono')
          p.text-center Usar los elementos de protección individual (tapabocas, botas, uniforme, guantes de caucho) cuando se realice la recolección de residuos y almacenamiento de los residuos.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide1-ico2.svg' alt='Icono')
          p.text-center Mantener limpios los elementos de protección personal.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide1-ico3.svg' alt='Icono')
          p.text-center Usar los vehículos de recolección y solo por el pasillo de acuerdo con la ruta interna de recolección establecida.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide1-ico4.svg' alt='Icono')
          p.text-center No vaciar el contenido de una bolsa en el interior de otra.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide1-ico5.svg' alt='Icono')
          p.text-center En caso de que los recipientes estén sucios, estos deben lavarse antes de colocar las bolsas.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide1-ico6.svg' alt='Icono')
          p.text-center Las bolsas nuevas deben ser introducidas en los recipientes de modo que sobresalgan 5 0 10 centímetros, con los cuales se hace un pliegue sobre el borde superior del recipiente.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide1-ico7.svg' alt='Icono')
          p.text-center No comprimir las bolsas de residuos con el pie o con la mano.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide1-ico8.svg' alt='Icono')
          p.text-center No retirar las bolsas de su soporte antes de cerrarlas.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide1-ico9.svg' alt='Icono')
          p.text-center No acercarse las bolsas al cuerpo o a las piernas.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide1-ico10.svg' alt='Icono')
          p.text-center No arrastrar las bolsas por el suelo o dejarlas en el suelo.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide1-ico11.svg' alt='Icono')
          p.text-center No tirar las bolsas o recipientes.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide1-ico12.svg' alt='Icono')
          p.text-center No dejar temporalmente las bolsas y los recipientes en lugares de paso.


    SlyderF.mb-5(columnas="col-md-6 col-lg-4" data-aos="fade-down")
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide2-ico1.svg' alt='Icono')
          p.text-center No apilar las bolsas en los recipientes que no corresponden ni a alturas considerables.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide2-ico2.svg' alt='Icono')
          p.text-center Antes de almacenar los residuos se deben pesar y registrar en la planilla de control de residuos.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide2-ico3.svg' alt='Icono')
          p.text-center De acuerdo con el tipo de residuo, las bolsas se depositan en celdas separadas en el cuarto de almacenamiento.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide2-ico4.svg' alt='Icono')
          p.text-center Una vez que los residuos llegan al sitio final de almacenamiento, no deben ser abiertos ni mucho menos debe extraerse parte o la totalidad de su contenido.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide2-ico5.svg' alt='Icono')
          p.text-center Debe garantizarse la integridad de los residuos hasta el momento de la recolección externa por el gestor externo.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide2-ico6.svg' alt='Icono')
          p.text-center En caso de accidente o derrame, inmediatamente se debe llevar a cabo una limpieza y desinfección del lugar.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide2-ico7.svg' alt='Icono')
          p.text-center Los vehículos y canecas deben ser lavados y desinfectados frecuentemente y cada vez que se requiera. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide2-ico8.svg' alt='Icono')
          p.text-center Los vehículos solo se utilizan en los pasillos, no puede entrar a las áreas esta parte se hace manualmente es únicamente para el recorrido en el pasillo según ruta sanitaria.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide2-ico9.svg' alt='Icono')
          p.text-center Absténgase de tocar con las manos enguantadas alguna parte de su cuerpo mientras se esté manipulando los residuos.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide2-ico10.svg' alt='Icono')
          p.text-center No fume y no consuma alimentos mientras realiza las actividades.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide2-ico11.svg' alt='Icono')
          p.text-center Si se presenta alguna herida por pequeña que sea, cúbrela con esparadrapo o curitas. pero si no se controla la hemorragia no siga con las actividades, avise al asistente administrativo o algún representante del grupo administrativo de gestión ambiental y sanitaria.
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema6/slide2-ico12.svg' alt='Icono')
          p.text-center Mantenga actualizado su esquema de vacunación contra hepatitis B, Tétano, el personal femenino, si está en embarazo debe contar con rubéola y sarampión. Lavarse las manos luego de realizar las labores.





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
