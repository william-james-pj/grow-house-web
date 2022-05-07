import * as S from './styles';

import { WaterIndicator } from '../WaterIndicator';
import { MyPlantsType } from '../../config/types';

type CardMyPlantsProps = {
  item: MyPlantsType;
};

export function CardMyPlants({ item }: CardMyPlantsProps) {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={item.imageUrl} />
      </S.ImageContainer>
      <S.TextContainer>
        <S.Title>{item.name}</S.Title>
        <S.SubTitle>{item.surname}</S.SubTitle>
        <WaterIndicator />
      </S.TextContainer>
    </S.Container>
  );
}
