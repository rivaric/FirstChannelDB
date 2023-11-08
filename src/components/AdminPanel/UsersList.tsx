import { User } from '../../types/Artist.ts'
import { ColumnsType } from 'antd/lib/table'
import { Table } from 'antd'
import { useAppDispatch } from '../../hooks/redux.ts'
import { deleteUser } from '../../redux/userThunks.ts'
import { UsersListProps } from '../../types/props.ts'

type DataType = {
  login: string,
  delete: string
}

export const UsersList = ({ users }: UsersListProps) => {
  const dispatch = useAppDispatch()
  const onDelete = (user: User) => {
    dispatch(deleteUser(user))
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Имя пользователя',
      dataIndex: 'login',
      key: 'login',
      width: 250
    },
    {
      title: 'Действие',
      dataIndex: 'delete',
      key: 'delete',
      render: (login: User['login']) => {

        return <a onClick={() => onDelete({ login })}>Удалить</a>
      },
      width: 150
    },
  ]

  const dataSource: DataType[] = users.map((user: User) => ({
    login: user.login,
    delete: user.login,
    key: user.login
  }))

  return (
    <Table columns={columns} dataSource={dataSource} pagination={false} style={{ width: 400 }}/>
  )
}
