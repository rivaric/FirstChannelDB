import { Pagination } from '../Pagination/Pagination.tsx'
import { MainProps } from '../../types/props.ts'
import { ArtistRow } from './ArtistRow.tsx'
import { AddEmailForm } from '../AddEmailForm.tsx'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Typography } from 'antd'

export const Main = ({ artists }: MainProps) => {
  const navigate = useNavigate()
  const isAuth = !!localStorage.getItem('access_token')
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    window.onresize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  }, []);

  useEffect(() => {
    if (!isAuth) {
      navigate('/auth')
    }
  }, [isAuth])

  return (
    <main>
      <AddEmailForm />
      <div className='main-list-container' >
        <Typography.Title level={3} style={{
          marginTop: windowSize.width < 1050 ? "65px" : "12px",
        }}>
          Список персон
        </Typography.Title>
        {
          artists.map(artist => (
            <ArtistRow artist={artist} key={artist.id} />
          ))
        }
      </div>
      <Pagination />
    </main>
  )
}