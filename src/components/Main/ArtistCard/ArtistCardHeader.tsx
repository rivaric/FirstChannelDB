import styled from 'styled-components'
import { Artist } from '../../../types/Artist.ts'
import { P } from '../../common/P.tsx'

const StyledAvatar = styled.div.withConfig({
  shouldForwardProp: prop => !['photo_url'].includes(prop)
}) <{ photo_url?: string }>`
  .artist-content-avatar {
    background: url(${({photo_url}) => photo_url}) 50% 50% no-repeat;
    background-size: cover;
    height: var(--artist-card-avatar-width);
    width: var(--artist-card-avatar-width);
    border-radius: 8px;
    object-fit: cover;
  }
`

const StyledCardHeader = styled.div`
  padding-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: var(--artist-card-header-align);
  width: 100%;
  gap: 16px;
  
  .card-header-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  }
`

export const ArtistCardHeader = ({ artist }: { artist: Artist }) => {
  return (
    <StyledCardHeader>
      <StyledAvatar photo_url={artist.photo_url}>
        <div className='artist-content-avatar'>
          <img src={artist.photo_url} className='artist-content-avatar' id='img'/>
        </div>
      </StyledAvatar>
      <div className="card-header-info">
        <P fontWeight={500} fontSize={24}>
          {artist.full_name}
        </P>
        <P mode='light'>
          {artist.activity}
        </P>
      </div>
    </StyledCardHeader>
  )
}
