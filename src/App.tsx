import { Layout } from 'antd'
import { Header } from './components/Header/Header'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { Auth } from './components/Auth/Auth.tsx'
import { AdminPanelDataLayers } from './components/AdminPanel/AdminPanelDataLayers.tsx'
import { HelpForm } from './components/HelpForm.tsx'
import { GlobalStyles } from './css/globalStyled.ts'
import { ArtistCardCheckPublic } from './components/Main/ArtistCard/ArtistCardCheckPublic.tsx'
import { useEffect, useState } from 'react'
import { allArtists } from './redux/artistThunks.ts'
import { useAppDispatch, useAppSelector } from './hooks/redux.ts'
import { Main } from './components/Main/Main.tsx'
import { Manual } from './components/Manual/Manual.tsx'

const StyledLayout = styled(Layout)`
  background-color: #fff;
`

const StyledMainContainer = styled.main`
  width: var(--container-width);
  margin: auto;
  margin-top: 80px;
`

export const App = () => {
  const [isOpenHelpModal, setIsOpenHelpModal] = useState(false);
  
  const dispatch = useAppDispatch()
  
  const hasEmail = useAppSelector(state => state.appReducer.auth.has_email);
  
  useEffect(() => {
    dispatch(allArtists())
  }, [hasEmail])
  
  const artistsRedux = useAppSelector(state => state.appReducer.artists)
  const [artists, setArtists] = useState(artistsRedux);

  return (
    <>
      <GlobalStyles />
      <StyledLayout>
        <Header setIsOpenHelpModal={setIsOpenHelpModal} artistsRedux={artistsRedux} setArtists={setArtists}/>
        <StyledMainContainer>
          <Routes>
            <Route path='/admin_panel' element={<AdminPanelDataLayers/>} />
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/' element={<Main artists={artists}/>} />
            <Route path='/:artist_id' element={<ArtistCardCheckPublic />} />
            <Route path='/manual' element={<Manual />} />
          </Routes>
          <HelpForm isOpen={isOpenHelpModal} setIsOpen={setIsOpenHelpModal}/>
        </StyledMainContainer>
      </StyledLayout>
    </>
  )
}
