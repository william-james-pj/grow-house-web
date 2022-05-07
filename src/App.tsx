import GlobalStyle from './styles/global';

import { ColorModeContext } from './contexts/ColorModeContext';
import { ModalDiscoverProvider } from './contexts/ModalDiscoverContext';
import { AuthContextProvider } from './contexts/AuthContext';

import { BrowserRouter } from 'react-router-dom';

import { MainRoutes } from './routes';

function App() {
  return (
    <ColorModeContext>
      <AuthContextProvider>
        <GlobalStyle />
        <ModalDiscoverProvider>
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </ModalDiscoverProvider>
      </AuthContextProvider>
    </ColorModeContext>
  );
}

export default App;
