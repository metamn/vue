# Vue.js components

They will be npm components

## Steps

1. Create a github repo: https://github.com/metamn/mv-link
2. Clone and `npm init`. This will create a `packeges.json` file
3. Add an empty `index.js`
4. Now you can publish to npm with `npm publish`
5. Add the component to the project with `sudo npm -i --save-dev mv-link`
6. Import it with `import Link from 'mv-link'`
7. Import it with
```
components: {
  'link': Link
}
```
8. Use it with `<link></link>`

The full example:

Hello.vue
```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><link></link></li>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
    </ul>
  </div>
</template>

<script>
  // Link is an npm package from https://www.npmjs.com/package/mv-link installed by npm -i --save-dev mv-link
  import Link from 'mv-link'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'link': Link
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
```
