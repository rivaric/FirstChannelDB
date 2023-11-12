import { SearchOutlined } from '@ant-design/icons'
import { StyledInput } from './StyledInput.tsx'
import styled from 'styled-components'

const StyledSettingsSearch = styled(StyledInput)`
  width: 300px;
  height: 100%;

  @media (max-width: 500px) {
    width: 130px;
  }

  @media (min-width: 501px) and (max-width: 700px) {
    width: 200px;
  }
`

export const SettingsSearch = ({
  valueInput, 
  setValueInput,
  setCode,
} : {
  valueInput: string,
  setValueInput: (x: string) => void,
  setCode: (x: string) => void,
}) => {
  return (
    <>
      <StyledSettingsSearch
        placeholder="Поиск"
        allowClear
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
        onKeyDown={(e) => setCode(e.code)}
        prefix={<SearchOutlined />}
        bordered={false}
        className="settings-right-input"
        id="serch-input"
      />
    </>
  )
}
