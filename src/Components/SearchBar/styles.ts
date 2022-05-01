import styled from 'styled-components';
import { respondToDown } from '../../config/respondTo';
import { delay } from '../../config/variables';
// import * as fonts from '../../config/fonts';

export const Wrapper = styled.div`
  width: 350px;
  height: 50px;
  background: ${(props) => props.theme.colors.card};
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;

  transition: ${delay};

  ${respondToDown.sm`
    width: 100%;
    margin: 32px 0 0;
  `}
`;

export const TextInput = styled.input.attrs((props) => ({
  placeholderTextColor: props.theme.colors.disabled,
}))`
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.card};
  font-weight: 700;

  border-width: 0px;
  border: none;

  height: 100%;
  width: 80%;

  transition: ${delay};

  :focus {
    outline: none !important;
  }
`;

export const IconContainer = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
