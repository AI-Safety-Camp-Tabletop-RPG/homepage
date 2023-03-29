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
    <Content slot-key="feature-1" ref="feature-1" class="feature-block highlighter-color-pink"/>
    <Content />
    <Content slot-key="feature-2" ref="feature-2" class="feature-block highlighter-color-blue"/>
    <Content slot-key="feature-3" ref="feature-3" class="feature-block highlighter-color-red"/>
    <Content slot-key="feature-4" ref="feature-4" class="feature-block highlighter-color-pink"/>
    <div class="home-media">
      <h1 class="home-media-title highlighter-red active">Interviews</h1>
    </div>
    <Content slot-key="media-1" ref="media-1" class="feature-block no-bg media-block highlighter-color-blue"/>
    <Content slot-key="media-2" ref="media-2" class="feature-block no-bg media-block highlighter-color-pink"/>

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
}
.home-splash:hover .home-splash-title {
  background-size: 100% var(--highlighter-height);
}
@media (max-width: 425px) {
  .home-splash-title {
    font-size: 2rem;
  }
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

.home-media {
  max-width: 47rem;
  padding: 2rem;
  margin: 5rem auto;
  text-align: center;
}
.home-media h1 {
  margin: 0;
}
.home-media-title {
  margin: 0;
  font-size: 3rem;
  font-weight: 200;
}
.feature-block.no-bg {
  background-color: transparent;
}
.media-block {
  text-align: center;
  padding: 0;
}
@media (max-width: 560px) {
  .embed-youtube {
    width: 90%;
  }
}
</style>

<script>

</script>