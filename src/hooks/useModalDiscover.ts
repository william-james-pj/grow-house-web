import { useContext } from 'react';
import { ModalDiscoverContext } from '../contexts/ModalDiscoverContext';

export function useModalDiscover() {
  const value = useContext(ModalDiscoverContext);

  return value;
}
