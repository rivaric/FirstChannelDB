import { Drawer, Form, Upload } from 'antd'
import { useAppDispatch } from '../../hooks/redux.ts'
import { ArtistList } from '../../types/Artist.ts'
import { addArtistList } from '../../redux/artistThunks.ts'
import { AddArtistProps } from '../../types/props.ts'
import { StyledButton } from '../common/StyledButton.tsx'
import { useNotification } from '../common/useNotification.tsx'
import TextArea from 'antd/es/input/TextArea'
import { UploadOutlined } from '@ant-design/icons'

export const AddArtistList = ({ open, setOpen }: AddArtistProps) => {
    const dispatch = useAppDispatch()
    const {
        contextHolder,
        GlobalNotificationStyle,
        openNotification
    } = useNotification(
        'Список персон отправлен',
        'Карточки будут актуализированы в ближайшее время'
    )

    const onFinish = (artistList: ArtistList) => {
        dispatch(addArtistList(artistList))
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
                title="Предложить список"
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
                    <Form.Item<ArtistList>
                        name="comment"
                        label={'Дополнительная  информация'}
                    >
                        <TextArea placeholder='Любая дополнительная информация' autoSize={{ minRows: 6 }} />
                    </Form.Item>

                    <Form.Item<ArtistList>
                        name="files"
                        label={'Прикрепить файл'}
                    >
                        <Upload accept='.docx, .doc, .pdf, .txt, .odt'>
                            <StyledButton type="primary" icon={<UploadOutlined />}>
                                Файл
                            </StyledButton>
                        </Upload>
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
