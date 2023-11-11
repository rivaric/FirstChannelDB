import { Typography } from "antd"
import styled from "styled-components"
import { P } from "../common/P"
import step1 from "../Manual/Steps/1.png"
import step2 from "../Manual/Steps/4.png"
import step3 from "../Manual/Steps/3.png"


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
        object-fit: cover;
        overflow: hidden;
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
            <div className="text_prev_steps">
                <Typography.Title level={4} className='title'>
                    Создайте веб-версию сайта на iPhone
                </Typography.Title>
                <P mode='light'>
                    Веб‑приложение — это оптимизированная версия личного кабинета, входить в которую можно за одно нажатие прямо с домашнего экрана iPhone. <br />
                    Для установки веб‑версии ПКБД на iPhone важно использовать именно Safari. С помощью других браузеров установить веб‑версию не получится.
                </P>
            </div>
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
                    <img src={step1} alt="" className="step_img" />
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
                    <img src={step2} alt="" className="step_img" />
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
                    <img src={step3} alt="" className="step_img" />
                </div>
            </div>

            <div className="more-detailed">
                <Typography.Title level={4} className='title'>
                    Как установить веб‑приложение ПКБД на iPhone?
                </Typography.Title>
                <P mode='light'>
                    <ol>
                        <li>Откройте браузер Safari и перейдите на страницу: http:</li>
                        <li>В нижнем меню браузера нажмите на центральную кнопку «Поделиться»</li>
                        <li>Пролистайте открывшееся меню вниз и выберите «На экран «Домой»</li>
                        <li>После этого на домашнем экране iPhone появится иконка ПКБД, которая будет открываться как отдельное веб‑приложение.</li>
                    </ol>
                </P>
            </div>
        </StyledManual>
    )
}