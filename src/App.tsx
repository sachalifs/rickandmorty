// import { ApolloClient, InMemoryCache } from '@apollo/client'
// import { ApolloProvider } from '@apollo/client/react'
// import { CharactersList } from './components/CharactersList'

import { CharactersList, Hero } from './components'

// const client = new ApolloClient({
//   uri: 'https://rickandmortyapi.com/graphql',
//   cache: new InMemoryCache()
// })

function App() {
  return (
    <>
      <Hero>Rick & Morty</Hero>
      <CharactersList />
    </>
  )
}

export default App
