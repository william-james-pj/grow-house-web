import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Label = styled.label`
  font-size: ${fonts.normal};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  user-select: none;

  margin: 16px 0 8px;

  ${respondToDown.xs`
    font-size: ${fonts.sm};
  `}
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.disabled};
`;
