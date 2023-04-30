<template>
  <div class="theme-container layout-downloads">
    <Content/>
  </div>
</template>

<style lang="scss">
.download-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
}
@media (max-width: 768px) {
  .download-items {
    grid-template-columns: 1fr;
  }
}
</style>