import charactersMock, { CharacterMockType } from './characters-mock'

const fetchMoreCharacters = (): Promise<object[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Array(10).fill({}))
    }, Math.random() * 2000)
  })

const fetchMoreCharactersMock = (): Promise<CharacterMockType[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(charactersMock)
    }, Math.random() * 2000)
  })

const api = {
  fetchMoreCharacters,
  fetchMoreCharactersMock
}

export default api
