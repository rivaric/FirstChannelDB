// @ts-nocheck
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

    const onFinish = ({ comment, files }: ArtistList) => {
        const images = files.fileList;

        Promise.all(
            images.map(
                (image) =>
                    new Promise((resolve, reject) => {
                        const fileReader = new FileReader();

                        fileReader.onload = (file) => {
                            resolve(file.target.result.split(',')[1]);
                        };

                        fileReader.onerror = (error) => reject(error);

                        fileReader.readAsDataURL(image.originFileObj);
                    })
            )
        ).then((base64Images) => {
            const dataFiles: any = base64Images.map((image, i) => {
                return [files.fileList[i].originFileObj.name, image];
            });
            
            const postData = {
                comment: comment,
                files: dataFiles
            }
    
            dispatch(addArtistList(postData))
            setOpen(false)
            openNotification()
        });
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
                        rules={[{ required: true, message: "Поля, объязательные для заполнения" }]}
                    >
                        <TextArea placeholder='Любая дополнительная информация' autoSize={{ minRows: 6 }} />
                    </Form.Item>

                    <Form.Item<ArtistList>
                        name="files"
                        label={'Прикрепить файл'}
                        rules={[{ required: true, message: "Поля, объязательные для заполнения" }]}
                    >
                        <Upload accept='.docx, .doc, .pdf, .txt, .odt' multiple>
                            <StyledButton icon={<UploadOutlined />} style={{ backgroundColor: "rgb(244, 245, 246)", color: "rgb(70, 75, 83)" }}>
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
