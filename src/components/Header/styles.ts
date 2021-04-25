import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  margin-top: ${getStatusBarHeight()}px;
`;

export const Title = styled.Text`
  font-family: ${fonts.heading300};
  font-size: 32px;
  line-height: 36px;
  color: ${colors.heading};
`;

export const SubTitle = styled.Text`
  font-family: ${fonts.heading600};
  font-size: 32px;
  line-height: 36px;
  color: ${colors.heading};
`;

export const UserImg = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;
