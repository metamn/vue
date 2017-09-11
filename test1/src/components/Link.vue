<template>
  <a class='mv-link' :href="url" :title="title">{{ title }}</a>
</template>

<script>
  export default {
    name: 'mv-link',
    props: [
      'url',
      'title'
    ],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .mv-link {
    color: blue;
  }
</style>
