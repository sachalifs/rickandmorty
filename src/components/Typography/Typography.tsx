import { ReactNode, FC } from 'react'

type FontSize = 'small' | 'medium' | 'big'

type FontVariant = 'body' | 'heading'

type FontColor = 'white' | 'grey'

type Props = {
  variant?: FontVariant
  size?: FontSize
  color: FontColor
  children: ReactNode
}

const SizesInPx = {
  small: 16,
  medium: 18,
  big: 27
}

const FontWeights = {
  body: 500,
  heading: 800
}

const FontColors = {
  white: '#fff',
  grey: '#9e9e9e'
}

const defaultStyles = {
  margin: 0,
  display: 'flex',
  alignItems: 'center'
}

const Typography: FC<Props> = ({
  variant = 'body',
  size = 'medium',
  color: fontColor,
  children
}) => {
  const Element = variant === 'heading' ? 'h2' : 'span'
  const fontSize = SizesInPx[size]
  const fontWeight = FontWeights[variant]
  const color = FontColors[fontColor]

  const style = {
    ...defaultStyles,
    fontSize,
    fontWeight,
    color
  }

  return <Element style={style}>{children}</Element>
}

export default Typography
