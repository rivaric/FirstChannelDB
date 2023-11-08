import styled from "styled-components"
import { Typography } from "antd"
import { RightOutlined } from '@ant-design/icons'
import { ArtistRowProps } from '../../types/props.ts'
import { useNavigate } from 'react-router-dom'

const StyledAvatar = styled.div<{ photo_url?: string }>`
  .artist-content-avatar {
    background: url(${({photo_url }) => photo_url}) 50% 50% no-repeat;
    background-size: cover;
    height: var(--artist-row-photo-width);
    width: var(--artist-row-photo-width);
    border-radius: 8px;
  }
`

const StyledArtistRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 8px;
  background-color: #fff;
  transition: all 0.2s ease;
  border-radius: 12px;
  border-bottom: 1px solid rgba(5, 26, 46, 0.1);

  cursor: pointer;

  &:hover {
    background-color: rgba(55, 88, 88, 0.03);
    transition: all 0.2s ease;
  }

  .artist-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 16px;

    .artist-content-info {
      display: flex;
      flex-direction: column;
      width: 100%;

      .artist-content-info-activity {
        font-size: 14px;
        line-height: 21px;
        color: rgb(93, 100, 111);
        margin: 0;
        width: 100%;
      }

      h3 {
        font-size: 15px;
        font-weight: 600;
        color: rgb(37, 40, 45);
        margin: 0;
        width: 100%;
      }
    }
  }

  .artist-arrow {
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      padding: 8px;
      margin-right: 4px;
      margin-left: 32px;

      svg {
        color: rgb(93, 100, 111)
      }
    }
  }
`

export const ArtistRow = ({ artist }: ArtistRowProps) => {
  const navigate = useNavigate()

  return (
    <StyledArtistRow onClick={() => navigate(`/${artist.id}`)}>
      <div className="artist-content">
        <StyledAvatar photo_url={artist.photo_url}>
          <div className='artist-content-avatar'/>
        </StyledAvatar>
        <div className="artist-content-info">
          <Typography.Title level={3}>
              {artist.full_name}
          </Typography.Title>
          <Typography.Paragraph className="artist-content-info-activity">
            {artist.activity}
          </Typography.Paragraph>
        </div>
      </div>
      <div className="artist-arrow">
        <RightOutlined />
      </div>
    </StyledArtistRow>
  )
}