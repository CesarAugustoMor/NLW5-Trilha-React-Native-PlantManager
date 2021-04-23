import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.TouchableOpacity`
  background: ${colors.green};
  height: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 17px;
  font-family: ${fonts.heading500};
  color: ${colors.white};
`;
