import styled from 'styled-components'
import { useAppDispatch } from '../../hooks/redux.ts'
import { logout } from '../../redux/AppSlice.ts'
import { useNavigate } from 'react-router-dom'
import { StyledButton } from '../common/StyledButton.tsx'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  box-shadow: rgba(31, 41, 55, 0.08) 0 1px 1px;
  background-color: #fff;
`

const StyledHeaderContent = styled.div`
  width: var(--container-width);
  padding: var(--header-padding);
  display: flex;
  justify-content: end;
`

export const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const onClick = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('token_type')
    dispatch(logout())
    navigate('/auth')
  }

  return (
    <StyledHeader>
      <StyledHeaderContent>
        <StyledButton type='primary' onClick={onClick}>
          Выйти
        </StyledButton>
        {/*<ProfileIcon full_name={'nikita'} photo_url=''/>*/}
      </StyledHeaderContent>
    </StyledHeader>
  )
}