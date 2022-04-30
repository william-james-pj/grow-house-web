import { createGlobalStyle } from 'styled-components';
import { delay } from '../config/variables';
import '@brainhubeu/react-carousel/lib/style.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-size: 16px;
    transition: ${delay};
  }

  body, input, button, textarea{
    font: 400 16px 'Robot', sans-serif;
  }

  ul {
      list-style: none;
    }
`;
