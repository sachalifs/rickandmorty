import styled from 'styled-components'
import { CharacterStatus } from './types'

const StatusIndicatorColors = {
  [CharacterStatus.Alive]: '#76c858',
  [CharacterStatus.Dead]: '#d63d2e',
  [CharacterStatus.Unknown]: '#9e9e9e'
}

export const Card = styled.article`
  width: 600px;
  height: 200px;
  border-radius: 8px;
  display: flex;
  margin: 13.5px;
  overflow: hidden;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
`

export const ImageWrapper = styled.div`
  display: flex;
  flex: 2 1 0%;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex: 3 1 0%;
  flex-direction: column;
  padding: 13.5px;
  background-color: #3c3e43;
`

export const Section = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  justify-content: center;
`

export const StatusIndicator = styled.span<{ status: CharacterStatus }>`
  width: 9px;
  height: 9px;
  margin-right: 6.75px;
  background-color: ${(props) => StatusIndicatorColors[props.status]};
  border-radius: 50%;
`
