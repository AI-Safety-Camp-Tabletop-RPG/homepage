<template>
  <div id="global-layout">
    <div class="header-decor">
      <div class="header-decor-bg"></div>
      <img src="img/Decor/Header-footers/Short/short LT.png" alt="" class="header-decor-left">
      <img src="img/Decor/Header-footers/Short/short RT.png" alt="" class="header-decor-right">
      <img src="img/Decor/Header-footers/Long/long L.png" alt="" class="header-decor-left">
      <img src="img/Decor/Header-footers/Long/long R.png" alt="" class="header-decor-right">
      <img src="img/Decor/Header-footers/Lines/lines 3.png" alt="" class="header-decor-line-left">
      <img src="img/Decor/Header-footers/Lines/lines 1.png" alt="" class="header-decor-line-right">
      <img src="img/Decor/Header-footers/Masks/mask2.png" alt="" class="header-decor-mask">
    </div>
    <header class="header container">
      <div class="header-content">
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
      </div>
    </header>

    <component class="container" :is="layout"/>

    <div class="footer-decor">
      <div class="footer-decor-bg"></div>
      <img src="img/Decor/Header-footers/Short/short LB.png" alt="" class="footer-decor-glitch footer-decor-left">
      <img src="img/Decor/Header-footers/Short/short RB.png" alt="" class="footer-decor-glitch footer-decor-right">
      <img src="img/Decor/Header-footers/Long/long thin L.png" alt="" class="footer-decor-glitch footer-decor-left">
      <img src="img/Decor/Header-footers/Long/long thin R.png" alt="" class="footer-decor-glitch footer-decor-right">
      <img src="img/Decor/Header-footers/Lines/lines 4.png" alt="" class="footer-decor-glitch footer-decor-line-left">
      <img src="img/Decor/Header-footers/Lines/lines 2.png" alt="" class="footer-decor-glitch footer-decor-line-right">
      <img src="img/Decor/Header-footers/Masks/mask1.png" alt="" class="footer-decor-mask">
    </div>
    <footer class="footer container">
      <figure class="">
        <img src="img/Logo (180x180).png" alt="logo">
      </figure>
      <em>© 2022 by The Treacherous Team.</em>
    </footer>
  </div>
</template>

<style>
/* HEADER */
.header {
  position: relative;
  z-index: 2;
}
.header-content {
  margin: 0 auto;
  padding-top: 1rem;
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
.header-decor {
  position: relative;
  z-index: 0;
  width: 100vw;
  height: 10rem;
  margin-bottom: -10rem;
  overflow: hidden;
}
.header-decor-bg, .footer-decor-bg {
  background: black;
  position: absolute;
  width: 100%;
  height: 7rem;
}
.footer-decor {
  position: absolute;
  z-index: 0;
  width: 100vw;
  height: 7rem;
  overflow: hidden;
  bottom: 0;
}
.header-decor img, .footer-decor img {
  position: absolute;
}
.header-decor-mask {
  left: 50%;
  transform: translateX(-50%) scale(2);
}
.footer-decor-mask {
  left: 50%;
  transform: translateX(-50%) scale(1.5);
}
.header-decor-left, .footer-decor-left {
  left: 0;
  transform: translateX(-10%);
}
.header-decor-right, .footer-decor-right {
  right: 0;
  transform: translateX(10%);
}
.header-decor-line-left {
  left: 0;
}
.header-decor-line-right {
  right: 0;
  transform: translate(0%, 2rem);
}
.footer-decor-line-left {
  left: 0;
}
.footer-decor-line-right {
  right: 0;
  top: -4rem;
}
/* FOOTER */
.footer {
  margin: 0 auto;
  margin-bottom: 0.5rem;
  text-align: center;
  position: relative;
  z-index: 2;
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
