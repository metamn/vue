<template>
  <div class="main">
    <h1>Storybook</h1>

    <p>
      There are lots of addons which make this storybook a PHENOMENAL UNBELIVEABLE LIVING STYLEGUIDE with tests, specs, README, live param tuning etc !!!!
    <p>

    <p>
      Since VUE support is very new some addons break the app completely.
    <p>

    <p>
      Checking back later ...
    </p>

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
