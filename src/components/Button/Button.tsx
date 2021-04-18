import { FC, ReactNode } from 'react'

import { Loader } from '../Loader'
import { StyledButton } from './styles'

type Props = {
  children: ReactNode
  loading?: boolean
}

const Button: FC<Props> = ({ loading, children }) => (
  <StyledButton disabled={loading}>
    {loading ? <Loader /> : children}
  </StyledButton>
)

export default Button
