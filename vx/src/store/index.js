import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    maps: [
      'Valley',
      'Frontier',
      'Beyond',
      'Wilderness'
    ]
  },
  getters: {
    mapsCount: state => {
      return state.maps.length
    }
  }
})
