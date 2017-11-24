import Vue from 'vue'
import Router from 'vue-router'
import wild from '@/components/wild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wild',
      component: wild
    }
  ]
})
