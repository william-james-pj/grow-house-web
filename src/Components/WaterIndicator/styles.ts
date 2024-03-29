import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { delay } from '../../config/variables';

export const Wrapper = styled.div`
  width: 80px;
  height: 30px;
  background: ${(props) => props.theme.colors.blueLight};
  border-radius: 8px;

  transition: ${delay};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.blueDark};
  font-size: ${fonts.sm};
  font-weight: 700;
  user-select: none;
`;
