import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Wrapper = styled.div`
  width: 47%;
  height: 60px;
  background: ${(props) => props.theme.colors.card};
  border-radius: 8px;
  padding: 0 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 14px;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.sm};
  font-weight: 400;
  user-select: none;

  ${respondToDown.xs`
    font-size: ${fonts.xs};
  `}
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.normal};
  font-weight: 700;
  user-select: none;
  margin-top: 4px;

  ${respondToDown.xs`
    font-size: ${fonts.sm};
  `}
`;
