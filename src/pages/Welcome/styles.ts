import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

export const Title = styled.Text`
  margin-top: 42px;
  margin-left: 40px;
  margin-right: 40px;

  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 38px;
`;

export const SubTitle = styled.Text`
  padding: 0 32px;
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const Button = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 16px;

  background: ${colors.green};
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${colors.white};
`;
