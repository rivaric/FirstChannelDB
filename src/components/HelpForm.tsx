import { FloatButton, Form, Input, Modal } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { useState } from 'react'
import { HelpFormField } from '../types/Artist.ts'
import { useAppDispatch } from '../hooks/redux.ts'
import { sendEmail } from '../redux/otherThunks.ts'
import { useLocation } from 'react-router-dom'
import { useNotification } from './common/useNotification.tsx'
import { StyledButton } from './common/StyledButton.tsx'

const StyledHelpButton = styled(FloatButton)`
  &, .ant-float-btn-body {
    width: 60px;
    height: 60px;
    background-color: #2557A2;
    
    &:hover {
      background: #306ecc;
    }
  } 
    svg, &&&&& .ant-float-btn-icon {
      height: 27px;
      width: 27px;
    }
`

const StyledHelpForm = styled(Form)`
  padding-top: 48px;
  .ant-form-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    
    .ant-form-item-control-input {
      width: 300px;
    }

    @media (max-width: 450px) {
      .ant-form-item-control-input {
        width: 250px;
      }
    }
  }
`

export const HelpForm = () => {
  const { pathname } = useLocation()

  const dispatch = useAppDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    contextHolder,
    GlobalNotificationStyle,
    openNotification
  } = useNotification(
    'Обращение отправлено',
    'Ответ от поддержки придет в ближайшее время'
  )

  const showModal = () => {
    setIsModalOpen(true)
  }

  const onFinish = (email: HelpFormField) => {
    dispatch(sendEmail(email))
    setIsModalOpen(false)
    openNotification()
  }

  const onFinishFailed = () => {
    alert('Что то пошло не так')
  }

  return pathname !== '/auth' && (
    <div>
      {contextHolder}
      <GlobalNotificationStyle />
      <StyledHelpButton icon={<QuestionCircleOutlined />} type='primary' onClick={showModal} />
      <Modal
        title="Обращение в поддержку"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={<></>}
      >
        <StyledHelpForm
          name="help_form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, textAlign: 'center' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<HelpFormField>
            name="name"
          >
            <Input placeholder='Как к вам можно обращаться' />
          </Form.Item>

          <Form.Item<HelpFormField>
            name="email"
          >
            <Input placeholder='Электронная почта для обратной связи' />
          </Form.Item>

          <Form.Item<HelpFormField>
            name="message"
            rules={[{ required: true, message: 'Введите сообщение' }]}
          >
            <Input.TextArea rows={3} placeholder='Напишите, пожалуйста, Ваш вопрос' />
          </Form.Item>

          <Form.Item>
            <StyledButton type="primary" htmlType="submit">
              Отправить
            </StyledButton>
          </Form.Item>
        </StyledHelpForm>
      </Modal>
    </div>
  )
}