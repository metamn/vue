<template lang="html">
  <aside v-resize:debounce="makeTextResponsive" :class="$style.wildMap" :style="computedContainerStyle">
    <h3>Wild map</h3>

    <div :class="[$style.wilderness]" :style="computedWildernessStyleTop">
      <p :class="[$style.p, $style.wildernessP, $style.wildernessTopP]">Wilderness</p>
    </div>
    <div :class="$style.notWilderness">
      <div :class="[$style.valley, 'textContainer']">
        <p :class="[$style.p, 'text']">Valley</p>
      </div>
      <div :class="[$style.frontier, 'textContainer']">
        <p ref="text" :class="[$style.p, 'text']">Frontier</p>
      </div>
      <div :class="[$style.beyond, 'textContainer']">
        <p ref="text" :class="[$style.p, 'text']">Beyond</p>
      </div>
    </div>
    <div :class="[$style.wilderness]" :style="computedWildernessStyleBottom">
      <p :class="[$style.p, $style.wildernessP, $style.wildernessBottomP]">Wilderness</p>
    </div>
  </aside>
</template>

<script>
  import resize from 'vue-resize-directive'

  export default {
    name: 'WildMap',
    props: {
      /**
       * The width of the map
       * @type {Object} width
       * @type {number} width.size
       * @type {string} width.unit
       *
       * The width of the map also sets other params like the `border-left` and `border-right` CSS properties
       * - They need a unit set in `px, em, vw, etc` but not in `%`
       * - Their size will be calculated from the map's `width` property
       */
      width: {
        type: Object,
        default: function () {
          return {
            size: 40,
            unit: 'vw'
          }
        }
      },
      /**
       * The height of the border
       * @type {Object} borderSize
       * @type {number} borderSize.size
       * @type {string} borderSize.unit
       *
       * The value of `border-top` and `border-bottom`
       */
      borderSize: {
        type: Object,
        default: function () {
          return {
            size: 5,
            unit: 'vw'
          }
        }
      }
    },
    methods: {
      /**
       * Create a CSS unit by concatenating `element.size` with `element.unit`
       * @return {String} A CSS unit like `70em` or `14px`
       *
       * If `size` or `unit` is missing returns the default value of the prop
       */
      createCSSUnit (element) {
        return `${element.size}${element.unit}`
      },
      /**
       * Returns the half of the container size
       * @return {String} A CSS unit like `10px`
       */
      containerHalfSize () {
        return `${this.width.size / 2}${this.width.unit}`
      },
      /**
       * Sets dynamically the border size
       * @return {Sting} A valid CSS `border` property
       */
      setBorderStyle (direction) {
        const borderDirection = (direction === 'top') ? 'border-top' : 'border-bottom'
        const containerHalfSize = this.containerHalfSize()

        return `
          ${borderDirection}: ${this.createCSSUnit(this.borderSize)} solid #000;
          border-left: ${containerHalfSize} solid transparent;
          border-right: ${containerHalfSize} solid transparent;
          `
      },
      /**
       * If the text doesn't fit it's container then it will be displayed vertically
       * @return {none}
       */
      makeTextResponsive () {
        const texts = this.$el.querySelectorAll('.text')
        const textContainers = this.$el.querySelectorAll('.textContainer')

        // Loop through texts and display text vertically if text width > text container width
        for (var i = 0; i < texts.length; i++) {
          let textWidth = texts[i].clientWidth
          let textContainerWidth = textContainers[i].clientWidth
          if (textWidth > textContainerWidth) {
            // - https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation
            texts[i].style.writingMode = 'vertical-rl'
            texts[i].style.textOrientation = 'upright'
            textContainers[i].style.display = 'inline-grid'
          } else {
            // - setting the default styles
            texts[i].style.writingMode = 'horizontal-tb'
            texts[i].style.textOrientation = 'mixed'
            textContainers[i].style.display = 'inline-grid'
          }
        }
      }
    },
    computed: {
      /**
       * Sets dynamically the container size
       * @return {String} A CSS `width` property like `width: 70em`
       */
      computedContainerStyle () {
        return `width: ${this.createCSSUnit(this.width)}`
      },
      /**
       * Sets dynamically the top border size
       * @return {String} A CSS `border` property
       */
      computedWildernessStyleTop () {
        return this.setBorderStyle('top')
      },
      /**
       * Sets dynamically the bottom border size
       * @return {String} A CSS `border` property
       */
      computedWildernessStyleBottom () {
        return this.setBorderStyle('bottom')
      }
    },
    mounted: function () {
      this.makeTextResponsive()
    },
    directives: {
      resize
    }
  }
</script>

<style module>
  h3 {
    display: none;
  }

  .wildMap {
    border: 1px solid;

    /* Do not overflow on small screens if the width is too large */
    max-width: 100%;

    /* Do not overflow anyway ... */
    overflow: hidden;
  }

  .wilderness {
    position: relative;
    width: 0;
    height: 0;
  }

  .wildernessP {
    position: absolute;
    color: white;
  }

  p {
    padding: 1.25em;
  }

  .notWilderness {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .valley,
  .frontier,
  .beyond {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 20em;
    height: 100%;
  }

  .valley {
    width: 50%;
    border-right: 1px solid;
  }

  .frontier,
  .beyond {
    width: 25%;
  }

  .frontier {
    border-right: 1px dashed;
  }
</style>
