// import { ApolloClient, InMemoryCache } from '@apollo/client'
// import { ApolloProvider } from '@apollo/client/react'
// import { CharactersList } from './components/CharactersList'

import { CharactersList } from './components'

// const client = new ApolloClient({
//   uri: 'https://rickandmortyapi.com/graphql',
//   cache: new InMemoryCache()
// })

function App() {
  return <CharactersList />
}

export default App
