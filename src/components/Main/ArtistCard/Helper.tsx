import styled from 'styled-components'
import { Button, Dropdown, MenuProps } from 'antd'
import { savePDF } from '../../../helpers/savePDF.ts'

import { Artist } from '../../../types/Artist.ts'
import { useReactToPrint } from 'react-to-print'
import { RefObject } from 'react'

import whatsapp from './icon/whatsapp-svgrepo-com.png';
import vk from './icon/free-icon-vkontakte-3536582.png';
import tg from './icon/free-icon-telegram-3536661.png';
import vider from './icon/free-icon-viber-3938039.png';

const StyledHelper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  margin-top: 16px;
  padding: 8px 0;
  flex-wrap: wrap;
`

export const Helper = ({ artist, contentPrint }: { artist: Artist, contentPrint: RefObject<HTMLDivElement> }) => {
  const handlerPrint = useReactToPrint({
    content: () => contentPrint.current,
    pageStyle: ``
  })
  const url = `https://пкбд.рф${window.location.pathname}`;


  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className='dropdown-wrapper'>
          <img
            src={tg}
            alt=""
            className='icon'
            style={{ width: "30px" }}
            onClick={() => window.open(`https://telegram.me/share/url?url=${url}`,"sharer","status=0,toolbar=0,width=650,height=500")}
          />
          <img
            src={whatsapp}
            alt=""
            className='icon'
            onClick={() => window.open(`https://api.whatsapp.com/send?text=${url}`, "sharer", "status=0,toolbar=0,width=650,height=500")}
            style={{ width: "30px", marginLeft: "5px" }} 
          />
          <img
            src={vk}
            alt=""
            className='icon'
            onClick={() => window.open(`https://vk.com/share.php?url=${url}`,"sharer","status=0,toolbar=0,width=650,height=500")}
            style={{ width: "30px", marginLeft: "5px" }} 
          />
          <img
            src={vider}
            alt=""
            className='icon'
            onClick={() => window.open(`viber://forward?text=${url}`,"sharer","status=0,toolbar=0,width=650,height=500")}
            style={{ width: "30px", marginLeft: "5px" }} 
          />
        </div>
      ),
    },
  ];

  return (
    <StyledHelper>
      <Button onClick={() => { savePDF(artist) }}>
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

