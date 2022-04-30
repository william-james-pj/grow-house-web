import React from 'react';

import { useTheme } from 'styled-components';
import { Water } from '../Icon';

import * as S from './styles';

export function WaterIndicator() {
  const theme = useTheme();
  return (
    <S.Wrapper>
      <Water color={theme.colors.blueDark} />
      <S.Title>80%</S.Title>
    </S.Wrapper>
  );
}
