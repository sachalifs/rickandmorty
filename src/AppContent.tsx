import { useCallback, useEffect, useState } from 'react'
import {
  CharactersList,
  Hero,
  Title,
  Subtitle,
  ButtonWrapper,
  Button
} from './components'
import api from './api'

const EMPTY_CHARACTERS: object[] = []

export const AppContent = () => {
  const [initialLoad, setInitialLoad] = useState(false)
  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState<object[]>(EMPTY_CHARACTERS)

  const handleLoadMoreClick = () => {
    loadCharacters()
  }

  const loadCharacters = useCallback(async () => {
    setLoading(true)
    const moreCharacters = await api.fetchMoreCharacters()
    setCharacters([...characters, ...moreCharacters])
    setLoading(false)
  }, [characters])

  useEffect(() => {
    if (!initialLoad) {
      loadCharacters()
    }
    setInitialLoad(true)
  }, [initialLoad, loadCharacters])

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
