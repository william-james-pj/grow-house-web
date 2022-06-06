import { useState } from 'react';
import { useTheme } from 'styled-components';
import { useDarkMode } from '../../hooks/useDarkMode';
import { useNavigate } from 'react-router';

import {
  Moon,
  Grid,
  Home,
  MyPlants,
  Discover,
  Close,
} from '../../Components/Icon';

import * as S from './styles';

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const { toggleTheme } = useDarkMode();

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <S.Container>
      <S.NavContainer>
        <S.NavLogo onClick={() => navigate('/')}>Grow House</S.NavLogo>
        <S.NavMenu isActive={menuOpen}>
          <S.NavList>
            <S.NavItem onClick={handleMenu}>
              <S.NavLink onClick={() => navigate('/')}>
                <S.NavIcons>
                  <Home color={theme.colors.text} />
                </S.NavIcons>
                Home
              </S.NavLink>
            </S.NavItem>
            <S.NavItem onClick={handleMenu}>
              <S.NavLink onClick={() => navigate('/myplants')}>
                <S.NavIcons>
                  <MyPlants color={theme.colors.text} />
                </S.NavIcons>
                MyPlants
              </S.NavLink>
            </S.NavItem>
            <S.NavItem onClick={handleMenu}>
              <S.NavLink onClick={() => navigate('/discover')}>
                <S.NavIcons>
                  <Discover color={theme.colors.text} />
                </S.NavIcons>
                Discover
              </S.NavLink>
            </S.NavItem>
          </S.NavList>
          <S.NavClose onClick={handleMenu}>
            <Close color={theme.colors.text} />
          </S.NavClose>
        </S.NavMenu>

        <S.NavBtns>
          <S.IconTheme onClick={() => toggleTheme()}>
            <Moon color={theme.colors.text} />
          </S.IconTheme>

          <S.NavToggle onClick={handleMenu}>
            <Grid color={theme.colors.text} />
          </S.NavToggle>
        </S.NavBtns>
      </S.NavContainer>
    </S.Container>
  );
}
