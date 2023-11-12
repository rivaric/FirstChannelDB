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
  const [valueInput, setValueInput] = useState("");
  
  const dispatch = useAppDispatch()
  
  const hasEmail = useAppSelector(state => state.appReducer.auth.has_email);
  const cur_page = useAppSelector(state => state.appReducer.cur_page);
  const status_filter = useAppSelector(state => state.appReducer.status_filter);
  const input_filter = useAppSelector(state => state.appReducer.input_filter);
  
  useEffect(() => {
    dispatch(allArtists({
      cur_page, status_filter, input_filter
    }))
  }, [hasEmail, cur_page, status_filter, input_filter])
  
  const artistsRedux = useAppSelector(state => state.appReducer.artists)

  return (
    <>
      <GlobalStyles />
      <StyledLayout>
        <Header setIsOpenHelpModal={setIsOpenHelpModal} valueInput={valueInput} setValueInput={setValueInput}/>
        <StyledMainContainer>
          <Routes>
            <Route path='/admin_panel' element={<AdminPanelDataLayers/>} />
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/' element={<Main artists={artistsRedux} setValueInput={setValueInput} />} />
            <Route path='/:artist_id' element={<ArtistCardCheckPublic />} />
            <Route path='/manual' element={<Manual />} />
          </Routes>
          <HelpForm isOpen={isOpenHelpModal} setIsOpen={setIsOpenHelpModal}/>
        </StyledMainContainer>
      </StyledLayout>
    </>
  )
}
