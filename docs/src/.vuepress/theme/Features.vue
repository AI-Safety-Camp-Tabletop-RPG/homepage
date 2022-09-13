<template>
  <div class="theme-container layout-features">
    <Content slot-key="feature-1" ref="feature-1" class="feature-block highlighter-color-pink"/>
    <Content slot-key="feature-2" ref="feature-2" class="feature-block highlighter-color-blue"/>
  </div>
</template>
<style>
  .feature-block {
    max-width: 55em;
    background-color: var(--tttGrey);
    margin: 4rem auto;
    padding: 2.5rem 1.5rem;
  }
  .feature-block:nth-child(odd) {
    margin-right: 0;
  }
  .feature-block:nth-child(even) {
    margin-left: 0;
  }
  .feature-block h2 {
    font-size: 1.9rem;
    font-weight: 200;
    /* highlighter fx */
    padding-left: 0.4em;
    padding-right: 0.4em;
    display: inline;
    background-repeat: no-repeat;
    background-size: 0% var(--highlighter-height);
    background-position: 0% 118%;
  }
  .feature-block:hover h2 {
    background-size: 100% var(--highlighter-height);
  }
  .feature-block.highlighter-color-pink h2 {
    background-image: linear-gradient(0deg, var(--tttHighlightPink), var(--tttHighlightPink));
  }
  .feature-block.highlighter-color-red h2 {
    background-image: linear-gradient(0deg, var(--tttHighlightRed), var(--tttHighlightRed));
  }
  .feature-block.highlighter-color-blue h2 {
    background-image: linear-gradient(0deg, var(--tttHighlightBlue), var(--tttHighlightBlue));
  }
  .feature-block p {
    font-size: 1rem;
    margin-top: 2rem;
  }
  .feature-block p:first-of-type {
    margin-top: 2.5rem;
  }
</style>