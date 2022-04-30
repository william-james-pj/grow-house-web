import { Outlet } from 'react-router';

import { Nav } from '../../Components/Nav';

import * as S from './styles';

export function Logged() {
  return (
    <S.Container>
      <Nav />
      <Outlet />
    </S.Container>
  );
}
