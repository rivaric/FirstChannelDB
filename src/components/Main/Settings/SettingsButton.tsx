import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { AddArtist } from '../AddArtist.tsx'
import { StyledButton } from '../../common/StyledButton.tsx'
import styled from 'styled-components'
import { MenuProps } from 'antd'
import { Dropdown } from 'antd/lib/index'
import { AddArtistList } from '../AddArtistList.tsx'

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
  const [openAddArtist, setOpenAddArtist] = useState(false)
  const [openAddList, setOpenAddList] = useState(false)

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div onClick={() => setOpenAddArtist(true)}>Добавить персону</div>
      ),
    },
    {
      key: '2',
      label: (
        <div onClick={() => setOpenAddList(true)}>Отправить список</div>
      ),
    },
  ];

  return <>
    <Dropdown menu={{ items }} placement='bottom'>
      <StyledSettingsButton
        type="primary"

        icon={<PlusOutlined />}
      >
        Новый запрос
      </StyledSettingsButton>
    </Dropdown>
    <AddArtist open={openAddArtist} setOpen={setOpenAddArtist} />
    <AddArtistList open={openAddList} setOpen={setOpenAddList} />
  </>
}
