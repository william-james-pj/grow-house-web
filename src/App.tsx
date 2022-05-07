import GlobalStyle from './styles/global';

import { ColorModeContext } from './contexts/ColorModeContext';
import { ModalDiscoverProvider } from './contexts/ModalDiscoverContext';
import { AuthContextProvider } from './contexts/AuthContext';

import { BrowserRouter } from 'react-router-dom';

import { MainRoutes } from './routes';
import { DiscoverContextProvider } from './contexts/DiscoverContext';
import { MyPlantsContextProvider } from './contexts/MyPlantsContext';

function App() {
  return (
    <ColorModeContext>
      <AuthContextProvider>
        <DiscoverContextProvider>
          <MyPlantsContextProvider>
            <GlobalStyle />
            <ModalDiscoverProvider>
              <BrowserRouter>
                <MainRoutes />
              </BrowserRouter>
            </ModalDiscoverProvider>
          </MyPlantsContextProvider>
        </DiscoverContextProvider>
      </AuthContextProvider>
    </ColorModeContext>
  );
}

export default App;
