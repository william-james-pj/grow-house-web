import * as S from './styles';

import imagePlant from '../../assets/PlantaTest.png';

export function CardDiscover() {
  return (
    <S.Container>
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
