import { useTheme } from 'styled-components';
import { SearchIcon } from '../Icon';

import * as S from './styles';

type SearchBarProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
};

export function SearchBar({
  placeholder,
  onChangeText,
  value,
}: SearchBarProps) {
  const theme = useTheme();

  const changeText = (e: React.FormEvent<HTMLInputElement>) => {
    onChangeText(e.currentTarget.value);
  };

  return (
    <S.Wrapper>
      <S.TextInput
        placeholder={placeholder}
        value={value}
        onChange={changeText}
      />
      <S.IconContainer>
        <SearchIcon color={theme.colors.disabled} />
      </S.IconContainer>
    </S.Wrapper>
  );
}
