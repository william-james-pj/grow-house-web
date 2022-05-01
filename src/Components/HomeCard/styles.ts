import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { delay } from '../../config/variables';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.colors.card};
  border-radius: 16px;

  display: flex;
  align-items: center;
  position: relative;

  transition: ${delay};

  padding: 0 16px;

  & + & {
    margin-top: 16px;
  }
`;

export const BallContainer = styled.div`
  width: 25%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Boll = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;

  background: ${(props) => props.theme.colors.secundary};
  transition: ${delay};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.sm};
  font-weight: 700;
  user-select: none;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.normal};
  font-weight: 700;
  margin-top: 8px;
  user-select: none;
`;

export const SwitchContainer = styled.div`
  position: absolute;
  right: 16px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
