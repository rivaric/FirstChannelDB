import { SearchOutlined } from '@ant-design/icons'
import { Artist } from '../../../types/Artist.ts'
import { useState } from 'react'
import { StyledInput } from './StyledInput.tsx'
import styled from 'styled-components'
import { SettingsInputsProps } from './Settings.tsx'

const StyledSettingsSearch = styled(StyledInput)`
  width: 300px;
  height: 100%;

  @media (max-width: 420px) {
    width: 200px;
  }
`

export const SettingsSearch = ({ artists, setArtists }: SettingsInputsProps) => {
  const [searchValue, setSearchValue] = useState('')

  const onSearch = (value: string) => {
    setSearchValue(value)

    const newArtists: Artist[] = artists.filter((artist: Artist) => {
      let searchField: keyof Artist
      for (searchField in artist)
        if (artist[searchField]?.toString().toLowerCase().includes(value.toLowerCase()))
          return true
      return false
    })
    setArtists(newArtists)
  }

  return (
      <StyledSettingsSearch
        placeholder="Поиск"
        allowClear
        value={searchValue}
        onChange={(e) => onSearch(e.target.value)}
        prefix={<SearchOutlined />}
        bordered={false}
        className="settings-right-input"
      />
  )
}
