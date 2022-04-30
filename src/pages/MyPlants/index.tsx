import * as S from './styles';
import { Container, Title } from '../Home/styles';

import { CardMyPlants } from '../../Components/CardMyPlants';

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';

export function MyPlats() {
  return (
    <Container>
      <Title>Minhas plantas</Title>
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
