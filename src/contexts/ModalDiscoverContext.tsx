import { createContext, ReactNode, useState } from 'react';
import { DiscoverType } from '../config/types';

type ModalDiscoverContextType = {
  isOpen: boolean;
  openModal: (open: boolean) => void;
  discoverItem?: DiscoverType;
  setNewDiscoverItem: (item: DiscoverType) => void;
};

type ModalDiscoverContextProviderProps = {
  children: ReactNode;
};

export const ModalDiscoverContext = createContext(
  {} as ModalDiscoverContextType,
);

export function ModalDiscoverProvider(
  props: ModalDiscoverContextProviderProps,
) {
  const [isOpen, setIsOpen] = useState(false);
  const [discoverItem, setDiscoverSelected] = useState<DiscoverType>();

  const setNewDiscoverItem = (item: DiscoverType) => {
    setDiscoverSelected(item);
  };

  const openModal = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <ModalDiscoverContext.Provider
      value={{ isOpen, openModal, discoverItem, setNewDiscoverItem }}
    >
      {props.children}
    </ModalDiscoverContext.Provider>
  );
}
