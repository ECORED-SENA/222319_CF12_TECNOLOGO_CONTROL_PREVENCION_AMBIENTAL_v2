<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Control de plagas y técnicas de desinfección

    figure.mb-4(data-aos="fade")
      img(src='@/assets/curso/temas/tema8/img.jpg' alt='Banner')

    p(data-aos="fade") Por el riesgo infeccioso que puede encontrarse en el manejo de residuos sobre todo en el cuarto de almacenamiento de residuos y los puntos ecológicos puede atraer vectores causantes de enfermedades al personal que realiza las labores de aseo, por tanto, es importante tener un programa de control de plagas y un protocolo de limpieza y desinfección a estas áreas.


    Separador

    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 8.1 Control de plagas

    p.mb-4(data-aos="fade") El control de plagas o manejo de plagas tiene el objetivo de regular una especie a través de diferentes tipos de medidas, para poder comprender es necesario revisar algunos conceptos:   

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-gray" data-aos="fade-down")
      .row.justify-content-center(titulo="Plaga")
        .col-md-7.mb-4.mb-md-0
          p Una plaga es cualquier organismo vivo que cause daño o molestias, o que transmita o provoque una enfermedad.
          p Las plagas pueden ser animales, plantas o bacterias. Una plaga también puede ser cualquier cosa que simplemente se encuentre en un lugar no deseado, por ejemplo, el trébol en una zona de juegos cubierta por césped. Las ratas, los ratones, las cucarachas, las moscas domésticas, los mapaches, las ardillas, las hormigas, la maleza y las bacterias son ejemplos de diferentes tipos de plagas. Asegúrese de que realmente se trata de una plaga antes de eliminarla, recuerde que no todas las plagas son vectores quiere decir generan enfermedades algunos son por estar en un lugar que no deberían, recuerde que existen plagas que no puedo matar y usar pesticidas ejemplo: los murciélagos, las palomas, las ardillas, pero otras si permiten su exterminio ejemplo: las cucarachas, las ratas. Universidad de california (2011, p. 7) 
        .col-md-4.bg-white.pt-2
          .titulo-sexto.color-acento-contenido.mb-0
            p.mb-0 #[b Figura 25] Ejemplo de plagas
          img(src='@/assets/curso/temas/tema8/tab-fig25.jpg', alt='M Ejemplo de plagas')
          figcaption.bg-white
            p.mb-0.text-small Nota. Guía para la gestión de residuos peligrosos. Universidad Pontificia Bolivariana. (2011, p.71) 
      .row.justify-content-center(titulo="Pesticida")
        .col-md-7.mb-4.mb-md-0
          p El pesticida es un veneno creado para exterminar o controlar organismos vivos como maleza, bichos, arañas o cualquier otra cosa que usted no quiera que viva en su establecimiento. Los aerosoles contra las cucarachas y las hormigas, las bombas contra las pulgas, los raticidas, los herbicidas y las bolas de naftalina son ejemplos de pesticidas. Todos los pesticidas son potencialmente dañinos. Los pesticidas deben ser usados como último recurso. Los pesticidas en aerosol y los nebulizadores (bombas contra insectos) son los más dañinos y se debe evitar su uso preferiblemente por salud. Universidad de california (2011, p. 8)  
        .col-md-4
          img(src='@/assets/curso/temas/tema8/tab-img2.png' alt='Imagen decorativa')
      .row.justify-content-center(titulo="Tipo de pesticidas")
        .col-md-7.mb-4.mb-md-0
          p Existen muchos tipos de pesticidas y marcas comerciales en el mercado para exterminar plagas específicas. Por ejemplo, un herbicida que mata la maleza es un pesticida. Aquí encontrará una lista de pesticidas y el tipo de plagas que exterminan 
          .tabla-a.tema8-1
            table
              thead
                tr.bg-green4.text-center
                  th.p-2 Pesticidas
                  th.p-2 Plagas
              tbody.bg-white
                tr   
                  td 
                    p.mb-2 1. Insecticidas
                    p.mb-2 2. Herbicidas
                    p.mb-2 3. Veneno para matar roedores
                    p.mb-2 4. Fungicidas
                    p.mb-2 5. Bactericidas
                    p.mb-2 6. Alguicidas
                    p.mb-2 7. Repelentes de insectos
                    p.mb-2 8. Molusquicidas  
                  td 
                    p.mb-2 Insectos y plagas relacionadas como las arañas
                    p.mb-2 Maleza y otras plantas no deseadas
                    p.mb-2 Ratones, ratas y otros roedores.
                    p.mb-2 Moho y otros hongos
                    p.mb-2 Bacterias
                    p.mb-2 Algas (en piscinas y otras fuentes de agua)
                    p.mb-2 Mosquitos y otros insectos o garrapatas
                    p.mb-2 Caracoles y babosas.
        .col-md-4
          img(src='@/assets/curso/temas/tema8/tab-img3.jpg' alt='Imagen decorativa')
      .row.justify-content-center(titulo="Control de plagas")
        .col-md-7.mb-4.mb-md-0
          p Si las plagas se vuelven un problema, necesitará controlarlas o exterminarlas, fomente el uso de materiales y métodos para tratar las plagas que maximicen la seguridad y reduzcan la exposición al personal a productos químicos dañinos. Para controlar las plagas, elija métodos que sean: 
          ul.lista-ul--color.color-primario.ps-3.ps-md-4
            li.mb-1
              i.fas.fa-check
              | Los menos dañinos para la salud humana y otros seres vivos que no son plagas.  
            li.mb-1
              i.fas.fa-check
              | De mayor duración posible y eviten reincidencia.
            li.mb-1
              i.fas.fa-check
              | Los más fáciles de implementar y que sean seguros y efectivos. 
            li
              i.fas.fa-check
              | Los más económicos a corto y largo plazo. u adecuados para la plaga en particular y que coincidan con el estado del ciclo de vida de la plaga cuando está en una etapa más vulnerable.  
        .col-md-4
          img(src='@/assets/curso/temas/tema8/tab-img4.jpg' alt='Imagen decorativa')
        .col-md-11
          p A menudo se pueden controlar las plagas siguiendo pasos libres de químicos como:
          ul.lista-ul--color.color-primario.ps-3.ps-md-4
            li.mb-1
              i.fas.fa-check
              | Evitar que las plagas entren eliminando las fuentes de comida, agua y refugio. 
            li.mb-1
              i.fas.fa-check
              | Lavar el área con agua y jabón. 
            li.mb-1
              i.fas.fa-check
              | Usar una aspiradora para retirarlas: Una aspiradora de aire de alta eficacia (HEPA) con un filtro fino que pueda eliminar los excrementos y las partes de los insectos. 
            li
              i.fas.fa-check
              | Usar trampas: Algunas trampas se usan principalmente para supervisar la presencia de plagas. Entre éstas se incluyen las trampas para cucarachas y las trampas en base a feromona (que atraen sexualmente a los insectos) aún si la infestación es leve, estas trampas pueden ser usadas para mantener las plagas bajo control.  Otras trampas libres de químicos incluyen: 
              ul.lista-ul--color.color-primario.ps-3.ps-md-5.mt-3
                li.mb-1
                  i.fas.fa-check
                  | Trampas para ratones y ratas que se cierran mecánicamente. Colóquelas en los lugares donde los roedores puedan encontrarlas.
                li
                  i.fas.fa-check
                  | “Matamoscas y trampas de luz ultravioleta para moscas. “Trampas cónicas para moscas o avispas de chaqueta amarilla. “Trampas de caja para zorrillos, mapaches y comadrejas (zarigüeyas) Si los métodos libres de químicos no dan resultados, use el pesticida menos dañino para tratar el problema de plaga. Los pesticidas menos dañinos son: cebos que se colocan en lugares fijos (no rociados o esparcidos)  efectivos contra plagas específicas. Son de baja toxicidad aguda y crónica para las personas, los animales y el medio ambiente. se biodegradan rápidamente. Exterminan una categoría limitada de plagas específicas. tienen poco o ningún impacto en otros organismos, especialmente en los predadores de plagas. 


    Separador

    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 8.2 Técnicas de desinfección

    p.mb-4(data-aos="fade") Antes de ahondar en las técnicas de desinfección es necesario conocer la diferencia de los siguientes conceptos.

    .row.mb-5(data-aos="fade-down")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema8/tarj-ico1.svg' alt='AvatarTop')
          .tarjeta.bg-green9
            .p-4.p-md-5.pt-md-4.text-center
              h5 La Desinfección
              p Reducción o disminución de los microorganismos presentes, por medio de agentes químicos y/o físicos, a un nivel que no sea dañino para el alimento o para el ser humano.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema8/tarj-ico2.svg' alt='AvatarTop')
          .tarjeta.bg-green9
            .p-4.p-md-5.pt-md-4.text-center
              h5 Limpieza
              p Eliminación de tierra, residuos de alimentos, suciedad, grasa u otras materias.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema8/tarj-ico3.svg' alt='AvatarTop')
          .tarjeta.bg-green9
            .p-4.p-md-5.pt-md-4.text-center
              h5 Solución
              p Combinación de un sólido o de un producto concentrado con agua, para obtener una distribución homogénea de cada uno de los componentes


    h3.subt.text-white.mb-4(data-aos="fade") Modelo genérico de limpieza y desinfección manual

    .row.align-items-center
      .col-md-6.mb-4(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-gray tipob")
          .row.justify-content-center(titulo="Limpieza") 
            p Es la eliminación gruesa de la suciedad (restos de alimentos, grasa, etc.). Se realiza mediante raspado, frotado, barrido, o pre-enjuagado de superficies.
          .row.justify-content-center(titulo="Limpieza principal") 
            p Consiste en la aplicación del detergente para desprender la suciedad de las superficies.
          .row.justify-content-center(titulo="Enjuague") 
            p Es el arrastre de la suciedad desprendida y la solución de detergente por la acción del agua potable.
          .row.justify-content-center(titulo="Desinfección") 
            p Es la destrucción de los microorganismos por medio de un desinfectante, dejar actuar un tiempo según corresponda.
          .row.justify-content-center(titulo="Enjuague final") 
            p Es para eliminar los restos del desinfectante con agua potable.
          .row.justify-content-center(titulo="Secado") 
            p Consiste en la eliminación de los restos de agua. Es conveniente hacerlo en forman espontánea al aire o eventualmente con paños desechables.
      .col-md-6.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema8/img2.png', alt='Imagen decorativa')


    Separador

    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 8.3 Descontaminación y limpieza cuarto de almacenamiento de residuos
      
    SlyderF.mb-5(columnas="col-md-6 col-lg-4" data-aos="fade-down")
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema8/slide-ico1.svg' alt='Icono')
          p.text-center Usar los elementos de protección individual (tapabocas, botas, bata u overol, guantes de caucho y gafas si es requerido.) cuando se realice el almacenamiento de residuos. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema8/slide-ico2.svg' alt='Icono')
          p.text-center Mantener limpios los elementos de protección personal. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema8/slide-ico3.svg' alt='Icono')
          p.text-center Antes de almacenar los residuos se deben pesar, rotular y registrar en la planilla de control. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema8/slide-ico4.svg' alt='Icono')
          p.text-center Debe garantizarse la integridad de los residuos hasta el momento de la recolección externa por el gestor externo. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema8/slide-ico5.svg' alt='Icono')
          p.text-center En caso de accidente o derrame, inmediatamente se debe llevar a cabo una limpieza y desinfección del lugar. 
      .tarjeta.bg-green5.p-4
        .row.justify-content-center.mb-3
          .col-5.mb-3
            img(src='@/assets/curso/temas/tema8/slide-ico6.svg' alt='Icono')
          p.text-center Las escobas y traperos para el aseo del sitio de almacenamiento deben ser diferentes a los utilizados para la limpieza y aseo del área interna de la sede. 


    h3.subt.text-white.mb-4(data-aos="fade") Características de un desinfectante

    p.mb-4(data-aos="fade") Las características más importantes en un desinfectante son:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.bg-blue2.py-4
        .row.align-items-center.ps-md-0
          .col-md-3.mb-3.mb-md-0
            img(src='@/assets/curso/temas/tema8/img3.svg', alt='Imagen decorativa')
          .col-md-9.mb-3.mb-md-0
            ul.lista-ul--color.color-primario.ps-3.ps-md-4
              li
                i.fas.fa-check
                | No alterar las características de las materias primas.
              li
                i.fas.fa-check
                | No tóxico.
              li
                i.fas.fa-check
                | No corrosivos para equipos.
              li
                i.fas.fa-check
                | No irritantes para la piel.
              li
                i.fas.fa-check
                | Ser fáciles de almacenar, preparar y aplicar.
              li
                i.fas.fa-check
                | Ser inodoros e insípidos.
              li
                i.fas.fa-check
                | Tener alto poder desinfectante.
              li
                i.fas.fa-check
                | Debe tener capacidad de formar capa protectora antiséptica y de alguna duración.
              li
                i.fas.fa-check
                | Tener rango amplio y efectivo y tener efecto comprobado sobre bacterias, virus, hongos, etc.
              li
                i.fas.fa-check
                | Ser estable al almacenamiento.


    h3.subt.text-white.mb-4(data-aos="fade") Desinfectante hipoclorito de sodio (NaOCl)

    p.mb-4(data-aos="fade") Es el desinfectante usado por excelencia en los procesos de desinfección en recipientes y cuartos de almacenamiento de residuos.

    .row.align-items-center.mb-md-3
      .col-md-8.mb-4(data-aos="fade-right")
        ul.lista-ul--color.color-primario.ps-3.ps-md-4
          li
            i.fas.fa-check
            | El cloro es un desinfectante universal, activo contra todos los microrganismos.
          li
            i.fas.fa-check
            | En general se utiliza en forma de hipoclorito sódico, excelente desinfectante, bactericida, virucida. Es inestable y disminuye su eficiencia en presencia de luz, calor y largo tiempo de preparación, por lo tanto, la presentación comercial indicada son envases oscuros y no transparentes.
          li
            i.fas.fa-check
            | Es altamente corrosivo por lo tanto no debe usarse por más de treinta minutos, ni repetidamente en material de acero inoxidable.
          li
            i.fas.fa-check
            | Es un químico económico, asequible, de gran aplicabilidad y se consigue comercialmente en forma líquida a una concentración entre el 4% y el 6%:
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema8/img4.png', alt='Imagen decorativa')


    .row.fondo-blue.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-md-3.mb-4.mb-md-0(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema8/img5.png', alt='Imagen decorativa')
          .col-md-8.mb-4.mb-md-0(data-aos="fade-left")
            p Medidas de Manejo del Hipoclorito 
            ul.lista-ul--color.color-primario.ps-3.ps-md-4
              li.mb-1
                i.fas.fa-check
                | Use protección personal como: uniforme antifluido, guantes de nitrilo, gafas de seguridad. 
              li.mb-1
                i.fas.fa-check
                | Recuerde usarlo en lugares con ventilación adecuada hacer las preparaciones cada doce horas, almacenar en envases plásticos opacos y no en recipientes metálicos o de vidrio. Luego de estas doce horas se inactiva la dosificación no sirve. 
              li.mb-1
                i.fas.fa-check
                | Evite salpicaduras o derrames.
              li.mb-1
                i.fas.fa-check
                | Usar estrictamente la concentración recomendada según la necesidad. 
              li.mb-1
                i.fas.fa-check
                | Usar agua desionizada o destilada para la dosificación. 
              li.mb-1
                i.fas.fa-check
                | Verifique que se mantenga los tiempos de contacto recomendados, de acuerdo con el proceso de desinfección.
              li.mb-1
                i.fas.fa-check
                | Compruebe que se utilice el desinfectante según la dosificación requerida, los cuartos de almacenamiento de residuos son consideradas áreas de alto riesgo. 
              li.mb-1
                i.fas.fa-check
                | Limpie previamente las superficies antes de desinfectar ya que si no lo hace, no será óptima la desinfección por tanto no quitara los microorganismos. 
              li.mb-1
                i.fas.fa-check
                | Requisitos para obtener máxima eficiencia.
              li.mb-1
                i.fas.fa-check
                | Mantener el producto en un lugar fresco y protegido de la luz. 
              li.mb-1
                i.fas.fa-check
                | Respetar estrictamente la concentración recomendada según la necesidad, el INVIMA recomienda usar hipoclorito de sodio con 5% de concentración. 


    .row.align-items-center.mb-md-3
      .col-md-7.mb-4(data-aos="fade-right")
        p.mb-4 Preparación de Hipoclorito de Sodio
        ul.lista-ul--color.color-primario.ps-3.ps-md-4
          li
            i.fas.fa-check
            | Lo primero a tener en cuenta es la concentración, la cual debe ser del 5% según recomendación del INVIMA.
          li
            i.fas.fa-check
            | Para qué se va a utilizar, si es para limpieza y desinfección tener en cuenta si es área de alto (crítica), intermedio (semi crítica) o bajo riesgo (no crítica) en el caso de residuos se considera de alto riesgo. 
          li
            i.fas.fa-check
            | El volumen que se desea preparar. 
      .col-md-5.mb-4(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 26] Ejemplo de preparación de dosificación
        img(src='@/assets/curso/temas/tema8/fig26.png', alt='Ejemplo de preparación de dosificación')
        figcaption
          p.mb-0 Nota. Preparación, uso y almacenamiento adecuado del hipoclorito de sodio en los prestadores de servicio de salud. INVIMA (2012, p.9)

    .row.mb-5
      .col-md-6.mb-4.mx-0.px-0(data-aos="fade-right")
        .bg-green.p-4.px-md-5.h-100
          p Se desea preparar una solución al 0.25% (2500 ppm) porque se va a emplear para hacer el procedimiento de desinfección del lavado rutinario de un área crítica que puede ser el cuarto de almacenamiento de residuos.
          p 1) Verifique en la etiqueta del producto hipoclorito de sodio comercial, la concentración de este, para efectos de este ejemplo, se ha de suponer que en este ejemplo se dispone de hipoclorito de sodio al 5% (50000 ppm)
          p 2) Determine la cantidad que necesite preparar de esta dilución. Para efectos de este ejemplo, se necesita preparar 1 litro a 2500 ppm.
      .col-md-6.mb-4.mx-0.px-0.h-100(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema8/img6.png', alt='Imagen decorativa')    


    .row.fondo-tema8.align-items-center.py-5.pb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-md-12
            h4.t-green.mb-5(data-aos="fade") Información que se requiere para hacer los cálculos: 

          .col-md-7.text-center.bg-green5.p-4.mb-4(data-aos="fade-right")
            h5.mb-1 Concentración deseada (Cd) 
            p 2500 ppm (o sea que cada 100 mL de solución contiene 0.25 gramos de hipoclorito)
            h5.mb-1 Concentración conocida (Cc)
            p 50000 ppm (Solución de hipoclorito de sodio al 5%) 
            h5.mb-1 Volumen de la solución de la concentración deseada a preparar (Vd)
            p.mb-0 1000 mL (1 Iitro de solución de 2500 ppm)
          .col-md-3.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema8/img7.svg', alt='Imagen decorativa')      

          .col-md-12.mb-mb-3(data-aos="fade")
            p.mb-0 Entonces debo utilizar la siguiente fórmula para saber que (¿V?) 
            p.mb-4 Volumen en ml (mililitros) de la solución conocida al 5% (50000 ppm) que debe mezclarse con agua desionizada o destilada. 

          .col-md-8.tarjeta.bg-white.p-4.mb-4(data-aos="fade-down")
            p.text-center.mb-4 ¿Entonces debo utilizar la siguiente fórmula para saber que Cd x Vd= Cc x V?:
            .row.justify-content-center
              .col-md-5
                figure 
                  img.px-3(src='@/assets/curso/temas/tema8/form.svg', alt='Formula')

          .col-md-12.mb-4(data-aos="fade")
            p Entonces se debe agregar 50ml de Hipoclorito de sodio al 5% (50000 ppm) a 950 ml de agua desionizada o destilada para obtener un 1 litro de solución de 2500 ppm.

          .row
            .col-md-5(data-aos="fade-right")
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 27] Rotular los envases
              img(src='@/assets/curso/temas/tema8/fig27.png', alt='Rotular los envases')
              figcaption.mt-1
                p.mb-0.text-center Nota. Preparación, uso y almacenamiento adecuado del hipoclorito de sodio en los prestadores de servicio de salud. INVIMA (2012, p. 10) 
            .col-md-7(data-aos="fade-left")
              .bg-white.tarjeta.box-shadow.p-4.mb-5
                SlyderA(tipo="b")
                  .row.px-md-4
                    h4 ¿Qué no debo hacer con las preparaciones de hipoclorito de sodio?
                    ul.lista-ul--color.color-primario
                      li
                        i.fas.fa-check
                        | Evitar que durante el almacenamiento pueda entrar en contacto con materiales combustibles, ácidos y/o compuestos derivados del amoniaco.   
                      li
                        i.fas.fa-check
                        | No mezclar con detergentes, pues esto inhibe su acción y produce vapores irritantes para el tracto respiratorio llegando a ser mortales.   
                      li
                        i.fas.fa-check
                        | No echar agua al proceso de desinfección porque daña la fórmula de desinfección y no se desinfecta el área, el agua aplicarla ya para remover el desinfectante si desea. 
                      li
                        i.fas.fa-check
                        | Son corrosivos para el níquel, el hierro, el acero, por lo tanto, no debe dejarse en contactos con estos materiales por más tiempo que el indicado.   
                      li
                        i.fas.fa-check
                        | No mezclar con agua caliente.
                      li
                        i.fas.fa-check
                        | No mezcla con formaldehido las soluciones de hipoclorito producen un agente carcinogénico éter bis (Clorometil).
                  .row.px-md-4
                    h4 ¿Qué no debo hacer con las preparaciones de hipoclorito de sodio?
                    ul.lista-ul--color.color-primario
                      li
                        i.fas.fa-check
                        | Se debe guardar en un lugar protegido de la luz, ventilado y a una temperatura no superior de 30ºC.   
                      li
                        i.fas.fa-check
                        | Se debe envasar siempre en recipientes plásticos. No envasar en recipientes metálicos ni en vidrio.
                      li
                        i.fas.fa-check
                        | Los recipientes deben ser herméticos y estar bien cerrados. 
                      li
                        i.fas.fa-check
                        | Realizar la señalización del área e identificación del producto.   
                      li
                        i.fas.fa-check
                        | Realizar la rotación del producto en inventario, el primero que entra es el primero que sale.
                  .row.px-md-4
                    h4 ¿Qué no debo hacer con las preparaciones de hipoclorito de sodio?
                    p La intoxicación por hipocloritos y por sustancias liberadoras de cloro puede estar acompañada de los siguientes síntomas:   
                    ul.lista-ul--color.color-primario
                      li
                        i.fas.fa-check
                        | Dolor e inflamación de la boca, la faringe, el esófago y el estómago, seguidos por erosión de las mucosas, en especial del estómago.   
                      li
                        i.fas.fa-check
                        | Vómito, que puede ser de tipo sanguinolento. 
                      li
                        i.fas.fa-check
                        | Colapso circulatorio, piel fría y paro respiratorio. 
                      li
                        i.fas.fa-check
                        | Confusión, delirio y coma. 
                      li
                        i.fas.fa-check
                        | Edema de la faringe, glotis y laringe, en algunos casos con obstrucción. 
                      li
                        i.fas.fa-check
                        | Perforación del esófago o el estómago, con peritonitis. 
                      li
                        i.fas.fa-check
                        | La inhalación de los humos de ácido hipocloroso o cloro causa severa irritación del tracto respiratorio y edema pulmonar.   
                      li
                        i.fas.fa-check
                        | El contacto de los humos de ácido hipocloroso o cloro libre con la piel puede causar erupciones vesiculares y dermatitis eczematoide. En caso de presentarse una intoxicación Se debe seguir las conductas clínicas más adecuadas según diagnóstico médico. 

          .col-md-12(data-aos="fade")
            p.mb-0 En caso de presentarse una intoxicación.
            p.mb-0 Se debe seguir las conductas clínicas más adecuadas según diagnóstico médico:  


    .row.align-items-center.justify-content-center.bg-green8.p-4.mb-4
      .col-md-7(data-aos="fade-right")
        h5 Ecotoxicidad 
        p A pesar de la dilución, el Hipoclorito de Sodio forma soluciones causticas con el agua. Resulta muy tóxico para los organismos acuáticos, de manera que se usa para reducir la presencia de microorganismos en los procesos de tratamiento de aguas residuales. Además, esta sustancia presenta efectos perjudiciales a los organismos acuáticos por variación del pH. INVIMA (2012)
      .col-md-5(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema8/img8.png', alt='Imagen decorativa')  

    
    .row(data-aos="fade-down")
      .col-md-6
        .bg-green5.p-4.h-100
          .row.align-items-center
            .col-md-2.mb-4
              img(src='@/assets/curso/temas/tema8/ico-import.svg', alt='Icono') 
            .col-md-10.mb-4
              h5 IMPORTANTE
              p Errores habituales vinculados a la limpieza y desinfección: 
          ul.lista-ul--color.color-primario.ps-md-4
            li
              i.fas.fa-check
              | Realizar las operaciones apresuradamente y en el momento inoportuno.
            li
              i.fas.fa-check
              | Limpiar y desinfectar en el lugar inadecuado.
            li
              i.fas.fa-check
              | Elección errónea de detergentes y desinfectantes.
            li
              i.fas.fa-check
              | Mala preparación de las soluciones de limpieza y desinfección.
            li
              i.fas.fa-check
              | Utilizar accesorios (cepillos, esponjas, etc.) en mal estado de conservación.
            li
              i.fas.fa-check
              | Aplicar temperaturas incorrectas en los procedimientos.
            li
              i.fas.fa-check
              | Usar productos de limpieza y desinfección no aprobados.
            li
              i.fas.fa-check
              | Almacenamiento inadecuado de los productos de saneamiento.
            li
              i.fas.fa-check
              | Métodos incorrectamente aplicados.
            li
              i.fas.fa-check
              | Personal no entrenado.
      .col-md-6
        .bg-blue5.p-4.h-100
          .row.align-items-center
            .col-md-2.mb-4
              img(src='@/assets/curso/temas/tema8/ico-import.svg', alt='Icono') 
            .col-md-10.mb-4
              h5 IMPORTANTE
              p Recomendaciones: 
          ul.lista-ul--color.color-primario.ps-md-4
            li
              i.fas.fa-check
              | Emplear el detergente en su justa cantidad ya que así facilita el enjuague y se necesita menos agua. 
            li
              i.fas.fa-check
              | Barrer antes de trapear: reduce el gasto de agua, evita que se tapen las cañerías y por lo tanto reduce los gastos de mantenimiento de la instalación de agua. 
            li
              i.fas.fa-check
              | Limpiar antes de desinfectar ya que así se elimina la mayor parte de los contaminantes. De esta forma se reduce la cantidad de desinfectante para lograr el mismo efecto.
            li
              i.fas.fa-check
              | Tener presente que el personal bien entrenado y que recibió instrucciones claras de cómo realizar su tarea, es más eficiente en el uso de los productos y utensilios. 
            li
              i.fas.fa-check
              | Nunca utilizar los elementos empleados en la limpieza de pisos (secadores, escobas, traperos, etc.) para limpiar mesones, o accesorios de cocina, por ejemplo.
            li
              i.fas.fa-check
              | No usar limpiones de tela para la limpieza de manos, máquinas, utensilios, mesones, etc., pues constituyen el riesgo de contaminación cruzada más importante con que cuentan los microorganismos para trasladarse de un lugar a otro. En reemplazo de éstos, se recomienda el uso de elementos desechables.





</template>

<script>
export default {
  name: 'Tema8',
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
