import { useState } from 'react';
import { InputState } from '../../config/types';
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
  setValidState?: (value: InputState) => void;
};

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
  setValidState,
}: InputTextProps) {
  const [validStateLocal, setValidStateLocal] = useState<InputState>(null);

  const changeText = (e: React.FormEvent<HTMLInputElement>) => {
    onChangeText(e.currentTarget.value);
    validate(e.currentTarget.value);
  };

  const validate = (inputValue: string) => {
    if (type === 'password' && confirmPassword && confirmPasswordValidator) {
      const valid = confirmPasswordValidator(inputValue, confirmPassword);
      setValidStateLocal(valid);

      if (setValidState) setValidState(valid);
      return;
    }

    if (validator) {
      const valid = validator(inputValue);
      setValidStateLocal(valid);

      if (setValidState) setValidState(valid);
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
        isError={validStateLocal}
      />
      <S.ErrorText isActive={validStateLocal === false ? true : false}>
        {errorText}
      </S.ErrorText>
    </>
  );
}
