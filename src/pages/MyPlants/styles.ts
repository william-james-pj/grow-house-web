import styled from 'styled-components';
// import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const CarouselContainer = styled.div`
  width: 100%;
  margin-top: 32px;
`;

export const Header = styled.div`
  width: 100%;

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
