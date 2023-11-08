import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts'
import { ArtistCard } from './ArtistCard.tsx'
import { useNavigate } from 'react-router-dom'
import { getArtist } from '../../../redux/artistThunks.ts'
import { Artist } from '../../../types/Artist.ts'

export const ArtistCardDataLayer = ({ artist_id }: { artist_id?: string } ) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isAuth = !!localStorage.getItem('access_token')

  const isCurrentArtistPublic = useAppSelector(state => state.appReducer.isCurrentArtistPublic)

  useEffect(() => {
    if (!isCurrentArtistPublic && !isAuth) {
      navigate('/auth')
    } else {
      dispatch(getArtist(artist_id))
    }
  }, [isCurrentArtistPublic, isAuth])

  const isLoading = useAppSelector(state => state.appReducer.isLoading)
  const artist: Artist = useAppSelector(state => state.appReducer.currentArtist)

  return (
    isLoading
    ? <div>Загрузка...</div>
    : <ArtistCard artist={artist}/>
  )
}