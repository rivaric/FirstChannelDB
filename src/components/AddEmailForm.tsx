import { Form, Input, Modal } from "antd";
import styled from "styled-components";
import { AddEmailFormField, HelpFormField } from "../types/Artist.ts";
import { useAppDispatch, useAppSelector } from "../hooks/redux.ts";
import { getAuthData, linkEmail } from "../redux/otherThunks.ts";
import { useLocation } from "react-router-dom";
import { useNotification } from "./common/useNotification.tsx";
import { StyledButton } from "./common/StyledButton.tsx";
import { useEffect, useState } from "react";

export const StyledForm = styled(Form)`
  padding-top: 48px;
  .ant-form-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    .ant-form-item-control-input {
      width: 400px;
    }

    @media (max-width: 500px) {
      .ant-form-item-control-input {
        width: 250px;
      }
    }
  }
`;

export const AddEmailForm = () => {
    const { pathname } = useLocation();
    const hasEmail = useAppSelector(state => state.appReducer.auth.has_email);
    const [isOpenAddEmailModal, setIsOpenEmailModal] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAuthData());
        setIsOpenEmailModal(!hasEmail);
    })

    const { contextHolder, GlobalNotificationStyle, openNotification } =
        useNotification(
            "Обращение отправлено",
            "Почта будет добавлена к вашему аккаунту в ближайшее время"
        );

    const onFinish = (email: HelpFormField) => {
        dispatch(linkEmail(email));
        dispatch(getAuthData());
        setIsOpenEmailModal(!hasEmail);
        if (hasEmail) {
            openNotification();
        }
    };

    const onFinishFailed = () => {
        alert("Что то пошло не так");
    };

    return (
        pathname !== "/auth" && (
            <div>
                {contextHolder}
                <GlobalNotificationStyle />
                <Modal
                    title="Добавить почту (это обязательное действие)"
                    open={isOpenAddEmailModal}
                    onCancel={() => setIsOpenEmailModal(false)}
                    footer={<></>}>
                    <StyledForm
                        name="help_form"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600, textAlign: "center", paddingTop: "28px" }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off">
                        <Form.Item<AddEmailFormField>
                            name="email"
                            rules={[
                                { required: true, message: "Поле объязательно к заполненияю" },
                            ]}>
                            <Input placeholder="Электронная почта для добавления" />
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
    );
};
