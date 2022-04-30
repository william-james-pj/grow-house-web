import { ButtonHTMLAttributes } from 'react';

import { ButtonStyled } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

export function Button({ ...props }: ButtonProps) {
  return <ButtonStyled {...props} />;
}
