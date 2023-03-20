<template>
  <div class="theme-container layout-contact">
    <Content/>
  </div>
</template>

<style>
.members {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
}
@media (max-width: 425px) {
  .members {
    grid-template-columns: 1fr;
  }
}
.members figcaption {
  margin-top: 0.5em;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.member-name {
  font-weight: bold;
  margin-bottom: 0.2em;
}
</style>

<script>

</script>