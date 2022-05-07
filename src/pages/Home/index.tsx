import { useState } from 'react';

import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/useAuth';

import { HomeCard } from '../../Components/HomeCard';
import { Bell, ArrowExit } from '../../Components/Icon';

import * as S from './styles';

export function Home() {
  const theme = useTheme();
  const [switchIsActive, setSwitchIsActive] = useState(true);
  const { logout } = useAuth();

  const pressSwitch = () => {
    setSwitchIsActive(!switchIsActive);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Home</S.Title>
        <S.LogOffBox onClick={() => logout()}>
          <ArrowExit color={theme.colors.white} />
          <S.LogOffText>Sair</S.LogOffText>
        </S.LogOffBox>
      </S.Header>
      <S.Row>
        <S.Column>
          <S.NotificationCard>
            <S.NotificationHeaderTitle>Notificação</S.NotificationHeaderTitle>
            <S.NotificationContent>
              <S.NotificationContentTextContainer>
                <S.NotificationContentTitle>
                  Nenhuma notificação
                </S.NotificationContentTitle>
                <S.NotificationContentText>
                  Seu jardim está perfeito
                </S.NotificationContentText>
              </S.NotificationContentTextContainer>
              <S.NotificationContentBoxContainer>
                <S.NotificationContentBox>
                  <Bell color={theme.colors.secundary} />
                </S.NotificationContentBox>
              </S.NotificationContentBoxContainer>
            </S.NotificationContent>
          </S.NotificationCard>
        </S.Column>
        <S.Column>
          <HomeCard
            type="irrigation"
            title={'Irrigação automática'}
            valueSwitch={switchIsActive}
            pressSwitch={pressSwitch}
          />
          <HomeCard
            type="reservoir"
            value="80%"
            title={'Reservatório de água'}
          />
          <HomeCard type="humidity" value="80%" title={'Humidade media'} />
        </S.Column>
      </S.Row>
    </S.Container>
  );
}
