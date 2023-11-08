import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.ts'
import { allArtists } from '../../redux/artistThunks.ts'
import { Main } from './Main.tsx'
import { withAuthRedirect } from '../../hocs/withAuthRedirect.tsx'

export const MainDataLayer = withAuthRedirect(() => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(allArtists())
  }, [])

  const artistsRedux = useAppSelector(state => state.appReducer.artists)

  return <Main artistsRedux={artistsRedux}/>
})
