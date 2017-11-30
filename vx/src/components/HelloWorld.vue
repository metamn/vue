<template>
  <div class="hello">
    {{ mapsCount }} maps: {{ maps }}
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'HelloWorld',
    computed: {
      ...mapState([
        'maps'
      ]),
      ...mapGetters([
        'mapsCount'
      ])
    },
    mounted: function () {
      this.$store.dispatch('GET_MAP_LIST')
    }
  }
</script>

<style scoped>
</style>
