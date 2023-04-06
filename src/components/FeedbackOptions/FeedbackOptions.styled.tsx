import styled from '@emotion/styled';
import { colors, animations } from '../../constants';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  button {
    cursor: pointer;
    border-radius: 10px;
    padding: 10px 15px;
    border: 1px solid ${colors.text.primary};
    background-color: ${colors.button.primary};
    color: ${colors.text.primary};
    transition: background-color ${animations.time} ${animations.cubic};

    /* @media screen and (prefers-reduced-motion) {
      transition: ;
    } */

    &:hover,
    &:focus {
      background-color: ${colors.button.hover};
    }
  }
`;
