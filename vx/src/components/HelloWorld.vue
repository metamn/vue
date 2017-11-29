<template>
  <div class="hello">
    {{ mapsCount }} maps: {{ maps }}
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    computed: {
      maps () {
        return this.$store.state.maps.join(', ')
      },
      mapsCount () {
        return this.$store.getters.mapsCount
      }
    }
  }
</script>

<style scoped>
</style>
