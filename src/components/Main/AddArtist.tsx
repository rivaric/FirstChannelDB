import { Drawer, Form, Input, Select } from 'antd'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.ts'
import { Artist } from '../../types/Artist.ts'
import { addArtist, allArtists } from '../../redux/artistThunks.ts'
import { AddArtistProps } from '../../types/props.ts'
import { StyledButton } from '../common/StyledButton.tsx'
import { useNotification } from '../common/useNotification.tsx'
import TextArea from 'antd/es/input/TextArea'

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

  const cur_page = useAppSelector(state => state.appReducer.cur_page);
  const status_filter = useAppSelector(state => state.appReducer.status_filter);
  const input_filter = useAppSelector(state => state.appReducer.input_filter);

  const onFinish = (artist: Artist) => {
    dispatch(addArtist(artist))
    dispatch(allArtists({
      cur_page, status_filter, input_filter
    }))
    setOpen(false)
    openNotification()
  }

  const onFinishFailed = () => {
    alert('Что то пошло не так')
  }

  return (
    <>
      {contextHolder}
      <GlobalNotificationStyle />
      <Drawer
        title="Предложить персону"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        size={'large'}
      >
        <Form
          name="add_artist_form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 650 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<Artist>
            name="first_name"
            label='Имя'
            rules={[{ required: true, message: "Поля, объязательные для заполнения" }]}
          >
            <Input placeholder='Иван' />
          </Form.Item>

          <Form.Item<Artist>
            name="last_name"
            label='Фамилия'
            rules={[{ required: true, message: "Поля, объязательные для заполнения" }]}
          >
            <Input placeholder='Иванов' />
          </Form.Item>

          <Form.Item<Artist>
            name="patronymic"
            label='Отчество'
          >
            <Input placeholder='Иванович' />
          </Form.Item>

          <Form.Item<Artist>
            name="date_of_birth"
            label={'Дата рождения'}
          >
            <Input placeholder='ДД.ММ.ГГГГ' />
          </Form.Item>

          <Form.Item<Artist>
            name="status"
            label={'Статус'}
          >
            <Select
              placeholder="Сотрудник"
              options={[
                { value: 'Гость', label: 'Гость' },
                { value: 'Соискатель', label: 'Соискатель' },
                { value: 'Сотрудник', label: 'Сотрудник' },
              ]}
            />
          </Form.Item>

          <Form.Item<Artist>
            name="phone_numbers"
            label={'Номер телефона'}
          >
            <Input placeholder='+7 777 777 77 77' />
          </Form.Item>

          <Form.Item<Artist>
            name="comment"
            label={'Дополнительная  информация'}
          >
            <TextArea placeholder='Любая дополнительная информация' autoSize={{ minRows: 6 }} />
          </Form.Item>

          <div style={{
            fontSize: "12",
            color: "red",
            textAlign: "center",
            marginBottom: "20px",
          }} >
            * - поле объязательно к заполнению
          </div>

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
