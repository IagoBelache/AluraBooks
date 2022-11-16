import Header from './componentes/Header'
import Search from './componentes/Search'
import Recents from './componentes/Recents'
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <Recents />
    </AppContainer>
  );
}

export default App
