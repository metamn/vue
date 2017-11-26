<template lang="html">
  <section :class="$style.wild">
    <h3>Wilderness</h3>
    <wild-map :class="$style.wildMap" :width="{ size: 50, unit: 'vw'}" :borderSize="{ size: 8, unit: 'vw'}"/>
    <div v-for="item in items">
      <wild-item :item="item" />
    </div>
  </section>
</template>

<script>
  import WildMap from './wild-map'
  import WildItem from './wild-item'

  export default {
    name: 'wild',
    data: function () {
      return {
        items: [
          {
            'title': 'Wilderness',
            'description': `
              <p>Explorations, new aesthetics and new techniques between art and commerce, by independent players</p>
            `
          },
          {
            'title': 'Valley',
            'description': `
              <p>The good old &mdash; well established way with no future</p>
            `
          },
          {
            'title': 'Frontier',
            'description': `
              <p>Best of breed. Stable yet progressive.</p>
            `
          },
          {
            'title': 'Beyond',
            'description': `
              <p>Experiments, research, trend setting backed up by global players</p>
            `
          }
        ]
      }
    },
    components: {
      'wild-map': WildMap,
      'wild-item': WildItem
    }
  }
</script>

<style module scoped>
  h3 {
    display: none;
  }

  .wild {
    width: 100%;
  }

  .wildMap {
    margin: 0 auto;
  }
</style>
