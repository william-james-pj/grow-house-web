import GlobalStyle from './styles/global';

import { ColorModeContext } from './contexts/ColorModeContext';
import { ModalDiscoverProvider } from './contexts/ModalDiscoverContext';

import { BrowserRouter } from 'react-router-dom';

import { MainRoutes } from './routes';

function App() {
  return (
    <ColorModeContext>
      <GlobalStyle />
      <ModalDiscoverProvider>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </ModalDiscoverProvider>
    </ColorModeContext>
  );
}

export default App;
