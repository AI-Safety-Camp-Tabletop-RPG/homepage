<template>
  <div id="global-layout">
    <header>
      <div class="container mx-auto pt-10 flex justify-between items-end">
        <h1 class="text-xl highlighter">
          <RouterLink to="/">
            {{$site.title}}
          </RouterLink>
        </h1>
        <nav>
          <RouterLink to="/features" class="px-4 hover-highlighter">
            Features
          </RouterLink>
          <RouterLink to="/downloads" class="px-4 hover-highlighter">
            Downloads
          </RouterLink>
          <a href="https://app.thetreacherousturn.ai/" class="px-4 hover-highlighter">Web Tool  ⨠</a>
          <RouterLink to="/contact" class="px-4 hover-highlighter">
            Contact
          </RouterLink>
        </nav>
      </div>
    </header>

    <component :is="layout"/>

    <footer class="mx-auto mt-40 text-center">
      <figure class="mx-auto w-20">
        <img src="img/Logo (180x180).png" alt="logo">
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

<style lang="stylus">
  @import './styles/style.styl';
</style>