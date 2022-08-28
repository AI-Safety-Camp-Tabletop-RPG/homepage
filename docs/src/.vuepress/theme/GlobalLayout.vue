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

    <details>
      <summary>DEBUG INFO</summary>
      The layout is: {{layout}}
    </details>

    <footer>
      <figure>
        <img src="/Logo (180x180).png" alt="logo">
      </figure>
      <em>© 2022 by The Treacherous Team.</em>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout
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