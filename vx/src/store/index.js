import Vue from 'vue'
import Vuex from 'vuex'
import maps from './modules/maps'

Vue.use(Vuex)

const store = new Vuex.Store({
  // Split large stores into modules
  modules: {
    maps
  }
})

export default store
