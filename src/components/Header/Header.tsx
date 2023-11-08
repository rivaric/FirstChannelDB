import styled from 'styled-components'
import { useAppDispatch } from '../../hooks/redux.ts'
import { logout } from '../../redux/AppSlice.ts'
import { useNavigate } from 'react-router-dom'
import { StyledButton } from '../common/StyledButton.tsx'
import { Dropdown, MenuProps } from 'antd'

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

  const onClickExit = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('token_type')
    dispatch(logout())
    navigate('/auth')
  }

  const onClickHelp = () => {
    console.log("help");
  }

  const onClickManual = () => {
    console.log("manual");

  }

  const items: MenuProps['items'] = [
    {
      key: "help",
      label: (<span onClick={onClickHelp}>
        Обратная связь
      </span>)
    },
    {
      key: "manual",
      label: (<span onClick={onClickManual}>
        Инструкция
      </span>)
    },
    {
      key: "exit",
      label: (<span onClick={onClickExit}>
        Выход
      </span>)
    }
  ];

  return (
    <StyledHeader>
      <StyledHeaderContent>
        <Dropdown menu={{ items }} placement='bottom'>
          <StyledButton type='primary'>
            Меню
          </StyledButton>
        </Dropdown>

      </StyledHeaderContent>
    </StyledHeader>
  )
}