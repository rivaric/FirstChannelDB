import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.ts'
import styled from 'styled-components'
import {  Card, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { authUser } from '../../redux/otherThunks.ts'
import { AuthFieldType } from '../../types/auth.ts'
import { StyledButton } from '../common/StyledButton.tsx'

const StyledAuth = styled.div`
  display: flex;
  justify-content: center;
  
  .ant-card {
    width: 600px;
    
    .ant-card-head-title {
      text-align: center;
    }
    
    .ant-form-item-row, .ant-form-item-control-input-content {
      display: flex;
      justify-content: center;
    }
  }
`

export const Auth = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const auth = useAppSelector(state => state.appReducer.auth)
  useEffect(() => {
    if (auth.isAuth) {
      if (auth.isAdmin) {
        navigate('/admin_panel')
      } else {
        navigate('/')
      }
    }
  }, [auth])

  const onFinish = (values: AuthFieldType) => {
    dispatch(authUser(values))
  };

  const onFinishFailed = () => {
    alert('Неверный логин или пароль')
  }

  return (
    <StyledAuth>
      <Card title="Авторизация" >
        <Form
          name="auth_form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<AuthFieldType>
            name="login"
            rules={[{ required: true, message: 'Пожалуйста, введите логин' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" />
          </Form.Item>

          <Form.Item<AuthFieldType>
            name="password"
            rules={[{ required: true, message: 'Пожалуйста, введите пароль' }]}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}  placeholder="Пароль" />
          </Form.Item>

          <Form.Item
          >
            <StyledButton type="primary" htmlType="submit">
              Отправить
            </StyledButton>
          </Form.Item>
        </Form>
      </Card>
    </StyledAuth>
  )
}
