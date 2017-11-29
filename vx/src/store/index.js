import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    maps: []
  },
  mutations: {
    setMaps (state, val) {
      state.maps = val
    }
  },
  getters: {
    mapsCount: state => {
      return state.maps.length
    }
  }
})
