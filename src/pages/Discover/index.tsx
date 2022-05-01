import { useState } from 'react';

import * as S from './styles';
import { Header } from '../MyPlants/styles';

import { Container, Title } from '../Home/styles';
import { CardDiscover } from '../../Components/CardDiscover';
import { SearchBar } from '../../Components/SearchBar';

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';

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
        <Carousel
          plugins={[
            'fastSwipe',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            768: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },

            480: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
          }}
        >
          <CardDiscover />
          <CardDiscover />
          <CardDiscover />
          <CardDiscover />
          <CardDiscover />
        </Carousel>
      </S.CarouselContainer>
    </Container>
  );
}
