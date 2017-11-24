<template lang="html">
  <aside :class="$style.wild-map">
    <h3>Wild map</h3>

    <div :class="$style.container" :style="computedContainerStyle">
      <div :class="[$style.wilderness, $style.wildernessTop]">
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
      <div :class="[$style.wilderness, $style.wildernessBottom]">
        <p :class="[$style.p, $style.wildernessP, $style.wildernessBottomP]">Wilderness</p>
      </div>
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
       * The `border-top` and `border-bottom` CSS properties need a unit in `px, em, vw, etc` but can't use '%'
       * These properties will be calculated from this `width` property
       */
      width: {
        type: Object,
        default: function () {
          return '70vw'
        }
      }
    },
    methods: {
      getContainerWidth () {
        return (this.width.size && this.width.unit) ? `${this.width.size}${this.width.unit}` : this.width
      }
    },
    computed: {
      computedContainerStyle () {
        return `width: ${this.getContainerWidth()}`
      }
    }
  }
</script>

<style module>
  h3 {
    display: none;
  }

  .container {
    border: 1px solid;
    margin: 10vh auto;
  }

  .wilderness {
    position: relative;
    width: 0;
    height: 0;
    border-left: 35vw solid transparent;
    border-right: 35vw solid transparent;
  }

  .wildernessP {
    position: absolute;
    color: white;
    left: -2.5em;
    width: 100%;
  }

  .wildernessTop {
    border-top: 10vw solid #000;
  }

  .wildernessBottom {
    border-bottom: 10vw solid #000;
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
