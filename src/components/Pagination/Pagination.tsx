import { Pagination as AntdPagination } from "antd"
import styled from "styled-components"

const StyledPagination = styled(AntdPagination)`
  margin: 16px auto;
  width: max-content;

  .ant-pagination-item-active {
    border-color: var(--c-primary-normal);
    
    a {
      color: var(--c-primary-normal);
    }
    
    &:hover {
      border-color: var(--c-primary-hover);
      
      a {
        color: var(--c-primary-hover);
      }
    }
  }
`

export const Pagination = () => {
  
  return (
    <StyledPagination defaultPageSize={30} total={30}/>
  )
}