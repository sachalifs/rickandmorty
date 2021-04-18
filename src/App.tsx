import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

import { AppContent } from './AppContent'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <AppContent />
    </ApolloProvider>
  )
}

export default App
