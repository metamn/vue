import {createClient} from 'contentful'

// Authenticate
const apiClient = createClient({
  space: 'lvp1p3se851j',
  accessToken: 'a8dcf7a9aeb2b6898fc58b0dae20d92014fc6ae72c06c61276293d300e4001f7'
})

// Get Maps
const getMapList = () => {
  return apiClient.getEntries({
    content_type: 'map'
  })
}

// Parse a map
const parseMap = (response) => {
  return response.items.map(item => item.fields.name)
}

// Export api functions
export default {
  getMapList,
  parseMap
}
