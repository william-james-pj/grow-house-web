import { useTheme } from 'styled-components';

import CircularProgress from '../CircularProgress';

import * as S from './styles';

export function Loading() {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <CircularProgress color={theme.colors.text} />
    </S.Wrapper>
  );
}
