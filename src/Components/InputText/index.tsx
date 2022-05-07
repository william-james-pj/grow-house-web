import * as S from './styles';

type InputTextProps = {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
};

export function InputText({
  label,
  placeholder,
  onChangeText,
  value,
}: InputTextProps) {
  const changeText = (e: React.FormEvent<HTMLInputElement>) => {
    onChangeText(e.currentTarget.value);
  };

  return (
    <>
      <S.Label>{label}</S.Label>
      <S.Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={changeText}
      />
    </>
  );
}
