import {createClient} from 'contentful'

const client = createClient({
  space: 'lvp1p3se851j',
  accessToken: 'a8dcf7a9aeb2b6898fc58b0dae20d92014fc6ae72c06c61276293d300e4001f7'
})

const storage = {
  state: {
    maps: [],
    facets: [],
    entries: []
  },
  getMaps () {
    client.getEntries({
      content_type: 'map'
    })
    .then((response) => {
      storage.state.maps = response.items.map(item => item.fields.name)
    })
    .catch(console.error)
  },
  getFacets () {
    client.getEntries({
      content_type: 'facet'
    })
    .then((response) => {
      storage.state.facets = response.items.map(item => item.fields.name)
    })
    .catch(console.error)
  },
  getEntries () {
    client.getEntries({
      content_type: 'entry'
    })
    .then((response) => {
      storage.state.entries = response.items.map(item => item.fields.name)
    })
    .catch(console.error)
  }
}

export default {
  state: storage.state,
  getMaps () { storage.getMaps() },
  getFacets () { storage.getFacets() },
  getEntries () { storage.getEntries() }
}
