import { Layout } from 'antd'
import { Header } from './components/Header/Header'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { Auth } from './components/Auth/Auth.tsx'
import { MainDataLayer } from './components/Main/MainDataLayer.tsx'
import { AdminPanelDataLayers } from './components/AdminPanel/AdminPanelDataLayers.tsx'
import { HelpForm } from './components/HelpForm.tsx'
import { GlobalStyles } from './css/globalStyled.ts'
import { ArtistCardCheckPublic } from './components/Main/ArtistCard/ArtistCardCheckPublic.tsx'

const StyledLayout = styled(Layout)`
  background-color: #fff;
`

const StyledMainContainer = styled.main`
  width: var(--container-width);
  margin: auto;
`

export const App = () => {

  return (
    <>
      <GlobalStyles />
      <StyledLayout>
        <Header/>
        <StyledMainContainer>
          <Routes>
            <Route path='/admin_panel' element={<AdminPanelDataLayers/>} />
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/' element={<MainDataLayer/>} />
            <Route path='/:artist_id' element={<ArtistCardCheckPublic />} />
          </Routes>
          <HelpForm/>
        </StyledMainContainer>
      </StyledLayout>
    </>

  )
}
