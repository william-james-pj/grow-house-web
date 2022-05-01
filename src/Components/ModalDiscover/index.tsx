import * as S from './styles';

import imagePlant from '../../assets/PlantaTest.png';
import { InfoBox } from '../InfoBox';
import { PropertyBox } from '../PropertyBox';
import { Close } from '../Icon';
import { useTheme } from 'styled-components';

type ModalDiscoverProps = {
  isActive: boolean;
  closeModal: () => void;
};

export function ModalDiscover({ isActive, closeModal }: ModalDiscoverProps) {
  const theme = useTheme();
  return (
    <S.Container onClick={() => closeModal()} isActive={isActive}>
      <S.ModalContainer onClick={() => {}}>
        <S.Title>{'Orelha de coelho'}</S.Title>
        <S.SubTitle>{'Opuntia microdasys'}</S.SubTitle>
        <S.CloseContainer>
          <Close color={theme.colors.text} />
        </S.CloseContainer>
        <S.InfoContainer>
          <S.ImageContainer>
            <S.Image src={imagePlant} />
          </S.ImageContainer>
          <S.InfoTextContainer>
            <InfoBox type="category" title={'Cactos e Suculentas'} />
            <InfoBox type="environment" title={'Interno'} />
            <InfoBox type="size" title={'Pequeno'} />
          </S.InfoTextContainer>
        </S.InfoContainer>
        <S.Description>
          {
            'Originária do México, a planta pode atingir de 30 a 45 cm de altura. Os espinhos surgem em tufos, que podem ocorrer em cores diferentes conforme a variedade da planta.'
          }
        </S.Description>
        <S.PropertyContainer>
          <PropertyBox type="water" title={'Pouca'} />
          <PropertyBox type="calendar" title={'1-2/semana'} />
        </S.PropertyContainer>
        <S.PropertyContainer>
          <PropertyBox type="temperature" title={`15-32 °C` ?? ''} />
          <PropertyBox type="light" title={'Muita'} />
        </S.PropertyContainer>
      </S.ModalContainer>
    </S.Container>
  );
}
