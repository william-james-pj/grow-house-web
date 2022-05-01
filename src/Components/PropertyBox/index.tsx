import { useTheme } from 'styled-components';
import {
  CalendarIcon,
  LightIcon,
  TemperatureIcon,
  WaterPropertyIcon,
} from '../Icon';

import * as S from './styles';

type PropertyBoxProps = {
  title: String;
  type: 'calendar' | 'light' | 'temperature' | 'water';
};

export function PropertyBox({ type, title }: PropertyBoxProps) {
  const theme = useTheme();

  return (
    <S.Wrapper>
      {type === 'calendar' ? (
        <CalendarIcon color={theme.colors.disabled} />
      ) : type === 'light' ? (
        <LightIcon color={theme.colors.disabled} />
      ) : type === 'temperature' ? (
        <TemperatureIcon color={theme.colors.disabled} />
      ) : (
        <WaterPropertyIcon color={theme.colors.disabled} />
      )}

      <S.TextContainer>
        <S.Title>
          {type === 'calendar'
            ? 'Frequência'
            : type === 'light'
            ? 'Iluminação'
            : type === 'temperature'
            ? 'Temperatura'
            : 'Água'}
        </S.Title>
        <S.SubTitle>{title}</S.SubTitle>
      </S.TextContainer>
    </S.Wrapper>
  );
}
