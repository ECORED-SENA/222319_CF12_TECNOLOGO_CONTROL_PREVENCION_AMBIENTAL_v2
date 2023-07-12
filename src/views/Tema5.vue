<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Segregación en la fuente


    p.mb-4(data-aos="fade") Se requiere establecer el código de colores para la segregación de residuos y definir la cantidad, capacidad y estado de los recipientes usados para dicha segregación.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img.jpg')})`}")
      .bloque-texto-g__texto.p-5
        p.mb-0 El diagnóstico permite definir el tipo y cantidad de recipientes que se requieren para la adecuada separación de los residuos en todas las áreas de la organización. Los recipientes utilizados preferiblemente deben cumplir con el color correspondiente a la clase de residuos que se va a depositar en ellos.

    p.mb-4(data-aos="fade") Para facilitar el proceso de separación en la fuente es conveniente que los recipientes estén rotulados teniendo en cuenta los siguientes aspectos: 

    .row.mb-4(data-aos="fade-down")
      .col-md-4.mb-4
        .row
          .col-md-4.col-4.pe-0
            img(src='@/assets/curso/temas/tema5/ico1.svg', alt='') 
          .col-md-8.col-8.ps-0
            .h-100.bg-blue2.p-4.d-flex.align-items-center
              p.text-center.mb-0 Tipo de residuo a disponer 
      .col-md-4.mb-4
        .row
          .col-md-4.col-4.pe-0
            img(src='@/assets/curso/temas/tema5/ico2.svg', alt='') 
          .col-md-8.col-8.ps-0
            .h-100.bg-blue2.p-4.d-flex.align-items-center
              p.text-center.mb-0 Símbolo asociado, en caso de tener uno establecido. 
      .col-md-4.mb-4
        .row
          .col-md-4.col-4.pe-0
            img(src='@/assets/curso/temas/tema5/ico3.svg', alt='') 
          .col-md-8.col-8.ps-0
            .h-100.bg-blue2.p-4.d-flex.align-items-center
              p.text-center.mb-0 Listado de residuos generados con mayor frecuencia en la organización. 

    p.mb-5(data-aos="fade") 
      b Para mayor facilidad se puede usar la siguiente tabla de información como ejemplo que sirve para enlistar los residuos, identificar el tipo de residuo, el recipiente a usar, el rótulo a usar, la capacidad del mismo, el estado del recipiente y si es posible pueden ir más datos como áreas y ubicación específica del punto ecológico, 
      | también estas tablas colocan una casilla adicional que es que se hace con este, y que gestor ambiental lo gestiona. Manual para el manejo integral de residuos sólidos en el valle de aburrá. Área metropolitana del valle de aburrá (2016, p. 18)


    .row.justify-content-center.mb-4
      .col-xl-10.col-md-12(data-aos="fade")
        .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 2] Información separación en la fuente 
      .col-xl-10.col-md-12.bg-gray.py-3(data-aos="fade-down")
        .tabla-a.tema5
          table
            caption.bg-white.mt-2
              p.mb-0 Nota. Guía para elaboración y presentación del plan de gestión integral de residuos hospitalarios y similares aplicado a micro generadores Área Metropolitana de Bucaramanga (2010, p.6) 
            thead
              tr.bg-green4.text-center
                th Tipo de residuo
                th Residuos segregados	
                th Recipiente usado
                th Rotulo usado
                th Capacidad
                th Estado
            tbody.bg-white.text-center
              tr   
                td
                  p.mb-1 Peligrosos
                  p.mb-1 Bioldegradables
                td Hojas y tallos de los árboles, grama, barrio de prado, resto de alimentos no contaminados.
                td 
                  p.mb-2 Verde
                  img.m-auto(src='@/assets/curso/temas/tema5/tabl2-ico-verde.svg', alt='Verde' style="width:40px;")
                td Rotular con: 
                  p.mb-1 No peligrosos 
                  p.mb-1 Biodegradables
                td 
                td
              tr   
                td
                  p.mb-1 No Peligrosos
                  p.mb-1 Reciclables
                  p.mb-1 Plástico
                td Bolsas de plástico, vajilla, garrafas, recipientes de polipropileno, bolsas de suero y polietileno sin contaminar.
                td 
                  p.mb-2 Gris
                  img.m-auto(src='@/assets/curso/temas/tema5/tabl2-ico-gris.svg', alt='Gris' style="width:40px;")
                td Rotular con: 
                  p.mb-2 Reciclaje Plástico
                  img.m-auto(src='@/assets/curso/temas/tema5/tabl2-ico-reciclar.svg', alt='Reciclaje' style="width:40px;")
                td 
                td
              tr   
                td
                  p.mb-1 No Peligrosos
                  p.mb-1 Reciclables
                  p.mb-1 Vidrio
                td Toda clase de vidrio.
                td 
                  p.mb-2 Gris
                  img.m-auto(src='@/assets/curso/temas/tema5/tabl2-ico-gris.svg', alt='Gris' style="width:40px;")
                td Rotular con: 
                  p.mb-2 Reciclaje Vidrio
                  img.m-auto(src='@/assets/curso/temas/tema5/tabl2-ico-reciclar.svg', alt='Reciclaje' style="width:40px;")
                td 
                td
              tr   
                td
                  p.mb-1 No Peligrosos
                  p.mb-1 Ordinarios e Inerte
                td Servilletas, empaques de papel plastificado, barrido, colillas, icopor, vasos, desechables, papel, carbón, tela, radiografía.
                td 
                  p.mb-2 Verde
                  img.m-auto(src='@/assets/curso/temas/tema5/tabl2-ico-verde.svg', alt='Verde' style="width:40px;")
                td Rotular con: 
                  p.mb-1 No peligrosos 
                  p.mb-1 Ordinarios y/o inertes
                td 
                td
              tr   
                td
                  p.mb-1 Peligrosos
                  p.mb-1 Infecciosos
                  p.mb-1 Biosanitarios y Cortopunzantes
                td Biosanitario: Material impregnado con fluidos corporales (guantes, gasas, papel impregnado, entre otros) Cortopunzantes: Agujas, lancetas, cuchillas, entre otros.
                td 
                  p.mb-2 Rojo
                  img.m-auto(src='@/assets/curso/temas/tema5/tabl2-ico-rojo1.svg', alt='Rojo' style="width:40px;")
                td Rotular con: 
                  p.mb-2 Riesgo biológico
                  img.m-auto(src='@/assets/curso/temas/tema5/tabl2-ico-riesgo-biol.svg', alt='Riesgo biológico' style="width:40px;")
                td 
                td
              tr   
                td Químicos
                td Resto de sustancias químicas y sus empaques o cualquier otro residuo contaminado con estos.
                td 
                  p.mb-2 Rojo
                  img.m-auto(src='@/assets/curso/temas/tema5/tabl2-ico-rojo2.svg', alt='Rojo' style="width:40px;")
                td Rotular con: 
                  p.mb-2 Riesgo Químico
                  img.m-auto(src='@/assets/curso/temas/tema5/tabl2-ico-quim.svg', alt='Riesgo Químico' style="width:40px;")
                td 
                td

    p.mb-4(data-aos="fade")  
      b.t-green En cuanto a los residuos de tipo químico, es preferible manejarlos en sus propios envases, empaques y recipientes, atendiendo las instrucciones dadas en sus etiquetas y hojas de seguridad, 
      | las cuales deben ser suministradas por los proveedores, cuidando de no mezclarlos cuando sean incompatibles o reaccionen entre sí. En estos casos, se debe consultar normas de seguridad industrial y salud ocupacional. 

    .row 
      .col-md-6(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema5/img2.jpg' alt='')
      .col-md-6(data-aos="fade-left")
        .bg-blue2.h-100.p-4
          p Es importante aclarar que en los puntos de separación no es necesaria la ubicación de todos los recipientes acorde al código de colores, ya que su ubicación y cantidad debe obedecer a los aspectos identificados durante el diagnóstico, de manera que se distribuyen acorde a los residuos generados en cada sección.
          .bloque-texto-c.bg-blue.p-4
            i.fas.fa-quote-right.mb-3
            p.mb-3 El envasado, embalado, rotulado y etiquetado debe estar conforme a la normatividad vigente, principalmente cuando se trate de residuos peligrosos. 
            h5.mb-0 (Área metropolitana del Valle de Aburrá, 2016, p.20)


    Separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.1 Código de colores en los recipientes         

    p.mb-4(data-aos="fade") Para implementar la separación de residuos, se utiliza un código de colores en los recipientes para su identificación, usualmente este código de colores se rige a nivel territorial, actualmente se cuenta con una norma regulatoria que es la Resolución No. 2184 de 2019 ARTÍCULO 4o. Adáptese en el territorio nacional, el código de colores para la separación de residuos sólidos en la fuente es así:

    .row.justify-content-center.mb-4
      .row.col-md-10.bg-yellow2.p-4.align-items-center(data-aos="fade-down")
        .col-md-2.col-6.mb-3.mb-md-0
          img.px-4(src='@/assets/curso/temas/tema5/papelera-de-reciclaje.svg' alt='papelera de reciclaje')
        .col-md-10
          ol.lista-ol--cuadro.color-acento-contenido.fa-ul
            li 
              .lista-ol--cuadro__vineta
                span a
              | Color verde para depositar residuos orgánicos aprovechables.
            li 
              .lista-ol--cuadro__vineta
                span b
              | Color blanco para depositar los residuos aprovechables como plástico, vidrio, metales, multicapa, papel y cartón.
            li 
              .lista-ol--cuadro__vineta
                span c
              | Color negro para depositar los residuos no aprovechables.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 4.] Código de colores para los residuos a nivel nacional
      .col-md-7
        img(src='@/assets/curso/temas/tema5/fig5.png', alt='Código de colores para los residuos a nivel nacional')
        figcaption.mt-2
          p.mb-0 Nota. El Gobierno unifica el código de colores para la separación de residuos en la fuente a nivel nacional. Minambiente (2020)
      .col-md-3
        .bg-green8.p-4.h-100.text-small
          p Algunas empresas tienen como guía la GTC 24 de 2009 para sus procesos de gestión de residuos, ya que algunos residuos no se disponen al servicio público de aseo, lo cual le da la opción de clasificar de manera más específica los residuos, sobre todo los de reciclaje y entregarlos desde la fuente a gestores ambientales de reciclaje y tratamiento de residuos.
          p.mb-0 Esta GTC 24 no es obligatoria es opcional, algunas empresas también por elección utilizan solo algunos colores de esta GTC 24.


    .row.justify-content-center.mb-5
      .col-md-10(data-aos="fade")
        .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 5.] Código de colores GTC24
      .col-md-10.bg-gray.py-3(data-aos="fade-down")
        .tabla-a.tema5
          table
            caption.bg-white.mt-2
              p.mb-0 Nota. GTC 24- Gestión Ambiental Residuos sólidos Guía para la separación en la fuente. ICONTEC (2009, p.5)
            thead
              tr.bg-green4.text-center
                th Sector
                th Tipo de residuo	
                th Color
            tbody.bg-white.text-center
              tr   
                td(rowspan="3") Doméstico
                td Aprovechables
                td Blanco
              tr   
                td No aprovechables
                td Negro
              tr   
                td Orgánicos biodegradables
                td Verde
              tr   
                td(rowspan="7") Industrial, comercial institucional y de servicios
                td Cartón y papel
                td Gris   
              tr   
                td Plástico
                td Azul
              tr   
                td Vidrio
                td Blanco
              tr   
                td Orgánicos
                td Crema
              tr   
                td Residuos Metálicos
                td Café oscuro
              tr   
                td Madera
                td Naranja
              tr   
                td Ordinarios
                td Verde
              tr.text-start
                td(colspan="3")
                  p.mb-2 #[b Nota 1.] Se recomienda que cada generador establezca un código de colores particulares para aquellos residuos no incluidos en la tabla.
                  p.mb-2 #[b Nota 2.] Se recomienda consultar la legislación local vigente para verificar si existe algún código de colores establecido por la autoridad competente.
                  p.mb-2 #[b Nota 3.] Para residuos peligrosos se establecerá el código de colores e iconos en la guía para residuos peligrosos.
                  p.mb-2 #[b Nota 4.] Los colores establecidos en la tabla obedecen a la normativa aplicable.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 6.] Código de colores propuesto por la GTC 24
        img(src='@/assets/curso/temas/tema5/fig7.png', alt='Código de colores propuesto por la GTC 24')
        figcaption.bg-gray.mt-2
          p.mb-0 Nota. Guía para la gestión de residuos peligrosos. Universidad Pontificia Bolivariana. (2011, p.63) 

    p.mb-4(data-aos="fade") Para las entidades de salud si es obligatorio el código de colores que delegue el Manual para la Gestión Integral de Residuos Generados en la Atención en Salud y otras actividades, y se dictan otras disposiciones

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 7.] Código de colores en el gremio de la salud
        img(src='@/assets/curso/temas/tema5/fig8.svg', alt='Código de colores en el gremio de la salud')
        figcaption.bg-gray.mt-2
          p.mb-0 Nota. Resolución en proyecto 2 por la cual se adopta el manual para la gestión integral de residuos generados en la atención en salud y otras actividades, y se dictan otras disposiciones. Ministerio de salud y protección social (2020, p.10)  

    .row.justify-content-center.align-items-center
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema5/img3.jpg', alt='')
      .col-md-5.mb-4(data-aos="fade-left")
        p Para la identificación y clasificación de las características de peligrosidad de residuos diferentes a riesgo biológico o infeccioso se aplicará lo establecido en el artículo 2.2.6.1.2.3 y el Anexo III del Decreto 1076 de 2015 o la norma que lo modifique o sustituya.
        p.mb-0 Actualmente se identifican con color rojo y se coloca el nombre específico del residuo químico en el rótulo.
        p.mb-0 
          span.t-red El color rojo 
          | sigue utilizándose a nivel nacional para identificar un residuo peligroso tanto infeccioso como químico.
        p.mb-0 
          span.t-violet El color violeta 
          | sigue utilizándose a nivel nacional para identificar un residuo radioactivo.
      .col-md-10.bg-yellow.p-4(data-aos="fade-down")
        .row.align-items-center
          .col-md-1.col-3.mb-3.mb-md-0
            img(src='@/assets/curso/temas/tema5/ico-import.svg', alt='') 
          .col-md-11
            h5 Nota: 
            p.mb-0 Es indispensable tener en cuenta esta normativa haciendo la salvedad de que se debe garantizar es que su gestión sea acorde con las bases normativas vigentes.


    Separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.2 Características de los recipientes

    p(data-aos="fade") Los tipos y capacidades de los recipientes dependen de las características y tipos de residuos, el tipo y frecuencia del sistema de recolección y del espacio disponible para ellos.
    p.mb-4(data-aos="fade") Frecuentemente se emplean bolsas, contenedores, canecas, cajas, entre otros. Sin embargo, se debe tener en cuenta lo siguiente:
  
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.bg-blue2.p-4.p-md-5
        .row.align-items-center.b-bottom.pb-4
          .col-md-1.col-4.mb-3.mb-md-0
            img(src='@/assets/curso/temas/tema5/5-2-ico1.svg', alt='') 
          .col-md-11
            p.mb-0 #[b A nivel doméstico] se espera que los recipientes sean de material impermeable, liviano y resistente, de fácil carga, de tal forma que facilite su transporte y se reduzca el impacto sobre el ambiente y la salud humana.
        .row.align-items-center.b-bottom.py-4
          .col-md-1.col-4.mb-3.mb-md-0
            img(src='@/assets/curso/temas/tema5/5-2-ico2.svg', alt='') 
          .col-md-11
            p.mb-0 #[b Los recipientes de carácter retornable] deberían permitir su fácil limpieza.
        .row.align-items-center.b-bottom.py-4
          .col-md-1.col-4.mb-3.mb-md-0
            img(src='@/assets/curso/temas/tema5/5-2-ico3.svg', alt='') 
          .col-md-11
            p.mb-0 #[b Los recipientes que se empleen para presentar los residuos para recolección] deberían evitar el contacto de los residuos con el entorno y con las personas encargadas de dicha recolección.
        .row.align-items-center.b-bottom.py-4
          .col-md-1.col-4.mb-3.mb-md-0
            img(src='@/assets/curso/temas/tema5/5-2-ico4.svg', alt='') 
          .col-md-11
            p.mb-0 #[b Los recipientes tanto desechables como retornables deberían:] proporcionar seguridad e higiene, permitir el aislamiento de los residuos con el entorno, tener una capacidad y volumen proporcional al peso, volumen y características de los residuos contenidos, ser de material resistente, preferiblemente reciclable, reutilizable o ambos y facilitar su cierre o amarre.
        

    p.mb-5(data-aos="fade") Los recipientes para residuos infecciosos deben ser del tipo tapa y pedal, las canecas se identifican con el logo de infeccioso, si es químico algunas veces colocan el logo de una calavera y dicen el tipo de químico que se envasa. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 8.] Imagen de infeccioso
      .col-md-6
        img(src='@/assets/curso/temas/tema5/fig9.svg', alt='Imagen de infeccioso')
      .col-md-4
        .bg-blue2.p-4
          p Los recipientes para residuos peligrosos obligatoriamente deben tener tapa, con buen ajuste, bordes redondeados y boca ancha para facilitar su vaciado. Construidos en forma tal que, estando cerrados o tapados, no permitan la entrada de agua, insectos o roedores, ni el escape de líquidos por sus paredes o por el fondo.

    p.mb-4(data-aos="fade") Los residuos reciclables usan el logo de reciclaje en los recipientes y para ordinarios usan algunas veces el logo circular, pero no es necesario el logo en ordinarios. 

    .titulo-sexto.color-acento-contenido(data-aos="fade")
      p.mb-0 #[b Figura 9.] Logos  
    .row(data-aos="fade-down")
      .col-md-3
        .bg-gray2.p-4.h-100
          img.mb-3.m-auto(src='@/assets/curso/temas/tema5/tarj5-2-ico1.svg', alt='' style="width: 72px;") 
          h5.text-center.mb-4 Papel y Cartón
          ul.lista-ul--color.color-primario.fa-ul
            li.mb-0
              i.fas.fa-check
              | Papel
            li.mb-0
              i.fas.fa-check
              | Cartón
            li.mb-0
              i.fas.fa-check
              | Periódicos
      .col-md-3
        .bg-primario.p-4.text-white.h-100
          img.mb-3.m-auto(src='@/assets/curso/temas/tema5/tarj5-2-ico1.svg', alt='' style="width: 72px;") 
          h5.text-center.mb-4.text-white Plástico
          ul.lista-ul--color.color-primario.fa-ul
            li.mb-0
              i.fas.fa-check
              | Envases no retornables
            li.mb-0
              i.fas.fa-check
              | Desechables plásticos
            li.mb-0
              i.fas.fa-check
              | Bolsas plásticos
      .col-md-3
        .bg-green10.p-4.text-white.h-100
          img.mb-3.m-auto(src='@/assets/curso/temas/tema5/tarj5-2-ico3.svg', alt='Ordinario no reciclable' style="width: 72px;") 
          h5.text-center.mb-4.text-white Ordinario no reciclable
          ul.lista-ul--color.color-primario.fa-ul
            li.mb-0
              i.fas.fa-check
              | Envolturas de alimentos
            li.mb-0
              i.fas.fa-check
              | Papel sucio
            li.mb-0
              i.fas.fa-check
              | Papel carbón y aluminio
            li.mb-0
              i.fas.fa-check
              | Barrido y servilletas
            li.mb-0
              i.fas.fa-check
              | Icopor, tetrapack
      .col-md-3
        .bg-red.p-4.text-white.h-100
          img.mb-3.m-auto(src='@/assets/curso/temas/tema5/tarj5-2-ico4.svg', alt='Riesgo Biológico' style="width: 72px;") 
          h5.text-center.mb-4.text-white Riesgo Biológico
          ul.lista-ul--color.color-primario.fa-ul
            li.mb-0
              i.fas.fa-check
              | Gasas y algodones
            li.mb-0
              i.fas.fa-check
              | Vendas y sondas
            li.mb-0
              i.fas.fa-check
              | Guantes de látex
            li.mb-0
              i.fas.fa-check
              | Material de curación
            li.mb-0
              i.fas.fa-check
              | Residuos contaminados que generen contagios o infecciones
    figcaption.mt-3.mb-5
      p.mb-0 Nota. La problemática principal del manejo de las basuras. Alcaldía Santiago de Cali (2015) 



    h3.subt.text-white.mb-4(data-aos="fade") Bolsas

    .row.bg-blue2.align-items-center.p-4.mx-md-1(data-aos="fade-down")
      .col-md-5.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 10.] Bolsas
        img(src='@/assets/curso/temas/tema5/img4.png' alt='Bolsas')
      .col-md-7
        p La resistencia de las bolsas debe soportar la tensión ejercida por los residuos contenidos y por su manipulación. 
        p El material plástico de las bolsas para residuos infecciosos, debe ser polietileno de alta densidad, o el material que se determine necesario para la desactivación o el tratamiento de estos residuos. 
        p La resistencia de cada una de las bolsas no debe ser inferior a 20 kg.
        p Los colores de bolsas seguirán el código establecido por la organización y/o entidad territorial, serán de alta densidad y calibre mínimo de 1.4 para bolsas pequeñas y de 1.6 milésimas de pulgada para bolsas grandes, suficiente para evitar el derrame durante el almacenamiento en el lugar de generación, recolección, movimiento interno, almacenamiento central y disposición final de los residuos que contengan.
    figcaption.mt-2.mb-5
      p.mb-0 Nota. Plan de gestión Integral de Residuos. Universidad Industrial de Santander (2013, p. 12) 


    h3.subt.text-white.mb-4(data-aos="fade") Recipientes para residuos cortopunzantes

    p(data-aos="fade") Los recipientes para residuos cortopunzantes son desechables y deben tener las siguientes características:

    .row.bg-blue2.align-items-center.justify-content-evenly.p-4.mx-md-1.mb-5(data-aos="fade-down")
      .col-md-9
        ul.lista-ul--color.color-primario.fa-ul
          li
            i.fas.fa-check
            | Rígidos, en polipropileno de alta densidad u otro polímero que no contenga P.V.C.  
          li
            i.fas.fa-check
            | Resistentes a ruptura y perforación por elementos cortopunzantes.
          li
            i.fas.fa-check
            | Con tapa ajustable o de rosca, de boca angosta, de tal forma que al cerrarse quede completamente hermético.
          li
            i.fas.fa-check
            | Rotulados de acuerdo con la clase de residuo.
          li
            i.fas.fa-check
            | Livianos y de capacidad no mayor a 2 litros.
          li
            i.fas.fa-check
            | Ser resistentes, desechables y de paredes gruesa.
      .col-md-3.col-9.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 #[b Figura 11.] Recipiente rígido 
        img.px-md-5(src='@/assets/curso/temas/tema5/img5.png' alt='Recipientes para residuos cortopunzantes')
    


    h3.subt.text-white.mb-4(data-aos="fade") Rotulación

    p(data-aos="fade") Los recipientes deben ir rotulados con el nombre del generador, departamento, área o servicio al que pertenecen, el nombre del residuo que contienen, fecha de recolección y el símbolo de peligrosidad si es residuo peligroso.

    .row.mb-3
      .col-md-8.mb-4(data-aos="fade-right")
        .bg-green.p-4.h-100
          p Para la rotulación de los residuos peligrosos se realiza acorde a la normativa ICONTEC (2005) Norma técnica colombiana NTC1692 Transporte de mercancías peligrosas definiciones, clasificación, marcado, etiquetado y rotulado y el decreto 1609 de 2002 "Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera".
          p El etiquetado tiene como objetivo principal identificar el residuo peligroso y reconocer la naturaleza del peligro que representa, alertando a las personas involucradas en el transporte o manejo sobre las medidas de precaución y prohibiciones. La etiqueta que se utilizará para la identificación de los residuos puede ser de diferentes estilos.
      .col-md-4.mb-4(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 #[b Figura 12.] Rotulación
        img.mb-0(src='@/assets/curso/temas/tema5/fig12.png' alt='Rotulación')

    h3.subt.text-white.mb-4(data-aos="fade") NFPA
    p.mb-5(data-aos="fade") En residuos peligrosos pueden usarse diferentes tipos de pictogramas como el del rombo NFPA
    .row.justify-content-center.mb-5
      .col-lg-6.col-md-8(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 13.] NFPA
        img(src='@/assets/curso/temas/tema5/fig13.png', alt='NFPA')
        figcaption.mt-2
          p.mb-0 Nota. Rombo de riesgo NFPA. Gerry Mata (2012, p.1) 


    h3.subt.text-white.mb-4(data-aos="fade") SGA
    p.mb-5(data-aos="fade") El Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos ofrece un conjunto de criterios armonizados sobre el peligro de las sustancias químicas.
    .row.justify-content-center.mb-5
      .col-md-5.mb-3.mb-md-0(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 14.] Pictogramas como los del sistema globalmente armonizado
        img(src='@/assets/curso/temas/tema5/fig15.png', alt='Pictogramas como los del sistema globalmente armonizado')
        figcaption.mt-0 
          p.mb-0 Nota. Etiqueta SGA (Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos). MARBE Departamento químico (2016) 
      .col-md-5(data-aos="fade-down")
        img(src='@/assets/curso/temas/tema5/img7.jpg', alt='')


    h3.subt.text-white.mb-4(data-aos="fade") NTC 1692
    p.mb-4(data-aos="fade") La Norma Técnica Colombia 1692 es la más usada en residuos, tal como lo muestra la tabla.
    .row.fondo-blue.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center
          .col-md-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 3] Pictogramas por medio de la NTC1692 
            .tabla-a.tema5-5
              table
                caption.mt-2
                  p.mb-0 Nota. Manejo de residuos peligrosos y especiales IGAC (2018, p, 9)
                thead
                  tr.bg-green4.text-center
                    th Clase
                    th Rótulo/etiqueta
                    th División
                tbody.bg-white.text-center
                  tr   
                    td 1. Explosivo
                    td 
                      img.m-auto(src='@/assets/curso/temas/tema5/tabla3-img1.png', alt='Explosivo' style="width:107px;")
                    td.text-start 
                      p.mb-2 #[b 1.1] Sustancia y Objetos que presentan un riesgo de explosión en masa 
                      p.mb-2 #[b 1.2] Sustancias y objetos que presentan un riesgo de proyección sin riesgo de explosión en masa 
                      p.mb-2 #[b 1.3] Sustancias y objetos que presentan un riesgo de incendio y un riesgo menor de explosión u un riesgo menor de proyección, o ambos, pero no un grado de explosión en masa. 
                      p.mb-2 #[b 1.4] Sustancias y objetos que presentan un riesgo apreciable. 
                      p.mb-2 #[b 1.5] Sustancias muy insensibles; que presentan un riesgo de explosión en masa. 
                      p.mb-2 #[b 1.6] Objetos sumamente insensibles que no presentan riesgo de explosión en masa.
                  tr   
                    td 2. Gases
                    td 
                      img.m-auto(src='@/assets/curso/temas/tema5/tabla3-img2.png', alt='Gases' style="width:107px;")
                    td.text-start 
                      p.mb-2 #[b 2.1] Gases inflamables
                      p.mb-2 #[b 2.2] Gases no inflamables, no tóxicos
                      p.mb-2 #[b 2.3] Gases tóxicos.
                  tr   
                    td 3. Líquidos inflamables y líquidos combustibles 
                    td 
                      img.m-auto(src='@/assets/curso/temas/tema5/tabla3-img3.png', alt='Gases' style="width:145px;")
                    td
                  tr   
                    td 4. Sólidos inflamables 
                    td 
                      img.m-auto(src='@/assets/curso/temas/tema5/tabla3-img4.png', alt='Gases' style="width:107px;")
                    td.text-start 
                      p.mb-2 #[b 4.1] Sólido Inflamable, sustancias con reacción espontánea y sólidos explosivos insensibilizados.
                      p.mb-2 #[b 4.2] Sustancias que pueden experimentar combustión espontánea. 
                      p.mb-2 #[b 4.3] Sustancias que, en contacto con el agua, desprenden gases inflamables. 
                  tr   
                    td 5.Oxidantes y peróxidos orgánicos 
                    td 
                      img.m-auto(src='@/assets/curso/temas/tema5/tabla3-img5.png', alt='Gases' style="width:107px;")
                    td.text-start 
                      p.mb-2 #[b 5.1] Sustancias comburentes
                      p.mb-2 #[b 5.2] Peróxidos orgánico 
                  tr   
                    td 6. Sustancia toxicas 
                    td 
                      img.m-auto(src='@/assets/curso/temas/tema5/tabla3-img6.png', alt='Gases' style="width:107px;")
                    td.text-start 
                      p.mb-2 #[b 6.1] Sustancias Tóxicas
                      p.mb-2 #[b 6.2] Sustancia infecciosa
                  tr   
                    td 7.  Sustancias radiactivas 
                    td 
                      img.m-auto(src='@/assets/curso/temas/tema5/tabla3-img7.png', alt='Gases' style="width:107px;")
                    td
                  tr   
                    td 8. Sustancias corrosivas 
                    td 
                      img.m-auto(src='@/assets/curso/temas/tema5/tabla3-img8.png', alt='Gases' style="width:107px;")
                    td
                  tr   
                    td 9. Sustancias peligrosas misceláneas 
                    td 
                      img.m-auto(src='@/assets/curso/temas/tema5/tabla3-img9.png', alt='Gases' style="width:107px;")
                    td





    p.mb-5(data-aos="fade") Para los residuos no peligrosos su rotulación es colocar el nombre del residuo, quien lo genera, fecha de recolección y el logo de reciclaje; si es para reciclar y si es ordinario o común no se requiere de logo solo de la identificación del residuo, algunas veces en los rótulos se coloca el peso o volumen del residuo, si este no está en el rótulo debe estar en los registros de gestión de residuos, sea en el registro de recolección o de almacenamiento o de entrega de residuos para así llevar los indicadores de gestión de generación de residuos.

    .row.justify-content-center
      .col-md-5(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 15.] Etiqueta
        img(src='@/assets/curso/temas/tema5/fig17.png', alt='Etiqueta')
        figcaption.mt-3
          p.mb-0 Nota. Procedimiento para la gestión y disposición de residuos sólidos y peligrosos. Universidad de los Andes (2012, p. 18) 
      




</template>

<script>
export default {
  name: 'Tema5',
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
