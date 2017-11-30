import {createClient} from 'contentful'

const client = createClient({
  space: 'lvp1p3se851j',
  accessToken: 'a8dcf7a9aeb2b6898fc58b0dae20d92014fc6ae72c06c61276293d300e4001f7'
})

// Data
const state = {
  maps: ['No maps yet']
}

// Computed data
const getters = {
  mapsCount: state => {
    return state.maps.length
  }
}

// Get data
const actions = {
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
}

// Set data
const mutations = {
  SET_MAP_LIST: (state, { list }) => {
    state.maps = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
