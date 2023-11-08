import styled from 'styled-components'
import { Button } from 'antd'

export const StyledButton = styled(Button)`
  &&&& {
    background: var(--c-primary-normal);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 32px;
    
    &:hover {
      background: var(--c-primary-hover);
    }
  }
`