<template lang="html">
  <nuxt/>
</template>

<script>
  // from https://www.npmjs.com/package/normalize.css/
  import 'normalize.css'

  // Loading webfonts
  import fonts from '../components/framework/fonts'

  export default {
    components: {
      'mv-fonts': fonts
    }
  }
</script>

<style lang="scss">
  // from https://github.com/vuejs-templates/webpack/issues/121
  @import "../components/framework/reset";
</style>
