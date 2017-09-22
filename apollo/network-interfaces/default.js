import { createNetworkInterface } from 'apollo-client'

export default ctx => {
  return createNetworkInterface({
    uri: 'https://api.graphcms.com/simple/v1/thefergusondetroit'
  })
}
