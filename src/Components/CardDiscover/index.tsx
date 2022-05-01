import * as S from './styles';

import imagePlant from '../../assets/PlantaTest.png';
import { useModalDiscover } from '../../hooks/useModalDiscover';

export function CardDiscover() {
  const { openModal } = useModalDiscover();

  return (
    <S.Container onClick={() => openModal(true)}>
      <S.ImageContainer>
        <S.Image src={imagePlant} />
      </S.ImageContainer>
      <S.TextContainer>
        <S.Title>Orelha de Coelho</S.Title>
        <S.SubTitle>Opuntia microdasys</S.SubTitle>
      </S.TextContainer>
    </S.Container>
  );
}
