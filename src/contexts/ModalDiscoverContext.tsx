import { createContext, ReactNode, useState } from 'react';

type ModalDiscoverContextType = {
  isOpen: boolean;
  openModal: (open: boolean) => void;
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

  const openModal = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <ModalDiscoverContext.Provider value={{ isOpen, openModal }}>
      {props.children}
    </ModalDiscoverContext.Provider>
  );
}
