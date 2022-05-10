import { useEffect, useState } from 'react';

import { Container, Title } from '../Home/styles';
import { CardDiscover } from '../../Components/CardDiscover';
import { useDiscover } from '../../hooks/useDiscover';

import { Loading } from '../../Components/Loading';
import { SearchBar } from '../../Components/SearchBar';
import { Header } from '../MyPlants/styles';
import { DiscoverType } from '../../config/types';

import * as S from './styles';

export function Discover() {
  const { discoverData, loadData } = useDiscover();
  const [searchText, setSearchText] = useState('');
  const [filterData, setFilterData] = useState<DiscoverType[]>([]);

  const searchFilter = (text: string) => {
    const newData = discoverData.filter((item) => {
      const title = item.name.toUpperCase();
      const textFilter = text.toUpperCase();

      return title.indexOf(textFilter) > -1;
    });
    setFilterData(newData);
    setSearchText(text);
  };

  useEffect(() => {
    loadData();

    return () => {};
  }, []);

  useEffect(() => {
    setFilterData(discoverData);

    return () => {};
  }, [discoverData]);

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
        {filterData.length === 0 ? (
          <S.LoadingContainer>
            <Loading isFullPage={false} />
          </S.LoadingContainer>
        ) : null}

        {filterData.map((item) => {
          return <CardDiscover item={item} key={`discover-${item.id}`} />;
        })}

        {filterData.length % 2 === 1 ? <div></div> : null}
      </S.CarouselContainer>
    </Container>
  );
}
