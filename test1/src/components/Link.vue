<template>
  <a :class="computedClass" :href="computedURL" :title="title">{{ title }}</a>
</template>

<script>
  export default {
    name: 'mv-link',
    props: [
      'url',
      'title',
      'klass',
      'type'
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
      computedURL () {
        switch (this.type) {
          case 'email':
            return 'mailto:' + this.url
          case 'phone':
            return 'tel:' + this.url
          default:
            return this.url
        }
      },

      computedClass () {
        return this.klass ? 'mv-link ' + this.klass : 'mv-link'
      }
    }
}
</script>

<style scoped lang="scss">
  .mv-link {
    color: blue;
  }
</style>
