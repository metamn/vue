import api from './../../api'

// Data
const state = {
  maps: ['No maps yet']
}

// Computed data
const getters = {
  mapsListOfNames: state => {
    return state.maps.join(', ')
  },
  mapsCount: state => {
    return (state.maps[0] === 'No maps yet') ? 0 : state.maps.length
  }
}

// Get data
const actions = {
  GET_MAP_LIST: function ({ commit }) {
    api.getMapList()
    .then((response) => {
      const maps = api.parseMap(response)
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
