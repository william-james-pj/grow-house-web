import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputType = {
  isError: typeof Valid | typeof Invalid | typeof Pristine;
};

type ErrorTextType = {
  isActive: boolean;
};

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

export const Input = styled.input<InputType>`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid
    ${(props) =>
      props.isError === Valid
        ? props.theme.colors.primary
        : props.isError === Invalid
        ? props.theme.colors.red
        : props.theme.colors.disabled};

  :focus {
    outline: none !important;
    border: 1px solid
      ${(props) =>
        props.isError === Valid
          ? props.theme.colors.primary
          : props.isError === Invalid
          ? props.theme.colors.red
          : props.theme.colors.disabled};
  }
`;

export const ErrorText = styled.p<ErrorTextType>`
  font-size: ${fonts.normal};
  color: ${({ theme }) => theme.colors.red};
  font-weight: 400;
  user-select: none;

  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  margin: 16px 0 0px;

  ${respondToDown.xs`
    font-size: ${fonts.sm};
  `}
`;
