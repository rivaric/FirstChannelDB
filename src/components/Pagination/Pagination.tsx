import { Pagination as AntdPagination } from "antd"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { useEffect, useState } from "react"
import { changeCurPage } from "../../redux/AppSlice"

const StyledPagination = styled(AntdPagination)`
  margin: 16px auto;
  width: max-content;
  
  .ant-pagination-options {
    display: none;
  }

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
  const [currentPage, setCurrentPage] = useState(1);
  const max_page = useAppSelector(state => state.appReducer.max_page);
  const cur_page = useAppSelector(state => state.appReducer.cur_page);

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (cur_page === 1) {
      setCurrentPage(cur_page);
    }
  }, [cur_page])

  const onChange = (page: number) => {
    setCurrentPage(page);
    dispatch(changeCurPage(page));
    window.scroll({top:0,behavior:'smooth'});
  }

  return (
    <StyledPagination total={30 * max_page} pageSize={30} current={currentPage} onChange={(page) => onChange(page)}/>
  )
}