import styled from 'styled-components';

type WrapperProps = {
  isFullPage: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  background: ${(props) => props.theme.colors.background};
  width: ${({ isFullPage }) => (isFullPage ? '100vw' : '100%')};
  height: ${({ isFullPage }) => (isFullPage ? '100vh' : '100%')};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
