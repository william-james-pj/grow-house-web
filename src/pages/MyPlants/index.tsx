import { useEffect, useState } from 'react';

import { SearchBar } from '../../Components/SearchBar';
import { CardMyPlants } from '../../Components/CardMyPlants';
import { useMyPlants } from '../../hooks/useMyPlants';

import * as S from './styles';
import { Container, Title } from '../Home/styles';
import { MyPlantsType } from '../../config/types';

export function MyPlats() {
  const { myPlantsData, loadMyPlants } = useMyPlants();
  const [searchText, setSearchText] = useState('');
  const [filterData, setFilterData] = useState<MyPlantsType[]>([]);

  const searchFilter = (text: string) => {
    const newData = myPlantsData.filter((item) => {
      const title = item.name.toUpperCase();
      const surname = item.surname.toUpperCase();
      const textFilter = text.toUpperCase();

      return title.indexOf(textFilter) > -1 || surname.indexOf(textFilter) > -1;
    });
    setFilterData(newData);
    setSearchText(text);
  };

  useEffect(() => {
    loadMyPlants();

    return () => {};
  }, []);

  useEffect(() => {
    setFilterData(myPlantsData);

    return () => {};
  }, [myPlantsData]);

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
        {filterData.map((item) => {
          return <CardMyPlants item={item} key={`discover-${item.id}`} />;
        })}

        {filterData.length % 2 === 1 ? <div></div> : null}
      </S.CarouselContainer>
    </Container>
  );
}
