import styled from 'styled-components'
import { Input } from 'antd'

export const StyledInput = styled(Input)`
  &, &:hover, &.ant-input-affix-wrapper {
    background-color: rgb(244, 245, 246);
    border-radius: 8px;

    .ant-input-prefix {
      margin-right: 8px;

      svg {
        height: 20px;
        width: 20px;
      }
    }
    
    .ant-input-prefix, .ant-input-suffix {
      color: rgb(150, 157, 166);
    }

    input {
      color: rgb(70, 75, 83);
    }
  }
`