<template lang="html">
  <article :class="[$style.article]">
    <h3 :class="[$style.articleTitle]">{{ item.title }}</h3>

    <aside :class="[$style.description]">
      <h3 :class="[$style.descriptionTitle]">Description</h3>

      <div :class="[$style.descriptionText]" v-html="item.description"></div>
    </aside>
  </article>
</template>

<script>
  export default {
    name: 'wild-item',
    props: {
      item: {
        type: Object
      }
    }
  }
</script>

<style module scoped>
  .descriptionTitle {
    display: none;
  }
</style>
