import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { withKnobs, text } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'
import { withInfo } from '@storybook/addon-info'

import ButtonReadme from './README.md'
import withReadme from 'storybook-readme/with-readme'

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
