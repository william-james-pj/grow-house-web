import { useEffect, useState } from 'react';

import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/useAuth';
import { useDiscover } from '../../hooks/useDiscover';
import { useMyPlants } from '../../hooks/useMyPlants';

import { HomeCard } from '../../Components/HomeCard';
import { Bell, ArrowExit } from '../../Components/Icon';

import * as S from './styles';

export function Home() {
  const theme = useTheme();
  const [switchIsActive, setSwitchIsActive] = useState(true);
  const { logout } = useAuth();
  const [humidityAverage, setHumidityAverage] = useState('');
  const [notTitle, setNotTitle] = useState('');
  const [notSubTitle, setNotSubTitle] = useState('');
  const [reservoirValue, setReservoirValue] = useState('Sem sensor');
  const { loadData } = useDiscover();
  const { myPlantsData, loadMyPlants } = useMyPlants();

  const pressSwitch = () => {
    setSwitchIsActive(!switchIsActive);
  };

  const getReservoir = () => {
    if (myPlantsData.length === 0) {
      setReservoirValue('Sem sensor');
      return;
    }

    let aux = myPlantsData[0].values?.reservoir;

    if (!aux) return undefined;

    return parseFloat(aux);
  };

  const setReservoir = () => {
    let value = getReservoir();

    if (!value) {
      setReservoirValue('Sem sensor');
      return;
    }

    setReservoirValue(`${value.toFixed(0)}%`);
  };

  const getAverageHumidity = () => {
    let values = 0;
    let leng = 0;

    myPlantsData.forEach((item) => {
      if (item.values?.humidity) {
        values += parseFloat(item.values?.humidity);
        leng++;
      }
    });

    if (values === 0) return 0;

    return values / leng;
  };

  const setNotification = () => {
    let reservoir = getReservoir();
    let humidity = getAverageHumidity();

    if (!reservoir || humidity === 0) {
      setNotTitle('Nenhum sensor encontrado');
      setNotSubTitle('Seu jardim não está sendo monitorado');
      return;
    }

    if (reservoir <= 10) {
      setNotTitle('Seu jardim está em perigo');
      setNotSubTitle('Nível do reservatório em estado crítico');
    } else if (reservoir < 50) {
      setNotTitle('Fique atento ao seu jardim');
      setNotSubTitle('Nível do reservatório baixo');
    } else {
      setNotTitle('Nenhuma notificação');
      setNotSubTitle('Seu jardim está perfeito');
    }
  };

  const setHumidity = () => {
    let value = getAverageHumidity();

    if (value === 0) return 'Sem sensor';

    return `${value.toFixed(0)}%`;
  };

  useEffect(() => {
    setHumidityAverage(setHumidity());
    setReservoir();
    setNotification();
    return () => {};
  }, [myPlantsData]);

  useEffect(() => {
    loadData();
    loadMyPlants();
    return () => {};
  }, []);

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
                  {notTitle}
                </S.NotificationContentTitle>
                <S.NotificationContentText>
                  {notSubTitle}
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
            value={reservoirValue}
            title={'Reservatório de água'}
          />
          <HomeCard
            type="humidity"
            value={humidityAverage}
            title={'Umidade média'}
          />
        </S.Column>
      </S.Row>
    </S.Container>
  );
}
