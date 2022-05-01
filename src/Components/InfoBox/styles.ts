import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Wrapper = styled.div`
  width: 70%;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.sm};
  font-weight: 700;
  user-select: none;

  ${respondToDown.xs`
     font-size: ${fonts.xs};
  `}
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.normal};
  font-weight: 400;
  user-select: none;
  margin-top: 8px;

  ${respondToDown.xs`
     margin-top: 4px;
     font-size: ${fonts.sm};
  `}
`;
