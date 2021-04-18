import { useEffect, useState } from 'react'
import { CharactersList, Hero, Title, Subtitle, Button } from './components'
import { CharacterFragment, useGetCharactersLazyQuery } from './graphql'

const capitalize = (str: string) =>
  str.length === 0 ? '' : str[0].toUpperCase() + str.slice(1).toLowerCase()

const EMPTY_CHARACTERS: CharacterFragment[] = []
const INITIAL_PAGE = 0

export const AppContent = () => {
  const [page, setPage] = useState(INITIAL_PAGE)
  const [characters, setCharacters] = useState<CharacterFragment[]>(
    EMPTY_CHARACTERS
  )
  const [fetchCharacters, { loading }] = useGetCharactersLazyQuery({
    onCompleted: (data) => {
      setPage(page + 1)
      setCharacters([
        ...characters,
        ...(data?.characters?.results!.map((character) => ({
          ...character,
          status: capitalize(character?.status!)
        })) as CharacterFragment[])
      ])
    }
  })

  const handleLoadMoreClick = () => {
    fetchCharacters({ variables: { page } })
  }

  useEffect(() => {
    if (page === INITIAL_PAGE) {
      fetchCharacters({ variables: { page } })
    }
  }, [fetchCharacters, page])

  return (
    <>
      <Hero>
        <Title>Rick & Morty</Title>
        <Subtitle>👨🏻‍🍳 en La Cocina del Código</Subtitle>
      </Hero>
      <CharactersList characters={characters} />
      <div
        style={{
          paddingTop: 32,
          paddingBottom: 32,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Button onClick={handleLoadMoreClick} loading={loading}>
          Cargar más
        </Button>
      </div>
    </>
  )
}
