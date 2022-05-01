import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';
import { delay } from '../../config/variables';

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

  ${respondToDown.sm`
    padding: 32px 0 0 0;
  `}
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${respondToDown.md`
    padding: 0 32px 0 0;
  `}
`;

export const Title = styled.h2`
  font-size: ${fonts.xl};
  color: ${({ theme }) => theme.colors.text};
  user-select: none;

  ${respondToDown.md`
    padding: 0 0 0 32px;
  `}

  ${respondToDown.xs`
    font-size: ${fonts.md};
  `}
`;

export const LogOffBox = styled.div`
  width: 80px;
  height: 30px;

  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  transition: ${delay};

  :hover {
    opacity: 0.6;
  }
`;

export const LogOffText = styled.p`
  font-size: ${fonts.sm};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  user-select: none;

  ${respondToDown.xs`
    font-size: ${fonts.sm};
  `}
`;

export const NotificationCard = styled.div`
  width: 100%;
  height: 272px;
  background: ${({ theme }) => theme.colors.secundary};
  overflow: hidden;
  border-radius: 16px;

  padding: 32px;
  position: relative;

  transition: ${delay};

  ${respondToDown.sm`
      padding: 16px;
      height: 200px;
    `}
`;

export const NotificationHeaderTitle = styled.p`
  font-size: ${fonts.md};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  user-select: none;

  position: absolute;
  top: 32px;
  left: 32px;

  ${respondToDown.xs`
    font-size: ${fonts.normal};
    top: 32px;
    left: 16px;
  `}
`;

export const NotificationContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const NotificationContentTextContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;

export const NotificationContentTitle = styled.p`
  font-size: ${fonts.md};
  color: ${({ theme }) => theme.colors.card};
  font-weight: 700;
  user-select: none;

  ${respondToDown.xs`
    font-size: ${fonts.normal};
  `}
`;

export const NotificationContentText = styled.p`
  font-size: ${fonts.normal};
  color: ${({ theme }) => theme.colors.card};
  font-weight: 700;
  user-select: none;

  margin-top: 8px;

  ${respondToDown.xs`
    font-size: ${fonts.normal};
  `}
`;

export const NotificationContentBoxContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`;

export const NotificationContentBox = styled.div`
  width: 55px;
  height: 55px;

  border-radius: 16px 8px 16px 8px;

  background: ${({ theme }) => theme.colors.card};
  transition: ${delay};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  margin-top: 32px;

  ${respondToDown.md`
    padding: 0 32px;
  `}

  ${respondToDown.sm`
    flex-direction: column;
  `}
`;

export const Column = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  ${respondToDown.sm`
    width: 100%;
  `}

  & + & {
    width: 40%;
    margin-left: 32px;

    ${respondToDown.sm`
      width: 100%;
      margin-left: 0px;
      margin-top: 16px;
    `}
  }
`;
