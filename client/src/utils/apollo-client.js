import { ApolloClient, InMemoryCache } from '@apollo/client/core'

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/graphql'
})
