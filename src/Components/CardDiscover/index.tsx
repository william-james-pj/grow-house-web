import * as S from './styles';

import { useModalDiscover } from '../../hooks/useModalDiscover';
import { DiscoverType } from '../../config/types';

type CardDiscoverProps = {
  item: DiscoverType;
};

export function CardDiscover({ item }: CardDiscoverProps) {
  const { openModal, setNewDiscoverItem } = useModalDiscover();

  const buttonPress = () => {
    setNewDiscoverItem(item);
    openModal(true);
  };

  return (
    <S.Container onClick={buttonPress}>
      <S.ImageContainer>
        <S.Image src={item.image} />
      </S.ImageContainer>
      <S.TextContainer>
        <S.Title>{item.name}</S.Title>
        <S.SubTitle>{item.scientificName}</S.SubTitle>
      </S.TextContainer>
    </S.Container>
  );
}
