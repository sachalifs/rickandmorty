import { FC, ReactNode } from 'react'

import { Loader } from '../Loader'
import { StyledButton } from './styles'

type Props = {
  children: ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
  loading?: boolean
}

const Button: FC<Props> = ({ onClick, loading, children }) => (
  <StyledButton disabled={loading} onClick={onClick}>
    {loading ? <Loader /> : children}
  </StyledButton>
)

export default Button
