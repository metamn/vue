import Vue from 'vue'
import Vuex from 'vuex'
import {createClient} from 'contentful'

const client = createClient({
  space: 'lvp1p3se851j',
  accessToken: 'a8dcf7a9aeb2b6898fc58b0dae20d92014fc6ae72c06c61276293d300e4001f7'
})

Vue.use(Vuex)

const store = new Vuex.Store({
  // Data
  state: {
    maps: ['No maps yet']
  },
  // Get data
  actions: {
    LOAD_MAP_LIST: function ({ commit }) {
      client.getEntries({
        content_type: 'map'
      })
      .then((response) => {
        const maps = response.items.map(item => item.fields.name)
        commit('SET_MAP_LIST', { list: maps })
      })
      .catch(console.error)
    }
  },
  // Change data
  mutations: {
    SET_MAP_LIST: (state, { list }) => {
      state.maps = list
    }
  },
  // Computed data
  getters: {
    mapsCount: state => {
      return state.maps.length
    }
  },
  // Split large stores into modules
  modules: {
  }
})

export default store
