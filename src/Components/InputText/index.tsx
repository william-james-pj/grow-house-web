import { useState } from 'react';
import * as S from './styles';

type InputTextProps = {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  type?: 'text' | 'password';
  validator?: (input: string) => boolean;
  errorText?: string;
  confirmPassword?: string;
  confirmPasswordValidator?: (
    password: string,
    confirmPassword: string,
  ) => boolean;
};

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

export function InputText({
  label,
  placeholder,
  onChangeText,
  type = 'text',
  value,
  validator,
  errorText = '',
  confirmPassword,
  confirmPasswordValidator,
}: InputTextProps) {
  const [validState, setValidState] = useState<InputState>(Pristine);

  const changeText = (e: React.FormEvent<HTMLInputElement>) => {
    onChangeText(e.currentTarget.value);
    validate(e.currentTarget.value);
  };

  const validate = (inputValue: string) => {
    if (type === 'password' && confirmPassword && confirmPasswordValidator) {
      const valid = confirmPasswordValidator(inputValue, confirmPassword);
      setValidState(valid);
      return;
    }

    if (validator) {
      const valid = validator(inputValue);
      setValidState(valid);
    }
  };

  return (
    <>
      <S.Label>{label}</S.Label>
      <S.Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changeText}
        isError={validState}
      />
      <S.ErrorText isActive={validState === Invalid ? true : false}>
        {errorText}
      </S.ErrorText>
    </>
  );
}
