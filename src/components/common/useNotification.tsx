import { notification } from 'antd'
import { createGlobalStyle } from 'styled-components'

export const useNotification = (message: string, description: string) => {
  const [api, contextHolder] = notification.useNotification()

  const openNotification = () => {
    api.open({
      message,
      description,
      className: 'notification',
      placement: 'bottom',
      duration: 3
    })
  }
  return {
    openNotification,
    contextHolder,
    GlobalNotificationStyle: createGlobalStyle`
      .ant-notification-notice-wrapper {
        border: 2px solid var(--c-primary-normal);
        &&&&&& {
          border-radius: 16px;
        }
      }
    `
  }
}