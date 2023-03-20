<template>
  <figure class="member">
    <div v-if="member.link" class="member-image-with-link">
      <img :src="member.avatar" :alt="member.name" class="member-image">
      <div class="member-image-overlay">
        <!-- svg for link icon, using member.link_icon -->
        <a class="member-image-icon-link" :href="member.link" target="_blank" style="text-decoration: none;">
          <img :src="member.link_icon" :alt="member.link">
        </a>
      </div>
    </div>
    <img v-else :src="member.avatar" :alt="member.name" class="member-image">

    <figcaption>

      <span class="member-name">
        <a v-if="member.link" :href="member.link" target="_blank" style="text-decoration: none;">{{ member.name }}</a>
        <span v-else>{{ member.name }}</span>
      </span>
      <span class="member-role">{{ member.role }}</span>
    </figcaption>
  </figure>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['member']
}
</script>

<style lang="scss">
.member-image-with-link {
  position: relative;
}

.member-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

a.member-image-icon-link {
  text-decoration: none;
  display: flex;
  bottom: 0;
  right: 0;
  width: 10%;
  min-width: 24px;
  min-height: 24px;
  position: absolute;
  padding: 0.2em;
  margin: 0;
  background: var(--tttHighlightBlue);
  img {
    filter: brightness(100)
  }
  &:hover {
    background: white;
    img {
      filter: none;
    }
  }
}
@media (max-width: 768px) {
  .member {
    margin: 1rem;
  }
}
.member-image {
  min-width: 6rem;
}
</style>