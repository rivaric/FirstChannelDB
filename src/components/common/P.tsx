import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export type PProps = {
  fontSize?: number,
  fontWeight?: number,
  mode?: 'default' | 'light',
  className?: string
}

type StyledPProps = Omit<PProps, 'mode' | 'fontSize' | 'fontWeight'> & {
  fontSize: number,
  fontWeight: number,
  color: '#000' | '#5d646f'
}

const StyledP = styled.div.withConfig({
  shouldForwardProp: prop => !['fontSize', 'color'].includes(prop)
})<StyledPProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: 1.4;
  color: ${({ color }) => color};
`

export const P = ({
  fontSize = 16,
  fontWeight = 400,
  mode = 'default',
  children,
  ...rest
}: PropsWithChildren<PProps>) => {
  const color = mode === 'default' ? '#000' : '#5d646f'
  return (
    <StyledP
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      {...rest}
    >
      {children}
    </StyledP>
  )
}
