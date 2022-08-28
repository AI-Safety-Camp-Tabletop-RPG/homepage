<template>
  <div class="theme-container">
    <h1>404</h1>
    <h3>{{ getMsg() }}</h3>
    <RouterLink to="/">
      Home
    </RouterLink>

    <Content/>
  </div>
</template>

<script>
const msgs = [
  `Sorry, your page was eaten by an AGI.`,
  `Umm, there's nothing here.`,
  `We couldn't find the page you're looking for.`,
]
export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
