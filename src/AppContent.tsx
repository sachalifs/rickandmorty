import { useEffect, useState } from 'react'
import {
  CharactersList,
  Hero,
  Title,
  Subtitle,
  ButtonWrapper,
  Button
} from './components'
import { CharacterFragment, useGetCharactersLazyQuery } from './graphql'

const INITIAL_PAGE = 1
const EMPTY_CHARACTERS: CharacterFragment[] = []

export const AppContent = () => {
  const [page, setPage] = useState(INITIAL_PAGE)
  const [initialLoad, setInitialLoad] = useState(false)
  const [characters, setCharacters] = useState<CharacterFragment[]>(
    EMPTY_CHARACTERS
  )
  const [getCharacters, { loading }] = useGetCharactersLazyQuery({
    onCompleted: (data) => {
      setCharacters([
        ...characters,
        ...(data.characters?.results! as CharacterFragment[])
      ])
      setPage(page + 1)
    }
  })

  const handleLoadMoreClick = () => {
    getCharacters({ variables: { page } })
  }

  // const loadCharacters = useCallback(async () => {
  //   setLoading(true)
  //   const moreCharacters = await api.fetchMoreCharacters()
  //   setCharacters([...characters, ...moreCharacters])
  //   setLoading(false)
  // }, [characters])

  useEffect(() => {
    if (!initialLoad) {
      getCharacters({ variables: { page } })
    }
    setInitialLoad(true)
  }, [getCharacters, initialLoad, page])

  return (
    <>
      <Hero>
        <Title>Rick & Morty</Title>
        <Subtitle>👨🏻‍🍳 en La Cocina del Código</Subtitle>
      </Hero>
      <CharactersList characters={characters} />
      <ButtonWrapper>
        <Button onClick={handleLoadMoreClick} loading={loading}>
          Cargar más
        </Button>
      </ButtonWrapper>
    </>
  )
}
