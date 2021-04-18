import { FC } from 'react'
import { CharacterFragment } from '../../graphql'

import { CharacterCard, CharacterStatus } from '../CharacterCard'
import { List, ListWrapper } from './styles'

type Props = {
  characters: CharacterFragment[]
}

const CharactersList: FC<Props> = ({ characters }) => (
  <ListWrapper>
    <List>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          image={character.image!}
          name={character.name!}
          species={character.species!}
          location={character.location?.name!}
          firstSeenIn={character.episode![0]?.name!}
          status={character.status as CharacterStatus}
        />
      ))}
    </List>
  </ListWrapper>
)

export default CharactersList
