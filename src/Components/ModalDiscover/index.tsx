import * as S from './styles';

import imagePlant from '../../assets/PlantaTest.png';
import { InfoBox } from '../InfoBox';
import { PropertyBox } from '../PropertyBox';
import { Close } from '../Icon';
import { useTheme } from 'styled-components';
import { useModalDiscover } from '../../hooks/useModalDiscover';

type ModalDiscoverProps = {
  isActive: boolean;
  closeModal: () => void;
};

export function ModalDiscover({ isActive, closeModal }: ModalDiscoverProps) {
  const theme = useTheme();
  const { discoverItem } = useModalDiscover();

  return (
    <S.Container onClick={() => closeModal()} isActive={isActive}>
      <S.ModalContainer onClick={() => {}}>
        <S.Title>{discoverItem?.name}</S.Title>
        <S.SubTitle>{discoverItem?.scientificName}</S.SubTitle>
        <S.CloseContainer>
          <Close color={theme.colors.text} />
        </S.CloseContainer>
        <S.InfoContainer>
          <S.ImageContainer>
            <S.Image src={discoverItem?.image} />
          </S.ImageContainer>
          <S.InfoTextContainer>
            <InfoBox type="category" title={discoverItem?.category ?? ''} />
            <InfoBox
              type="environment"
              title={discoverItem?.environment ?? ''}
            />
            <InfoBox type="size" title={discoverItem?.size ?? ''} />
          </S.InfoTextContainer>
        </S.InfoContainer>
        <S.Description>{discoverItem?.description}</S.Description>
        <S.PropertyContainer>
          <PropertyBox type="water" title={discoverItem?.water ?? ''} />
          <PropertyBox type="calendar" title={discoverItem?.frequency ?? ''} />
        </S.PropertyContainer>
        <S.PropertyContainer>
          <PropertyBox
            type="temperature"
            title={`${discoverItem?.temperature} °C` ?? ''}
          />
          <PropertyBox type="light" title={discoverItem?.lighting ?? ''} />
        </S.PropertyContainer>
      </S.ModalContainer>
    </S.Container>
  );
}
