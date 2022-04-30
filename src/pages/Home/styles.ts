import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Container = styled.div`
  width: 100%;
  max-width: 986px;
  height: 100vh;
  overflow: hidden;

  padding: 106px 0 0 0;

  display: flex;
  flex-direction: column;

  ${respondToDown.md`
    padding: 106px 0 0 0;
  `}

  ${respondToDown.md`
    padding: 32px 0 0 0;
  `}
`;

export const Title = styled.h2`
  font-size: ${fonts.xl};
  color: ${({ theme }) => theme.colors.text};
  user-select: none;

  margin-bottom: 16px;

  ${respondToDown.md`
    padding: 0 0 0 32px;
  `}

  ${respondToDown.xs`
    font-size: ${fonts.md};
  `}
`;
