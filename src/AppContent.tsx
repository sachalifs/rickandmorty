import { CharactersList, Hero, Button } from './components'
import { CharacterFragment, useGetCharactersQuery } from './graphql'

export const AppContent = () => {
  const { data, loading } = useGetCharactersQuery({ variables: { page: 1 } })

  return (
    <>
      <Hero>Rick & Morty</Hero>
      <CharactersList
        characters={(data?.characters?.results as CharacterFragment[]) ?? []}
      />
      <div
        style={{
          paddingTop: 32,
          paddingBottom: 32,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Button loading={loading}>Cargar más</Button>
      </div>
    </>
  )
}
