import styled from 'styled-components'
import { Breadcrumb } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Artist } from '../../../types/Artist.ts'
import { fieldsMapper } from './fieldsMapper.ts'
import { Helper } from './Helper.tsx'
import { ArtistHeader } from './ArtistHeader.tsx'
import { ArtistCardHeader } from './ArtistCardHeader.tsx'
import { ArtistCardBody } from './ArtistCardBody.tsx'
import { useRef } from 'react'

const StyledBreadcrumb = styled(Breadcrumb)`
  display: var(--artist-card-breadcrumb-display);
  
  .breadcrumb-main {
    cursor: pointer;
  }

  @media print {
    padding: 100px;
  }
`

const StyledArtistCard = styled.div`
  padding: 0 8px 12px;
`

export type ArtistCardProps = {
  artist: Artist
}

export const ArtistCard = ({ artist }: ArtistCardProps) => {
  const fieldsKeys = fieldsMapper(artist)
  const printRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate()
  const breadcrumbItems = [
    {
      title: <p onClick={() => { navigate('/') }} className='breadcrumb-main'>Список персон</p>,
      key: '1'
    },
    {
      title: artist.full_name,
      key: '2'
    },
  ]

  return (
    <StyledArtistCard>
      <ArtistHeader artist={artist} />
      <StyledBreadcrumb items={breadcrumbItems} />
      <div ref={printRef}>
        <div className='card-container' id={String(artist.id)} >
          <ArtistCardHeader artist={artist} />
          <ArtistCardBody attitude={artist.attitude} fieldsKeys={fieldsKeys} />
        </div>
      </div>
      <Helper artist={artist} contentPrint={printRef} />
    </StyledArtistCard>
  )
}
