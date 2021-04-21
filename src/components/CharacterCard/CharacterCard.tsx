import { FC } from 'react'
import { Typography } from '../Typography'

import { Card, ContentWrapper, Image, ImageWrapper, Section } from './styles'

const CharacterCard: FC = () => (
  <Card>
    <ImageWrapper>
      <Image
        src='https://rickandmortyapi.com/api/character/avatar/2.jpeg'
        alt='Morty Smith'
      />
    </ImageWrapper>
    <ContentWrapper>
      <Section>
        <Typography variant='heading' color='white' size='big'>
          Morty Smith
        </Typography>
        <Typography color='white' size='small'>
          Alive - Human
        </Typography>
      </Section>
      <Section>
        <Typography color='grey' size='small'>
          Última ubicación conocida:
        </Typography>
        <Typography color='white' size='medium'>
          Story Train
        </Typography>
      </Section>
      <Section>
        <Typography color='grey' size='small'>
          Primer episodio donde aparece:
        </Typography>
        <Typography color='white' size='medium'>
          Never Ricking Morty
        </Typography>
      </Section>
    </ContentWrapper>
  </Card>
)

export default CharacterCard
