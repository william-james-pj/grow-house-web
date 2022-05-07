import { Outlet } from 'react-router';

import { useModalDiscover } from '../../hooks/useModalDiscover';

import { Nav } from '../../Components/Nav';
import { ModalDiscover } from '../../Components/ModalDiscover';

import * as S from './styles';

export function Logged() {
  const { isOpen, openModal } = useModalDiscover();
  return (
    <S.Container isModalOpen={isOpen}>
      <Nav />
      <Outlet />
      <ModalDiscover closeModal={() => openModal(false)} isActive={isOpen} />
    </S.Container>
  );
}
