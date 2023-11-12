import { Pagination } from '../Pagination/Pagination.tsx'
import { MainProps } from '../../types/props.ts'
import { ArtistRow } from './ArtistRow.tsx'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Typography } from 'antd'
import { useAppDispatch } from '../../hooks/redux.ts'
import { addArtist } from '../../redux/artistThunks.ts'
import { changeInputFilter, resetCurPage } from '../../redux/AppSlice.ts'

export const Main = ({ artists, setValueInput }: MainProps) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
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
      <div className='main-list-container' >
        <Typography.Title level={3} style={{
          marginTop: windowSize.width < 1150 ? "65px" : "12px",
          paddingLeft: "25px",
          cursor: "pointer"
        }} id="title" onClick={() => {
          setValueInput("")
          dispatch(changeInputFilter(""))
          dispatch(resetCurPage())
        }}>
          Список персон
        </Typography.Title>
        {
          artists.map(artist => (
            <ArtistRow artist={artist} key={artist.id} />
          ))
        }
        <Pagination />
      </div>
    </main>
  )
}