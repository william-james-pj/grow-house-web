import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  grid-template-rows: 1fr;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  ${respondToDown.xs`
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 1.6fr;
    height: 100vh;
  `}
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.card};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${respondToDown.xs`
    grid-row: 2;
    grid-column: 1;
    align-items: flex-start;
  `};
`;

export const ContentBox = styled.div`
  width: 50%;
  height: auto;

  display: flex;
  flex-direction: column;

  ${respondToDown.md`
    width: 70%;
  `}

  ${respondToDown.xs`
    width: 90%;
    padding: 32px 0;
  `}
`;

export const Title = styled.h2`
  font-size: ${fonts.xl};
  color: ${({ theme }) => theme.colors.text};
  user-select: none;

  margin-bottom: 16px;

  ${respondToDown.xs`
    font-size: ${fonts.md};
    text-align: center;
  `}
`;

export const SubTitle = styled.h2`
  font-size: ${fonts.md};
  color: ${({ theme }) => theme.colors.disabled};
  font-weight: 400;
  user-select: none;

  ${respondToDown.xs`
    font-size: ${fonts.normal};
    text-align: center;
  `}
`;

export const Form = styled.form`
  margin-top: 16px;

  display: flex;
  flex-direction: column;
`;

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

export const TextForgot = styled.p`
  font-size: ${fonts.normal};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  user-select: none;

  text-align: right;
  cursor: pointer;

  margin: 32px 0;

  ${respondToDown.xs`
    font-size: ${fonts.sm};
  `}
`;

export const NavigationContainer = styled.form`
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;

export const NavigationText = styled.p`
  font-size: ${fonts.normal};
  color: ${({ theme }) => theme.colors.disabled};
  font-weight: 400;
  user-select: none;

  ${respondToDown.xs`
    font-size: ${fonts.sm};
  `}
`;

export const NavigationLink = styled.p`
  font-size: ${fonts.normal};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  user-select: none;

  margin-left: 8px;

  ${respondToDown.xs`
    font-size: ${fonts.sm};
  `}
`;

export const ImageContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;

  ${respondToDown.xs`
    grid-row: 1;
    grid-column: 1;
  `};
`;

export const Img = styled.img`
  max-width: 400px;

  ${respondToDown.md`
    max-width: 300px;
  `}

  ${respondToDown.xs`
    max-width: 100px;
  `}
`;
