import React, { useEffect, useState } from 'react'
import { CharactersList, Hero, Button } from './components'
import { CharacterFragment, useGetCharactersLazyQuery } from './graphql'

const EMPTY_CHARACTERS: CharacterFragment[] = []
const INITIAL_PAGE = 1

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
        ...(data?.characters?.results! as CharacterFragment[])
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
      <Hero>Rick & Morty</Hero>
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
