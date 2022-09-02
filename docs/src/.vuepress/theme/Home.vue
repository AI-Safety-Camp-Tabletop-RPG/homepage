<template>
  <div class="theme-container layout-home">
    <!-- <Content slot-key="hero" class="w-[45em] bg-tttGrey p-16 mx-auto mt-60 text-center"/> -->
    <div class="w-[45em] bg-tttGrey p-12 mx-auto my-60 text-center">
      <h1 class="text-5xl font-extralight highlighter">{{$site.title}}</h1>
      <div class="border-b w-2/3 mx-auto my-4"></div>
      <p class="text-2xl">
        <Content slot-key="tagline" />
      </p>
    </div>

    <div
      v-for="item in $page.frontmatter.items"
      class="w-[55em] bg-tttGrey mx-auto mb-16 px-16 py-10"
    >
      <h2 class="text-2xl highlighter-blue mb-10">{{item.title}}</h2>
      <p class="text-lg">{{item.content}}</p>
    </div>
    <Content />
  </div>
</template>

<script>

</script>