import { Typography } from "antd"
import styled from "styled-components"
import { P } from "../common/P"
import step1IOS from "../Manual/Steps/IOS/1.png"
import step2IOS from "../Manual/Steps/IOS/4.png"
import step3IOS from "../Manual/Steps/IOS/3.png"

import step1AND from "../Manual/Steps/Android/1.png"
import step2AND from "../Manual/Steps/Android/4.png"
import step3AND from "../Manual/Steps/Android/3.png"


const StyledManual = styled.div`
    padding: 10px;

    .text_prev_steps {
        margin-bottom: 40px;
    }

    .title {
        margin-top: 10px;
    }

    .install_steps {
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
        margin-bottom: 40px;
    }

    .step {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 400px;
        height: 450px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        overflow: hidden;
    }

    .step_text {
        padding: 25px;
    }

    .step_img {
        height: 80%;
        width: 103%;
        transform: translateX(-1%);
        object-fit: contain;
        overflow: hidden;
    }

    .text_platform {
        margin-bottom: 10px;
    }

    @media (max-width: 450px) {
        .step{
           width: 300px;
            height: 380px;
        }
    }
`

export const Manual = () => {
    return (
        <StyledManual>
            <div className="ios" style={{ marginBottom: "80px" }}>
                <div className="text_prev_steps">
                    <Typography.Title level={4} className='title'>
                        Создайте веб-версию сайта на iPhone или Android
                    </Typography.Title>
                    <P mode='light'>
                        Веб‑приложение — это оптимизированная версия личного кабинета, входить в которую можно за одно нажатие прямо с домашнего экрана смартфона.
                    </P>
                </div>
                <Typography.Title className="title_platform" level={5}>
                    Создайте веб-версию сайта на iPhone
                </Typography.Title>
                <P mode='light' className="text_platform">
                    Для установки веб‑версии ПКБД на iPhone важно использовать именно Safari.
                </P>
                <div className="install_steps">
                    <div className="step">
                        <div className="step_text">
                            <Typography.Title level={5} className="step_counter">
                                Шаг 1
                            </Typography.Title>
                            <div className="step_descr">
                                Нажмите в нижнем меню браузера центральную иконку «Поделиться»
                            </div>
                        </div>
                        <img src={step1IOS} alt="" className="step_img" />
                    </div>
                    <div className="step">
                        <div className="step_text">
                            <Typography.Title level={5} className="step_counter">
                                Шаг 2
                            </Typography.Title>
                            <div className="step_descr">
                                Выберите На экран «Домой»
                            </div>
                        </div>
                        <img src={step2IOS} alt="" className="step_img" />
                    </div>
                    <div className="step">
                        <div className="step_text">
                            <Typography.Title level={5} className="step_counter">
                                Шаг 3
                            </Typography.Title>
                            <div className="step_descr">
                                Иконка приложения появится на рабочем столе
                            </div>
                        </div>
                        <img src={step3IOS} alt="" className="step_img" />
                    </div>
                </div>

                <div className="more-detailed">
                    <Typography.Title level={4} className='title'>
                        Как установить веб‑приложение ПКБД на iPhone?
                    </Typography.Title>
                    <P mode='light'>
                        <ol>
                            <li>Откройте браузер Safari и перейдите на страницу: пкбд.рф</li>
                            <li>В нижнем меню браузера нажмите на центральную кнопку «Поделиться»</li>
                            <li>Пролистайте открывшееся меню вниз и выберите «На экран «Домой»</li>
                            <li>После этого на домашнем экране iPhone появится иконка ПКБД, которая будет открываться как отдельное веб‑приложение.</li>
                        </ol>
                    </P>
                </div>
            </div>

            <div className="android">
                <Typography.Title className="title_platform" level={5}>
                    Создайте веб-версию сайта на Android
                </Typography.Title>
                <P mode='light' className="text_platform">
                    Для установки веб‑версии ПКБД на Android важно использовать именно Chrome.
                </P>
                <div className="install_steps">
                    <div className="step">
                        <div className="step_text">
                            <Typography.Title level={5} className="step_counter">
                                Шаг 1
                            </Typography.Title>
                            <div className="step_descr">
                                В верхнем меню браузера справа нажмите «Три точки»
                            </div>
                        </div>
                        <img src={step1AND} alt="" className="step_img" />
                    </div>
                    <div className="step">
                        <div className="step_text">
                            <Typography.Title level={5} className="step_counter">
                                Шаг 2
                            </Typography.Title>
                            <div className="step_descr">
                                Выберите «Добавить на гл. экран»
                            </div>
                        </div>
                        <img src={step2AND} alt="" className="step_img" />
                    </div>
                    <div className="step">
                        <div className="step_text">
                            <Typography.Title level={5} className="step_counter">
                                Шаг 3
                            </Typography.Title>
                            <div className="step_descr">
                                Иконка приложения появится на рабочем столе
                            </div>
                        </div>
                        <img src={step3AND} alt="" className="step_img" />
                    </div>
                </div>

                <div className="more-detailed">
                    <Typography.Title level={4} className='title'>
                        Как установить веб‑приложение ПКБД на Android?
                    </Typography.Title>
                    <P mode='light'>
                        <ol>
                            <li>Откройте браузер Chrome и перейдите на страницу: пкбд.рф</li>
                            <li>В верхнем меню браузера справа нажмите на меню «Три точки»</li>
                            <li>Пролистайте открывшееся меню вниз и выберите «Добавить на гл. экран»</li>
                            <li>После этого на домашнем экране Android появится иконка ПКБД, которая будет открываться как отдельное веб‑приложение.</li>
                        </ol>
                    </P>
                </div>
            </div>
        </StyledManual>
    )
}