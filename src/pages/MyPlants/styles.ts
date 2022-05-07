import styled from 'styled-components';
// import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Header = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${respondToDown.md`
    padding: 0 32px;
  `}

  ${respondToDown.sm`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const CarouselContainer = styled.div`
  width: 100%;
  margin-top: 32px;

  padding: 0 0 64px 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: auto;
  row-gap: 32px;
  justify-items: center;

  ${respondToDown.sm`
    padding: 0 16px 64px;

    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
  `}
`;
