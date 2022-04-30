import GlobalStyle from './styles/global';

import { ColorModeContext } from './contexts/ColorModeContext';

import { BrowserRouter } from 'react-router-dom';

import { MainRoutes } from './routes';

function App() {
  return (
    <ColorModeContext>
      <GlobalStyle />
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ColorModeContext>
  );
}

export default App;
