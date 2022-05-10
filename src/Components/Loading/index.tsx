import { useTheme } from 'styled-components';

import CircularProgress from '../CircularProgress';

import * as S from './styles';

type LoadingProps = {
  isFullPage?: boolean;
};

export function Loading({ isFullPage = true }: LoadingProps) {
  const theme = useTheme();

  return (
    <S.Wrapper isFullPage={isFullPage}>
      <CircularProgress color={theme.colors.text} />
    </S.Wrapper>
  );
}
