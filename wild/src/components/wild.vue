<template lang="html">
  <section :class="$style.wild">
    <h3>Wilderness</h3>
    <wild-map :class="$style.wildMap" :width="{ size: 50, unit: 'vw'}" :borderSize="{ size: 8, unit: 'vw'}"/>
    <wild-item v-for="item in items" :item="item" :key="item.id"/>
  </section>
</template>

<script>
  import store from '../store'
  import WildMap from './wild-map'
  import WildItem from './wild-item'

  export default {
    name: 'wild',
    data: function () {
      return {
        items2: store,
        items: [
          {
            'title': 'Valley',
            'description': `
              <p>The good old, well established way with no or slow future</p>
            `,
            'facets': [
              {
                'name': 'Content',
                'items': [
                  'Drupal',
                  'Joomla',
                  'Magento',
                  'Expression Engine',
                  'Tumblr',
                  'Wordpress.org',
                  'Wix'
                ]
              },
              {
                'name': 'Technology',
                'items': [
                  'jQuery',
                  'MySQL',
                  'PHP',
                  'Apache',
                  'AJAX',
                  'Zend, Symphony, CakePHP',
                  'SVN'
                ]
              },
              {
                'name': 'Design',
                'items': [
                  'Photoshop',
                  'Illustrator'
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
                'name': 'Content',
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
              },
              {
                'name': 'Technology',
                'items': [
                  'MVC',
                  'REST',
                  'Task runners (Gulp)',
                  'Templating languages (Mustache)',
                  'Pre-processors (SCSS)',
                  'Asset managers',
                  'Ruby on Rails, Django, Laravel, Swift',
                  'Git'
                ]
              },
              {
                'name': 'Design',
                'items': [
                  'Sketch',
                  'Flat design'
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
                'name': 'Content',
                'items': [
                  'Wordpress + Guttenberg',
                  'Contentful',
                  'Firebase'
                ]
              },
              {
                'name': 'Technology',
                'items': [
                  'React',
                  'Module bundlers (Webpack)',
                  'Post processors (Post CSS)',
                  'JSON',
                  'NoSQL',
                  'REST API',
                  'Node.js',
                  'Containers'
                ]
              },
              {
                'name': 'Design',
                'items': [
                  'Figma',
                  'Material Design'
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
                'name': 'Content',
                'items': [
                  'JAMStack',
                  'Netlify',
                  'Storyblok',
                  'GraphCMS'
                ]
              },
              {
                'name': 'Technology',
                'items': [
                  'Vue',
                  'CSS Modules',
                  'GraphQL',
                  'Serverless',
                  'Databaseless',
                  'Microservices'
                ]
              },
              {
                'name': 'Design',
                'items': [
                  'Design in the browser (Brutalist websites)'
                ]
              }
            ]
          }
        ]
      }
    },
    created () {
      store.getMaps()
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
