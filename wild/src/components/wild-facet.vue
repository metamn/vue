<template lang="html">
  <aside class="">
    <h3>{{ facet.name }}</h3>

    <ul v-for="item in facet.items">
      <li>{{ item }}</li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: 'wild-facet',
    props: {
      facet: {
        type: Object
      }
    },
  }
</script>

<style module scoped>
</style>
