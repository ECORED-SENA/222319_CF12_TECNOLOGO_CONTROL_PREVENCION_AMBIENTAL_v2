<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Seguridad y Salud en el Trabajo

    .row.align-items-center
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema9/img.jpg', alt='Imagen decorativa')
      .col-md-8.mb-4(data-aos="fade-left")
        p Se deberán incluir las medidas de higiene y seguridad que permitirán proteger la salud del trabajador y prevenir riesgos que atenten contra su integridad. Así mismo, estas medidas contemplan aspectos de capacitación en procedimientos de bioseguridad y el trabajo, higiene y protección personal, entre otras y son complementarias a las condiciones del ambiente de trabajo, tales como iluminación, ventilación, ergonomía, etc.
        .bloque-texto-c.bg-blue.p-4
          i.fas.fa-quote-right.mb-3
          p.mb-3 Es importante tener en cuenta que todo empleador que tenga a su cargo trabajadores que participen en la manipulación de residuos debe cumplir con lo estipulado en la normatividad vigente sobre seguridad y salud en el trabajo. 
          h5.mb-0 Área Metropolitana de Bucaramanga (2010, p. 9)


    Separador

    #t_9_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 9.1 Elementos de protección personal para el manejo de residuos

    p.mb-4(data-aos="fade") Es obligatorio el uso de elementos de protección personal para las actividades de recolección de residuos y almacenamiento de residuos por el personal que realiza estas labores.

    .row.justify-content-center
      .col-md-10(data-aos="fade")
        .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 5] Elementos de protección según actividad en residuos
      .col-md-10.bg-blue4.py-3(data-aos="fade-down")
        .tabla-a.tema9-1
          table
            caption.bg-white.mt-2
              p.mb-0 Nota. Guía de manejo de residuos peligrosos en la sección servicios integrales de salud y desarrollo psicosocial. Universidad industrial de Santander (2009, 4) 
            thead
              tr.bg-green4.text-center
                th Actividad
                th Elementos de protección	
                th Gráfico
            tbody.bg-gray
              tr   
                td.text-bold Recolección de residuos 
                td 
                  p.mb-1 Ropa de trabajo institucional
                  p.mb-1 Delantal de caucho tipo industrial (opcional)
                  p.mb-1 Guantes de caucho tipo industrial
                  p.mb-1 Botas de caucho con suela antideslizante o botas de cuero antideslizante
                  p.mb-1 Tapabocas (para no peligrosos)
                  p.mb-1 Tapabocas N95 (para peligrosos infecciosos)
                  p.mb-1 Mascarilla de gases (para peligrosos res. Químicos)
                td 
                  img.mb-2(src='@/assets/curso/temas/tema9/tabl1.jpg', alt='Recolección de residuos')
                  p.mb-0.text-small Manejo de residuos hospitalarios (2010) Equipos de protección personal p.25
              tr 
                td.text-bold Lavado del Cuarto de almacenamiento de residuos 
                td 
                  p.mb-1 Overol de color claro con manga larga antifluido
                  p.mb-1 Delantal plástico de tipo industrial color claro y ajustado a la cintura (si es requerido o si no tiene el traje antifluido)
                  p.mb-1 Guantes de caucho tipo industrial color claro calibre 25 largo 20 
                  p.mb-1 Protección ocular
                  p.mb-1 Mascarilla de alta eficiencia categoría N95% en filtración (CDC, NIOSH o mascarilla de gases)
                  p.mb-1 Botas de caucho con suela antideslizante
                td 
                  img.mb-2(src='@/assets/curso/temas/tema9/tabl2.jpg', alt='Lavado del Cuarto de almacenamiento de residuos')
                  p.mb-0.text-small Universidad industrial de Santander (2009) Guía de manejo de residuos peligrosos en la sección servicios integrales de salud y desarrollo psicosocial.p.74  


    Separador

    #t_9_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 9.2 Plan de contingencia

    p(data-aos="fade") Todo Plan de Contingencias se debe basar en los potenciales escenarios de riesgo del sistema, que deben obtenerse del análisis de vulnerabilidad realizado, de acuerdo con las amenazas que pueden afectar a la organización durante su funcionamiento.  
    p.mb-4(data-aos="fade") El Plan de Contingencias debe incluir procedimientos generales de atención de emergencias y procedimientos específicos para cada escenario de riesgo identificado. 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.bg-blue2.py-4
        .row.align-items-center.ps-md-0
          .col-md-3.mb-3
            img(src='@/assets/curso/temas/tema9/img2.svg', alt='Imagen decorativa')
          .col-md-9.mb-3
            p La elaboración del Plan de Contingencias debe seguir los siguientes parámetros: 
            ul.lista-ul--color.color-primario.ps-3.ps-md-4
              li
                i.fas.fa-check
                | Análisis de riesgo,
              li
                i.fas.fa-check
                | Identificación y caracterización de peligros y amenazas
              li
                i.fas.fa-check
                | Análisis de vulnerabilidad por amenazas
              li
                i.fas.fa-check
                | Definición de los escenarios de riesgo
              li
                i.fas.fa-check
                | Organización del Plan de Emergencias
              li
                i.fas.fa-check
                | Puesta en marcha del Plan de Emergencias
              li
                i.fas.fa-check
                | Responsables de la elaboración y puesta en marcha del Plan de Contingencias.
        p.px-3.mb-0 Guía para el manejo integral de residuos. Universidad Pontificia Bolivariana y Área metropolitana del Valle de Aburrá (2008, p. 55) 


    h3.subt.text-white.mb-4(data-aos="fade") Análisis de riesgos

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema9/img3.jpg')})`}")
      .bloque-texto-g__texto.p-5
        p.mb-0 El análisis de riesgos tiene por objetivo identificar y evaluar cuales son aquellos eventos o condiciones que pueden llegar a ocasionar una emergencia. Este análisis se convierte en una herramienta para establecer las medidas de prevención y control de los riesgos asociados a la actividad de la organización, al entorno físico y al entorno social en el cual desarrolla sus funciones. El análisis de riesgos está conformado por las etapas de identificación y caracterización de peligros y amenazas de carácter natural o antrópico, el análisis de vulnerabilidad por amenaza, la evaluación del riesgo y la identificación de escenarios de riesgo.


    h3.subt.text-white.mb-4(data-aos="fade") Identificación y caracterización de los peligros y las amenazas
    p(data-aos="fade") Se entiende por peligro, una fuente o situación con potencial de daño en términos de lesión o enfermedad, daño a la propiedad, al ambiente de trabajo, al medio ambiente o una combinación de éstos, y por amenaza, la probabilidad de que un fenómeno de origen natural o humano, eventualmente, cause daño y genere pérdidas, y que se produzca en un determinado tiempo y lugar.

    .row.align-items-center
      .col-md-7.mb-4(data-aos="fade-right")
        p En la identificación de peligros, la organización debe realizar una observación y estudio detallado de los procesos, las actividades que realiza y su entorno, indicando cuáles son aquellas situaciones que pueden generar una emergencia. Una vez identificados los peligros, éstos deben ser analizados según su probabilidad de ocurrencia en términos de amenaza.
        p.bg-green.p-4 Para identificar los posibles peligros, se deben analizar y determinar aspectos como la combinación o mezcla de sustancias químicas y los residuos con características peligrosas, con el almacenamiento o transporte de gases tóxicos o líquidos corrosivos, la inflamabilidad de una sustancia, la presencia de materiales radiactivos, el deterioro de la vía, los cuales, pueden interactuar con peligros de origen natural y social, como por ejemplo, la presencia de una falla geológica, de ríos, de volcanes, las condiciones atmosféricas adversas en la zona, o las condiciones políticas y sociales de la región.
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema9/img4.jpg', alt='Imagen decorativa')

    p(data-aos="fade") La probabilidad de ocurrencia de las amenazas relacionadas con el almacenamiento y transporte de sustancias químicas y residuos peligrosos, tales como la fuga de un gas tóxico o el derrame de un combustible, se pueden ver potenciadas por la probabilidad de amenazas de tipo natural o social, como por ejemplo el desbordamiento de un río, una erupción volcánica o un atentado terrorista.
    p.mb-4(data-aos="fade") En la Tabla se muestran algunas de las posibles amenazas que pueden afectar los componentes del Manejo Integral de Residuos Sólidos.

    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Tabla 6]  Amenaza en las actividades de residuos
    .tabla-a.tema9-2.text-center.mb-5
      table
        caption.mt-3
          p.mb-0 Nota. Guía para elaboración y presentación del plan de gestión integral de residuos hospitalarios y similares-pgirhs aplicado a micro generadores. Área Metropolitana de Bucaramanga (2010, p. 57) 
        thead
          tr.bg-green4
            th No.
            th Amenaza
            th Presentación
            th Almacenamiento
            th Recolección Interna
            th Recolección externa
            th Tratamiento de residuos orgánicos
            th Aprovechamiento Material Reciclable
            th Tratamiento de residuos peligrosos
            th Disposición final
        tbody.bg-gray2
          tr   
            td 1
            td Incendios y explosiones
            td X
            td X
            td X
            td X
            td
            td X
            td X
            td X
          tr   
            td 2
            td Tormentas y huracanes
            td X
            td 
            td 
            td X
            td X
            td X 
            td X
            td X
          tr   
            td 3
            td Deslizamientos
            td 
            td 
            td 
            td X
            td X
            td X 
            td X 
            td X 
          tr   
            td 4
            td Sismos
            td X
            td X
            td X 
            td X  
            td X
            td X
            td X
            td X
          tr   
            td 5
            td Interrupción de servicios públicos como agua y energía
            td 
            td X
            td 
            td 
            td X
            td X
            td X
            td 
          tr   
            td 6
            td Incremento en las tasas de generación de residuos
            td X
            td X
            td X
            td X
            td X
            td X
            td X
            td X
          tr   
            td 7
            td No recolección total o parcial de los residuos
            td X
            td X
            td X 
            td X
            td X
            td X
            td X
            td X
          tr   
            td 8
            td Cierre temporal o permanente del sitio de disposición final
            td X
            td X
            td X
            td X
            td X
            td X
            td X 
            td X
          tr   
            td 9
            td Derrame de residuos peligrosos y/o especiales
            td X
            td X
            td X 
            td X
            td
            td 
            td X
            td 
          tr   
            td 10
            td Separación inadecuada de los residuos
            td X
            td 
            td 
            td X
            td X
            td X
            td X
            td X 
          tr   
            td 11
            td Incompatibilidad en el almacenamiento de residuos peligrosos
            td 
            td X
            td 
            td X
            td
            td 
            td X
            td X
          tr   
            td 12
            td Fallas en el proceso de tratamiento térmico de residuos peligrosos
            td 
            td 
            td 
            td 
            td
            td 
            td X 
            td X
          tr   
            td 13
            td Fallas en entidades encargadas de la recolección, transporte y disposición de cierto tipo de residuos peligrosos
            td 
            td X
            td 
            td 
            td
            td 
            td X
            td X
          tr   
            td 14
            td Acumulación excesiva en el centro de almacenamiento
            td 
            td X
            td X
            td X
            td X
            td X
            td 
            td X
          tr   
            td 15
            td Daño de equipo de recolección
            td X
            td X
            td 
            td X
            td
            td 
            td 
            td X
          tr   
            td 16
            td Accidentes laborales
            td 
            td 
            td 
            td 
            td
            td 
            td 
            td 

    h3.subt.text-white.mb-4(data-aos="fade") Análisis de vulnerabilidad por amenaza

    .row.align-items-center
      .col-md-7.mb-4(data-aos="fade-right")
        p Es el proceso mediante el cual se determina el nivel de exposición y predisposición a la pérdida de un elemento o grupo de elementos, ante una amenaza específica. El grado de vulnerabilidad que tiene una empresa frente a una amenaza específica está directamente relacionado con la organización interna que ésta tiene para prevenir o controlar aquellos factores que originan el peligro, al igual que su preparación 
        p.bg-green.p-4 para minimizar las consecuencias, una vez sucedan los hechos. El Reglamento Técnico del Sector Agua Potable y Saneamiento Básico (RAS) en su Título G, establece una metodología para la realización de un análisis de vulnerabilidad. 
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema9/img5.jpg', alt='Imagen decorativa')

    .row.align-items-center
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema9/img6.jpg', alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        p.mb-4 La vulnerabilidad puede ser física o funcional dependiendo del tipo de estructura o de la capacidad de absorber la emergencia respectivamente. Para estimar la vulnerabilidad se debe:
        .row 
          .col-md-6
            ul.lista-ul--color.color-primario.ps-3.ps-md-4
              li.mb-3
                i.fas.fa-check
                | Identificar y evaluar las amenazas. 
              li.mb-3
                i.fas.fa-check
                | Identificar los componentes del sistema. 
              li
                i.fas.fa-check
                | Estimar el potencial de daños. 
          .col-md-6
            ul.lista-ul--color.color-primario.ps-3.ps-md-4
              li.mb-3
                i.fas.fa-check
                | Categorizar los daños. 
              li
                i.fas.fa-check
                | Evaluar el riesgo. 


    p(data-aos="fade") El riesgo es definido como la probabilidad de ocurrencia de un suceso con consecuencias económicas, sociales o ambientales en un sitio particular y durante un tiempo de exposición determinado. Se obtiene de relacionar la amenaza con la vulnerabilidad de los elementos expuestos. La Tabla señala la matriz que indica la priorización de los riesgos de la organización mediante el análisis de las amenazas y la vulnerabilidad.
    p.mb-4(data-aos="fade") Esta matriz puede ser ampliada según el criterio de la empresa para lograr un mayor nivel de detalle.

    .row.justify-content-center.mb-5
      .col-md-7
        .titulo-sexto.color-acento-contenido(data-aos="fade") 
          p.mb-0 #[b Tabla 7] Valoración del riesgo 
        .tabla-a.tema9.text-center.mb-4(data-aos="fade-down") 
          table
            caption.mt-2
              p.mb-0 Nota. Guía para elaboración y presentación del plan de gestión integral de residuos hospitalarios y similares-pgirhs aplicado a micro generadores. Área Metropolitana de Bucaramanga (2010, p. 58).             
            tbody
              tr
                th.bg-green5(colspan="3") Amenaza 
                th.bg-white(rowspan="2" colspan="2")
              tr   
                td Muy probable
                td Probable
                td Poco probable 
              tr   
                td Riesgo alto
                td Riesgo alto
                td Riesgo medio
                td Alta    
                td.bg-green5.text-bold.texto-vertical(rowspan="3") VULNERABILIDAD
              tr   
                td Riesgo alto
                td Riesgo medio
                td Riesgo bajo
                td Media
              tr   
                td Riesgo medio
                td Riesgo bajo
                td Riesgo bajo
                td Baja - mínima




    h3.subt.text-white.mb-4(data-aos="fade") Definición de los escenarios de riesgo
    p.bg-green8.p-4.mb-5(data-aos="fade")  Se entiende como la descripción de un futuro posible y de la trayectoria asociada a él. El escenario de riesgo es la interacción de los diferentes factores de riesgo (amenaza y vulnerabilidad) en un territorio y en un momento dado. Debe describir y permitir la identificación del tipo de daño y pérdidas que pueden generarse en caso de presentarse un evento peligroso en unas condiciones dadas de vulnerabilidad.


    h3.subt.text-white.mb-4(data-aos="fade") Organización del Plan de Emergencias
    p.mb-4(data-aos="fade") Como se mencionó anteriormente, el análisis de riesgos es un requisito para la organización del Plan de Emergencias, ya que permite identificar los escenarios de riesgo. De esta manera, se facilita la proyección adecuada de las siguientes acciones:

    .row.align-items-center.mb-md-3
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema9/img7.jpg', alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        .row.bg-yellow2.align-items-center.p-4
          .col-md-2
            img(src='@/assets/curso/temas/tema9/img8.svg', alt='Imagen decorativa')
          .col-md-10  
            ul.lista-ul--color.color-primario.ps-3.mb-0
              li.mb-2
                i.fas.fa-check
                | Aislamiento.
              li.mb-2
                i.fas.fa-check
                | Señalización.
              li.mb-2
                i.fas.fa-check
                | Definición de puntos de encuentro y vías de escape.
              li.mb-2
                i.fas.fa-check
                | Determinación de la cantidad y localización estratégica de equipos de seguridad y protección individual.
              li
                i.fas.fa-check
                | Definición de procedimientos contra derrames, fugas e incendios.


    h3.subt.text-white.mb-4(data-aos="fade") Puesta en marcha y mantenimiento del Plan de Emergencias

    .row.align-items-center.mb-md-3
      .col-md-6.mb-4(data-aos="fade-right")
        p El éxito de una operación de atención de eventos mayores depende de las acciones de respuesta previstas y desarrolladas en el Plan de Emergencias. De esta manera, para lograr los resultados esperados en el plan durante la ocurrencia de situaciones de emergencia, es necesario divulgarlo debidamente dentro de la organización, e integrarlo a otros planes locales y regionales, así como a otras entidades que deberán actuar conjuntamente en la respuesta a la emergencia. Además de la debida divulgación, la implementación del Plan está relacionada con la disponibilidad de los recursos humanos, además de los materiales necesarios y compatibles con la gravedad de los posibles eventos que se atenderán. 
      .col-md-6.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema9/img9.jpg', alt='Imagen decorativa')



</template>

<script>
export default {
  name: 'Tema9',
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
