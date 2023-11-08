import { Form, Input } from 'antd'
import { useAppDispatch } from '../../hooks/redux.ts'
import { addUser } from '../../redux/userThunks.ts'
import { StyledButton } from '../common/StyledButton.tsx'

export type AddUserFieldType = {
  login: string,
  password: string
}

export const AddUser = () => {
  const dispatch = useAppDispatch()

  const onFinish = (values: AddUserFieldType) => {
    dispatch(addUser(values))
  };

  const onFinishFailed = () => {
    alert('Что то пошло не так')
  }

  return (
      <Form
        name="add_user_form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<AddUserFieldType>
          name="login"
          rules={[{ required: true, message: 'Пожалуйста, введите логин' }]}
        >
          <Input placeholder="Логин нового пользователя" />
        </Form.Item>

        <Form.Item<AddUserFieldType>
          name="password"
          rules={[{ required: true, message: 'Пожалуйста, введите пароль' }]}
        >
          <Input placeholder="Пароль нового пользователя" />
        </Form.Item>

        <Form.Item>
          <StyledButton type="primary" htmlType="submit">
            Отправить
          </StyledButton>
        </Form.Item>
      </Form>
  )
}
