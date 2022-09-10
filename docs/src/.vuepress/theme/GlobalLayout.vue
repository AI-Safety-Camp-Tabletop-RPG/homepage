<template>
  <div id="global-layout">
    <header class="header">
      <RouterLink to="/" exact class="header-logo">
        <figure class="">
          <img src="img/Logo (180x180).png" alt="logo">
        </figure>
        <h1 class="highlighter-red">{{$site.title}}</h1>
      </RouterLink>
      <nav>
        <RouterLink to="/features.html" class="header-nav-link highlighter-blue">
          Features
        </RouterLink>
        <RouterLink to="/downloads.html" class="header-nav-link highlighter-blue">
          Downloads
        </RouterLink>
        <a href="https://app.thetreacherousturn.ai/" class="header-nav-link highlighter-blue">Web Tool  ⨠</a>
        <RouterLink to="/contact.html" class="header-nav-link highlighter-blue">
          Contact
        </RouterLink>
      </nav>
    </header>

    <component :is="layout"/>

    <footer class="footer">
      <figure class="">
        <img src="img/Logo (180x180).png" alt="logo">
      </figure>
      <em>© 2022 by The Treacherous Team.</em>
    </footer>
  </div>
</template>

<style>
.header {
  margin: 0 auto;
  padding-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-logo {
  display: flex;
  align-items: center;
}
.header-logo figure {
  width: 7rem;
  margin: 0 auto;
}
.header-logo h1 {
  font-size: 1.5rem;
  font-weight: 300;
}
.header-nav-link {
  color: var(--tttWhite);
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  padding-bottom: 0.2rem;
  --highlighter-height: 1.1em;
}
.header-nav-link:hover, .header-nav-link.router-link-active {
  background-size: 100% var(--highlighter-height);
  color: white;
}
.footer {
  margin: 0 auto;
  margin-top: 10rem;
  margin-bottom: 2rem;
  text-align: center;
}
.footer figure {
  margin: 0 auto;
  width: 5rem;
}
</style>

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
