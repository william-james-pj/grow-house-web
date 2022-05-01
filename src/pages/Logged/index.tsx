import { Outlet } from 'react-router';

import { Nav } from '../../Components/Nav';
import { ModalDiscover } from '../../Components/ModalDiscover';

import * as S from './styles';
import { useModalDiscover } from '../../hooks/useModalDiscover';

export function Logged() {
  const { isOpen, openModal } = useModalDiscover();

  return (
    <S.Container>
      <Nav />
      <Outlet />
      <ModalDiscover closeModal={() => openModal(false)} isActive={isOpen} />
    </S.Container>
  );
}
