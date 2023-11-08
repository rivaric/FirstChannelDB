import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts'
import { useEffect } from 'react'
import { checkPublic } from '../../../redux/artistThunks.ts'
import { useParams } from 'react-router-dom'
import { ArtistCardDataLayer } from './ArtistCardDataLayer.tsx'

export const ArtistCardCheckPublic = () => {
  const { artist_id } = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(checkPublic(artist_id))
  }, [])

  const isInitialized = useAppSelector(state => state.appReducer.isInitialized)

  return (!isInitialized
    ? <div>Загрузка...</div>
    : <ArtistCardDataLayer artist_id={artist_id} />
  )
}
