<template>
  <div id="global-layout">
    <header>
      <h1>
        <RouterLink to="/">
          The Treacherous Turn
        </RouterLink>
      </h1>
      <nav>
        <RouterLink to="/features">
          Features
        </RouterLink>
        <RouterLink to="/downloads">
          Downloads
        </RouterLink>
        <a href="https://app.thetreacherousturn.ai/">Web Tool  ⨠</a>
        <RouterLink to="/contact">
          Contact
        </RouterLink>
      </nav>
    </header>

    <component :is="layout"/>

    <footer>
      <figure>
        <img src="/Logo (180x180).png" alt="logo">
      </figure>
      <em>© 2022 by The Treacherous Team.</em>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { setGlobalInfo } from '@app/util'
export default {
  name: 'GlobalLayout',
  computed: {
    layout () {
      const layout = this.getLayout()
      setGlobalInfo('layout', layout)
      return Vue.component(layout)
    }
  },
  methods: {
    getLayout () {
      if (this.$page.path) {
        const layout = this.$page.frontmatter.layout
        if (layout && (this.$vuepress.getLayoutAsyncComponent(layout)
          || this.$vuepress.getVueComponent(layout))) {
          return layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}

</script>

<style>
  nav a {
    padding: 0 1em;
  }
</style>