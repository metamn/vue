<template>
  <a :class="computedClass" :href="computedURL" :title="title"><slot>inside the slot</slot></a>
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
    computed: {
      computedURL () {
        switch (this.type) {
          case 'email':
          case 'e-mail':
            return 'mailto:' + this.url
          case 'phone':
          case 'tel':
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
