<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4 Ha finalizado el estudio de las temáticas de este componente formativo. En este punto, haga un análisis juicioso del esquema que se muestra a continuación, registre su propia síntesis en su libreta personal de apuntes. Se le recomienda, además, repasar los temas que considere necesarios. ¡Adelante!

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema general de este componente formativo, que enuncia las temáticas desarrolladas en el mismo y destaca aspectos clave estudiados. Tema central: manejo de residuos según normativa vigente. Temas integradores: política ambiental, control de plagas, seguridad y salud en el trabajo.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
