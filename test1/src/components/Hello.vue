<template>
  <div class="hello">
    <ul>
      <li><mv-link title="phone" url="112233" type='phone'>phone</mv-link></li>
      <li><mv-link title="email" url="alika@a.ro" type='email'>email</mv-link></li>
      <li><mv-link title="external" url="http://example.com" type='external'>external</mv-link></li>
      <li><mv-link title="internal" url="about-us" type='internal'>internal</mv-link></li>
    </ul>
  </div>
</template>

<script>
  // Link is an npm package from https://www.npmjs.com/package/mv-link installed by npm -i --save-dev mv-link
  // import Link from 'mv-link'
  import Link from './Link'

  export default {
    name: 'hello',
    data () {
      return {}
    },
    components: {
      'mv-link': Link
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
