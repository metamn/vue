<template>
  <div class="hello">
    maps: {{ maps }}
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    computed: {
      maps () {
        return this.$store.state.maps.join(', ')
      }
    }
  }
</script>

<style scoped>
</style>
