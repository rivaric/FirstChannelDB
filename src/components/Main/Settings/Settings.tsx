import { Typography } from 'antd'
import styled from 'styled-components'
import { SettingsProps } from '../../../types/props.ts'
import { SettingsSearch } from './SettingsSearch.tsx'
import { SettingsButton } from './SettingsButton.tsx'
import { SettingsFilter } from './SettingsFilter.tsx'
import { Artist } from '../../../types/Artist.ts'

const StyledSettings = styled.div`
  display: flex;
  flex-direction: var(--settings-align);
  justify-content: space-between;
  
  .settings-left, .settings-right {
    margin: 8px;
  }
  
  .settings-left {
    h2 {
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }
  }

  .settings-right {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`

export type SettingsInputsProps = {
  artists: Artist[]
  setArtists: (artists: Artist[]) => void
}

export const Settings = ({ artists, setArtists }: SettingsProps) => {
  return (
    <StyledSettings>
      <div className="settings-left">
        <Typography.Title level={2}>
          Список персон
        </Typography.Title>
      </div>
      <div className="settings-right">
        <SettingsSearch artists={artists} setArtists={setArtists}/>
        <SettingsFilter artists={artists} setArtists={setArtists} />
        <SettingsButton />
      </div>
    </StyledSettings>
  )
}