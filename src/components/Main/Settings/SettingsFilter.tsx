import { useEffect, useState } from 'react'
import { StyledInput } from './StyledInput.tsx'
import styled from 'styled-components'
import { DownOutlined, SlidersOutlined } from '@ant-design/icons'
import { Checkbox, Dropdown, MenuProps } from 'antd'
import { SettingsInputsProps } from './Settings.tsx'

const StyledSettingsFilter = styled(StyledInput)`
  width: var(--settings-filter-width);
  
  .ant-input {
    display: var(--settings-filter-input-display);
    cursor: pointer;
  }
  
  && .ant-input-prefix {
    margin-right: var(--settings-filter-icon-margin);
  }
  
  .ant-input-suffix {
    display: var(--settings-filter-input-display);
  }
`

const FilterContainer = styled.div`
  height: 36px;
  cursor: pointer;
  
  .ant-input-affix-wrapper {
    height: 36px;
  }
`

export const SettingsFilter = ({ artists, setArtists }: SettingsInputsProps) => {
  const [guest, setGuest] = useState(false)
  const [candidate, setCandidate] = useState(false)
  const [employee, setEmployee] = useState(false)

  useEffect(() => {
    const allowedStatus: (string | undefined)[] = []
    if (!guest && !candidate && !employee) {
      setArtists(artists)
    } else {
      if (guest) {
        allowedStatus.push('Гость')
      }
      if (candidate) {
        allowedStatus.push('Соискатель')
      }
      if (employee) {
        allowedStatus.push('Сотрудник')
      }
      const newArtists = artists.filter(artist => allowedStatus.includes(artist.status) )
      setArtists(newArtists)
    }

  }, [guest, employee, candidate, setArtists, artists])

  const items: MenuProps['items'] = [
    { key: 'guest', label: (
        <Checkbox onChange={(e) => setGuest(e.target.checked)}>Гость</Checkbox>
    )},
    { key: 'candidate', label: (
        <Checkbox onChange={(e) => setCandidate(e.target.checked)}>Соискатель</Checkbox>
    )},
    { key: 'employee', label: (
        <Checkbox onChange={(e) => setEmployee(e.target.checked)}>Сотрудник</Checkbox>
    )}
  ]

  const [open, setOpen] = useState(false)

  return (
    <Dropdown
      menu={{ items }}
      trigger={[]}
      open={open}
    >
      <FilterContainer onClick={() => setOpen(state => !state) }>
        <StyledSettingsFilter
          bordered={false}
          value="Фильтр"
          readOnly={true}
          prefix={<SlidersOutlined/>}
          suffix={<DownOutlined />}
        />
      </FilterContainer>
    </Dropdown>
  )
}
