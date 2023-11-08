import styled from 'styled-components'
import { UsersList } from './UsersList.tsx'
import { Typography } from 'antd'
import { AddUser } from './AddUser.tsx'
import { User } from '../../types/Artist.ts'

const StyledAdminPanel = styled.div`
  padding: 8px; 
`

export const AdminPanel = ({ users, isAdmin }: { users: User[],isAdmin: boolean }) => {
  return (
    !isAdmin
      ? <div>Вы не являетесь админом</div>
      : (
        <StyledAdminPanel>
          <div className='admin-users-list'>
            <Typography.Title level={3}>Список пользователей</Typography.Title>
            <UsersList users={users} />
          </div>
          <div className='admin-users-add'>
            <Typography.Title level={3}>Добавить пользователя</Typography.Title>
            <AddUser />
          </div>
        </StyledAdminPanel>
      )
  )
}
