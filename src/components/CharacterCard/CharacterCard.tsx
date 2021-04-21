import { FC } from 'react'
import { CharacterStatus } from '../../types'
import { Typography } from '../Typography'

import {
  Card,
  ContentWrapper,
  Image,
  ImageWrapper,
  Section,
  StatusIndicator
} from './styles'

const CharacterStatusName = {
  [CharacterStatus.Alive]: 'Vivo',
  [CharacterStatus.Dead]: 'Muerto',
  [CharacterStatus.Unknown]: 'Desconocido'
}

type Props = {
  name: string
  image: string
  status: CharacterStatus
  species: string
  lastKnownLocation: string
  firstEpisode: string
}

const CharacterCard: FC<Props> = ({
  name,
  image,
  status,
  species,
  lastKnownLocation,
  firstEpisode
}) => (
  <Card>
    <ImageWrapper>
      <Image src={image} alt={name} />
    </ImageWrapper>
    <ContentWrapper>
      <Section>
        <Typography variant='heading' color='white' size='big'>
          {name}
        </Typography>
        <Typography color='white' size='small'>
          <StatusIndicator status={status} /> {CharacterStatusName[status]} -{' '}
          {species}
        </Typography>
      </Section>
      <Section>
        <Typography color='grey' size='small'>
          Última ubicación conocida:
        </Typography>
        <Typography color='white' size='medium'>
          {lastKnownLocation}
        </Typography>
      </Section>
      <Section>
        <Typography color='grey' size='small'>
          Primer episodio donde aparece:
        </Typography>
        <Typography color='white' size='medium'>
          {firstEpisode}
        </Typography>
      </Section>
    </ContentWrapper>
  </Card>
)

export default CharacterCard
