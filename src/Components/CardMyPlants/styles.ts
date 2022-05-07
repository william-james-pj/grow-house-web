import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';
import { delay } from '../../config/variables';

export const Container = styled.div`
  width: 350px;
  height: 200px;
  background: ${({ theme }) => theme.colors.card};

  transition: ${delay};

  border-radius: 8px;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  overflow: hidden;

  ${respondToDown.xs`
    width: 100%;
    height: 100%;
  `}
`;

export const ImageContainer = styled.div`
  width: 40%;
  height: 100%;

  background: ${(props) => props.theme.colors.secundary};
  transition: ${delay};

  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  user-select: none;
`;

export const TextContainer = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 16px;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.md};
  font-weight: 700;
  user-select: none;
  line-height: 1.25;

  ${respondToDown.xs`
    font-size: ${fonts.normal};
  `}
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.normal};
  font-weight: 700;
  margin: 8px 0 20px;
  user-select: none;

  ${respondToDown.xs`
    font-size: ${fonts.sm};
  `}
`;
