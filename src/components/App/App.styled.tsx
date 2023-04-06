import styled from '@emotion/styled';
import { colors } from '../../constants';

export const Container = styled.div`
  width: min(400px, 100%);
  padding: 20px 10px;
  border-radius: 20px;

  background-color: ${colors.bg.primary};

  font-size: 22px;
  color: ${colors.text.primary};
  h2 {
    margin: 0;
  }
`;
