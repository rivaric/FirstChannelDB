import { Form, Input, Modal } from 'antd'
import { HelpFormField } from '../types/Artist.ts'
import { useAppDispatch } from '../hooks/redux.ts'
import { sendEmail } from '../redux/otherThunks.ts'
import { useLocation } from 'react-router-dom'
import { useNotification } from './common/useNotification.tsx'
import { StyledButton } from './common/StyledButton.tsx'
import { StyledForm } from './AddEmailForm.tsx'

interface HelpFormProps {
  isOpen: boolean,
  setIsOpen : (isOpen: boolean) => void 
}

export const HelpForm = ({isOpen, setIsOpen} : HelpFormProps) => {
  const { pathname } = useLocation()

  const dispatch = useAppDispatch()

  const {
    contextHolder,
    GlobalNotificationStyle,
    openNotification
  } = useNotification(
    'Обращение отправлено',
    'Ответ от поддержки придет в ближайшее время'
  )

  const onFinish = (value: HelpFormField) => {
    dispatch(sendEmail(value))
    setIsOpen(false)
    openNotification()
  }

  const onFinishFailed = () => {
    alert('Что то пошло не так')
  }

  return pathname !== '/auth' && (
    <div >
      {contextHolder}
      <GlobalNotificationStyle />
      <Modal
        title="Обращение в поддержку"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={<></>}
      >
        <StyledForm
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
            <Input.TextArea rows={7} placeholder='Напишите, пожалуйста, Ваш вопрос' />
          </Form.Item>

          <Form.Item>
            <StyledButton type="primary" htmlType="submit">
              Отправить
            </StyledButton>
          </Form.Item>
        </StyledForm>
      </Modal>
    </div>
  )
}