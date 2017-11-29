<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  // cannot move this code to `api` ... it won't work at all after a refresh ...
  // THIS CAN HELP::
  // - https://www.reddit.com/r/vuejs/comments/5moay9/any_simple_examples_using_axios_with_vuex_for/
  // MORE EXACTLY: https://medium.com/wdstack/vue-vuex-getting-started-f78c03d9f65
  // import {syncStoreWithBackend} from './api'

  import {createClient} from 'contentful'

  const client = createClient({
    space: 'lvp1p3se851j',
    accessToken: 'a8dcf7a9aeb2b6898fc58b0dae20d92014fc6ae72c06c61276293d300e4001f7'
  })

  export default {
    name: 'app',
    async beforeCreate () {
      // syncStoreWithBackend()

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
