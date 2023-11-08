import styled from 'styled-components'
import { ProfileIconsProps } from '../../types/props.ts'

const StyledProfileIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(229, 232, 236);
  color: rgb(124, 138, 161);
  cursor: pointer;

  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 0 2px 2px rgba(31, 41, 55, 0.08);
  }
`

export const ProfileIcon = ({ photo_url, full_name }: ProfileIconsProps) => {

  return (
    <StyledProfileIcon>
      { photo_url ? <img src={photo_url}/> : <span>{ full_name.slice(0, 1).toUpperCase() }</span> }
    </StyledProfileIcon>
  )
}