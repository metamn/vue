<template>
  <a class='mv-link' :href="url" :title="title">{{ title }}</a>
</template>

<script>
  export default {
    name: 'mv-link',
    props: [],
    mounted () {

    },
    data () {
      return {
        title: 'Link title',
        url: 'http://example.com'
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
