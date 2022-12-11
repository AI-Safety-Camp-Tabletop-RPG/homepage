<template>
  <div id="global-layout" class="global-layout">
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

    <component class="body-content container" :is="layout"/>

    <footer class="footer">
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
      <div class="footer-content">
        <figure class="">
          <img src="img/Logo (180x180).png" alt="logo">
        </figure>
        <em>© 2022 by The Treacherous Team.</em>

        <div class="footer-social-links">
          <a href="https://itch.io/profile/thetreacherousturn" target="_blank" rel="noopener noreferrer">
            <svg width="21px" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.94-63.73 18.67-67 31.56-144.45 83.88-144.45zM256 270.79s-44.38 40.77-52.35 55.21l29-1.17v25.32c0 1.55 21.34.16 23.33.16 11.65.54 23.31 1 23.31-.16v-25.28l29 1.17c-8-14.48-52.35-55.24-52.35-55.24z"/></svg>
          </a>
          <a href="https://www.twitch.tv/thetreacherousturn" target="_blank" rel="noopener noreferrer">
            <svg width="21px" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"/></svg>
          </a>
          <a href="https://www.reddit.com/r/thetreacherousturn/" target="_blank" rel="noopener noreferrer">
            <svg width="21px" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"/></svg>
          </a>
          <a href="https://twitter.com/treacherousturn" target="_blank" rel="noopener noreferrer">
            <svg width="21px" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
          </a>
        </div>

      </div>
    </footer>
  </div>
</template>

<style>
.global-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
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
  height: 7rem;
  margin-bottom: -7rem;
  overflow: hidden;
}
.header-decor-bg {
  height: 7rem;
}
.header-decor-bg, .footer-decor-bg {
  background: black;
  position: absolute;
  width: 100%;
}
.footer-decor {
  position: absolute;
  z-index: 0;
  width: 100vw;
  overflow: hidden;
}
.footer-decor, .footer-decor-bg {
  height: 10rem;
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
.body-content {
  flex: 1;
}
/* FOOTER */
.footer {
  margin: 0 auto;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;
}
.footer-content {
  position: absolute;
  z-index: 2;
  width: 100%;
}
.footer-content figure {
  margin: 0 auto;
  width: 5rem;
}
.footer .footer-social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
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
    },
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
  },
  mounted() {
    // Initialize parallax effect
    lax.init()

    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

  }
}

</script>
