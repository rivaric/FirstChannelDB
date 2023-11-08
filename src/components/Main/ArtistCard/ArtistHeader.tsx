import { Artist } from '../../../types/Artist.ts'
import styled from 'styled-components'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const StyledArtistHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  
  display: var(--artist-card-header-display);
  align-items: center;
  
  gap: 12px;
  height: 48px;
  width: 100%;  
  padding: 0 12px;
  
  background: #fff;
  box-shadow: rgba(31, 41, 55, 0.08) 0 1px 1px;
  transition: all 0.3s ease;
  
  .anticon svg {
    width: 20px;
    height: 20px;
  }
`

const StyledNameScroll = styled.div.withConfig({
  shouldForwardProp: prop => !['isShown'].includes(prop)
})<{ isShown: boolean }>`
  opacity: ${({ isShown }) => isShown ? 1 : 0};
  transition: all 0.3s ease;
  font-size: 18px;
  font-weight: 500;  
`

export const ArtistHeader = ({ artist }: { artist: Artist }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate()
  return (
    <StyledArtistHeader>
      <ArrowLeftOutlined onClick={() => navigate('/')}/>
      <StyledNameScroll isShown={scrollPosition > 100}>{artist.full_name}</StyledNameScroll>
    </StyledArtistHeader>
  )
}
