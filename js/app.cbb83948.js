(function(e){function a(a){for(var o,i,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"5dd2fd25","chunk-0206bfa0":"23834d76","chunk-0c047e41":"346dcdef","chunk-13a6037e":"141cece7","chunk-18f95272":"6679ff83","chunk-25b302c8":"2c0b1ccf","chunk-26fc7596":"b8585c4b","chunk-2c06842c":"7d5c266b","chunk-2d0c5615":"625de244","chunk-2d0e96ec":"c56a4167","chunk-2d208d90":"16c0fcea","chunk-2d21d0e2":"62993821","chunk-2d22c123":"93688b5d","chunk-2d2747e2":"16e43c29","chunk-2e80bb9a":"2809e191","chunk-319206de":"cb1e7823","chunk-32334cb6":"a3ac75bc","chunk-36769079":"9a3e3df5","chunk-3c57cd7b":"60d32933","chunk-4cdd78c0":"00ecc3eb","chunk-4f2d402a":"219043e3","chunk-515a8379":"d844e075","chunk-53ccb27e":"b39b8d46","chunk-55d286b8":"243ae0d2","chunk-59974754":"52dd4b1c","chunk-60cbc06b":"ff34f7c2","chunk-659152b8":"02f6d70b","chunk-6e1e538a":"32fe5932","chunk-766a929b":"42486e17","chunk-c796899c":"dbc88330","chunk-e8a7823a":"e78ac50f","chunk-f2df7d2c":"57627739","chunk-fde47172":"767880ef",comple:"8e2810ac",creditos:"6c15de97",glosario:"63a0d5a9",intro:"6921845b",referencias:"37b68d8b",sintesis:"ecc4d9a3",tema1:"f3e189db",tema2:"48b09e5b",tema3:"8b6a1ec6"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"be25a6af","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"41f8687e","chunk-60cbc06b":"d3a83979","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"126808df","chunk-766a929b":"87fd8c0c","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"3d214811",creditos:"ef20f2bf",glosario:"51c308df",intro:"31d6cfe0",referencias:"e5878bf9",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===o||l===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),d=Object(s["a"])(c,i,t,!1,null,null,null),l=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=n("ae58"),f=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema3").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema3").then(n.bind(null,"5029"))}},{path:"tema6",name:"tema6",component:function(){return n.e("tema3").then(n.bind(null,"92ea"))}},{path:"tema7",name:"tema7",component:function(){return n.e("tema3").then(n.bind(null,"a2b2"))}},{path:"tema8",name:"tema8",component:function(){return n.e("tema3").then(n.bind(null,"f96f"))}},{path:"tema9",name:"tema9",component:function(){return n.e("tema3").then(n.bind(null,"ecd9"))}},{path:"tema10",name:"tema10",component:function(){return n.e("tema3").then(n.bind(null,"e2aa"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Gestionar integralmente el manejo de residuos según normativa vigente",descripcionCurso:"El propósito de este componente es brindar orientación para la elaboración de un plan de gestión integral de residuos. Esto incluirá la gestión y diseño de estrategias para el manejo de residuos sólidos, basadas en el análisis del diagnóstico de residuos, para lograr su adecuada minimización, aprovechamiento, tratamiento y disposición final; en cumplimiento con la normativa. ",imagenBannerPrincipal:n("65fa"),fondoBannerPrincipal:n("ce7c")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Conceptos generales",desarrolloContenidos:!0},{nombreRuta:"tema2",numero:"2",titulo:"Definición de compromiso organizacional, objetivos y metas",desarrolloContenidos:!0},{nombreRuta:"tema3",numero:"3",titulo:"Estrategias de formación y educación",desarrolloContenidos:!0},{nombreRuta:"tema4",numero:"4",titulo:"Prevención y minimización de residuos",desarrolloContenidos:!0},{nombreRuta:"tema5",numero:"5",titulo:"Segregación en la fuente",desarrolloContenidos:!0,subMenu:[{numero:"5.1",titulo:"Código de colores en los recipientes",hash:"t_5_1"},{numero:"5.2",titulo:"Características de los recipientes             ",hash:"t_5_2"}]},{nombreRuta:"tema6",numero:"6",titulo:"Recolección y transporte interno de residuos",desarrolloContenidos:!0},{nombreRuta:"tema7",numero:"7",titulo:"Almacenamiento de residuos",desarrolloContenidos:!0},{nombreRuta:"tema8",numero:"8",titulo:"Control de plagas y técnicas de desinfección",desarrolloContenidos:!0},{nombreRuta:"tema9",numero:"9",titulo:"Seguridad y Salud en el Trabajo",desarrolloContenidos:!0},{nombreRuta:"tema10",numero:"10",titulo:"Aprovechamiento, tratamiento y/o disposición final",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/222319_CF012_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Alcaldía Santiago de Cali (2015) <em>La problemática principal del manejo de las basuras</em>.",link:"https://www.cali.gov.co/dagma/publicaciones/110286/la_problematica_principal_del_manejo_de_basuras/"},{referencia:"Área metropolitana del Valle de Aburrá (2016) <em>Manual para el manejo integral de residuos sólidos en el Valle de Aburrá</em>.",link:"https://docplayer.es/4184174-Manual-para-el-manejo-integral-de-residuos-en-el-valle-de-aburra.html"},{referencia:"Decreto 1713 de 2002. [Ministerio del Interior]. Por el cual se reglamenta la Ley 142 de 1994, la Ley 632 de 2000 y la Ley 689 de 2001, en relación con la prestación del servicio público de aseo, y el Decreto Ley 2811 de 1974 y la Ley 99 de 1993 en relación con la Gestión Integral de Residuos Sólidos. Diario Oficial No. 44.893 de Agosto 7 de 2002.",link:"https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5542"},{referencia:"IGAC (2018) <em>Manejo de residuos peligrosos y especiales</em>.",link:"http://igacnet2.igac.gov.co/intranet/UserFiles/File/procedimientos/instructivos/2018/I20604-01%2018V6%20Manejo%20de%20residuos%20pe.pdf"},{referencia:"ICONTEC (2009) <em>GTC 24- Gestión Ambiental Residuos sólidos</em>. Guía para la separación en la fuente.",link:"https://tienex.co/media/b096d37fcdee87a1f193271978cc2965.pdf"},{referencia:"ICONTEC (2005) <em>Norma técnica colombiana NTC1692 Transporte de mercancías peligrosas definiciones, clasificación, marcado, etiquetado y rotulado</em>",link:"https://web.mintransporte.gov.co/consultas/mercapeli/Reglamento/Anexos/NTC1692.pdf"},{referencia:"IMPALA (2017) <em>Plan de Gestión Integral de Residuos</em>."},{referencia:"<em>MARBE Departamento químico (2016) Etiqueta SGA (Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos).</em>",link:"https://www.marbequimica.com.ar/etiqueta-sga-sistema-globalmente-armonizado-de-clasificacion-y-etiquetado-de-productos-quimicos/"},{referencia:"Minambiente (2020) <em>Gobierno unifica el código de colores para la separación de residuos en la fuente a nivel nacional</em>",link:"https://archivo.minambiente.gov.co/index.php/noticias-minambiente/4595-gobierno-unifica-el-codigo-de-colores-para-la-separacion-de-residuos-en-la-fuente-a-nivel-nacional#:~:text=Los%20colores%20para%20la%20presentaci%C3%B3n,negro%20(residuos%20no%20aprovechables)."},{referencia:"PAMPA (2016). <em>POLÍTICA AMBIENTAL</em>.",link:"https://www.pampaltda.com.co/resources/politicas/PAMPA%20POL%C3%8DTICA%20AMBIENTAL%20PAMPA%20LTDA.pdf"},{referencia:"Resolución en proyecto 2020 [Ministerio de Salud y Protección Social] Por la cual se adopta el Manual para la Gestión Integral de Residuos Generados en la Atención en Salud y otras actividades, y se dictan otras disposiciones.",link:"https://consultorsalud.com/wp-content/uploads/2020/02/Manual-para-la-Gesti%C3%B3n-Integral-de-Residuos-Generados-en-la-Atenci%C3%B3n-en-Salud-proyecto-de-resolucion_compressed.pdf"},{referencia:"Resolución 2184 de 2019 [Ministerio de Ambiente y Desarrollo Sostenible] Por la cual se modifica la resolución 668 de 2016 sobre uso racional de bolsas plásticas y se adoptan otras disposiciones. Diciembre 26 de 2019.",link:"https://www.minambiente.gov.co/documento-entidad/resolucion-2184-de-2019/"},{referencia:"Universidad Industrial de Santander (2013) <em>Plan de gestión Integral de Residuos</em>.",link:"https://docplayer.es/16486008-Implementacion-del-plan-de-gestion-integral-de-residuos-en-la-universidad-industrial-de-santander-comite-tecnico-ambiental-y-sanitario.html"},{referencia:"Universidad Pontificia Bolivariana y Área metropolitana del Valle de Aburrá (2008). <em>Guía para el manejo integral de residuos</em>.",link:"https://www.sabaneta.gov.co/files/doc_varios/Gu%C3%ADa%20para%20el%20Manejo%20Integral%20de%20Residuos-%20Subsector%20instituciones%20educativas.pdf"},{referencia:"Universidad de los Andes (2012) <em>Procedimiento para la gestión y disposición de residuos sólidos y peligrosos</em>.",link:"https://gerenciacampus.uniandes.edu.co/content/download/4106/19770/file/Procedimiento%20para%20la%20Gesti%C3%B3n%20y%20Disposici%C3%B3n%20de%20Residuos.pdf"},{referencia:"Universidad de California (2011) Manejo integrado de plagas.",link:"https://wspehsu.ucsf.edu/wp-content/uploads/2015/10/IPM_CurriculumSpanish1.pdf"}],glosario:[{termino:"Aprovechamiento y/o valorización",significado:"es el proceso de recuperar el valor remanente o el poder calorífico de los materiales que componen los residuos o desechos peligrosos, por medio de la recuperación, el reciclado o la regeneración."},{termino:"Disposición final",significado:"es el proceso de aislar y confinar los residuos o desechos peligrosos, en especial los no aprovechables, en lugares especialmente seleccionados, diseñados y debidamente autorizados, para evitar la contaminación y los daños o riesgos a la salud humana y al ambiente."},{termino:"Gestión",significado:"es el conjunto de actividades orientadas a dar a los residuos sanitarios el destino final adecuado de acuerdo con las características de cada residuo."},{termino:"Gestión integral de residuos sólidos",significado:"es el conjunto de operaciones y disposiciones encaminadas a dar a los residuos producidos el destino más adecuado desde el punto de vista ambiental, de acuerdo con sus características, volumen, procedencia, costos, tratamiento, posibilidades de recuperación, aprovechamiento, comercialización y disposición final. "},{termino:"Gestión interna de residuos",significado:"las acciones y estrategias que se aplican dentro de una organización para manejar de manera adecuada los residuos que se generan, desde su origen hasta su disposición final, con el fin de minimizar su impacto ambiental y proteger la salud pública."},{termino:"Manejo integral de residuos",significado:"es un conjunto de acciones y estrategias que se aplican para controlar y minimizar el impacto ambiental y sanitario de los residuos, desde su generación hasta su disposición final. Incluye la reducción en la fuente, la reutilización, el reciclaje, el tratamiento y la disposición final adecuada de los residuos, de acuerdo con la normativa ambiental y sanitaria aplicable."},{termino:"Residuo sólido o desecho",significado:"es cualquier material que ya no se necesita y se descarta, como basura doméstica, residuos industriales, entre otros. "},{termino:"Residuo peligroso",significado:"es un material que representa un riesgo significativo para la salud pública o el medio ambiente debido a sus características químicas, físicas o biológicas."},{termino:"Reciclaje",significado:"es el proceso mediante el cual se aprovechan y transforman los residuos sólidos recuperados y se devuelve a los materiales su potencialidad de reincorporación como materia prima para la fabricación de nuevos productos. El reciclaje puede constar de varias etapas: procesos de tecnologías limpias."},{termino:"Reutilización",significado:"es la prolongación y adecuación de la vida útil de los residuos sólidos recuperados y que mediante procesos, operaciones o técnicas devuelven a los materiales su posibilidad de utilización en su función original o en alguna relacionada, sin que para ello requieran procesos adicionales de transformación."},{termino:"Separación en la fuente",significado:"es la clasificación de los residuos sólidos en el sitio donde se generan para su posterior recuperación."}],complementario:[{tema:"4. Prevención y minimización de residuos.",referencia:"SENA (2012, 16 julio) Campaña cero papel SENA. [Archivo de video] Youtube.",tipo:"Video",link:"https://www.youtube.com/watch?v=37Y2a2R0ORg"},{tema:"6. Recolección y transporte interno de residuos.",referencia:"IPSE EnergiaZNI (2014, 19 diciembre) Programa Integral de Residuos Sólidos PGIRS en IPS. [Archivo de video] Youtube.",tipo:"Video",link:"https://www.youtube.com/watch?v=tidePrlbXzU"},{tema:"8. Almacenamiento de residuos.",referencia:"Revista consultoría TV (2018, 23 octubre) ¿Cómo hacer un manejo integral de los residuos? [Archivo de video] Youtube.",tipo:"Video",link:"https://www.youtube.com/watch?v=MUTCWejAUAw"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Líder del equipo",centro:"Dirección General"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable ecosistema de producción de RED Santander\t",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Diana Carolina Triana Guarnizo",cargo:"Instructor",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Juan Carlos Cárdenas Sánchez",cargo:"Instructor",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Zenith Chinchilla Ruedas",cargo:"Diseñador instruccional",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Vilma Lucia Perilla ",cargo:"Revisora metodológica y pedagógica",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Evaluadora Instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Sandra Patricia Hoyos Sepúlveda",cargo:"Revisión y corrección de estilo",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Paola Alexandra Moya Peralta",cargo:"Diseñadora instruccional",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Carmen Alicia Martínez Torres",cargo:"Animador y Productor Multimedia",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Storyboard e ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Andrés Bolaño Rey",cargo:"Locución",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Blanca Flor Tinoco Torres",cargo:"Diseñador web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Andrea Paola Botello De la Rosa",cargo:"Desarrollador Fullstack",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Emilsen Alfonso Bautista",cargo:"Actividad didáctica",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Evaluador para Contenidos Inclusivos y Accesibles",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Luis Gabriel Urueta Álvarez",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var y=n("9224");o["a"].prototype.$package=y,new o["a"]({router:h,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},"65fa":function(e,a,n){e.exports=n.p+"img/banner-principal.9570874f.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.fa633092.png"}});
//# sourceMappingURL=app.cbb83948.js.map