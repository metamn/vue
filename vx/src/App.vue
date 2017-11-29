<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {createClient} from 'contentful'

  const client = createClient({
    space: 'lvp1p3se851j',
    accessToken: 'a8dcf7a9aeb2b6898fc58b0dae20d92014fc6ae72c06c61276293d300e4001f7'
  })

  export default {
    name: 'app',
    async beforeCreate () {
      client.getEntries({
        content_type: 'map'
      })
      .then((response) => {
        const maps = response.items.map(item => item.fields.name)
        this.$store.commit('setMaps', maps)
      })
      .catch(console.error)
    }
  }
</script>

<style>
</style>
