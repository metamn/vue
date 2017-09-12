import Vue from 'vue'
import Link from '@/components/Link'

describe('Link.vue', () => {
  it('by default has the "mv-link" class', () => {
    const Constructor = Vue.extend(Link)
    const vm = new Constructor().$mount()

    expect(vm.$el.className).to.equal('mv-link')
  })

  it('any new class can be added beside the "mv-link" class', () => {
    const Constructor = Vue.extend(Link)
    const vm = new Constructor(
      {
        propsData: {
          klass: 'klass'
        }
      }
    ).$mount()

    expect(vm.$el.className).to.equal('mv-link klass')
  })

  it('can handle "mailto:" URLs', () => {
    const Constructor = Vue.extend(Link)
    const vm = new Constructor(
      {
        propsData: {
          title: 'test',
          url: 'test',
          type: 'e-mail'
        }
      }
    ).$mount()

    expect(vm.$el.getAttribute('href')).to.equal('mailto:test')
  })

  it('can handle "tel:" URLs', () => {
    const Constructor = Vue.extend(Link)
    const vm = new Constructor(
      {
        propsData: {
          title: 'test',
          url: 'test',
          type: 'tel'
        }
      }
    ).$mount()

    expect(vm.$el.getAttribute('href')).to.equal('tel:test')
  })

  it('can handle normal URLs', () => {
    const Constructor = Vue.extend(Link)
    const vm = new Constructor(
      {
        propsData: {
          title: 'test',
          url: 'test'
        }
      }
    ).$mount()

    expect(vm.$el.getAttribute('href')).to.equal('test')
  })

  it('it has a title', () => {
    const Constructor = Vue.extend(Link)
    const vm = new Constructor(
      {
        propsData: {
          title: 'test'
        }
      }
    ).$mount()

    expect(vm.$el.getAttribute('title')).to.equal('test')
  })

  it('displays a slot', () => {
    const Constructor = Vue.extend(Link)
    const vm = new Constructor().$mount()

    expect(vm.$el.textContent).to.equal('inside the slot')
  })
})
