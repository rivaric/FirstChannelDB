import styled from 'styled-components'
import { Button, Dropdown, MenuProps } from 'antd'
import { savePDF } from '../../../helpers/savePDF.ts'
import YandexShare from '../../ReactYandexShare.tsx'
import { Artist } from '../../../types/Artist.ts'
import { useAppDispatch } from '../../../hooks/redux.ts'
import { logDownload } from '../../../redux/otherThunks.ts'
import { makePublic } from '../../../redux/artistThunks.ts'
import ReactToPrint, { useReactToPrint } from 'react-to-print'
import { RefObject } from 'react'

const StyledHelper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  margin-top: 16px;
  padding: 8px 0;
  flex-wrap: wrap;
  
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

export const Helper = ({ artist, contentPrint }: { artist: Artist, contentPrint: RefObject<HTMLDivElement> }) => {
  const dispatch = useAppDispatch()
  const handlerPrint = useReactToPrint({
    content: () => contentPrint.current,
    pageStyle: ``
  })

  const onLog = () => {
    dispatch(logDownload(artist.id))
    dispatch(makePublic(artist.id))
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <span onMouseUp={() => onLog()} onTouchEnd={() => onLog()}>
          <YandexShare theme={{
            services: 'vkontakte,telegram,whatsapp,viber'
          }}
            content={{
              url: window.location.href
            }}
          />
        </span>
      ),
    },
  ];

  return (
    <StyledHelper>
      <Button onClick={() => { savePDF(artist); onLog() }}>
        Сохранить в PDF
      </Button>
      <Button onClick={() => {
        const img = document.getElementById("img");

        if (img) {
          img.style.visibility = "visible";
        }
        handlerPrint(); 
      }}>Распечатать</Button>
      <Dropdown menu={{ items }} placement='bottom'>
        <Button>
          Отправить
        </Button>
      </Dropdown>
    </StyledHelper>
  )
}

