<template lang="html">
  <section :class="$style.wild">
    <h3>Wilderness</h3>
    <wild-map :class="$style.wildMap" :width="{ size: 50, unit: 'vw'}" :borderSize="{ size: 8, unit: 'vw'}"/>
    <wild-item v-for="item in items" :item="item" />
  </section>
</template>

<script>
  import WildMap from './wild-map'
  import WildItem from './wild-item'

  export default {
    name: 'wild',
    data: function () {
      return {
        items: [
          {
            'title': 'Valley',
            'description': `
              <p>The good old &mdash; well established way with no or slow future</p>
            `,
            'facets': [
              {
                'name': 'CMS',
                'items': [
                  'Drupal',
                  'Joomla',
                  'Magento',
                  'Expression Engine',
                  'Tumblr',
                  'Wordpress.org',
                  'Wix'
                ]
              }
            ]
          },
          {
            'title': 'Frontier',
            'description': `
              <p>Best of breed. Stable yet progressive.</p>
            `,
            'facets': [
              {
                'name': 'CMS',
                'items': [
                  'Squarespace',
                  'Shopify',
                  'Medium',
                  'Wordpress.com',
                  'Craft CMS',
                  'Ghost',
                  'Weebly',
                  'Virb',
                  'Static site generators'
                ]
              }
            ]
          },
          {
            'title': 'Beyond',
            'description': `
              <p>Experiments, research, trend setting backed up by global players</p>
            `,
            'facets': [
              {
                'name': 'CMS',
                'items': [
                  'Wordpress + Guttenberg',
                  'Contentful',
                  'Firebase'
                ]
              }
            ]
          },
          {
            'title': 'Wilderness',
            'description': `
              <p>Explorations, new aesthetics and new techniques between art and commerce, by independent players</p>
            `,
            'facets': [
              {
                'name': 'CMS',
                'items': [
                  'JAMStack',
                  'Netlify',
                  'Storyblok',
                  'GraphCMS'
                ]
              }
            ]
          }
        ]
      }
    },
    components: {
      'wild-map': WildMap,
      'wild-item': WildItem
    }
  }
</script>

<style module scoped>
  h3 {
    display: none;
  }

  .wild {
    width: 100%;
  }

  .wildMap {
    margin: 0 auto;
  }
</style>
