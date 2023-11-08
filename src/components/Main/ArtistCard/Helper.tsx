import styled from 'styled-components'
import { Button } from 'antd'
import { savePDF } from '../../../helpers/savePDF.ts'
import YandexShare from '../../ReactYandexShare.tsx'
import { Artist } from '../../../types/Artist.ts'
import { useAppDispatch } from '../../../hooks/redux.ts'
import { logDownload } from '../../../redux/otherThunks.ts'
import { makePublic } from '../../../redux/artistThunks.ts'

const StyledHelper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  margin-top: 16px;
  padding: 8px 0;
  
  &&&& .ya-share2__list {
    display: flex;
    gap: 12px;
    
    .ya-share2__item {
      margin: 0;
      
      .ya-share2__badge, .ya-share2__icon {
        width: 32px;
        height: 32px;
        background-size: cover;
      }
    }
  }
`

export const Helper = ({ artist }: { artist: Artist }) => {
  const dispatch = useAppDispatch()

  const onLog = () => {
    dispatch(logDownload(artist.id))
    dispatch(makePublic(artist.id))
  }

  return (
    <StyledHelper>
      <Button onClick={() => { savePDF(artist); onLog() }}>
        Сохранить в PDF
      </Button>
      <span onMouseUp={() => onLog()} onTouchEnd={() => onLog()}>
        <YandexShare theme={{
            services: 'vkontakte,telegram,whatsapp,viber'
          }}
          content={{
            url: window.location.href
          }}
        />
      </span>

    </StyledHelper>
  )
}
