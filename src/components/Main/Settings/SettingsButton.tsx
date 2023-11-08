import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { AddArtist } from '../AddArtist.tsx'
import { StyledButton } from '../../common/StyledButton.tsx'
import styled from 'styled-components'

const StyledSettingsButton = styled(StyledButton)`
  padding: var(--add-button-padding);
  border-radius: var(--add-button-border-radius);

  &&&& .ant-btn-icon {
    margin-right: var(--add-button-icon-margin);
  }

  .ant-btn-icon + span {
    display: var(--add-button-text-display);
  }
`

export const SettingsButton = () => {
  const [open, setOpen] = useState(false)

  return <>
    <StyledSettingsButton
      type="primary"
      onClick={() => setOpen(true)}
      icon={<PlusOutlined/>}
    >
      Добавить
    </StyledSettingsButton>
    <AddArtist open={open} setOpen={setOpen}/>
  </>
}
