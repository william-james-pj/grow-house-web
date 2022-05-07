import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';
import { delay } from '../../config/variables';

export const Container = styled.div`
  width: 350px;
  height: 200px;
  background: ${({ theme }) => theme.colors.card};

  border-radius: 8px;
  overflow: hidden;

  display: flex;
  flex-direction: row;

  transition: ${delay};
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  :hover {
    opacity: 0.6;
  }

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
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.md};
  font-weight: 700;
  text-align: center;
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
  text-align: center;
  margin-top: 16px;
  user-select: none;

  ${respondToDown.xs`
    font-size: ${fonts.sm};
  `}
`;
