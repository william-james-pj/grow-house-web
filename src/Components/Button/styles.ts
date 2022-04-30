import styled from 'styled-components';

export const ButtonStyled = styled.button`
  height: 55px;
  border-radius: 8px;
  font-weight: 700;
  text-transform: uppercase;
  border: 0;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: filter 0.2s;

  :not(:disabled):hover {
    filter: brightness(0.9);
  }

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
