import { Drawer, Form, Input } from 'antd'
import { useAppDispatch } from '../../hooks/redux.ts'
import { Artist } from '../../types/Artist.ts'
import { addArtist } from '../../redux/artistThunks.ts'
import { AddArtistProps } from '../../types/props.ts'
import { StyledButton } from '../common/StyledButton.tsx'
import { useNotification } from '../common/useNotification.tsx'

export const AddArtist = ({ open, setOpen }: AddArtistProps) => {
  const dispatch = useAppDispatch()
  const {
    contextHolder,
    GlobalNotificationStyle,
    openNotification
  } = useNotification(
    'Персона добавлена',
    'Карточка будет актуализирована в ближайшее время'
  )

  const onFinish = (artist: Artist) => {
    dispatch(addArtist(artist))
    setOpen(false)
    openNotification()
  }

  const onFinishFailed = () => {
    alert('Что то пошло не так')
  }

  return (
    <>
      {contextHolder}
      <GlobalNotificationStyle/>
      <Drawer
        title="Добавить персону"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        size={'large'}
      >
        <Form
          name="add_artist_form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<Artist>
            name="full_name"
            label='ФИО'
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Artist>
            name="activity"
            label={'Род деятельности'}
          >
            <Input />
          </Form.Item>

          <Form.Item<Artist>
            name="social_networks"
            label={'Социальные сети'}
          >
            <Input />
          </Form.Item>

          <Form.Item<Artist>
            name="phone_numbers"
            label={'Номер телефона'}
          >
            <Input/>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <StyledButton type="primary" htmlType="submit">
              Отправить
            </StyledButton>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  )
}
