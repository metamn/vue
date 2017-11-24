<template lang="html">
  <article class="wild">
    <h3>Wilderness</h3>
    <wild-map/>
  </article>
</template>

<script>
  import WildMap from './wild-map'

  export default {
    name: 'wild',
    components: {
      'wild-map': WildMap
    }
  }
</script>

<style lang="css">
</style>
