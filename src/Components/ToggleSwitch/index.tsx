import * as S from './styles';

type ToggleSwitchProps = {
  onPress: () => void;
  value: boolean;
};

export function ToggleSwitch({ onPress, value }: ToggleSwitchProps) {
  const handleToggle = () => {
    onPress();
  };

  return (
    <S.Wrapper onClick={handleToggle} isActive={value}>
      <S.Circle></S.Circle>
    </S.Wrapper>
  );
}
