import { FC } from 'react'

import { Card, Image, ImageWrapper } from './styles'

const CharacterCard: FC = () => (
  <Card>
    <ImageWrapper>
      <Image
        src='https://rickandmortyapi.com/api/character/avatar/2.jpeg'
        alt='Morty Smith'
      />
    </ImageWrapper>
  </Card>
)

export default CharacterCard
