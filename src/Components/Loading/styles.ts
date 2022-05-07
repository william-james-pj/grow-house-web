import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
