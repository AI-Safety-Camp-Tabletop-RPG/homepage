<template>
  <figure class="download">
    <img :src="item.image" :alt="item.name" class="download-image">
    <figcaption>
      <span class="download-name">
        <span>
          {{ item.name }}
        </span>
        <a class="download-icon-link" :href="item.link" target="_blank" style="text-decoration: none;">
          <img src="icons/download.svg" :alt="item.link">
        </a>
      </span>
      <div class="download-description" v-html="item.description"></div>
    </figcaption>
  </figure>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['item']
}
</script>

<style lang="scss">
@media (max-width: 768px) {
  .download {
    margin: 1rem;
  }
}
.download figcaption {
  margin-top: 0.5em;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.download-name {
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 0.2em;
  margin: 1rem auto;
  position: relative;
}
.download-image {
  min-width: 6rem;
}
.download-description {
  text-align: left;
  font-size: 0.8rem;
  p {
    line-height: 1.1rem;
  }
  strong {
    color: white;
  }
}
.download-icon-link {
  text-decoration: none;
  display: inline;
  // // width: 1rem;
  // // min-width: 1rem;
  // // min-height: 1rem;
  padding: 0 !important;
  margin: 0;
  position: absolute;
  right: -2rem;
  top: 0.05rem;
  img {
    height: 1.7rem;
    display: inline;
  }
  &:hover {
    background-size: 0;
    img {
      filter: brightness(100);
    }
  }
}
</style>