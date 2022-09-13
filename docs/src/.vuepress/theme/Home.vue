<template>
  <div class="theme-container layout-home">
    <div class="home-splash">
      <h1 class="home-splash-title highlighter-red">{{$site.title}}</h1>
      <div class="home-splash-divider"></div>
      <p class="home-splash-tagline">
        <Content slot-key="tagline" />
      </p>
    </div>

    <div
      v-for="item in $page.frontmatter.items"
      class="home-items"
    >
      <h2 class="home-items-title highlighter-blue">{{item.title}}</h2>
      <p class="home-items-content">{{item.content}}</p>
    </div>
    <Content />
  </div>
</template>

<style>
.home-splash {
  max-width: 47rem;
  background-color: var(--tttGrey);
  padding: 2rem;
  margin: 15rem auto;
  text-align: center;
}
.home-splash h1, .home-splash p {
  margin: 0;
}
.home-splash-title {
  margin: 0;
  font-size: 3rem;
  font-weight: 200;
  /* TODO: highlighter */
}
.home-splash:hover .home-splash-title {
  background-size: 100% var(--highlighter-height);
}
.home-splash-divider {
  border-bottom: 1px solid;
  width: 66.66667%;
  margin: 1rem auto;
  margin-top: 1.5rem;
}
.home-splash-tagline {
  font-size: 1.25rem;
  font-weight: 300;
}
.home-items {
  max-width: 55rem;
  background-color: var(--tttGrey);
  margin: 0 auto;
  margin-bottom: 4rem;
  padding: 2.5rem 4rem;
}
.home-items:hover .home-items-title {
  background-size: 100% var(--highlighter-height);
}
.home-items-title {
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
}
.home-items-content {
  font-size: 1.125rem;
  font-weight: 300;
  margin: 0;
  margin-top: 1.7rem;
}
</style>

<script>

</script>