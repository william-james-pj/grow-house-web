import styled from 'styled-components';
// import * as fonts from '../../config/fonts';
// import { respondToDown } from '../../config/respondTo';

type ContainerProps = {
  isModalOpen: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100vw;
  height: ${({ isModalOpen }) => (isModalOpen ? '100vh' : 'auto')};

  position: relative;

  display: flex;
  justify-content: center;

  overflow-y: ${({ isModalOpen }) => (isModalOpen ? 'hidden' : 'auto')};
  overflow-x: hidden;
`;
