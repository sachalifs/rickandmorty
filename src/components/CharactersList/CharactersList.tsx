import { FC } from 'react'

import { CharacterCard } from '../CharacterCard'
import { List, ListWrapper } from './styles'

type Props = {
  characters: any[]
}

const CharactersList: FC<Props> = ({ characters }) => (
  <ListWrapper>
    <List>
      {characters.map((_, index) => (
        <CharacterCard key={index} />
      ))}
    </List>
  </ListWrapper>
)

export default CharactersList
