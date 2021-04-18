// import { ApolloClient, InMemoryCache } from '@apollo/client'
// import { ApolloProvider } from '@apollo/client/react'
// import { CharactersList } from './components/CharactersList'

import { CharactersList, Hero, Button } from './components'

// const client = new ApolloClient({
//   uri: 'https://rickandmortyapi.com/graphql',
//   cache: new InMemoryCache()
// })

function App() {
  return (
    <>
      <Hero>Rick & Morty</Hero>
      <CharactersList />
      <div
        style={{
          paddingTop: 32,
          paddingBottom: 32,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Button>Cargar más</Button>
      </div>
    </>
  )
}

export default App
