import styled from 'styled-components';
import { delay } from '../../config/variables';

type WrapperProps = {
  isActive: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  width: 41px;
  height: 21px;
  border-radius: 17px;

  padding: 0 2px;

  background: ${(props) =>
    props.isActive
      ? props.theme.colors.secundary
      : props.theme.colors.disabled};

  display: flex;
  align-items: center;

  cursor: pointer;

  justify-content: ${(props) => (props.isActive ? 'flex-end' : 'flex-start')};
`;

export const Circle = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 17px;

  background: ${(props) => props.theme.colors.card};

  transition: ${delay};
`;
