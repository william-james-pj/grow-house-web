import React from 'react';

import { useTheme } from 'styled-components';
import { Water } from '../Icon';

import * as S from './styles';

type WaterIndicatorProps = {
  value?: string;
};

export function WaterIndicator({ value = '' }: WaterIndicatorProps) {
  const theme = useTheme();
  return (
    <S.Wrapper>
      <Water color={theme.colors.blueDark} />
      <S.Title>{`${value}%`}</S.Title>
    </S.Wrapper>
  );
}
