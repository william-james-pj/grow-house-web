import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

type ActiveProps = {
  isActive: boolean;
};

export const Container = styled.div<ActiveProps>`
  width: 100%;
  /* max-width: 986px; */
  height: 100%;

  z-index: 99;

  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};

  position: absolute;
  top: 0;
  left: 0;

  ${respondToDown.xs`
    background: rgba(0, 0, 0, 0.3);
  `}
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999;

  width: 500px;
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
  border-radius: 64px 0 0 64px;

  padding: 40px 32px;

  -webkit-box-shadow: -3px 0px 15px -9px #000000;
  box-shadow: -3px 0px 15px -9px #000000;

  ${respondToDown.xs`
    width: 95%;
    height: 95%;
    left: 0;
    bottom: 0;
    margin: auto;
    border-radius: 32px;

    padding: 40px 16px;
  `}
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${fonts.md};
  font-weight: 700;
  user-select: none;
  margin-bottom: 8px;
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.normal};
  font-weight: 400;
  user-select: none;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  margin-top: 32px;
`;

export const ImageContainer = styled.div`
  width: 45%;
  min-width: 150px;
  height: 180px;
  background: ${(props) => props.theme.colors.secundary};
  border-radius: 8px;

  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Image = styled.img`
  width: 140px;
  height: 140px;
`;

export const InfoTextContainer = styled.div`
  width: 55%;
  height: 180px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.normal};
  font-weight: 400;
  user-select: none;
  margin: 32px 0;
  line-height: 1.6;

  ${respondToDown.xs`
    font-size: ${fonts.sm};
  `}
`;

export const PropertyContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const CloseContainer = styled.div`
  position: absolute;
  top: 48px;
  right: 32px;
`;
