import { useState } from 'react';

import { SearchBar } from '../../Components/SearchBar';
import { CardMyPlants } from '../../Components/CardMyPlants';

import * as S from './styles';
import { Container, Title } from '../Home/styles';

export function MyPlats() {
  const [searchText, setSearchText] = useState('');

  const searchFilter = (text: string) => {
    setSearchText(text);
  };

  return (
    <Container>
      <S.Header>
        <Title>Minhas plantas</Title>
        <SearchBar
          placeholder={'Pesquise pelo nome'}
          onChangeText={searchFilter}
          value={searchText}
        />
      </S.Header>
      <S.CarouselContainer>
        <CardMyPlants />
        <CardMyPlants />
        <CardMyPlants />
        <CardMyPlants />
        <CardMyPlants />
        <CardMyPlants />
      </S.CarouselContainer>
    </Container>
  );
}
