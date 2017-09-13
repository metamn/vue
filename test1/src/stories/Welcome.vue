<template>
  <div class="main">
    <h1>Storybook</h1>

    <p>
      <a class="link" @click="onClick" role="button" tabIndex="0">Stories</a>
    </p>

  </div>
</template>

<script>
  const log = () => console.log('Welcome to storybook!')

  export default {
    name: 'welcome',

    props: {
      showApp: {
        type: Function,
        default: log
      }
    },

    methods: {
      onClick (event) {
        event.preventDefault()
        this.showApp()
      }
    }
  }
</script>

<style>
</style>
