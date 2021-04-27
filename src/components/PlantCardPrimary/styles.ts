import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const Container = styled(LinearGradient)`
  flex: 1;
  max-width: 45%;
  width: 148px;
  margin: 10px;
  height: 154px;
  max-height: 154px;
  border-radius: 20px;
`;

export const Content = styled(RectButton)`
  flex: 1;
  padding: 16px;
  border-radius: 20px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${fonts.heading600};
  font-size: 13px;
  line-height: 23px;
  letter-spacing: 0;
  text-align: center;
  color: ${colors.heading};
`;
