import * as S from './styles';

import { useTheme } from 'styled-components';

import { ToggleSwitch } from '../ToggleSwitch';
import { Humidity, Irrigation, Reservoir } from '../Icon';

type HomeCardProps = {
  type: 'humidity' | 'irrigation' | 'reservoir';
  value?: string;
  title: string;
  valueSwitch?: boolean;
  pressSwitch?: () => void;
};

export function HomeCard({
  type,
  title,
  value,
  valueSwitch = false,
  pressSwitch = () => {},
}: HomeCardProps) {
  const theme = useTheme();

  const onPressSwitch = () => {
    pressSwitch();
  };

  return (
    <S.Container>
      <S.BallContainer>
        <S.Boll>
          {type === 'irrigation' ? (
            <Irrigation color={theme.colors.card} />
          ) : type === 'reservoir' ? (
            <Reservoir color={theme.colors.card} />
          ) : (
            <Humidity color={theme.colors.card} />
          )}
        </S.Boll>
      </S.BallContainer>
      <S.TextContainer>
        <S.Title>{title}</S.Title>
        <S.Text>{value}</S.Text>
      </S.TextContainer>
      <S.SwitchContainer>
        {type === 'irrigation' ? (
          <ToggleSwitch value={valueSwitch} onPress={onPressSwitch} />
        ) : null}
      </S.SwitchContainer>
    </S.Container>
  );
}
