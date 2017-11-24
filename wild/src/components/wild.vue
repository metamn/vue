<template lang="html">
  <article :class="$style.wild">
    <h3>Wilderness</h3>
    <wild-map :class="$style.wildMap" :width="{ size: 50, unit: 'vw'}" :borderSize="{ size: 8, unit: 'vw'}"/>
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

<style module>
  .wild {
    width: 100%;
  }

  .wildMap {
    margin: 0 auto;
  }
</style>
