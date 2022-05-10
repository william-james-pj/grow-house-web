import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Header = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${respondToDown.md`
    padding: 0 32px;
  `}

  ${respondToDown.sm`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const CarouselContainer = styled.div`
  width: 100%;
  margin-top: 32px;

  padding: 0 0 64px 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: auto;
  row-gap: 32px;
  justify-items: center;

  ${respondToDown.sm`
    padding: 0 16px 64px;

    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
  `}
`;

export const EmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 64px;
`;

export const EmptyIconContainer = styled.div`
  width: 65px;
  height: 65px;
`;

export const EmptyTitle = styled.p`
  margin-top: 15px;
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.md};
  font-weight: 700;
  user-select: none;
  text-align: center;
`;

export const EmptySubTitle = styled.p`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.normal};
  font-weight: 700;
  user-select: none;
  text-align: center;
`;
