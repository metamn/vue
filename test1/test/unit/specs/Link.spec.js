import Vue from 'vue'
import Link from '@/components/Link'

describe('Link.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Link)
    const vm = new Constructor().$mount()

    expect(vm.$el.className)
      .to.equal('mv-link')
  })
})
