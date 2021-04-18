import { FC } from 'react'

import { Typography } from '../Typography'
import {
  Card,
  ContentWrapper,
  Image,
  ImageWrapper,
  Section,
  StatusIndicator
} from './styles'
import { CharacterStatus } from './types'

type Props = {
  name: string
  image: string
  status: CharacterStatus
  species: string
  location: string
  firstSeenIn: string
}

const CharacterCard: FC<Props> = ({
  name,
  image,
  status,
  species,
  location,
  firstSeenIn
}) => (
  <Card>
    <ImageWrapper>
      <Image src={image} alt={name} />
    </ImageWrapper>
    <ContentWrapper>
      <Section>
        <Typography variant='heading' size='big' color='white'>
          {name}
        </Typography>
        <Typography size='small' color='white'>
          <StatusIndicator status={status} />
          {status}
          {' - '}
          {species}
        </Typography>
      </Section>
      <Section>
        <Typography color='grey' size='small'>
          Última ubicación conocida:
        </Typography>
        <Typography color='white' size='medium'>
          {location}
        </Typography>
      </Section>
      <Section>
        <Typography color='grey' size='small'>
          Primera vez visto en:
        </Typography>
        <Typography color='white' size='medium'>
          {firstSeenIn}
        </Typography>
      </Section>
    </ContentWrapper>
  </Card>
)

export default CharacterCard
