<template lang="html">
  <aside :class="$style.wildMap" :style="computedContainerStyle">
    <h3>Wild map</h3>

    <div :class="[$style.wilderness]" :style="computedWildernessStyleTop">
      <p :class="[$style.p, $style.wildernessP, $style.wildernessTopP]">Wilderness</p>
    </div>
    <div :class="$style.notWilderness">
      <div :class="$style.valley">
        <p :class="$style.p">Valley</p>
      </div>
      <div :class="$style.frontier">
        <p :class="$style.p">Frontier</p>
      </div>
      <div :class="$style.beyond">
        <p :class="$style.p">Beyond</p>
      </div>
    </div>
    <div :class="[$style.wilderness]" :style="computedWildernessStyleBottom">
      <p :class="[$style.p, $style.wildernessP, $style.wildernessBottomP]">Wilderness</p>
    </div>
  </aside>
</template>

<script>
  export default {
    name: 'WildMap',
    props: {
      /**
       * The width of the map
       * @type {Object}
       *
       * The width of the map also sets other params like:
       * - The `border-left` and `border-right` CSS properties need a unit in `px, em, vw, etc` but can't use `%`
       * - These properties will be calculated from this `width` property
       */
      width: {
        type: Object,
        default: function () {
          return '70vw'
        }
      },
      /**
       * Th height of the border
       * @type {Object}
       *
       * The value of `border-top` and `border-bottom`
       */
      borderSize: {
        type: Object,
        default: function () {
          return '10vw'
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
        return (element.size && element.unit) ? `${element.size}${element.unit}` : element
      },
      /**
       * Returns the half of the container size
       * @return {String} A CSS unit like `10px`
       */
      containerHalfSize () {
        return (this.width.size && this.width.unit) ? `${this.width.size / 2}${this.width.unit}` : '35vw'
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
      computedWildernessStyleTop () {
        return this.setBorderStyle('top')
      },
      computedWildernessStyleBottom () {
        return this.setBorderStyle('bottom')
      }
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
    left: -2.5em;
    width: 100%;
  }

  .wildernessTopP {
    top: -10vw;
  }

  .wildernessBottomP {
    top: 5vw;
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
