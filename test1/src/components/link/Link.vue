<template>
  <a :class="computedClass" :href="computedURL" :title="title"><slot>inside the slot</slot></a>
</template>

<script>
  export default {
    name: 'mv-link',
    props: {
      /**
       * The URL where the link points
       */
      url: {
        type: String,
        default: 'http://example.com'
      },
      /**
       * The title of the link displayed on hover
       */
      title: {
        type: String,
        default: 'Link title'
      },
      /**
       * The type of the url like email, telephone, etc.
       */
      type: {
        type: String,
        default: ''
      },
      /**
       * An additional class to be added for the link
       */
      klass: {
        type: String,
        default: ''
      }
    },
    computed: {
      /**
       * Add a prefix to the URL if necessary
       *
       * Like 'mailto:' or 'tel:'
       *
       * @public
       * @param {String} type The type of the URL
       * @param {String} url The value of the URL
       * @return {String} the URL or the URL with a prefix
       */
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

      /**
       * Add a classname to the existing 'mv-link' classname
       *
       * @public
       * @param {String} klass The classname to be added
       * @return {String} 'mv-link', or the 'mv-link' + the classname
       */
      computedClass () {
        return this.klass ? 'mv-link ' + this.klass : 'mv-link'
      }
    }
}
</script>

<style scoped lang="scss">
  .mv-link {
    // https://survivejs.com/react/advanced-techniques/styling-react/
    color: red;

    @import '--not-underlined/link--not-underlined.scss';
    &--not-underlined {
      @include link--not-underlined;
    }
  }
</style>
