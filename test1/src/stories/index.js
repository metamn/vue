import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { withKnobs, text } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'
import { withInfo } from '@storybook/addon-info'

import ButtonReadme from './README.md'
import withReadme from 'storybook-readme/with-readme'

import { setOptions } from '@storybook/addon-options';

setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'Storybook XX',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: '#',
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  goFullScreen: false,
  /**
   * display left panel that shows a list of stories
   * @type {Boolean}
   */
  showLeftPanel: true,
  /**
   * display horizontal panel that displays addon configurations
   * @type {Boolean}
   */
  showDownPanel: true,
  /**
   * display floating search box to search through stories
   * @type {Boolean}
   */
  showSearchBox: false,
  /**
   * show horizontal addons panel as a vertical panel on the right
   * @type {Boolean}
   */
  downPanelInRight: true,
  /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: false,
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: null,

  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,

  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedAddonPanel: undefined, // The order of addons in the "Addons Panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
});

//storybook.configure(() => require('./'), module);


import MyButton from './MyButton.vue'
import Welcome from './Welcome.vue'

storiesOf('Welcome', module)
  .add('to Storybook', () => ({
    components: {
      Welcome
    },
    template: '<welcome :showApp="action" />',
    methods: {
      action: linkTo('Button')
    }
  }))

storiesOf('Button', module)
  .addDecorator(withReadme(ButtonReadme))
  .addDecorator(withKnobs)
  .add(
    'with text',
    // withInfo('doc string about my component'),
    withNotes({text: 'My notes on some bold text'})(() => {
      const buttonName = text('Name', 'Arunoda Susiripala')
      return {
        components: {
          MyButton
        },
        template: `<my-button @click="action">${buttonName}</my-button>`,
        methods: {
          action: action('clicked')
        }
      }
    })
  )
  .add('with some emoji', () => ({
    components: {
      MyButton
    },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: {
      action: action('clicked')
    }
  }))
