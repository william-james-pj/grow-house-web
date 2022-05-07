import { useState } from 'react';

import { Container, Title } from '../Home/styles';
import { CardDiscover } from '../../Components/CardDiscover';
import { SearchBar } from '../../Components/SearchBar';

import * as S from './styles';
import { Header } from '../MyPlants/styles';

export function Discover() {
  const [searchText, setSearchText] = useState('');

  const searchFilter = (text: string) => {
    setSearchText(text);
  };

  return (
    <Container>
      <Header>
        <Title>Descubra novas plantas</Title>
        <SearchBar
          placeholder={'Pesquise pelo nome'}
          onChangeText={searchFilter}
          value={searchText}
        />
      </Header>
      <S.CarouselContainer>
        <CardDiscover />
        <CardDiscover />
        <CardDiscover />
        <CardDiscover />
        <CardDiscover />
      </S.CarouselContainer>
    </Container>
  );
}
