import { createNetworkInterface } from 'apollo-client'

export default ctx => {
  return createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj85z9wpe00p40124qil35fsd'
  })
}
