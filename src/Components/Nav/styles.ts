import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown, respondToUp } from '../../config/respondTo';
import { breakpointsDown } from '../../config/breakpoints';
import { delay } from '../../config/variables';

type Active = {
  isActive: boolean;
};

export const Container = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  z-index: 99;
  background: ${({ theme }) => theme.colors.background};
  transition: ${delay};

  ${respondToUp.sm`
    top: 0;
  `}

  ${respondToDown.sm`
    bottom: 0;
    box-shadow: ${'0 -1px 4px rgba(0,0,0,0.15)'};
  `}
`;

export const NavContainer = styled.div`
  max-width: 986px;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: 1.5rem;
  margin-right: 1.5rem;

  ${respondToUp.sm`
    height: calc(3rem + 1.5rem);
    column-gap: 1rem;
  `}

  ${respondToUp.md`
    margin-left: auto;
    margin-right: auto;
  `}
`;

export const NavLogo = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavMenu = styled.div<Active>`
  @media (max-width: ${breakpointsDown['sm']}) {
    position: fixed;
    bottom: ${({ isActive }) => (isActive ? '0' : '-100%')};
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.card};
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
  }

  ${respondToDown.xs`
    padding: 2rem 0.25rem 4rem;
  `}

  ${respondToUp.sm`
    margin-left: auto;
  `}
`;

export const NavList = styled.ul`
  ${respondToDown.sm`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  `}

  ${respondToDown.xs`
    column-gap: 0;
  `}

  ${respondToUp.sm`
    display: flex;
    column-gap: 2rem;
  `}
`;

export const NavItem = styled.li`
  -webkit-tap-highlight-color: transparent;
`;

export const NavIcons = styled.div`
  margin-bottom: 5px;
  ${respondToUp.sm`
      display: none;
  `}
`;

export const NavLink = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${fonts.sm};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;

  cursor: pointer;
  user-select: none;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavClose = styled.div`
  position: absolute;
  right: 1.3rem;
  bottom: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  -webkit-tap-highlight-color: transparent;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${respondToUp.sm`
      display: none;
  `}
`;

export const NavBtns = styled.div`
  display: flex;
  align-items: center;
`;

export const NavToggle = styled.div`
  height: 19px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  :hover {
    color: ${({ theme }) => theme.colors.text};
  }

  ${respondToUp.sm`
      display: none;
  `}
`;

export const IconTheme = styled.span`
  height: 19px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 1rem;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
