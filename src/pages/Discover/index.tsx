import * as S from './styles';
import { Container, Title } from '../Home/styles';

import { CardDiscover } from '../../Components/CardDiscover';

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';

export function Discover() {
  return (
    <Container>
      <Title>Descubra novas plantas</Title>
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
