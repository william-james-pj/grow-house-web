import * as S from './styles';
import { Container, Title } from '../Home/styles';

import { SearchBar } from '../../Components/SearchBar';
import { CardMyPlants } from '../../Components/CardMyPlants';

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { useState } from 'react';

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
          <CardMyPlants />
          <CardMyPlants />
          <CardMyPlants />
          <CardMyPlants />
          <CardMyPlants />
        </Carousel>
      </S.CarouselContainer>
    </Container>
  );
}
