import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Container = styled.div`
  min-width: 280px;
  height: 350px;
  background: ${({ theme }) => theme.colors.card};

  border-radius: 8px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  & + & {
    margin-left: 32px;
  }

  ${respondToDown.xs`
    min-width: 240px;
  `}
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 65%;

  background: ${(props) => props.theme.colors.secundary};

  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  user-select: none;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 45%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 32px;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.md};
  font-weight: 700;
  user-select: none;

  ${respondToDown.xs`
    font-size: ${fonts.normal};
  `}
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.normal};
  font-weight: 700;
  margin: 4px 0 20px;
  user-select: none;

  ${respondToDown.xs`
    font-size: ${fonts.sm};
  `}
`;
