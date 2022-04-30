import * as S from './styles';

import imagePlant from '../../assets/PlantaTest.png';
import { WaterIndicator } from '../WaterIndicator';

export function CardMyPlants() {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={imagePlant} />
      </S.ImageContainer>
      <S.TextContainer>
        <S.Title>Orelha de Coelho</S.Title>
        <S.SubTitle>Apelido</S.SubTitle>
        <WaterIndicator />
      </S.TextContainer>
    </S.Container>
  );
}
